import Link from "next/link";
import type { CategorySlug } from "@/lib/content";

type CategoryCardProps = {
  slug: CategorySlug;
  label: string;
  eyebrow: string;
  description: string;
  icon: string;
  count: number;
};

export default function CategoryCard({ slug, label, eyebrow, description, icon, count }: CategoryCardProps) {
  return (
    <Link href={`/${slug}`} className="category-card">
      <div className="category-icon" aria-hidden="true">{icon}</div>
      <div>
        <span className="category-kicker">{eyebrow}</span>
        <h3>{label}</h3>
        <p>{description}</p>
        <span className="category-count">{count ? `${count} guides` : "Coming soon"} <span aria-hidden="true">↗</span></span>
      </div>
    </Link>
  );
}

