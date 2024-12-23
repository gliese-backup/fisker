"use client";

import React from "react";
import { usePathname } from "next/navigation";

function HomePage() {
  const pathname = usePathname();
  return <h1>About ka catch!! {pathname}</h1>;
}

export default HomePage;
