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
              Hello and Welcome
            </h1>
          </div>
          <div className="mt-8 leading-8 prose prose-indigo prose-lg text-gray-500 mx-auto">
            <p>
              Hey, thanks for stopping by. My name is Kristina and I am the
              person behind the blog. 👋
            </p>
            <p>
              Born and raised in Russia, I moved to Australia one day. I gave up
              and went back to Software Development a few times. I worked in big
              companies, startups and ran small businesses on my own. Apart from
              programming, I was a travel blogger, videographer, pet sitter,
              housewife and even watercolour artist. It’s been an amazing
              journey that made me who I am.
              <p>
                Currently, I’m a Junior Web Developer, working remotely in an
                amazing team. My code is mostly in{" "}
                <span className="italic">JavaScript(React)</span> and I'm
                learning <span className="italic"> Elixir</span>.
              </p>
            </p>
            <img
              className="w-full rounded-lg object-cover h-64"
              src="https://images.unsplash.com/photo-1485981133625-f1a03c887f0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt=""
            />
            <h2>Three random facts about me:</h2>
            <ol>
              <li>
                The very first console I opened by pressing{" "}
                <span className="italic">“Ctrl + Shift + C”</span> was the Cheat
                Console in the Sims2. Yeap, the first code I wrote was the code
                for making my Sim rich and immortal, haha! Back that time I had
                no Internet in my home yet managed to get a piece of paper with
                the magical codes from the right person. 🤓
              </li>
              <li>
                <p>
                  Knowing only Russian and German I struggled a lot in the
                  University. Writing my first programs in Pascal or C++ with
                  all those{" "}
                  <span className="italic">
                    for, else, while, write, count, char, etc
                  </span>{" "}
                  words, ugh. I had no idea they were not gibberish but real
                  English words! 🤣
                </p>
                <p>
                  Little did I know that I would move to English speaking
                  country after all.
                </p>
              </li>
              <li>
                The best advice I’ve ever been given was{" "}
                <span className="italic">“Find a mentor”</span>. Seriously, that
                changed my life.
              </li>
            </ol>
            <h2>What is the purpose of my blog?</h2>
            <ul>
              <li>
                First of all, I want to give support to my readers. Especially,
                to the ones that just started their career in Software
                Development or thinking about it.
              </li>
              <li>
                I want to document and structure my experience here and share
                some tips and tricks with others.
              </li>
              <li>
                The blog is not just about technical stuff but how to improve
                the problem-solving, leadership, and consulting skills as well.
                I truly believe you need all of these skills to become a Senior
                Developer and that is my goal now.
              </li>
            </ul>
            <p className="pt-10">
              Does any of that sound interesting for you? Stay tuned! And thanks
              for visiting my blog!
            </p>
            <img
              className="w-full rounded-lg object-cover h-64"
              alt="Hands holding a black paper heart"
              src="https://images.unsplash.com/photo-1579208575657-c595a05383b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
            />{" "}
          </div>
        </div>
      </div>
    </Layout>
  );
}
