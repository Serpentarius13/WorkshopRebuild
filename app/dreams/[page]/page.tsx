import { client } from "../../../apollo-client";
import { gql, useLazyQuery, useQuery } from "@apollo/client";

import Link from "next/link";
import DreamPageLayout from "../../../components/dreams/dreamLayout";
import DreamWideItem from "../../../components/dreams/dreamWideItem";

import { countPages, pageSize, makeParams } from "../../../utils/pages";
import { useRouter } from "next/navigation";
import StatusPopOver, { StatusTypes } from "../../../components/statusPopOver";

const Page = async ({ params: { page } }) => {
  const {
    data: { getAll: dreams },
    loading,
    error,
  } = await client.query({
    query: gql`
      query Query {
        getAll {
          dreamName
          description
          name
          time
          email
          authorId
          _id
        }
      }
    `,
  });

  if (dreams.length === 0) {
    return (
      <div className="mx-auto mt-8 w-screen h-screen flex flex-col items-center justify-start p-8 ">
        <h1> Apparently, there is no dreams yet </h1>
        <h3> be first to add one! </h3>

        <Link
          className="px-8 py-4 bg-purple-800 text-white "
          href="/createDream"
        >
          {" "}
          Click here!{" "}
        </Link>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-screen h-screen flex items-center flex-col  justify-center">
        {" "}
        <h1 className=" font-medium text-red-800 text-3xl py-8 ">
          {" "}
          Apparently, there was an error{" "}
        </h1>
        <Link className="px-8 py-4 bg-purple-800 text-white " href="..">
          {" "}
          Get back{" "}
        </Link>{" "}
      </div>
    );
  }
  const pages = countPages(dreams);
  const curPage = page * pageSize;

  const slice = dreams.slice(curPage - pageSize, curPage);

  const getPagination = () =>
    Array.from(Array(pages)).map((el, ix) => {
      const ind = ix + 1;
      return (
        <Link
          className={`p-2  ${
            ind == page
              ? "text-white  bg-blue-800 cursor-default "
              : "text-blue-800  bg-white "
          }`}
          key={ix}
          href={`/dreams/${ind}`}
        >
          {" "}
          {ix + 1}
        </Link>
      );
    });

  return (
    <div>
      <DreamPageLayout pagination={getPagination}>
        {slice.map((el) => {
          return <DreamWideItem key={el._id} dream={el} />;
        })}
      </DreamPageLayout>
    </div>
  );
};
export default Page;

export async function generateStaticParams() {
  try {
    const { data: dreams } = await client.query({
      query: gql`
        query Query {
          getAll {
            dreamName
            description
            name
            time
            email
            authorId
          }
        }
      `,
    });

    const pages = countPages(dreams);

    return makeParams(pages);
  } catch (err) {
    console.log(err);
  }
}
