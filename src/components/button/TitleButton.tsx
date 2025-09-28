import cx from "classnames";
interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

export function TitleButton(props: ButtonProps) {
  return (
    <button
      className={cx(
        "rounded-xl w-64 h-24 border-4 bg-yellow-400 border-black",
        props.className
      )}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export function ButtonText(props: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      className={cx(
        "text-black text-4xl font-sans font-black",
        props.className
      )}
    >
      {props.children}
    </a>
  );
}
