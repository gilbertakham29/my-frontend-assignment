import Header from "@/components/Header";
import Section from "@/components/Section";
import Main from "@/components/Main";
import Image from "next/image";
import Footer from "@/components/Footer";
import Head from "next/head";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </Head>
      <Header />
      <Section />
      <Main />
      <Footer />
    </>
  );
}
