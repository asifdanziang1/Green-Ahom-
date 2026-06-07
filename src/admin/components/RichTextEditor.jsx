import React, { useState, useRef } from 'react';

/**
 * RichTextEditor — Simple Markdown-compatible text editor
 * No external dependencies. Supports basic formatting toolbar.
 */
const RichTextEditor = ({ value = '', onChange, placeholder = 'Start writing...', minHeight = 200, label }) => {
  const textareaRef = useRef(null);
  const [isPreview, setIsPreview] = useState(false);

  const insertMarkdown = (before, after = '') => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = value.substring(start, end);
    const newText = value.substring(0, start) + before + selectedText + after + value.substring(end);
    onChange(newText);
    setTimeout(() => {
      textarea.focus();
      textarea.selectionStart = start + before.length;
      textarea.selectionEnd = start + before.length + selectedText.length;
    }, 10);
  };

  const toolbarButtons = [
    { label: 'B', action: () => insertMarkdown('**', '**'), title: 'Bold' },
    { label: 'I', action: () => insertMarkdown('*', '*'), title: 'Italic' },
    { label: 'H1', action: () => insertMarkdown('# '), title: 'Heading 1' },
    { label: 'H2', action: () => insertMarkdown('## '), title: 'Heading 2' },
    { label: 'H3', action: () => insertMarkdown('### '), title: 'Heading 3' },
    { label: '•', action: () => insertMarkdown('- '), title: 'Bullet List' },
    { label: '1.', action: () => insertMarkdown('1. '), title: 'Numbered List' },
    { label: '"', action: () => insertMarkdown('> '), title: 'Blockquote' },
    { label: '🔗', action: () => insertMarkdown('[', '](url)'), title: 'Link' },
    { label: '📷', action: () => insertMarkdown('![alt](', ')'), title: 'Image' },
    { label: '—', action: () => insertMarkdown('\n---\n'), title: 'Horizontal Rule' },
  ];

  const renderMarkdown = (md) => {
    if (!md) return '<p style="color:#999">Nothing to preview</p>';
    let html = md
      .replace(/^### (.+)$/gm, '<h3>$1</h3>')
      .replace(/^## (.+)$/gm, '<h2>$1</h2>')
      .replace(/^# (.+)$/gm, '<h1>$1</h1>')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>')
      .replace(/^- (.+)$/gm, '<li>$1</li>')
      .replace(/^\d+\. (.+)$/gm, '<li>$1</li>')
      .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" style="color:var(--gold)">$1</a>')
      .replace(/!\[(.+?)\]\((.+?)\)/g, '<img src="$2" alt="$1" style="max-width:100%;border-radius:8px;margin:8px 0" />')
      .replace(/^---$/gm, '<hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0" />')
      .replace(/\n\n/g, '</p><p>')
      .replace(/\n/g, '<br/>');
    return `<p>${html}</p>`;
  };

  return (
    <div className="rte-wrapper">
      {label && <label className="form-label">{label}</label>}
      <div className="rte-container">
        <div className="rte-toolbar">
          <div className="rte-toolbar-buttons">
            {toolbarButtons.map((btn, i) => (
              <button
                key={i}
                type="button"
                className="rte-btn"
                onClick={btn.action}
                title={btn.title}
              >
                {btn.label}
              </button>
            ))}
          </div>
          <button
            type="button"
            className={`rte-preview-toggle ${isPreview ? 'active' : ''}`}
            onClick={() => setIsPreview(!isPreview)}
          >
            {isPreview ? 'Edit' : 'Preview'}
          </button>
        </div>

        {isPreview ? (
          <div
            className="rte-preview-area"
            style={{ minHeight }}
            dangerouslySetInnerHTML={{ __html: renderMarkdown(value) }}
          />
        ) : (
          <textarea
            ref={textareaRef}
            className="rte-textarea"
            style={{ minHeight }}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
          />
        )}
      </div>

      <style>{`
        .rte-wrapper {
          width: 100%;
        }
        .rte-container {
          border: 1px solid rgba(17, 63, 39, 0.12);
          border-radius: 8px;
          overflow: hidden;
          background: var(--white, #fff);
        }
        .rte-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 6px 8px;
          background: #f8f9fa;
          border-bottom: 1px solid rgba(17, 63, 39, 0.08);
          flex-wrap: wrap;
          gap: 4px;
        }
        .rte-toolbar-buttons {
          display: flex;
          gap: 2px;
          flex-wrap: wrap;
        }
        .rte-btn {
          width: 32px;
          height: 32px;
          border: none;
          background: transparent;
          border-radius: 4px;
          font-size: 13px;
          font-weight: 700;
          color: #555;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.15s;
        }
        .rte-btn:hover {
          background: rgba(17, 63, 39, 0.08);
          color: var(--primary, #113f27);
        }
        .rte-preview-toggle {
          padding: 4px 12px;
          border: 1px solid rgba(17, 63, 39, 0.12);
          background: transparent;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 600;
          color: #666;
          cursor: pointer;
          transition: all 0.15s;
        }
        .rte-preview-toggle.active {
          background: var(--gold, #d95f43);
          color: white;
          border-color: var(--gold, #d95f43);
        }
        .rte-textarea {
          width: 100%;
          border: none;
          outline: none;
          padding: 16px;
          font-family: 'SF Mono', 'Fira Code', 'Consolas', monospace;
          font-size: 14px;
          line-height: 1.6;
          color: var(--primary, #113f27);
          resize: vertical;
          box-sizing: border-box;
        }
        .rte-textarea::placeholder {
          color: #bbb;
        }
        .rte-preview-area {
          padding: 16px;
          font-family: var(--font-body, 'Plus Jakarta Sans', sans-serif);
          font-size: 15px;
          line-height: 1.7;
          color: #333;
          overflow-y: auto;
        }
        .rte-preview-area h1 { font-size: 1.8rem; font-weight: 700; margin: 16px 0 8px; }
        .rte-preview-area h2 { font-size: 1.4rem; font-weight: 700; margin: 14px 0 6px; }
        .rte-preview-area h3 { font-size: 1.15rem; font-weight: 700; margin: 12px 0 4px; }
        .rte-preview-area blockquote { border-left: 3px solid var(--gold, #d95f43); padding-left: 12px; margin: 8px 0; color: #666; }
        .rte-preview-area li { margin-left: 20px; margin-bottom: 4px; }
        .rte-preview-area p { margin: 8px 0; }
      `}</style>
    </div>
  );
};

export default RichTextEditor;
