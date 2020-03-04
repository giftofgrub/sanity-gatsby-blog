export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e600e2fe7136a427484dec0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-h1tsg8m1',
                  apiId: 'adec1c8c-9020-4e33-a22c-a0dbd3b052d3'
                },
                {
                  buildHookId: '5e600e2f368c81229c72eee2',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-t8q3z8q4',
                  apiId: '83f76854-fcbe-4ec0-bab2-5877f6b7fd00'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/giftofgrub/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-t8q3z8q4.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
