import { operationName } from "@apollo/client";
import axios from "axios";
import * as build from "gql-query-builder";
import { endpoint } from "../apollo-client";
import BigDreamTemplate from "../components/dreamTemplates/bigDreamTemplate";



export default async function Home() {
  return (
    <div className="container mx-auto bg-red-600 h-screen">
      {" "}
      <BigDreamTemplate />
    </div>
  );
}
