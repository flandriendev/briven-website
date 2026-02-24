export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    avatar: string;
  };
  tags: string[];
}

export const posts: BlogPost[] = [
  {
    slug: "briven-partners-with-mavi-finans",
    title: "Briven Partners with mavi Finans for Payment Handling",
    description:
      "Introducing mavi Finans as our payment infrastructure partner. Built on top of Stripe, mavi Finans brings localized payment processing to the Briven ecosystem.",
    date: "2026-02-24",
    readTime: "4 min read",
    author: {
      name: "flndrn",
      avatar: "/companies/flndrn.svg",
    },
    tags: ["announcement", "payments", "partnership"],
  },
  {
    slug: "introducing-briven",
    title: "Introducing Briven",
    description:
      "From a weekend hack to a full autonomous agent framework. The story of how Briven came to be, where it stands today, and what comes next.",
    date: "2026-02-20",
    readTime: "6 min read",
    author: {
      name: "J.Van Cutsem",
      avatar: "",
    },
    tags: ["announcement", "open-source", "briven"],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
