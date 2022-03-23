import Head from "next/head";
import { ReactNode } from "react";

export default function Index(): ReactNode {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Carson Seese</title>
      </Head>

      <div className="fixed font-sans antialiased text-gray-900 leading-normal tracking-wider h-full w-full bg-cover bg-[url('/image/background.jpg')]">
        <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
          <div
            id="profile"
            className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-90 mx-6 lg:mx-0"
          >
            <div className="p-4 md:p-12 text-center lg:text-left">
              <img
                className="block lg:hidden mx-auto -mt-16 rounded-full shadow-xl w-48 h-48 object-cover"
                src="/image/portrait-cropped.jpg"
                alt="Carson portrait"
              />

              <h1 className="text-3xl font-bold pt-8 lg:pt-0">Carson Seese</h1>
              <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-sky-900 opacity-25"></div>
              <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                <svg
                  className="h-4 fill-current text-sky-900 pr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                </svg>
                Cybersecurity student
              </p>
              <p className="pt-2 text-gray-600 text-sm lg:text-sm flex items-center justify-center lg:justify-start">
                <svg
                  className="h-4 fill-current text-sky-900 pr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
                </svg>
                My desk or maybe outside <span>&nbsp;&mdash;&nbsp;</span> USA
              </p>
              <p className="pt-8 text-sm">
                Homelabber, log reader, code golfer, infrequent tweeter,
                frequent hiker/biker/kayaker. Mostly Go/TS dev but I try not to
                have favorites.
              </p>

              <div className="my-6 lg:mb-0 w-4/5 lg:w-full mx-auto flex justify-center">
                <a
                  className="link"
                  href="https://github.com/cs-5"
                  data-tippy-content="@github_handle"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    className="h-6 fill-current text-gray-600 hover:text-sky-900 "
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>GitHub</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
                <a
                  className="link"
                  href="https://twitter.com/carsons_5"
                  data-tippy-content="@twitter_handle"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    className="h-6 fill-current text-gray-600 hover:text-sky-900 pl-4"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Twitter</title>
                    <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                  </svg>
                </a>
                {/*
                <a
                  className="link"
                  href="#"
                  data-tippy-content="@unsplash_handle"
                >
                  <svg
                    className="h-6 fill-current text-gray-600 hover:text-green-700"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Unsplash</title>
                    <path d="M7.5 6.75V0h9v6.75h-9zm9 3.75H24V24H0V10.5h7.5v6.75h9V10.5z" />
                  </svg>
                </a>
                */}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/3">
            <img
              src="/image/portrait.jpg"
              alt="Carson portrait"
              width={1249}
              height={1837}
              className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
            />
          </div>

          <div className="fixed z-10 bottom-0 left-0 pl-2 pb-2 text-gray-600 text-xs">
            <p>
              Photo by{" "}
              <a
                href="https://unsplash.com/@nasa"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                NASA
              </a>{" "}
              on{" "}
              <a
                href="https://unsplash.com/photos/Q1p7bh3SHj8"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                Unsplash
              </a>
              .
            </p>
            <p>
              Site based on{" "}
              <a
                href="https://github.com/tailwindtoolbox/Profile-Card"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                Profile-Card
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
