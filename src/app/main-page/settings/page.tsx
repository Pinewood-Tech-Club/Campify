"use client";

import {
  DeleteAccoundButtonDiv,
  DeleteAccount,
  DeleteAccountButton,
  DeleteAccountButtonText,
  DeleteAccountMainText,
} from "@/components/settings/DeleteAccount";
import { signOut, useSession } from "next-auth/react";

export default function Profile() {
  const { data: sessionData } = useSession();

  return (
    <main className="w-full h-full flex">
      <DeleteAccount>
        <DeleteAccountMainText>Delete Account</DeleteAccountMainText>
        <DeleteAccoundButtonDiv>
          <DeleteAccountButton
            onClick={async () => {
              await fetch("/api/school/db/account/remove", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  userId: sessionData?.user.id,
                }),
              });

              await signOut({ callbackUrl: "/", redirect: true });
            }}
          >
            <DeleteAccountButtonText>Delete</DeleteAccountButtonText>
          </DeleteAccountButton>
        </DeleteAccoundButtonDiv>
      </DeleteAccount>
    </main>
  );
}
