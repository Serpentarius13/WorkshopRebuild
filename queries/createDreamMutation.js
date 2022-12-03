import { gql } from "@apollo/client";
import * as builder from "gql-query-builder";

import axios from "axios";

import { endpoint } from "../apollo-client";

// export const createFields = (blueprint, additionalFields = []) => {
//   const fields = blueprint.map((field) => field.name);
//   console.log(fields);
//   return [...fields, ...additionalFields];
// };

export const createQuery =
  (fields, operationName, mutate = false) =>
  (formData) => {
    if (mutate)
      return builder.mutation({
        operation: operationName,
        fields: fields,
        variables: formData,
      });
    else
      return builder.query({
        operation: operationName,
        fields: fields,
        variables: formData || {},
      });
  };
