import React from "react";
import "./chat.css"; // ✅ charge seulement pour /chat

export default function ChatLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
