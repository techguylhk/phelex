import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <title>Title Here</title>
      </Head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        Hello World
      </body>
    </>
  );
};

export default Home;
