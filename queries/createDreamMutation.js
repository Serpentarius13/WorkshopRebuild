import { gql } from "@apollo/client";
import * as builder from "gql-query-builder";

import axios from "axios";

import { endpoint } from "../apollo-client";
import { useLoadError } from "../store/store";

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

export const createMutation = (blueprint, operationName) => (formData) =>
  builder.mutation({
    operation: operationName,
    fields: createFields(blueprint),
    variables: formData,
  });

export const createQuery =
  (print, operationName) =>
  (formData = null) =>
    builder.query({
      operation: operationName,
      fields: createFields(blueprint),
      variables: formData || "",
    });
