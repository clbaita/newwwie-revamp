import Link from "next/link"

const About = () => {
  return (
    <div className="text-center">
      <h1 className="text-6xl font-bold">
        <span className="underline decoration-primary">A</span>bout
      </h1>
      <p className="pt-24">
        Starting as an off-topic conversation for a bunch of programmers working
        out of shared workspaces in Newcastle, it eventually grew with more
        locals.
      </p>
      <p className="pt-12">
        Newwwie at its core is a place to blow off steam, rant about whatever
        technology we are currently wrestling, share interesting stuff and help
        break out of day-to-day traps of working online.
      </p>
      <p className="pt-12">
        If this sounds like something you would like to checkout, request an{" "}
        <Link className="underline" href="/invite">
          invite
        </Link>
        .
      </p>
    </div>
  )
}

export default About
