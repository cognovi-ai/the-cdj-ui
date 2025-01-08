import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The CDJ UI Docs',
  tagline: 'Official documentation for The CDJ UI',
  favicon: 'img/favicon.ico',

  url: 'https://cognovi-ai.github.io',
  baseUrl: '/the-cdj-ui/',

  // GitHub pages deployment config.
  organizationName: 'Cognovi',
  projectName: 'the-cdj-ui',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'ignore',

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
          path: '../docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'The CDJ UI Docs',
            style: {
              fontSize: '1.2em',
              fontWeight: 'bold',
            },
          },
          {
            href: 'https://github.com/cognovi-ai/the-cdj-ui',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'About',
            items: [
              {
                label: 'Cognovi',
                href: 'https://github.com/cognovi-ai',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/cognovi-ai/the-cdj-ui',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} The CDJ UI Docs. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
