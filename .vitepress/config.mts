import { defineConfig, UserConfig } from 'vitepress';
import { withSidebar } from 'vitepress-sidebar';
import { VitePressSidebarOptions } from 'vitepress-sidebar/types';

const defaultLocale = 'en';
const defineSupportLocales = [
  defaultLocale,
  'vi',
  'de',
  'zh-cn',
  'zh-tw',
  'id',
  'ja'
];
const host = 'https://hachimi.noccu.art'

const commonSidebarConfig: VitePressSidebarOptions = {
  collapsed: false,
  capitalizeFirst: true,
  useTitleFromFileHeading: true,
  useTitleFromFrontmatter: true,
  useFolderTitleFromIndexFile: true,
  sortMenusByFrontmatterOrder: true,
  manualSortFileNameByPriority: [
    'hachimi',
    'about.md',
    'getting-started.md',
    'getting-started-jp.md',
    'getting-started-other.md',
    'troubleshooting.md',
    'built-in-gui.md',
    'config.md',
    'faqs.md',
    'auto-translation.md',

    'translation-guide',
    'welcome.md',
    'translation-system.md',
    'repo-config.md',
    'translating.md',
    'using-zokuzoku.md',
    'using-umatl.md'
  ]
};

const vitePressSidebarConfig = [
  ...defineSupportLocales.map((lang) => {
    return {
      ...commonSidebarConfig,
      documentRootPath: defaultLocale === lang ? '/docs/' : `/${lang}/docs/`,
      resolvePath: defaultLocale === lang ? '/docs/' : `/${lang}/docs/`,
      ...(defaultLocale === lang ? {} : { basePath: `/${lang}/docs/` })
    };
  })
];

// https://vitepress.dev/reference/site-config
const vitePressConfig: UserConfig = {
  title: "Hachimi Edge",
  description: "Game translation and enhancement mod for Umamusume. Working, maintained fork of Hachimi, with fixes, updates, and improvements.",
  head: [
    ['link', { rel: "shortcut icon", href: "/favicon.ico"}],
    ["meta", { name: "keywords", content: "umamusume, hachimi, umapatcher, translation, game mod, patch, edge, runtime error, patching failed"}]
  ],
  themeConfig: {
    logo: "/assets/logo.png",
    socialLinks: [
      { icon: 'github', link: 'https://github.com/kairusds/Hachimi-Edge' },
      { icon: 'discord', link: 'https://discord.gg/BVEt5FcxEn' }
    ]
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Screenshots', link: '/#screenshots' },
          { text: 'Docs', link: '/docs' },
          { text: 'Credits', link: '/credits' }
        ]
      }
    },
    vi: {
      label: 'Tiếng Việt',
      lang: 'vi',
      themeConfig: {
        nav: [
          { text: 'Trang chủ', link: '/vi/' },
          { text: 'Ảnh minh họa', link: '/vi/#screenshots' },
          { text: 'Hướng dẫn', link: '/vi/docs' }
        ]
      }
    },
    de: {
      label: 'Deutsch',
      lang: 'de',
      themeConfig: {
        nav: [
          { text: 'Startseite', link: '/de/' },
          { text: 'Screenshots', link: '/de/#screenshots' },
          { text: 'Dokumentation', link: '/de/docs' }
        ]
      }
    },
    'zh-cn': {
      label: '简体中文',
      lang: 'zh-cn',
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh-cn/' },
          { text: '截图', link: '/zh-cn/#screenshots' },
          { text: '文档', link: '/zh-cn/docs' },
          { text: '鸣谢', link: '/zh-cn/credits' }
        ]
      }
    },
    'zh-tw': {
      label: '繁體中文',
      lang: 'zh-tw',
      themeConfig: {
        nav: [
          { text: '首頁', link: '/zh-tw/' },
          { text: '螢幕截圖', link: '/zh-tw/#screenshots' },
          { text: '文件', link: '/zh-tw/docs' }
        ]
      }
    },
    id: {
      label: 'Bahasa Indonesia',
      lang: 'id',
      themeConfig: {
        nav: [
          { text: 'Beranda', link: '/id/' },
          { text: 'Tangkapan Layar', link: '/id/#screenshots' },
          { text: 'Dokumentasi', link: '/id/docs' },
          { text: 'Kredit', link: '/id/credits' }
        ]
      }
    },
    ja: {
      label: '日本語',
      lang: 'ja',
      themeConfig: {
        nav: [
          { text: 'ホーム', link: '/ja/' },
          { text: 'スクリーンショット', link: '/ja/#screenshots' },
          { text: 'ドキュメント', link: '/ja/docs' },
          { text: 'クレジット', link: '/ja/credits' }
        ]
      }
    }
  },
  cleanUrls: true,
  // Use over transformHead as this ignores implicitly generated pages and shows in dev.
  transformPageData(pageData, ctx) {
    const head: Array<any> = pageData.frontmatter.head ??= []
    ctx.siteConfig.sitemap?.hostname
    head.push(["link", { rel: "canonical", href: createCanonical(pageData.relativePath) }])
  },
  sitemap: {
    hostname: host
  }
}

function createCanonical(rel_path: string) {
  // This follows GH Pages standards.
  const stripped = rel_path.substring(0, rel_path.lastIndexOf("."))
  return `${host}${stripped == "index" ? "" : "/"}${stripped.replace("index", "")}`
}

export default defineConfig(
  withSidebar(vitePressConfig, vitePressSidebarConfig)
);
