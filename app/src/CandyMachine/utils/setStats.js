export const setStats = (candyMachine, setMachineStats) => {
  const itemsAvailable = candyMachine.data.itemsAvailable.toNumber();
  const itemsRedeemed = candyMachine.itemsRedeemed.toNumber();
  const itemsRemaining = itemsAvailable - itemsRedeemed;
  const goLiveData = candyMachine.data.goLiveDate.toNumber();
  const goLiveDateTimeString = goLiveDateString(goLiveData);

  const stats = {
    itemsAvailable,
    itemsRedeemed,
    itemsRemaining,
    goLiveData,
    goLiveDateTimeString,
  };

  setMachineStats(stats);
  logStats(stats);
};

const logStats = (stats) => console.log(stats);
const goLiveDateString = (goLiveData) =>
  `${new Date(goLiveData * 1000).toLocaleDateString()} @ ${new Date(
    goLiveData * 1000
  ).toLocaleTimeString()}`;
