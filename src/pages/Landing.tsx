import {
  ArrowRight,
  Check,
  Copy,
  ImagePlus,
  LockKeyhole,
  Sparkles,
  Wallet,
  Waves,
} from "lucide-react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const feeWallet = "G5LGodJM2QYhd9YthPvxTgRtkypXS7r722wdF5CQTXJ2";

const steps = [
  { number: "01", title: "Shape the idea", body: "Name, ticker, story, and visual — all in one focused flow." },
  { number: "02", title: "Pay once", body: "Connect a Solana wallet and approve the transparent launch fee." },
  { number: "03", title: "Go live", body: "We pin your metadata and mint your SPL token on Solana." },
];

export default function Landing() {
  const navigate = useNavigate();
  const fileInput = useRef<HTMLInputElement>(null);
  const [copied, setCopied] = useState(false);
  const [imageName, setImageName] = useState("");
  const [showReview, setShowReview] = useState(false);

  const copyWallet = async () => {
    await navigator.clipboard?.writeText(feeWallet);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f8fa] text-[#12161c]">
      <div className="pointer-events-none fixed inset-0 -z-0 bg-[radial-gradient(circle_at_75%_8%,rgba(107,220,190,0.18),transparent_26%),radial-gradient(circle_at_12%_18%,rgba(151,169,255,0.14),transparent_22%)]" />
      <nav className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-3 text-left">
          <span className="flex size-10 items-center justify-center rounded-2xl bg-[#101820] text-[#9ef3d2] shadow-lg shadow-slate-900/10"><Sparkles className="size-5" /></span>
          <span><span className="block text-lg font-semibold tracking-tight">Your meme launcher</span><span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">meme launch studio</span></span>
        </button>
        <div className="hidden items-center gap-8 text-sm font-medium text-slate-500 md:flex">
          <a href="#how-it-works" className="transition hover:text-slate-900">How it works</a>
          <a href="#liquidity" className="transition hover:text-slate-900">Liquidity pools</a>
          <a href="#config" className="transition hover:text-slate-900">For builders</a>
        </div>
        <Button onClick={() => document.getElementById("launcher")?.scrollIntoView({ behavior: "smooth" })} className="rounded-full bg-[#101820] px-5 text-sm text-white hover:bg-[#26333d]">Launch a token <ArrowRight className="ml-2 size-4" /></Button>
      </nav>

      <section className="relative z-10 mx-auto grid w-full max-w-7xl gap-16 px-6 pb-20 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pb-32 lg:pt-24">
        <div className="max-w-2xl self-center">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1.5 text-xs font-semibold text-slate-500 shadow-sm backdrop-blur"><span className="size-1.5 rounded-full bg-emerald-400" />A simpler way to launch</div>
          <h1 className="text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-7xl">Your meme.<br /><span className="text-slate-400">On-chain.</span></h1>
          <p className="mt-7 max-w-lg text-lg leading-8 text-slate-500">Create your own meme coin, launch it for your community, and keep control of the liquidity from day one.</p>
          <div className="mt-9 flex flex-wrap items-center gap-4"><Button onClick={() => document.getElementById("launcher")?.scrollIntoView({ behavior: "smooth" })} className="h-12 rounded-full bg-[#101820] px-6 text-white hover:bg-[#26333d]">Create your meme coin <ArrowRight className="ml-2 size-4" /></Button><span className="text-sm text-slate-400">Mainnet ready · SPL standard</span></div>
          <div className="mt-14 flex flex-wrap gap-8 text-sm text-slate-500"><span className="flex items-center gap-2"><LockKeyhole className="size-4 text-emerald-500" />Non-custodial</span><span className="flex items-center gap-2"><ImagePlus className="size-4 text-indigo-400" />IPFS metadata</span><span className="flex items-center gap-2"><Waves className="size-4 text-amber-500" />Raydium ready</span></div>
        </div>
        <div className="relative">
          <div className="absolute -inset-5 rounded-[3rem] bg-gradient-to-br from-emerald-200/40 via-transparent to-indigo-200/40 blur-2xl" />
          <Card id="launcher" className="relative overflow-hidden rounded-[2rem] border-white/80 bg-white/85 shadow-[0_28px_90px_rgba(41,52,66,0.13)] backdrop-blur-xl">
            <CardHeader className="border-b border-slate-100 px-7 pb-5 pt-7"><div className="flex items-center justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">Meme coin launcher</p><CardTitle className="mt-2 text-2xl tracking-tight">Build your coin</CardTitle></div><div className="flex items-center gap-1.5 rounded-full bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-500"><span className="size-1.5 rounded-full bg-amber-400" />Draft</div></div></CardHeader>
            <CardContent className="space-y-5 px-7 py-7"><div className="grid gap-5 sm:grid-cols-2"><label className="space-y-2 text-sm font-medium">Coin name<Input placeholder="e.g. Community Club" className="mt-2 h-11 rounded-xl border-slate-200 bg-slate-50/70" /></label><label className="space-y-2 text-sm font-medium">Ticker symbol<Input placeholder="e.g. MOON" maxLength={10} className="mt-2 h-11 rounded-xl border-slate-200 bg-slate-50/70 uppercase" /></label></div><label className="block space-y-2 text-sm font-medium">Description<Textarea placeholder="Tell your community what this coin stands for." className="mt-2 min-h-24 resize-none rounded-xl border-slate-200 bg-slate-50/70" /></label><button type="button" onClick={() => fileInput.current?.click()} className="flex w-full items-center gap-4 rounded-xl border border-dashed border-slate-300 bg-slate-50/60 p-4 text-left transition hover:border-emerald-400 hover:bg-emerald-50/40"><span className="flex size-12 items-center justify-center rounded-xl bg-white text-slate-400 shadow-sm"><ImagePlus className="size-5" /></span><span className="min-w-0 flex-1"><span className="block text-sm font-semibold">{imageName || "Add coin artwork"}</span><span className="block truncate text-xs text-slate-400">PNG, JPG or WEBP · max 10 MB · pinned to IPFS</span></span><span className="text-xs font-semibold text-emerald-600">Browse</span><input ref={fileInput} type="file" accept="image/png,image/jpeg,image/webp" className="hidden" onChange={(event) => setImageName(event.target.files?.[0]?.name ?? "")} /></button><div className="flex items-center justify-between rounded-xl bg-[#f4f7f7] px-4 py-3"><span className="text-sm text-slate-500">Launch fee</span><span className="font-semibold">0.05 SOL</span></div><Button onClick={() => setShowReview(true)} className="h-12 w-full rounded-xl bg-[#101820] text-white hover:bg-[#26333d]">Review and checkout <Wallet className="ml-2 size-4" /></Button>{showReview && <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-5"><p className="font-semibold text-indigo-900">Your coin is ready for review</p><p className="mt-2 text-sm leading-6 text-indigo-700">Confirm the details, then sign in to continue to secure wallet checkout and launch.</p><Button onClick={() => navigate("/auth?returnTo=/dashboard")} className="mt-4 rounded-xl bg-[#101820] text-white hover:bg-[#26333d]">Continue to checkout <ArrowRight className="ml-2 size-4" /></Button></div>}<p className="text-center text-[11px] leading-5 text-slate-400">Your wallet signs the payment and mint transactions. Your wallet signs the checkout and token transactions. We never hold your funds or keys.</p></CardContent>
          </Card>
        </div>
      </section>

      <section id="how-it-works" className="relative z-10 border-y border-slate-200/70 bg-white/55 px-6 py-20 lg:px-10"><div className="mx-auto max-w-7xl"><div className="mb-12 max-w-xl"><p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-500">A clear path to launch</p><h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">From an idea to a coin your customers can own.</h2></div><div className="grid gap-5 md:grid-cols-3">{steps.map((step) => <div key={step.number} className="rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm"><span className="text-xs font-bold tracking-[0.18em] text-slate-300">{step.number}</span><h3 className="mt-10 text-xl font-semibold">{step.title}</h3><p className="mt-3 text-sm leading-6 text-slate-500">{step.body}</p></div>)}</div></div></section>

      <section id="liquidity" className="relative z-10 mx-auto grid w-full max-w-7xl gap-8 px-6 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-10"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">After the mint</p><h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Keep control after launch.</h2><p className="mt-5 max-w-md leading-7 text-slate-500">Once your coin is live, use the Raydium guide to create a pool, set the starting price, and manage liquidity for your community.</p><a href="#liquidity" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 underline decoration-slate-300 underline-offset-8">Open liquidity guide <ArrowRight className="size-4" /></a></div><Card className="rounded-[2rem] border-slate-200/80 bg-white shadow-sm"><CardContent className="p-7 sm:p-9"><div className="flex items-start justify-between gap-6"><div><div className="flex size-11 items-center justify-center rounded-2xl bg-amber-50 text-amber-600"><Waves className="size-5" /></div><h3 className="mt-5 text-xl font-semibold">Raydium pool checklist</h3></div><span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">Coming next</span></div><div className="mt-8 grid gap-4 sm:grid-cols-2">{["Have your token mint address", "Choose a SOL starting price", "Add token + SOL liquidity", "Share your pool link"].map((item) => <div key={item} className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-600"><span className="flex size-6 items-center justify-center rounded-full bg-white text-emerald-500 shadow-sm"><Check className="size-3.5" /></span>{item}</div>)}</div></CardContent></Card></section>

      <section id="config" className="relative z-10 bg-[#101820] px-6 py-20 text-white lg:px-10"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9ef3d2]">Builder controls</p><h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Set up the launcher for your business.</h2><p className="mt-5 max-w-md leading-7 text-slate-400">Set the launch price and connect your own Helius RPC and Pinata account in Render environment variables. The receiving wallet is preconfigured below.</p></div><div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6"><div className="flex items-center justify-between gap-4"><div><p className="text-xs uppercase tracking-[0.18em] text-slate-500">Fee recipient</p><p className="mt-2 break-all font-mono text-sm text-[#c4ffe9]">{feeWallet}</p></div><Button variant="outline" size="icon" onClick={copyWallet} className="shrink-0 rounded-xl border-white/15 bg-transparent text-white hover:bg-white/10">{copied ? <Check className="size-4 text-emerald-300" /> : <Copy className="size-4" />}</Button></div><div className="mt-6 grid gap-3 sm:grid-cols-3"><div className="rounded-2xl bg-black/15 p-4"><p className="text-xs text-slate-500">Price</p><p className="mt-1 font-semibold">0.05 SOL</p></div><div className="rounded-2xl bg-black/15 p-4"><p className="text-xs text-slate-500">Network</p><p className="mt-1 font-semibold">Mainnet β</p></div><div className="rounded-2xl bg-black/15 p-4"><p className="text-xs text-slate-500">Storage</p><p className="mt-1 font-semibold">Pinata IPFS</p></div></div></div></div></section>
      <footer className="relative z-10 mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between lg:px-10"><span>Your meme launcher · Built for customer communities.</span><span>Simple checkout · Customer-ready · Non-custodial.</span></footer>
    </main>
  );
}
