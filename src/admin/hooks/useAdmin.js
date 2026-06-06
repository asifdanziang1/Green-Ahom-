import { useContext, useCallback } from 'react';
import { ContentContext } from '../ContentProvider';
import * as store from '../contentStore';

/**
 * Hook for Admin components to mutate CMS content
 */
export function useAdmin() {
  const ctx = useContext(ContentContext);
  const currentUser = store.safeGet('gaf_admin_session', { username: 'admin' });

  const logAction = (action, target, details) => {
    store.addAuditEntry({ action, target, details, user: currentUser.username });
  };

  // ── Pages & Sections ──────────────────────────────────────────────────

  const updateSection = useCallback((pageId, sectionId, updates) => {
    const success = store.updateSection(pageId, sectionId, updates);
    if (success) {
      logAction('update_section', `${pageId}/${sectionId}`, `Updated: ${Object.keys(updates).join(', ')}`);
      ctx.refreshContent();
    }
    return success;
  }, [ctx]);

  const toggleVisibility = useCallback((pageId, sectionId) => {
    const success = store.toggleSectionVisibility(pageId, sectionId);
    if (success) {
      logAction('toggle_section', `${pageId}/${sectionId}`, 'Toggled visibility');
      ctx.refreshContent();
    }
    return success;
  }, [ctx]);

  const reorderSections = useCallback((pageId, orderedIds) => {
    const success = store.reorderSections(pageId, orderedIds);
    if (success) {
      logAction('reorder_sections', pageId, `New order: ${orderedIds.join(', ')}`);
      ctx.refreshContent();
    }
    return success;
  }, [ctx]);

  const addSectionItem = useCallback((pageId, sectionId, itemsKey, newItem) => {
    const success = store.addSectionItem(pageId, sectionId, itemsKey, newItem);
    if (success) {
      logAction('add_item', `${pageId}/${sectionId}/${itemsKey}`, 'Added new item');
      ctx.refreshContent();
    }
    return success;
  }, [ctx]);

  const removeSectionItem = useCallback((pageId, sectionId, itemsKey, itemId) => {
    const success = store.removeSectionItem(pageId, sectionId, itemsKey, itemId);
    if (success) {
      logAction('remove_item', `${pageId}/${sectionId}/${itemsKey}`, `Removed item ${itemId}`);
      ctx.refreshContent();
    }
    return success;
  }, [ctx]);

  const updateSectionItem = useCallback((pageId, sectionId, itemsKey, itemId, updates) => {
    const success = store.updateSectionItem(pageId, sectionId, itemsKey, itemId, updates);
    if (success) {
      logAction('update_item', `${pageId}/${sectionId}/${itemsKey}`, `Updated item ${itemId}`);
      ctx.refreshContent();
    }
    return success;
  }, [ctx]);

  // ── Basic Wrappers ────────────────────────────────────────────────────

  const updateSettings = useCallback((path, value) => {
    store.updateSettings(path, value);
    logAction('update_settings', path, `Changed setting value`);
    ctx.refreshContent();
  }, [ctx]);

  const updatePageSeo = useCallback((pageId, seo) => {
    store.updatePageSeo(pageId, seo);
    logAction('update_seo', pageId, `Updated SEO settings`);
    ctx.refreshContent();
  }, [ctx]);

  // ── Versioning ────────────────────────────────────────────────────────

  const saveVersion = useCallback((contentKey, data) => {
    store.addVersion(contentKey, data, currentUser.username);
    logAction('save_version', contentKey, 'Saved manual version snapshot');
  }, [currentUser]);

  return {
    content: ctx?.content,
    blogPosts: ctx?.blogPosts,
    articles: ctx?.articles,
    programs: ctx?.programs,
    legalPages: ctx?.legalPages,
    mediaItems: ctx?.mediaItems,
    seoSettings: ctx?.seoSettings,
    settings: ctx?.settings,
    users: ctx?.users,
    auditLog: ctx?.auditLog,
    
    updateSection,
    toggleVisibility,
    reorderSections,
    addSectionItem,
    removeSectionItem,
    updateSectionItem,
    updateSettings,
    updatePageSeo,
    saveVersion,
    
    refreshContent: ctx?.refreshContent,
  };
}
