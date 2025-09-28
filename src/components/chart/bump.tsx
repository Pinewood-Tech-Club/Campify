"use client";

import { ResponsiveBump } from "@nivo/bump";
import cx from "classnames";
export function ProfileBumpChart(props: {
  data: { id: string; data: { x: string; y: number }[] }[];
  className: String;
  legendBottom: String;
  legendLeft: String;
}) {
  return (
    <div
      className={cx(props.className, "flex items-center justify-center")}
    ></div>
  );
}

/*
<ResponsiveBump
        data={props.data}
        colors={{ scheme: "spectral" }}
        lineWidth={3}
        activeLineWidth={6}
        inactiveLineWidth={3}
        inactiveOpacity={0.15}
        pointSize={10}
        activePointSize={16}
        inactivePointSize={0}
        pointColor={{ theme: "background" }}
        pointBorderWidth={0}
        activePointBorderWidth={3}
        pointBorderColor={{ from: "serie.color" }}
        axisTop={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "",
          legendPosition: "middle",
          legendOffset: -36,
          truncateTickAt: 0,
        }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: props.legendBottom,
          legendPosition: "middle",
          legendOffset: 32,
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: props.legendLeft,
          legendPosition: "middle",
          legendOffset: -40,
          truncateTickAt: 0,
        }}
        margin={{ top: 1, right: 1, bottom: 50, left: 50 }}
        axisRight={null}
      />
      */
