import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>CPR generator</title>
        <meta
          name='description'
          content='Generates every possible CPR from a birthday'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>Cpr Generator</h1>
    </div>
  );
};

export default Home;
