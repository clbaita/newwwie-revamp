
export const communities: CommunityItem[] = [
    {
        title: {
            text: "Newcastle Coders Group",
            url: "http://ncg.asn.au/"
        },
        links: [
            {text: "Website", url: "http://ncg.asn.au/"},
            {text: "Facebook", url: "https://www.facebook.com/groups/ncgau/"},
            {text: "Meetup", url: "http://www.meetup.com/Newcastle-Coders-Group/"},
            {text: "Twitter", url: "https://twitter.com/ncgau"},
        ],
        when: "Monthly, 1st Wed",
        where: "ICT Building, University of Newcastle",
        who: "Anyone with an interest in learning about the latest technology as well as new approaches and techniques to designing and developing software.",
        format: "Group discussion of recent tech News. Organised presentations from local and/or visiting speakers. Socialising over pizza."
    },
    {
        title: {
            text: "Newcastle Women and Gender Diverse People in Tech",
            url: "https://www.meetup.com/newcastle-women-and-gender-diverse-people-in-tech/"
        },
        links: [
            {text: "Meetup", url: "https://www.meetup.com/newcastle-women-and-gender-diverse-people-in-tech/"}
        ],
        when: "Monthly, 2nd Thursday",
        where: "NewyTechPeople Office",
        who: "Women and Gender Diverse people who are in the technology field, a field adjacent to it, or have an interest in tech and would like to meet some lovely people who feel the same.",
        format: "The format varies but will often include networking/socialising and a presentation."
    },
    {
        title: {
            text: "Newcastle Cybersecurity Group",
            url: "https://www.meetup.com/Newcastle-Cyber-Security-Group/"
        },
        links: [
            {text: "LinkedIn", url: "https://www.linkedin.com/company/newcastlecybersecuritygroup/"},
            {text: "Meetup", url: "https://www.meetup.com/Newcastle-Cyber-Security-Group/"}
        ],
        when: "Monthly, 4th Thursday",
        where: "University of Newcastle I2N Hub Honeysuckle",
        who: "Anyone interested in or practicing cybersecurity! Our members include students, consultants, engineers, penetration testers, company directors, and more!",
        format: "You eat pizza from Bella Italia while a local expert presents. Our presenters cover broad topics ranging from GRC, Web Security, Fraud, Security Culture, Videogame Hacking, Linux Internals, and more! We then head over to Honeysuckle Hotel for networking and a few drinks post-event."
    },
    {
        title: {
            text: "Newcastle IoT Pioneers",
            url: "https://www.meetup.com/Newcastle-IoT-Pioneers/"
        },
        links: [
            {text: "Meetup", url: "https://www.meetup.com/Newcastle-IoT-Pioneers/"}
        ],
        when: "Monthly, 1st Thurs",
        where: "Stag and Hunter, Mayfield",
        who: "In or around Newcastle, Lake Macquarie or the Hunter? Keen to make a splash in the Internet of Things world? Then this Meetup is for you!",
        format: "Organised presentations."
    },
    {
        title: {
            text: "Hunter Data Analytics",
            url: "https://www.meetup.com/Hunter-Data-Analytics/"
        },
        links: [
            {text: "Meetup", url: "https://www.meetup.com/Hunter-Data-Analytics/"},
            {text: "LinkedIn", url: "https://www.linkedin.com/company/hunter-data-analytics/"},
            {text: "Twitter", url: "https://twitter.com/hunteranalytics"}
        ],
        when: "Monthly, 3rd Thurs",
        where: "Check meetup event details (but usually at University of Newcastle City Campus)",
        who: "Data analysts, data scientists, data engineers, statisticians, computer scientists, machine learning engineers etc",
        format: "Networking/chats, followed by organised presentations, followed by pub."
    },
    {
        title: {
            text: "NewcastleJS",
            url: "https://www.meetup.com/NewcastleJS-JavaScript-Meetup/"
        },
        links: [
            {text: "Meetup", url: "https://www.meetup.com/NewcastleJS-JavaScript-Meetup/"},
            {text: "Twitter", url: "https://twitter.com/newcastlejs"}
        ],
        when: "Monthly, 2nd Tues",
        where: "INNX Hub Cooperative Working Space",
        who: "Javascript enthusiasts. Amateur to Professional, AngularJS to NodeJS and everything else JS.",
        format: "Some beverages and short form presentations as well as industry news and jobs board. Post meetup drinks and food at The Edwards afterwards."
    },
    {
        title: {
            text: "Newcastle Salesforce Community Group",
            url: "https://www.meetup.com/newcastle-salesforce-community-group/"
        },
        links: [
            {text: "Meetup", url: "https://www.meetup.com/newcastle-salesforce-community-group/"},
            {text: "LinkedIn", url: "https://www.linkedin.com/groups/14186054/"}
        ],
        when: "Check Meetup event details",
        where: "NewyTechPeople, 24 Lindus Street, Wickham",
        who: "Salesforce users, technologists, strategists, designers, business process owners, analysts, novices, experts and everything inbetween.",
        format: "Drinks, beers, wine, pizza and a speaker/presentation slot. The group will grow and evolve to meet the needs and interests of our members."
    },
    {
        title: {
            text: "Blockchain Newcastle",
            url: "https://www.meetup.com/blockchain-newcastle/"
        },
        links: [
            {text: "Meetup", url: "https://www.meetup.com/blockchain-newcastle/"}
        ],
        when: "Check Meetup event details",
        where: "Check meetup event details",
        who: "People interested in future technology cycles, whether they be technologists, entrepreneurs, consultants, advisors or simply curious.",
        format: "Discussion over drinks, beers, wine, and food at local venues."
    },
];

export interface Link {
    text: string,
    url: string,
}

export interface CommunityItem {
    title: Link,
    links: Link[],
    when: string,
    where: string,
    who: string,
    format: string
}