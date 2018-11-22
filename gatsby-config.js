module.exports = {
  pathPrefix: '/originlabs.org',
  siteMetadata: {
    title: "Origin Labs",
    author: "Origin Labs",
    description: "Origin Labs Homepage"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-recaptcha',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    // 'gatsby-plugin-offline',
  ],
}
