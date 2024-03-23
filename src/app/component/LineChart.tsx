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
} from "chart.js";
import { Chart, Line } from "react-chartjs-2";

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

type LineChartProps = {
  data: Insight[]; // Assuming you pass data as a prop
};

type Props = {};

const LineChart = ({ data }: LineChartProps) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement,
  );
  const [filteredData, setFilteredData] = useState<Insight[]>([]);

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
      <Line
        data={{
          labels: filteredData.map((item: Insight) => item.pestle),
          datasets: [
            {
              label: "Average Intensity",
              data: filteredData.map((item: Insight) => item.intensity),
              backgroundColor: ["rgba(250,192,19,0.8)"],
            },
            {
              label: "Average Relevance",
              data: filteredData.map((item: Insight) => item.relevance),
              backgroundColor: [" rgba(43,63,229,0.8)"],

              borderColor: "rgb(51, 51, 51)",
            },
            {
              label: "Average Likelihood",
              data: filteredData.map((item: Insight) => item.likelihood),
              backgroundColor: [" rgba(253,135,135,0.8)"],

              borderColor: "rgb(51, 51, 51)",
            },
          ],
        }}
      />
    </div>
  );
};

export default LineChart;
