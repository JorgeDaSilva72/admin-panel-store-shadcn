// "use client";

// import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
// import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";

// const chartData = [
//   { month: "January", desktop: 186, mobile: 80 },
//   { month: "February", desktop: 305, mobile: 200 },
//   { month: "March", desktop: 237, mobile: 120 },
//   { month: "April", desktop: 73, mobile: 190 },
//   { month: "May", desktop: 209, mobile: 130 },
//   { month: "June", desktop: 214, mobile: 140 },
// ];
// const chartConfig = {
//   desktop: {
//     label: "Desktop",
//     color: "var(--chart-1)",
//   },
//   mobile: {
//     label: "Mobile",
//     color: "var(--chart-2)",
//   },
// } satisfies ChartConfig;

// const AppLineChart = () => {
//   return (
//     <ChartContainer config={chartConfig} className="mt-6">
//       <LineChart
//         accessibilityLayer
//         data={chartData}
//         margin={{
//           left: 12,
//           right: 12,
//         }}
//       >
//         <CartesianGrid vertical={false} />
//         <XAxis
//           dataKey="month"
//           tickLine={false}
//           axisLine={false}
//           tickMargin={8}
//           tickFormatter={(value) => value.slice(0, 3)}
//         />
//         <YAxis
//           tickLine={false}
//           axisLine={false}
//           tickMargin={8}
//         />
//         <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
//         <Line
//           dataKey="desktop"
//           type="monotone"
//           stroke="var(--color-desktop)"
//           strokeWidth={2}
//           dot={false}
//         />
//         <Line
//           dataKey="mobile"
//           type="monotone"
//           stroke="var(--color-mobile)"
//           strokeWidth={2}
//           dot={false}
//         />
//       </LineChart>
//     </ChartContainer>
//   );
// };

// export default AppLineChart;

"use client";

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";

// Monthly user activity data (example)
const chartData = [
  { month: "January", orders: 3, spent: 180, abandoned: 1, visits: 25 },
  { month: "February", orders: 5, spent: 320, abandoned: 0, visits: 42 },
  { month: "March", orders: 2, spent: 110, abandoned: 2, visits: 18 },
  { month: "April", orders: 4, spent: 260, abandoned: 1, visits: 30 },
  { month: "May", orders: 6, spent: 490, abandoned: 0, visits: 55 },
  { month: "June", orders: 3, spent: 200, abandoned: 1, visits: 28 },
];

const chartConfig = {
  orders: { label: "Orders placed", color: "#3b82f6" }, // blue
  spent: { label: "Total spent (€)", color: "#22c55e" }, // green
  abandoned: { label: "Abandoned carts", color: "#ef4444" }, // red
  visits: { label: "Profile visits", color: "#facc15" }, // yellow
} satisfies ChartConfig;

const UserStatsChart = () => {
  return (
    <ChartContainer config={chartConfig} className="mt-6">
      <LineChart data={chartData} margin={{ left: 12, right: 12 }}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
        />
        <YAxis tickLine={false} axisLine={false} tickMargin={8} />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

        <Line
          dataKey="orders"
          type="monotone"
          stroke="#3b82f6"
          strokeWidth={2}
          dot={false}
        />
        <Line
          dataKey="spent"
          type="monotone"
          stroke="#22c55e"
          strokeWidth={2}
          dot={false}
        />
        <Line
          dataKey="abandoned"
          type="monotone"
          stroke="#ef4444"
          strokeWidth={2}
          dot={false}
        />
        <Line
          dataKey="visits"
          type="monotone"
          stroke="#facc15"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  );
};

export default UserStatsChart;
