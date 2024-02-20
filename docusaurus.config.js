// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'New Vegas Reloaded',
  tagline: 'Wiki to keep all of the content',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://dlpnd.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/nvr-wiki/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'dlpnd', // Usually your GitHub org/user name.
  projectName: 'dlpnd.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/dlpnd/nvr-wiki/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/dlpnd/nvr-wiki/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    'docusaurus-plugin-image-zoom', // can also just be 'image-zoom'
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Declare some <meta> tags
      metadata: [
        { name: 'keywords', content: 'new, vegas, reloaded, shaders, nvr, tesreloaded, enb' },
        { name: 'description', content: 'New Vegas Reloaded is a custom graphical extender for Obsidian\'s Fallout: New Vegas. It overrides the rendering pipeline to inject various effects that can be completely configured.' },
        { name: 'author', content: 'New Vegas Reloaded Community' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      // Replace with your project's social card
      image: 'img/nvr-social-card.png',
      algolia: {
        appId: 'N75JTB7151',
        apiKey: '76d537c5d12a397607f47a7a782a20be',
        indexName: 'nvr-wiki',
        contextualSearch: false,
      },
      colorMode: {
        defaultMode: "dark",
        respectPrefersColorScheme: false,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: 'New Vegas Reloaded',
        logo: {
          alt: 'New Vegas Reloaded - Wiki Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'introductionSidebar',
            position: 'left',
            label: 'Introduction',
          },
          { to: '/blog', label: 'Changelog', position: 'left' },
          { to: '/docs/gallery', label: 'Gallery', position: 'left' },
          {
            href: 'https://github.com/dlpnd/nvr-wiki',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://github.com/dlpnd/nvr-wiki',
            label: 'Discord',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      zoom: {
        selector: '.gallery img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(0, 0, 0)'
        },
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        }
      }
    }),

};

module.exports = config;
