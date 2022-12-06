import axios from "axios";
import * as builder from "gql-query-builder";

import { client, endpoint } from "../../../apollo-client";
import { gql } from "@apollo/client";
import { useEffect } from "react";
import { dreamFields } from "../../../queries/queries";

const fetchOne = async (dreamId) => {
  try {
    const { data } = await client.query({
      query: gql`
        query Query($id: ID) {
          getOneDream(id: $id) {
            dreamName
            description
          }
        }
      `,
      variables: { id: dreamId },
    });

    return data;
  } catch (err) {
    return;
  }
};

const DreamPage = async ({ params: { dreamId } }) => {
  const dream = await fetchOne(dreamId);

  if (!dream)
    return (
      <div className="w-screen h-screen items-center justify-center">
        {" "}
        <h1 className="text-4xl text-purple-800 italic">
          {" "}
          Perhaps this dream doesnt exist. Try reloading page.{" "}
        </h1>{" "}
      </div>
    );
  return <div>DreamPage</div>;
};
export default DreamPage;
