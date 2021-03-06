import { MDXProvider } from "@mdx-js/react";
import Head from "next/head";
import { Header } from "../lib/Header";
import { CodeBlock } from "../lib/CodeBlock";
import "../styles/index.css";

const components = {
  wrapper: (props) => {
    return (
    <>
      <Header />
      <Head>
        <title>EffJS Blog</title>
      </Head>
      <div className="container mx-auto p-4 bg-white">
        <main {...props} />
      </div>
    </>
  )},
  p: (props) => <p className="my-1 mx-3" {...props} />,
  h1: (props) => <h1 className="text-2xl text-center md:text-4xl mx-3" {...props} />,
  h2: (props) => <h2 className="text-3xl mx-3 my-2" {...props} />,
  h3: (props) => <h2 className="text-2xl mx-3 my-2" {...props} />,
  h4: (props) => <h2 className="text-xl mx-3 text-center mb-2 text-gray-700" {...props} />,
  h5: (props) => <h2 className="mx-3" {...props} />,
  code: (props) => <CodeBlock {...props} />,
  pre: (props) => <div {...props} />,
};

export default function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}
