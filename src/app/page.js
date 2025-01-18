import About from "./components/About";
import Footer from "./components/Footer";
import GetStarted from "./components/GetStarted";
import HeroSection from "./components/HeroSection";
import SupportedChains from "./components/SupportedChains";
import Usecase from "./components/Usecase";
import Walkthrough from "./components/Walkthrough";
// import Script from "next/script";
// import Head from "next/head";


export default function Home() {
  return (
    <>
      {/* <Script id="googleanalytics_page"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="googleanalytics_" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}',{
          page_path: window.location.pathname,
          ![image](https://cdn.sanity.io/images/dgsq0x0m/production/61f24596fb210134e5df6a1dfa285de0f24791cc-1549x601.png?w=450)});
         `}
      </Script>

      <Head>
        <title>Welcome!</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head> */}


      <HeroSection />
      <SupportedChains />
      <About />
      <Usecase />
      <Walkthrough />
      <GetStarted />
      <Footer />
    </>
  );
}