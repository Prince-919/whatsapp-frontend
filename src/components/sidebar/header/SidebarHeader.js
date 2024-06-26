import React from "react";
import { useSelector } from "react-redux";
import { ChatIcon, CommunityIcon, DotsIcon, StoryIcon } from "./../../../svg";

const SidebarHeader = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <div className="h-[50px] dark:bg-dark_bg_2 flex items-center p16">
      <div className="w-full flex items-center justify-between">
        <button>
          <img
            className="w-[45px]   h-full object-cover rounded-full"
            src={user.picture}
            alt={user.name}
          />
        </button>
        <ul className="flex items-center gap-x-2 5">
          <li>
            <button className="btn">
              <CommunityIcon className="dark:fill-dark_svg_1" />
            </button>
          </li>
          <li>
            <button className="btn">
              <StoryIcon className="dark:fill-dark_svg_1" />
            </button>
          </li>
          <li>
            <button className="btn">
              <ChatIcon className="dark:fill-dark_svg_1" />
            </button>
          </li>
          <li>
            <button className="btn">
              <DotsIcon className="dark:fill-dark_svg_1" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarHeader;
