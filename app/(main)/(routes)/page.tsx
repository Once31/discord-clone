"use client";

import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";
export default function Home() {
  return (
    <div className="flex flex-col">
      <p>This is a protected route.</p> <UserButton afterSignOutUrl="/" />
      <ModeToggle />
    </div>
  );
}
