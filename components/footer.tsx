import { withBase } from "@/lib/paths"
import Link from "next/link"
export function Footer({ home = "" }: { home?: string }) {
  return (
    <footer id="company-info" className="bg-white text-ink">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-[1fr_1.4fr_1.4fr_auto] lg:gap-0 lg:divide-x lg:divide-line">
        <div className="lg:pr-8">
          <a href={`${withBase(home)}#top`} aria-label="Lamech トップへ">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={withBase("/images/lamech-logo-new.png")} alt="Lamech" width={140} height={39} className="h-8 w-auto" />
          </a>
          <p className="mt-4 text-xs text-muted">ITで、行政と企業の現場をつなぐ。</p>
        </div>

        <div className="lg:px-8">
          <h2 className="text-xs font-bold text-navy-deep">会社概要</h2>
          <dl className="mt-4 grid grid-cols-[4.5rem_1fr] gap-y-2 text-xs leading-[1.8] text-muted">
            <dt>会社名</dt>
            <dd>株式会社Lamech</dd>
            <dt>代表者</dt>
            <dd>代表取締役 清水 翼</dd>
            <dt>所在地</dt>
            <dd>
              〒631-0817
              <br />
              奈良県奈良市西大寺北町1-2-4 HSビル
            </dd>
            <dt>電話番号</dt>
            <dd>
              <a href="tel:07091873180" className="hover:text-sky">070-9187-3180</a>
            </dd>
            <dt>メール</dt>
            <dd>
              <a href="mailto:info@lamech.jp" className="hover:text-sky">info@lamech.jp</a>
            </dd>
          </dl>
        </div>

        <div className="lg:px-8">
          <h2 className="text-xs font-bold text-navy-deep">事業内容</h2>
          <ul className="mt-4 space-y-1 text-xs leading-[1.9] text-muted">
            <li>プロジェクトマネジメント／PMO支援</li>
            <li>技術アドバイザリ</li>
            <li>システム開発・運用のマネジメント</li>
            <li>人材育成</li>
          </ul>
        </div>

        <div className="lg:pl-8">
          <Link href="/privacy/" className="text-xs text-navy hover:text-sky">
            プライバシーポリシー
          </Link>
          <p className="mt-6 text-[11px] text-muted">© {new Date().getFullYear()} Lamech Inc.</p>
        </div>
      </div>
    </footer>
  )
}
