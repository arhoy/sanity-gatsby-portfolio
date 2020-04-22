export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5e9ff1fe913dddfb56d6df0e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-69is8otb',
                  apiId: 'e40b092c-f308-43cf-b019-19dcb94eba4e'
                },
                {
                  buildHookId: '5e9ff1ff4d8e1f1ee742886d',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-9w3pfcbq',
                  apiId: '8efbadd5-5f10-425d-8cb2-8bd54097fd98'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/arhoy/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-9w3pfcbq.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
