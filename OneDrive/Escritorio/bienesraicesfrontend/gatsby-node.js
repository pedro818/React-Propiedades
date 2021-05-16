const urlSlug = require('url-slug');

exports.createPages = async ({ actions, graphql, reporter }) => {
    const resultado = await graphql(`
    query {
        allStrapiPaginas{
          nodes {
            nombre
            id
          }
        }
        allStrapiPropiedades {
            nodes {
                nombre
          id
        }
      }
    }
    `);

  //  console.log(resultado);

  //Si no hay resultado
  if(resultado.errors) {
    reporter.panic('No hubo resultados',resultado.errors);
  }

  //Si hay resultados generar los archivos estaticos
  const paginas = resultado.data.allStrapiPaginas.nodes;
  const propiedades = resultado.data.allStrapiPropiedades.nodes;

  //Crear los templates de propiedades
  paginas.forEach( pagina => {
    actions.createPage({
        path: urlSlug( pagina.nombre),
        component: require.resolve('./src/components/paginas.js'),
        context: {
            id: pagina.id
        }
    })
})

  propiedades.forEach( propiedad => {
      actions.createPage({
          path: urlSlug( propiedad.nombre),
          component: require.resolve('./src/components/propiedades.js'),
          context: {
              id: propiedad.id
          }
      })
  })

}