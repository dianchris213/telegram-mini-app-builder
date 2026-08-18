import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { EmptyState } from "@/components/EmptyState";
import { Icon } from "@/components/Icon";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Beranda - Catatan Keuangan Mini App" },
      {
        name: "description",
        content:
          "Pantau saldo, pemasukan, pengeluaran, dan tagihan bulanan langsung dari Telegram Mini App.",
      },
      { property: "og:title", content: "Beranda - Catatan Keuangan Mini App" },
      {
        property: "og:description",
        content: "Pantau saldo dan transaksi harian dari Telegram Mini App.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <AppShell>
      <header className="mb-stack-md flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant/30 bg-surface-variant text-on-surface-variant">
            <Icon name="person" className="text-[22px]" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-medium text-on-surface-variant">
              Selamat Datang 👋
            </span>
            <h1 className="m-0 text-xl font-bold leading-tight text-on-surface">Pengguna</h1>
          </div>
        </div>
        <div className="flex items-center gap-2 text-on-surface-variant">
          <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-surface-variant">
            <Icon name="cloud" />
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-surface-variant">
            <Icon name="notifications" />
          </button>
        </div>
      </header>

      <div className="glass-panel relative flex flex-col gap-6 overflow-hidden rounded-[24px] p-[20px]">
        <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary-container/20 blur-2xl" />
        <div className="z-10 flex flex-col gap-1">
          <span className="text-sm text-on-surface-variant">Total Saldo</span>
          <div className="flex items-center gap-2">
            <span className="text-[32px] font-bold tracking-tight text-on-surface">Rp 0</span>
            <Icon name="chevron_right" className="text-[24px] text-primary" />
          </div>
        </div>
        <div className="z-10 grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3 rounded-[16px] border border-white/5 bg-surface-variant/50 p-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary-container/20 text-secondary">
              <Icon name="arrow_downward" className="text-[18px]" fill={1} />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-wider text-on-surface-variant">
                Pemasukan
              </span>
              <span className="text-sm font-semibold text-secondary">Rp 0</span>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-[16px] border border-white/5 bg-surface-variant/50 p-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-error-container/20 text-error">
              <Icon name="arrow_upward" className="text-[18px]" fill={1} />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-wider text-on-surface-variant">
                Pengeluaran
              </span>
              <span className="text-sm font-semibold text-error">Rp 0</span>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-stack-lg">
        <h3 className="mb-3 text-[10px] uppercase tracking-wider text-on-surface-variant">
          Kantong Dana
        </h3>
        <EmptyState
          icon="account_balance"
          title="Belum ada kantong dana"
          description="Tambahkan sumber dana untuk mulai mencatat."
        />
      </section>

      <section className="glass-panel mt-stack-lg rounded-[24px] p-[16px]">
        <h3 className="mb-4 text-[10px] uppercase tracking-wider text-on-surface-variant">
          Tagihan Bulanan
        </h3>
        <EmptyState icon="receipt_long" title="Belum ada tagihan" />
      </section>

      <section className="mt-stack-lg flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold text-on-surface">Transaksi Terbaru</h3>
          <span className="rounded-full border border-outline-variant/30 bg-surface-variant px-3 py-1 text-[10px] text-on-surface-variant">
            Lihat Semua - 0
          </span>
        </div>
        <EmptyState
          icon="receipt"
          title="Belum ada transaksi"
          description="Tekan tombol + untuk menambah catatan pertama."
        />
      </section>
    </AppShell>
  );
}
