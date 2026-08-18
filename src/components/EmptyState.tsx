import { Icon } from "./Icon";

export function EmptyState({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-[16px] border border-dashed border-outline-variant/40 px-4 py-8 text-center">
      <Icon name={icon} className="text-[28px] text-outline" />
      <p className="text-sm font-semibold text-on-surface">{title}</p>
      {description ? (
        <p className="text-xs text-on-surface-variant">{description}</p>
      ) : null}
    </div>
  );
}