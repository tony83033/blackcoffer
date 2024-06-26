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
import { Chart, Bubble } from "react-chartjs-2";
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

type BuppleChartProps = {
  data: Insight[]; // Assuming you pass data as a prop
};

const BubbleChart = ({ data }: BuppleChartProps) => {
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

  // Format data for the Bubble chart

  return (
    <div>
      <Bubble
        className="overflow-auto"
        data={{
          labels: filteredData.map((item: Insight) => item.title),
          datasets: [
            {
              label: "Intensity vs Likelihood",
              data: filteredData.map((item: Insight) => ({
                x: item.intensity,
                y: item.likelihood,
                r: parseInt(item.intensity) * 2, // Adjust the bubble size based on intensity
              })),
              backgroundColor: "rgba(255, 99, 132, 0.6)", // Adjust bubble color
            },
            {
              label: "Intensity vs Relevance",
              data: filteredData.map((item: Insight) => ({
                x: item.intensity,
                y: item.relevance,
                r: parseInt(item.intensity) * 3, // Adjust the bubble size based on intensity
              })),
              backgroundColor: "rgba(250,192,19,0.8)", // Adjust bubble color
            },
            {
              label: "Likelihood vs Relevance",
              data: filteredData.map((item: Insight) => ({
                x: item.likelihood,
                y: item.relevance,
                r: parseInt(item.likelihood) * 1, // Adjust the bubble size based on intensity
              })),
              backgroundColor: "rgba(253,135,135,0.8)", // Adjust bubble color
            },
          ],
        }}
      />
    </div>
  );
};

export default BubbleChart;
