import { useSpotifyTracks } from '../spotify/hooks/useSpotifyTracks';

import styles from '../styles/post.css';

export default function Post(): JSX.Element {
  const tracks = useSpotifyTracks(
    'https://open.spotify.com/playlist/4K11baS8iLqzmovHpg2T7R?si=POoRjtl5TMyQI08R9WvCWg'
  );
  return (
    <div className="main-wrapper">
      <nav className="flex items-center justify-between flex-wrap lg:pl-0 p-6  max-w-6xl mx-auto border-b border-gray-300">
        <div className="flex items mr-6">
          <a href="/" className="font-semibold text-xl tracking-tight">
            <span className="text-gray-400">{'{{ '}</span>
            echoes.fm
            <span className="text-gray-400">{' }}'}</span>
          </a>
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded  hover:border-white"
            id="burgurBtn"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className="w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto hidden"
          id="MainMenu"
        >
          <div className="text-normal font-normal text-gray-800 lg:flex-grow lg:ml-4 ml-0">
            <a
              href="category-page.html"
              className="hover:text-black px-2 block mt-4 lg:inline-block lg:mt-0  mr-4"
            >
              Popular
            </a>
            <a
              href="category-page.html"
              className="hover:text-black px-2 block mt-4 lg:inline-block lg:mt-0  mr-4"
            >
              New
            </a>
            <a
              href="categories.html"
              className="hover:text-black px-2 block mt-4 lg:inline-block lg:mt-0  mr-4"
            >
              Channels
            </a>
            <a
              href="write.html"
              className="hover:text-black px-2 block mt-4 lg:inline-block lg:mt-0  mr-4"
            >
              Write
            </a>
            <a
              href="#"
              className="hover:text-black px-2 block mt-4 lg:inline-block lg:mt-0 "
            >
              More
            </a>
          </div>
          <div>
            <form className="w-full max-w-sm lg:mt-0 mt-4">
              <div className="flex items-center border border-gray-300 rounded overflow-hidden">
                <input
                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="flex-shrink-0 bg-gray-500 hover:bg-gray-700 border-gray-500 hover:border-gray-700 text-sm border-4 text-white py-1 px-2"
                  type="button"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </nav>

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
                <button className="text-6xl border rounded-lg p-3">
                  &#9658;
                </button>
                <div className="flex flex-col ml-5">
                  <span className="text-5xl text-bold">Hunnids</span>
                  <span className="text-3xl">Sainte</span>
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

      <section id="related-items" className="lg:my-5 m-6">
        <div className="max-w-6xl mx-auto border-t border-gray-300">
          <h3 className="text-2xl font-semibold p-5 pl-0">Related Posts</h3>
        </div>

        <div className="max-w-6xl mx-auto related-items-warpper">
          <div className="flex flex-wrap">
            <div className="lg:w-1/4 md:w-1/2 w-full">
              <div className="flex-item border border-gray-300 rounded hover:shadow-2xl transition-3 m-2 lg:ml-0">
                <img
                  src="https://picsum.photos/401/251"
                  className="object-cover w-full block"
                  style={{ height: 180 }}
                  alt="related post image"
                />
                <h2 className="text-gray-800 font-semibold text-lg leading-tight p-3 pb-0">
                  {' '}
                  <a href="single-post.html">
                    {' '}
                    Is ‘Interactive Storytelling’ the Future of Media?{' '}
                  </a>
                </h2>
                <div className="w-full text-xs p-3 pt-2">
                  <div className="text-gray-600">
                    {' '}
                    <a
                      href="author.html"
                      className="text-black hover:underline"
                    >
                      Neelam Munir
                    </a>{' '}
                    in{' '}
                    <a
                      href="category-page.html"
                      className="text-black hover:underline"
                    >
                      {' '}
                      Culture{' '}
                    </a>{' '}
                  </div>
                  <div className="text-gray-600">
                    {' '}
                    <span>13 Aug, 2019</span> - <span> 6 min read </span>{' '}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full">
              <div className="flex-item border border-gray-300 rounded hover:shadow-2xl transition-3 m-2">
                <img
                  src="https://picsum.photos/402/252"
                  className="object-cover w-full block"
                  style={{ height: 180 }}
                  alt="related post image"
                />
                <h2 className="text-gray-800 font-semibold text-lg leading-tight p-3 pb-0">
                  {' '}
                  <a href="single-post.html">
                    {' '}
                    Is ‘Interactive Storytelling’ the Future of Media?{' '}
                  </a>
                </h2>
                <div className="w-full text-xs p-3 pt-2">
                  <div className="text-gray-600">
                    {' '}
                    <a
                      href="author.html"
                      className="text-black hover:underline"
                    >
                      Neelam Munir
                    </a>{' '}
                    in{' '}
                    <a
                      href="category-page.html"
                      className="text-black hover:underline"
                    >
                      {' '}
                      Culture{' '}
                    </a>{' '}
                  </div>
                  <div className="text-gray-600">
                    {' '}
                    <span>13 Aug, 2019</span> - <span> 6 min read </span>{' '}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full">
              <div className="flex-item border border-gray-300 rounded hover:shadow-2xl transition-3 m-2">
                <img
                  src="https://picsum.photos/403/253"
                  className="object-cover w-full block"
                  style={{ height: 180 }}
                  alt="related post image"
                />
                <h2 className="text-gray-800 font-semibold text-lg leading-tight p-3 pb-0">
                  {' '}
                  <a href="single-post.html">
                    {' '}
                    Is ‘Interactive Storytelling’ the Future of Media?{' '}
                  </a>
                </h2>
                <div className="w-full text-xs p-3 pt-2">
                  <div className="text-gray-600">
                    {' '}
                    <a
                      href="author.html"
                      className="text-black hover:underline"
                    >
                      Neelam Munir
                    </a>{' '}
                    in{' '}
                    <a
                      href="category-page.html"
                      className="text-black hover:underline"
                    >
                      {' '}
                      Culture{' '}
                    </a>{' '}
                  </div>
                  <div className="text-gray-600">
                    {' '}
                    <span>13 Aug, 2019</span> - <span> 6 min read </span>{' '}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full">
              <div className="flex-item border border-gray-300 rounded hover:shadow-2xl transition-3 m-2 mr-0">
                <img
                  src="https://picsum.photos/400/250"
                  className="object-cover w-full block"
                  style={{ height: 180 }}
                  alt="related post image"
                />
                <h2 className="text-gray-800 font-semibold text-lg leading-tight p-3 pb-0">
                  {' '}
                  <a href="single-post.html">
                    {' '}
                    Is ‘Interactive Storytelling’ the Future of Media?{' '}
                  </a>
                </h2>
                <div className="w-full text-xs p-3 pt-2">
                  <div className="text-gray-600">
                    {' '}
                    <a
                      href="author.html"
                      className="text-black hover:underline"
                    >
                      Neelam Munir
                    </a>{' '}
                    in{' '}
                    <a
                      href="category-page.html"
                      className="text-black hover:underline"
                    >
                      {' '}
                      Culture{' '}
                    </a>{' '}
                  </div>
                  <div className="text-gray-600">
                    {' '}
                    <span>13 Aug, 2019</span> - <span> 6 min read </span>{' '}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full">
              <div className="flex-item border border-gray-300 rounded hover:shadow-2xl transition-3 m-2 lg:ml-0">
                <img
                  src="https://picsum.photos/404/254"
                  className="object-cover w-full block"
                  style={{ height: 180 }}
                  alt="related post image"
                />
                <h2 className="text-gray-800 font-semibold text-lg leading-tight p-3 pb-0">
                  {' '}
                  <a href="single-post.html">
                    {' '}
                    Is ‘Interactive Storytelling’ the Future of Media?{' '}
                  </a>
                </h2>
                <div className="w-full text-xs p-3 pt-2">
                  <div className="text-gray-600">
                    {' '}
                    <a
                      href="author.html"
                      className="text-black hover:underline"
                    >
                      Neelam Munir
                    </a>{' '}
                    in{' '}
                    <a
                      href="category-page.html"
                      className="text-black hover:underline"
                    >
                      {' '}
                      Culture{' '}
                    </a>{' '}
                  </div>
                  <div className="text-gray-600">
                    {' '}
                    <span>13 Aug, 2019</span> - <span> 6 min read </span>{' '}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full">
              <div className="flex-item border border-gray-300 rounded hover:shadow-2xl transition-3 m-2">
                <img
                  src="https://picsum.photos/405/255"
                  className="object-cover w-full block"
                  style={{ height: 180 }}
                  alt="related post image"
                />
                <h2 className="text-gray-800 font-semibold text-lg leading-tight p-3 pb-0">
                  {' '}
                  <a href="single-post.html">
                    {' '}
                    Is ‘Interactive Storytelling’ the Future of Media?{' '}
                  </a>
                </h2>
                <div className="w-full text-xs p-3 pt-2">
                  <div className="text-gray-600">
                    {' '}
                    <a
                      href="author.html"
                      className="text-black hover:underline"
                    >
                      Neelam Munir
                    </a>{' '}
                    in{' '}
                    <a
                      href="category-page.html"
                      className="text-black hover:underline"
                    >
                      {' '}
                      Culture{' '}
                    </a>{' '}
                  </div>
                  <div className="text-gray-600">
                    {' '}
                    <span>13 Aug, 2019</span> - <span> 6 min read </span>{' '}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full">
              <div className="flex-item border border-gray-300 rounded hover:shadow-2xl transition-3 m-2">
                <img
                  src="https://picsum.photos/406/256"
                  className="object-cover w-full block"
                  style={{ height: 180 }}
                  alt="related post image"
                />
                <h2 className="text-gray-800 font-semibold text-lg leading-tight p-3 pb-0">
                  {' '}
                  <a href="single-post.html">
                    {' '}
                    Is ‘Interactive Storytelling’ the Future of Media?{' '}
                  </a>
                </h2>
                <div className="w-full text-xs p-3 pt-2">
                  <div className="text-gray-600">
                    {' '}
                    <a
                      href="author.html"
                      className="text-black hover:underline"
                    >
                      Neelam Munir
                    </a>{' '}
                    in{' '}
                    <a
                      href="category-page.html"
                      className="text-black hover:underline"
                    >
                      {' '}
                      Culture{' '}
                    </a>{' '}
                  </div>
                  <div className="text-gray-600">
                    {' '}
                    <span>13 Aug, 2019</span> - <span> 6 min read </span>{' '}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full">
              <div className="flex-item border border-gray-300 rounded hover:shadow-2xl transition-3 m-2 mr-0">
                <img
                  src="https://picsum.photos/407/257"
                  className="object-cover w-full block"
                  style={{ height: 180 }}
                  alt="related post image"
                />
                <h2 className="text-gray-800 font-semibold text-lg leading-tight p-3 pb-0">
                  {' '}
                  <a href="single-post.html">
                    {' '}
                    Is ‘Interactive Storytelling’ the Future of Media?{' '}
                  </a>
                </h2>
                <div className="w-full text-xs p-3 pt-2">
                  <div className="text-gray-600">
                    {' '}
                    <a
                      href="author.html"
                      className="text-black hover:underline"
                    >
                      Neelam Munir
                    </a>{' '}
                    in{' '}
                    <a
                      href="category-page.html"
                      className="text-black hover:underline"
                    >
                      {' '}
                      Culture{' '}
                    </a>{' '}
                  </div>
                  <div className="text-gray-600">
                    {' '}
                    <span>13 Aug, 2019</span> - <span> 6 min read </span>{' '}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="main-footer" className="">
        <div className="max-w-6xl mx-auto clearfix border-t border-gray-200 py-6">
          <div className="flex flex-wrap">
            <div className="lg:w-1/3 w-full lg:m-0 m-6 mb-0 text-center">
              <p className="text-sm text-gray-700">
                Copyright 2019 Merinda inc. Designed by{' '}
                <a href="https://getidea.net">getidea.net</a>{' '}
              </p>
            </div>
            <div className="lg:w-1/3 w-full lg:m-0 m-6 mb-0">
              <ul className="text-center">
                <li className="inline-block">
                  <a
                    href="#"
                    className="inline-block text-lg px-2 text-gray-700 hover:text-black"
                  >
                    {' '}
                    <i className="fa fa-facebook"></i>{' '}
                  </a>
                </li>
                <li className="inline-block">
                  <a
                    href="#"
                    className="inline-block text-lg px-2 text-gray-700 hover:text-black"
                  >
                    {' '}
                    <i className="fa fa-twitter"></i>{' '}
                  </a>
                </li>
                <li className="inline-block">
                  <a
                    href="#"
                    className="inline-block text-lg px-2 text-gray-700 hover:text-black"
                  >
                    {' '}
                    <i className="fa fa-linkedin"></i>{' '}
                  </a>
                </li>
                <li className="inline-block">
                  <a
                    href="#"
                    className="inline-block text-lg px-2 text-gray-700 hover:text-black"
                  >
                    {' '}
                    <i className="fa fa-snapchat"></i>{' '}
                  </a>
                </li>
                <li className="inline-block">
                  <a
                    href="#"
                    className="inline-block text-lg px-2 text-gray-700 hover:text-black"
                  >
                    {' '}
                    <i className="fa fa-instagram"></i>{' '}
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/3 w-full lg:m-0 m-6 mb-0">
              <ul className="text-center">
                <li className="inline-block">
                  {' '}
                  <a
                    className="text-gray-600 hover:text-black hover:underline text-sm p-3"
                    href="blank-page.html"
                  >
                    Privacy
                  </a>{' '}
                </li>
                <li className="inline-block">
                  {' '}
                  <a
                    className="text-gray-600 hover:text-black hover:underline text-sm p-3"
                    href="blank-page.html"
                  >
                    Advertisement
                  </a>{' '}
                </li>
                <li className="inline-block">
                  {' '}
                  <a
                    className="text-gray-600 hover:text-black hover:underline text-sm p-3"
                    href="contact.html"
                  >
                    Contact Us
                  </a>{' '}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
