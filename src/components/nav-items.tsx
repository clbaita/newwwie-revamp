import Link from "next/link"

const NavItems = () => {
  return (
    <>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/communities">Communities</Link>
      </li>
      <li>
        <Link href="/events">Events</Link>
      </li>
      <li>
        <Link href="/invite">Invite</Link>
      </li>
    </>
  )
}

export default NavItems
