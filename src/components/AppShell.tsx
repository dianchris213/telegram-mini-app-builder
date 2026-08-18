import { Link, useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Icon } from "./Icon";

const tabs = [
  { to: "/", label: "Home", icon: "home" },
  { to: "/analytics", label: "Analytics", icon: "equalizer" },
  { to: "/wallet", label: "Dompet", icon: "account_balance_wallet" },
  { to: "/settings", label: "Settings", icon: "settings" },
] as const;

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="flex min-h-screen flex-col bg-background text-on-background antialiased">
      <main className="flex-1 overflow-x-hidden px-margin-main pt-stack-md pb-[140px]">
        {children}
      </main>

      <nav className="fixed bottom-0 left-0 z-50 flex h-[64px] w-full items-center justify-around border-t border-outline-variant/10 bg-surface-container/80 px-gutter-grid pb-safe-area-bottom backdrop-blur-md">
        {tabs.slice(0, 2).map((t) => (
          <NavItem key={t.to} {...t} active={pathname === t.to} />
        ))}
        <button
          type="button"
          className="group -mt-6 flex w-16 flex-col items-center justify-center transition-all active:scale-95"
          aria-label="Tambah transaksi"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-container text-on-primary-container shadow-lg">
            <Icon name="add" className="text-[32px]" fill={1} />
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
      className={`flex w-16 flex-col items-center justify-center transition-all active:scale-90 ${
        active ? "text-primary" : "text-on-surface-variant"
      }`}
    >
      <Icon name={icon} className="mb-1 text-[24px]" fill={active ? 1 : 0} />
      <span className="text-[10px] font-medium">{label}</span>
    </Link>
  );
}