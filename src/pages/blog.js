import * as React from 'react'
import { graphql } from 'gatsby'

import Seo from '../components/seo'

const BlogPage = ({data}) => {
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