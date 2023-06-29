import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'



const BlogList = ({data}) => {
    console.log(data)
  return (
  
    <ul>
    {
      data.allFile.nodes.map(node => (
        <li key={node.childMdx.frontmatter.slug}>
          {node.childMdx.frontmatter.title}
        </li>
      ))
    }
    </ul>
    
  )
}

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage

export const query = graphql`
  query {
   allFile(filter: {sourceInstanceName: {eq: "pest-control"}}) {
    nodes {
      childMdx {
        frontmatter {
          slug
          title
          description
          pestType
        }
      }
    }
  }
  }
`