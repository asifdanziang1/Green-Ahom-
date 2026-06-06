import { useContext } from 'react';
import { ContentContext } from '../ContentProvider';

/**
 * Hook for frontend components to consume CMS content
 * @param {string} pageId - The ID of the page (e.g., 'home', 'about')
 */
export function useContent(pageId) {
  const ctx = useContext(ContentContext);
  
  if (!ctx) {
    console.warn("useContent called outside of ContentProvider");
    return { sections: [], allSections: [], getSection: () => null, getSectionByType: () => null, isLoading: true, meta: {} };
  }
  
  const pageContent = ctx.content?.[pageId];
  const sections = pageContent?.sections || [];
  
  // Frontend only sees visible, published sections, sorted by order
  const visibleSections = sections
    .filter(s => s.visible !== false && s.status !== 'draft')
    .sort((a, b) => (a.order || 0) - (b.order || 0));
  
  const getSection = (sectionId) => visibleSections.find(s => s.id === sectionId) || null;
  const getSectionByType = (type) => visibleSections.find(s => s.type === type) || null;
  
  return {
    sections: visibleSections,
    allSections: sections, // Raw sections for debugging/admin overlay if needed
    getSection,
    getSectionByType,
    isLoading: !ctx.content,
    meta: pageContent?.meta || {},
  };
}

export function useBlogPosts() {
  const ctx = useContext(ContentContext);
  return ctx?.blogPosts?.filter(p => p.status === 'published') || [];
}

export function usePrograms() {
  const ctx = useContext(ContentContext);
  return ctx?.programs?.filter(p => p.status === 'published') || [];
}

export function useLegalPage(slug) {
  const ctx = useContext(ContentContext);
  return ctx?.legalPages?.[slug] || null;
}

export function useSiteSettings() {
  const ctx = useContext(ContentContext);
  return ctx?.settings?.site || {};
}

export function usePaymentSettings() {
  const ctx = useContext(ContentContext);
  return ctx?.settings?.payment || {};
}

export function useNavigation() {
  const ctx = useContext(ContentContext);
  return ctx?.content?.navigation || { items: [], cta: {}, logo: {} };
}

export function useFooter() {
  const ctx = useContext(ContentContext);
  return ctx?.content?.footer || { links: [] };
}

export function useSeo(pageId) {
  const ctx = useContext(ContentContext);
  return ctx?.seoSettings?.[pageId] || {};
}
