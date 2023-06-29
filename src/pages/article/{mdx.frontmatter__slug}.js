// import React from "react";
// import Seo from "../../components/seo";
// import { graphql } from "gatsby";
// import Faq from "../../components/Faq";

// function PestArticles({ data, children }) {
//   return (
//     <div className="pt-28 mx-auto  max-w-7xl ">
//       <article className="prose lg:prose-xl  prose-p:text-gray-200 prose-headings:text-gray-50 prose-ul:text-gray-400 prose-a:text-gray-400 prose-img:rounded-xl  mx-auto  py-8 ">
//         {children}
//       </article>
//       <Faq />
//     </div>
//   );
// }

// export const query = graphql`
//   query ($id: String) {
//     mdx(id: { eq: $id }) {
//       frontmatter {
//         title
//         description
//       }
//     }
//   }
// `;

// export const Head = ({ data }) => (
//   <>
//     <Seo title={data.mdx.frontmatter.title} />
//     <meta name="description" content={data.mdx.frontmatter.description} />
//   </>
// );

// export default PestArticles;

import React from "react";
import Seo from "../../components/seo";
import { graphql } from "gatsby";
import Faq from "../../components/Faq";
import ArticleHeader from "../../components/ArticleHeader";

function PestArticles({ data, children }) {
  const title = data.mdx.frontmatter.title;
  const description = data.mdx.frontmatter.description;
  return (
    <div className="relative">
      <div className="bg-gray-900">
        <div className="pt-28 mx-auto  max-w-7xl  ">
          <ArticleHeader
            description={title}
            heroH1={description}
            heroSubheader={title}
          />
        </div>
      </div>

      <article className="prose lg:prose-xl  prose-p:text-indigo-950 prose-headings:text-indigo-950 prose-ul:text-indigo-950 prose-a:text-gray-800 prose-img:rounded-xl  mx-auto  py-8 ">
        {children}
      </article>

      <Faq backgroundColor="bg-gray-300" />
    </div>
  );
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        description
      }
    }
  }
`;

export const Head = ({ data }) => (
  <>
    <Seo title={data.mdx.frontmatter.title} />
    <meta name="description" content={data.mdx.frontmatter.description} />
  </>
);

export default PestArticles;