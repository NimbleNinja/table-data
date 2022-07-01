export const getRegions = () => {
  return Object.keys(data);
};

export const getYears = () => {
  return [2017, 2018, 2019];
};

export const getRegionData = region => {
  return data[region].G;
};

export const data = {
  Kyivska: {
    G: {
      2017: {
        XX: {
          value: 150000,
          dateRelease: '2017-12-31',
        },
        YY: {
          value: 100000,
          dateRelease: '2017-12-31',
        },
        ZZ: {
          value: 77,
          dateRelease: '2017-12-31',
        },
      },
      2018: {
        XX: {
          value: 160000,
          dateRelease: '2018-12-31',
        },
        YY: {
          value: 110000,
          dateRelease: '2018-12-31',
        },
        ZZ: {
          value: 72,
          dateRelease: '2018-12-31',
        },
      },
      2019: {
        XX: {
          value: 130000,
          dateRelease: '2019-12-31',
        },
        YY: {
          value: 85000,
          dateRelease: '2019-12-31',
        },
        ZZ: {
          value: 72,
          dateRelease: '2019-12-31',
        },
      },
    },
  },
  Odeska: {
    G: {
      2017: {
        XX: {
          value: 10000,
          dateRelease: '2017-12-31',
        },
        YY: {
          value: 5000,
          dateRelease: '2017-12-31',
        },
        ZZ: {
          value: 45,
          dateRelease: '2017-12-31',
        },
      },
      2019: {
        XX: {
          value: 15000,
          dateRelease: '2019-12-01',
        },
        YY: {
          value: 0,
          dateRelease: '2022-02-18',
        },
        ZZ: {
          value: 0,
          dateRelease: '2022-02-18',
        },
      },
    },
  },
  Lvivska: {
    G: {
      2017: {
        XX: {
          value: 640000,
          dateRelease: '2017-12-31',
        },
        YY: {
          value: 510000,
          dateRelease: '2017-08-01',
        },
        ZZ: {
          value: 67,
          dateRelease: '2017-08-01',
        },
      },
      2018: {
        XX: {
          value: 740000,
          dateRelease: '2018-12-31',
        },
        YY: {
          value: 530000,
          dateRelease: '2018-08-01',
        },
        ZZ: {
          value: 61,
          dateRelease: '2018-08-01',
        },
      },
    },
  },
};

export const popupData = [
  {
    value: 2,
    date: new Date(),
    user: 'default user',
    comment: 'awdawd',
  },
  {
    value: 3,
    date: new Date(),
    user: 'default user',
    comment: 'reae',
  },
  {
    value: 4,
    date: new Date(),
    user: 'default user',
    comment: 'xxxx',
  },
];
