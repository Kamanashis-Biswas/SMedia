import React from "react";
import Image from "next/image";
import ProfileImage from "@/assets/Profile.jpg";
import { HeartIcon } from "@heroicons/react/24/solid";

const Post = () => {
  return (
    <div className="border p-2 rounded-lg mb-5 md:mb-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Image
            className="w-12 h-12 rounded-full"
            src={ProfileImage}
            alt="Profile Image"
          />
          <h2 className="ml-4 text-lg">Kamanashis Biswas</h2>
        </div>
        <div>
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-lg">
            Delete
          </button>
        </div>
      </div>
      <div>
        <h2 className="text-lg my-4">Post Title</h2>
      </div>
      <div>
        <Image className="rounded-xl" src={ProfileImage} alt="Profile Image" />
      </div>
      <div className="flex items-center justify-center mt-3 mb-4">
        <HeartIcon className="h-10 w-10 text-red-500" />
        <h2 className="ml-2 text-3xl font-bold">1</h2>
      </div>
      <div>
        <hr />
      </div>
      <div className="flex justify-center">
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-lg my-4">
          Love
        </button>
      </div>
    </div>
  );
};

export default Post;
