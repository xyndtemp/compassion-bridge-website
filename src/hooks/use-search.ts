
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
    content: "mental health support homelessness physical challenges community outreach",
  },
  {
    title: "Our Impact",
    description: "See how we make a difference",
    link: "/#impact",
    content: "people helped annually support commitment",
  },
  {
    title: "Get Involved",
    description: "Join us in making a difference",
    link: "/#contact",
    content: "volunteer donate partner",
  },
];

export const useSearch = () => {
  const [results, setResults] = useState<SearchResult[]>([]);

  const search = useCallback((query: string) => {
    if (!query) {
      setResults([]);
      return;
    }

    const searchResults = pages.filter(page => 
      page.content.toLowerCase().includes(query.toLowerCase()) ||
      page.title.toLowerCase().includes(query.toLowerCase())
    ).map(({ title, description, link }) => ({
      title,
      description,
      link,
    }));

    setResults(searchResults);
  }, []);

  return { search, results };
};
