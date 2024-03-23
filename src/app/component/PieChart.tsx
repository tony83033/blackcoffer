"use client";
import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  ArcElement,
} from "chart.js";
import { Chart, Doughnut } from "react-chartjs-2";

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

type PieChartProps = {
  data: Insight[]; // Assuming you pass data as a prop
};

const PieChart = ({ data }: PieChartProps) => {
  ChartJS.register(
    CategoryScale,
    ArcElement,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement,
  );
  const [filteredData, setFilteredData] = useState<Insight[]>([]);

  // Sample data (replace with actual data)

  // Function to filter data based on selected criteria
  const filterData = () => {
    // Implement your filtering logic here based on user-selected criteria
    // For now, we'll just set filteredData to the whole dataset
    setFilteredData(data);
  };

  // Call filterData whenever the filter criteria change
  useEffect(() => {
    filterData();
  }, []); // Only run on initial mount

  // Calculate average intensity for each topic

  return (
    <div>
      <Doughnut
        data={{
          labels: [
            "gas",
            "oil",
            "consumption",
            "market",
            "gdp",
            "war",
            "production",
            "export",
            "battery",
            "economy",
            "robot",
            "strategy",
          ],
          datasets: [
            {
              label: "Average Intensity",
              data: filteredData.map((item: Insight) => item.intensity),
              backgroundColor: [
                "rgba(250,192,19,0.8)",
                "rgba(253,135,135,0.8)",
                "rgba(43,120,229,0.8)",
                "rgba(43,90,139,0.8)",
                "rgba(21,69,132,0.8)",
                "rgba(43,10,131,0.9)",
                "rgba(31,35,139,0.8)",
                "rgba(51,220,139,0.8)",
                "rgba(14,70,139,0.7)",
                "rgba(52,25,139,0.8)",
                "rgba(3,10,139,0.8)",
                "rgba(23,25,139,0.8)",
              ],
            },
          ],
        }}
      />
    </div>
  );
};

export default PieChart;
