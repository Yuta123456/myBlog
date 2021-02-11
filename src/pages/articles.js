import React from "react"

export default function Articles({ data }) {
  const articles = data.allMicrocmsArticles.edges
  console.log(articles)
  return (
    <>
      {articles.map(article => {
        return (
          <div>
            hey
            {/* <div>{article.node.title}</div>
            <p
              dangerouslySetInnerHTML={{
                __html: `${article.node.body}`,
              }}
            ></p> */}
          </div>
        )
      })}
    </>
  )
}

export const query = graphql`
  {
    allMicrocmsArticles {
      edges {
        node {
          title
          body
        }
      }
    }
  }
`
