export const isBeforeGoLiveDate = (stats) => {
  const currentDate = new Date();
  const dropDate = getDropDate(stats);

  return currentDate < dropDate;
};

export const getDropDate = (stats) => new Date(stats.goLiveData * 1000);
