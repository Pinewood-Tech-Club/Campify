"use client";

import { Card, DonutChart } from "@tremor/react";
import cx from "classnames";
import { useEffect, useRef } from "react";

interface MainStatsProps {
  children: React.ReactNode;
  className?: string;
}

export function MainStatistics(
  props: MainStatsProps & {
    hovering: boolean;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
  }
) {
  return (
    <div
      className={cx(
        "w-full flex flex-col bg-white mx-9 rounded-xl px-2 py-1",
        props.hovering ? "shadow-2xl" : "shadow-lg",
        props.className
      )}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      {props.children}
    </div>
  );
}

export function MainStatisticsHead(props: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cx(props.className, "w-full text-center")}>
      {props.children}
    </div>
  );
}

export function MainStatisticsBody(props: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cx(props.className, "w-full flex flex-col")}>
      {props.children}
    </div>
  );
}

export function StatisticsWheel(props: { percents: number[] }) {
  const data = [
    {
      Weather: "Sunny",
      Classmates: 10,
    },
    {
      Weather: "Snowy",
      Classmates: 5,
    },
    {
      Weather: "Cloudy",
      Classmates: 4,
    },
    {
      Weather: "Rainy",
      Classmates: 2,
    },
    {
      Weather: "Foggy",
      Classmates: 1,
    },
  ];
  return (
    <div className="my-10">
      <Card>
        <DonutChart
          data={data}
          index="Weather"
          category="Classmates"
          variant="pie"
        />
      </Card>
    </div>
  );
}

export function HeadText(props: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cx("text-7xl font-sans font-bold", props.className)}>
      {props.children}
    </div>
  );
}
