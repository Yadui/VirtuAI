"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"; // GitHub Flavored Markdown plugin
import { BotAvatar } from "@/components/GeneralUI/bot-avatar";
import { UserAvatar } from "@/components/GeneralUI/user-avatar";
import { Empty } from "@/components/GeneralUI/empty";
import { Loader } from "@/components/GeneralUI/loader";
import { Heading } from "@/components/Header/heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { MessageSquare } from "lucide-react";

interface Message {
  role: "user" | "bot";
  content: string;
}

const ConvoPage = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleMessageSend = async () => {
    if (!newMessage.trim()) return;

    // Add user's message to the conversation
    setMessages((prev) => [...prev, { role: "user", content: newMessage }]);
    setNewMessage("");
    setLoading(true);

    try {
      const res = await fetch("/api/conversation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: newMessage }),
      });

      const data = await res.json();
      const reply = data.reply || "No response received";

      // Add bot's response to the conversation
      setMessages((prev) => [...prev, { role: "bot", content: reply }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: "Error occurred while fetching the response" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Heading
        title="Conversation"
        description="Chat with the bot using natural language."
        icon={MessageSquare}
        iconColor="text-green-700"
        bgColor="bg-green-700/10"
      />

      <div className="px-4 lg:px-8">
        <div className="rounded-lg border w-full p-4 mb-4">
          <div className="flex items-center gap-2">
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Ask the bot something..."
              disabled={loading}
              className="flex-1"
            />
            <Button
              onClick={handleMessageSend}
              disabled={loading}
              variant="premium"
            >
              Send
            </Button>
          </div>
        </div>

        <div className="space-y-4 mt-4">
          {loading && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <Loader />
            </div>
          )}

          {messages.length === 0 && !loading && (
            <Empty label="No conversation started." />
          )}

          <div className="flex flex-col-reverse gap-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  "p-4 rounded-lg",
                  message.role === "user"
                    ? "bg-blue-100 text-black"
                    : "bg-gray-100 text-black"
                )}
              >
                {message.role === "bot" && <BotAvatar />}
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]} // Enable Markdown table support
                  components={{
                    table: ({ node, ...props }) => (
                      <div className="overflow-x-auto my-4">
                        <table className="table-auto border-collapse border border-gray-300 w-full text-sm text-left">
                          {props.children}
                        </table>
                      </div>
                    ),
                    thead: ({ node, ...props }) => (
                      <thead className="bg-gray-200">{props.children}</thead>
                    ),
                    tr: ({ node, ...props }) => (
                      <tr className="border-b border-gray-300">
                        {props.children}
                      </tr>
                    ),
                    th: ({ node, ...props }) => (
                      <th className="px-4 py-2 font-bold border border-gray-300">
                        {props.children}
                      </th>
                    ),
                    td: ({ node, ...props }) => (
                      <td className="px-4 py-2 border border-gray-300">
                        {props.children}
                      </td>
                    ),
                    code: ({ node, ...props }) => (
                      <code
                        className="bg-gray-200 rounded-md px-2 py-1 text-sm text-black "
                        {...props}
                      />
                    ),
                  }}
                >
                  {message.content || ""}
                </ReactMarkdown>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConvoPage;
