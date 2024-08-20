import React from "react";

import BarCharts from "./BarChat";

import { IoStatsChartSharp } from "react-icons/io5";
import ExpenseBar from "./ExpenseBar";

const ExpenseOverView = () => {
  const data = [
    { date: "2024-08-01", income: 150, profit: 80, expense: 100 },
    { date: "2024-08-02", income: 100, profit: 120, expense: 150 },
    { date: "2024-08-03", income: 140, profit: 100, expense: 120 },
    // ... more data
  ];

  const totalBudget = 10;
  const spentAmount = 2;
  const remainingAmount = totalBudget - spentAmount;

  return (
    <div className="flex">
      <div>
        <div className="flex gap-3 items-center justify-center ml-2  ">
          <div>
            <div className=" mt-3 mb-3 ">
              <h1 className="text-2xl font-roboto text-[#144c90] font-bold">Hi,bwiza linda</h1>
              <p className="font-roboto">
                Here's what happening with your money. Lets manage your expenses
              </p>
            </div>
            <div className="flex gap-3 ">
              <div className="flex flex-wrap gap-3">
                <div className="w-60   h-20 rounded-md flex  gap-1  bg-slate-50 shadow-sm">
                  <div className=" text-xl font-roboto font-bold m-3 bg-[#f3f4f6] text-[#a6f9bd] p-4 rounded-full">
                    <IoStatsChartSharp />
                  </div>
                  <div className="m-3">
                    <p className="font-roboto">Earning</p>
                    <p className="font-roboto font-bold">20MRwf</p>
                  </div>
                </div>
                <div className="w-60  h-20 rounded-md flex  gap-1  bg-slate-50 shadow-sm">
                  <div className=" text-xl font-roboto font-bold m-3 bg-[#f3f4f6] text-[#a6f9bd] p-4 rounded-full">
                    <IoStatsChartSharp />
                  </div>
                  <div className="m-3">
                    <p className="font-roboto">Spend this month</p>
                    <p className=" font-roboto font-bold">20MRwf</p>
                  </div>
                </div>
                <div className="w-60  h-20 rounded-md flex  gap-1  bg-slate-50 shadow-sm">
                  <div className=" text-xl font-roboto font-bold m-3 bg-[#f3f4f6] text-[#a6f9bd] p-4 rounded-full">
                    <IoStatsChartSharp />
                  </div>
                  <div className="m-3">
                    <p className="font-roboto">Salary</p>
                    <p className=" font-roboto font-bold">20MRwf</p>
                  </div>
                </div>
                <div className="w-60   h-20 rounded-md flex  gap-1  bg-slate-50 shadow-sm">
                  <div className=" text-xl font-roboto font-bold m-3 bg-[#f3f4f6] text-[#a6f9bd] p-4 rounded-full">
                    <IoStatsChartSharp />
                  </div>
                  <div className="m-3">
                    <p className="font-roboto">Other Income</p>
                    <p className=" font-poppins font-bold">20MRwf</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex mt-3 ml-1 gap-3">
          <div className="w-[655px] rounded-md font-roboto  bg-slate-50 shadow-sm">
            <h1>Time and Expenses Bar Chart</h1>
            <BarCharts data={data} />
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-2xl font-roboto font-bold ">Latest Budget</div>
            <div className="w-80 h-32 rounded-md  bg-slate-50 shadow-sm">
              <div className="m-8">
                <div className="flex justify-between font-roboto font-bold">
                  <p>food and drinks</p>
                  <p>10MRwf</p>
                </div>
                <div>
                  {" "}
                  <ExpenseBar
                    spent={spentAmount}
                    remaining={remainingAmount}
                    total={totalBudget}
                  />
                </div>
              </div>
            </div>
            <div className="w-80  h-32 rounded-md  bg-slate-50 shadow-sm">
              <div className="m-8">
                <div className="flex justify-between font-roboto font-bold">
                  <p>clothers and transport</p>
                  <p>10MRwf</p>
                </div>
                <div>
                  {" "}
                  <ExpenseBar
                    spent={spentAmount}
                    remaining={remainingAmount}
                    total={totalBudget}
                  />
                </div>
              </div>
            </div>
            <div className="w-80  h-32 rounded-md  bg-slate-50 shadow-sm">
              <div className="m-8">
                <div className="flex justify-between font-roboto font-bold">
                  <p>others</p>
                  <p>10MRwf</p>
                </div>
                <div>
                  <ExpenseBar
                    spent={spentAmount}
                    remaining={remainingAmount}
                    total={totalBudget}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseOverView;
