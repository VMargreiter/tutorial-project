const path = require ('path')

exports.createPages = ({ graphql, actions}) => {
    const { createPage } = actions 
    return graphql(`
        query allPages {
            allWpPage {
                nodes {
                  id
                  uri
                }
              }
            }
    `).then(result => {
        result.data.allWpPage.nodes.forEach(node => {
            createPage({
              path: node.uri,
              component: path.resolve(`./src/templates/homepage.js`),
              context: {
                id: node.id
              },
            })
        })
    })

}