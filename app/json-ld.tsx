import { site } from "@/lib/content"

export function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    jobTitle: site.role,
    description: site.description,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "ENSAM Meknès",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Meknès",
      addressCountry: "MA",
    },
    sameAs: [site.github, site.linkedin],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
