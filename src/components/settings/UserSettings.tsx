"use client";

import { useAuth, useClerk, UserButton } from "@clerk/nextjs";
import { FileText } from "lucide-react";

export function UserSettings() {
  return (
    <UserButton
      appearance={{
        elements: {
          userButtonAvatarBox: "w-16 h-16 rounded-lg overflow-hidden",
          userButtonAvatarImage: "rounded-none",
          userButtonTrigger: "rounded-lg",
        },
      }}
      afterSignOutUrl="/"
    >
      <UserButton.UserProfilePage
        label="Terms"
        url="terms"
        labelIcon={<FileText size={16} />}
      >
        <div className="prose">
          <h1>Terms</h1>
          <p>Your custom content goes here.</p>
        </div>
      </UserButton.UserProfilePage>
    </UserButton>
  );
}
