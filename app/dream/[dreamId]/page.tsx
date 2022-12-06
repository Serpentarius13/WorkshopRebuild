"use client";

import axios from "axios";
import * as builder from "gql-query-builder";

import { client } from "../../../apollo-client";
import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

const DreamPage = ({ params: { dreamId } }) => {
  const query = gql`
    query Query($id: ID) {
      getOneDream(id: $id) {
        dreamName
        description
      }
    }
  `;

  const { data, loading, error } = useQuery(query, {
    variables: { id: dreamId },
    client: client,
  });

  const dream = data?.getOneDream




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
  return (
    <>
      {data && (
        <div className="container">
          {" "}
          <h1> 123 </h1>
          <p> 123 </p>{" "}
        </div>
      )}
    </>
  );
};
export default DreamPage;
