import Head from "next/head";
import styles from "./Layout.module.scss";
import utilStyles from "../../styles/utils.module.scss";

const name = "DAILYWRAP";
export const siteTitle = "DailyWrap V2";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{siteTitle}</title>
        <link
          rel="icon"
          href="https://us-central1-rapplerinternal.cloudfunctions.net/dailywrap-v2-dev/images/logo.png"
        />
        <meta name="description" content="Daily Wrap" />
        <meta
          property="og:image"
          content={`https://us-central1-rapplerinternal.cloudfunctions.net/dailywrap-v2-dev/images/logo.png/${encodeURI(
            siteTitle
          )}.png`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <img
          src="https://us-central1-rapplerinternal.cloudfunctions.net/dailywrap-v2-dev/images/logo.png"
          height={127}
          width={150}
          alt={name}
        />
        <h1 className={utilStyles.heading2Xl}>{name}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
