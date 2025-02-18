"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { useState } from "react";
export default function page() {
  const [message, setMessage] = useState("");
  const handleClick = async () => {
    await fetch("http://localhost:8000/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });
    setMessage("");
    alert("Message sent successfully!");
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-32 bg-gray-100 dark:bg-gray-700 ">
        <div className="w-full max-w-4xl p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0 ">
              <div className="relative w-48 h-48 rounded-full overflow-hidden">
                <Image
                  src="/AboutImage.gif"
                  alt="Profile"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-center ">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                Contact Us
              </h1>
              <input
                type="text"
                className="border-2 border-black h-12 p-4 w-full"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                value={message}
              />
              <Button className="mt-4 w-full " onClick={handleClick}>
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
