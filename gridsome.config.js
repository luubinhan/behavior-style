// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Assessing your Behavioural Style',
  siteUrl: 'https://luubinhan.github.io',
  pathPrefix: '/behavior-style',
  siteDescription: 'A simple starter for Gridsome using TailwindCSS and Markdown',
  templates: {
    Post: '/blog/:title'
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/posts/**/*.md',
        typeName: 'Post',
      }
    },
    {
      use: 'gridsome-plugin-windicss',
      options: {
        // see https://github.com/windicss/vite-plugin-windicss/blob/main/packages/plugin-utils/src/options.ts
      }
    },
  ],
}
