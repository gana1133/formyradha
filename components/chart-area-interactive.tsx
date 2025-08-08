"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import { useIsMobile } from "@/hooks/use-mobile";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export const description = "An interactive area chart";

const chartData = [
  { "date": "2024-05-09", "Thought You": 18, "Missed You": 17 },
  { "date": "2024-05-10", "Thought You": 16, "Missed You": 20 },
  { "date": "2024-05-11", "Thought You": 18, "Missed You": 14 },
  { "date": "2024-05-12", "Thought You": 19, "Missed You": 13 },
  { "date": "2024-05-13", "Thought You": 17, "Missed You": 15 },
  { "date": "2024-05-14", "Thought You": 30, "Missed You": 28 },
  { "date": "2024-05-15", "Thought You": 25, "Missed You": 14 },
  { "date": "2024-05-16", "Thought You": 20, "Missed You": 15 },
  { "date": "2024-05-17", "Thought You": 24, "Missed You": 16 },
  { "date": "2024-05-18", "Thought You": 22, "Missed You": 19 },
  { "date": "2024-05-19", "Thought You": 26, "Missed You": 14 },
  { "date": "2024-05-20", "Thought You": 29, "Missed You": 20 },
  { "date": "2024-05-21", "Thought You": 20, "Missed You": 13 },
  { "date": "2024-05-22", "Thought You": 23, "Missed You": 17 },
  { "date": "2024-05-23", "Thought You": 19, "Missed You": 14 },
  { "date": "2024-05-24", "Thought You": 22, "Missed You": 15 },
  { "date": "2024-05-25", "Thought You": 26, "Missed You": 16 },
  { "date": "2024-05-26", "Thought You": 25, "Missed You": 28 },
  { "date": "2024-05-27", "Thought You": 30, "Missed You": 35 },
  { "date": "2024-05-28", "Thought You": 27, "Missed You": 30 },
  { "date": "2024-05-29", "Thought You": 30, "Missed You": 38 },
  { "date": "2024-05-30", "Thought You": 34, "Missed You": 36 },
  { "date": "2024-05-31", "Thought You": 32, "Missed You": 37 },
  { "date": "2024-06-01", "Thought You": 33, "Missed You": 39 },
  { "date": "2024-06-02", "Thought You": 28, "Missed You": 36 },
  { "date": "2024-06-03", "Thought You": 32, "Missed You": 37 },
  { "date": "2024-06-04", "Thought You": 28, "Missed You": 38 },
  { "date": "2024-06-05", "Thought You": 34, "Missed You": 39 },
  { "date": "2024-06-06", "Thought You": 30, "Missed You": 37 },
  { "date": "2024-06-07", "Thought You": 38, "Missed You": 38 },
  { "date": "2024-06-08", "Thought You": 37, "Missed You": 37 },
  { "date": "2024-06-09", "Thought You": 36, "Missed You": 38 },
  { "date": "2024-06-10", "Thought You": 39, "Missed You": 37 },
  { "date": "2024-06-11", "Thought You": 38, "Missed You": 37 },
  { "date": "2024-06-12", "Thought You": 37, "Missed You": 37 },
  { "date": "2024-06-13", "Thought You": 38, "Missed You": 36 },
  { "date": "2024-06-14", "Thought You": 39, "Missed You": 36 },
  { "date": "2024-06-15", "Thought You": 36, "Missed You": 36 },
  { "date": "2024-06-16", "Thought You": 38, "Missed You": 37 },
  { "date": "2024-06-17", "Thought You": 39, "Missed You": 36 },
  { "date": "2024-06-18", "Thought You": 38, "Missed You": 37 },
  { "date": "2024-06-19", "Thought You": 37, "Missed You": 37 },
  { "date": "2024-06-20", "Thought You": 38, "Missed You": 36 },
  { "date": "2024-06-21", "Thought You": 37, "Missed You": 36 },
  { "date": "2024-06-22", "Thought You": 38, "Missed You": 36 },
  { "date": "2024-06-23", "Thought You": 39, "Missed You": 35 },
  { "date": "2024-06-24", "Thought You": 36, "Missed You": 38 },
  { "date": "2024-06-25", "Thought You": 37, "Missed You": 37 },
  { "date": "2024-06-26", "Thought You": 44, "Missed You": 41 },
  { "date": "2024-06-27", "Thought You": 39, "Missed You": 38 },
  { "date": "2024-06-28", "Thought You": 40, "Missed You": 37 },
  { "date": "2024-06-29", "Thought You": 38, "Missed You": 38 },
  { "date": "2024-06-30", "Thought You": 37, "Missed You": 37 },
  { "date": "2024-07-01", "Thought You": 36, "Missed You": 36 },
  { "date": "2024-07-02", "Thought You": 38, "Missed You": 37 },
  { "date": "2024-07-03", "Thought You": 39, "Missed You": 36 },
  { "date": "2024-07-04", "Thought You": 38, "Missed You": 37 },
  { "date": "2024-07-05", "Thought You": 37, "Missed You": 37 },
  { "date": "2024-07-06", "Thought You": 38, "Missed You": 36 },
  { "date": "2024-07-07", "Thought You": 37, "Missed You": 36 },
  { "date": "2024-07-08", "Thought You": 38, "Missed You": 36 },
  { "date": "2024-07-09", "Thought You": 39, "Missed You": 35 },
  { "date": "2024-07-10", "Thought You": 36, "Missed You": 38 },
  { "date": "2024-07-11", "Thought You": 37, "Missed You": 37 },
  { "date": "2024-07-12", "Thought You": 38, "Missed You": 37 },
  { "date": "2024-07-13", "Thought You": 37, "Missed You": 37 },
  { "date": "2024-07-14", "Thought You": 38, "Missed You": 36 },
  { "date": "2024-07-15", "Thought You": 39, "Missed You": 36 },
  { "date": "2024-07-16", "Thought You": 36, "Missed You": 36 },
  { "date": "2024-07-17", "Thought You": 38, "Missed You": 37 },
  { "date": "2024-07-18", "Thought You": 39, "Missed You": 36 },
  { "date": "2024-07-19", "Thought You": 38, "Missed You": 37 },
  { "date": "2024-07-20", "Thought You": 37, "Missed You": 37 },
  { "date": "2024-07-21", "Thought You": 38, "Missed You": 36 },
  { "date": "2024-07-22", "Thought You": 37, "Missed You": 36 },
  { "date": "2024-07-23", "Thought You": 38, "Missed You": 36 },
  { "date": "2024-07-24", "Thought You": 39, "Missed You": 35 },
  { "date": "2024-07-25", "Thought You": 36, "Missed You": 38 },
  { "date": "2024-07-26", "Thought You": 46, "Missed You": 44 },
  { "date": "2024-07-27", "Thought You": 38, "Missed You": 37 },
  { "date": "2024-07-28", "Thought You": 37, "Missed You": 38 },
  { "date": "2024-07-29", "Thought You": 38, "Missed You": 37 },
  { "date": "2024-07-30", "Thought You": 39, "Missed You": 36 },
  { "date": "2024-07-31", "Thought You": 40, "Missed You": 36 },
  { "date": "2024-08-01", "Thought You": 42, "Missed You": 38 },
  { "date": "2024-08-02", "Thought You": 43, "Missed You": 39 },
  { "date": "2024-08-03", "Thought You": 44, "Missed You": 41 },
  { "date": "2024-08-04", "Thought You": 45, "Missed You": 42 },
  { "date": "2024-08-05", "Thought You": 46, "Missed You": 44 },
  { "date": "2024-08-06", "Thought You": 47, "Missed You": 45 },
  { "date": "2024-08-07", "Thought You": 48, "Missed You": 46 },
  { "date": "2024-08-08", "Thought You": 49, "Missed You": 47 },
  { "date": "2024-08-09", "Thought You": 50, "Missed You": 48 },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  desktop: {
    label: "Thought You ❤️",
    color: "var(--primary)",
  },
  mobile: {
    label: "Missed You 💭",
    color: "var(--primary)",
  },
} satisfies ChartConfig;

export function ChartAreaInteractive() {
  const isMobile = useIsMobile();
  const [timeRange, setTimeRange] = React.useState("90d");

  React.useEffect(() => {
    if (isMobile) {
      setTimeRange("7d");
    }
  }, [isMobile]);

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2024-06-30");
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>Daily Echoes of You</CardTitle>
        <CardDescription>
          <span className="hidden @[540px]/card:block">
            Every peak is a day I loved you a little more
          </span>
          <span className="@[540px]/card:hidden">Last 3 months</span>
        </CardDescription>
        <CardAction>
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={setTimeRange}
            variant="outline"
            className="hidden *:data-[slot=toggle-group-item]:!px-4 @[767px]/card:flex"
          >
            <ToggleGroupItem value="90d">Last 3 months</ToggleGroupItem>
            <ToggleGroupItem value="30d">Last 30 days</ToggleGroupItem>
            <ToggleGroupItem value="7d">Last 7 days</ToggleGroupItem>
          </ToggleGroup>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="flex w-40 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate @[767px]/card:hidden"
              size="sm"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Last 3 months" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="90d" className="rounded-lg">
                Last 3 months
              </SelectItem>
              <SelectItem value="30d" className="rounded-lg">
                Last 30 days
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                Last 7 days
              </SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={1.0}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="Missed You"
              type="natural"
              fill="url(#fillMobile)"
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="Thought You"
              type="natural"
              fill="url(#fillDesktop)"
              stroke="var(--color-desktop)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
