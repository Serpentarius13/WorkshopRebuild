"use client";

// 'use client' marks this page as a Client Component
// https://beta.nextjs.org/docs/rendering/server-and-client-components

import { useEffect } from "react";
import StatusPopOver, { StatusTypes } from "../../components/statusPopOver";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <button
        className="mx-4 my-2 bg-purple-800 text-white"
        onClick={() => reset()}
      >
        Get back
      </button>
    </div>
  );
}
