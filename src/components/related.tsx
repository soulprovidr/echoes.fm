import { FunctionComponent } from 'react';
import Link from 'next/link';

export const Latest: FunctionComponent = () => (
  <section id="related-items" className="lg:my-5 m-6">
    <div className="max-w-6xl mx-auto">
      <h3 className="text-2xl font-semibold p-5 pl-0">Latest Posts</h3>
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
              <Link href="/post">
                Is ‘Interactive Storytelling’ the Future of Media?
              </Link>
            </h2>
            <div className="w-full text-xs p-3 pt-2">
              <div className="text-gray-600">
                {' '}
                <a href="author.html" className="text-black hover:underline">
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
              <Link href="/post">
                Is ‘Interactive Storytelling’ the Future of Media?
              </Link>
            </h2>
            <div className="w-full text-xs p-3 pt-2">
              <div className="text-gray-600">
                {' '}
                <a href="author.html" className="text-black hover:underline">
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
              <Link href="/post">
                Is ‘Interactive Storytelling’ the Future of Media?
              </Link>
            </h2>
            <div className="w-full text-xs p-3 pt-2">
              <div className="text-gray-600">
                {' '}
                <a href="author.html" className="text-black hover:underline">
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
              <Link href="/post">
                Is ‘Interactive Storytelling’ the Future of Media?
              </Link>
            </h2>
            <div className="w-full text-xs p-3 pt-2">
              <div className="text-gray-600">
                {' '}
                <a href="author.html" className="text-black hover:underline">
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
              <Link href="/post">
                Is ‘Interactive Storytelling’ the Future of Media?
              </Link>
            </h2>
            <div className="w-full text-xs p-3 pt-2">
              <div className="text-gray-600">
                {' '}
                <a href="author.html" className="text-black hover:underline">
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
              <Link href="/post">
                Is ‘Interactive Storytelling’ the Future of Media?
              </Link>
            </h2>
            <div className="w-full text-xs p-3 pt-2">
              <div className="text-gray-600">
                {' '}
                <a href="author.html" className="text-black hover:underline">
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
              <Link href="/post">
                Is ‘Interactive Storytelling’ the Future of Media?
              </Link>
            </h2>
            <div className="w-full text-xs p-3 pt-2">
              <div className="text-gray-600">
                {' '}
                <a href="author.html" className="text-black hover:underline">
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
              <Link href="/post">
                Is ‘Interactive Storytelling’ the Future of Media?
              </Link>
            </h2>
            <div className="w-full text-xs p-3 pt-2">
              <div className="text-gray-600">
                {' '}
                <a href="author.html" className="text-black hover:underline">
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
);
