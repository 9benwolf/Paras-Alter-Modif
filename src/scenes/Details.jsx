import React from "react";
import { useLocation } from 'react-router-dom';

import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { branchesNCR, branchesRegion3, branchesRegionIV } from "../data/BranchData";

const Details = () => {
  const { branchId } = useParams();
  const navigate = useNavigate();
  let branch;

  const location = useLocation();
  const region = new URLSearchParams(location.search).get('region');

  if (region === 'metro-manila') {
    branch = branchesNCR.find((branch) => branch._id === branchId);
  } else if (region === 'south-luzon') {
    branch = branchesRegionIV.find((branch) => branch._id === branchId);
  } else if (region === 'north-luzon') {
    branch = branchesRegion3.find((branch) => branch._id === branchId);
  }


  // If the branch is not found, you can handle it here or redirect to an error page
  if (!branch) {
    // For example, you can redirect to a 404 page
    navigate("/404");
    return null;
  }

  const length = Object.keys(branch).length;

  return (
    <>
      <div className="h-24"></div>
      <section className="w-full h-screen ">
        <div className="w-full h-full py-8 lg:py-0 px-4 md:px-8 lg:px-12 xl:px-24 flex bg-violet-100 flex-col lg:flex-row items-center justify-center">
          <div className="w-full lg:w-1/4 h-5/6 md:flex justify-center">
            <div className="h-full w-full bg-white rounded-[4rem] flex flex-col p-4">
              <div
                className={`h-${
                  length === 8 ? "1/2 border-b" : length === 7 ? "full border-none" : "1/3 border-b"
                }   border-gray-400 p-4`}
              >
                <h1 className="text-xl md:text-3xl text-blue-900 font-cambria font-bold">
                  Address
                </h1>
                <div className="h-[80%] flex items-center">
                  <p className="font-cambria">{branch.address}</p>
                </div>
              </div>
              {branch.mallHours ? (
                <div
                  className={`h-1/3 ${
                    branch.contact ? "border-b" : "border-none"
                  } border-gray-400 p-4`}
                >
                  <h1 className="text-xl md:text-3xl text-blue-900 font-cambria font-bold">
                    Mall Hours
                  </h1>
                  <div className="h-[80%] flex items-center">
                    <p className="font-cambria text-lg md:text-2xl">
                      {branch.mallHours}
                    </p>
                  </div>
                </div>
              ) : null}
              {branch.contact ? (
                <div className="h-1/3 p-4">
                  <h1 className="text-xl md:text-3xl text-blue-900 font-cambria font-bold">
                    Contact Us
                  </h1>
                  <div className="h-[80%] flex items-center">
                    <p className="font-cambria text-base md:text-xl">
                      {branch.contact}
                    </p>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
          <div className="w-full md:w-3/4 ml-4 flex flex-col items-start pt-4 lg:pt-0">
            <img src={branch.map} alt="" />
            <div className="w-full flex justify-end px-4">
              <Link to="/branches" onClick={() => window.scrollTo(0, 640)}>
                <Button text="Back to Branches" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Details;
