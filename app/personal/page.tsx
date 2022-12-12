"use client";

import { gql, useQuery } from "@apollo/client";
import Error from "next/error";
import { useSnapshot } from "valtio";
import { client } from "../../apollo-client";
import PersonalLayout from "../../components/personalPage/personalLayout";
import Loading from "../../components/status/Loading";
import { getUserData } from "../../queries/queries";
import { store, userStore } from "../../store/store";
import { ModalTypes } from "../../types/enum";

import { calcDate } from "./../../utils/date";

const PersonalPage = () => {
  const { openModal } = store;

  const { data, loading, error, refetch } = useQuery(getUserData, { client });
  const { currentUser } = useSnapshot(userStore);

  if (loading) return <Loading />;
  if (error && !currentUser)
    return (
      <div className="flex flex-col justify-center items-center space-y-4 mt-4">
        {" "}
        <h1 className="text-3xl text-purple-800 "> Please login first </h1>{" "}
        <button
          className="px-8 py-4 bg-purple-500 text-white active:bg-purple-800"
          onClick={() => openModal(ModalTypes.LOGIN)}
        >
          {" "}
          Login{" "}
        </button>{" "}
        <button
          className="px-8 py-4 bg-purple-500 text-white active:bg-purple-800"
          onClick={() => openModal(ModalTypes.SIGNUP)}
        >
          {" "}
          Sign up{" "}
        </button>{" "}
      </div>
    );

  const { comments, dreams, rating } = data?.getUserData;

  return (
    <PersonalLayout
      user={currentUser}
      dreams={dreams}
      comments={comments}
      rating={rating}
      refetch={refetch}
    />
  );
};
export default PersonalPage;
