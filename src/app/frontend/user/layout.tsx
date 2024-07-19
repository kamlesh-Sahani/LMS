import Navbar from "@/components/components/Navbar";
import Sidebar from "@/components/components/Sidebar";
import { ReactNode } from "react";

export default function User({ children }: { children: ReactNode }) {
  return (
    <main>
      <Navbar />
      <div className="flex gap-2 overflow-hidden bg-white">
        <Sidebar />
        {children}
      </div>
    </main>
  );
}
