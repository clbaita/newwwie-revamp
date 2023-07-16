import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { NewwwieLogo } from "../components/newwwie-logo"
import NavItems from "../components/nav-items"
import Link from "next/link"
import Head from "next/head"

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Head>
        <title>
          Newie | an open community of digital creators in newcastle nsw.
        </title>
        <meta
          property="og:title"
          content="Newie | an open community of digital creators in newcastle nsw."
          key="title"
        />
        <meta
          property="og:description"
          content="An open community of digital creators in newcastle nsw."
        />
      </Head>
      <div className="navbar bg-base-300 sticky top-0 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 rounded-box w-52"
            >
              <NavItems />
            </ul>
          </div>
          <Link href="/" className="btn-ghost rounded-lg">
            <NewwwieLogo width={"120"} height={"60"} />
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavItems />
          </ul>
        </div>
      </div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Component {...pageProps} />
      </main>
      <div className="bottom-0 h-16 flex justify-center">
        <div className="px-4">© 2023</div>
        <div className="px-4">
          <Link
            href="https://github.com/newwwie/Code-Of-Conduct/blob/master/README.md"
            rel="external"
            className="link"
          >
            Code of conduct
          </Link>
        </div>
        <div className="px-4">
          <Link
            href="https://github.com/newwwie/newwwie.com"
            className="link"
            rel="external"
          >
            Edit on Github
          </Link>
        </div>
      </div>
    </div>
  )
}

export default App
