import type { Metadata } from "next"
import { Footer } from "@/components/footer"
import { withBase } from "@/lib/paths"
import Link from "next/link"

export const metadata: Metadata = {
  title: "プライバシーポリシー | Lamech(レメク)",
  robots: { index: true },
}

const sections = [
  {
    h: "1. 取得する個人情報",
    p: "お問い合わせフォームを通じて、お名前、会社名、メールアドレス、件名、お問い合わせ内容を取得します。メールでご連絡いただいた場合は、メールアドレスおよびメールの内容を取得します。",
  },
  {
    h: "2. 利用目的",
    p: "取得した個人情報は、お問い合わせへの回答・ご連絡、およびご相談内容に関する対応の目的でのみ利用します。",
  },
  {
    h: "3. 第三者提供",
    p: "法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供しません。なお、お問い合わせフォームの送信内容は、Google LLC が提供するGoogleフォームを通じて当社が受け取ります。",
  },
  {
    h: "4. 安全管理",
    p: "取得した個人情報は、漏えい、滅失または毀損の防止のため、適切な安全管理に努めます。",
  },
  {
    h: "5. 開示・訂正・削除のご請求",
    p: "ご本人から個人情報の開示、訂正、利用停止、削除のご請求があった場合は、本人確認のうえ、法令に従って対応します。下記のお問い合わせ先までご連絡ください。",
  },
  {
    h: "6. 改定",
    p: "本ポリシーの内容は、必要に応じて予告なく改定することがあります。改定後の内容は、本ページに掲載した時点から効力を生じます。",
  },
]

export default function PrivacyPage() {
  return (
    <>
      <header className="border-b border-line">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <Link href="/" aria-label="Lamech トップへ">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={withBase("/images/lamech-logo-new.png")} alt="Lamech" width={140} height={39} className="h-8 w-auto" />
          </Link>
          <Link href="/" className="text-xs text-navy hover:text-sky">トップへ戻る</Link>
        </div>
      </header>
      <main id="main" className="mx-auto max-w-3xl px-6 py-16">
        <p className="eyebrow">PRIVACY POLICY</p>
        <h1 className="mt-2 font-serif text-3xl font-medium text-navy-deep">プライバシーポリシー</h1>
        <p className="mt-6 text-sm leading-[2] text-ink">
          株式会社Lamech（以下「当社」）は、当サイトを通じて取得する個人情報を、以下の方針に基づいて取り扱います。
        </p>
        {sections.map((s) => (
          <section key={s.h} className="mt-10">
            <h2 className="text-base font-bold text-navy-deep">{s.h}</h2>
            <p className="mt-3 text-sm leading-[2] text-ink">{s.p}</p>
          </section>
        ))}
        <section className="mt-10">
          <h2 className="text-base font-bold text-navy-deep">お問い合わせ先</h2>
          <p className="mt-3 text-sm leading-[2] text-ink">
            株式会社Lamech
            <br />
            〒631-0817 奈良県奈良市西大寺北町1-2-4 HSビル
            <br />
            <a href="mailto:t.shimizu@lamech.jp" className="text-navy underline hover:text-sky">t.shimizu@lamech.jp</a>
          </p>
        </section>
      </main>
      <Footer home="/" />
    </>
  )
}
