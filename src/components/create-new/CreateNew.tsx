"use client";

import {
  ChangeEvent,
  ReactNode,
  Ref,
  useCallback,
  useEffect,
  useState,
} from "react";
import cx from "classnames";
import Link from "next/link";
import { useDropzone } from "react-dropzone";

export function CreateNew(props: { className?: string; children?: ReactNode }) {
  return (
    <div
      className={cx(props.className, "w-full h-full flex flex-col p-2 gap-8")}
    >
      {props.children}
    </div>
  );
}

export function SubmitButton(props: {
  className?: string;
  children: ReactNode;
  onClick: () => void;
  link: string;
}) {
  return (
    <Link
      onClick={props.onClick}
      href={props.link}
      className="w-24 h-14 text-xl bg-blue-300 rounded-lg flex items-center justify-center border-2 border-black transition-all hover:bg-blue-400"
    >
      {props.children}
    </Link>
  );
}

export function CreateNewBody(props: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={cx(props.className, "w-full h-full flex flex-col gap-5")}>
      {props.children}
    </div>
  );
}

export function CreateNewName(props: {
  className?: string;
  defaultText: string;
  maxLength?: number;
  setValue?: string;
  onChange?: (e: any) => void;
}) {
  const [remainingChars, setRemainingChars] = useState<number>(
    (props.maxLength ?? 30) - (props.setValue?.length ?? 0)
  );

  const [select, setSelect] = useState<boolean>(false);

  useEffect(() => {
    setRemainingChars((props.maxLength ?? 30) - (props.setValue?.length ?? 0));
  }, [props.setValue]);

  return (
    <div>
      <input
        value={props.setValue}
        className={cx(
          props.className,
          "w-[400px] h-16 text-2xl p-2 rounded-sm border-gray-400 border-[1px]"
        )}
        placeholder={props.defaultText}
        maxLength={props.maxLength ?? 30}
        onChange={(e) => {
          setRemainingChars((props.maxLength ?? 30) - e.target.value.length);

          if (props.onChange) {
            props.onChange(e);
          }
        }}
        onSelect={() => {
          setSelect(true);
        }}
        onBlur={() => {
          setSelect(false);
        }}
      />

      <RemainingCharacterIndicator
        remaining={remainingChars}
        selected={select}
      />
    </div>
  );
}

export function CreateArea(props: {
  className?: string;
  children: [ReactNode, ReactNode];
}) {
  return (
    <div className={cx(props.className, "flex flex-col")}>{props.children}</div>
  );
}

export function CreateSubtext(props: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cx(props.className, "font-light text-lg opacity-75")}>
      {props.children}
    </div>
  );
}

export function CreateNewHead(props: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cx(props.className, "flex flex-col gap-1")}>
      {props.children}
    </div>
  );
}

export function CreateNewTitle(props: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cx(props.className, "flex gap-2 items-center")}>
      {props.children}
    </div>
  );
}

export function CreateNewTitleText(props: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cx(props.className, "text-4xl font-bold flex")}>
      {props.children}
    </div>
  );
}

export function CreateNewSubtitle(props: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cx(props.className, "text-lg opacity-70")}>
      {props.children}
    </div>
  );
}

export function CreateNewIsSaved(props: {
  className?: string;
  children: ReactNode;
  isVisible: boolean;
}) {
  return (
    <a
      className={cx(
        props.className,
        "text-sm w-fit h-fit transition-all cursor-pointer",
        props.isVisible ? "opacity-100" : "opacity-0"
      )}
    >
      {props.children}
    </a>
  );
}

export function Line() {
  return <div className="w-full h-[1px] bg-gray-400 rounded-full" />;
}

export function RemainingCharacterIndicator(props: {
  remaining: number;
  selected: boolean;
}) {
  return (
    <div
      className={cx(
        "text-sm transition-opacity cursor-default",
        props.selected ? "opacity-100" : "opacity-0"
      )}
    >
      Characters Remaining: {props.remaining}
    </div>
  );
}

export function ImageUploader(props: { campId: number; initialImage: string }) {
  const [uploadStatus, setUploadStatus] = useState<string>("");
  const [image, setImage] = useState<string>(props.initialImage);
  useEffect(() => {
    console.log(props.initialImage);
    setImage(props.initialImage);
  }, [props.initialImage]);

  async function handleUpload(selectedFile: File | undefined) {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("id", props.campId.toString());
    try {
      const response = await fetch("/api/school/db/camp/image/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setUploadStatus("Image uploaded successfully!");
        setImage((await response.json()).image);
      } else {
        setUploadStatus("Image upload failed!");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      setUploadStatus("Image upload failed!");
    }
  }

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      if (acceptedFiles.length != 1) {
        setUploadStatus("I can only accept one image!");
        return;
      }

      handleUpload(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="w-3/5 cursor-pointer">
      <div
        {...getRootProps()}
        className={cx(
          "border-2 border-dashed border-gray-400 rounded-md p-4 text-center",
          isDragActive ? "border-green-400 bg-gray-200" : ""
        )}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the image here...</p>
        ) : (
          <p>Drag 'n' drop an image here, or click to select it</p>
        )}
      </div>
      <div className="cursor-default mt-3 flex flex-col gap-3">
        {uploadStatus != "" && <p>{uploadStatus}</p>}
        <img src={`data:image/jpeg;base64,${image}`} alt="Uploaded" />
      </div>
    </div>
  );
}
