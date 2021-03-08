import Link from 'next/link';

export const Header = (): JSX.Element => (
  <nav className="flex items-center justify-between flex-wrap lg:pl-0 p-6  max-w-6xl mx-auto border-b border-gray-300">
    <div className="flex items mr-6">
      <Link href="/">
        <div className="font-semibold text-xl tracking-tight">
          <span className="text-gray-400">{'{{ '}</span>
          echoes.fm
          <span className="text-gray-400">{' }}'}</span>
        </div>
      </Link>
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
);
