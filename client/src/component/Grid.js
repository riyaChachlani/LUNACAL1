import React from "react";
import { QuestionCircleOutlined } from "@ant-design/icons";
function Grid() {
  return (
    <div className="flex flex-col">
      <QuestionCircleOutlined />
      <div className="grid grid-cols-2 gap-[1px] w-[24px] h-[30.69px] relative mt-[150px]">
        <div className="w-[9.31px] h-[9.31px] rounded-[1.16px] bg-[#6F787C]"></div>
        <div className="w-[9.31px] h-[9.31px] rounded-[1.16px] bg-[#6F787C]"></div>
        <div className="w-[9.31px] h-[9.31px] rounded-[1.16px] bg-[#6F787C]"></div>
        <div className="w-[9.31px] h-[9.31px] rounded-[1.16px] bg-[#6F787C]"></div>
        <div className="w-[9.31px] h-[9.31px] rounded-[1.16px] bg-[#6F787C]"></div>
        <div className="w-[9.31px] h-[9.31px] rounded-[1.16px] bg-[#6F787C]"></div>
      </div>
    </div>
  );
}
export default Grid;
