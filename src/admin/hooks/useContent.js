import { getDefaultContent, getDefaultLegalPages, getDefaultSeoSettings, getDefaultPrograms } from './contentSchema';

const content = getDefaultContent();
const legalPages = getDefaultLegalPages();
const seoSettings = getDefaultSeoSettings();
const programs = getDefaultPrograms();

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
  return programs.filter(p => p.status === 'published');
}

export function useLegalPage(slug) {
  return legalPages[slug] || null;
}

export function useSiteSettings() {
  return {
    siteName: 'Green Ahom Federation',
    logo: '/logo.png'
  };
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
