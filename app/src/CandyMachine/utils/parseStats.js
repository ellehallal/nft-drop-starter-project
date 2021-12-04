export const parseStats = (candyMachine, setMachineStats) => {
  const itemsAvailable = candyMachine.data.itemsAvailable.toNumber();
  const itemsRedeemed = candyMachine.itemsRedeemed.toNumber();
  const itemsRemaining = itemsAvailable - itemsRedeemed;
  const goLiveData = candyMachine.data.goLiveDate.toNumber();
  const goLiveDateTimeString = goLiveDateString(goLiveData);

  return {
    itemsAvailable,
    itemsRedeemed,
    itemsRemaining,
    goLiveData,
    goLiveDateTimeString,
  };
};

const goLiveDateString = (goLiveData) =>
  `${new Date(goLiveData * 1000).toLocaleDateString()} @ ${new Date(
    goLiveData * 1000
  ).toLocaleTimeString()}`;
