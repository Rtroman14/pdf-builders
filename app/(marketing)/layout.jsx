import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { defaultConfig } from "@/lib/default-config";
import Script from "next/script";

export const metadata = {
    title: "PDF Builders | Custom Decks, Patios & Outdoor Living in Central Ohio",
    description:
        "PDF Builders designs and builds custom decks, paver patios, and complete outdoor living spaces throughout Central Ohio. Consult. Design. Build.",
};

export default function RootLayout({ children, config = defaultConfig }) {
    return (
        <>
            <Script src="https://roofera.ai/api/chatbot/c7231e21-5db0-460c-95a9-ad8670a9d6b9/widget" />

            <NavBar phoneNumber={config.phoneNumber} companyName={config.companyName} />
            <main className="h-full">{children}</main>
            <Footer companyName={config.companyName} />
        </>
    );
}
