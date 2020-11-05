import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image"

import Layout from "components/Layout";

const IndexPage = ( {data} ) => {

  return (
    <Layout pageName="home" title="Home Page">
      <figure className="gatsby-astronaut" >
        <Img fluid={data.file.childImageSharp.fluid} alt="gatsby astronaut" />
      </figure>
      <h1>Gatsby Sass Starter</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <h2>Still Getting Started?</h2>
      <p>Run the following in your terminal!</p>
    </Layout>
  );
};

export const query = graphql`
  query {
    file(relativePath: { eq: "gatsby-astronaut.png" }) {
      childImageSharp {
        fluid(maxWidth: 256) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default IndexPage;
