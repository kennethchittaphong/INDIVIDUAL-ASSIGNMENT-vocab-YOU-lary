const sortByTitle = (array) => (
  [...array].sort((a, b) => {
    const title1 = a.title.toLowerCase();
    const title2 = b.title.toLowerCase();

    if (title1 < title2) {
      return -1;
    }
    if (title1 > title2) {
      return 1;
    }

    return 0;
  })
);

const sortNewestToOldest = (array) => (
  [...array].sort((a, b) => {
    const time1 = a.utcTime;
    const time2 = b.utcTime;

    if (time1 > time2) {
      return -1;
    }
    if (time1 < time2) {
      return 1;
    }

    return 0;
  })
);

const sortOldestToNewest = (array) => (
  [...array].sort((a, b) => {
    const time1 = a.utcTime;

    const time2 = b.utcTime;

    if (time1 < time2) {
      return -1;
    }
    if (time1 > time2) {
      return 1;
    }

    return 0;
  })
);

export { sortByTitle, sortNewestToOldest, sortOldestToNewest };
