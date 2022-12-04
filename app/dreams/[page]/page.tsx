import { client } from "../../../apollo-client";
import { gql } from "@apollo/client";

import { fetchAllDreams } from "../../../queries/queries";

import Link from "next/link";
import DreamPageLayout from "../../../components/dreams/dreamLayout";
import DreamWideItem from "../../../components/dreams/dreamWideItem";

import { countPages, pageSize, makeParams } from "./../../../utils/pages";

const Page = async ({ params: { page } }) => {
  const dreams = await fetchAllDreams();
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
              : "text-blue-800  bg-white"
          }`}
          key={ix}
          href={ind != page ? `/dreams/${ind}` : ""}
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
    const dreams = await fetchAllDreams();

    const pages = countPages(dreams);

    return makeParams(pages);
  } catch (err) {
    console.log(err);
  }
}
