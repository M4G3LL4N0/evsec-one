import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  className?: string;
}

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn("text-center max-w-2xl mx-auto", className)}>
      <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
        {title}
      </h2>
      <p className="mt-4 text-white/70 text-lg leading-relaxed">{subtitle}</p>
    </div>
  );
}
