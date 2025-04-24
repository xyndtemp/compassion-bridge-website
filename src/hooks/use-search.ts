
import { useCallback, useState } from 'react';

type SearchResult = {
  title: string;
  description: string;
  link: string;
};

const pages = [
  {
    title: "Home",
    description: "Building Bridges of Compassion",
    link: "/",
    content: `Everyone deserves a chance to thrive. We're here to provide vital support and resources to those in need. Mental Health Support: Professional counseling services and support groups. Homelessness Support: Temporary housing and essential services. Physical Support: Accessible services and advocacy for individuals with physical challenges.`,
  },
  {
    title: "About",
    description: "Learn about our mission, vision, and work.",
    link: "/about",
    content: "Our Mission, Our Vision, Our Work, mission vision work about organization",
  },
  {
    title: "Mission",
    description: "Our mission statement",
    link: "/about/mission",
    content: "Our mission is to provide vital support and resources to individuals struggling with mental health issues, homelessness, and physical challenges. We strive to build bridges of hope and compassion in every community.",
  },
  {
    title: "Vision",
    description: "Our vision statement",
    link: "/about/vision",
    content: "We envision a world where everyone has access to the support they need to thrive, regardless of their circumstances. Our vision is to create lasting change through compassion, advocacy, and community action.",
  },
  {
    title: "What We Do",
    description: "What we do as an organization",
    link: "/about/whatwedo",
    content: "We provide mental health support, temporary housing, and accessible services for individuals facing physical challenges. Our programs are designed to empower people and create sustainable change in our communities.",
  },
  {
    title: "Our Goals",
    description: "Our organizational goals",
    link: "/about/goals",
    content: "Increase access to mental health services. Reduce homelessness in our communities. Promote accessibility and inclusion for all. Foster a culture of compassion and support.",
  },
  {
    title: "Gallery",
    description: "Photo gallery",
    link: "/gallery",
    content: "Images, community, events, gallery, photos",
  },
  {
    title: "Contact",
    description: "Get in touch with us",
    link: "/contact",
    content: "Contact form, email, phone, address, message, get in touch",
  },
];

export const useSearch = () => {
  const [results, setResults] = useState<SearchResult[]>([]);

  const search = useCallback((query: string) => {
    if (!query) {
      setResults([]);
      return;
    }
    const q = query.toLowerCase();
    const searchResults = pages.filter(page => {
      // Combine all searchable fields into one string
      const haystack = [
        page.content,
        page.title,
        page.description,
        page.link,
      ].join(" ").toLowerCase();
      // Split haystack into words and check if any word includes the query
      return haystack.split(/\s+/).some(word => word.includes(q));
    }).map(({ title, description, link }) => ({
      title,
      description,
      link,
    }));

    setResults(searchResults);
  }, []);

  return { search, results };
};
