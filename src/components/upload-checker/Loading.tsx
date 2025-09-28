// components/Loader.tsx

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import styles from "./Loading.module.css";
import cx from "classnames";

interface LoaderProps {
  isRequestDone: boolean;
  isRequestValid: boolean;
  redirectTo: string;
}

const Loader: React.FC<LoaderProps> = ({
  isRequestDone,
  isRequestValid,
  redirectTo,
}) => {
  const router = useRouter();

  useEffect(() => {
    if (isRequestDone) {
      const timer = setTimeout(() => {
        router.push(redirectTo);
      }, 2000); // Redirect after 2 seconds

      return () => clearTimeout(timer); // Cleanup the timer on unmount
    }
  }, [isRequestDone, router, redirectTo]);

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="relative w-full h-full">
        <div
          className={`${isRequestDone ? styles.loader : ""} relative w-full h-full`}
        >
          <div className="w-full h-full border-t-8 border-blue-500 border-solid rounded-full animate-spin"></div>
          <div
            className="absolute top-0 left-0 w-full h-full border-t-8 border-purple-500 border-solid rounded-full animate-spin"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="absolute top-0 left-0 w-full h-full border-t-8 border-red-500 border-solid rounded-full animate-spin"
            style={{ animationDelay: "0.4s" }}
          ></div>
        </div>
        <div
          className={cx(
            `${isRequestValid ? "text-green-500" : "text-red-500"} absolute transition-all top-1/2 left-1/2 duration-500`,
            {
              "opacity-0 w-16 h-16": !isRequestDone,
              "opacity-100 w-full h-full": isRequestDone,
            }
          )}
          style={{ transform: "translate(-50%, -50%)" }}
        >
          {isRequestDone && (
            <>
              {isRequestValid ? (
                <FaCheckCircle className="w-full h-full" />
              ) : (
                <FaTimesCircle className="w-full h-full" />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Loader;
