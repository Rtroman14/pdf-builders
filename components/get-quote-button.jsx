"use client";

import { Button } from "@/components/ui/button";
import { defaultConfig } from "@/lib/default-config";

export function GetQuoteButton({
    message = defaultConfig.startProjectMessage,
    label = "Start Your Project",
    size = "lg",
    variant = "default",
    className = "",
}) {
    const handleClick = () => {
        const iframe = document.getElementById("roofera-iframe");
        if (iframe && iframe.contentWindow) {
            iframe.contentWindow.postMessage(
                {
                    type: "send-chatbot-message",
                    message: message,
                },
                "*"
            );
            console.log("Message sent to chatbot:", message);
        } else {
            console.error("Chatbot iframe not found. Please wait for the chatbot to load.");
        }
    };

    return (
        <Button
            onClick={handleClick}
            size={size}
            variant={variant}
            className={`cursor-pointer ${className}`}
        >
            {label}
        </Button>
    );
}
