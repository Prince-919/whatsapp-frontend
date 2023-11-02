import React, { useEffect } from "react";
import { Sidebar } from "../components/sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getConversations } from "../features/chatSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (user?.token) {
      dispatch(getConversations(user.token));
    }
  }, [user]);
  return (
    <div className="min-h-screen dark:bg-dark_bg_1 flex justify-center items-center py-[19px] overflow-hidden">
      <div className="container min-h-screen flex">
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
