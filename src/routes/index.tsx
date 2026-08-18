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
    <AppShell
      topBar={
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant/30 bg-surface-container-high text-on-surface-variant">
              <Icon name="person" className="text-[20px]" />
            </div>
            <div className="flex flex-col">
              <span className="text-meta text-on-surface-variant/80">Selamat datang</span>
              <h1 className="m-0 text-section text-on-surface">Pengguna</h1>
            </div>
          </div>
          <div className="flex items-center gap-1 text-on-surface-variant">
            <button
              aria-label="Sinkronisasi"
              className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-surface-variant/60"
            >
              <Icon name="cloud" className="text-[20px]" />
            </button>
            <button
              aria-label="Notifikasi"
              className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-surface-variant/60"
            >
              <Icon name="notifications" className="text-[20px]" />
            </button>
          </div>
        </div>
      }
    >
      <div className="gradient-hero relative overflow-hidden rounded-[24px] p-6">
        <span className="text-label uppercase text-primary/80">Total Saldo</span>
        <div className="mt-2 flex items-end gap-2">
          <span className="text-display text-on-surface">Rp 0</span>
          <Icon name="chevron_right" className="mb-1 text-[22px] text-primary" />
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="flex items-center gap-3 rounded-[16px] border border-white/8 bg-white/5 p-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-success/15 text-success">
              <Icon name="south_west" className="text-[18px]" fill={1} />
            </div>
            <div className="flex flex-col">
              <span className="text-label uppercase text-on-surface-variant/80">Pemasukan</span>
              <span className="text-body font-semibold text-success">Rp 0</span>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-[16px] border border-white/8 bg-white/5 p-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-error/15 text-error">
              <Icon name="north_east" className="text-[18px]" fill={1} />
            </div>
            <div className="flex flex-col">
              <span className="text-label uppercase text-on-surface-variant/80">Pengeluaran</span>
              <span className="text-body font-semibold text-error">Rp 0</span>
            </div>
          </div>
        </div>
      </div>

      <Section title="Kantong Dana">
        <EmptyState
          icon="account_balance"
          title="Belum ada kantong dana"
          description="Tambahkan sumber dana untuk mulai mencatat."
        />
      </Section>

      <Section title="Tagihan Bulanan">
        <EmptyState
          icon="receipt_long"
          title="Belum ada tagihan"
          description="Tagihan rutin akan tampil di sini."
        />
      </Section>

      <Section
        title="Transaksi Terbaru"
        action={
          <span className="rounded-full border border-outline-variant/30 px-3 py-1 text-meta text-on-surface-variant/80">
            0 entri
          </span>
        }
      >
        <EmptyState
          icon="receipt"
          title="Belum ada transaksi"
          description="Tekan tombol + untuk menambah catatan pertama."
        />
      </Section>
    </AppShell>
  );
}

function Section({
  title,
  action,
  children,
}: {
  title: string;
  action?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-stack-lg">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-section text-on-surface">{title}</h2>
        {action}
      </div>
      {children}
    </section>
  );
}
