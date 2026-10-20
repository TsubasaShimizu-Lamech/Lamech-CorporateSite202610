import { ArrowRight, User } from "lucide-react"
import { withBase } from "@/lib/paths"

export function RepresentativeSection() {
  return (
    <section id="representative" className="bg-white py-20 md:py-24">
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-6 lg:grid-cols-[220px_1fr_1fr] lg:gap-12">
        {/* 写真に差し替える場合は、この div を <img src={withBase("/images/representative.jpg")} ...> に置き換える */}
        <div
          role="img"
          aria-label="代表者写真（準備中）"
          className="flex aspect-[4/5] w-48 flex-col items-center justify-end bg-gradient-to-b from-[#e6ebf3] to-[#d5dde9] pb-6 text-center text-[#9aa8bf] lg:w-full"
        >
          <User className="h-28 w-28" strokeWidth={1} aria-hidden="true" />
          <p className="mt-2 text-xs leading-5">
            Photo
            <br />
            Coming Soon
          </p>
        </div>

        <div>
          <p className="eyebrow">REPRESENTATIVE</p>
          <h2 className="mt-2 font-serif text-3xl font-medium text-navy-deep">代表紹介</h2>
          <p className="mt-6 flex flex-wrap items-baseline gap-x-4">
            <span className="font-serif text-xl text-navy-deep">清水 翼</span>
            <span className="text-xs text-muted">株式会社Lamech 代表取締役</span>
          </p>
          <p className="mt-5 text-sm leading-[2] text-ink">
            新卒より地方自治体の行政職員として従事。
            <br />
            その後、システム開発会社にSEとして入社。地方自治体向けのシステムや、教育関連サービス、大手通信事業者の社内システムのプロジェクトを経験しました。
          </p>
        </div>

        <div className="lg:border-l lg:border-line lg:pl-12">
          <p className="text-xs leading-[2.1] text-ink">
            独立後も、エンジニア・コンサルタント・PMOなど、さまざまなポジションで複数のプロジェクトに参画。とくに自治体職員の経験を活かし、デジタル庁プロジェクトでは、PMOチームを技術面から支援しました。他にも、自動車メーカーのプロジェクトでは最大4つの小規模プロジェクトを統括、共済組合事業のプロジェクトではブレイングマネージャーとして、マネジメントと実装の両方を担っています。
          </p>
          <p className="mt-4 text-xs leading-[2.1] text-ink">
            研修講師としても参画し、30名規模の新人社員研修にサブ講師として携わり、受講生アンケートで全員から最高評価をいただきました。
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
