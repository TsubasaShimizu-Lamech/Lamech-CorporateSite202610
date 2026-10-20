"use client"

import { useState } from "react"
import { AlertCircle, CheckCircle, Loader2, Mail, Send } from "lucide-react"

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSf4tPkoi90mb_1HWLANxwpmENVPq_EmrTt1SlW5MO2ToC9a7A/formResponse"

const initial = { name: "", company: "", email: "", subject: "", message: "" }

const field =
  "mt-2 w-full rounded-sm border border-line bg-mist px-3 py-2.5 text-sm text-ink placeholder:text-[#9aa8bf] focus:border-sky disabled:opacity-60"

export function ContactSection() {
  const [data, setData] = useState(initial)
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setData((prev) => ({ ...prev, [id]: value }))
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("submitting")

    const body = new FormData()
    body.append("entry.440491378", data.name)
    body.append("entry.2023816419", data.email)
    body.append("entry.589339108", data.message)
    body.append("entry.926209921", data.company)
    body.append("entry.142479619", data.subject)

    try {
      // Google Forms は CORS ヘッダーを返さないため no-cors で送信する
      await fetch(FORM_URL, { method: "POST", mode: "no-cors", body })
      setStatus("success")
      setData(initial)
    } catch (error) {
      console.error(error)
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:py-24 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <p className="eyebrow !text-white/60">CONTACT</p>
          <h2 className="mt-3 font-serif text-3xl font-medium leading-snug">まずは30分、情報交換から。</h2>
          <p className="mt-5 text-sm leading-[1.9] text-white/80">
            お困りごとや、プロジェクトの状況をお聞かせください。
            <br />
            フォームまたはメールでお気軽にご連絡ください。
          </p>
          <a
            href="mailto:t.shimizu@lamech.jp"
            className="mt-8 inline-flex items-center gap-3 border-b border-white/50 pb-1 text-sm hover:border-white"
          >
            <Mail size={16} aria-hidden="true" />
            t.shimizu@lamech.jp
          </a>
        </div>

        <div className="bg-white p-6 text-ink sm:p-8">
          {status === "success" ? (
            <div role="status" className="py-8 text-center">
              <CheckCircle className="mx-auto h-12 w-12 text-sky" aria-hidden="true" />
              <h3 className="mt-4 font-serif text-xl text-navy-deep">送信完了</h3>
              <p className="mt-3 text-sm leading-[1.9] text-muted">
                お問い合わせありがとうございます。
                <br />
                2営業日以内にご連絡いたします。
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 rounded-sm border border-navy px-5 py-2.5 text-xs font-medium text-navy hover:bg-mist"
              >
                フォームに戻る
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-xs font-medium text-navy-deep">
                    お名前 <span className="text-red-700">*</span>
                  </label>
                  <input id="name" required autoComplete="name" placeholder="山田 太郎" className={field} value={data.name} onChange={onChange} disabled={status === "submitting"} />
                </div>
                <div>
                  <label htmlFor="company" className="text-xs font-medium text-navy-deep">
                    会社名
                  </label>
                  <input id="company" autoComplete="organization" placeholder="株式会社〇〇" className={field} value={data.company} onChange={onChange} disabled={status === "submitting"} />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="text-xs font-medium text-navy-deep">
                  メールアドレス <span className="text-red-700">*</span>
                </label>
                <input id="email" type="email" required autoComplete="email" placeholder="email@example.com" className={field} value={data.email} onChange={onChange} disabled={status === "submitting"} />
              </div>
              <div>
                <label htmlFor="subject" className="text-xs font-medium text-navy-deep">
                  件名 <span className="text-red-700">*</span>
                </label>
                <input id="subject" required placeholder="例：30分の情報交換を希望します" className={field} value={data.subject} onChange={onChange} disabled={status === "submitting"} />
              </div>
              <div>
                <label htmlFor="message" className="text-xs font-medium text-navy-deep">
                  お問い合わせ内容 <span className="text-red-700">*</span>
                </label>
                <textarea id="message" required rows={5} placeholder="ご相談内容をご記入ください" className={`${field} resize-none`} value={data.message} onChange={onChange} disabled={status === "submitting"} />
              </div>

              {status === "error" && (
                <p role="alert" className="flex items-center gap-2 text-xs font-medium text-red-700">
                  <AlertCircle size={14} aria-hidden="true" />
                  送信中にエラーが発生しました。時間をおいて再度お試しいただくか、メールでご連絡ください。
                </p>
              )}

              <p className="text-[11px] leading-5 text-muted">
                送信内容は、お問い合わせへの対応の目的でのみ利用します。詳しくは
                <a href="/privacy/" className="underline hover:text-sky">
                  プライバシーポリシー
                </a>
                をご確認ください。
              </p>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="flex w-full items-center justify-center gap-2 rounded-sm bg-navy px-6 py-3.5 text-sm font-medium text-white hover:bg-navy-deep disabled:opacity-70"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                    送信中...
                  </>
                ) : (
                  <>
                    送信する <Send size={16} aria-hidden="true" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
