"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import cx from "classnames";
import lodash from "lodash";
import { Fragment, useEffect, useState } from "react";
import {
  Card,
  CardHead,
  CardBody,
  LowerDecorationText,
  UpperDecorationText,
} from "../components/card/Card";
import ProfanityWithMadEmoji from "../components/ProfanityWithMadEmoji";
import Footer from "../components/Footer";
import {
  HighlightedText,
  LinkText,
  SwitchTextFont,
} from "../components/text/TextDecorations";
import {
  DivList,
  DivListGrow,
  DivListGrowCenter,
} from "../components/util/DivUtil";
import {
  Heading,
  HeadingBody,
  HeadingHead,
  HeadingMargin,
} from "../components/message-text/Heading";
import { ButtonText, TitleButton } from "../components/button/TitleButton";
import { trpc } from "@/trpc/react";
import { SignUpButton, useUser } from "@clerk/nextjs";

const textTypes = ["font-serif", "font-sans", "font-mono"];

export default function Home() {
  const { user, isLoaded } = useUser();

  return (
    <main>
      <DivList className="h-screen w-full">
        <Heading className="mb-24 flex-grow">
          <HeadingMargin>
            <HeadingHead>
              <SwitchTextFont className="mr-4" fonts={textTypes}>
                The
              </SwitchTextFont>
              <a>place for camps</a>
            </HeadingHead>
            <HeadingBody className="mt-10">
              A camp finder utility created by{" "}
              <HighlightedText>students</HighlightedText> for{" "}
              <HighlightedText>students</HighlightedText>
            </HeadingBody>
          </HeadingMargin>
        </Heading>
      </DivList>

      <div className="w-full">
        <div className="flex-col flex">
          <div className="mx-40">
            <Card>
              <CardHead className="flex flex-col">
                <UpperDecorationText>
                  Simple yet powerfull design 🚀
                </UpperDecorationText>
                <LowerDecorationText>
                  Explore the endless posibilities with our slick and modern UI{" "}
                  <HighlightedText>designed for your needs</HighlightedText>.
                </LowerDecorationText>
              </CardHead>
            </Card>
          </div>
          <div className="mx-40 mt-40">
            <Card>
              <CardHead className="flex flex-col">
                <UpperDecorationText>Active moderation ⭐</UpperDecorationText>
                <LowerDecorationText>
                  Comments and camps containing <ProfanityWithMadEmoji /> or
                  offensive language are constantly deleted{" "}
                  <HighlightedText>
                    in order for you to have a safe experience
                  </HighlightedText>
                  .
                </LowerDecorationText>
              </CardHead>
              <CardBody>
                <Image
                  src={"/chat-moderation.png"}
                  alt={"1"}
                  width={1000}
                  height={1000}
                  className="w-full h-full"
                />
              </CardBody>
            </Card>
          </div>
          <div className="mx-40 mt-40">
            <Card>
              <CardHead className="flex flex-col">
                <UpperDecorationText>
                  Artificial Intelligence ✨
                </UpperDecorationText>
                <LowerDecorationText>
                  Our service contains the{" "}
                  <HighlightedText>
                    <LinkText href="https://ollama.com/library/llama3:8b">
                      latest
                    </LinkText>
                  </HighlightedText>
                  <LinkText href="https://ollama.com/library/llama3:8b">
                    {" "}
                    and{" "}
                  </LinkText>
                  <HighlightedText>
                    <LinkText href="https://ollama.com/library/llama3:8b">
                      fastest
                    </LinkText>
                  </HighlightedText>{" "}
                  Artificial Intelligence used to recommend you the{" "}
                  <HighlightedText>best</HighlightedText> camps.
                </LowerDecorationText>
              </CardHead>
              <CardBody>
                <Image
                  src={"/ai.png"}
                  alt={"1"}
                  width={1000}
                  height={1000}
                  className="w-full h-full"
                />
              </CardBody>
            </Card>
          </div>
        </div>
        <div className="h-screen w-full">
          <Heading>
            <HeadingMargin>
              <HeadingHead>Ready To Get Started?</HeadingHead>
            </HeadingMargin>
            <SignUpButton>
              <TitleButton className="mt-20" onClick={() => {}}>
                <ButtonText>Get Started</ButtonText>
              </TitleButton>
            </SignUpButton>
          </Heading>
        </div>
        <div className="h-44">
          <Footer />
        </div>
      </div>
    </main>
  );
}
