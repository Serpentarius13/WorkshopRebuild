import { client } from "../../apollo-client";
import { gql } from "@apollo/client";

export const fetchAllDreams = async () => {
  try {
    const { data } = await client.query({
      query: gql`
        query Query {
          getAll {
            dreamName
          }
        }
      `,
    });

    return data.getAll;
  } catch (err) {
    console.log(err);
  }
};

const page = async () => {
  const data = await fetchAllDreams();
  console.log(data);
  return <div>page</div>;
};
export default page;
