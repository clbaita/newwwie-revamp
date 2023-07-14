import Link from "next/link"
import { fetchEvents } from "../../helpers/event-fetcher"
import { ExtractedEvent } from "../../types"
import Image from "next/image"

export interface EventProps {
  events: ExtractedEvent[]
}

const Events = ({ events }: EventProps) => {
  return (
    <div className="text-center">
      <h1 className="text-6xl font-bold">
        <span className="underline decoration-primary">E</span>vents
      </h1>
      <div className="flex flex-wrap justify-center">
        {events.map((e, i) => {
          const { event, group } = e
          return (
            <div className="card w-72 bg-base-300 shadow-xl my-6 mx-6" key={i}>
              <figure>
                <Image
                  src={event.imageUrl}
                  alt="Event photo"
                  width={676}
                  height={380}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{event.title}</h2>
                <p className="text-sm italic underline">
                  <Link href={`https://meetup.com/${group.urlname}`}>
                    Hosted by {group.name}
                  </Link>
                </p>
                <p className="text-sm italic">
                  {new Date(event.dateTime).toLocaleString("en-AU")}
                </p>
                <div className="card-actions justify-end">
                  <a href={event.eventUrl}>
                    <button className="btn btn-primary">More Info</button>
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// Runs during build to fetch the events and bake them into the page as static content
// Unfortunately the meetup api doesn't allow CORS so we can't offload this to the client
export async function getStaticProps() {
  const events = await fetchEvents()
  return {
    props: {
      events,
    },
  }
}

export default Events
