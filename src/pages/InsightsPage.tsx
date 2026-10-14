import React, { useState } from 'react';
import { PageTab, Article } from '../types';
import { IMAGES } from '../assets/images';
import { INSIGHTS_ARTICLES } from '../data/legalData';
import {
  ArrowRight,
  Search,
  Mail,
  CheckCircle2,
  Calendar,
  Clock,
  Tag,
  Share2,
  X,
  BookOpen,
} from 'lucide-react';

interface InsightsPageProps {
  onSelectTab: (tab: PageTab) => void;
  onOpenConsultation: () => void;
}

export const InsightsPage: React.FC<InsightsPageProps> = ({
  onSelectTab,
  onOpenConsultation,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  const [subscribedEmail, setSubscribedEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const categories = [
    { label: 'All Insights', filter: 'All', count: 12 },
    { label: 'Constitutional Law', filter: 'Constitutional Law', count: 3 },
    { label: 'Criminal Law', filter: 'Criminal Law', count: 2 },
    { label: 'Litigation & Dispute Resolution', filter: 'Litigation & Dispute Resolution', count: 2 },
    { label: 'Corporate & Commercial Law', filter: 'Corporate & Commercial Law', count: 2 },
    { label: 'Human Rights & Public Law', filter: 'Human Rights & Public Law', count: 2 },
    { label: 'Technology, AI & Cyber Law', filter: 'Technology, AI & Cyber Law', count: 2 },
  ];

  const popularTags = [
    'Constitutional Law',
    'Privacy',
    'Data Protection',
    'Criminal Law',
    'Money Laundering',
    'Digital Governance',
    'Human Rights',
    'AI & Law',
    'Judgments',
    'Policy Analysis',
  ];

  const filteredArticles = INSIGHTS_ARTICLES.filter((art) => {
    const matchesCategory = selectedCategory === 'All' || art.category === selectedCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = INSIGHTS_ARTICLES.find((a) => a.featured) || INSIGHTS_ARTICLES[0];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (subscribedEmail) {
      setIsSubscribed(true);
      setTimeout(() => {
        setSubscribedEmail('');
      }, 2000);
    }
  };

  return (
    <div className="bg-[#faf9f6] text-[#1c1917]">
      
      {/* 1. HERO SECTION (Dark Atmospheric) */}
      <section className="relative bg-[#0c0c0e] text-white pt-12 pb-20 border-b border-stone-800 overflow-hidden">
        <div 
          className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 bg-cover bg-right opacity-30 lg:opacity-75 mix-blend-screen pointer-events-none"
          style={{ backgroundImage: `url(${IMAGES.heroLawScalesBooks})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0e] via-[#0c0c0e]/95 lg:via-[#0c0c0e]/75 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-sans text-stone-400 mb-6">
            <button
              onClick={() => onSelectTab('home')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <span>›</span>
            <span className="text-stone-200">Insights</span>
          </div>

          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#c01224]" />
              <span className="text-xs font-sans font-semibold tracking-widest uppercase text-stone-300">
                INSIGHTS
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight">
              Articles, Research and Legal Updates
            </h1>

            <p className="font-sans text-sm sm:text-base text-stone-300 leading-relaxed pt-2">
              Thoughts on contemporary legal issues, research publications and policy developments.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY FILTER BAR */}
      <section className="bg-white border-b border-stone-200 sticky top-20 z-20 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto py-3">
          <div className="flex items-center gap-2 min-w-max">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.filter;
              return (
                <button
                  key={cat.filter}
                  onClick={() => setSelectedCategory(cat.filter)}
                  className={`px-3.5 py-1.5 text-xs font-sans rounded transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#c01224] text-white font-semibold shadow-xs'
                      : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. FEATURED ARTICLE SECTION */}
      {selectedCategory === 'All' && !searchQuery && (
        <section className="py-12 bg-white border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-5 h-[2px] bg-[#c01224]" />
              <span className="text-xs font-sans font-semibold tracking-widest uppercase text-stone-500">
                FEATURED ARTICLE
              </span>
            </div>

            <div 
              onClick={() => setActiveArticle(featuredArticle)}
              className="group bg-[#faf9f6] border border-stone-200 rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 cursor-pointer hover:border-[#c01224]/50 hover:shadow-md transition-all"
            >
              <div className="lg:col-span-6 h-64 lg:h-auto overflow-hidden relative">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-sans text-stone-500">
                    <span className="font-semibold text-[#c01224]">{featuredArticle.type}</span>
                    <span>·</span>
                    <span>{featuredArticle.date}</span>
                    <span>·</span>
                    <span>{featuredArticle.readTime}</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 group-hover:text-[#c01224] transition-colors leading-snug">
                    {featuredArticle.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-sans text-stone-600 leading-relaxed">
                    {featuredArticle.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200 flex items-center text-xs font-sans font-semibold text-[#c01224] gap-1 group-hover:gap-2 transition-all">
                  <span>READ FULL ARTICLE</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. MAIN TWO-COLUMN FEED */}
      <section className="py-16 bg-[#faf9f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left 8 Cols: Latest Insights Articles */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                <h3 className="font-serif text-2xl font-bold text-stone-900">
                  Latest Insights
                </h3>
                <span className="text-xs font-sans text-stone-500">
                  Showing {filteredArticles.length} article{filteredArticles.length === 1 ? '' : 's'}
                </span>
              </div>

              {filteredArticles.length === 0 ? (
                <div className="py-16 text-center bg-white border border-stone-200 rounded-lg p-8">
                  <Search className="w-8 h-8 text-stone-400 mx-auto mb-2" />
                  <h4 className="font-serif text-lg font-bold text-stone-800">No articles matched your criteria</h4>
                  <p className="text-xs text-stone-500 mt-1">Try resetting the search query or category filters.</p>
                  <button
                    onClick={() => {
                      setSelectedCategory('All');
                      setSearchQuery('');
                    }}
                    className="mt-4 px-4 py-2 text-xs text-white bg-[#c01224] rounded"
                  >
                    Reset Filters
                  </button>
                </div>
              ) : (
                filteredArticles.map((article) => (
                  <div
                    key={article.id}
                    onClick={() => setActiveArticle(article)}
                    className="group bg-white border border-stone-200 rounded-lg p-5 sm:p-6 flex flex-col sm:flex-row gap-5 hover:border-[#c01224]/50 hover:shadow-sm transition-all cursor-pointer"
                  >
                    <div className="sm:w-48 h-36 rounded overflow-hidden shrink-0 bg-stone-100">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="flex flex-col justify-between flex-1 space-y-2">
                      <div>
                        <div className="text-[11px] font-sans text-stone-500 flex items-center gap-1.5">
                          <span className="font-semibold text-[#c01224] uppercase">{article.type}</span>
                          <span>·</span>
                          <span>{article.date}</span>
                        </div>

                        <h4 className="font-serif text-lg font-bold text-stone-900 group-hover:text-[#c01224] transition-colors mt-1 leading-snug">
                          {article.title}
                        </h4>

                        <p className="text-xs font-sans text-stone-600 line-clamp-2 leading-relaxed mt-1">
                          {article.summary}
                        </p>
                      </div>

                      <div className="flex items-center text-xs font-semibold text-[#c01224] gap-1 group-hover:gap-2 transition-all pt-2">
                        <span>READ MORE</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Right 4 Cols: Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Search Bar */}
              <div className="bg-white p-4 border border-stone-200 rounded-lg">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="flex border border-stone-300 rounded overflow-hidden focus-within:border-[#c01224]"
                >
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search articles, topics..."
                    className="w-full px-3 py-2 text-xs focus:outline-none bg-transparent"
                  />
                  <button
                    type="submit"
                    className="px-3 bg-[#c01224] text-white flex items-center justify-center hover:bg-[#a50f1f]"
                    aria-label="Search"
                  >
                    <Search className="w-4 h-4" />
                  </button>
                </form>
              </div>

              {/* Categories Widget with counts */}
              <div className="bg-white p-6 border border-stone-200 rounded-lg space-y-4">
                <h4 className="font-serif text-base font-bold text-stone-900 border-b border-stone-100 pb-2">
                  Categories
                </h4>
                <ul className="space-y-2.5 text-xs font-sans">
                  {categories.map((c) => (
                    <li key={c.filter}>
                      <button
                        onClick={() => setSelectedCategory(c.filter)}
                        className={`w-full flex items-center justify-between py-1 transition-colors text-left cursor-pointer ${
                          selectedCategory === c.filter
                            ? 'text-[#c01224] font-bold'
                            : 'text-stone-600 hover:text-stone-900'
                        }`}
                      >
                        <span>{c.label}</span>
                        <span className="text-[11px] text-stone-400">({c.count})</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stay Updated Newsletter Card */}
              <div className="bg-[#faf9f6] p-6 border border-stone-200 rounded-lg space-y-3">
                <div className="w-8 h-8 rounded-full bg-[#c01224]/10 text-[#c01224] flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>

                <h4 className="font-serif text-lg font-bold text-stone-900">
                  Stay Updated
                </h4>

                <p className="text-xs font-sans text-stone-600 leading-relaxed">
                  Get the latest articles, legal updates and research insights directly in your inbox.
                </p>

                {!isSubscribed ? (
                  <form onSubmit={handleSubscribe} className="space-y-2 pt-1">
                    <input
                      type="email"
                      required
                      value={subscribedEmail}
                      onChange={(e) => setSubscribedEmail(e.target.value)}
                      placeholder="Your email address"
                      className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded focus:outline-none focus:border-[#c01224]"
                    />
                    <button
                      type="submit"
                      className="w-full py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#c01224] hover:bg-[#a50f1f] rounded transition-all cursor-pointer"
                    >
                      SUBSCRIBE →
                    </button>
                  </form>
                ) : (
                  <div className="p-3 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded text-xs text-center flex items-center justify-center gap-1.5 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Subscribed successfully!</span>
                  </div>
                )}
              </div>

              {/* Recent Posts Thumbnail List */}
              <div className="bg-white p-6 border border-stone-200 rounded-lg space-y-4">
                <h4 className="font-serif text-base font-bold text-stone-900 border-b border-stone-100 pb-2">
                  Recent Posts
                </h4>

                <div className="space-y-4">
                  {INSIGHTS_ARTICLES.slice(0, 3).map((item) => (
                    <div
                      key={item.id}
                      onClick={() => setActiveArticle(item)}
                      className="flex items-center gap-3 group cursor-pointer"
                    >
                      <div className="w-14 h-14 rounded overflow-hidden shrink-0 bg-stone-100">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div>
                        <h5 className="font-serif text-xs font-semibold text-stone-900 group-hover:text-[#c01224] transition-colors line-clamp-2 leading-snug">
                          {item.title}
                        </h5>
                        <span className="text-[10px] font-sans text-stone-400 mt-1 block">
                          {item.date}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular Tags */}
              <div className="bg-white p-6 border border-stone-200 rounded-lg space-y-4">
                <h4 className="font-serif text-base font-bold text-stone-900 border-b border-stone-100 pb-2">
                  Popular Tags
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {popularTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSearchQuery(tag)}
                      className="px-2.5 py-1 text-[11px] font-sans bg-stone-100 hover:bg-[#c01224] hover:text-white text-stone-700 rounded transition-colors cursor-pointer"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 5. BOTTOM TOPIC DISCUSSION BANNER */}
      <section className="py-16 bg-[#0c0c0e] text-white border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 bg-[#15151a] rounded-xl border border-stone-800">
            <div>
              <div className="text-[11px] font-sans uppercase tracking-widest text-[#c01224] font-semibold">
                HAVE A TOPIC IN MIND?
              </div>
              <h3 className="font-serif text-2xl font-bold mt-1">
                Let’s Discuss a Research Topic
              </h3>
              <p className="text-xs text-stone-300 font-sans mt-1">
                We welcome opportunities for legal research, collaborations and expert commentary.
              </p>
            </div>

            <button
              onClick={() => {
                onSelectTab('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#c01224] hover:bg-[#a50f1f] rounded transition-all cursor-pointer whitespace-nowrap shrink-0"
            >
              GET IN TOUCH →
            </button>
          </div>
        </div>
      </section>

      {/* 6. FULL ARTICLE READING MODAL */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-white text-stone-900 rounded-lg shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="p-4 sm:p-6 border-b border-stone-200 flex items-center justify-between bg-[#faf9f6]">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-sans font-bold uppercase text-[#c01224] px-2 py-0.5 rounded bg-red-50">
                  {activeArticle.type}
                </span>
                <span className="text-xs text-stone-400">· {activeArticle.category}</span>
              </div>

              <button
                onClick={() => setActiveArticle(null)}
                className="p-1.5 text-stone-400 hover:text-stone-900 rounded-full hover:bg-stone-200 transition-colors cursor-pointer"
                aria-label="Close Article"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 leading-snug">
                  {activeArticle.title}
                </h2>
                <div className="flex items-center gap-3 text-xs font-sans text-stone-500 mt-2">
                  <span>Published on {activeArticle.date}</span>
                  <span>·</span>
                  <span>{activeArticle.readTime}</span>
                </div>
              </div>

              <div className="h-64 rounded-lg overflow-hidden border border-stone-200">
                <img
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4 font-sans text-sm text-stone-700 leading-relaxed">
                <p className="font-semibold text-stone-900 text-base">
                  {activeArticle.summary}
                </p>
                <p>
                  {activeArticle.content}
                </p>
                <p>
                  In practice before the Delhi High Court and appellate tribunals, our chamber prepares customized case briefs grounded in statutory interpretations, recent Division Bench pronouncements, and international comparative standards.
                </p>
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-stone-500">Related Tags:</span>
                {activeArticle.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-[11px] font-sans bg-stone-100 rounded text-stone-700"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 bg-[#faf9f6] border-t border-stone-200 flex items-center justify-between">
              <span className="text-xs text-stone-500">
                Khushboo Chaudhary Law Chambers Research Wing
              </span>

              <button
                onClick={() => {
                  setActiveArticle(null);
                  onOpenConsultation();
                }}
                className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#c01224] hover:bg-[#a50f1f] rounded transition-colors cursor-pointer"
              >
                Discuss this Topic →
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
