import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar/navbar";
import ReusableForm from "../components/reusable-form/form.component";
import FormPopOver from "../components/reusable-form/formPopOver";
import FormInput from "../components/reusable-form/input.component";
import UniversalButton from "../components/uniButton.component";
import { store } from "../store/store";

import { subscribe, useSnapshot } from "valtio";

import styles from "../styles/Home.module.scss";

export default function Home() {
  const { modalOpenState } = useSnapshot(store);
  return (
    <>
      <Head>
        <title>Dream workshop</title>
        <meta name="description" content="Dream workshop website" />
        <link rel="icon" href="/aten.jpg" />
      </Head>
      <Navbar />
      {modalOpenState && (
        <FormPopOver>
          {" "}
          <ReusableForm blueprint={blueprint} type={true} name="newDream" />
        </FormPopOver>
      )}
    </>
  );
}

import { blueprint } from "./form";
