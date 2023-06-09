import React from "react";
import Slider from "../Components/Slider";
import PopularClass from "../Components/PopularClass";
import Instructros from "../Components/Instructros";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <h2 className="text-center font-extrabold text-2xl pb-10">
        Popular Classes
      </h2>
      <PopularClass></PopularClass>
      <h2 className="text-center font-extrabold text-2xl p-10">
        Popular Instructors
      </h2>
      <Instructros></Instructros>

      {/* extra section */}

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            width={"380"}
            height={"560"}
            src={
              "https://i.ibb.co/qjvgr2Y/bbcdcb1-00dc-ccaa-1a1d-734efa520cc-a3lu6-Zt-ISZi1-Ohe-NL3-Fn-file.jpg"
            }
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">
              Instructional Workbooks <br />
              for every class
            </h1>
            <p className="py-6">All of the class content can be
downloaded as a workbook to support <br />
your progress and to review exercises. </p>
            <button className="btn btn-primary bg-yellow-400 text-black border-none hover:bg-white ">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
