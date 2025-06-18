import React from "react";
import Card from "./Card";
import { CardInfo } from "../types/types";

const Phone = async () => {
  const res = await fetch(`${process.env.DB_SHEET_LINK}/phone`);
  const phoneDetails: CardInfo[] = await res.json();

  return <Card type="phone" icon="f7:phone-fill" data={phoneDetails} />;
};

export default Phone;
