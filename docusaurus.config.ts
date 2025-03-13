
import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { NavbarItem } from '@docusaurus/theme-common';


const config: Config = {
  title: "Aarnav's Site",
  tagline: 'Too Lazy to write a tagline',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://aarnav.rf.gd',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onBrokenAnchors: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  scripts: [
    {
      src: 'https://plausible.viren070.me/js/script.js',
      defer: true,
      'data-domain': 'aarnav.rf.gd',
    },
  ],
  future: {
    experimental_faster: {
      swcJsLoader: true,
      swcJsMinimizer: true,
      swcHtmlMinimizer: true,
      lightningCssMinimizer: true,
      rspackBundler: false,
      mdxCrossCompilerCache: true,
    },
  },
  presets: [
    [
      'classic',
      {
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.8,
          filename: 'sitemap.xml',
        },
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          routeBasePath: '/',
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: "Aarnav's Site",
      logo: {
        alt: 'Guides Logo',
        src: 'img/logo-light.png',
        srcDark: 'img/logo-dark.png',
      },
      items: [
        // Add the custom navbar item
        // Add other navbar items
        {
          href: 'https://github.com/Aarnav-Tech/',
          position: 'right',
          className: 'header-github-link',
          title: 'Visit My GitHub',
          'aria-label': 'GitHub Account',
        },
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Categories',
          items: [
            {
              label: 'Projects',
              to: 'category/my-lame-python-projects',
            },
            {
              label: 'Notes (SCI)',
              to: 'category/science-notes',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Aarnav-Tech',
            },
          ],
        },
      ],
      copyright: `Copyright ©${new Date().getFullYear()} Aarnav Lokesh.`,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    docs: {
      sidebar: {
        autoCollapseCategories: true,
        hideable: true,
      },
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexDocs: true,
        indexPages: true,
        language: ['en'],
      },
    ],
  ],
};

export default config;