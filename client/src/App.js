import React, { useState, useEffect, useRef } from "react";
import { Button } from "antd";

import Grid from "./component/Grid";
import Divider from "./component/Divider";

import "antd/dist/reset.css";

//import "./App.css";

function App() {
  const [images, setImages] = useState([
    "https://s3-alpha-sig.figma.com/img/2dff/d2b7/1745c822191edd472339021e67b723d0?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D6H89TChaoFBeAlz1owe1RE3kzJ1~H0lf1CDbIGJgUxlr7znQ9nJO27KixQAYnEXlj1Xbxdd1R~UooNNkQavS5UjOyv0bClwaI5NvxIDARYiWu65rNhrufzA0QWjCPFAjqlHwFg8RYa~H5iOfxKXUSfumpvHaHu11oZKdVSdC-i63-4hevhtH2g52ggP40e6vImXrrAZCxD0~xqW18TY5pAgPOYElQxqv6wLa96VdgkAD63wENhVMXxh4Dhyp5BSe62HgKji~RwpxvdjZ41CxiKl5Mtpq1m3aPSGFmAnUmy8b3Qq1Tt-ANw00-9VBhT0GDOLNCqZL9vUnotAuX1dDw__",
    "https://s3-alpha-sig.figma.com/img/2dff/d2b7/1745c822191edd472339021e67b723d0?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D6H89TChaoFBeAlz1owe1RE3kzJ1~H0lf1CDbIGJgUxlr7znQ9nJO27KixQAYnEXlj1Xbxdd1R~UooNNkQavS5UjOyv0bClwaI5NvxIDARYiWu65rNhrufzA0QWjCPFAjqlHwFg8RYa~H5iOfxKXUSfumpvHaHu11oZKdVSdC-i63-4hevhtH2g52ggP40e6vImXrrAZCxD0~xqW18TY5pAgPOYElQxqv6wLa96VdgkAD63wENhVMXxh4Dhyp5BSe62HgKji~RwpxvdjZ41CxiKl5Mtpq1m3aPSGFmAnUmy8b3Qq1Tt-ANw00-9VBhT0GDOLNCqZL9vUnotAuX1dDw__",
    "https://s3-alpha-sig.figma.com/img/2dff/d2b7/1745c822191edd472339021e67b723d0?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D6H89TChaoFBeAlz1owe1RE3kzJ1~H0lf1CDbIGJgUxlr7znQ9nJO27KixQAYnEXlj1Xbxdd1R~UooNNkQavS5UjOyv0bClwaI5NvxIDARYiWu65rNhrufzA0QWjCPFAjqlHwFg8RYa~H5iOfxKXUSfumpvHaHu11oZKdVSdC-i63-4hevhtH2g52ggP40e6vImXrrAZCxD0~xqW18TY5pAgPOYElQxqv6wLa96VdgkAD63wENhVMXxh4Dhyp5BSe62HgKji~RwpxvdjZ41CxiKl5Mtpq1m3aPSGFmAnUmy8b3Qq1Tt-ANw00-9VBhT0GDOLNCqZL9vUnotAuX1dDw__",
  ]);

  const addImage = () => {
    setImages([
      ...images,
      `https://s3-alpha-sig.figma.com/img/2dff/d2b7/1745c822191edd472339021e67b723d0?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D6H89TChaoFBeAlz1owe1RE3kzJ1~H0lf1CDbIGJgUxlr7znQ9nJO27KixQAYnEXlj1Xbxdd1R~UooNNkQavS5UjOyv0bClwaI5NvxIDARYiWu65rNhrufzA0QWjCPFAjqlHwFg8RYa~H5iOfxKXUSfumpvHaHu11oZKdVSdC-i63-4hevhtH2g52ggP40e6vImXrrAZCxD0~xqW18TY5pAgPOYElQxqv6wLa96VdgkAD63wENhVMXxh4Dhyp5BSe62HgKji~RwpxvdjZ41CxiKl5Mtpq1m3aPSGFmAnUmy8b3Qq1Tt-ANw00-9VBhT0GDOLNCqZL9vUnotAuX1dDw__`,
    ]);
  };

  const [activeTab, setActiveTab] = useState(null);
  const [indicatorPosition, setIndicatorPosition] = useState(0);
  const [indicatorWidth, setIndicatorWidth] = useState(0);
  const tabRefs = useRef([]);
  const imageContainerRef = useRef(null);

  useEffect(() => {
    // Set initial width and position of the indicator based on the active tab
    if (tabRefs.current[activeTab]) {
      setIndicatorWidth(tabRefs.current[activeTab].offsetWidth);
      setIndicatorPosition(tabRefs.current[activeTab].offsetLeft);
    }
  }, [activeTab]);

  const handleTabClick = (index) => {
    if (index !== activeTab && tabRefs.current[index]) {
      setIndicatorWidth(tabRefs.current[index].offsetWidth);
      setIndicatorPosition(tabRefs.current[index].offsetLeft);
      setActiveTab(index);
    }
  };

  const scrollLeft = () => {
    if (imageContainerRef.current) {
      imageContainerRef.current.scrollBy({
        left: -185, // Adjust this value to control scroll amount
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (imageContainerRef.current) {
      imageContainerRef.current.scrollBy({
        left: 185, // Adjust this value to control scroll amount
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex justify-end min-h-screen bg-gray-800">
      <div className="w-1/2 bg-[#616161] h-[660px] mt-[100px] ml-[29px] rounded-[27px] border-[1px] w-[836px]"></div>
      <div className="w-1/2 p-8 ">
        <div
          className="flex flex-row bg-[#363C43] text-white p-4 rounded-[18.89px] shadow-lg mb-6 h-[316px] mt-[70px]"
          style={{
            boxShadow: "5.67px 5.67px 3.78px 0px #00000066",
          }}
        >
          <Grid />
          <div className="relative mr-[2px]">
            <div
              className="relative w-[530px] h-[60px] ml-[40px] gap-0 rounded-[23px] bg-[#171717] flex items-center justify-center shadow-lg"
              style={{ boxShadow: "0px 4.96px 12.4px 2.48px #00000040 inset" }}
            >
              <div className="relative flex  justify-between space-x-6 w-[512px]">
                <div
                  className="absolute h-[40px] w-[100px] bg-gray-600 rounded-[23px] shadow-md transition-all duration-300"
                  style={{
                    left: `${indicatorPosition}px`,
                    width: `${indicatorWidth}px`,
                  }}
                />
                {["About Me", "Experiences", "Recommended"].map(
                  (tab, index) => (
                    <div
                      key={index}
                      ref={(el) => (tabRefs.current[index] = el)}
                      onClick={() => handleTabClick(index)}
                      className={`relative z-10 cursor-pointer p-2 transition-all duration-200 ${
                        activeTab === index
                          ? "text-white"
                          : "hover:text-gray-400 "
                      }`}
                    >
                      {tab}
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="w-[550px] h-[62px] gap-0 mt-[30px] ml-[50px] mr-[10px] items-center">
              <p className="font-['Plus_Jakarta_Sans'] text-[20px] font-normal leading-[25.2px] text-left">
                Hello! I’m Riya, a passionate web developer specializing in the
                MERN stack. I've developed several web applications, with the
                most complex and dynamic being TASK-MASTER, a work management
                tool. It utilizes Redux for efficient state management.
              </p>
              <p className="font-['Plus_Jakarta_Sans'] text-[20px] font-normal leading-[25.2px] text-left">
                With a Bachelor of Technology in Communication and Computer
                Engineering from The LNM Institute of Information Technology,
                along with valuable experience as a Data Intern and a robust...
              </p>
            </div>
          </div>
          <div
            className="relative h-[64px] w-[8px] rounded-[8px] bg-gradient-to-b from-[#888989] to-[#4A4E54] mt-[100px] ml-[-20px] "
            style={{
              background:
                "linear-gradient(177.32deg, #888989 5.6%, #4A4E54 93.28%)",
            }}
          ></div>
        </div>
        <div className="relative  mb-[15px] h-[4px] w-[612px] rounded-[2.46px] bg-[#525252]"></div>
        <div
          className="bg-[#363C43] text-white p-4 rounded-[18.89px] h-[316px] shadow-lg"
          style={{ boxShadow: "5.67px 5.67px 3.78px 0px #00000066" }}
        >
          <div className="flex flex-row justify-between   mb-4 mt-[10px]">
            <Grid />
            <div>
              <div className="flex flex-col">
                <div className="flex flex-row relative mt-[10px]">
                  <div className="text-white font-bold h-[50px] w-[120px] rounded-[20px] bg-black text-center pt-4 ml-[20px]">
                    Gallery
                  </div>

                  <Button
                    onClick={addImage}
                    type="primary"
                    shape="round"
                    className="relative font-bold ml-[200px] bg-[#6F787C] shadow-md p-2 hover: bg-[#6F787C] "
                  >
                    + Add Image
                  </Button>
                  <div className="flex space-x-2 relative mr-[20px]">
                    <Button
                      onClick={scrollLeft}
                      shape="circle"
                      className=" relative bg-[#6F787C] ml-[15px] shadow-md"
                      style={{
                        boxShadow: "4px 5px 30px 5px #101213",
                        background:
                          "linear-gradient(139.14deg, #303439%2012.4%,%20#161718%2094.96%)",
                      }}
                    >
                      &lt;
                    </Button>
                    <Button
                      onClick={scrollRight}
                      shape="circle"
                      className="bg-[#6F787C] shadow-md hover: bg-[#6F787C]"
                      style={{
                        boxShadow: "4px 5px 30px 5px #101213",
                        background:
                          "linear-gradient(139.14deg, #303439%2012.4%,%20#161718%2094.96%)",
                      }}
                    >
                      &gt;
                    </Button>
                  </div>
                </div>
                <div
                  className="flex gap-4 overflow-x-auto mt-6 p-4"
                  ref={imageContainerRef}
                >
                  <div className="flex nowrap space-x-5">
                    {images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt="Demo"
                        className="w-[180px] h-[180px] object-cover rounded-lg filter grayscale hover:grayscale-0 transition-all duration-300 transform transition hover:-translate-y-2 hover:translate-x-2 hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)]"
                        style={{ flexShrink: 0 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative  mt-[15px] h-[4px] w-[612px] rounded-[2.46px] bg-[#525252]"></div>
      </div>
    </div>
  );
}

export default App;
