import React from "react";
import ActivityChart from "./ActivityChart";
import { CircularProgress } from "@mui/joy";
import Options from "./Options";
import OrdersTable from "./OrdersTable";
import Stats from "./Stats";
import FeedbackList from "./Feedback";

const Dashboard = () => {
  return (
    <div className="bg-screenBg absolute flex flex-col p-4 mt-[66px] md:ml-[64px] w-[100%] md:w-[calc(100%-64px)] pt-1">
      <h1 className="font-bold text-white flex mb-2 text-3xl">Dashboard</h1>
      <div className="flex max-sm:flex-col md:h-[15vh] flex-row w-full sm:mb-4">
        <div className="w-[60vw] flex max-sm:w-full justify-between">
          <Stats />
        </div>
        <div className="w-[40vw] max-sm:w-full max-sm:mt-4 sm:ml-4 bg-cardBg rounded-lg">
          <div className="p-4 flex justify-between items-center">
            <div className="flex justify-between flex-col items-start gap-2 grow">
              <p className="text-xs font-medium text-white">Net Profit</p>
              <p className="text-3xl font-bold text-white">$6759.25</p>
              <div className="text-sm text-green-500">▲ 3% </div>
            </div>
            <div className="flex justify-between items-center flex-col grow">
              <CircularProgress size="lg" determinate value={70}>
                <div className="flex flex-col text-white">
                  <div className="text-sm">70%</div>
                  <div className="text-[6px] text-center">
                    Goal
                    <br />
                    completed
                  </div>
                </div>
              </CircularProgress>
              <p className="text-xs text-gray-400 text-center mt-2">
                *The values here have been rounded off.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex max-sm:flex-col  md:h-[30vh] flex-row sm:w-full sm:mb-4">
        <div className="w-[60vw] max-sm:w-full max-sm:mt-4 bg-cardBg rounded-lg">
          <div className="flex justify-between items-center m-2">
            <h3 className="text-white">Activity</h3>
            <select
              id="time_period"
              className="max-w-fit bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected value="Weekly">
                Weekly
              </option>
              <option value="Monthly">Monthly</option>
              <option value="Quarterly">Quarterly</option>
              <option value="Yearly">Yearly</option>
            </select>
          </div>
          <ActivityChart />
        </div>
        <div className="w-[40vw] relative max-sm:w-full max-sm:h-[25vh] max-sm:mt-4 sm:ml-4 bg-cardBg rounded-lg flex">
          <Options />
        </div>
      </div>

      <div className="flex max-sm:flex-col md:h-[55vh] flex-row w-full sm:mb-4">
        <div className="w-[60vw] max-sm:w-full max-sm:h-[60vh] max-sm:mt-4 bg-cardBg rounded-lg">
          <OrdersTable />
        </div>
        <div className="w-[40vw] max-sm:w-full max-sm:h-[60vh] max-sm:mt-4 max-sm:mb-4 sm:ml-4 bg-cardBg rounded-lg">
          <FeedbackList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
