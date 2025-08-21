import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';
import * as cheerio from 'cheerio';

const SCHOLAR_USER_ID = '3jYQ3FsAAAAJ';
const SCHOLAR_URL = `https://scholar.google.com/citations?user=${SCHOLAR_USER_ID}&hl=en`;

async function fetchPublications() {
  console.log('Fetching publications from Google Scholar...');
  
  try {
    const response = await fetch(SCHOLAR_URL, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const html = await response.text();
    const $ = cheerio.load(html);
    
    const publications = [];
    
    // Parse Google Scholar publication entries
    $('.gsc_a_tr').each((index, element) => {
      const titleElement = $(element).find('.gsc_a_at');
      const authorElement = $(element).find('.gsc_a_at').next();
      const venueElement = authorElement.next();
      const yearElement = $(element).find('.gsc_a_y span');
      
      const title = titleElement.text().trim();
      const authors = authorElement.text().trim();
      const venue = venueElement.text().trim();
      const year = parseInt(yearElement.text().trim()) || new Date().getFullYear();
      const link = titleElement.attr('href') ? `https://scholar.google.com${titleElement.attr('href')}` : undefined;
      
      if (title && authors) {
        // Create slug from title for matching with overrides
        const slug = title.toLowerCase()
          .replace(/[^a-z0-9\s]/g, '')
          .replace(/\s+/g, '-')
          .substring(0, 50);
        
        publications.push({
          slug,
          title,
          authors,
          venue,
          year,
          link,
          abstract: '', // Will be filled from overrides if available
          featured: false,
          custom_order: 0
        });
      }
    });

    console.log(`Found ${publications.length} publications`);
    
    // Load overrides
    const overridesPath = join(process.cwd(), 'data', 'publications_overrides.json');
    let overrides = { overrides: [] };
    
    if (existsSync(overridesPath)) {
      try {
        const overridesData = readFileSync(overridesPath, 'utf8');
        overrides = JSON.parse(overridesData);
      } catch (error) {
        console.warn('Error reading overrides file:', error.message);
      }
    }
    
    // Apply overrides
    publications.forEach(pub => {
      const override = overrides.overrides.find(o => 
        pub.title.toLowerCase().includes(o.slug.toLowerCase()) ||
        pub.slug.includes(o.slug.toLowerCase())
      );
      
      if (override) {
        if (override.custom_title) pub.title = override.custom_title;
        if (override.custom_venue) pub.venue = override.custom_venue;
        if (override.abstract) pub.abstract = override.abstract;
        if (override.pdf_url) pub.pdf_url = override.pdf_url;
        if (override.video_url) pub.video_url = override.video_url;
        if (override.code_url) pub.code_url = override.code_url;
        if (override.featured !== undefined) pub.featured = override.featured;
        if (override.custom_order !== undefined) pub.custom_order = override.custom_order;
      }
    });
    
    // Sort by year descending, then custom_order descending
    publications.sort((a, b) => {
      if (a.year !== b.year) {
        return b.year - a.year;
      }
      return (b.custom_order || 0) - (a.custom_order || 0);
    });
    
    // Write to publications.json
    const outputPath = join(process.cwd(), 'data', 'publications.json');
    writeFileSync(outputPath, JSON.stringify(publications, null, 2));
    
    console.log(`Successfully wrote ${publications.length} publications to ${outputPath}`);
    
  } catch (error) {
    console.error('Error fetching publications:', error.message);
    
    // Check if publications.json exists, if so, leave it untouched
    const outputPath = join(process.cwd(), 'data', 'publications.json');
    if (existsSync(outputPath)) {
      console.log('Leaving existing publications.json untouched due to fetch error.');
    } else {
      // Create empty publications file as fallback
      console.log('Creating empty publications.json as fallback.');
      writeFileSync(outputPath, JSON.stringify([], null, 2));
    }
  }
}

fetchPublications();