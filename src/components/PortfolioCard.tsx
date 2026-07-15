import { Play, Film } from 'lucide-react'
import type { PortfolioItem } from '../data/portfolio'
import { cn } from '../lib/utils'

interface PortfolioCardProps {
  item: PortfolioItem
  onClick: () => void
  index: number
}

export default function PortfolioCard({ item, onClick, index }: PortfolioCardProps) {
  return (
    <div
      className={cn(
        'card cursor-pointer group animate-slide-up',
      )}
      style={{ animationDelay: `${index * 100}ms` }}
      onClick={onClick}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video bg-dark-100 overflow-hidden">
        {item.thumbnail ? (
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Film className="w-16 h-16 text-dark-300" />
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-amber-500/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
            <Play className="w-7 h-7 text-black ml-0.5" />
          </div>
        </div>

        {/* Year Badge */}
        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-sm text-xs font-medium text-gray-300">
          {item.year}
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-amber-500/20 backdrop-blur-sm text-xs font-medium text-amber-500">
          {item.category === 'commercial' && '商业广告'}
          {item.category === 'film' && '影视短片'}
          {item.category === 'music' && '音乐MV'}
          {item.category === 'documentary' && '纪录片'}
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="text-white font-semibold text-base mb-2 line-clamp-1 group-hover:text-amber-500 transition-colors">
          {item.title}
        </h3>
        <p className="text-gray-400 text-sm line-clamp-2 mb-3">
          {item.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-md bg-dark-100 text-gray-400 text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
