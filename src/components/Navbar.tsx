"use client";

import Image from "next/image";
import cx from "classnames";
import { useState, useRef, useEffect } from "react";
import css from "./Navbar.module.css";
import { useRouter } from "next/navigation";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  UserProfile,
  useUser,
} from "@clerk/nextjs";

interface NavbarProps {
  nameOfWebsite: string;
  pfpImage: ImageProps;
  onClick?: () => void;
}

interface ImageProps {
  src: string;
  w: string;
  h: string;
}

export default function Navbar(props: NavbarProps) {
  const [animate, setAnimate] = useState<boolean>(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const router = useRouter();
  const { user, isLoaded } = useUser();

  useEffect(() => {
    const imageElement = imageRef.current;
    if (imageElement) {
      const handleAnimationEnd = () => {
        setAnimate(false);
      };

      imageElement.addEventListener("animationend", handleAnimationEnd);
      return () => {
        imageElement.removeEventListener("animationend", handleAnimationEnd);
      };
    }
  }, []);

  return (
    <div className="w-full">
      <div className="flex justify-between mx-7 pt-2">
        <a className="text-4xl font-bold cursor-pointer">
          {props.nameOfWebsite}
        </a>
        <div className="flex items-center">
          <div className="w-24 h-14 text-xl font-bold">
            <SignedOut>
              <SignInButton
                forceRedirectUrl={"/main-page/home"}
                signUpForceRedirectUrl={"/main-page/home"}
                signUpFallbackRedirectUrl={"/"}
              >
                <button className="w-full h-full border-4 border-black rounded-xl hover:bg-gray-100 transition-colors">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
          </div>

          <UserProfile routing="hash" />
        </div>
      </div>
    </div>
  );
}

/*
<Image
            ref={imageRef}
            src={user?.imageUrl || props.pfpImage.src}
            alt={"Profile"}
            width={10}
            height={10}
            className={cx(
              props.pfpImage.h,
              props.pfpImage.w,
              animate ? css.imageNotLoggedIn : css.image,
              "ml-10 cursor-pointer rounded-lg",
              isLoaded ? "opacity-100" : "opacity-0"
            )}
            onClick={() => {
              if (!user) {
                setAnimate(!animate);
              } else {
                router.push("/main-page/home");
              }
            }}
          />
*/
