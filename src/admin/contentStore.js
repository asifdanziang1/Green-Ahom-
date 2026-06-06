/**
 * ContentStore — Data Abstraction Layer
 * ======================================
 * All CMS data operations go through this module.
 * Currently backed by localStorage. Swap to REST API by
 * replacing the implementation of each method here.
 *
 * Keys used in localStorage:
 *   gaf_cms_content   — All page/section content
 *   gaf_cms_blog      — Blog posts
 *   gaf_cms_articles  — Articles
 *   gaf_cms_programs  — Programs
 *   gaf_cms_legal     — Legal pages
 *   gaf_cms_media     — Media library entries
 *   gaf_cms_seo       — SEO settings per page
 *   gaf_cms_users     — User accounts & roles
 *   gaf_cms_versions  — Content version history
 *   gaf_cms_audit     — Audit log
 *   gaf_cms_settings  — System settings (payment config, etc.)
 */

const STORAGE_KEYS = {
  CONTENT: 'gaf_cms_content',
  BLOG: 'gaf_cms_blog',
  ARTICLES: 'gaf_cms_articles',
  PROGRAMS: 'gaf_cms_programs',
  LEGAL: 'gaf_cms_legal',
  MEDIA: 'gaf_cms_media',
  SEO: 'gaf_cms_seo',
  USERS: 'gaf_cms_users',
  VERSIONS: 'gaf_cms_versions',
  AUDIT: 'gaf_cms_audit',
  SETTINGS: 'gaf_cms_settings',
  // Legacy keys (for migration)
  LEGACY_STATS: 'gaf_stats',
  LEGACY_PROJECTS: 'gaf_projects',
  LEGACY_DONATIONS: 'gaf_donations',
  LEGACY_VOLUNTEERS: 'gaf_volunteers',
  LEGACY_INQUIRIES: 'gaf_inquiries',
  LEGACY_GALLERY: 'gaf_gallery',
};

// ── Helpers ──────────────────────────────────────────────────

function safeGet(key, fallback = null) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function safeSet(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    return true;
  } catch (e) {
    console.error(`[ContentStore] Failed to write ${key}:`, e);
    return false;
  }
}

function generateId(prefix = 'item') {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;
}

function timestamp() {
  return new Date().toISOString();
}

// ── Content (Pages & Sections) ──────────────────────────────

export function getContent() {
  return safeGet(STORAGE_KEYS.CONTENT, null);
}

export function setContent(content) {
  return safeSet(STORAGE_KEYS.CONTENT, content);
}

export function getPageContent(pageId) {
  const content = getContent();
  return content ? content[pageId] || null : null;
}

export function setPageContent(pageId, pageData) {
  const content = getContent() || {};
  content[pageId] = pageData;
  return setContent(content);
}

export function getSectionContent(pageId, sectionId) {
  const page = getPageContent(pageId);
  if (!page || !page.sections) return null;
  return page.sections.find(s => s.id === sectionId) || null;
}

export function updateSection(pageId, sectionId, updates) {
  const page = getPageContent(pageId);
  if (!page || !page.sections) return false;
  const idx = page.sections.findIndex(s => s.id === sectionId);
  if (idx === -1) return false;
  page.sections[idx] = { ...page.sections[idx], ...updates, updatedAt: timestamp() };
  return setPageContent(pageId, page);
}

export function reorderSections(pageId, orderedIds) {
  const page = getPageContent(pageId);
  if (!page || !page.sections) return false;
  const reordered = orderedIds
    .map(id => page.sections.find(s => s.id === id))
    .filter(Boolean)
    .map((s, i) => ({ ...s, order: i + 1 }));
  // Append any sections not in orderedIds at the end
  const remainingIds = page.sections
    .filter(s => !orderedIds.includes(s.id))
    .map((s, i) => ({ ...s, order: reordered.length + i + 1 }));
  page.sections = [...reordered, ...remainingIds];
  return setPageContent(pageId, page);
}

export function toggleSectionVisibility(pageId, sectionId) {
  const section = getSectionContent(pageId, sectionId);
  if (!section) return false;
  return updateSection(pageId, sectionId, { visible: !section.visible });
}

export function addSectionItem(pageId, sectionId, itemsKey, newItem) {
  const section = getSectionContent(pageId, sectionId);
  if (!section) return false;
  const items = section[itemsKey] || [];
  items.push({ ...newItem, id: generateId('block') });
  return updateSection(pageId, sectionId, { [itemsKey]: items });
}

export function removeSectionItem(pageId, sectionId, itemsKey, itemId) {
  const section = getSectionContent(pageId, sectionId);
  if (!section) return false;
  const items = (section[itemsKey] || []).filter(item => item.id !== itemId);
  return updateSection(pageId, sectionId, { [itemsKey]: items });
}

export function updateSectionItem(pageId, sectionId, itemsKey, itemId, updates) {
  const section = getSectionContent(pageId, sectionId);
  if (!section) return false;
  const items = (section[itemsKey] || []).map(item =>
    item.id === itemId ? { ...item, ...updates } : item
  );
  return updateSection(pageId, sectionId, { [itemsKey]: items });
}

export function reorderSectionItems(pageId, sectionId, itemsKey, orderedIds) {
  const section = getSectionContent(pageId, sectionId);
  if (!section) return false;
  const items = section[itemsKey] || [];
  const reordered = orderedIds.map(id => items.find(i => i.id === id)).filter(Boolean);
  const remaining = items.filter(i => !orderedIds.includes(i.id));
  return updateSection(pageId, sectionId, { [itemsKey]: [...reordered, ...remaining] });
}

// ── Blog Posts ──────────────────────────────────────────────

export function getBlogPosts() {
  return safeGet(STORAGE_KEYS.BLOG, []);
}

export function setBlogPosts(posts) {
  return safeSet(STORAGE_KEYS.BLOG, posts);
}

export function getBlogPost(id) {
  return getBlogPosts().find(p => p.id === id) || null;
}

export function createBlogPost(post) {
  const posts = getBlogPosts();
  const newPost = {
    ...post,
    id: generateId('blog'),
    createdAt: timestamp(),
    updatedAt: timestamp(),
    status: post.status || 'draft',
    slug: post.slug || post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
  };
  posts.unshift(newPost);
  setBlogPosts(posts);
  return newPost;
}

export function updateBlogPost(id, updates) {
  const posts = getBlogPosts().map(p =>
    p.id === id ? { ...p, ...updates, updatedAt: timestamp() } : p
  );
  return setBlogPosts(posts);
}

export function deleteBlogPost(id) {
  const posts = getBlogPosts().filter(p => p.id !== id);
  return setBlogPosts(posts);
}

// ── Articles ────────────────────────────────────────────────

export function getArticles() {
  return safeGet(STORAGE_KEYS.ARTICLES, []);
}

export function setArticles(articles) {
  return safeSet(STORAGE_KEYS.ARTICLES, articles);
}

export function getArticle(id) {
  return getArticles().find(a => a.id === id) || null;
}

export function createArticle(article) {
  const articles = getArticles();
  const newArticle = {
    ...article,
    id: generateId('article'),
    createdAt: timestamp(),
    updatedAt: timestamp(),
    status: article.status || 'draft',
    slug: article.slug || article.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
  };
  articles.unshift(newArticle);
  setArticles(articles);
  return newArticle;
}

export function updateArticle(id, updates) {
  const articles = getArticles().map(a =>
    a.id === id ? { ...a, ...updates, updatedAt: timestamp() } : a
  );
  return setArticles(articles);
}

export function deleteArticle(id) {
  const articles = getArticles().filter(a => a.id !== id);
  return setArticles(articles);
}

// ── Programs ────────────────────────────────────────────────

export function getPrograms() {
  return safeGet(STORAGE_KEYS.PROGRAMS, []);
}

export function setPrograms(programs) {
  return safeSet(STORAGE_KEYS.PROGRAMS, programs);
}

export function createProgram(program) {
  const programs = getPrograms();
  const newProgram = {
    ...program,
    id: generateId('program'),
    createdAt: timestamp(),
    updatedAt: timestamp(),
    status: program.status || 'published',
  };
  programs.push(newProgram);
  setPrograms(programs);
  return newProgram;
}

export function updateProgram(id, updates) {
  const programs = getPrograms().map(p =>
    p.id === id ? { ...p, ...updates, updatedAt: timestamp() } : p
  );
  return setPrograms(programs);
}

export function deleteProgram(id) {
  const programs = getPrograms().filter(p => p.id !== id);
  return setPrograms(programs);
}

export function reorderPrograms(orderedIds) {
  const programs = getPrograms();
  const reordered = orderedIds.map(id => programs.find(p => p.id === id)).filter(Boolean);
  const remaining = programs.filter(p => !orderedIds.includes(p.id));
  return setPrograms([...reordered, ...remaining]);
}

// ── Legal Pages ─────────────────────────────────────────────

export function getLegalPages() {
  return safeGet(STORAGE_KEYS.LEGAL, {});
}

export function setLegalPages(pages) {
  return safeSet(STORAGE_KEYS.LEGAL, pages);
}

export function getLegalPage(slug) {
  const pages = getLegalPages();
  return pages[slug] || null;
}

export function updateLegalPage(slug, data) {
  const pages = getLegalPages();
  pages[slug] = { ...pages[slug], ...data, updatedAt: timestamp() };
  return setLegalPages(pages);
}

// ── Media Library ───────────────────────────────────────────

export function getMediaItems() {
  return safeGet(STORAGE_KEYS.MEDIA, []);
}

export function setMediaItems(items) {
  return safeSet(STORAGE_KEYS.MEDIA, items);
}

export function addMediaItem(item) {
  const items = getMediaItems();
  const newItem = {
    ...item,
    id: generateId('media'),
    uploadedAt: timestamp(),
  };
  items.unshift(newItem);
  setMediaItems(items);
  return newItem;
}

export function deleteMediaItem(id) {
  const items = getMediaItems().filter(i => i.id !== id);
  return setMediaItems(items);
}

export function updateMediaItem(id, updates) {
  const items = getMediaItems().map(i =>
    i.id === id ? { ...i, ...updates } : i
  );
  return setMediaItems(items);
}

// ── SEO Settings ────────────────────────────────────────────

export function getSeoSettings() {
  return safeGet(STORAGE_KEYS.SEO, {});
}

export function setSeoSettings(settings) {
  return safeSet(STORAGE_KEYS.SEO, settings);
}

export function getPageSeo(pageId) {
  const settings = getSeoSettings();
  return settings[pageId] || { title: '', description: '', ogImage: '', ogTitle: '', ogDescription: '' };
}

export function updatePageSeo(pageId, seo) {
  const settings = getSeoSettings();
  settings[pageId] = { ...settings[pageId], ...seo };
  return setSeoSettings(settings);
}

// ── Users & Roles ───────────────────────────────────────────

export function getUsers() {
  return safeGet(STORAGE_KEYS.USERS, [
    {
      id: 'user_superadmin',
      username: 'admin',
      password: 'ahom-green-2026',
      name: 'Super Administrator',
      email: 'admin@greenahom.org',
      role: 'super_admin',
      createdAt: '2024-01-01T00:00:00Z',
    },
  ]);
}

export function setUsers(users) {
  return safeSet(STORAGE_KEYS.USERS, users);
}

export function createUser(user) {
  const users = getUsers();
  const newUser = {
    ...user,
    id: generateId('user'),
    createdAt: timestamp(),
  };
  users.push(newUser);
  setUsers(users);
  return newUser;
}

export function updateUser(id, updates) {
  const users = getUsers().map(u =>
    u.id === id ? { ...u, ...updates } : u
  );
  return setUsers(users);
}

export function deleteUser(id) {
  if (id === 'user_superadmin') return false; // Cannot delete super admin
  const users = getUsers().filter(u => u.id !== id);
  return setUsers(users);
}

export function authenticateUser(username, password) {
  const users = getUsers();
  return users.find(u => u.username === username && u.password === password) || null;
}

// ── System Settings (Payment config, etc.) ──────────────────

export function getSettings() {
  return safeGet(STORAGE_KEYS.SETTINGS, {
    payment: {
      gateway: 'razorpay',
      razorpay_key_id: '',
      razorpay_key_secret: '',
      test_mode: true,
      enabled: true,
      currency: 'INR',
      min_amount: 500,
      max_amount: 25000,
      quick_amounts: [1500, 3000, 5000, 10000],
    },
    site: {
      name: 'Green Ahom Federation',
      tagline: 'Ecological Renaissance of Assam',
      email: 'info@greenahom.org',
      phone: '+91 6002 XXXXXX',
      address: '56/38(C), Near C.I. Office, Silchar Road, Hailakandi, Assam - 788151',
    },
  });
}

export function setSettings(settings) {
  return safeSet(STORAGE_KEYS.SETTINGS, settings);
}

export function updateSettings(path, value) {
  const settings = getSettings();
  const keys = path.split('.');
  let obj = settings;
  for (let i = 0; i < keys.length - 1; i++) {
    if (!obj[keys[i]]) obj[keys[i]] = {};
    obj = obj[keys[i]];
  }
  obj[keys[keys.length - 1]] = value;
  return setSettings(settings);
}

// ── Audit Log ───────────────────────────────────────────────

export function getAuditLog() {
  return safeGet(STORAGE_KEYS.AUDIT, []);
}

export function addAuditEntry(entry) {
  const log = getAuditLog();
  log.unshift({
    ...entry,
    id: generateId('audit'),
    timestamp: timestamp(),
  });
  // Keep last 500 entries
  if (log.length > 500) log.length = 500;
  return safeSet(STORAGE_KEYS.AUDIT, log);
}

// ── Version History ─────────────────────────────────────────

export function getVersions(contentKey) {
  const versions = safeGet(STORAGE_KEYS.VERSIONS, {});
  return versions[contentKey] || [];
}

export function addVersion(contentKey, data, author = 'admin') {
  const versions = safeGet(STORAGE_KEYS.VERSIONS, {});
  if (!versions[contentKey]) versions[contentKey] = [];
  versions[contentKey].unshift({
    id: generateId('ver'),
    data: JSON.parse(JSON.stringify(data)),
    author,
    savedAt: timestamp(),
  });
  // Keep last 30 versions per content key
  if (versions[contentKey].length > 30) versions[contentKey].length = 30;
  return safeSet(STORAGE_KEYS.VERSIONS, versions);
}

export function restoreVersion(contentKey, versionId) {
  const versions = getVersions(contentKey);
  return versions.find(v => v.id === versionId) || null;
}

// ── Legacy Data Migration ───────────────────────────────────

export function migrateLegacyData() {
  const migrations = [];

  // Migrate stats
  const legacyStats = safeGet(STORAGE_KEYS.LEGACY_STATS);
  if (legacyStats) {
    migrations.push('stats');
  }

  // Migrate donations
  const legacyDonations = safeGet(STORAGE_KEYS.LEGACY_DONATIONS);
  if (legacyDonations && legacyDonations.length > 0) {
    migrations.push('donations');
  }

  // Migrate volunteers
  const legacyVolunteers = safeGet(STORAGE_KEYS.LEGACY_VOLUNTEERS);
  if (legacyVolunteers && legacyVolunteers.length > 0) {
    migrations.push('volunteers');
  }

  // Migrate inquiries
  const legacyInquiries = safeGet(STORAGE_KEYS.LEGACY_INQUIRIES);
  if (legacyInquiries && legacyInquiries.length > 0) {
    migrations.push('inquiries');
  }

  return migrations;
}

// ── Legacy Data Accessors (for backward compat) ─────────────

export function getLegacyDonations() {
  return safeGet(STORAGE_KEYS.LEGACY_DONATIONS, []);
}

export function getLegacyVolunteers() {
  return safeGet(STORAGE_KEYS.LEGACY_VOLUNTEERS, []);
}

export function getLegacyInquiries() {
  return safeGet(STORAGE_KEYS.LEGACY_INQUIRIES, []);
}

export function getLegacyStats() {
  return safeGet(STORAGE_KEYS.LEGACY_STATS, { students: 364, funds: 23870590, beneficiaries: 2635, strayBud: 3541090 });
}

export { STORAGE_KEYS, generateId, timestamp, safeGet, safeSet };
