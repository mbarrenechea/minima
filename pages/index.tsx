import Head from 'next/head';

import Header from 'containers/header';
import Home from 'containers/home';

const PageHome: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Minima</title>
      </Head>

      <Header align="left" />

      <Home />
    </div>
  );
};

export default PageHome;
