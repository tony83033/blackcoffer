import BarChart from "./components/barChart";
export default function Home() {
  return (
    <div className="bg-white p-8">
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-1">
          <div className="mb-8">
            <div className="w-full h-[300px]">
              <BarChart />
            </div>
          </div>
          <div>
            <div className="w-full h-[300px]">
              <BarChart />
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="mb-8">
            <div className="w-full h-[300px]">
              <BarChart />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="w-full h-[300px]">
                <BarChart />
              </div>
            </div>
            <div>
              <div className="w-full h-[300px]">
                <BarChart />
              </div>
            </div>
            <div>
              <div className="w-full h-[300px]">
                <BarChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
