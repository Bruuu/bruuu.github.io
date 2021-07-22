import * as React from "react";
import Layout from "../components/layout/Layout";
import Card from "../components/Card";
import { graphql } from "gatsby";

export default function BlogPage({ data }) {
  return (
    <Layout>
      <section id="blog" className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-semibold">
            Recent publications
          </h2>
          <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
            <div className="flex-1 px-3">
              {data.allFile.nodes.map((item) => (
                <Card className="mb-8">
                  <div className="flex-shrink-0">
                    <img
                      className="h-48 w-full object-cover"
                      src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                      alt=""
                    />
                  </div>
                  <p className="font-semibold text-xl">{item.name}</p>
                  <p className="mt-4">
                    An enim nullam tempor gravida donec enim ipsum blandit porta
                    justo integer odio velna vitae auctor integer.
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;
