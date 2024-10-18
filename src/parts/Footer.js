import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { Link } from "react-router-dom";
import BrandIcon from "./BrandIcon";
import styles from "../assets/css/footer.module.css";

export default function Footer() {
  return (
    <div className="bg-gray-50 border-t border-gray-200 pb-6">
      <div className="container flex-col mx-auto">
        <div className="flex flex-col sm:flex-row mt-8 justify-center">
          <div className="w-1/3 flex-col ml-16 mr-8">
            <BrandIcon />
            <p className="w-full text-lg text-gray-400 font-light">
              Preserving Freshness with
              <br />
              Precision and Care.
            </p>
          </div>
          <div className="w-1/3 ml-16 sm:ml-0 mt-0">
            <h1 className="text-lg text-theme-blue pt-4 pb-2">Social</h1>
            <Link
              to="/"
              className="flex text-lg text-gray-400 font-light hover:underline"
            >
              Home
            </Link>
            <Link
              to="/project"
              className="flex text-lg text-gray-400 font-light hover:underline"
            >
              Project
            </Link>
            <Link
              to="/team"
              className="flex text-lg text-gray-400 font-light hover:underline"
            >
              Team
            </Link>
            <Link
              to="/discuss-project"
              className="flex text-lg text-gray-400 font-light hover:underline"
            >
              Discuss a Project
            </Link>
          </div>
          <div className="w-1/3 mt-0 ml-16 mr-0 sm:ml-0 sm:mr-5">
            <h1 className="text-lg text-theme-blue pt-4 pb-2">Office</h1>
            <p className="text-lg text-gray-400 font-light">
              info@shreecoldstore.com
            </p>
            <p className="text-md text-gray-400 font-light">
              M/S Shree Cold Storage <br />
              Village- Basilla, Nagri Panchayat- Devri Thana- Nagri (Ranchi)
              <br />
              Pin- 835303
            </p>
          </div>
        </div>
        <div className="my-6">
          <hr
            className={`border-t border-gray-300 opacity-50 mx-4 sm:mx-16 ${styles.temp}`}
            style={{ borderWidth: "1px", borderColor: "rgba(0, 0, 0, 0.1)" }}
          />
        </div>
        <div className="flex-col text-center mt-7">
          <p className="text-sm text-gray-600 font-light">
            Copyright <CopyrightIcon fontSize="small" /> 2024 - All rights
            reserved - Shree Cold Store
          </p>
        </div>
      </div>
    </div>
  );
}
