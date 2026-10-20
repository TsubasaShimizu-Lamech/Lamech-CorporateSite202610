"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#services", label: "事業内容" },
  { href: "#strengths", label: "強み領域" },
  { href: "#representative", label: "代表" },
  { href: "#company", label: "会社概要" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-white/95 shadow-sm backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav aria-label="メインナビゲーション" className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center" aria-label="Lamech トップへ">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/lamech-logo-new.png" alt="Lamech" width={140} height={39} className="h-8 w-auto" />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-xs font-medium text-navy-deep hover:text-sky">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-sm bg-navy px-5 py-2.5 text-xs font-medium text-white hover:bg-navy-deep"
          >
            お問い合わせ
          </a>
        </div>

        <button
          type="button"
          className="p-2 text-navy-deep md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-white px-6 pb-6 md:hidden">
          <ul className="flex flex-col">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line py-4 text-sm text-navy-deep"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-5 block rounded-sm bg-navy px-5 py-3 text-center text-sm font-medium text-white"
          >
            お問い合わせ
          </a>
        </div>
      )}
    </header>
  )
}
