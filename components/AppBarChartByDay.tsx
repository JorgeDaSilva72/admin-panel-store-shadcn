// "use client";

// import {
//   ChartContainer,
//   ChartLegend,
//   ChartLegendContent,
//   ChartTooltip,
//   ChartTooltipContent,
//   type ChartConfig,
// } from "@/components/ui/chart";
// import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

// // Configuration du graphique
// const chartConfig = {
//   sales: {
//     label: "Daily sales",
//     color: "var(--chart-1)",
//   },
// } satisfies ChartConfig;

// // Exemple de données pour un mois
// const chartData = [
//   { day: "01", sales: 210 },
//   { day: "02", sales: 175 },
//   { day: "03", sales: 260 },
//   { day: "04", sales: 95 },
//   { day: "05", sales: 185 },
//   { day: "06", sales: 310 },
//   { day: "07", sales: 145 },
//   { day: "08", sales: 270 },
//   { day: "09", sales: 155 },
//   { day: "10", sales: 195 },
//   { day: "11", sales: 240 },
//   { day: "12", sales: 120 },
//   { day: "13", sales: 290 },
//   { day: "14", sales: 310 },
//   { day: "15", sales: 250 },
//   { day: "16", sales: 180 },
//   { day: "17", sales: 160 },
//   { day: "18", sales: 200 },
//   { day: "19", sales: 300 },
//   { day: "20", sales: 260 },
//   { day: "21", sales: 220 },
//   { day: "22", sales: 135 },
//   { day: "23", sales: 280 },
//   { day: "24", sales: 240 },
//   { day: "25", sales: 330 },
//   { day: "26", sales: 190 },
//   { day: "27", sales: 175 },
//   { day: "28", sales: 310 },
//   { day: "29", sales: 150 },
//   { day: "30", sales: 285 },
// ];

// const AppBarChartByDay = () => {
//   return (
//     <div className="">
//       <h1 className="text-lg font-medium mb-6">
//         Daily sales (€) – current month
//       </h1>
//       <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
//         <BarChart accessibilityLayer data={chartData}>
//           <CartesianGrid vertical={false} />
//           <XAxis
//             dataKey="day"
//             tickLine={false}
//             tickMargin={10}
//             axisLine={false}
//             label={{ value: "Day", position: "insideBottomRight", offset: -5 }}
//           />
//           <YAxis
//             tickLine={false}
//             tickMargin={10}
//             axisLine={false}
//             label={{ value: "€", angle: -90, position: "insideLeft" }}
//           />
//           <ChartTooltip content={<ChartTooltipContent />} />
//           <ChartLegend content={<ChartLegendContent />} />
//           <Bar dataKey="sales" fill="var(--color-sales)" radius={4} />
//         </BarChart>
//       </ChartContainer>
//     </div>
//   );
// };

// export default AppBarChartByDay;

"use client";

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

// Configuration du graphique
const chartConfig = {
  cumulative: {
    label: "Cumulative sales",
    color: "var(--chart-2)",
  },
  daily: {
    label: "Today's sales",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

// Données fixes pour 30 jours (peuvent être remplacées par des données dynamiques)
const dailyData = [
  210, 175, 260, 95, 185, 310, 145, 270, 155, 195, 240, 120, 290, 310, 250, 180,
  160, 200, 300, 260, 220, 135, 280, 240, 330, 190, 175, 310, 150, 285,
];

// Fonction pour transformer les ventes journalières en données cumulées
function buildCumulativeData() {
  let cumulative = 0;
  return dailyData.map((sales, i) => {
    cumulative += sales;
    return {
      day: (i + 1).toString().padStart(2, "0"),
      daily: sales,
      cumulative,
    };
  });
}

const chartData = buildCumulativeData();

const AppBarChartByDayCumulative = () => {
  return (
    <div className="w-full">
      <h1 className="text-lg font-medium mb-6">
        Daily and cumulative sales (€) – current month
      </h1>

      <ChartContainer config={chartConfig} className="min-h-[350px] w-full">
        <BarChart
          accessibilityLayer
          data={chartData}
          margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="day"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            label={{
              value: "day of the month",
              position: "insideBottomRight",
              offset: -5,
            }}
          />
          <YAxis
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            label={{ value: "€", angle: -90, position: "insideLeft" }}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />

          {/* Barres des ventes journalières */}
          <Bar dataKey="daily" fill="var(--color-daily)" radius={4} />

          {/* Barres des ventes cumulées */}
          <Bar dataKey="cumulative" fill="var(--color-cumulative)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default AppBarChartByDayCumulative;
