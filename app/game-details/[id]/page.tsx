import React from "react";
import Details from "./Details";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  return <Details id={id} />;
}
