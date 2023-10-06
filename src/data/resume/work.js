/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'BRAC Intra Programming Contest',
    position: 'Contestant',
    url: '',
    startDate: '2019-12-10',
    endDate: '2022-12-10',
  },
  {
    name: 'Robotics Club of BRAC University',
    position: 'IT Executive',
    url: '',
    startDate: '2020-08-01',
    endDate: '2022-10-10',
    summary: `I worked as a IT enthusiast in one of my places at BRAC University.
    Worked as a IT person for handling Graphics designs and other technical staffs.`,
    highlights: [
      'Made Graphic Designs for various events',
      'Attended a Robotics Hackathon',
      'Collaborated with other members for tech support in events',
    ],
  },
];

export default work;
