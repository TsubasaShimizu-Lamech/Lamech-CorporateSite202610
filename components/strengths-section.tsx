import { ArrowRight } from "lucide-react"
import { withBase } from "@/lib/paths"

const bullets = [
  "行政機関（省庁）のシステム関連プロジェクトで、PMO支援とシステム開発の両方に対応できます。",
  "技術的な課題や仕様を、非エンジニアの方にも分かる言葉で伝えられます。",
  "技術と行政実務の両面を理解した立場から、プロジェクトの円滑な進行を支えられます。",
]

function MoreLink({ href = "#representative" }: { href?: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 border-b border-sky pb-0.5 text-xs font-medium text-navy hover:text-sky"
    >
      詳しく見る <ArrowRight size={12} aria-hidden="true" />
    </a>
  )
}

export function StrengthsSection() {
  return (
    <section id="strengths" className="bg-mist py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-5 md:grid-cols-[auto_1fr] md:gap-10">
          <div>
            <p className="eyebrow">STRENGTHS</p>
            <h2 className="mt-2 font-serif text-3xl font-medium text-navy-deep">強み領域</h2>
          </div>
          <p className="text-sm leading-[1.9] text-muted md:border-l md:border-line md:pl-10">
            行政の現場を内側から知ることを軸に、
            <br className="hidden sm:block" />
            共済組合・自動車まで、複数の領域でプロジェクトを支えてきました。
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[1.35fr_1fr]">
          <article className="relative overflow-hidden bg-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={withBase("/images/02-government-building.png")}
              alt=""
              width={507}
              height={466}
              loading="lazy"
              className="absolute inset-y-0 right-0 hidden h-full w-3/5 object-cover object-left sm:block"
            />
            <div
              className="absolute inset-0 hidden bg-gradient-to-r from-white from-40% via-white/70 to-transparent sm:block"
              aria-hidden="true"
            />
            <div className="relative p-8 sm:w-[68%] md:p-10">
              <p className="eyebrow !text-sky">STRENGTH 01</p>
              <h3 className="mt-3 font-serif text-2xl font-medium text-navy-deep">官公庁・行政・自治体</h3>
              <p className="mt-3 text-sm font-medium text-navy-deep">行政の現場を、内側から知っています。</p>
              <ul className="mt-5 space-y-2 text-xs leading-[1.9] text-muted">
                {bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span aria-hidden="true">・</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <MoreLink />
              </div>
            </div>
          </article>

          <div className="grid gap-4">
            <article className="grid bg-white sm:grid-cols-[0.9fr_1fr]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={withBase("/images/04-workspace.png")}
                alt=""
                width={507}
                height={466}
                loading="lazy"
                className="h-44 w-full object-cover sm:h-full"
              />
              <div className="p-6">
                <p className="eyebrow">STRENGTH 02</p>
                <h3 className="mt-2 font-serif text-xl font-medium text-navy-deep">共済組合</h3>
                <p className="mt-3 text-xs leading-[1.9] text-muted">
                  加入者の方が使いやすいデザイン・設計で、スマートフォンアプリの開発・保守・改修ができます。プロジェクト管理と実装の両面に対応できます。
                </p>
                <div className="mt-4">
                  <MoreLink />
                </div>
              </div>
            </article>
            <article className="grid bg-white sm:grid-cols-[0.9fr_1fr]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={withBase("/images/03-mobility-car.png")}
                alt=""
                width={502}
                height={466}
                loading="lazy"
                className="h-44 w-full object-cover sm:h-full"
              />
              <div className="p-6">
                <p className="eyebrow">STRENGTH 03</p>
                <h3 className="mt-2 font-serif text-xl font-medium text-navy-deep">自動車・モビリティ</h3>
                <p className="mt-3 text-xs leading-[1.9] text-muted">
                  ユーザーに直結するスマホアプリから車載アプリまで、利便性やエンターテイメント性にあふれるアプリをデザイン・設計できます。
                </p>
                <div className="mt-4">
                  <MoreLink />
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
