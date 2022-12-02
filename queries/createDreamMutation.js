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

export const createFields = (blueprint) => {
  const fields = blueprint.map((field) => field.name);
  console.log(fields);
  return fields;
};

export const createQuery =
  (blueprint, operationName, type) => (formData) => {
    if (type)
      return builder.mutation({
        operation: operationName,
        fields: createFields(blueprint),
        variables: formData,
      });
    else
      return builder.query({
        operation: operationName,
        fields: createFields(blueprint),
        variables: formData || "",
      });
  };
