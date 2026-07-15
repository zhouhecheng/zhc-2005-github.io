import { useState } from 'react'
import { portfolioItems, categories } from '../data/portfolio'
import PortfolioCard from './PortfolioCard'
import VideoModal from './VideoModal'
import type { PortfolioItem } from '../data/portfolio'
import { cn } from '../lib/utils'

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)

  const filtered =
    activeCategory === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">作品集</h2>
          <p className="section-subtitle">
            精选作品展示，涵盖商业广告、影视短片、音乐MV与纪录片
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={cn(
                'px-5 py-2 rounded-full text-sm font-medium transition-all duration-200',
                activeCategory === cat.key
                  ? 'bg-amber-500 text-black'
                  : 'bg-dark-50 text-gray-400 hover:text-white hover:bg-dark-100 border border-dark-100'
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, index) => (
            <PortfolioCard
              key={item.id}
              item={item}
              index={index}
              onClick={() => setSelectedItem(item)}
            />
          ))}
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">暂无此类别的作品</p>
          </div>
        )}

        {/* Video Modal */}
        <VideoModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      </div>
    </section>
  )
}
