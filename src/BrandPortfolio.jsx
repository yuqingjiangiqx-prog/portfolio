import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
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

const heroTitles = [
  "嗨，你好，我是姜雨晴。",
  "我把用户增长，做成可持续的运营系统。",
  "连接内容、私域与转化路径，搭建能跑起来的增长体系。",
];

const stats = [
  { value: "12年", label: "市场营销与运营经验", icon: BriefcaseBusiness },
  { value: "10万+", label: "用户规模项目操盘经验", icon: Users },
  { value: "多行业", label: "政务 / 中医药 / 科技 / 游戏", icon: Building2 },
  { value: "0-1", label: "运营体系搭建与流程重建", icon: Layers3 },
];

const problems = [
  ["用户增长停滞", "重新梳理用户分层、触达节奏和转化动作，找到更稳定的增长抓手。"],
  ["私域运营薄弱", "从沉淀、分层、内容、活动到转化，搭建能持续运转的私域闭环。"],
  ["内容不转化", "让内容不只负责发布，而是负责建立信任、解释价值、推动行动。"],
  ["运营缺体系", "把零散经验整理成流程、工具、指标和复盘机制，让团队能复制。"],
];

const cases = [
  {
    featured: true,
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
    title: "工会福利卡用户私域增长与转化重建项目",
    summary: "围绕存量用户激活、私域承接与福利权益转化，重建从触达到成交的运营路径。",
    tags: ["私域增长", "转化路径", "用户激活", "体系重建"],
    detail: {
      background: "项目面向工会福利卡用户，需要提升用户触达效率、福利权益认知和后续转化承接能力。",
      challenge: "用户触点分散，私域承接弱，内容和活动没有形成稳定节奏，用户从了解到行动的路径不够清晰。",
      goal: "搭建更清晰的私域运营流程，提升用户激活、权益理解、活动参与和商业转化效率。",
      role: "负责业务梳理、用户路径设计、私域运营策略、内容活动规划、执行推进与阶段复盘。",
      strategy: "先从业务目标和用户行为出发，拆解关键节点，再用内容触达、社群承接、权益活动和转化机制形成闭环。",
      actions: [
        "梳理用户从办卡、认知、入群、参与、使用到复购/转介绍的关键路径。",
        "重构私域承接流程，明确触达节点、话术内容、活动节奏和责任分工。",
        "设计福利权益内容矩阵，用场景化表达降低理解成本。",
        "规划活动转化链路，把活动报名、权益领取、消费引导和复盘指标串联起来。",
      ],
      result: ["用户激活数据：待补充", "私域承接数据：待补充", "转化结果：待补充"],
      review: "这个项目的核心不是单点活动，而是把用户关系、内容节奏和业务转化放在同一张运营地图里看。",
    },
  },
  {
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=85",
    title: "中医药品牌内容运营与活动策略项目",
    summary: "用更易理解的内容表达和活动节奏，帮助专业品牌与大众用户建立信任。",
    tags: ["内容策略", "品牌表达", "活动运营"],
    detail: {
      background: "中医药相关业务需要在专业性和大众理解之间找到平衡。",
      challenge: "内容专业但距离用户较远，活动传播容易热闹但难沉淀。",
      goal: "提升内容亲和力，形成更稳定的用户教育与活动转化节奏。",
      role: "负责内容策略、活动主题设计、传播节奏与复盘建议。",
      strategy: "把专业信息拆成用户场景、生活问题和可执行建议，降低理解门槛。",
      actions: ["梳理核心用户场景。", "设计主题内容栏目。", "规划活动传播节点。", "建立复盘口径。"],
      result: ["项目数据：待补充"],
      review: "专业类内容更需要翻译能力，把行业语言转化成用户愿意看、看得懂、能行动的话。",
    },
  },
  {
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
    title: "科技与游戏行业用户活动增长项目",
    summary: "围绕目标用户兴趣和参与动机，设计更有参与感的活动机制与内容触达。",
    tags: ["用户增长", "活动策划", "社群触达"],
    detail: {
      background: "项目面向年轻用户群体，需要通过活动和内容增强参与。",
      challenge: "用户注意力分散，普通活动容易被忽略，活动后续沉淀不足。",
      goal: "提升活动参与意愿，并让活动成为用户关系和内容资产的入口。",
      role: "负责活动创意、流程设计、内容包装和执行协同。",
      strategy: "用更强的主题感、明确的参与反馈和后续承接动作提升活动价值。",
      actions: ["拆解用户动机。", "设计活动玩法。", "规划内容物料。", "沉淀复盘清单。"],
      result: ["项目数据：待补充"],
      review: "年轻用户不缺信息，缺的是一个足够明确、轻松、有反馈的参与理由。",
    },
  },
];

const abilities = [
  ["用户增长", "拆目标、看路径、做动作，让增长从口号变成日常节奏。"],
  ["私域运营", "搭建用户沉淀、分层触达、活动承接和转化闭环。"],
  ["内容运营", "把内容变成解释业务价值、建立信任和推动行动的工具。"],
  ["活动策划", "从主题、机制、传播、转化到复盘，设计完整活动链路。"],
  ["品牌管理", "让品牌表达更清楚，也更能服务业务结果。"],
  ["体系搭建", "把个人经验沉淀成流程、表格、节奏和团队协作方法。"],
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function BrandPortfolio() {
  const [activeTitle, setActiveTitle] = useState(0);
  const [selectedCase, setSelectedCase] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f7f8f8] text-[#111111]">
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
    ["案例", "#cases"],
    ["关于", "#about"],
    ["能力", "#abilities"],
    ["联系", "#contact"],
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-3 font-semibold">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[#111111] text-sm text-white">JY</span>
          <span>姜雨晴</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-black/62 md:flex">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} className="transition hover:text-black">
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-full bg-[#111111] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#f4b400] hover:text-black md:inline-flex"
        >
          联系我
        </a>
        <button
          className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white md:hidden"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="打开导航"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {menuOpen && (
        <div className="border-t border-black/5 bg-white md:hidden">
          <div className="mx-auto grid w-full max-w-7xl gap-1 px-5 py-4">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} className="rounded-lg px-3 py-3 font-medium hover:bg-[#f7f8f8]" onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero({ activeTitle, setActiveTitle }) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute -left-20 top-0 h-44 w-[52rem] rounded-[50%] border-[10px] border-[#f4b400] border-b-0 border-r-0 opacity-95" />
      <div className="pointer-events-none absolute right-0 top-28 h-72 w-72 rounded-full border-[22px] border-[#f4b400]" />
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-7xl items-center gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.5 }} className="relative z-10">
          <div className="mb-6 inline-flex items-center rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold shadow-[0_16px_60px_rgba(0,0,0,0.06)]">
            <Sparkles className="mr-2 h-4 w-4 text-[#f4b400]" />
            用户增长与运营体系搭建专家
          </div>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
            {activeTitle === 0 ? (
              <>
                嗨，你好，
                <br />
                我是<span className="text-[#f4b400]">姜雨晴</span>。
                <span className="mt-3 block text-4xl leading-tight tracking-[-0.02em] text-black/82 sm:text-5xl lg:text-6xl">
                  我让增长更清楚，也更能落地。
                </span>
              </>
            ) : (
              heroTitles[activeTitle]
            )}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-black/62">
            12年市场营销与运营经验，横跨品牌方、广告公司与互联网平台。擅长把内容、活动、私域和转化路径串成一套清晰、可执行、可复盘的运营系统。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#cases" className="inline-flex items-center rounded-full bg-[#111111] px-6 py-3.5 font-semibold text-white transition hover:bg-[#f4b400] hover:text-black">
              看精选案例
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center rounded-full border border-black/12 bg-white px-6 py-3.5 font-semibold transition hover:border-[#f4b400] hover:bg-[#fff7dd]">
              找我聊聊
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {["增长策略", "私域运营", "内容活动", "体系搭建", "结果意识"].map((tag) => (
              <span key={tag} className="rounded-full border border-black/8 bg-[#f7f8f8] px-3.5 py-2 text-sm font-medium text-black/62">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-8 grid max-w-2xl gap-2 sm:grid-cols-3">
            {heroTitles.map((title, index) => (
              <button
                key={title}
                onClick={() => setActiveTitle(index)}
                className={`rounded-lg border px-3 py-3 text-left text-sm leading-5 transition ${
                  activeTitle === index ? "border-[#f4b400] bg-[#fff7dd] text-black" : "border-black/8 bg-white text-black/50 hover:border-black/18"
                }`}
              >
                标题版本 {index + 1}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }} className="relative z-10">
          <div className="relative mx-auto max-w-[31rem]">
            <div className="absolute -left-6 top-12 z-10 rounded-full border border-black/10 bg-white px-5 py-3 text-center shadow-[0_24px_80px_rgba(0,0,0,0.12)]">
              <p className="text-2xl font-black">12年</p>
              <p className="text-xs font-semibold text-black/48">运营经验</p>
            </div>
            <img
              className="aspect-[4/5] w-full rounded-full object-cover shadow-[0_30px_120px_rgba(0,0,0,0.14)]"
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1100&q=85"
              alt="明亮的团队讨论场景"
            />
            <div className="absolute -bottom-7 right-5 z-10 w-64 rounded-lg border border-black/8 bg-white/92 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.12)] backdrop-blur">
              <p className="text-sm font-semibold text-black/50">我关注的不是热闹</p>
              <p className="mt-2 text-xl font-black leading-snug">而是清晰路径、稳定动作和可复盘结果。</p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="h-16 rounded-t-[50%] bg-[#f7f8f8]" />
    </section>
  );
}

function Stats() {
  return (
    <section className="mx-auto grid w-full max-w-7xl gap-4 px-5 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
      {stats.map(({ value, label, icon: Icon }) => (
        <motion.div
          key={label}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="rounded-lg border border-black/6 bg-white p-6 shadow-[0_18px_70px_rgba(0,0,0,0.06)] transition hover:-translate-y-1"
        >
          <Icon className="mb-6 h-6 w-6 text-[#f4b400]" />
          <p className="text-4xl font-black tracking-[-0.03em]">{value}</p>
          <p className="mt-2 text-sm leading-6 text-black/55">{label}</p>
        </motion.div>
      ))}
    </section>
  );
}

function Problems() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionTitle label="What I Solve" title="我能解决什么问题" text="年轻的表达不等于轻飘。好的运营设计，应该让业务目标、用户路径和执行动作变得更清楚。" />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {problems.map(([title, text], index) => (
            <motion.div
              key={title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              transition={{ delay: index * 0.04 }}
              className="group rounded-lg border border-black/6 bg-[#f7f8f8] p-6 transition hover:-translate-y-1 hover:bg-[#fff7dd]"
            >
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
                <Target className="h-5 w-5 text-[#f4b400]" />
              </div>
              <h3 className="text-xl font-black">{title}</h3>
              <p className="mt-4 leading-7 text-black/58">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cases({ onOpenCase }) {
  return (
    <section id="cases" className="py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionTitle label="Selected Work" title="精选案例" text="用案例说明：我如何把业务问题拆清楚，再把策略变成可以执行的增长动作。" />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {cases.map((item, index) => (
            <motion.article
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              transition={{ delay: index * 0.04 }}
              className={`overflow-hidden rounded-lg border bg-white shadow-[0_20px_80px_rgba(0,0,0,0.07)] transition hover:-translate-y-1 ${
                item.featured ? "border-[#f4b400]" : "border-black/6"
              }`}
            >
              <img className="h-56 w-full object-cover" src={item.image} alt={item.title} />
              <div className="p-6">
                {item.featured && <span className="mb-4 inline-flex rounded-full bg-[#f4b400] px-3 py-1 text-xs font-black text-black">重点案例</span>}
                <h3 className="text-2xl font-black leading-tight tracking-[-0.02em]">{item.title}</h3>
                <p className="mt-4 leading-7 text-black/58">{item.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-[#f7f8f8] px-3 py-1.5 text-sm font-semibold text-black/58">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="mt-7 inline-flex items-center font-black text-black transition hover:text-[#c58f00]" onClick={() => onOpenCase(item)}>
                  查看详情
                  <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
        <div>
          <SectionTitle label="About Me" title="我更擅长站在业务现场，搭一套能被团队执行的方法。" text="过去的职业路径横跨品牌方、广告公司与互联网平台，也做过政务、中医药、科技、游戏等不同业务。" />
          <img
            className="mt-10 aspect-[5/4] w-full rounded-lg object-cover shadow-[0_26px_90px_rgba(0,0,0,0.08)]"
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85"
            alt="团队白板讨论"
          />
        </div>
        <div className="grid content-center gap-4">
          {[
            ["职业路径", "从品牌、广告到平台型业务，熟悉内容、增长、活动和品牌的不同工作语境。"],
            ["工作方式", "从业务目标和用户行为出发，先把问题拆清楚，再设计策略、节奏、资源和执行路径。"],
            ["核心优势", "懂业务，能做策略，也能推进落地；看重结果意识，更看重复盘后的持续优化。"],
          ].map(([title, text], index) => (
            <div key={title} className="rounded-lg border border-black/6 bg-[#f7f8f8] p-6">
              <p className="text-sm font-black text-[#c58f00]">0{index + 1}</p>
              <h3 className="mt-3 text-2xl font-black tracking-[-0.02em]">{title}</h3>
              <p className="mt-3 leading-7 text-black/58">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Abilities() {
  return (
    <section id="abilities" className="py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionTitle label="Skills & System" title="能力体系" text="策略不是停在 PPT 里，体系也不是写在表格里。好的运营能力，应该能让团队知道目标是什么、动作怎么做、结果怎么看。" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {abilities.map(([title, text]) => (
            <div key={title} className="rounded-lg border border-black/6 bg-white p-6 shadow-[0_18px_70px_rgba(0,0,0,0.05)]">
              <CheckCircle2 className="mb-6 h-6 w-6 text-[#f4b400]" />
              <h3 className="text-xl font-black">{title}</h3>
              <p className="mt-3 leading-7 text-black/58">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Tools() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <div className="rounded-lg bg-[#111111] p-8 text-white lg:p-12">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f4b400]">Tools & Learning</p>
          <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.03em] sm:text-5xl">AI 是效率工具，不是能力的替代品。</h2>
          <p className="mt-6 max-w-2xl leading-8 text-white/62">我会用 AI 辅助资料整理、内容结构梳理、选题发散和复盘提效，但关键判断仍然来自业务理解、用户洞察和落地经验。</p>
        </div>
        <div className="grid gap-4">
          {["使用 AI 辅助内容整理", "提升信息处理和复盘效率", "保留人工判断与业务校准"].map((text) => (
            <div key={text} className="flex items-center gap-4 rounded-lg border border-black/6 bg-[#f7f8f8] p-6">
              <BadgeCheck className="h-6 w-6 text-[#f4b400]" />
              <span className="text-lg font-black">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:px-8">
        <div>
          <SectionTitle label="Contact Me" title="如果你正在找一个能把增长想清楚、也能推进落地的人，我们可以聊聊。" text="适合沟通的方向：用户增长、私域运营、内容活动策略、运营体系搭建、品牌与商业转化路径设计。" />
        </div>
        <div className="rounded-lg border border-black/6 bg-white p-6 shadow-[0_26px_90px_rgba(0,0,0,0.08)]">
          <ContactLine icon={Mail} label="邮箱" value="yourname@example.com" />
          <ContactLine icon={MessageCircle} label="微信" value="WeChat ID 待补充" />
          <a href="mailto:yourname@example.com" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#111111] px-5 py-3.5 font-black text-white transition hover:bg-[#f4b400] hover:text-black">
            发邮件联系
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactLine({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-4 border-b border-black/8 py-5 first:pt-0 last:border-b-0">
      <div className="grid h-12 w-12 place-items-center rounded-full bg-[#fff7dd]">
        <Icon className="h-5 w-5 text-[#c58f00]" />
      </div>
      <div>
        <p className="text-sm font-semibold text-black/45">{label}</p>
        <p className="font-black">{value}</p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[#111111] py-10 text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col justify-between gap-3 px-5 text-sm text-white/48 sm:flex-row sm:px-6 lg:px-8">
        <p>© 2026 姜雨晴 Portfolio. All rights reserved.</p>
        <p>用户增长 · 私域运营 · 运营体系搭建</p>
      </div>
    </footer>
  );
}

function SectionTitle({ label, title, text }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-black/50 shadow-[0_14px_50px_rgba(0,0,0,0.05)]">
        {label}
      </p>
      <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.03em] sm:text-5xl">{title}</h2>
      <p className="mt-5 text-lg leading-8 text-black/58">{text}</p>
    </div>
  );
}

function CaseModal({ selectedCase, onClose }) {
  return (
    <AnimatePresence>
      {selectedCase && (
        <motion.div className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
          <motion.article className="max-h-[88vh] w-full max-w-4xl overflow-y-auto rounded-lg bg-[#f7f8f8] shadow-[0_30px_120px_rgba(0,0,0,0.24)]" initial={{ opacity: 0, y: 18, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 18, scale: 0.98 }} onClick={(event) => event.stopPropagation()}>
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-black/8 bg-white/92 p-5 backdrop-blur">
              <div>
                <p className="text-sm font-black text-[#c58f00]">案例详情</p>
                <h3 className="mt-1 text-2xl font-black leading-snug tracking-[-0.02em]">{selectedCase.title}</h3>
              </div>
              <button className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-black/10 bg-white hover:border-[#f4b400]" onClick={onClose} aria-label="关闭案例详情">
                <X size={20} />
              </button>
            </div>
            <div className="grid gap-5 p-5 sm:p-8">
              <Detail title="项目背景" text={selectedCase.detail.background} />
              <Detail title="业务挑战" text={selectedCase.detail.challenge} />
              <Detail title="项目目标" text={selectedCase.detail.goal} />
              <Detail title="我的角色" text={selectedCase.detail.role} />
              <Detail title="解决策略" text={selectedCase.detail.strategy} />
              <div className="rounded-lg border border-black/6 bg-white p-5">
                <h4 className="font-black">关键动作</h4>
                <div className="mt-4 grid gap-3">
                  {selectedCase.detail.actions.map((action) => (
                    <div key={action} className="flex gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#f4b400]" />
                      <p className="leading-7 text-black/62">{action}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-black/6 bg-white p-5">
                  <h4 className="font-black">结果</h4>
                  <div className="mt-4 grid gap-2">
                    {selectedCase.detail.result.map((item) => (
                      <p key={item} className="rounded-lg bg-[#fff7dd] px-3 py-2 font-semibold text-black/70">{item}</p>
                    ))}
                  </div>
                </div>
                <div className="rounded-lg border border-black/6 bg-white p-5">
                  <h4 className="font-black">项目复盘</h4>
                  <p className="mt-4 leading-7 text-black/62">{selectedCase.detail.review}</p>
                </div>
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
    <div className="rounded-lg border border-black/6 bg-white p-5">
      <h4 className="font-black">{title}</h4>
      <p className="mt-3 leading-7 text-black/62">{text}</p>
    </div>
  );
}
