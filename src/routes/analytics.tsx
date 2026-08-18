import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { EmptyState } from "@/components/EmptyState";
import { Icon } from "@/components/Icon";

export const Route = createFileRoute("/analytics")({
  head: () => ({
    meta: [
      { title: "Analitik - Catatan Keuangan Mini App" },
      {
        name: "description",
        content: "Lihat tren pengeluaran, arus kas bersih, dan kategori teratas per periode.",
      },
      { property: "og:title", content: "Analitik - Catatan Keuangan Mini App" },
      {
        property: "og:description",
        content: "Tren pengeluaran dan ringkasan arus kas Anda.",
      },
    ],
  }),
  component: Analytics,
});

function Analytics() {
  return (
    <AppShell>
      <h1 className="mb-stack-md text-xl font-bold text-on-surface">Analitik</h1>

      <div className="glass-panel rounded-[24px] p-[20px]">
        <span className="text-[10px] uppercase tracking-wider text-on-surface-variant">
          Total Pengeluaran
        </span>
        <p className="mt-1 text-[32px] font-bold text-on-surface">Rp 0</p>
        <span className="mt-3 inline-flex items-center gap-1 rounded-full border border-outline-variant/30 px-3 py-1 text-xs text-on-surface-variant">
          <Icon name="trending_flat" className="text-[16px]" /> 0% dibanding periode sebelumnya
        </span>
        <div className="mt-5 grid grid-cols-3 gap-2 border-t border-outline-variant/20 pt-4">
          <Stat label="Pemasukan" value="Rp 0" className="text-success" />
          <Stat label="Pengeluaran" value="Rp 0" className="text-error" />
          <Stat label="Arus Kas" value="Rp 0" className="text-on-surface" />
        </div>
      </div>

      <section className="glass-panel mt-stack-lg rounded-[24px] p-[16px]">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-base font-bold text-on-surface">Tren Pengeluaran</h2>
          <span className="text-xs text-on-surface-variant">Bulan Ini</span>
        </div>
        <EmptyState icon="show_chart" title="Belum ada data tren" />
      </section>

      <section className="mt-stack-lg">
        <h2 className="mb-3 text-lg font-bold text-on-surface">Kategori Teratas</h2>
        <EmptyState
          icon="donut_small"
          title="Tidak ada pengeluaran pada periode ini"
          description="Data akan muncul setelah ada transaksi."
        />
      </section>
    </AppShell>
  );
}

function Stat({
  label,
  value,
  className,
}: {
  label: string;
  value: string;
  className: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[10px] uppercase tracking-wider text-on-surface-variant">{label}</span>
      <span className={`text-sm font-semibold ${className}`}>{value}</span>
    </div>
  );
}