import cx from "classnames";

export function DivList(props: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cx("flex flex-col", props.className)}>{props.children}</div>
  );
}

export function DivListGrow(props: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <DivList className={cx("flex-grow", props.className)}>
      {props.children}
    </DivList>
  );
}

export function DivListGrowCenter(props: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <DivListGrow className={cx("items-center justify-center", props.className)}>
      {props.children}
    </DivListGrow>
  );
}

export function DivListCenter(props: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <DivList className={cx("items-center justify-center", props.className)}>
      {props.children}
    </DivList>
  );
}
