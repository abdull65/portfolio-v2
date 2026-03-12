import { ReactNode } from "react";

type CaseStudySectionProps = {
  title?: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
};

export function CaseStudySection({
  title,
  eyebrow,
  children,
  className = "",
}: CaseStudySectionProps) {
  return (
    <section className={`mb-16 ${className}`}>
      {eyebrow ? (
        <p className="text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2">
          {eyebrow}
        </p>
      ) : null}

      {title ? <h2 className="text-2xl font-semibold mb-4">{title}</h2> : null}

      {children}
    </section>
  );
}