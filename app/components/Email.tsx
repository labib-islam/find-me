import React from "react";
import Card from "./Card";
import { CardInfo } from "../types/types";

const Email = async () => {
  const res = await fetch(`${process.env.DB_SHEET_LINK}/email`);
  const emailDetails: CardInfo[] = await res.json();

  return <Card type="email" icon="mingcute:mail-fill" data={emailDetails} />;
};

export default Email;
