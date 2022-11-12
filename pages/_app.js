import Layout from "../components/Layout"; //the Layout component is imported to be rendered in _app.js
import "../styles/globals.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-7Q05NMFFNZ`}
      />

      <Script strategy="afterInteractive">
        {`  window.dataLayer = window.dataLayer || [];
   function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-7Q05NMFFNZ');`}
      </Script>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
