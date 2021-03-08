import { FunctionComponent } from 'react';
import Link from 'next/link';

export const Footer: FunctionComponent = () => (
  <footer id="main-footer">
    <div className="max-w-6xl mx-auto clearfix border-t border-gray-200 py-6">
      <div className="flex flex-wrap">
        <div className="lg:w-1/3 w-full lg:m-0 m-6 mb-0 text-center">
          <p className="text-sm text-gray-700">
            Copyright 2021 • Created by{' '}
            <a href="https://soulprovidr.fm">Soul Provider</a>{' '}
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
);
