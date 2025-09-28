import cx from "classnames";
interface BadgesProps {
  children: React.ReactNode;
  className?: string;
}

export function Badges(props: BadgesProps) {
  return <div className={cx("flex", props.className)}>{props.children}</div>;
}
