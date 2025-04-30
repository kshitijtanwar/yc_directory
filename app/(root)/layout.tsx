import Navbar from "@/components/Navbar";
import { Toaster } from "sonner";

export default function Layout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className="font-work-sans">
            <Navbar />
            {children}
            <Toaster position="top-right" richColors />
        </main>
    );
}
