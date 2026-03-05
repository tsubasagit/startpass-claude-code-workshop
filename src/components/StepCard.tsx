export function StepCard({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-card rounded-xl shadow-md border border-gray-100 overflow-hidden">
      <div className="flex items-center gap-4 bg-step-bg px-6 py-4 border-b border-blue-100">
        <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
          {number}
        </span>
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
      <div className="px-6 py-5 space-y-4">{children}</div>
    </div>
  );
}

export function CodeBlock({
  children,
  label,
}: {
  children: string;
  label?: string;
}) {
  return (
    <div>
      {label && (
        <p className="text-xs text-text-secondary mb-1 font-medium">
          {label}
        </p>
      )}
      <pre className="bg-code-bg text-green-300 px-5 py-4 text-sm leading-relaxed overflow-x-auto rounded-lg">
        <code>{children}</code>
      </pre>
    </div>
  );
}

export function TipBox({
  children,
  type = "tip",
}: {
  children: React.ReactNode;
  type?: "tip" | "warning" | "info";
}) {
  const styles = {
    tip: "bg-tip-bg border-tip-border",
    warning: "bg-warning-bg border-warning-border",
    info: "bg-blue-50 border-blue-300",
  };
  const labels = {
    tip: "POINT",
    warning: "注意",
    info: "補足",
  };

  return (
    <div className={`border-l-4 ${styles[type]} rounded-r-lg px-5 py-4`}>
      <p className="text-xs font-bold mb-1 uppercase tracking-wider opacity-70">
        {labels[type]}
      </p>
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
}

export function PageHeader({
  title,
  subtitle,
  badge,
}: {
  title: string;
  subtitle: string;
  badge?: string;
}) {
  return (
    <div className="bg-gradient-to-br from-primary to-primary-dark text-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        {badge && (
          <span className="inline-block bg-accent text-white text-xs px-3 py-1 rounded-full mb-4 font-medium">
            {badge}
          </span>
        )}
        <h1 className="text-3xl md:text-4xl font-bold mb-3">{title}</h1>
        <p className="text-white/70 text-lg">{subtitle}</p>
      </div>
    </div>
  );
}
