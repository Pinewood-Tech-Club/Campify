import cx from "classnames";
import Image from "next/image";

export function ImageWithEditButton(props: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cx("w-full h-full", props.className)}>
      {props.children}
      <Image
        src={"/edit_pencil.png"}
        alt={"1"}
        width={100}
        height={100}
        className="w-3 absolute translate-y-[-36px] translate-x-1 opacity-100"
      />
    </div>
  );
}
