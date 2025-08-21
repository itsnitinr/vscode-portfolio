export interface PublicationOverride {
  slug: string;
  pdf_url?: string;
  video_url?: string;
  code_url?: string;
  custom_title?: string;
  custom_venue?: string;
  abstract?: string;
  featured?: boolean;
  custom_order?: number;
}

export interface Publication {
  slug: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  link?: string;
  abstract?: string;
  featured?: boolean;
  pdf_url?: string;
  video_url?: string;
  code_url?: string;
  custom_order?: number;
}