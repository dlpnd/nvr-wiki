---
sidebar_position: 4
---

# Frequently Asked Questions

---

## How to edit settings?

- To open the menu, press `O` in game.
- To navigate the menus, use the `arrow` keys.
- Use `Numpad+/-` to change the values.
- `Numpad Enter` lets you manually edit values, using `Numpad Keys`.
- Press `Return` to save the settings.
- `F11` takes a `screenshot` in `jpg` format without the `UI` and places it in `<game_root_folder>/Screenshots`
- These shortcuts can be changed in the: `NewVegasReloaded/nvse/Plugins/NewVegasReloaded.dll.toml` file.

:::note
More in [Menu](/docs/Main#menu)
:::

### Keyboards without `Numpad`

For keyboards without `Numpad`, you can copy this section to replace the one in the `toml` file:

```toml
[_Main.Menu.Keys]
KeyAdd = 18
KeyDown = 208
KeyEditing = 156
KeyEnable = 24
KeyLeft = 203
KeyPageDown = 209
KeyPageUp = 201
KeyRight = 205
KeySave = 28
KeySubtract = 45
KeyUp = 200
```

This config uses `E` instead of `Numpad+` and `X` instead of `Numpad-`.

:::note
Direct entry of values is not possible for now.
:::

## How do you install a preset?

Currently in `NVR` you have to put it in `NewVegasReloaded\nvse\Plugins`, however it's much easier to create a new mod in `MO2` then making the folders `nvse` and `Plugins` then putting the preset in there.

## I installed NVR but my main title screen is black

Disable the `replaceIntro` setting in the config or if you're feeling fancy, try this mod that replaces it: [Intro Redone](https://www.nexusmods.com/newvegas/mods/72628)

## Why is performance bad?

First make sure your using the latest version of `NVR`, follow the other `FAQ` to evaluate any issues.

It is recommended that you follow this great guide made by `Wall_SoGB#2421`: [FalloutNV-Performance-Guide](https://wallsogb.github.io/FalloutNV-Performance-Guide)

## Why does my game crash on startup?

Could be several things:

- Having `Enhanced Camera` with `Shadows` enabled see [Enhanced Camera](#enhanced-camera)
- Could also be because of using a preset for an older version.
- On Intel, use version `1.10.1`
- Make sure `NVTF` has the following setting:

```ini
bModifyDirectXBehavior = 1
```

## Why is my sky fully white?

The effects `Volumetric Fog` and `GodRays` can mess with the sky.

Disable them or try some settings.

You can check [Discord](https://discord.com/invite/QgN6mR6eTK) in the [#⁠preset-share](https://discord.com/channels/344843935123898369/1030630380455350272) where these settings have been tweaked by a member of the community.

## Why am I getting glitchy shadows with a black diagonal in the sky?

This is a `dxvk` bug. Set the following option in the `<game_root_folder>/dxvk.conf`

```ini
d3d9.floatEmulation = strict
```

## Why is my character shadow missing its head?

`Enhanced Camera` creates a headless body, so that's what the game sees when it tries to render shadows. You can change these settings to get the head back, but it might create other weirdness.

## Where can I see the list of planned changes?

There is a [Trello](https://trello.com/b/HgiJIVU7/tesr-roadmap)

## Why is the menu not readable when using ENB?

![Speed Hack](/img/enb-speed-hack.png "Speed Hack")

Disable `Speed Hack` in `ENB` to fix this.

## How to disable the black bars?

They are created by the `Cinema` Shader. Disable it or set its `AspectRatio` setting to 1 or less.

:::note
More in [Cinema](/docs/Shaders/Cinema)
:::

## How to remove the black shadowed spheres around ash piles?

![Ash Piles](/img/mesh-alphas.png "Ash Piles")

Use this zip to replace the `Alpha Property` of the `Meshes` (credits [@𝔹𝕒𝕝𝕖](https://www.nexusmods.com/newvegas/users/90554463))

- New Vegas: [AshPiles.rar](/zip/AshPiles.rar)
- TTW: [AshpilesTTW.rar](/zip/AshpilesTTW.rar)

## Why is water super transparent?

![Transparent](/img/water-refraction.png "Transparent")

`Water Shaders` requires `Reflections` and `Refractions` to be enabled in the game's `ini`.

## Why does the depth buffer look like it has the wrong size?

![Depth Buffer](/img/depth-buffer.png)

This is due to a wrong value in the `fallout.ini.` The easiest fix is to replace the values with the ones from the `ini` in [Viva New Vegas](https://vivanewvegas.moddinglinked.com/utilities.html#customIni)

## Why do black squares appear around trees/tumbleweeds?

![MSAA](/img/msaa.png)

To fix, `enable` MSAA in launcher options.

:::note
if using `dxvk`, also set `bTransparencyMultisampling` to `1`
:::

## Why are nights/interiors too bright/dark?

You need to tweak the default of the `ImageAdjust` Shader which might not be right for your weather/lighting mod.

## Why are there lines over the screen?

![DXVK](/img/dxvk-lines.jpg)

This bug is caused by using an older version of `dxvk`

## Can New Vegas Reloaded be used with mod `x`?

New Vegas Reloaded currently has the following conflics with:

### Enhanced Camera

<details>
  <summary>Example Enhanced Camera Config</summary>

```ini
[Main]
; Enables a visible body when in first person
bEnableFirstPersonBody=1

; Enable head in first person (For NVR shadows)
bEnableHeadFirstPerson=1

; Enables the head bob when in first person
; Note: This overrides the camera position and may not be as compatible with some animations
bEnableHeadBob=0

; Enables shadows on the player when in first person
bFirstPersonShadows=0

; Enables arms on the first person body when your weapons are holstered
bVisibleArmsWeaponHolstered=1

; Enables a visible body when opening/closing the pipboy menu
bVisibleBodyPipboyMenu=1

; Enables a fake first person during events where the game switches to third person
bFirstPersonSitting=1
bFirstPersonKnockout=1
bFirstPersonDeath=1
bFirstPersonCannibal=1
bFirstPersonMisterSandman=1
bFirstPersonVATS=0

; Allows the camera to rotate during sitting/knockout animations
bFirstPersonAnimCameraRotation=1
bThirdPersonAnimCameraRotation=1

; Prevents the chase cam distance from being reset during forced third person animations
bPreventChaseCamDistanceReset=1

; Sets the minimum distance of the chase cam during forced third person animations
fVanityModeForceDefaultOverride=300.0

; Sets the maximum angle you can look down while sitting
; Valid values between 0 to 90, Game Default: 40
fSittingMaxLookingDownOverride=70.0

; Can be set to a high value (e.g. 15.0) to disable zooming in during dialog
; Unlike the fDlgFocus setting in Fallout.ini, this does not affect VATS
fDlgFocusOverride=0.0

; Sets camera position relative to the head node
;was X=0.0 Y=14.0 Z=6.0  z-11.79
fCameraPosX=1.49
fCameraPosY=17.79
fCameraPosZ=-3.79

; Moves the camera up to prevent seeing underground when dead or knocked out
fCameraZOffset=12.0

; Enables experimental third person arms when in first person
bUseThirdPersonArms=0

; Enables first person iron sights for third person arms
bTPArmsEnableIronSights=1

; Enables visibility of first person arms when opening/closing the pipboy menu
bTPArmsPipboyAnim=1
```

</details>

### ENB

Not compatible with `New Vegas Reloaded` version `3.4`, but may be compatible latest builds, although there are many broken effecs, such as `Interior/Exterior` detection and `Fog`.

For the transparency issue, use this [fix](https://www.nexusmods.com/newvegas/mods/49420/)

### NVHR

Can be used with `NVR`.

:::note
NVHR is not installed via MO2. It must be manually copied into the root folder. Make sure to check the mod's Nexus page for more info.
:::

### TTW

Yes.

### dxvk

![float point](/img/dxvk-strict-emulation.png "float point")

`dxvk` is recommended for most users.
It depends on your install, but it can for most recent configs dramatically improve FPS.
The setting "float emulation" should be set to "strict".

```ini
d3d9.floatEmulation = Strict
```

:::note
Its better to follow the [Performance Guide](https://wallsogb.github.io/FalloutNV-Performance-Guide/) for the most stable New Vegas experience.
:::

### ReShade

ReShade works but can pose problems with `Depth Buffer` effects, which require disabling `MSAA` in the launcher and `NVR`.

To use `dxvk` and `ReShade` together, first install latest `ReShade` and choose `Vulkan` option during install. Then, install `dxvk`.

## NVR + dxvk + ReShade

This is tested on `nvidia` GPU, `Windows 11`, latest `nvidia` drivers, `DLDSR` is `disabled` in nvidia control panel but `Fallout New Vegas` still set to native resolution, all other scaling features are `off`, `Fallout New Vegas` profile are setup according to [FalloutNV-Performance-Guide](https://wallsogb.github.io/FalloutNV-Performance-Guide) for the nvidia control panel, ReShade `5.25` and `5.6`, latest `NVR` nightly

1. Install `NVR`
1. Install `dxvk` according to [FalloutNV-Performance-Guide](https://wallsogb.github.io/FalloutNV-Performance-Guide)
1. Install `ReShade` in Global `Vulkan` mode
1. Turn `off` in game `MSAA`
1. Run the game

:::tip Note
If correct `depth` is `visible/selectable` by `ReShade` then enjoy.
:::

:::caution
If the correct `depth` is `selected` but at the wrong `resolution` (for example your game is set to 2560x1440p but the correct `depth buffer` is 2560x2048).
:::

:::danger
`MSAA` should only be `disabled` if trying to use `ReShades` `Depth Buffer`, or `ENB`. In any other circumstance it should be left on, it has a substantial visual cost.
:::

Then:

1. Take the `depth buffer` height, in this example: `2048` and devide by the games height of `1440`, which will give you a ratio of `1.422`
1. Add `Reshade_Depth_input_y_scale` to your ReShade global processor definition and set it to `1.422`

:::note Math Calculations
You can enable `Display Depth` `Shader` in `ReShade`

It will display your depth map.

It also has the option to manually set the `ratio` of the `Depth Map` visually.

You can use it to get the `ratio` needed but you will still need to edit the `ini`
:::

:::note
Most depth base effect should works. Some still doesnt and dont know how to fix.
:::

## Any recommended mods for best experience?

- [lStewieAl tweaks](https://www.nexusmods.com/newvegas/mods/66347) to improve performance.
- [dxvk](https://github.com/doitsujin/dxvk/releases) for better performance and some bugfixes.
- [MoonlightNVSE](https://www.nexusmods.com/newvegas/mods/77683) to get accurate night shadows.
- [DNWeathers](https://www.nexusmods.com/newvegas/mods/75437) for less extreme lighting.
- [DNRealism](https://www.nexusmods.com/newvegas/mods/80902) Alternative weather mod.
- [Simple Total Fog Remover](https://www.nexusmods.com/newvegas/mods/77735) to fully replace `Vanilla Fog`.
- [PointLightFlashLight](https://www.nexusmods.com/newvegas/mods/77787)
