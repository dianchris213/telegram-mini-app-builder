import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { Icon } from "@/components/Icon";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Pengaturan - Catatan Keuangan Mini App" },
      {
        name: "description",
        content: "Atur bahasa, mata uang, tema, notifikasi, keamanan, dan ekspor data keuangan.",
      },
      { property: "og:title", content: "Pengaturan - Catatan Keuangan Mini App" },
      {
        property: "og:description",
        content: "Preferensi aplikasi, keamanan, dan pengelolaan data.",
      },
    ],
  }),
  component: Settings,
});

function Row({
  icon,
  title,
  subtitle,
  trailing,
}: {
  icon: string;
  title: string;
  subtitle?: string;
  trailing: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 border-b border-outline-variant/20 py-3 last:border-0">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-variant text-primary">
        <Icon name={icon} className="text-[20px]" />
      </span>
      <div className="flex flex-1 flex-col">
        <span className="text-sm font-medium text-on-surface">{title}</span>
        {subtitle ? <span className="text-xs text-on-surface-variant">{subtitle}</span> : null}
      </div>
      {trailing}
    </div>
  );
}

function Toggle() {
  return (
    <span className="h-6 w-11 rounded-full border border-outline-variant/40 bg-surface-variant p-0.5">
      <span className="block h-5 w-5 rounded-full bg-outline" />
    </span>
  );
}

const Chevron = <Icon name="chevron_right" className="text-[20px] text-on-surface-variant" />;

function Group({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="mt-stack-lg">
      <h2 className="mb-2 text-[10px] uppercase tracking-wider text-primary">{label}</h2>
      <div className="glass-panel rounded-[16px] px-4">{children}</div>
    </section>
  );
}

function Settings() {
  return (
    <AppShell>
      <span className="text-[10px] uppercase tracking-wider text-primary">Konfigurasi</span>
      <h1 className="text-2xl font-bold text-on-surface">Pengaturan</h1>

      <div className="glass-panel mt-stack-md flex items-center gap-3 rounded-[16px] p-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-variant text-on-surface-variant">
          <Icon name="person" />
        </span>
        <div className="flex flex-1 flex-col">
          <span className="text-base font-semibold text-on-surface">Belum masuk</span>
          <span className="text-xs text-on-surface-variant">Profil belum tersambung</span>
        </div>
        <button className="rounded-full bg-surface-container-high px-4 py-1.5 text-xs font-semibold text-on-surface">
          Ubah
        </button>
      </div>

      <Group label="App Preferences">
        <Row
          icon="language"
          title="Bahasa & Mata Uang"
          trailing={<span className="text-xs text-on-surface-variant">IDR / Indonesia</span>}
        />
        <Row icon="dark_mode" title="Tema Tampilan" trailing={<Toggle />} />
        <Row icon="notifications" title="Notifikasi Push" trailing={<Toggle />} />
      </Group>

      <Group label="Security">
        <Row icon="fingerprint" title="Kunci Aplikasi / Biometrik" trailing={<Toggle />} />
        <Row
          icon="cloud_sync"
          title="Status Sinkronisasi Cloud"
          subtitle="Belum tersinkronisasi"
          trailing={
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary-container/30 text-primary">
              <Icon name="sync" className="text-[18px]" />
            </span>
          }
        />
      </Group>

      <Group label="Data">
        <Row
          icon="category"
          title="Kategori Transaksi"
          subtitle="Kelola kategori"
          trailing={Chevron}
        />
        <Row
          icon="download"
          title="Ekspor Data Keuangan"
          subtitle="Unduh laporan"
          trailing={Chevron}
        />
      </Group>

      <button className="mt-stack-lg flex w-full items-center justify-center gap-2 rounded-[16px] bg-surface-container-high py-4 text-base font-semibold text-on-surface">
        <Icon name="logout" className="text-[20px]" /> Keluar Akun
      </button>
      <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-[16px] border border-error/30 py-4 text-base font-semibold text-error">
        <Icon name="delete" className="text-[20px]" /> Hapus Akun & Data
      </button>
    </AppShell>
  );
}