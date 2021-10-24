// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Rudra',
  imageBackground: false,
  openInNewTab: true,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: 'Good morning!',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Go to sleep!',

  // Weather
  weatherKey: 'a3667545a87c7816bb659ca224d0f4a1',
  weatherIcons: 'Nord', // 'Nord', 'Dark', 'White'
  weatherUnit: 'F', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '37.775',
  defaultLongitude: '-122.419',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Canvas',
      icon: 'grid',
      link: 'https://phm.instructure.com',
    },
    {
      id: '2',
      name: 'Khan-Academy',
      icon: 'database',
      link: 'https://www.khanacademy.org/,
    },
    {
      id: '3',
      name: 'Google-Drive-School',
      icon: 'cloud',
      link: 'https://drive.google.com/drive/u/1/my-drive',
    },
    {
      id: '4',
      name: 'Google-Drive',
      icon: 'cloud',
      link: 'https://drive.google.com/drive/u/0/',
    },
    {
      id: '5',
      name: 'Reddit',
      icon: 'bookmark',
      link: 'https://reddit.com',
    },
    {
      id: '6',
      name: 'Notion',
      icon: 'file-text',
      link: 'https://notion.so',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'toggle-left',
  secondListIcon: 'toggle-right',

  // Links
  lists: {
    firstList: [
      {
        name: 'AP-Chemistry',
        link: 'https://www.khanacademy.org/science/ap-chemistry-beta',
      },
      {
        name: 'AP-Calculus BC',
        link: 'https://www.khanacademy.org/math/ap-calculus-bc',
      },
      {
        name: 'AP-Statistics',
        link: 'https://www.khanacademy.org/math/ap-statistics',
      },
      {
        name: 'SAT',
        link: 'https://www.khanacademy.org/mission/sat',
      },
    ],
    secondList: [
      {
        name: 'Ranobes',
        link: 'https://ranobes.net/,
      },
      {
        name: 'ToLearn',
        link: 'https://www.youtube.com/playlist?list=PLckz1DxZN2h0ASRJ6TfYMExMSM4HFSMwc',
      },
      {
        name: 'MangaDex',
        link: 'https://mangadex.org/',
      },
      {
        name: 'Watch',
        link: 'https://animixplay.to/',
      },
    ],
  },
};
