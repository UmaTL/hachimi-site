import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import Notice from './Notice.vue'
import './custom.css'

export default {
    extends: DefaultTheme,
    Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-before': () => h(Notice),
      'home-hero-before': () => h(Notice)
    })
  }
}