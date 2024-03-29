import { Metadata } from "next"
import { NewwwieLogo } from "../components/newwwie-logo"
import Link from "next/link"

const Home = () => {
  return (
    <div className="text-center">
      <NewwwieLogo width={"400"} height={"250"} className="mx-auto" />
      <p className="text-2xl font-bold">
        An <span className="italic">Open Community</span> of Digital Creators in
        Newcastle NSW
      </p>
      <p className="pt-12">
        A bunch of novocastrians friends, co-workers that started talking tech
        and other random things.
      </p>
      <p className="pt-12">
        To be a part of the conversation with 1k locals. We use a{" "}
        <Link className="link" href="https://slack.com">
          slack
        </Link>{" "}
        channel.
      </p>
    </div>
  )
}

export default Home
