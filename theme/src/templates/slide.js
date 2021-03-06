import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-mdx"
import { TransitionPortal } from "gatsby-plugin-transition-link"
import Layout from "../components/layout"
import Controls from "../components/controls"

export default function Slide({ pageContext, data: { mdx: post } }) {
  const { previous, next } = pageContext

  return (
    <Layout>
      <MDXRenderer>{post.code.body}</MDXRenderer>
      {/* Portal for keeping controls above all page transitions. */}
      <TransitionPortal>
        <Controls previous={previous} next={next} />
      </TransitionPortal>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      code {
        body
      }
    }
  }
`
