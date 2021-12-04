export const MintedSnacks = ({ items }) => (
  <div className="gif-container">
    <p className="sub-text">✨ Minted Snacks ✨</p>
    <div className="gif-grid">
      {items.map((item) => (
        <div className="gif-item" key={item}>
          <img src={item} alt={`Minted NFT ${item}`} />
        </div>
      ))}
    </div>
  </div>
);
