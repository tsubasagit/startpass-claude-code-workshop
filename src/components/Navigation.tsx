"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "TOP" },
  { href: "/setup", label: "事前準備" },
  { href: "/business-plan", label: "5ヵ年事業計画" },
  { href: "/mvp", label: "MVP構築" },
  { href: "/resources", label: "資料・リンク" },
];

export function Navigation() {
  const pathname = usePathname();
  const basePath = "/startpass-claude-code-workshop";

  return (
    <header className="bg-primary text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <Link href="/" className="text-lg font-bold hover:opacity-90">
            教えて宮崎先生
          </Link>
          <nav className="hidden md:flex gap-1">
            {links.map((link) => {
              const isActive =
                pathname === basePath + link.href ||
                (link.href !== "/" &&
                  pathname.startsWith(basePath + link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded text-sm transition-colors ${
                    isActive
                      ? "bg-white/20 font-medium"
                      : "hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
        {/* Mobile nav */}
        <nav className="md:hidden flex gap-1 pb-3 overflow-x-auto">
          {links.map((link) => {
            const isActive =
              pathname === basePath + link.href ||
              (link.href !== "/" &&
                pathname.startsWith(basePath + link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded text-xs whitespace-nowrap transition-colors ${
                  isActive
                    ? "bg-white/20 font-medium"
                    : "hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
