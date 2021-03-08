import Head from 'next/head';
import { Layout } from '../components/layout';
import { authorizeUser } from '../spotify';

export default function Home(): JSX.Element {
  const handleLogin = () => {
    authorizeUser();
  };
  return (
    <Layout showHeader={false}>
      <Head>
        <title>echoes.fm</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mt-24">
        <div className="max-w-6xl mx-auto flex flex-wrap flex-row-reverse">
          <div className="w-full lg:w-1/2 order-2">
            <img src="/splash.svg" className="" />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col order-1 justify-center items-center md:pr-5 pb-12 md:pb-0 md:mx-0 mx-6 md:items-start text-center md:text-left">
            <p className="text-gray-600 text-2xl tracking-tight mb-5">
              <span className="text-gray-400">{'{{ '}</span>
              <span className="text-black font-semibold">echoes.fm</span>
              <span className="text-gray-400">{' }}'}</span> is a new way to
              share music with your friends – pairing words and playlists to
              create immersive, intimate experiences.
            </p>
            <button
              className="p-2 px-5 text-xl text-white rounded-3xl flex"
              style={{ background: '#1DB954' }}
              onClick={handleLogin}
            >
              Login with{' '}
              <img className="w-24 ml-2" src="/Spotify_Logo_RGB_White.png" />
            </button>
            <div className="flex items-center"></div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
