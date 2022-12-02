import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar/navbar";
import ReusableForm from "../components/reusable-form/form.component";
import FormPopOver from "../components/reusable-form/formPopOver";
import FormInput from "../components/reusable-form/input.component";
import UniversalButton from "../components/uniButton.component";

import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dream workshop</title>
        <meta name="description" content="Dream workshop website" />
        <link rel="icon" href="/aten.jpg" />
      </Head>
      <Navbar />

    </>
  );
}
