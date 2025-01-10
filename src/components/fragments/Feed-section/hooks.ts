import { useState } from "react";

export const useFeed = () => {
  const [activeTab, setActiveTab] = useState("For You");

  const tabs = ["Popular", "For You"];

  return {
    activeTab,
    tabs,
    setActiveTab,
  };
};
