import "../styles/global.css";
import Navigation from "../components/navigation";
import React from "react";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: {
        template: "%s | Next Movies",
        default: "Loading...",
    },
    description: 'The Best Movies on the Best Framework',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}