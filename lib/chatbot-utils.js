/**
 * Locate the Romey chatbot widget iframe on the page.
 * Falls back across known ids and a src match so it keeps working regardless
 * of the exact iframe id the widget injects.
 */
export const getChatbotIframe = () => {
    if (typeof document === "undefined") return null;
    return (
        document.getElementById("romey-iframe") ||
        document.getElementById("roofera-iframe") ||
        document.querySelector('iframe[src*="/api/chatbot/"]') ||
        document.querySelector('iframe[src*="romey.ai"]')
    );
};

/**
 * Sends a message to the Romey chatbot iframe.
 * @param {string} message - The message to send to the chatbot
 */
export const sendMessageToChatbot = (message) => {
    const iframe = getChatbotIframe();
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
