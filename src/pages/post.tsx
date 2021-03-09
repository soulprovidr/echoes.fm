import { EffectCallback, useEffect } from 'react';
import { Layout } from '../components/layout';
import { Latest } from '../components/related';
import { authorizeUser, usePlaylist } from '../spotify';

import styles from '../styles/post.css';

export default function Post(): JSX.Element {
  const playlist = usePlaylist('spotify:playlist:4K11baS8iLqzmovHpg2T7R');
  const handlePlay = () => {
    if (playlist) {
      window.open(playlist.uri, '_self');
    }
  };
  return (
    <Layout>
      <section id="single-post-wrapper" className="my-8">
        <div className="max-w-6xl mx-auto">
          <div className="single-post-info md:my-5 md:w-3/4 w-full mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 md:mx-0 mx-6">
              echoes.fm: a manifesto
            </h1>
            <p className="text-gray-500 text-lg md:mx-0 mx-6">
              echoes.fm is a new way to share music with your friends, pairing
              words and playlists to create immersive, intimate experiences.
            </p>
            <div className="author-info flex mt-3 md:mx-0 md:mb-0 mx-6 mb-6">
              <div className="w-auto">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img
                    src="https://soulprovidr.fm/static/logo-76f7f5f1e16d8b3554a5c532c55672c7.svg"
                    className="object-cover w-10 h-10"
                    alt="author pic"
                  />
                </div>
              </div>
              <div className="w-full text-xs pl-4 pt-px">
                <div className="text-gray-600">
                  {' '}
                  <a href="author.html" className="text-black hover:underline">
                    @soulprovidr
                  </a>
                </div>
                <div className="text-gray-600">
                  <span>3 hours ago</span> • 54 min listen
                </div>
              </div>
            </div>
          </div>

          <div className="single-post-cover md:rounded overflow-hidden mb-12 relative">
            <img
              style={{ height: 700 }}
              src="https://source.unsplash.com/random/1100x700"
              className="object-cover w-full"
              alt="single post cover"
            />
            <div
              className="absolute bottom-0 left-0 top-0 right-0 flex items-end text-white p-10"
              style={{
                background:
                  'linear-gradient(0deg, #00000088 30%, #ffffff44 100%)',
              }}
            >
              <div className="flex items-center">
                <button
                  className="text-6xl border rounded-lg p-3"
                  onClick={handlePlay}
                >
                  &#9658;
                </button>
                <div className="flex flex-col ml-5">
                  {/* <span className="text-5xl text-bold">Hunnids</span>
                  <span className="text-3xl">Sainte</span> */}
                  {!!playlist && (
                    <>
                      <span className="text-4xl font-semibold">
                        {playlist.name}
                      </span>
                      <span className="text-2xl">
                        {playlist.tracks.total} tracks
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="single-post-detail flex flex-wrap mt-3">
            <div className="md:w-32 w-full ml-auto p-3 text-center">
              <h3 className="text-sm font-light uppercase mb-4">
                <span className="md:block inline">Share</span>
                <span className="md:block inline">With</span>
                <span className="md:block inline">Your</span>
                <span className="md:block inline">Friends</span>
              </h3>
              <ul className="flex flex-wrap items-center justify-center">
                <li className="block inline-block md:w-full w-auto md:mx-0 mx-1 flex items-center justify-center">
                  <a
                    href="#"
                    className="mb-2 border border-gray-300 text-2xl text-gray-800 transition-3 rounded hover:shadow-xl flex items-center justify-center inline-block w-12 h-12"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li className="block inline-block md:w-full w-auto md:mx-0 mx-1 flex items-center justify-center">
                  <a
                    href="#"
                    className="mb-2 border border-gray-300 text-2xl text-gray-800 transition-3 rounded hover:shadow-xl flex items-center justify-center inline-block w-12 h-12"
                  >
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="block inline-block md:w-full w-auto md:mx-0 mx-1 flex items-center justify-center">
                  <a
                    href="#"
                    className="mb-2 border border-gray-300 text-2xl text-gray-800 transition-3 rounded hover:shadow-xl flex items-center justify-center inline-block w-12 h-12"
                  >
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li className="block inline-block md:w-full w-auto md:mx-0 mx-1 flex items-center justify-center">
                  <a
                    href="#"
                    className="mb-2 border border-gray-300 text-2xl text-gray-800 transition-3 rounded hover:shadow-xl flex items-center justify-center inline-block w-12 h-12"
                  >
                    <i className="fa fa-whatsapp"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:w-2/3 w-full mr-auto md:p-3 p-6">
              <div className="sub-heading text-xl font-semibold leading-normal">
                <p>
                  Gosh jaguar ostrich quail one excited dear hello and bound and
                  the and bland moral misheard roadrunner flapped lynx far that
                  and jeepers giggled far and far bald that roadrunner python
                  inside held shrewdly the manatee.
                </p>
              </div>
              <div className="single-post-content mt-5 text-xl leading-normal text-gray-900">
                <p>
                  Gosh jaguar ostrich quail one excited dear hello and bound[1]
                  and the and bland moral misheard roadrunner flapped lynx far
                  that and jeepers giggled far and far bald that roadrunner
                  python inside held shrewdly the manatee.
                </p>
                <p>
                  Thanks sniffed in hello after in foolhardy and some far
                  purposefully much one at the much conjointly leapt skimpily
                  that quail sheep some goodness nightingale the instead exited
                  expedient up far ouch mellifluous altruistic and and lighted
                  more instead much when ferret but the.
                </p>
                <p>
                  Yet more some certainly yet alas abandonedly whispered
                  intriguingly[2] well extensive one howled talkative
                  admonishingly below a rethought overlaid dear gosh activated
                  less however hawk yet oh scratched ostrich some outside crud
                  irrespective lightheartedly and much far amenably that the
                  elephant since when.
                </p>
                <h1>The Guitar Legends</h1>
                <p>
                  Gosh jaguar ostrich quail one excited dear hello and bound[1]
                  and the and bland moral misheard roadrunner flapped lynx far
                  that and jeepers giggled far and far bald that roadrunner
                  python inside held shrewdly the manatee.
                </p>
                <p>
                  Thanks sniffed in hello after in foolhardy and some far
                  purposefully much one at the much conjointly leapt skimpily
                  that quail sheep some goodness nightingale the instead exited
                  expedient up far ouch mellifluous altruistic and and lighted
                  more instead much when ferret but the.
                </p>
                <p>
                  Yet more some certainly yet alas abandonedly whispered
                  intriguingly[2] well extensive one howled talkative
                  admonishingly below a rethought overlaid dear gosh activated
                  less however hawk yet oh scratched ostrich some outside crud
                  irrespective lightheartedly and much far amenably that the
                  elephant since when.
                </p>
                <img
                  src="https://picsum.photos/700/400"
                  alt="single post cover"
                />
                <p>
                  Thanks sniffed in hello after in foolhardy and some far
                  purposefully much one at the much conjointly leapt skimpily
                  that quail sheep some goodness nightingale the instead exited
                  expedient up far ouch mellifluous altruistic and and lighted
                  more instead much when ferret but the.
                </p>
                <p>
                  Yet more some certainly yet alas abandonedly whispered
                  intriguingly[2] well extensive one howled talkative
                  admonishingly below a rethought overlaid dear gosh activated
                  less however hawk yet oh scratched ostrich some outside crud
                  irrespective lightheartedly and much far amenably that the
                  elephant since when.
                </p>
              </div>

              <div className="single-post-tags mt-12">
                <ul>
                  <li className="inline-block">
                    {' '}
                    <a
                      href="category-page.html"
                      className="inline-block border border-gray-300 px-3 transition-3 rounded hover:border-gray-500"
                    >
                      fashion
                    </a>{' '}
                  </li>
                  <li className="inline-block">
                    {' '}
                    <a
                      href="category-page.html"
                      className="inline-block border border-gray-300 px-3 transition-3 rounded hover:border-gray-500"
                    >
                      news
                    </a>{' '}
                  </li>
                  <li className="inline-block">
                    {' '}
                    <a
                      href="category-page.html"
                      className="inline-block border border-gray-300 px-3 transition-3 rounded hover:border-gray-500"
                    >
                      lifestyle
                    </a>{' '}
                  </li>
                  <li className="inline-block">
                    {' '}
                    <a
                      href="category-page.html"
                      className="inline-block border border-gray-300 px-3 transition-3 rounded hover:border-gray-500"
                    >
                      work
                    </a>{' '}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
