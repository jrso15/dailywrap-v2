import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.scss";
import utilStyles from "../../styles/utils.module.scss";

const name = "DAILYWRAP";
export const siteTitle = "Daily Wrap V2";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/images/logo.png" />
        <meta name="description" content="Daily Wrap" />
        <meta
          property="og:image"
          content={`/images/logo.png/${encodeURI(siteTitle)}.png`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <Image src="/images/logo.png" height={100} width={110} alt={name} />
        <h1 className={utilStyles.heading2Xl}>{name}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
