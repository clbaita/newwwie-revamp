import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { NewwwieLogo } from "../components/newwwie-logo"
import NavItems from "../components/nav-items"
import Link from "next/link"
import Head from "next/head"

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="drawer">
      <Head>
        <title>
          Newie | an open community of digital creators in newcastle nsw.
        </title>
        <meta property="og:title" content="My page title" key="title" />
        <meta
          property="og:description"
          content="An open community of digital creators in newcastle nsw."
        />
      </Head>
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-300">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">
            <Link
              href="/"
              className="group rounded-lg transition-colors hover:bg-base-content/10"
            >
              <NewwwieLogo width={"120"} height={"60"} />
            </Link>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <NavItems />
            </ul>
          </div>
        </div>
        {/* Page content here */}
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <Component {...pageProps} />
        </main>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200">
          {/* Sidebar content here */}
          <NavItems />
        </ul>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-16 flex justify-center">
        <div className="px-4">© 2023</div>
        <div className="px-4">
          <Link
            href="https://github.com/newwwie/Code-Of-Conduct/blob/master/README.md"
            rel="external"
            className="underline"
          >
            Code of conduct
          </Link>
        </div>
        <div className="px-4">
          <Link
            href="https://github.com/newwwie/newwwie.com"
            className="underline"
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
