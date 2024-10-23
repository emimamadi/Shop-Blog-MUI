"use client";

import Image from "next/image";

import TwoCol from "@/components/TwoCol";

import TrioCol from "@/components/TrioCol";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <TwoCol />

      <TrioCol />
    </div>
  );
}
