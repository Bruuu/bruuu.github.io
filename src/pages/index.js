import * as React from "react"
import Layout from "../components/layout/Layout"

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
      <h1>
        Home page
      </h1>
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
