import { communities, Link, CommunityItem } from "../../community-list"

const Communities = () => {
  return (
    <div className="text-center">
      <h1 className="text-6xl font-bold">
        <span className="underline decoration-primary">C</span>ommunities
      </h1>
      <p className="pt-24">
        There is a bunch of niche communities in the digital, design, coding
        spaces. Here is our list:
      </p>
      {communities.map((c: CommunityItem, i) => {
        return (
          <div className="card bg-base-300 my-12" key={i}>
            <div className="card-body">
              <h2 className="card-title justify-center">
                <a className="underline" href={c.title.url}>
                  {c.title.text}
                </a>
              </h2>
              <div className="text-left pt-4">
                <p className="font-bold">Links :</p>
                <ul className="list-disc pl-8 pb-6">
                  {c.links.map((l: Link, i) => {
                    return (
                      <li key={i}>
                        <a className="underline" href={l.url}>
                          {l.text}
                        </a>
                      </li>
                    )
                  })}
                </ul>

                <p className="font-bold">When : </p>
                <p className="pb-6">{c.when}</p>

                <p className="font-bold">Where : </p>
                <p className="pb-6">{c.where}</p>

                <p className="font-bold">Who : </p>
                <p className="pb-6">{c.who}</p>

                <p className="font-bold">Format : </p>
                <p className="pb-6">{c.format}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Communities
