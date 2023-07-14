export interface MeetupEvent {
  event: Event
  group: Group
}

export interface Event {
  title: string
  description: string
  dateTime: string
  eventUrl: string
  going: number
  maxTickets: number
  duration: string
  imageUrl: string
  venue: Venue
}

export interface Venue {
  name: string
  lat: number
  lng: number
  address: string
  city: string
}

export interface Group {
  name: string
  urlname: string
  groupPhoto: GroupPhoto
  logo: GroupPhoto
  unifiedEvents?: UnifiedEvents
}

export interface GroupPhoto {
  id: string
  baseUrl: string
  preview: null
}

export interface MeetupGroupResponse {
  data: MeetupGroup
}

export interface MeetupGroup {
  groupByUrlname: Group
}

export interface UnifiedEvents {
  edges: Edge[]
}

export interface Edge {
  node: Node
}

export interface Node {
  title: string
  description: string
  dateTime: string
  eventUrl: string
  going: number
  maxTickets: number
  duration: string
  imageUrl: string
  venue: Venue
}

export interface ExtractedEvent {
  event: Node
  group: Group
}
