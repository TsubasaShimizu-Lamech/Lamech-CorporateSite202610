import type { Metadata, Viewport } from "next"
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google"
import "./globals.css"

const sans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans-jp",
  display: "swap",
})
const serif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-serif-jp",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lamech.jp"),
  title: "Lamech(レメク) | ITとプロジェクトマネジメントで、行政・公共と企業の現場を支える",
  description:
    "地方自治体の行政職員として働いた経験をもとに、官公庁・自治体のITプロジェクトを、技術とマネジメントの両面から支援します。共済組合、自動車メーカーのプロジェクトにも携わっています。",
  icons: {
    icon: "/images/favicon.ico",
    shortcut: "/images/favicon.ico",
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#0a2a6c",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
        >
          本文へスキップ
        </a>
        {children}
      </body>
    </html>
  )
}
