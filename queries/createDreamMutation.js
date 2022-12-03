import { gql } from "@apollo/client";
import * as builder from "gql-query-builder";

import axios from "axios";

import { endpoint } from "../apollo-client";

export const createDreamFields = [
  "name",
  "time",
  "email",
  "dreamName",
  "description",
];

export const createFields = (blueprint, additionalFields = []) => {
  const fields = blueprint.map((field) => field.name);
  console.log(fields);
  return [...fields, ...additionalFields];
};

export const createQuery =
  (blueprint, operationName, type, additionalFields = []) =>
  (formData) => {
    const fields = createFields(blueprint, additionalFields);
    console.log(fields);
    if (type)
      return builder.mutation({
        operation: operationName,
        fields,
        variables: formData,
        operationName: "Mutation",
      });
    else
      return builder.query({
        operation: operationName,
        fields: createFields(blueprint, additionalFields),
        variables: formData || "",
        operationName: "Query",
      });
  };
