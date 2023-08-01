import type { Preview } from '@storybook/vue3'

import { lightTheme, darkTheme } from '../src/theme/example.css'
import '../src/theme/default.css'
import { vars } from '../src/styles/vars.css'

import { toRgba } from '../src/utils'

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      // The icon for the toolbar item
      icon: 'circlehollow',
      // Array of options
      items: [
        { value: 'light', icon: 'circlehollow', title: 'light' },
        { value: 'dark', icon: 'circle', title: 'dark' },
        { value: 'side-by-side', icon: 'sidebar', title: 'side by side' },
      ],
      // Property that specifies if the name of the item will be displayed
      showTitle: true,
    },
  },
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (story, ctx) => ({
      components: { story },
      setup() {
        const theme = ctx.globals.theme
        const themeClass = ctx.globals.theme === 'dark' ? darkTheme : lightTheme
        const styles = {
          height: '100vh',
          bottom: 0,
          overflow: 'auto',
          padding: '2rem 1rem',
          background: toRgba(vars.colors.background),
          flex: 1,
        }
        return {
          styles,
          theme,
          themeClass,
          darkTheme,
          lightTheme,
        }
      },
      template: `
        <div id="theme" v-show="theme === 'side-by-side'" style="display:flex">
          <div :class="lightTheme" class="preview" :style="styles"><story />
          </div>
          <div :class="darkTheme" class="preview" :style="styles"><story />
          </div>
        </div>
        <div id="theme" :class="themeClass" class="preview" :style="styles" v-show=" ['dark', 'light'].includes(theme)"><story />
        </div>
      `,
    }),
  ],
}

export default preview
