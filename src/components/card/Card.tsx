import { ReactNode } from "react";
import cx from "classnames";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card(props: CardProps) {
  return (
    <div
      className={cx(
        "h-96 shadow-2xl px-10 rounded-xl bg-slate-100 w-full flex items-center ",
        props.className
      )}
    >
      {props.children}
    </div>
  );
}

export function CardHead(props: CardProps) {
  return <div className={cx("w-2/3", props.className)}>{props.children}</div>;
}

export function CardBody(props: CardProps) {
  return <div className={cx("w-1/3 ml-20")}>{props.children}</div>;
}

export function LowerDecorationText(props: CardProps) {
  return (
    <div className={cx(props.className, "mt-10 text-2xl font-sans inline")}>
      {props.children}
    </div>
  );
}

export function UpperDecorationText(props: CardProps) {
  return (
    <div className={cx(props.className, "text-4xl font-bold font-sans")}>
      {props.children}
    </div>
  );
}
