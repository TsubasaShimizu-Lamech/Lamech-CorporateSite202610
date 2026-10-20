import { ArrowRight, Building2, GraduationCap, Users } from "lucide-react"

const facts = [
  { icon: Building2, label: "ORIGIN", text: "地方自治体の行政職員出身" },
  { icon: Users, label: "PROJECTS", text: "官公庁・共済組合・自動車メーカー" },
  { icon: GraduationCap, label: "TRAINING", text: "新人研修で全受講生から最高評価" },
]

export function HeroSection() {
  return (
    <>
      <section id="top" className="relative overflow-hidden bg-[#d9ecfb]">
        {/* 写真が読み込めなくても文字が読めるよう、背景色を先に敷く */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#bcdcf7] to-[#e9f4fd]" aria-hidden="true" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/01-city-panorama.png"
          alt=""
          width={1536}
          height={547}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-[60%_100%]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/45 via-45% to-transparent to-75%"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-6 pb-64 pt-32 md:pb-80 md:pt-40 lg:pb-96">
          <p className="eyebrow !text-navy-deep/70">IT CONSULTING &amp; PROJECT MANAGEMENT</p>
          <h1 className="mt-5 max-w-2xl font-serif text-[1.65rem] font-medium leading-[1.6] text-navy-deep sm:text-4xl sm:leading-[1.55]">
            ITとプロジェクトマネジメントで、
            <br className="hidden sm:block" />
            行政・公共と企業の現場を支える
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-[1.9] text-ink">
            地方自治体の行政職員として働いた経験をもとに、
            <br className="hidden sm:block" />
            官公庁・自治体のITプロジェクトを、技術とマネジメントの両面から支援します。
            <br className="hidden sm:block" />
            共済組合、自動車メーカーのプロジェクトにも携わっています。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-navy px-6 py-3.5 text-xs font-medium text-white hover:bg-navy-deep"
            >
              30分の情報交換を申し込む <ArrowRight size={14} aria-hidden="true" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-navy bg-white/85 px-6 py-3.5 text-xs font-medium text-navy hover:bg-white"
            >
              事業内容を見る <ArrowRight size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section aria-label="実績の要点" className="border-b border-line bg-white">
        <ul className="mx-auto grid max-w-6xl divide-y divide-line px-6 md:grid-cols-3 md:divide-x md:divide-y-0">
          {facts.map(({ icon: Icon, label, text }) => (
            <li key={label} className="flex items-center gap-5 py-6 md:px-8 md:first:pl-0 md:last:pr-0">
              <Icon className="h-8 w-8 shrink-0 text-navy" strokeWidth={1.25} aria-hidden="true" />
              <div>
                <p className="eyebrow">{label}</p>
                <p className="mt-1 text-sm font-medium text-navy-deep">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
