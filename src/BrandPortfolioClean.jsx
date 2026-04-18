import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChevronRight,
  Layers3,
  Mail,
  Menu,
  MessageCircle,
  Sparkles,
  Target,
  Users,
  X,
} from "lucide-react";

const text = {
  name: "\u59dc\u96e8\u6674",
  role: "\u7528\u6237\u589e\u957f\u4e0e\u8fd0\u8425\u4f53\u7cfb\u642d\u5efa\u4e13\u5bb6",
  navCases: "\u6848\u4f8b",
  navAbout: "\u5173\u4e8e",
  navSkills: "\u80fd\u529b",
  navContact: "\u8054\u7cfb",
  contact: "\u8054\u7cfb\u6211",
  heroIntro: "\u55e8\uff0c\u4f60\u597d\uff0c\u6211\u662f\u59dc\u96e8\u6674",
  heroGreeting: "\u55e8\uff0c\u4f60\u597d\uff0c\u6211\u662f",
  heroRoleLine: "\u7528\u6237\u589e\u957f\u4e0e\u8fd0\u8425\u4f53\u7cfb\u642d\u5efa\u4e13\u5bb6",
  heroPromise: "\u6211\u8ba9\u589e\u957f\u66f4\u6e05\u695a\uff0c\u4e5f\u66f4\u80fd\u843d\u5730\u3002",
  heroSub:
    "12\u5e74\u5e02\u573a\u8425\u9500\u4e0e\u8fd0\u8425\u7ecf\u9a8c\u3002\u6211\u64c5\u957f\u628a\u5185\u5bb9\u3001\u79c1\u57df\u3001\u6d3b\u52a8\u548c\u8f6c\u5316\u8def\u5f84\uff0c\u68b3\u7406\u6210\u4e00\u5957\u80fd\u6267\u884c\u3001\u80fd\u590d\u76d8\u7684\u8fd0\u8425\u7cfb\u7edf\u3002",
  viewCases: "\u770b\u7cbe\u9009\u6848\u4f8b",
  talk: "\u627e\u6211\u804a\u804a",
  aboutTitleA: "\u61c2\u4e1a\u52a1",
  aboutTitleB: "\u80fd\u505a\u7b56\u7565",
  aboutTitleC: "\u4e5f\u80fd\u843d\u5730\u3002",
  aboutLeadA: "\u6211\u628a",
  aboutLeadB: "\u4e1a\u52a1\u7406\u89e3",
  aboutLeadC: "\u548c",
  aboutLeadD: "\u8fd0\u8425\u843d\u5730",
  aboutLeadE: "\u8fde\u5728\u4e00\u8d77\u3002",
  aboutSub:
    "\u6211\u7684\u7ecf\u9a8c\u6a2a\u8de8\u54c1\u724c\u65b9\u3001\u5e7f\u544a\u516c\u53f8\u548c\u4e92\u8054\u7f51\u5e73\u53f0\uff0c\u66f4\u4e60\u60ef\u4ece\u4e1a\u52a1\u73b0\u573a\u51fa\u53d1\uff0c\u628a\u95ee\u9898\u62c6\u6e05\u695a\u3001\u628a\u52a8\u4f5c\u8dd1\u8d77\u6765\u3002",
};

const heroOptions = [
  text.name + "\uff0c" + text.heroRoleLine,
  "\u628a\u7528\u6237\u589e\u957f\uff0c\u505a\u6210\u53ef\u6301\u7eed\u7684\u8fd0\u8425\u7cfb\u7edf\u3002",
  "\u8fde\u63a5\u5185\u5bb9\u3001\u79c1\u57df\u4e0e\u8f6c\u5316\u8def\u5f84\u3002",
];

const tags = [
  "\u589e\u957f\u7b56\u7565",
  "\u79c1\u57df\u8fd0\u8425",
  "\u5185\u5bb9\u6d3b\u52a8",
  "\u4f53\u7cfb\u642d\u5efa",
  "\u7ed3\u679c\u610f\u8bc6",
];

const stats = [
  { value: "12\u5e74", label: "\u5e02\u573a\u8425\u9500\u4e0e\u8fd0\u8425\u7ecf\u9a8c", icon: BriefcaseBusiness },
  { value: "10\u4e07+", label: "\u7528\u6237\u89c4\u6a21\u9879\u76ee", icon: Users },
  { value: "\u591a\u884c\u4e1a", label: "\u653f\u52a1 / \u4e2d\u533b\u836f / \u79d1\u6280 / \u6e38\u620f", icon: Building2 },
  { value: "0-1", label: "\u8fd0\u8425\u4f53\u7cfb\u642d\u5efa", icon: Layers3 },
];

const problems = [
  ["\u7528\u6237\u589e\u957f\u505c\u6ede", "\u91cd\u65b0\u68b3\u7406\u5206\u5c42\u3001\u89e6\u8fbe\u8282\u594f\u548c\u8f6c\u5316\u52a8\u4f5c\u3002"],
  ["\u79c1\u57df\u8fd0\u8425\u8584\u5f31", "\u4ece\u6c89\u6dc0\u3001\u5206\u5c42\u3001\u6d3b\u52a8\u5230\u8f6c\u5316\uff0c\u642d\u5efa\u95ed\u73af\u3002"],
  ["\u5185\u5bb9\u4e0d\u8f6c\u5316", "\u8ba9\u5185\u5bb9\u627f\u62c5\u89e3\u91ca\u4ef7\u503c\u3001\u5efa\u7acb\u4fe1\u4efb\u548c\u63a8\u52a8\u884c\u52a8\u7684\u4efb\u52a1\u3002"],
  ["\u8fd0\u8425\u7f3a\u4f53\u7cfb", "\u628a\u96f6\u6563\u7ecf\u9a8c\u6c89\u6dc0\u6210\u6d41\u7a0b\u3001\u5de5\u5177\u548c\u590d\u76d8\u673a\u5236\u3002"],
];

const cases = [
  {
    featured: true,
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
    title: "\u5de5\u4f1a\u798f\u5229\u5361\u7528\u6237\u79c1\u57df\u589e\u957f\u4e0e\u8f6c\u5316\u91cd\u5efa\u9879\u76ee",
    summary: "\u91cd\u5efa\u7528\u6237\u89e6\u8fbe\u3001\u79c1\u57df\u627f\u63a5\u4e0e\u798f\u5229\u8f6c\u5316\u8def\u5f84\u3002",
    tags: ["\u79c1\u57df\u589e\u957f", "\u8f6c\u5316\u8def\u5f84", "\u4f53\u7cfb\u91cd\u5efa"],
    detail: {
      background: "\u9879\u76ee\u9762\u5411\u5de5\u4f1a\u798f\u5229\u5361\u7528\u6237\uff0c\u9700\u8981\u63d0\u5347\u89e6\u8fbe\u6548\u7387\u548c\u540e\u7eed\u8f6c\u5316\u627f\u63a5\u80fd\u529b\u3002",
      challenge: "\u7528\u6237\u89e6\u70b9\u5206\u6563\uff0c\u79c1\u57df\u627f\u63a5\u5f31\uff0c\u5185\u5bb9\u548c\u6d3b\u52a8\u7f3a\u5c11\u7a33\u5b9a\u8282\u594f\u3002",
      goal: "\u642d\u5efa\u66f4\u6e05\u6670\u7684\u79c1\u57df\u8fd0\u8425\u6d41\u7a0b\uff0c\u63d0\u5347\u7528\u6237\u6fc0\u6d3b\u548c\u8f6c\u5316\u6548\u7387\u3002",
      role: "\u8d1f\u8d23\u4e1a\u52a1\u68b3\u7406\u3001\u7528\u6237\u8def\u5f84\u8bbe\u8ba1\u3001\u5185\u5bb9\u6d3b\u52a8\u89c4\u5212\u4e0e\u590d\u76d8\u3002",
      actions: [
        "\u68b3\u7406\u7528\u6237\u4ece\u8ba4\u77e5\u3001\u5165\u7fa4\u3001\u53c2\u4e0e\u5230\u8f6c\u5316\u7684\u5173\u952e\u8def\u5f84\u3002",
        "\u91cd\u6784\u79c1\u57df\u627f\u63a5\u6d41\u7a0b\uff0c\u660e\u786e\u89e6\u8fbe\u8282\u70b9\u548c\u6d3b\u52a8\u8282\u594f\u3002",
        "\u8bbe\u8ba1\u798f\u5229\u6743\u76ca\u5185\u5bb9\u77e9\u9635\uff0c\u964d\u4f4e\u7528\u6237\u7406\u89e3\u6210\u672c\u3002",
      ],
      result: ["\u7528\u6237\u6fc0\u6d3b\u6570\u636e\uff1a\u5f85\u8865\u5145", "\u79c1\u57df\u627f\u63a5\u6570\u636e\uff1a\u5f85\u8865\u5145", "\u8f6c\u5316\u7ed3\u679c\uff1a\u5f85\u8865\u5145"],
      review: "\u6838\u5fc3\u4e0d\u662f\u505a\u4e00\u573a\u6d3b\u52a8\uff0c\u800c\u662f\u628a\u7528\u6237\u5173\u7cfb\u3001\u5185\u5bb9\u8282\u594f\u548c\u4e1a\u52a1\u8f6c\u5316\u653e\u5230\u540c\u4e00\u5f20\u8fd0\u8425\u5730\u56fe\u91cc\u770b\u3002",
    },
  },
  {
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=85",
    title: "\u4e2d\u533b\u836f\u54c1\u724c\u5185\u5bb9\u8fd0\u8425\u9879\u76ee",
    summary: "\u628a\u4e13\u4e1a\u5185\u5bb9\u8f6c\u5316\u6210\u7528\u6237\u66f4\u5bb9\u6613\u7406\u89e3\u7684\u8868\u8fbe\u3002",
    tags: ["\u5185\u5bb9\u7b56\u7565", "\u54c1\u724c\u8868\u8fbe", "\u6d3b\u52a8\u8fd0\u8425"],
    detail: {
      background: "\u4e2d\u533b\u836f\u4e1a\u52a1\u9700\u8981\u5728\u4e13\u4e1a\u6027\u548c\u5927\u4f17\u7406\u89e3\u4e4b\u95f4\u627e\u5e73\u8861\u3002",
      challenge: "\u5185\u5bb9\u4e13\u4e1a\u4f46\u8ddd\u79bb\u7528\u6237\u8f83\u8fdc\uff0c\u6d3b\u52a8\u4f20\u64ad\u96be\u6c89\u6dc0\u3002",
      goal: "\u63d0\u5347\u5185\u5bb9\u4eb2\u548c\u529b\uff0c\u5f62\u6210\u7a33\u5b9a\u7684\u7528\u6237\u6559\u80b2\u8282\u594f\u3002",
      role: "\u8d1f\u8d23\u5185\u5bb9\u7b56\u7565\u3001\u6d3b\u52a8\u4e3b\u9898\u548c\u4f20\u64ad\u8282\u594f\u3002",
      actions: ["\u68b3\u7406\u6838\u5fc3\u7528\u6237\u573a\u666f\u3002", "\u8bbe\u8ba1\u4e3b\u9898\u5185\u5bb9\u680f\u76ee\u3002", "\u89c4\u5212\u6d3b\u52a8\u4f20\u64ad\u8282\u70b9\u3002"],
      result: ["\u9879\u76ee\u6570\u636e\uff1a\u5f85\u8865\u5145"],
      review: "\u4e13\u4e1a\u5185\u5bb9\u66f4\u9700\u8981\u7ffb\u8bd1\u80fd\u529b\u3002",
    },
  },
  {
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
    title: "\u79d1\u6280\u4e0e\u6e38\u620f\u884c\u4e1a\u6d3b\u52a8\u589e\u957f\u9879\u76ee",
    summary: "\u56f4\u7ed5\u7528\u6237\u5174\u8da3\u548c\u53c2\u4e0e\u52a8\u673a\uff0c\u8bbe\u8ba1\u66f4\u6709\u53c2\u4e0e\u611f\u7684\u6d3b\u52a8\u673a\u5236\u3002",
    tags: ["\u7528\u6237\u589e\u957f", "\u6d3b\u52a8\u7b56\u5212", "\u793e\u7fa4\u89e6\u8fbe"],
    detail: {
      background: "\u9879\u76ee\u9762\u5411\u5e74\u8f7b\u7528\u6237\uff0c\u9700\u8981\u901a\u8fc7\u6d3b\u52a8\u548c\u5185\u5bb9\u589e\u5f3a\u53c2\u4e0e\u3002",
      challenge: "\u7528\u6237\u6ce8\u610f\u529b\u5206\u6563\uff0c\u666e\u901a\u6d3b\u52a8\u5bb9\u6613\u88ab\u5ffd\u7565\u3002",
      goal: "\u63d0\u5347\u6d3b\u52a8\u53c2\u4e0e\u610f\u613f\uff0c\u8ba9\u6d3b\u52a8\u6210\u4e3a\u7528\u6237\u5173\u7cfb\u7684\u5165\u53e3\u3002",
      role: "\u8d1f\u8d23\u6d3b\u52a8\u521b\u610f\u3001\u6d41\u7a0b\u8bbe\u8ba1\u548c\u6267\u884c\u534f\u540c\u3002",
      actions: ["\u62c6\u89e3\u7528\u6237\u52a8\u673a\u3002", "\u8bbe\u8ba1\u6d3b\u52a8\u73a9\u6cd5\u3002", "\u89c4\u5212\u5185\u5bb9\u7269\u6599\u3002"],
      result: ["\u9879\u76ee\u6570\u636e\uff1a\u5f85\u8865\u5145"],
      review: "\u5e74\u8f7b\u7528\u6237\u9700\u8981\u4e00\u4e2a\u660e\u786e\u3001\u8f7b\u677e\u3001\u6709\u53cd\u9988\u7684\u53c2\u4e0e\u7406\u7531\u3002",
    },
  },
];

const abilities = [
  ["\u7528\u6237\u589e\u957f", "\u62c6\u76ee\u6807\u3001\u770b\u8def\u5f84\u3001\u505a\u52a8\u4f5c\u3002"],
  ["\u79c1\u57df\u8fd0\u8425", "\u642d\u5efa\u7528\u6237\u6c89\u6dc0\u3001\u5206\u5c42\u89e6\u8fbe\u548c\u8f6c\u5316\u95ed\u73af\u3002"],
  ["\u5185\u5bb9\u8fd0\u8425", "\u8ba9\u5185\u5bb9\u89e3\u91ca\u4ef7\u503c\u3001\u5efa\u7acb\u4fe1\u4efb\u3002"],
  ["\u6d3b\u52a8\u7b56\u5212", "\u8bbe\u8ba1\u4ece\u4e3b\u9898\u5230\u590d\u76d8\u7684\u5b8c\u6574\u94fe\u8def\u3002"],
  ["\u54c1\u724c\u7ba1\u7406", "\u8ba9\u54c1\u724c\u8868\u8fbe\u66f4\u6e05\u695a\uff0c\u4e5f\u66f4\u670d\u52a1\u4e1a\u52a1\u3002"],
  ["\u4f53\u7cfb\u642d\u5efa", "\u628a\u7ecf\u9a8c\u6c89\u6dc0\u6210\u6d41\u7a0b\u3001\u5de5\u5177\u548c\u8282\u594f\u3002"],
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function BrandPortfolioClean() {
  const [activeTitle, setActiveTitle] = useState(0);
  const [selectedCase, setSelectedCase] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fafaf9] text-[#0c0a09]">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero activeTitle={activeTitle} setActiveTitle={setActiveTitle} />
        <Stats />
        <Problems />
        <Cases onOpenCase={setSelectedCase} />
        <About />
        <Abilities />
        <Tools />
        <Contact />
      </main>
      <Footer />
      <CaseModal selectedCase={selectedCase} onClose={() => setSelectedCase(null)} />
    </div>
  );
}

function Header({ menuOpen, setMenuOpen }) {
  const navItems = [
    [text.navCases, "#cases"],
    [text.navAbout, "#about"],
    [text.navSkills, "#abilities"],
    [text.navContact, "#contact"],
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-stone-950/5 bg-[#fafaf9]/82 backdrop-blur-2xl">
      <Shell className="flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-3 font-semibold">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[#1c1917] text-xs text-white">JY</span>
          <span>{text.name}</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-stone-700 md:flex">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} className="transition hover:text-stone-950">
              {label}
            </a>
          ))}
        </nav>
        <a className="hidden rounded-full bg-[#1c1917] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#ca8a04] md:inline-flex" href="#contact">
          {text.contact}
        </a>
        <button className="grid h-10 w-10 place-items-center rounded-full border border-stone-950/10 bg-white md:hidden" onClick={() => setMenuOpen((value) => !value)} aria-label="menu">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Shell>
      {menuOpen && (
        <div className="border-t border-stone-950/5 bg-white md:hidden">
          <Shell className="grid gap-1 py-4">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} className="rounded-lg px-3 py-3 font-medium hover:bg-stone-100" onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
          </Shell>
        </div>
      )}
    </header>
  );
}

function Hero({ activeTitle, setActiveTitle }) {
  return (
    <section className="relative overflow-hidden bg-[#fafaf9]">
      <div className="pointer-events-none absolute -left-28 top-0 h-44 w-[54rem] rounded-[50%] border-[9px] border-[#ca8a04] border-b-0 border-r-0 opacity-80" />
      <div className="pointer-events-none absolute -right-16 top-24 h-80 w-80 rounded-full border-[22px] border-[#eab308]/80" />
      <div className="pointer-events-none absolute bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#fef3c7]/70 blur-3xl" />

      <Shell className="grid min-h-[calc(100vh-4rem)] items-center gap-12 py-16 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.5 }} className="relative z-10">
          <div className="mb-6 inline-flex items-center rounded-full border border-stone-950/10 bg-white/80 px-4 py-2 text-sm font-semibold shadow-[0_16px_60px_rgba(28,25,23,0.08)] backdrop-blur-xl">
            <Sparkles className="mr-2 h-4 w-4 text-[#ca8a04]" />
            {text.role}
          </div>

          {activeTitle === 0 ? (
            <div className="max-w-5xl">
              <p className="mb-2 text-base font-semibold tracking-[-0.01em] text-stone-600 sm:text-lg">{text.heroGreeting}</p>
              <h1 className="text-6xl font-black leading-[0.9] tracking-[-0.055em] text-[#ca8a04] sm:text-7xl lg:text-8xl">
                {text.name}
              </h1>
              <div className="mt-6 max-w-none">
                <p className="whitespace-nowrap text-3xl font-black leading-tight tracking-[-0.045em] text-stone-950 sm:text-4xl lg:text-[3.35rem]">
                  {text.heroRoleLine}
                </p>
                <p className="mt-5 inline-flex rounded-full border border-[#ca8a04]/30 bg-[#fef3c7]/70 px-5 py-3 text-base font-black text-stone-800 shadow-[0_16px_50px_rgba(202,138,4,0.12)]">
                  {text.heroPromise}
                </p>
              </div>
            </div>
          ) : (
            <h1 className="max-w-4xl text-5xl font-black leading-[1.08] tracking-[-0.035em] sm:text-6xl lg:text-7xl">{heroOptions[activeTitle]}</h1>
          )}

          <p className="mt-8 max-w-2xl text-lg leading-9 text-stone-600">{text.heroSub}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a className="inline-flex items-center rounded-full bg-[#1c1917] px-6 py-3.5 font-semibold text-white transition hover:bg-[#ca8a04]" href="#cases">
              {text.viewCases}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a className="inline-flex items-center rounded-full border border-stone-950/12 bg-white/80 px-6 py-3.5 font-semibold backdrop-blur transition hover:border-[#ca8a04] hover:bg-[#fef3c7]" href="#contact">
              {text.talk}
            </a>
          </div>
          <div className="mt-9 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="rounded-full border border-stone-950/8 bg-white/70 px-3.5 py-2 text-sm font-medium text-stone-600 shadow-[0_12px_35px_rgba(28,25,23,0.04)]">{tag}</span>
            ))}
          </div>
          <div className="mt-8 grid max-w-2xl gap-2 sm:grid-cols-3">
            {heroOptions.map((title, index) => (
              <button key={title} onClick={() => setActiveTitle(index)} className={`rounded-lg border px-3 py-3 text-left text-sm leading-5 transition ${activeTitle === index ? "border-[#ca8a04] bg-[#fef3c7] text-stone-950" : "border-stone-950/8 bg-white/70 text-stone-500 hover:border-stone-950/18"}`}>
                标题 {index + 1}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }} className="relative z-10">
          <div className="relative mx-auto max-w-[31rem]">
            <div className="absolute -left-4 top-14 z-10 rounded-full border border-stone-950/10 bg-white/82 px-5 py-3 text-center shadow-[0_24px_80px_rgba(28,25,23,0.14)] backdrop-blur-xl">
              <p className="text-2xl font-black">12年</p>
              <p className="text-xs font-semibold text-stone-500">运营经验</p>
            </div>
            <div className="aspect-[4/5] w-full overflow-hidden rounded-full bg-[#efe7d8] shadow-[0_30px_120px_rgba(28,25,23,0.16)]">
              <img className="h-full w-full object-cover object-center" src="/profile-lifestyle-oval.png" alt="姜雨晴生活化职业照片" />
            </div>
            <div className="absolute -bottom-7 right-5 z-10 w-64 rounded-lg border border-stone-950/8 bg-white/86 p-5 shadow-[0_24px_80px_rgba(28,25,23,0.13)] backdrop-blur-xl">
              <p className="text-sm font-semibold text-stone-500">我关注的不是热闹</p>
              <p className="mt-2 text-xl font-black leading-snug">而是清晰路径、稳定动作和可复盘结果。</p>
            </div>
          </div>
        </motion.div>
      </Shell>
      <div className="h-16 rounded-t-[50%] bg-white" />
    </section>
  );
}

function Stats() {
  return (
    <section className="bg-white">
      <Shell className="grid gap-4 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ value, label, icon: Icon }) => (
          <motion.div key={label} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp} className="rounded-lg border border-stone-950/6 bg-[#fafaf9] p-6 shadow-[0_18px_70px_rgba(28,25,23,0.06)] transition hover:-translate-y-1">
            <Icon className="mb-6 h-6 w-6 text-[#ca8a04]" />
            <p className="text-4xl font-black tracking-[-0.03em]">{value}</p>
            <p className="mt-2 text-sm leading-6 text-stone-600">{label}</p>
          </motion.div>
        ))}
      </Shell>
    </section>
  );
}

function Problems() {
  return (
    <section className="bg-[#fafaf9] py-24">
      <Shell>
        <SectionTitle label="What I Solve" title="我能解决什么问题" text="好的运营设计，应该让业务目标、用户路径和执行动作变得更清楚。" />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {problems.map(([title, desc], index) => (
            <motion.div key={title} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp} transition={{ delay: index * 0.04 }} className="rounded-lg border border-stone-950/6 bg-white/82 p-6 shadow-[0_18px_70px_rgba(28,25,23,0.05)] backdrop-blur-xl transition hover:-translate-y-1 hover:bg-[#fef3c7]">
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-[#fef3c7]">
                <Target className="h-5 w-5 text-[#ca8a04]" />
              </div>
              <h3 className="text-xl font-black">{title}</h3>
              <p className="mt-4 leading-7 text-stone-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </Shell>
    </section>
  );
}

function Cases({ onOpenCase }) {
  return (
    <section id="cases" className="bg-white py-24">
      <Shell>
        <SectionTitle label="Selected Work" title="精选案例" text="用案例说明：我如何把业务问题拆清楚，再把策略变成可以执行的增长动作。" />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {cases.map((item, index) => (
            <motion.article
              key={item.title}
              initial="hidden"
              whileInView="visible"
              whileHover={{ y: -10, scale: 1.015 }}
              whileTap={{ scale: 0.99 }}
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              transition={{ delay: index * 0.04, duration: 0.24, ease: "easeOut" }}
              role="button"
              tabIndex={0}
              onClick={() => onOpenCase(item)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  onOpenCase(item);
                }
              }}
              className={`group cursor-pointer overflow-hidden rounded-lg border bg-[#fafaf9] shadow-[0_20px_80px_rgba(28,25,23,0.07)] outline-none transition hover:border-[#ca8a04] hover:shadow-[0_30px_100px_rgba(28,25,23,0.14)] focus-visible:ring-2 focus-visible:ring-[#ca8a04] focus-visible:ring-offset-4 ${item.featured ? "border-[#ca8a04]" : "border-stone-950/6"}`}
            >
              <div className="h-56 overflow-hidden">
                <img className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-110 group-hover:saturate-110" src={item.image} alt={item.title} />
              </div>
              <div className="p-6">
                {item.featured && <span className="mb-4 inline-flex rounded-full bg-[#ca8a04] px-3 py-1 text-xs font-black text-white">重点案例</span>}
                <h3 className="text-2xl font-black leading-tight tracking-[-0.02em]">{item.title}</h3>
                <p className="mt-4 leading-7 text-stone-600">{item.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-stone-600 transition group-hover:bg-[#fef3c7]">{tag}</span>
                  ))}
                </div>
                <button className="mt-7 inline-flex items-center font-black text-stone-950 transition group-hover:text-[#ca8a04]" onClick={(event) => { event.stopPropagation(); onOpenCase(item); }}>
                  查看详情
                  <ChevronRight className="ml-1 h-4 w-4 transition group-hover:translate-x-1" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </Shell>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-[#fafaf9] py-24">
      <Shell className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <div>
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-stone-500 shadow-[0_14px_50px_rgba(28,25,23,0.05)]">About Me</p>
            <h2 className="mt-7 max-w-2xl text-4xl font-black leading-[1.12] tracking-[-0.035em] sm:text-5xl lg:text-[3.8rem]">
              {text.aboutLeadA}
              <span className="text-[#ca8a04]">{text.aboutLeadB}</span>
              {text.aboutLeadC}
              <span className="text-[#ca8a04]">{text.aboutLeadD}</span>
              {text.aboutLeadE}
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-9 text-stone-600">{text.aboutSub}</p>
          </div>
          <img className="mt-10 aspect-[5/4] w-full rounded-lg object-cover shadow-[0_26px_90px_rgba(28,25,23,0.08)]" src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85" alt="modern workspace" />
        </div>
        <div className="grid content-center gap-5">
          {[
            ["职业路径", "品牌方 / 广告公司 / 互联网平台"],
            ["工作方式", "从业务目标出发，先拆问题，再定策略和节奏。"],
            ["核心优势", "策略、执行、复盘三件事都能往前推。"],
          ].map(([title, desc], index) => (
            <motion.div
              key={title}
              initial="hidden"
              whileInView="visible"
              whileHover={{ x: 8, scale: 1.01 }}
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              transition={{ delay: index * 0.05, duration: 0.24 }}
              className="group relative overflow-hidden rounded-lg border border-stone-950/6 bg-white/80 p-7 shadow-[0_18px_70px_rgba(28,25,23,0.05)] backdrop-blur-xl"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#fef3c7] opacity-0 transition group-hover:opacity-100" />
              <p className="relative text-sm font-black text-[#ca8a04]">0{index + 1}</p>
              <h3 className="relative mt-4 text-2xl font-black tracking-[-0.02em]">{title}</h3>
              <p className="relative mt-4 text-lg leading-8 text-stone-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </Shell>
    </section>
  );
}

function Abilities() {
  return (
    <section id="abilities" className="bg-white py-24">
      <Shell>
        <SectionTitle label="Skills & System" title="能力体系" text="让团队知道目标是什么、动作怎么做、结果怎么看。" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {abilities.map(([title, desc]) => (
            <div key={title} className="rounded-lg border border-stone-950/6 bg-[#fafaf9] p-6 shadow-[0_18px_70px_rgba(28,25,23,0.05)]">
              <CheckCircle2 className="mb-6 h-6 w-6 text-[#ca8a04]" />
              <h3 className="text-xl font-black">{title}</h3>
              <p className="mt-3 leading-7 text-stone-600">{desc}</p>
            </div>
          ))}
        </div>
      </Shell>
    </section>
  );
}

function Tools() {
  return (
    <section className="bg-[#fafaf9] py-24">
      <Shell className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-lg bg-[#1c1917] p-8 text-white shadow-[0_26px_90px_rgba(28,25,23,0.14)] lg:p-12">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#facc15]">Tools & Learning</p>
          <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.03em] sm:text-5xl">AI 是效率工具，不是能力的替代品。</h2>
          <p className="mt-6 max-w-2xl leading-8 text-white/68">我会用 AI 辅助资料整理、内容结构梳理、选题发散和复盘提效，但关键判断仍然来自业务理解和落地经验。</p>
        </div>
        <div className="grid gap-4">
          {["使用 AI 辅助内容整理", "提升信息处理和复盘效率", "保留人工判断与业务校准"].map((item) => (
            <div key={item} className="flex items-center gap-4 rounded-lg border border-stone-950/6 bg-white/82 p-6 shadow-[0_18px_70px_rgba(28,25,23,0.05)] backdrop-blur-xl">
              <BadgeCheck className="h-6 w-6 text-[#ca8a04]" />
              <span className="text-lg font-black">{item}</span>
            </div>
          ))}
        </div>
      </Shell>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-white py-24">
      <Shell className="grid gap-10 lg:grid-cols-[1fr_0.85fr]">
        <SectionTitle align="left" label="Contact Me" title="如果你正在找一个能把增长想清楚、也能推进落地的人，我们可以聊聊。" text="适合沟通的方向：用户增长、私域运营、内容活动策略、运营体系搭建、品牌与商业转化路径设计。" />
        <div className="rounded-lg border border-stone-950/6 bg-[#fafaf9] p-6 shadow-[0_26px_90px_rgba(28,25,23,0.08)]">
          <ContactLine icon={Mail} label="邮箱" value="yourname@example.com" />
          <ContactLine icon={MessageCircle} label="微信" value="WeChat ID 待补充" />
          <a href="mailto:yourname@example.com" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#1c1917] px-5 py-3.5 font-black text-white transition hover:bg-[#ca8a04]">
            发邮件联系
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </Shell>
    </section>
  );
}

function ContactLine({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-4 border-b border-stone-950/8 py-5 first:pt-0 last:border-b-0">
      <div className="grid h-12 w-12 place-items-center rounded-full bg-[#fef3c7]">
        <Icon className="h-5 w-5 text-[#ca8a04]" />
      </div>
      <div>
        <p className="text-sm font-semibold text-stone-500">{label}</p>
        <p className="font-black">{value}</p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[#1c1917] py-10 text-white">
      <Shell className="flex flex-col justify-between gap-3 text-sm text-white/55 sm:flex-row">
        <p>© 2026 姜雨晴 Portfolio. All rights reserved.</p>
        <p>用户增长 · 私域运营 · 运营体系搭建</p>
      </Shell>
    </footer>
  );
}

function Shell({ children, className = "" }) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

function SectionTitle({ label, title, text: desc, align = "center" }) {
  const isLeft = align === "left";

  return (
    <div className={isLeft ? "max-w-3xl" : "mx-auto max-w-3xl text-center"}>
      <p className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-stone-500 shadow-[0_14px_50px_rgba(28,25,23,0.05)]">{label}</p>
      <h2 className="mt-5 text-4xl font-black leading-[1.15] tracking-[-0.03em] sm:text-5xl">{title}</h2>
      <p className="mt-5 text-lg leading-8 text-stone-600">{desc}</p>
    </div>
  );
}

function CaseModal({ selectedCase, onClose }) {
  return (
    <AnimatePresence>
      {selectedCase && (
        <motion.div className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
          <motion.article className="max-h-[88vh] w-full max-w-4xl overflow-y-auto rounded-lg bg-[#fafaf9] shadow-[0_30px_120px_rgba(0,0,0,0.24)]" initial={{ opacity: 0, y: 18, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 18, scale: 0.98 }} onClick={(event) => event.stopPropagation()}>
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-stone-950/8 bg-white/92 p-5 backdrop-blur">
              <div>
                <p className="text-sm font-black text-[#ca8a04]">案例详情</p>
                <h3 className="mt-1 text-2xl font-black leading-snug tracking-[-0.02em]">{selectedCase.title}</h3>
              </div>
              <button className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-stone-950/10 bg-white hover:border-[#ca8a04]" onClick={onClose} aria-label="关闭案例详情">
                <X size={20} />
              </button>
            </div>
            <div className="grid gap-5 p-5 sm:p-8">
              <Detail title="项目背景" text={selectedCase.detail.background} />
              <Detail title="业务挑战" text={selectedCase.detail.challenge} />
              <Detail title="项目目标" text={selectedCase.detail.goal} />
              <Detail title="我的角色" text={selectedCase.detail.role} />
              <div className="rounded-lg border border-stone-950/6 bg-white p-5">
                <h4 className="font-black">关键动作</h4>
                <div className="mt-4 grid gap-3">
                  {selectedCase.detail.actions.map((action) => (
                    <div key={action} className="flex gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#ca8a04]" />
                      <p className="leading-7 text-stone-600">{action}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <Detail title="结果" text={selectedCase.detail.result.join(" / ")} />
                <Detail title="项目复盘" text={selectedCase.detail.review} />
              </div>
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Detail({ title, text }) {
  return (
    <div className="rounded-lg border border-stone-950/6 bg-white p-5">
      <h4 className="font-black">{title}</h4>
      <p className="mt-3 leading-7 text-stone-600">{text}</p>
    </div>
  );
}
