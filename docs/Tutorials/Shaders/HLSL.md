# Porting a basic HLSL Shader

---

## Preface

---

> Original [Source](https://iftytifty.net/forum/viewtopic.php?p=10#p10)

New Vegas Reloaded is a great piece of software, which hooks into New Vegas' renderer and adds some new effects. Such as making many statics cast shadows, darkening shadows, adding AO for nice object shading (fake mini-shadows), rain puddles during rainy weather...And colour adjustment with HLSL shaders!

Unfortunately, it's not quite as pick-up-and-go as it is for ReShade, or ENBSeries. This is not out of laziness, but out of near two decades of work on/off by the community. It's not just throwing post processing on top, but doing low level engine stuff.

But that does not mean we can't add our own HLSL code!

We just got to modify the source code, add our own shader, and port the shader code from those other cool projects into NVR!

Sounds easy, right?

Absolutely not.

Which is why this tutorial is being made! Let's get started.

---

## Requirements

---

We will need 4 tools:

- [`Git`](https://git-scm.com/download/win)
- [`Visual Studio Community 2019`](https://visualstudio.microsoft.com/vs/community/)
- [`HLSL Tools for Visual Studio`](https://marketplace.visualstudio.com/items?itemName=TimGJones.HLSLToolsforVisualStudio)
- [`Notepad++`](https://notepad-plus-plus.org/downloads/)

We use `Git` to download the source code, `Visual Studio` to edit it, `HLSL Tools` to make editing the shader code easier, and `Notepad++` to make editing the settings file easy. Sounds complex, but it's more just tedious than anything. So download and install those programs, and let's get going.

First things first, create a folder where we'll do all of our work. I just named mine `_GitHub`. Very creative, I know.

Now go into that folder, and right-click -> `Git Bash Here` -> Paste in the following when the command line appears:

```bash
git clone -b nightly https://github.com/mchaptel/TESReloaded10.git --recurse-submodules --remote-submodules
```

This will have created a folder called `TESReloaded10` in the folder. Double click it, and you'll see something that looks like this:

![01](/img/01.png "01")

Right-click on TESReloaded.sln -> Open with -> Microsoft Visual Studio 2019.

![02](/img/02.png "02")

Give it a second to load, and you'll see Visual Studio pop up and look like the following:

![03](/img/03.png "03")

Congratulations, we've now ready to start doing code stuff! Unfortunately, we're now going to start doing code stuff.

---

## Tutorial

---

For this tutorial, because I'm only interested in doing stuff for New Vegas, we will be making modifications to the `NewVegasReloaded` project. The process should be similar for the other two, but I'm no authority on that.

We have several things we need to do:

1. Get the game data we want to pass to our shader (day/night, interior/exterior, etc)
1. Define our shader in the `NewVegasReloaded` code
1. Create our shader file
1. Port over the ENB shader, which will involve changing up the hlsl code, as well as editing a bit of the C++ code

This is all very daunting for people doing this for the first time. It was for me, and poor Mathieu C held my baby bird hands every step of the way. And this is my way of paying it forward.

We will be doing our work in `ShaderManager.cpp`, `ShaderManager.h`, and `NewVegasReloaded.dll.defaults.toml`. They function as follows:

- `ShaderManager.cpp` -> Where we calculate the values given to our shader, and call for it to be rendered
- `ShaderManager.h` -> Where we define the values, there's not much to do for this
- `NewVegasReloaded.dll.defaults.toml` -> Where we define the settings for our shader

The first two can be found right inside `Visual Studio`, but the `.toml` file we will edit with `Notepad++` (Windows' built in Notepad works, but it's clunky and yucky to use), and is located in `TESReloaded10\Extra\NewVegasReloaded.dll.defaults.toml`
