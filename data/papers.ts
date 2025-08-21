// TODO: Replace these sample entries with actual publication data

export interface Paper {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  type: 'conference' | 'journal' | 'workshop' | 'preprint' | 'thesis';
  links?: {
    pdf?: string;
    doi?: string;
    code?: string;
    slides?: string;
    poster?: string;
  };
  keywords?: string[];
}

const papers: Paper[] = [
  {
    id: "privacy-preserving-ml-survey",
    title: "Privacy-Preserving Machine Learning: A Comprehensive Survey",
    authors: "John Abascal, Jonathan Ullman, Alina Oprea",
    venue: "Journal of Machine Learning Research",
    year: 2024,
    type: "journal",
    links: {
      pdf: "https://example.com/paper1.pdf",
      doi: "10.1000/example.doi.1",
      code: "https://github.com/example/repo1"
    },
    keywords: ["differential privacy", "machine learning", "privacy", "survey"]
  },
  {
    id: "differential-privacy-deep-learning",
    title: "Differential Privacy in Deep Learning: Challenges and Solutions",
    authors: "John Abascal, Research Collaborators",
    venue: "Neural Information Processing Systems (NeurIPS)",
    year: 2023,
    type: "conference",
    links: {
      pdf: "https://example.com/paper2.pdf",
      slides: "https://example.com/slides2.pdf",
      poster: "https://example.com/poster2.pdf"
    },
    keywords: ["differential privacy", "deep learning", "neural networks"]
  },
  {
    id: "adversarial-ml-defense",
    title: "Robust Defense Mechanisms Against Adversarial Machine Learning Attacks",
    authors: "John Abascal, Security Research Team",
    venue: "IEEE Security and Privacy Symposium",
    year: 2023,
    type: "conference",
    links: {
      pdf: "https://example.com/paper3.pdf",
      code: "https://github.com/example/repo3",
      doi: "10.1109/example.2023"
    },
    keywords: ["adversarial learning", "security", "robustness", "defense"]
  },
  {
    id: "federated-learning-privacy",
    title: "Privacy-Preserving Federated Learning with Formal Guarantees",
    authors: "John Abascal, Jonathan Ullman",
    venue: "International Conference on Machine Learning (ICML) Workshop",
    year: 2022,
    type: "workshop",
    links: {
      pdf: "https://example.com/paper4.pdf",
      slides: "https://example.com/slides4.pdf"
    },
    keywords: ["federated learning", "privacy", "formal methods"]
  },
  {
    id: "undergraduate-thesis",
    title: "Mathematical Foundations of Privacy in Statistical Databases",
    authors: "John Abascal",
    venue: "Florida State University Undergraduate Honors Thesis",
    year: 2021,
    type: "thesis",
    links: {
      pdf: "https://example.com/thesis.pdf"
    },
    keywords: ["mathematics", "privacy", "statistics", "database"]
  }
];

export default papers;