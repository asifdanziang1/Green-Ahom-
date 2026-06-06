import React, { createContext, useState, useEffect, useCallback } from 'react';
import * as store from './contentStore';
import { getDefaultContent, getDefaultLegalPages, getDefaultSeoSettings, getDefaultPrograms } from './contentSchema';

export const ContentContext = createContext(null);

export const ContentProvider = ({ children }) => {
  const [isReady, setIsReady] = useState(false);
  
  // Data States
  const [content, setContent] = useState(null);
  const [blogPosts, setBlogPosts] = useState([]);
  const [articles, setArticles] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [legalPages, setLegalPages] = useState({});
  const [mediaItems, setMediaItems] = useState([]);
  const [seoSettings, setSeoSettings] = useState({});
  const [settings, setSettings] = useState({});
  const [users, setUsers] = useState([]);
  const [auditLog, setAuditLog] = useState([]);

  const refreshContent = useCallback(() => {
    setContent(store.getContent());
    setBlogPosts(store.getBlogPosts());
    setArticles(store.getArticles());
    setPrograms(store.getPrograms());
    setLegalPages(store.getLegalPages());
    setMediaItems(store.getMediaItems());
    setSeoSettings(store.getSeoSettings());
    setSettings(store.getSettings());
    setUsers(store.getUsers());
    setAuditLog(store.getAuditLog());
  }, []);

  // Initialization
  useEffect(() => {
    const existingContent = store.getContent();
    
    // Seed initial content if empty
    if (!existingContent) {
      console.log("[ContentProvider] No content found. Seeding from default schema...");
      store.setContent(getDefaultContent());
      store.setLegalPages(getDefaultLegalPages());
      store.setSeoSettings(getDefaultSeoSettings());
      store.setPrograms(getDefaultPrograms());
      
      // Perform legacy data migration if applicable
      const migrations = store.migrateLegacyData();
      if (migrations.length > 0) {
        console.log("[ContentProvider] Migrated legacy data:", migrations);
        store.addAuditEntry({
          action: 'system_migration',
          target: 'all',
          details: `Migrated legacy modules: ${migrations.join(', ')}`,
          user: 'system'
        });
      }
    }
    
    refreshContent();
    setIsReady(true);
  }, [refreshContent]);

  if (!isReady) {
    return null; // Or a minimal loading spinner
  }

  return (
    <ContentContext.Provider value={{
      content, blogPosts, articles, programs, legalPages, 
      mediaItems, seoSettings, settings, users, auditLog,
      refreshContent
    }}>
      {children}
    </ContentContext.Provider>
  );
};
