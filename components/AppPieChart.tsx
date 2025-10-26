"use client";

import { Label, Pie, PieChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";
import { TrendingUp } from "lucide-react";

const chartConfig = {
  sales: { label: "Sales" },
  tshirts: { label: "T-shirts", color: "var(--chart-1)" },
  sweats: { label: "Sweats", color: "var(--chart-2)" },
  accesories: { label: "Accesories", color: "var(--chart-3)" },
  bags: { label: "Bags", color: "var(--chart-4)" },
  caps: { label: "Caps", color: "var(--chart-5)" },
  mugs: { label: "Mugs", color: "var(--chart-6)" },
} satisfies ChartConfig;
const chartData = [
  { category: "tshirts", sales: 4800, fill: "var(--color-tshirts)" },
  { category: "sweats", sales: 3200, fill: "var(--color-sweats)" },
  { category: "accesories", sales: 1500, fill: "var(--color-accesories)" },
  { category: "bags", sales: 900, fill: "var(--color-bags)" },
  { category: "caps", sales: 700, fill: "var(--color-caps)" },
  { category: "mugs", sales: 700, fill: "var(--color-mugs)" },
];

const AppPieChart = () => {
  // If you don't use React compiler use useMemo hook to improve performance
  const totalSales = chartData.reduce((acc, curr) => acc + curr.sales, 0);

  return (
    <div className="">
      <h1 className="text-lg font-medium mb-6">Sales by category</h1>
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[250px]"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={chartData}
            dataKey="sales"
            nameKey="category"
            innerRadius={60}
            strokeWidth={5}
          >
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-foreground text-3xl font-bold"
                      >
                        {totalSales.toLocaleString()}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className="fill-muted-foreground"
                      >
                        Sales
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </Pie>
        </PieChart>
      </ChartContainer>
      <div className="mt-4 flex flex-col gap-2 items-center">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month{" "}
          <TrendingUp className="h-4 w-4 text-green-500" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total sales for the last 6 months
        </div>
      </div>
    </div>
  );
};

export default AppPieChart;
