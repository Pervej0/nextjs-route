import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React from "react";

const page = ({
  params,
  searchParams,
}: {
  params: Params;
  searchParams: Record<string, unknown>;
}) => {
  console.log(params, searchParams);
  return (
    <div>
      <h3>Review Id:</h3>
    </div>
  );
};

export default page;
