import { ExtractedEvent, MeetupGroupResponse } from "../types"
import { meetupList } from "../meetup-list"

const buildGraphQLQuery = (name: string) => ({
  query: `query { groupByUrlname(urlname: "${name}") { name urlname groupPhoto {id baseUrl preview} logo { id baseUrl preview} unifiedEvents {edges{node {title description dateTime eventUrl going maxTickets duration imageUrl venue {name lat lng address city}}}} } }`,
})

const extractEvents = (response: MeetupGroupResponse): ExtractedEvent[] => {
  const { unifiedEvents, ...group } = response.data.groupByUrlname || {}
  return (unifiedEvents || { edges: [] }).edges.map((e) => {
    return {
      event: e.node,
      group: group,
    }
  })
}

const filterEventsNext30Days = (e: ExtractedEvent) => {
  const eventDate = new Date(e.event.dateTime)
  const now = new Date()
  const difference = eventDate.getTime() - now.getTime()
  const days = Math.ceil(difference / (1000 * 3600 * 24))
  return days <= 31
}

export const fetchEvents = async () => {
  const groups = await Promise.all(
    meetupList.map(async (group): Promise<MeetupGroupResponse> => {
      const query = buildGraphQLQuery(group)
      const response = await fetch("https://www.meetup.com/gql", {
        method: "POST",
        body: JSON.stringify(query),
      })
      return response.json()
    }),
  )
  const events = groups.map(extractEvents)
  const sortedEvents = events
    .flat()
    .filter(filterEventsNext30Days)
    .sort((a, b) => {
      return (
        new Date(a.event.dateTime).getTime() -
        new Date(b.event.dateTime).getTime()
      )
    })
  return sortedEvents
}
