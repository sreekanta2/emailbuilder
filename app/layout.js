"use client";
import { DndProvider } from "react-dnd";

import { HTML5Backend } from "react-dnd-html5-backend";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <DndProvider backend={HTML5Backend}>{children}</DndProvider>
      </body>
    </html>
  );
}
