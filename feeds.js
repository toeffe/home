// ─────────────────────────────────────────────
//  FEEDS CONFIG — edit this file to add/remove feeds
//  Each feed needs a name, url, and optional tag + color
//
//  Colors available: accent | muted | green | red | blue
// ─────────────────────────────────────────────

const FEEDS = [

  // ── AI — Lab Blogs ──────────────────────────
  {
    name: "OpenAI News",
    url: "https://openai.com/news/rss.xml",
    tag: "AI Labs",
    color: "accent"
  },
  {
    name: "Google DeepMind",
    url: "https://deepmind.google/blog/rss.xml",
    tag: "AI Labs",
    color: "accent"
  },
  {
    name: "Google AI Research",
    url: "https://research.google/blog/rss",
    tag: "AI Labs",
    color: "accent"
  },

  // ── AI — News & Analysis ────────────────────
  {
    name: "VentureBeat AI",
    url: "https://venturebeat.com/category/ai/feed/",
    tag: "AI News",
    color: "red"
  },
  {
    name: "AI News",
    url: "https://www.artificialintelligence-news.com/feed/rss/",
    tag: "AI News",
    color: "red"
  },
  {
    name: "The Guardian — AI",
    url: "https://www.theguardian.com/technology/artificialintelligenceai/rss",
    tag: "AI News",
    color: "red"
  },
  {
    name: "MIT Technology Review",
    url: "https://www.technologyreview.com/feed/",
    tag: "AI News",
    color: "red"
  },
  {
    name: "Futurism — AI",
    url: "https://futurism.com/categories/ai-artificial-intelligence/feed",
    tag: "AI News",
    color: "red"
  },

  // ── AI — Research ───────────────────────────
  {
    name: "MIT News — AI",
    url: "https://news.mit.edu/rss/topic/artificial-intelligence2",
    tag: "Research",
    color: "blue"
  },
  {
    name: "Hugging Face Blog",
    url: "https://huggingface.co/blog/feed.xml",
    tag: "Research",
    color: "blue"
  },

  // ── AI — Tooling & Dev ──────────────────────
  {
    name: "Towards AI",
    url: "https://towardsai.net/feed",
    tag: "AI Dev",
    color: "green"
  },
  {
    name: "AI Business",
    url: "https://aibusiness.com/rss.xml",
    tag: "AI Dev",
    color: "green"
  },

  // ── Tech ────────────────────────────────────
  {
    name: "Hacker News",
    url: "https://hnrss.org/frontpage",
    tag: "Tech",
    color: "muted"
  },
  {
    name: "The Verge",
    url: "https://www.theverge.com/rss/index.xml",
    tag: "Tech",
    color: "muted"
  },
  {
    name: "Ars Technica",
    url: "https://feeds.arstechnica.com/arstechnica/index",
    tag: "Tech",
    color: "muted"
  },

  // ── Games ───────────────────────────────────
  {
    name: "Game Developer",
    url: "https://www.gamedeveloper.com/rss.xml",
    tag: "Games",
    color: "green"
  },

];

// ─────────────────────────────────────────────
//  SETTINGS — tweak how the feed page behaves
// ─────────────────────────────────────────────

const FEED_SETTINGS = {
  itemsPerFeed: 8,          // how many articles to show per feed
  proxyUrl: "https://api.rss2json.com/v1/api.json?rss_url=", // CORS proxy
};