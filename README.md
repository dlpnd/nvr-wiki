# New Vegas Reloaded - Wiki

![](https://dlpnd.github.io/nvr-wiki/img/nvr-social-card.png)

[![Discord Link](https://img.shields.io/discord/713369537948549191?color=black&label=Discord&style=for-the-badge)](https://discord.com/invite/QgN6mR6eTK)

New Vegas Reloaded is the Fallout: New Vegas part of TESReloaded, a custom made graphical extender for Bethesda games.

It overrides the rendering pipeline to inject various effects that can be completely configured.

This repo contains the source for the **Wiki** of New Vegas Reloaded. If you want to download the mod and interact with the community, please reach out on the Discord linked above.

## Source

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Requirements

* NodeJS v21.6.2

### Installation

```
yarn
```

### Local Development

```
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
USE_SSH=true yarn deploy
```

Not using SSH:

```
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
