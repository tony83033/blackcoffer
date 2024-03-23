import BarChart from "./component/barChart";
import LineChart from "./component/LineChart";

export default function Home() {
  return (
    <div className="flex flex-col bg-gray-100 p-8">
      <div className="flex mb-6">
        <div className="flex-1 bg-[#7b61ff] p-4 rounded-md text-white mr-4">
          <BarChart></BarChart>
        </div>

        <div className="flex-1 bg-white p-4 rounded-md shadow mr-4">
          <LineChart></LineChart>
        </div>
        <div className="flex-1 bg-white p-4 rounded-md shadow">
          <div className="text-xs">Sales Overview</div>
          <div className="text-xl font-bold mt-2">$42.6k</div>
          <div className="flex justify-between mt-4">
            <div>
              <div className="text-xs">Order</div>
              <div className="text-lg">6225</div>
            </div>
            <div>
              <div className="text-xs">Visits</div>
              <div className="text-lg">25.5%</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mb-6">
        <div className="flex-1 bg-white p-4 rounded-md shadow mr-4">
          <div className="text-xs">Earnings</div>
          <div className="text-4xl font-bold mt-4">$545.09</div>
          <div className="text-xs mt-2">Profit</div>
          <div className="text-lg mt-2">$205.34</div>
        </div>
        <div className="flex-1 bg-white p-4 rounded-md shadow mr-4">
          <div className="text-xs">Support Tracker</div>
          <div className="text-4xl font-bold mt-4">164</div>
          <div className="text-xs mt-2">Total Tickets</div>
          <div className="text-lg mt-2">Open Tickets</div>
          <div className="text-lg mt-2">Response Time</div>
        </div>
        <div className="flex-1 bg-purple-300 p-4 rounded-md shadow">
          <div className="text-white text-xs">Chart Placeholder</div>
        </div>
      </div>
      <div className="flex mb-6">
        <div className="flex-1 bg-white p-4 rounded-md shadow mr-4">
          <div className="text-xs">Salary by Countries</div>
          <div className="text-lg font-bold mt-4">Monthly Stats Overview</div>
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
          <div className="text-lg font-bold mt-4">Email Stats Overview</div>
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
  );
}
