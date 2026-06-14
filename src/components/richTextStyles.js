import { css } from 'styled-components'
import { palette, smallScreenLimit } from './constants'

// Single source of truth for styling Markdown-rendered article/workshop
// bodies. Shared by every template (and, through them, the Netlify CMS
// preview) so the editor preview and the published page render identically.
//
// Covers the richer elements that can come from pasted Claude-artifact
// Markdown: headings, quotes, tables, code and section dividers, always in
// the site's palette.
export const richTextBodyStyles = css`
  /* Improve readability for markdown-rendered HTML */
  p,
  li {
    color: #222;
    line-height: 1.75;
    font-size: 1.05rem;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #111;
    margin-top: 2rem;
  }

  a {
    color: ${palette.red};
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  /* Blockquotes (Netlify CMS "quote" button + pasted artifact quotes) */
  blockquote {
    margin: 1.5rem 0;
    padding: 0.75rem 1.25rem;
    border-left: 4px solid ${palette.red};
    background: rgba(197, 49, 81, 0.05);
    color: #333;
    font-style: italic;
  }

  blockquote p {
    margin: 0;
  }

  /* Tables (Markdown GFM tables pasted from Claude artifacts) */
  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 1rem;
    margin: 1.5rem 0;
  }

  /* On narrow screens let wide tables scroll horizontally instead of
     overflowing the page (gatsby-transformer-remark emits a bare <table>). */
  @media (max-width: ${smallScreenLimit}px) {
    table {
      display: block;
      overflow-x: auto;
      white-space: nowrap;
    }
  }

  th,
  td {
    padding: 0.6rem 0.85rem;
    border: 1px solid rgba(0, 0, 0, 0.12);
    text-align: left;
    vertical-align: top;
  }

  thead th {
    background: ${palette.darkRed};
    color: ${palette.white};
    font-weight: 600;
  }

  tbody tr:nth-child(even) {
    background: rgba(0, 0, 0, 0.03);
  }

  /* Inline + block code */
  code {
    background: rgba(0, 0, 0, 0.06);
    padding: 0.15em 0.4em;
    border-radius: 4px;
    font-size: 0.92em;
  }

  pre {
    background: #1e1e1e;
    color: #f5f5f5;
    padding: 1rem 1.25rem;
    border-radius: 6px;
    overflow-x: auto;
    margin: 1.5rem 0;
  }

  pre code {
    background: transparent;
    padding: 0;
    color: inherit;
  }

  /* Horizontal rule / section dividers */
  hr {
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.12);
    margin: 2.5rem 0;
  }
`
