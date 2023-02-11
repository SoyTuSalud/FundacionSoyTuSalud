// "use client";

import React from "react";
import Footer from "./Footer";

export default function LayoutMain({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <div className="bg-gray-100">
      {children}
      {/* @ts-expect-error Server Component */}
      <Footer params={params} />
    </div>
  );
}
