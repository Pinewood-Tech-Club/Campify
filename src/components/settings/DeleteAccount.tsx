import { ReactNode } from "react";
import cx from "classnames";

export function DeleteAccount(props: {
  className?: string;
  children: [ReactNode, ReactNode];
}) {
  return (
    <div
      className={cx(
        "w-[400px] h-[100px] bg-white rounded-xl p-6 flex items-center",
        props.className
      )}
    >
      <div className="w-1/2 h-full">{props.children[0]}</div>
      <div className="w-1/2 h-full">{props.children[1]}</div>
    </div>
  );
}

export function DeleteAccountMainText(props: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cx(
        "h-full flex items-center justify-center text-xl text-gray-600 w-full",
        props.className
      )}
    >
      {props.children}
    </div>
  );
}

export function DeleteAccoundButtonDiv(props: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cx(
        "w-full h-full flex items-center justify-center",
        props.className
      )}
    >
      {props.children}
    </div>
  );
}

export function DeleteAccountButtonText(props: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cx("text-xl text-red-100", props.className)}>
      {props.children}
    </div>
  );
}

export function DeleteAccountButton(props: {
  className?: string;
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      className={cx(
        "w-28 h-12 bg-red-500 rounded-xl p-6 flex items-center justify-center",
        "transform transition-transform duration-300 hover:scale-105 hover:bg-red-600",
        props.className
      )}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
