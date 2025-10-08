// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Kunturñawi Software',
  tagline: 'Documentación',
  favicon: 'img/favicon.ico',

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  // (Opcional mientras corriges enlaces)
  onBrokenLinks: 'warn',              // <- antes: 'throw'
  onBrokenMarkdownLinks: 'warn',

  // i18n: tu contenido parece estar en español
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],                  // si luego agregas inglés: ['es', 'en']
  },

  organizationName: 'facebook',
  projectName: 'docusaurus',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Si usas "edit this page", cámbialo a tu repo
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // Si NO usas el blog, desactívalo para evitar posts que enlazan /docs/intro
        blog: false,
        // Si SÍ lo usas, pon true y edita/borra los posts de ejemplo que apunten a /docs/intro
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: { type: ['rss', 'atom'], xslt: true },
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Kunturñawi Software',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentación',
          },
          // Si vuelves a activar el blog arriba, vuelve a mostrar este item:
          // { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              // Evita /docs/intro, apunta al índice de docs (ruta estable)
              { label: 'Documentación', to: '/docs' },
            ],
          },
          {
            title: 'Comunidad',
            items: [
              { label: 'Stack Overflow', href: 'https://stackoverflow.com/questions/tagged/docusaurus' },
              { label: 'Discord', href: 'https://discordapp.com/invite/docusaurus' },
              { label: 'Twitter', href: 'https://twitter.com/docusaurus' },
            ],
          },
          {
            title: 'Más',
            items: [
              // Reactiva si activas el blog
              // { label: 'Blog', to: '/blog' },
              { label: 'GitHub', href: 'https://github.com/facebook/docusaurus' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
