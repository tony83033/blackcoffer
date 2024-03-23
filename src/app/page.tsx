"use client";
import BarChart from "./component/barChart";
import LineChart from "./component/LineChart";
import BubbleChart from "./component/BubbleChart";
import PieChart from "./component/PieChart";
import PolarChart from "./component/PolarChart";
import Bar2Chart from "./component/Bar2Chart";
import { useEffect, useState } from "react";
import Loading from "./loading";
import { CirclesWithBar } from "react-loader-spinner";
type Insight = {
  _id: string;
  end_year: string;
  intensity: string;
  sector: string;
  topic: string;
  insight: string;
  url: string;
  region: string;
  start_year: string;
  impact: string;
  added: string;
  published: string;
  country: string;
  relevance: string;
  pestle: string;
  source: string;
  title: string;
  likelihood: string;
};

export default async function Home() {
  const [data, setData] = useState<Insight[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Added loading state

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://blackcoffer-gilt.vercel.app/api/data`,
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const responseData: Insight[] = await response.json();
      setData(responseData);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error: Display an error message or retry logic
    } finally {
      setLoading(false); // Update loading state
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);
  // JSX rendering...
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="flex flex-col bg-gray-100 p-8"></div>
          <div className="flex flex-col bg-gray-100 p-8">
            <div className="flex mb-6">
              <div className="flex-1 bg-[#7b61ff] p-4 rounded-md text-white mr-4">
                <BarChart data={data} />
              </div>

              <div className="flex-1 bg-white p-4 rounded-md shadow mr-4">
                <LineChart data={data}></LineChart>
              </div>
              <div className="flex-1 bg-white p-4 rounded-md shadow">
                <BubbleChart data={data}></BubbleChart>
              </div>
            </div>
            <div className="flex mb-6">
              <div className="flex-1 bg-white p-4 rounded-md shadow mr-4">
                <PieChart data={data}></PieChart>
              </div>
              <div className="flex-1 bg-white p-4 rounded-md shadow mr-4">
                <PolarChart data={data}></PolarChart>
              </div>
              <div className="flex-1 bg-purple-300 p-4 rounded-md shadow">
                <Bar2Chart data={data}></Bar2Chart>
              </div>
            </div>
            <div className="flex mb-6">
              <div className="flex-1 bg-white p-4 rounded-md shadow mr-4">
                <div className="text-xs">Salary by Countries</div>
                <div className="text-lg font-bold mt-4">
                  Monthly Stats Overview
                </div>
                <ul className="mt-4">
                  <li className="flex justify-between text-sm py-1">
                    <span>USA</span>
                    <span>$3,500.00</span>
                  </li>
                  <li className="flex justify-between text-sm py-1">
                    <span>Canada</span>
                    <span>$2,450.00</span>
                  </li>
                  <li className="flex justify-between text-sm py-1">
                    <span>UK</span>
                    <span>$2,300.00</span>
                  </li>
                </ul>
              </div>
              <div className="flex-1 bg-white p-4 rounded-md shadow mr-4">
                <div className="text-xs">Total Earnings</div>
                <div className="text-4xl font-bold mt-4">87%</div>
                <div className="text-xs mt-2">Total Revenue</div>
                <div className="text-lg mt-2">$320</div>
                <div className="text-lg mt-2">Total Sales</div>
                <div className="text-lg mt-2">$250</div>
              </div>
              <div className="flex-1 bg-white p-4 rounded-md shadow">
                <div className="text-xs">Monthly Campaign Stats</div>
                <div className="text-lg font-bold mt-4">
                  Email Stats Overview
                </div>
                <ul className="mt-4">
                  <li className="flex justify-between text-sm py-1">
                    <span>Emails</span>
                    <span>12,354</span>
                  </li>
                  <li className="flex justify-between text-sm py-1">
                    <span>Opened</span>
                    <span>1,674</span>
                  </li>
                  <li className="flex justify-between text-sm py-1">
                    <span>Clicked</span>
                    <span>367</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex mb-6">
              <div className="flex-1 bg-white p-4 rounded-md shadow mr-4">
                <div className="text-xs">Source Visits</div>
                <ul className="mt-4">
                  <li className="flex justify-between text-sm py-1">
                    <span>Direct Source</span>
                    <span>12,345</span>
                  </li>
                  <li className="flex justify-between text-sm py-1">
                    <span>Social Network</span>
                    <span>5,678</span>
                  </li>
                  <li className="flex justify-between text-sm py-1">
                    <span>Email Newsletter</span>
                    <span>4,567</span>
                  </li>
                </ul>
              </div>
              <div className="flex-1 bg-white p-4 rounded-md shadow">
                <div className="text-xs">Other Stats</div>
                <ul className="mt-4">
                  <li className="flex justify-between text-sm py-1">
                    <span>Advertisement</span>
                    <span>1,234</span>
                  </li>
                  <li className="flex justify-between text-sm py-1">
                    <span>Blogs</span>
                    <span>987</span>
                  </li>
                  <li className="flex justify-between text-sm py-1">
                    <span>Search Engines</span>
                    <span>2,345</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
