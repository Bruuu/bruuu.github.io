import * as React from "react"
import Layout from "../components/layout/Layout"
import Card from '../components/Card';

const links = [
  {
    text: "GitHub",
    url: "https://github.com/bruuu",
    description:
      "GitHub Link",
  },
  {
    text: "LinkedIn",
    url: "https://www.linkedin.com/in/kristina-brueva/",
    description:
      "LinkedIn Link",
  },
]

// markup
const Index = () => {
  return (
    <Layout>
    <main>
      <title>Home Page</title>
      <section id="blog" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Recent publications</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
            <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src='https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80' alt="" />
              </div>
              <p className="font-semibold text-xl">Boost your conversion rate</p>
              <p className="mt-4">
                An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
            <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src='https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80' alt="" />
              </div>
              <p className="font-semibold text-xl">Improve your customer experience</p>
              <p className="mt-4">
                An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
            <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src='https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80' alt="" />
              </div>
              <p className="font-semibold text-xl">Service Three</p>
              <p className="mt-4">
                An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>

      <ul>
        {links.map(link => (
          <li key={link.url}>
            <span>
              <a
                href={`${link.url}`}
              >
                {link.text}
              </a>
            </span>
          </li>
        ))}
      </ul>
    </main>
    </Layout>
  )
}

export default Index
