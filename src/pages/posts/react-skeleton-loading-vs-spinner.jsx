import * as React from "react";
import Layout from "../../components/layout/Layout";

export default function BlogPost() {
  return (
    <Layout>
      <div className="relative py-10 bg-white overflow-hidden ">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div
            className="relative h-full text-lg max-w-prose mx-auto"
            aria-hidden="true"
          ></div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1 className="mt-12 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              React-loading-skeleton or Spinner?
            </h1>
          </div>
          <div className="mt-8 leading-8 prose prose-indigo prose-lg text-gray-500 mx-auto">
            <p>In a 2017 study, Google found that:</p>
            <ul>
              <li>1-3 second load times increased bounce rates by 32%.</li>
              <li>1-5 second load times increased bounce rates by 90%.</li>
              <li>1-6 second load times increased bounce rates by 106%.</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
