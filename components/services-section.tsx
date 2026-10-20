const services = [
  {
    title: "プロジェクトマネジメント／PMO支援",
    text: "複数プロジェクトの進行管理、課題・リスクの整理、関係者の調整を担います。",
  },
  {
    title: "技術と非技術の橋渡し",
    text: "技術的な課題や仕様を、非エンジニアの方にも分かる言葉で解説し、認識の齟齬を防ぎます。",
  },
  {
    title: "システム開発・運用のマネジメント",
    text: "開発・保守の体制づくりと、品質・進捗のマネジメントを行います。",
  },
  {
    title: "アプリ・クラウドの技術アドバイザリ",
    text: "モバイルアプリやクラウド（AWS）まわりの技術的なご相談に対応します。",
  },
  {
    title: "人材育成（研修のサポート）",
    text: "新人エンジニア向け研修の運営と、受講生の技術サポートを行います。",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="border-y border-line bg-white py-20 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[240px_1fr]">
        <div>
          <p className="eyebrow">SERVICE</p>
          <h2 className="mt-2 font-serif text-3xl font-medium text-navy-deep">事業内容</h2>
          <p className="mt-5 text-xs leading-[1.9] text-muted">
            ITとマネジメントの両面から、プロジェクトの成功を支援します。
          </p>
        </div>
        <ol className="grid gap-x-0 gap-y-8 sm:grid-cols-2 lg:grid-cols-5 lg:divide-x lg:divide-line">
          {services.map((s, i) => (
            <li key={s.title} className="lg:px-5 lg:first:pl-0 lg:last:pr-0">
              <p className="font-serif text-lg text-navy">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 min-h-[2.8em] text-sm font-bold leading-[1.45] text-navy-deep">{s.title}</h3>
              <p className="mt-3 text-xs leading-[1.9] text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
