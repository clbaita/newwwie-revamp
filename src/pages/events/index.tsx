import { fetchEvents } from "../../helpers/event-fetcher"
import { ExtractedEvent } from "../../types"

export interface EventProps {
    events: ExtractedEvent[];
}

const Events = ({ events }: EventProps) => {

    return (
    <div className="text-center">
      <h1 className="text-6xl font-bold"><span className="underline decoration-primary">E</span>vents</h1>
          { events && events.map((e, i) => {
            return (
              <div className="card bg-base-300 my-12" key={i}>
                <div className="card-body">
                  <h2 className="card-title justify-center">
                    <a className="underline" href={e.event.eventUrl}>{e.event.title}</a>
                  </h2>
                </div>
              </div>
            );
          })}
    </div>
  );
};

// Runs during build to fetch the events
// Unfortunately the meetup api doesn't allow CORS so we can't offload this to the client
export async function getStaticProps() {
    const events = await fetchEvents()
    return {
      props: {
        events,
      },
    }
}

export default Events;
