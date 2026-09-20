import { useState, useEffect } from 'react';
import { getDefaultContent, getDefaultLegalPages, getDefaultSeoSettings, getDefaultPrograms } from './contentSchema';

const CMS_URL = import.meta.env.VITE_CMS_URL || 'http://localhost:3000';

const content = getDefaultContent();
const legalPages = getDefaultLegalPages();
const seoSettings = getDefaultSeoSettings();
const staticPrograms = getDefaultPrograms();

/**
 * Hook for frontend components to consume static content
 * @param {string} pageId - The ID of the page (e.g., 'home', 'about')
 */
export function useContent(pageId) {
  const pageContent = content[pageId];
  const sections = pageContent?.sections || [];
  
  // Frontend only sees visible, published sections, sorted by order
  const visibleSections = sections
    .filter(s => s.visible !== false && s.status !== 'draft')
    .sort((a, b) => (a.order || 0) - (b.order || 0));
  
  const getSection = (sectionId) => visibleSections.find(s => s.id === sectionId) || null;
  const getSectionByType = (type) => visibleSections.find(s => s.type === type) || null;
  
  return {
    sections: visibleSections,
    allSections: sections,
    getSection,
    getSectionByType,
    isLoading: false,
    meta: pageContent?.meta || {},
  };
}

export function useBlogPosts() {
  return [];
}

export function usePrograms() {
  const [programsList, setProgramsList] = useState(() => staticPrograms.filter(p => p.status === 'published'));

  useEffect(() => {
    let isMounted = true;
    async function fetchFromCMS() {
      try {
        const res = await fetch(`${CMS_URL}/api/programs?limit=100`);
        if (!res.ok) return;
        const data = await res.json();
        if (isMounted && data?.docs && data.docs.length > 0) {
          const cmsPrograms = data.docs
            .filter(doc => doc.status === 'published')
            .map(doc => ({
              id: doc.slug || doc.id,
              year: doc.year || 'FY 2024-2025',
              title: doc.title,
              category: doc.category,
              desc: doc.desc || doc.summary || '',
              location: doc.location || '',
              budget: doc.budget || '',
              metric: doc.metric || '',
              progress: typeof doc.progress === 'number' ? doc.progress : 100,
              imageUrl: doc.coverImage?.url ? `${CMS_URL}${doc.coverImage.url}` : (doc.imageUrl || '/extracted_images/ANNUAL_REPORT_2024-2025_p5_img1.jpg'),
              iconName: doc.iconName || 'environment',
              status: doc.status,
            }));
          if (cmsPrograms.length > 0) {
            setProgramsList(cmsPrograms);
          }
        }
      } catch {
        // Fallback to static schema seamlessly if CMS is offline
      }
    }
    fetchFromCMS();
    return () => {
      isMounted = false;
    };
  }, []);

  return programsList;
}

export function useLegalPage(slug) {
  return legalPages[slug] || null;
}

export function useSiteSettings() {
  const [settings, setSettings] = useState({
    siteName: 'Green Ahom Federation',
    logo: '/logo.png'
  });

  useEffect(() => {
    let isMounted = true;
    async function fetchSettings() {
      try {
        const res = await fetch(`${CMS_URL}/api/globals/site-settings`);
        if (!res.ok) return;
        const data = await res.json();
        if (isMounted && data?.siteName) {
          setSettings({
            siteName: data.siteName,
            tagline: data.tagline,
            contactEmail: data.contactEmail,
            contactPhone: data.contactPhone,
            address: data.address,
            logo: '/logo.png'
          });
        }
      } catch {
        // Fallback to defaults
      }
    }
    fetchSettings();
    return () => {
      isMounted = false;
    };
  }, []);

  return settings;
}

export function usePaymentSettings() {
  return {
    gateway: 'razorpay'
  };
}

export function useNavigation() {
  return content.navigation || { items: [], cta: {}, logo: {} };
}

export function useFooter() {
  return content.footer || { links: [] };
}

export function useSeo(pageId) {
  return seoSettings[pageId] || {};
}
