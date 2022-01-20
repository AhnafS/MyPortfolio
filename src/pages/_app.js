import Theme from "../styles/theme";
import Header from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header>
        <title>Ahnaf Portfolio</title>
      </Header>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
