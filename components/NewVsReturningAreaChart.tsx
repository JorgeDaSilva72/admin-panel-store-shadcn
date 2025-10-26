"use client";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

const chartConfig = {
  new: {
    label: "New",
    color: "var(--chart-2)",
  },
  returning: {
    label: "Returning",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;
const chartData = [
  { month: "January", new: 60, returning: 20 },
  { month: "February", new: 80, returning: 30 },
  { month: "March", new: 75, returning: 45 },
  { month: "April", new: 90, returning: 60 },
  { month: "May", new: 110, returning: 70 },
  { month: "June", new: 130, returning: 80 },
];

const NewVsReturningAreaChart = () => {
  return (
    <div className="">
      <h1 className="text-lg font-medium mb-6">New vs Returning Customers</h1>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <AreaChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis tickLine={false} tickMargin={10} axisLine={false} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <defs>
            <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="var(--color-,new)"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="var(--color-new)"
                stopOpacity={0.1}
              />
            </linearGradient>
            <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="var(--color-returning)"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="var(--color-returning)"
                stopOpacity={0.1}
              />
            </linearGradient>
          </defs>
          <Area
            dataKey="new"
            type="natural"
            fill="url(#fillMobile)"
            fillOpacity={0.4}
            stroke="var(--color-returning)"
            stackId="a"
          />
          <Area
            dataKey="returning"
            type="natural"
            fill="url(#fillDesktop)"
            fillOpacity={0.4}
            stroke="var(--color-new)"
            stackId="a"
          />
        </AreaChart>
      </ChartContainer>
    </div>
  );
};

export default NewVsReturningAreaChart;
