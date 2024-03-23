"use client";
import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement
} from 'chart.js';
import { Chart,Bar } from 'react-chartjs-2';

type Insight = {
  end_year: string;
  intensity: number;
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
  relevance: number;
  pestle: string;
  source: string;
  title: string;
  likelihood: number;
};

type Props = {};

const BarChart = (props: Props) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement,
  )
  const [filteredData, setFilteredData] = useState<Insight[]>([]);

  // Sample data (replace with actual data)
  const data: Insight[] = [
    {
      "end_year": "",
      "intensity": 6,
      "sector": "Energy",
      "topic": "gas",
      "insight": "Annual Energy Outlook",
      "url": "http://www.eia.gov/outlooks/aeo/pdf/0383(2017).pdf",
      "region": "Northern America",
      "start_year": "",
      "impact": "",
      "added": "January, 20 2017 03:51:25",
      "published": "January, 09 2017 00:00:00",
      "country": "United States of America",
      "relevance": 2,
      "pestle": "Industries",
      "source": "EIA",
      "title": "U.S. natural gas consumption is expected to increase during much of the projection period.",
      "likelihood": 3
    },
    {
      "end_year": "",
      "intensity": 6,
      "sector": "Energy",
      "topic": "oil",
      "insight": "Annual Energy Outlook",
      "url": "http://www.eia.gov/outlooks/aeo/pdf/0383(2017).pdf",
      "region": "Northern America",
      "start_year": "",
      "impact": "",
      "added": "January, 20 2017 03:51:24",
      "published": "January, 09 2017 00:00:00",
      "country": "United States of America",
      "relevance": 2,
      "pestle": "Industries",
      "source": "EIA",
      "title": "Reference case U.S. crude oil production is projected to recover from recent declines.",
      "likelihood": 3
    },
    {
      "end_year": "",
      "intensity": 6,
      "sector": "Energy",
      "topic": "consumption",
      "insight": "Annual Energy Outlook",
      "url": "http://www.eia.gov/outlooks/aeo/pdf/0383(2017).pdf",
      "region": "Northern America",
      "start_year": "",
      "impact": "",
      "added": "January, 20 2017 03:51:23",
      "published": "January, 09 2017 00:00:00",
      "country": "United States of America",
      "relevance": 2,
      "pestle": "Industries",
      "source": "EIA",
      "title": "U.S. petroleum consumption is projected to remain below the 2005 level.",
      "likelihood": 3
    }
  ];

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
      <Bar
        data={{
          labels:filteredData.map((item: Insight) => item.topic),
          datasets: [
            {
              label: 'Average Intensity',
              data: filteredData.map((item: Insight) => item.intensity),
              backgroundColor:[
                "rgba(250,192,19,0.8)"
              ]
            },
            {
              label: 'Average Relevance',
              data: filteredData.map((item:Insight)=>item.relevance),
              backgroundColor:[
                " rgba(43,63,229,0.8)"
              ],
              borderRadius: 3,
              borderColor: "rgb(51, 51, 51)"
            },
            {
              label: 'Average Likelihood',
              data: filteredData.map((item:Insight)=>item.likelihood),
              backgroundColor:[
                " rgba(253,135,135,0.8)"
              ],
              borderRadius: 3,
              borderColor: "rgb(51, 51, 51)"
            }
          ]
        }}
      />
    </div>
  );
};

export default BarChart;
