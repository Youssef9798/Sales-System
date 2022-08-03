const datesFilter = require('./datesFilter.js');

const data = [
  {
    date_ms: 1641772800000,
    performance: 0.2,
  },
  {
    date_ms: 1641859200000,
    performance: 0.33,
  },
  {
    date_ms: 1641945600000,
    performance: 0.53,
  },
  {
    date_ms: 1642032000000,
    performance: 0.31,
  },
  {
    date_ms: 1642118400000,
    performance: 0.65,
  },
  {
    date_ms: 1642204800000,
    performance: 0.88,
  },
  {
    date_ms: 1642291200000,
    performance: 0.07,
  },
];

let start_date = 1641772800000; // == 10 Jan 2022
let end_date = 1641945600000; // == 12 Jan 2022

console.log(datesFilter(data, 1641772800000, 1641945600000));

describe("Filter Dates", () => {
  test('filter the data according to dates from 10 Jan 2022 to 12 Jan 2022 in UNIX format should be length of 3 items', () => {
    expect(datesFilter(data, start_date, end_date)).toHaveLength(3);
  });
 })