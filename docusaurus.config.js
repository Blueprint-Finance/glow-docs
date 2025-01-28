// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */

require('dotenv').config();

const config = {
  title: 'Glow Docs',
  tagline: 'DeFi protocol',
  favicon: 'img/logo.png',

  // Set the production url of your site here
  url: 'https://docs.glow-finance.xyz',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Glow-Finance', // Usually your GitHub org/user name.
  projectName: 'Glow-Finance', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          path: './src', // or './pages' if you use a different folder
          routeBasePath: '/', // Serve docs at the root
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Blueprint-Finance/glow-docs/tree/main',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Blueprint-Finance/glow-docs/tree/main',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/mark.svg',
      metadata: [
                    { name: 'twitter:card', content: 'summary_large_image' },
                    { name: 'twitter:title', content: 'Glow Docs' },
                    { name: 'twitter:description', content: 'DeFi protocol' },
                    { name: 'twitter:image', content: 'https://docs.glow.xyzdocs.glow-finance.xyz/img/mark.svg' },
                    { property: 'og:image', content: 'https://docs.glow-finance.xyz/img/mark.svg' },
                  ],
      navbar: {
        logo: {
          alt: 'Glow Logo',
          src: 'img/mark.svg',
        },
        items: [
          {
              type: "doc",
              docId: "Overview/welcome",
              position: "left",
              label: "Docs"
          },
        /* {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },*/
        ],
      },
      footer: {
        style: 'dark',
        /*links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],*/
      },


              algolia: {
                    appId: process.env.ALGOLIA_APP_ID,
                    apiKey: process.env.ALGOLIA_API_KEY,
                    indexName: 'glowfinance',
                    },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
