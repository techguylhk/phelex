import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Title Here</title>
      </Head>
      <div className="text-green-500">
        Body Here <i className="fas fa-user"></i>
      </div>
    </>
  );
};

export default Home;
