import twitterLogo from "../assets/twitter-logo.svg";
const BUILDSPACE_TWITTER_HANDLE = "_buildspace";
const TWITTER_LINK = `https://twitter.com/${BUILDSPACE_TWITTER_HANDLE}`;

export const Footer = () => {
  return (
    <div className="footer-container">
      <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
      <a
        className="footer-text"
        href={TWITTER_LINK}
        target="_blank"
        rel="noreferrer"
      >{`built on @${BUILDSPACE_TWITTER_HANDLE}`}</a>
    </div>
  );
};
