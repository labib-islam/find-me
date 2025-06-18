import React from "react";

interface User {
  name: string;
  image: string;
}

const Header = async () => {
  const res = await fetch(`${process.env.DB_SHEET_LINK}/home`);
  const userInfo = await res.json();
  const user: User = userInfo[0];

  return (
    <>
      <div className="w-screen h-60 bg-gradient-to-bl from-teal-500 from-20% via-cyan-600 via-40% to-cyan-800 to-90% flex flex-col gap-5 justify-center items-center">
        <figure className="w-25 h-25 border-5 border-white rounded-full overflow-hidden flex justify-center">
          <img src={user.image} alt="" className="w-full h-full object-cover" />
        </figure>
        <header className="text-3xl text-white">{user.name}</header>
      </div>
    </>
  );
};

export default Header;
