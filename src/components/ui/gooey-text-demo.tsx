"use client";

import * as React from "react";
import { GooeyText } from "@/components/ui/gooey-text-morphing";

function GooeyTextDemo() {
  return (
    <div className="h-[200px] flex items-center justify-center">
      <GooeyText
        texts={["Design", "Engineering", "Development", "Is", "Awesome"]}
        morphTime={1}
        cooldownTime={0.25}
        className="font-bold"
        textClassName="text-4xl md:text-5xl font-bold bg-gradient-to-r from-vivid-purple to-bright-orange bg-clip-text text-transparent"
      />
    </div>
  );
}

export { GooeyTextDemo }; 