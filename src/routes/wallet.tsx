import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { EmptyState } from "@/components/EmptyState";
import { Icon } from "@/components/Icon";

export const Route = createFileRoute("/wallet")({
  head: () => ({
    meta: [
      { title: "Dompet - Catatan Keuangan Mini App" },
      {
        name: "description",
        content: "Kelola akun dompet, isi saldo, transfer, dan lihat aktivitas dompet Anda.",
      },
      { property: "og:title", content: "Dompet - Catatan Keuangan Mini App" },
      {
        property: "og:description",
        content: "Kelola akun dompet dan aktivitas saldo Anda.",
      },
    ],
  }),
  component: Wallet,
});

const actions = [
  { icon: "swap_horiz", label: "Transfer" },
  { icon: "account_balance_wallet", label: "Isi Saldo" },
  { icon: "add_circle", label: "Tambah" },
];

function Wallet() {
  return (
    <AppShell>
      <h1 className="mb-stack-md text-xl font-bold text-on-surface">Dompet</h1>

      <div className="glass-panel relative overflow-hidden rounded-[24px] p-[20px]">
        <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary-container/20 blur-2xl" />
        <span className="text-[10px] uppercase tracking-wider text-on-surface-variant">
          Saldo Gabungan
        </span>
        <p className="mt-1 text-[32px] font-bold text-on-surface">Rp 0</p>
        <p className="text-sm text-on-surface-variant">Dari 0 akun aktif</p>
        <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-primary to-primary-container py-3 text-sm font-semibold text-on-primary">
          <Icon name="add" className="text-[20px]" /> Isi Uang
        </button>
      </div>

      <div className="mt-stack-md grid grid-cols-3 gap-3">
        {actions.map((a) => (
          <button
            key={a.label}
            className="glass-panel flex flex-col items-center gap-2 rounded-[16px] py-4"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-variant text-primary">
              <Icon name={a.icon} className="text-[20px]" />
            </span>
            <span className="text-xs font-semibold text-on-surface">{a.label}</span>
          </button>
        ))}
      </div>

      <section className="mt-stack-lg">
        <h2 className="mb-3 text-lg font-bold text-on-surface">Akun Anda</h2>
        <EmptyState
          icon="wallet"
          title="Belum ada akun dompet"
          description="Tambahkan akun untuk mulai mengelola saldo."
        />
      </section>

      <section className="mt-stack-lg">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-bold text-on-surface">Aktivitas Dompet</h2>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-variant text-on-surface-variant">
            <Icon name="filter_list" className="text-[18px]" />
          </span>
        </div>
        <div className="mb-3 flex gap-2 overflow-x-auto no-scrollbar">
          <span className="shrink-0 rounded-full border border-primary px-4 py-1.5 text-xs text-primary">
            Semua Akun
          </span>
        </div>
        <EmptyState icon="history" title="Belum ada aktivitas" />
      </section>
    </AppShell>
  );
}