import { Link, useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Icon } from "./Icon";

const tabs = [
  { to: "/", label: "Home", icon: "home" },
  { to: "/analytics", label: "Analytics", icon: "equalizer" },
  { to: "/wallet", label: "Dompet", icon: "account_balance_wallet" },
  { to: "/settings", label: "Settings", icon: "settings" },
] as const;

export function AppShell({
  children,
  topBar,
}: {
  children: ReactNode;
  topBar?: ReactNode;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="relative flex min-h-screen flex-col bg-background text-on-background antialiased">
      <div className="pointer-events-none fixed -top-24 left-1/2 h-64 w-[420px] -translate-x-1/2 rounded-full bg-primary-container/25 blur-[90px]" />
      {topBar ? (
        <header className="sticky top-0 z-40 border-b border-outline-variant/15 bg-background/85 px-margin-main pt-safe-area-top pb-3 backdrop-blur-xl">
          {topBar}
        </header>
      ) : null}
      <main className="relative z-10 flex-1 overflow-x-hidden px-margin-main pt-stack-md pb-[136px]">
        {children}
      </main>

      <nav className="fixed bottom-0 left-0 z-50 flex h-[72px] w-full items-center justify-around border-t border-outline-variant/15 bg-surface-container-lowest/85 px-gutter-grid pb-safe-area-bottom backdrop-blur-xl">
        {tabs.slice(0, 2).map((t) => (
          <NavItem key={t.to} {...t} active={pathname === t.to} />
        ))}
        <button
          type="button"
          className="group -mt-8 flex w-16 flex-col items-center justify-center transition-all active:scale-95"
          aria-label="Tambah transaksi"
        >
          <div className="gradient-primary flex h-14 w-14 items-center justify-center rounded-full text-on-primary-container shadow-glow ring-4 ring-background">
            <Icon name="add" className="text-[28px]" fill={1} />
          </div>
        </button>
        {tabs.slice(2).map((t) => (
          <NavItem key={t.to} {...t} active={pathname === t.to} />
        ))}
      </nav>
    </div>
  );
}

function NavItem({
  to,
  label,
  icon,
  active,
}: {
  to: string;
  label: string;
  icon: string;
  active: boolean;
}) {
  return (
    <Link
      to={to}
      className={`flex w-16 flex-col items-center justify-center gap-1 transition-all active:scale-90 ${
        active ? "text-primary" : "text-on-surface-variant/70"
      }`}
    >
      <span
        className={`flex h-7 w-12 items-center justify-center rounded-full transition-colors ${
          active ? "bg-primary-container/25" : ""
        }`}
      >
        <Icon name={icon} className="text-[22px]" fill={active ? 1 : 0} />
      </span>
      <span className="text-[10px] font-semibold tracking-wide">{label}</span>
    </Link>
  );
}