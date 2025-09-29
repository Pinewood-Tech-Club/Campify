"use client";

import {
  InputOption,
  InputOptionHiden,
  OptionGroup,
  SignIn,
  SignInBody,
  SignInButton,
  SignInButtonCard,
  SignInDividerWithText,
  SignInFooter,
  SignInHead,
  SignInMargin,
  TextOption,
} from "@/components/signin/SignIn";
import css from "./page.module.css";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import {
  ErrorBodyText,
  ErrorHeaderText,
  ErrorMargin,
  InvalidEmailError,
  SignInError,
} from "@/components/signin/SignInError";

export default function SignInPage() {
  enum Error {
    INVALID_EMAIL = "INVALID_EMAIL",
    INVALID_PASSWORD = "INVALID_PASSWORD",
    SERVER_ERROR = "SERVER_ERROR",
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [renderEmailRed, setRenderEmailRed] = useState<boolean>(false);
  const [error, setError] = useState<Error>();

  const [curAnimationError, setCurAnimationError] = useState<string>(
    css.errorGoDown
  );

  const searchParams = useSearchParams();

  useEffect(() => {
    const error = searchParams.get("error");
    if (error) {
      switch (error) {
        case Error.INVALID_EMAIL:
          setError(Error.INVALID_EMAIL);
          setRenderEmailRed(true);
          break;
        case Error.INVALID_PASSWORD:
          setError(Error.INVALID_PASSWORD);
          break;
        case Error.SERVER_ERROR:
          setError(Error.SERVER_ERROR);
          break;
      }
    }
  }, [searchParams]);

  async function handleEmailSignIn() {
    await signIn("credentials", {
      username: email,
      password: password,
      callbackUrl: "/main-page/home",
    });
  }

  async function handleGoogleSignIn() {
    await signIn("google", {
      callbackUrl: "/main-page/home",
    });
  }

  return (
    <main className="bg-slate-100">
      <div className="w-full h-screen">
        <div className="w-full h-full flex justify-center">
          {(() => {
            switch (error) {
              case Error.INVALID_EMAIL:
                return (
                  <SignInError
                    className={curAnimationError}
                    onAnimationEnd={() => {
                      setTimeout(() => {
                        setCurAnimationError(css.errorGoUp);
                      }, 1000);
                    }}
                  >
                    <ErrorMargin>
                      <InvalidEmailError>
                        <ErrorHeaderText>Error!</ErrorHeaderText>
                        <ErrorBodyText>
                          Please use a @pinewood.edu email.
                        </ErrorBodyText>
                      </InvalidEmailError>
                    </ErrorMargin>
                  </SignInError>
                );
              default:
                return <></>;
            }
          })()}

          <div className="flex items-center">
            <SignIn>
              <SignInMargin>
                <SignInHead>
                  <a>Sign In</a>
                </SignInHead>
                <SignInBody>
                  <OptionGroup>
                    <TextOption>Email</TextOption>
                    <InputOption
                      placeholder="littletimmy123@pinewood.edu"
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setRenderEmailRed(false);
                      }}
                      className={renderEmailRed ? "text-red-600" : ""}
                    />
                  </OptionGroup>
                  <OptionGroup className="mt-5">
                    <TextOption>Password</TextOption>
                    <InputOptionHiden
                      placeholder="timmyssecurepassword69"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </OptionGroup>
                </SignInBody>
                <SignInFooter className="mt-7">
                  <SignInButton
                    className={css.buttonChangeColorStyle}
                    onClick={handleEmailSignIn}
                  >
                    Sign in with Email
                  </SignInButton>
                </SignInFooter>
                <SignInDividerWithText className="my-5">
                  or
                </SignInDividerWithText>
                <OptionGroup className="flex flex-col h-max">
                  <SignInButton
                    className={css.buttonChangeColorStyle}
                    onClick={handleGoogleSignIn}
                  >
                    <SignInButtonCard>
                      <Image
                        src={"/google_logo.png"}
                        alt={"1"}
                        width={60}
                        height={60}
                        className="w-[56px] h-[56px] mt-[2px]"
                      />
                      <a>Sign in with Google</a>
                    </SignInButtonCard>
                  </SignInButton>
                </OptionGroup>
              </SignInMargin>
            </SignIn>
          </div>
        </div>
      </div>
    </main>
  );
}
