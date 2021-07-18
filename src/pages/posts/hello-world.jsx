import * as React from "react";
import Layout from "../../components/layout/Layout";

export default function BlogPost() {
  return (
    <Layout>
      <div className="relative py-16 bg-white overflow-hidden">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase"></span>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Hello World!
              </span>
            </h1>
            <p>Hey! Thanks for stopping by and welcome to my blog!</p>

            <p>You may wonder who the hell are you?</p>

            <p>
              My name is Kristina. Born and raised in Russia, I learned to smile
              and trust strangers in Australia. I gave up and went back to
              software development a few times. It’s been an amazing journey
              that made me who I am now. I worked in big companies, startups and
              ran small businesses on my own. I was a travel blogger,
              videographer, pet sitter, housewife and even watercolour artist.
              Currently, I’m a Junior Web Developer, working remotely in an
              amazing team. My code is mostly in JS(React) and I learn Elixir.{" "}
            </p>

            <p>Three random facts about me</p>

            <ul>
              <li>
                The very first console I opened by pressing “Ctrl + Shift + C”
                was the Cheat Console in the Sims 2. Yeap, the first code I
                wrote was the code for making my sim rich and immortal! Back
                that time I had no Internet in my home yet managed to get a
                piece of paper with the magical codes from the right person. I
                loved trying new things so had to learn how to fix the Blue
                Screens of Death too.{" "}
              </li>
              <li>
                Knowing only Russian and German I struggled a lot in the
                University. Writing my first programs in Pascal or C++ with all
                those “for, else, while, write, count, char, etc“ words I had no
                idea they were not a gibberish but real English words(!) Oh,
                little did I know that I would move to English speaking country
                after all.{" "}
              </li>
              <li>
                “Find a mentor” is the best advice you’ve ever been given. And
                because of that I started my own technical blog.
              </li>
            </ul>
            <p>What is the purpose of my blog?</p>

            <ul>
              <li>
                First of all, I want to give support to my readers. Especially,
                to the ones that just started their carrier in Software
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
            <p>
              Does any of that sound interesting for you? Stay tuned! Comment,
              share and subscribe. Many thanks!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
