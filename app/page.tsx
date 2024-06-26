"use client";
 
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { AppBar } from "./components/AppBar";
 
export default function Home() {
  return (
    <>
    <AppBar/>
    <main className="flex items-center justify-center min-h-screen">
      <div className="border hover:border-slate-900 rounded">
        <WalletMultiButton style={{}} />
      </div>
    </main>
    </>
  );
}