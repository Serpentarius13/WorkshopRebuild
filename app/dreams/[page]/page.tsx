import { client } from "../../../apollo-client";
import { gql } from "@apollo/client";

import { fetchAllDreams } from "../../../queries/queries";

import Link from "next/link";
import DreamPageLayout from "../../../components/dreams/dreamLayout";
import DreamWideItem from "../../../components/dreams/dreamWideItem";

const pageSize = 10;

const page = async ({ params: { page } }) => {
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
export default page;

export async function generateStaticParams() {
  try {
    const dreams = await fetchAllDreams();

    const pages = countPages(dreams);

    return makeParams(pages);
  } catch (err) {
    console.log(err);
  }
}

export const countPages = (dreams) => {
  const pageSize = 10;

  const pages = Math.ceil(dreams.length / 10);

  console.log(pages, "PAGES");

  return pages;
};

const makeParams = (pages) => {
  const arr: any = [];

  for (let i = 1; i <= pages; i++) {
    arr.push({ page: String(i) });
  }

  return arr;
};
