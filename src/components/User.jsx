import React from "react";
import Image from "next/image";
import ProfileImage from "@/assets/Profile.jpg";

const User = () => {
  return (
    <div>
      <div className="bg-slate-200 rounded-lg flex items-center gap-2 p-2 mb-3">
        <Image
          className="w-10 h-10 md:w-24 md:h-24 rounded-full"
          src={ProfileImage}
          alt="Profile Picture"
        ></Image>
        <h2 className="text-[10px] md:text-3xl">Kamanashis Biswas</h2>
      </div>
    </div>
  );
};

export default User;
