import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React from "react";

const page = ({ params }: { params: Params }) => {
  return (
    <div>
      <h1>Hello nested {params.productId}</h1>
    </div>
  );
};

export default page;
