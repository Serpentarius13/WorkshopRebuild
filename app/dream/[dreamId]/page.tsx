"use client";

import axios from "axios";
import * as builder from "gql-query-builder";

import { client } from "../../../apollo-client";
import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import DreamFullReadPage from "../../../components/dreams/dreamPage";

import { getOneDream } from "../../../queries/queries";
import StatusPopOver, { StatusTypes } from "../../../components/statusPopOver";

const DreamPage = ({ params: { dreamId } }) => {
  const { data, loading, error, refetch } = useQuery(getOneDream, {
    variables: { id: dreamId },
    client: client,
    pollInterval: 3000,
  });

  const dream = data?.getOneDream;



  if (loading)
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        {" "}
        <StatusPopOver type={StatusTypes.STATUS_LOADING} />{" "}
      </div>
    );

  if (error)
    return (
      <div className="w-screen h-screen items-center justify-center">
        {" "}
        <h1 className="text-4xl text-purple-800 italic">
          {" "}
          Perhaps this dream doesnt exist. Try reloading page.{" "}
        </h1>{" "}
      </div>
    );
  return <> {dream && <DreamFullReadPage refetch={refetch} dream={dream} />}</>;
};
export default DreamPage;
