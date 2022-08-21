import Head from 'next/head';
import Boilerplate from '../components/Boilerplate';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Loan Website</title>
        <meta
          name="keywords"
          value="personal loan, housing loan, student loan"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <meta charSet="UTF-8" />
      </Head>
      <Boilerplate />
    </div>
  );
}
