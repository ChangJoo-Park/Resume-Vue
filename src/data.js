const introduce = {
  name: 'DANA ANDREWS',
  jobTitle: 'Aerospace Engineer',
  livedIn: 'Pasadena, CA',
  summary: 'Highly motivated, decisive and results-oriented individual seeking a full-time position as an Aerospace Engineer in the areas of Design, Structural Analysis, and Propulsion.'
}

const experiences = [
  {
    workAt: 'SPACEX',
    position: 'Propulsion Engineer',
    duration: 'Aug, 2011 – Current',
    description: 'Responsibilities included: writing technical reports and other documentation, such as handbooks and bulletins, for use by engineering staff, management, and customers, analyzing project requests and proposals and engineering data to determine feasibility, predictability, cost, and production time of aerospace or aeronautical product.',
    highlights: [
      'Reviewing performance reports and documentation from customers and field engineers, and inspect malfunctioning or damaged products to determine problem.',
      'Evaluating and approving selection of vendors by study of past performance and new advertisements.',
      'Planning and coordinating activities concerned with investigating and resolving customer\'s reports of technical problems with aircraft or aerospace vehicles.'
    ]
  },
  {
    workAt: 'JPL, NASA',
    position: 'Aerospace Engineer',
    duration: 'Jun, 2005 – May, 2011',
    description: 'Responsibilities included: performing a variety of engineering work in designing, constructing, and testing aircraft, missiles, and spacecraft.',
    highlights: [
      'Developing design criteria for aeronautical or aerospace products or systems, including testing methods, production costs, quality standards, and completion dates.',
      'Planning and conducting experimental, environmental, operational and stress tests on models and prototypes of aircraft and aerospace systems and equipment.',
      'Formulating conceptual design of aeronautical or aerospace products or systems to meet customer requirements.'
    ]
  },
  {
    workAt: 'BOEING',
    position: 'Flight Test Engineer Intern',
    duration: 'Nov, 2001 – Apr, 2005',
    description: 'Shadowed aerospace engineering and mechanical teams and helped prepare flight and advance fabrication reports, weight and balance forms and flight test safety checklists for new aircraft. Participated in test coordination meetings, on-aircraft ground testing and instrumentation installs.',
    highlights: [
      'Increased knowledge of aircraft systems, flight test program procedures, documentation and regulatory requirements.',
      'Served on team that conducted flight readiness reviews for new aircraft. Helped perform ground/electromagnetic interference tests, fit checks and remote site test preparations.'
    ]
  }
]

const educations = [
  {
    educatedAt: 'UNIVERSITY OF PHOENIX',
    title: 'MBA - Aerospace Engineering',
    duration: '1999 – 2001',
    description: 'Quis sunt officia do labore veniam enim deserunt aute esse excepteur.',
    highlights: [
      'Id officia fugiat laborum amet mollit sint anim laborum sit id.'
    ]
  },
  {
    educatedAt: 'UNIVERSITY OF PHOENIX',
    title: 'Bachelor of Science - Aerospace Engineering',
    duration: '1995 – 1998'
  }
]

const projects = [
  {
    title: 'Project 1',
    meta: 'Propulsion Engineer',
    description: 'Responsibilities included: writing technical reports and other documentation, such as handbooks and bulletins, for use by engineering staff, management, and customers, analyzing project requests and proposals and engineering data to determine feasibility, predictability, cost, and production time of aerospace or aeronautical product.',
    images: [
      {
        thumbnail: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=firstimage&w=150&h=150',
        original: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=firstimage&w=900&h=900'
      },
      {
        thumbnail: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=secondimage&w=150&h=150',
        original: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=secondimage&w=900&h=900'
      },
      {
        thumbnail: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=thirdImage&w=150&h=150',
        original: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=thirdImage&w=900&h=900'
      }
    ]
  },
  {
    title: 'Project 1',
    meta: 'Propulsion Engineer',
    description: 'Responsibilities included: writing technical reports and other documentation, such as handbooks and bulletins, for use by engineering staff, management, and customers, analyzing project requests and proposals and engineering data to determine feasibility, predictability, cost, and production time of aerospace or aeronautical product.',
    images: [
      {
        thumbnail: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=firstimage&w=150&h=150',
        original: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=firstimage&w=900&h=900'
      },
      {
        thumbnail: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=secondimage&w=150&h=150',
        original: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=secondimage&w=900&h=900'
      },
      {
        thumbnail: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=thirdImage&w=150&h=150',
        original: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=thirdImage&w=900&h=900'
      }
    ]
  }
]

const footerData = {
  github: 'ABCD',
  twitter: 'ABCD',
  facebook: 'ABCD',
  google: 'ABCD',
  blog: 'https://google.com'
}

const skills = [
  { name: 'Javascript' },
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'Ruby on Rails' },
  { name: 'Vue.js' },
  { name: 'Template Engines' },
  { name: 'git' }
]

export default {
  introduce: introduce,
  experiences: experiences,
  educations: educations,
  projects: projects,
  skills: skills,
  footerData: footerData
}
