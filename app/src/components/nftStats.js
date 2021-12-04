export const NftStats = ({ stats }) => (
  <>
    <p>{`Drop Date: ${stats.goLiveDateTimeString}`}</p>
    <p>{`Items Minted: ${stats.itemsRedeemed} / ${stats.itemsAvailable}`}</p>
  </>
);
