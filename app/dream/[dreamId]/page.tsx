import axios from "axios";
import * as builder from "gql-query-builder";

import { client, endpoint } from "../../../apollo-client";
import { gql } from "@apollo/client";
import { useEffect } from "react";
import { dreamFields } from "../../../queries/queries";

export const fetchOne = async (dreamId) => {
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
    console.log(err);
  }
};

const DreamPage = async ({ params: { dreamId } }) => {
  const data = await fetchOne(dreamId);
  if (!data)
    return <div> Perhaps this dream doesnt exist. Try reloading page. </div>;
  return <div>DreamPage</div>;
};
export default DreamPage;
