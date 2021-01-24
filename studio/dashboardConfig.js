export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '600d2279ad07d4258dcec8d5',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-11-studio-ae6i96yi',
                  apiId: 'fa43059a-5aa9-4aee-9231-a805764f8fc5'
                },
                {
                  buildHookId: '600d227986547aff2a719278',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-11-web',
                  apiId: 'e6873b8a-96d0-49c7-b2e4-42995cf933cf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/olivergraphix/sanity-kitchen-sink11',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-11-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
