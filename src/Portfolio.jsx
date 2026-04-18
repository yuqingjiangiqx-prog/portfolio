import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Layers3,
  Mail,
  Menu,
  MessageCircle,
  Rocket,
  Sparkles,
  Target,
  Users,
  X,
} from "lucide-react";

const heroTitles = [
  "Hi,你好。/n我是姜雨晴",
  "从增长策略到落地执行，让运营更有章法、更有结果。",
  "连接内容、私域与转化路径，搭建能跑起来的增长体系。",
];

const stats = [
  { value: "12年", label: "市场营销与运营经验", icon: BriefcaseBusiness },
  { value: "10万+", label: "用户规模项目操盘经验", icon: Users },
  { value: "多行业", label: "政务 / 中医药 / 科技 / 游戏", icon: Building2 },
  { value: "0-1", label: "运营体系搭建与流程重建", icon: Layers3 },
];

const problems = [
  ["用户增长停滞", "从用户分层、渠道节奏、触达内容和转化动作入手，重新找到增长抓手。"],
  ["私域运营薄弱", "搭建用户沉淀、标签管理、内容触达、活动转化的闭环，让私域不只是群和好友。"],
  ["内容不转化", "把内容从“发出去”升级为“能引导行动”，围绕业务目标设计选题和路径。"],
  ["运营缺体系", "梳理目标、流程、角色、工具和复盘机制，让运营从个人经验变成团队能力。"],
];

const cases = [
  {
    featured: true,
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
        "建立阶段复盘表，持续观察用户反馈、参与情况和转化阻点。",
      ],
      result: ["用户激活数据：待补充", "私域承接数据：待补充", "转化结果：待补充"],
      review: "这个项目的核心不是单点活动，而是把用户关系、内容节奏和业务转化放在同一张运营地图里看。",
    },
  },
  {
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
  ["用户增长", "围绕获客、激活、留存、转化，拆解增长目标和关键动作。"],
  ["私域运营", "搭建用户沉淀、分层触达、社群承接和转化闭环。"],
  ["内容运营", "让内容服务业务目标，兼顾用户理解、信任建立和行动引导。"],
  ["活动策划", "从主题、机制、传播、转化到复盘，设计完整活动链路。"],
  ["品牌管理", "在品牌表达和业务结果之间找到清晰、一致、可持续的表达方式。"],
  ["体系搭建", "把零散动作沉淀成流程、工具、指标和团队协作机制。"],
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function App() {
  const [activeTitle, setActiveTitle] = useState(0);
  const [selectedCase, setSelectedCase] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-hidden text-ink">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero activeTitle={activeTitle} setActiveTitle={setActiveTitle} />
        <Stats />
        <Problems />
        <CaseSection onOpenCase={setSelectedCase} />
        <About />
        <AbilitySystem />
        <ToolsAndLearning />
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
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/95 backdrop-blur">
      <div className="section-shell flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-3 font-bold">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-ink text-white">姜</span>
          <span>姜雨晴 Portfolio</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-ink/70 md:flex">
          {navItems.map(([label, href]) => (
            <a key={label} className="transition hover:text-ink" href={href}>
              {label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden rounded-lg bg-coral px-4 py-2 text-sm font-semibold text-white transition hover:bg-ink md:block">
          联系我
        </a>
        <button
          className="grid h-10 w-10 place-items-center rounded-lg border border-ink/10 bg-white md:hidden"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="打开导航"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {menuOpen && (
        <div className="border-t border-ink/10 bg-white md:hidden">
          <div className="section-shell grid gap-2 py-4">
            {navItems.map(([label, href]) => (
              <a key={label} className="rounded-lg px-3 py-3 font-medium hover:bg-mint" href={href} onClick={() => setMenuOpen(false)}>
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
    <section className="section-shell grid min-h-[calc(100vh-4rem)] items-center gap-10 py-14 md:grid-cols-[1.05fr_0.95fr] lg:py-20">
      <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.55 }}>
        <div className="section-kicker">
          <Sparkles className="mr-2 h-4 w-4 text-coral" />
          用户增长与运营体系搭建专家
        </div>
       <h1 className="max-w-3xl whitespace-pre-line text-4xl font-black leading-tight text-ink sm:text-5xl lg:text-6xl">
  {activeTitle === 0 ? (
    <>
      Hi，你好！<br />
我是<span className="text-coral">姜雨晴</span>
    </>
  ) : (
    heroTitles[activeTitle]
  )}
</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/68">
          12年横跨品牌方、广告公司与互联网平台的市场营销与运营经验，擅长把内容、活动、私域和商业转化路径串成能执行、能复盘、能持续优化的运营系统。
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href="#cases" className="inline-flex items-center rounded-lg bg-ink px-5 py-3 font-semibold text-white transition hover:bg-coral">
            查看案例
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <a href="#contact" className="inline-flex items-center rounded-lg border border-ink/15 bg-white px-5 py-3 font-semibold transition hover:border-coral hover:text-coral">
            预约沟通
          </a>
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {["增长策略", "私域运营", "内容活动", "体系搭建", "结果意识"].map((tag) => (
            <span key={tag} className="rounded-full border border-ink/10 bg-white px-3 py-1 text-sm text-ink/70">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-8">
          <p className="mb-3 text-sm font-semibold text-ink/55">主标题备选</p>
          <div className="grid gap-2 sm:grid-cols-3">
            {heroTitles.map((title, index) => (
              <button
                key={title}
                className={`rounded-lg border px-3 py-3 text-left text-sm leading-5 transition ${
                  activeTitle === index ? "border-coral bg-white text-ink shadow-line" : "border-ink/10 bg-white/70 text-ink/58 hover:border-moss/35"
                }`}
                onClick={() => setActiveTitle(index)}
              >
                版本 {index + 1}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div className="card p-4" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65, delay: 0.1 }}>
        <img
          className="h-52 w-full rounded-lg object-cover"
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80"
          alt="明亮的现代办公空间"
        />
        <div className="p-4 sm:p-6">
          <p className="text-sm font-semibold text-coral">不是传统简历，是可验证的运营思路</p>
          <h2 className="mt-3 text-2xl font-black">把增长问题拆清楚，把运营动作跑起来。</h2>
          <div className="mt-6 grid gap-4">
            {[
              ["经验", "12年市场营销与运营经验"],
              ["用户规模", "操盘过10万+用户规模项目"],
              ["行业", "政务 / 中医药 / 科技 / 游戏"],
            ].map(([label, value]) => (
              <div key={label} className="flex items-start justify-between gap-4 border-t border-ink/10 pt-4">
                <span className="text-sm font-semibold text-ink/50">{label}</span>
                <span className="max-w-[13rem] text-right font-bold">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Stats() {
  return (
    <section className="section-shell py-8">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ value, label, icon: Icon }) => (
          <motion.div key={label} className="card card-hover p-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Icon className="mb-5 h-6 w-6 text-coral" />
            <div className="text-3xl font-black">{value}</div>
            <p className="mt-2 text-sm leading-6 text-ink/62">{label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Problems() {
  return (
    <section className="py-20">
      <div className="section-shell">
        <SectionTitle kicker="我能解决什么问题" title="很多增长问题，不是缺点子，而是缺一套能持续运转的方法。" text="我会先回到业务目标，再拆用户、内容、触点和转化路径，让运营动作不再散。" />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {problems.map(([title, text]) => (
            <motion.article key={title} className="card card-hover p-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <Target className="mb-5 h-6 w-6 text-moss" />
              <h3 className="text-xl font-black">{title}</h3>
              <p className="mt-4 leading-7 text-ink/64">{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseSection({ onOpenCase }) {
  return (
    <section id="cases" className="border-y border-ink/10 bg-white py-20">
      <div className="section-shell">
        <SectionTitle kicker="精选案例" title="用案例说明，我如何把业务问题转成增长动作。" text="不堆概念，重点看背景、挑战、角色、策略、动作和复盘。数据结果保留待补充口径。" />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {cases.map((item) => (
            <motion.article key={item.title} className={`card card-hover flex min-h-[25rem] flex-col overflow-hidden ${item.featured ? "border-coral/40" : ""}`} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="h-40 overflow-hidden">
                <img
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  src={item.featured ? "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=80" : item.title.includes("中医药") ? "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1000&q=80" : "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80"}
                  alt={item.title}
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                {item.featured && <span className="mb-4 inline-flex w-fit rounded-full bg-coral px-3 py-1 text-xs font-bold text-white">重点案例</span>}
                <h3 className="text-2xl font-black leading-snug">{item.title}</h3>
                <p className="mt-4 leading-7 text-ink/64">{item.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-mint px-3 py-1 text-sm font-semibold text-moss">{tag}</span>
                  ))}
                </div>
                <button className="mt-auto inline-flex w-fit items-center pt-7 font-bold text-coral transition hover:text-ink" onClick={() => onOpenCase(item)}>
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
    <section id="about" className="py-20">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <span className="section-kicker">关于我</span>
          <h2 className="text-3xl font-black leading-tight sm:text-4xl">我更擅长站在业务现场，搭一套能被团队执行的运营方法。</h2>
          <p className="mt-5 leading-8 text-ink/65">过去的职业路径横跨品牌方、广告公司与互联网平台，也接触过政务、中医药、科技、游戏等不同业务场景。这让我既理解品牌表达，也重视用户增长与转化结果。</p>
          <img className="mt-8 h-64 w-full rounded-lg object-cover shadow-soft" src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80" alt="团队讨论运营策略" />
        </div>
        <div className="grid gap-4">
          {[
            ["职业路径", "从品牌、广告到平台型业务，熟悉内容、增长、活动和品牌的不同工作语境。"],
            ["工作方式", "从业务目标和用户行为出发，先把问题拆清楚，再设计策略、节奏、资源和执行路径。"],
            ["核心优势", "懂业务，能做策略，也能推进落地；看重结果意识，更看重复盘后的持续优化。"],
          ].map(([title, text], index) => (
            <motion.div key={title} className="card card-hover p-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-sun font-black">{index + 1}</div>
              <h3 className="text-xl font-black">{title}</h3>
              <p className="mt-3 leading-7 text-ink/64">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AbilitySystem() {
  return (
    <section id="abilities" className="bg-mint/45 py-20">
      <div className="section-shell">
        <SectionTitle kicker="能力体系" title="策略不是停在 PPT 里，体系也不是写在表格里。" text="好的运营能力，应该能让团队知道目标是什么、动作怎么做、结果怎么看。" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {abilities.map(([title, text]) => (
            <motion.div key={title} className="card card-hover p-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <CheckCircle2 className="mb-5 h-6 w-6 text-coral" />
              <h3 className="text-xl font-black">{title}</h3>
              <p className="mt-3 leading-7 text-ink/64">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ToolsAndLearning() {
  return (
    <section className="py-20">
      <div className="section-shell">
        <div className="card grid gap-8 overflow-hidden p-6 md:grid-cols-[1fr_0.9fr] md:p-8 lg:p-10">
          <div>
            <span className="section-kicker">工具与学习</span>
            <h2 className="text-3xl font-black leading-tight sm:text-4xl">AI 是效率工具，不是能力的替代品。</h2>
            <p className="mt-5 leading-8 text-ink/65">我会用 AI 辅助资料整理、内容结构梳理、选题发散和复盘提效，但关键判断仍然来自业务理解、用户洞察和落地经验。</p>
            <div className="mt-7 grid gap-3">
              {["使用 AI 辅助内容整理", "提升信息处理和复盘效率", "保留人工判断与业务校准"].map((text) => (
                <div key={text} className="flex items-center gap-3">
                  <BadgeCheck className="h-5 w-5 text-coral" />
                  <span className="font-semibold">{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid content-between rounded-lg bg-ink p-6 text-white">
            <BookOpen className="h-9 w-9 text-sun" />
            <p className="mt-8 text-2xl font-black leading-snug">保持学习，但不把新工具包装成万能答案。</p>
            <p className="mt-4 leading-7 text-white/68">真正有价值的是：把工具放回具体业务场景，用它节省时间、减少重复、提高输出质量。</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-ink py-20 text-white">
      <div className="section-shell grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <span className="mb-4 inline-flex rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-white/80">联系我</span>
          <h2 className="text-3xl font-black leading-tight sm:text-4xl">如果你正在找一个能把增长想清楚、也能推进落地的人，我们可以聊聊。</h2>
          <p className="mt-5 max-w-2xl leading-8 text-white/68">适合沟通的方向：用户增长、私域运营、内容活动策略、运营体系搭建、品牌与商业转化路径设计。</p>
        </div>
        <div className="rounded-lg border border-white/12 bg-white/8 p-6">
          <ContactLine icon={Mail} label="邮箱" value="yourname@example.com" />
          <ContactLine icon={MessageCircle} label="微信" value="WeChat ID 待补充" />
          <a href="mailto:yourname@example.com" className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-coral px-5 py-3 font-bold text-white transition hover:bg-white hover:text-ink">
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
    <div className="mb-4 flex items-center gap-4 border-b border-white/10 pb-4 last:border-b-0">
      <div className="grid h-11 w-11 place-items-center rounded-lg bg-white/10">
        <Icon className="h-5 w-5 text-sun" />
      </div>
      <div>
        <p className="text-sm text-white/50">{label}</p>
        <p className="font-bold">{value}</p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-paper py-8">
      <div className="section-shell flex flex-col justify-between gap-3 text-sm text-ink/55 sm:flex-row">
        <p>© 2026 姜雨晴 Portfolio. All rights reserved.</p>
        <p>用户增长 · 私域运营 · 运营体系搭建</p>
      </div>
    </footer>
  );
}

function SectionTitle({ kicker, title, text }) {
  return (
    <div className="max-w-3xl">
      <span className="section-kicker">{kicker}</span>
      <h2 className="text-3xl font-black leading-tight sm:text-4xl">{title}</h2>
      <p className="mt-4 text-lg leading-8 text-ink/64">{text}</p>
    </div>
  );
}

function CaseModal({ selectedCase, onClose }) {
  return (
    <AnimatePresence>
      {selectedCase && (
        <motion.div className="fixed inset-0 z-50 grid place-items-center bg-ink/62 p-4 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
          <motion.article className="max-h-[88vh] w-full max-w-4xl overflow-y-auto rounded-lg bg-paper shadow-soft" initial={{ opacity: 0, y: 24, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 24, scale: 0.98 }} onClick={(event) => event.stopPropagation()}>
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-ink/10 bg-paper/95 p-5 backdrop-blur">
              <div>
                <p className="text-sm font-bold text-coral">案例详情</p>
                <h3 className="mt-1 text-2xl font-black leading-snug">{selectedCase.title}</h3>
              </div>
              <button className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-ink/10 bg-white hover:border-coral hover:text-coral" onClick={onClose} aria-label="关闭案例详情">
                <X size={20} />
              </button>
            </div>
            <div className="grid gap-6 p-5 sm:p-8">
              <DetailBlock title="项目背景" text={selectedCase.detail.background} icon={ClipboardList} />
              <DetailBlock title="业务挑战" text={selectedCase.detail.challenge} icon={Target} />
              <DetailBlock title="项目目标" text={selectedCase.detail.goal} icon={BarChart3} />
              <DetailBlock title="我的角色" text={selectedCase.detail.role} icon={Users} />
              <DetailBlock title="解决策略" text={selectedCase.detail.strategy} icon={Rocket} />
              <div className="rounded-lg border border-ink/10 bg-white p-5">
                <h4 className="font-black">关键动作</h4>
                <div className="mt-4 grid gap-3">
                  {selectedCase.detail.actions.map((action) => (
                    <div key={action} className="flex gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-coral" />
                      <p className="leading-7 text-ink/68">{action}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-ink/10 bg-white p-5">
                  <h4 className="font-black">结果</h4>
                  <div className="mt-4 grid gap-2">
                    {selectedCase.detail.result.map((item) => (
                      <p key={item} className="rounded-lg bg-mint px-3 py-2 font-semibold text-moss">{item}</p>
                    ))}
                  </div>
                </div>
                <div className="rounded-lg border border-ink/10 bg-white p-5">
                  <h4 className="font-black">项目复盘</h4>
                  <p className="mt-4 leading-7 text-ink/68">{selectedCase.detail.review}</p>
                </div>
              </div>
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DetailBlock({ title, text, icon: Icon }) {
  return (
    <div className="rounded-lg border border-ink/10 bg-white p-5">
      <div className="flex items-center gap-3">
        <Icon className="h-5 w-5 text-coral" />
        <h4 className="font-black">{title}</h4>
      </div>
      <p className="mt-3 leading-7 text-ink/68">{text}</p>
    </div>
  );
}
