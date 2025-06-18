import React from "react";
import { Icon } from "@iconify/react";
import { rubik } from "../fonts/fonts";
import Link from "next/link";

type CardProps = {
  type: string;
  icon: string;
  data: {
    id: string;
    header: string;
    content: string;
    tag: string;
  }[];
};

const Card = ({ type, icon, data }: CardProps) => {
  return (
    <div
      className={`w-full max-w-100 min-h-15  rounded-lg bg-gray-200 flex items-center ${rubik.className}`}
    >
      <i className="w-15 h-15 flex justify-center items-center">
        <Icon icon={icon} width="23" height="23" className="text-gray-600" />
      </i>

      <article className=" my-4 border-l-2 border-gray-300 gap-2">
        {data.map((item) => (
          <div key={item.id}>
            {item.id !== "1" && (
              <hr className="mx-5 my-1 w-10 border-gray-400" />
            )}
            <Link
              href={
                type === "phone"
                  ? `tel:${item.content}`
                  : type === "email"
                  ? `mailto:${item.content}`
                  : type === "location"
                  ? `https://www.google.com/maps?q=${encodeURIComponent(
                      item.content
                    )}`
                  : "#"
              }
              className="px-3 flex flex-col gap-[1px] border-l-4 border-transparent transition-all duration-300 ease-in-out hover:border-cyan-700"
            >
              <p className="text-[0.9rem] font-[400] text-gray-500 flex items-center">
                {item.header}
                {item.tag && (
                  <span className="italic ml-1 py-[1px] px-[5px] rounded-[3px]  bg-cyan-800 text-gray-200 text-[0.8rem] ">
                    #{item.tag}
                  </span>
                )}
              </p>
              <p className="text-[1rem] text-gray-700">{item.content}</p>
            </Link>
          </div>
        ))}
      </article>
    </div>
  );
};

export default Card;
