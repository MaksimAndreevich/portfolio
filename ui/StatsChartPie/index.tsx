"use client";

import { PieChart } from "@mui/x-charts/PieChart";
import { PieValueType } from "@mui/x-charts/models/seriesType";

export default function StatsChartPie({ data }: { data: Array<PieValueType> }) {
  return (
    <PieChart
      series={[
        {
          data,
          highlightScope: { faded: "global", highlighted: "item" },
          faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
          innerRadius: 50,
          paddingAngle: 2,
        },
      ]}
      height={200}
    />
  );
}
