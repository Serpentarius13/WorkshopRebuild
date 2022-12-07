"use client";

import axios from "axios";
import * as builder from "gql-query-builder";

import { client } from "../../../apollo-client";
import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import DreamFullReadPage from "../../../components/dreams/dreamPage";

const DreamPage = ({ params: { dreamId } }) => {
  const query = gql`
    query Query($id: String) {
      getOneDream(id: $id) {
        dreamName
        description
        name
        time
        email
        authorId
        _id
        comments {
          commentTime
          commentAuthor
          commentText
        }
      }
    }
  `;

  const { data, loading, error, refetch } = useQuery(query, {
    variables: { id: dreamId },
    client: client,
    pollInterval: 3000,
  });

  const dream = data?.getOneDream;

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
