"use client";

import { Button } from "@/components/ui/button";
import { defaultConfig } from "@/lib/default-config";
import { sendMessageToChatbot } from "@/lib/chatbot-utils";

export function GetQuoteButton({
    message = defaultConfig.startProjectMessage,
    label = "Start Your Project",
    size = "lg",
    variant = "default",
    className = "",
}) {
    const handleClick = () => {
        sendMessageToChatbot(message);
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
