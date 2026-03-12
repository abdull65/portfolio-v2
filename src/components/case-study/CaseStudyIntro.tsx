type CaseStudyIntroProps = {
  label: string;
  title: string;
  subtitle: string;
  description: string;
  extra?: string;
};

export function CaseStudyIntro({
  label,
  title,
  subtitle,
  description,
  extra,
}: CaseStudyIntroProps) {
  return (
    <section className="md:my-8">
      <p className="text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2">
        {label}
      </p>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>

      <p className="text-lg text-gray-600 dark:text-gray-300">{subtitle}</p>

      <p className="mt-4">{description}</p>

      {extra ? <p className="mt-3">{extra}</p> : null}
    </section>
  );
}