// app/chat/page.tsx
import { Suspense } from "react";
import ChatClient from "./ChatClient";
import "./chat.css";

export default function ChatPage() {
  return (
    <Suspense fallback={null}>
      <ChatClient />
    </Suspense>
  );
}
