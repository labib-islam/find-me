import React from "react";
import Card from "./Card";
import { CardInfo } from "../types/types";

const Location = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DB_SHEET_LINK}/location`);
  const locationDetails: CardInfo[] = await res.json();

  return (
    <Card type="location" icon="weui:location-filled" data={locationDetails} />
  );
};

export default Location;
