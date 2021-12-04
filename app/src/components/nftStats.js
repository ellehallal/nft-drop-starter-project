export const NftStats = ({ stats }) => (
  <>
    <p>{`Drop Date: ${stats.goLiveDateTimeString}`}</p>
    <p>{`Snacks Minted: ${stats.itemsRedeemed} / ${stats.itemsAvailable}`}</p>
  </>
);
