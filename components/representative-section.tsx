import { ArrowRight } from "lucide-react"

export function RepresentativeSection() {
  return (
    <section id="representative" className="bg-white py-20 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_1.8fr] lg:gap-16">
        <div>
          <p className="eyebrow">REPRESENTATIVE</p>
          <h2 className="mt-2 font-serif text-3xl font-medium text-navy-deep">代表紹介</h2>
          <p className="mt-8 text-xs text-muted">株式会社Lamech 代表取締役</p>
          <p className="mt-1 font-serif text-2xl text-navy-deep">清水 翼</p>
        </div>

        <div className="lg:border-l lg:border-line lg:pl-16">
          <p className="text-sm leading-[2.1] text-ink">
            新卒より地方自治体の行政職員として従事した後、システム開発会社にSEとして入社。地方自治体向けシステム、教育関連サービス、大手通信事業者の社内システムなど、幅広い領域のプロジェクトを経験しました。
          </p>
          <p className="mt-4 text-sm leading-[2.1] text-ink">
            独立後は、エンジニア・コンサルタント・PMOなど複数の立場で、行政機関（省庁）、自動車メーカー、共済組合といった領域のプロジェクトに参画。行政実務への理解を活かし、技術とマネジメントの両面から、お客様のプロジェクトを支えています。研修講師として、新人エンジニアの育成にも携わっています。
          </p>
          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-2 border-b border-sky pb-0.5 text-xs font-medium text-navy hover:text-sky"
          >
            ご相談はこちら <ArrowRight size={12} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
