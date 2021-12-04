export const isBeforeGoLiveDate = (stats) => {
  console.log({ stats });
  const currentDate = new Date();
  const dropDate = getDropDate(stats);

  console.log(dropDate);

  return currentDate < dropDate;
};

export const getDropDate = (stats) => new Date(stats.goLiveData * 1000);
