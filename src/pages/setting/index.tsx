import React, { useState } from "react";

const Settings = () => {
  const [selected, setSelected] = useState<string>("editProfile");
  const elements = [
    {
      title: "ویرایش پروفایل",
      key: "editProfile",
    },
    {
      key: "preferences",
      title: "اولویت ها",
    },
    {
      key: "security",
      title: "امنیتی",
    },
  ];
  const renderClassName = () => {
    switch (selected) {
      case "editProfile":
        return "right-0" + "";
      case "preferences":
        return "right-[150px]";
      case "security":
        return "right-[280px]";
      default:
        break;
    }
    return;
  };
  const renderComponent = () => {};
  const renderWidth = () => {
    let box = document.querySelector<HTMLElement>("#active-tab");
    return box?.offsetWidth;
  };
  return (
    <div className="bg-white rounded-[25px] p-[30px]">
      <div className="flex items-center relative gap-[72px]">
        {elements.map((ele, key) => (
          <button
            onClick={() => setSelected(ele.key)}
            key={key}
            id={`${ele.key === selected ? "active-tab" : ""}`}
            className={`font-medium ${
              selected === ele.key ? "text-[#2D60FF]" : "text-[#718EBF]"
            }`}
          >
            {ele.title}
          </button>
        ))}
        <div
          style={{ transition: "0.3s ease-in-out", width: renderWidth() }}
          className={`h-[3px] bg-primary w-[114px] absolute bottom-[-10px] rounded-tl-[10px] rounded-tr-[10px] ${renderClassName()}`}
        ></div>
      </div>
      <div className="bg-white-400 w-full h-[1px] mt-[10px]"></div>
    </div>
  );
};

export default Settings;
