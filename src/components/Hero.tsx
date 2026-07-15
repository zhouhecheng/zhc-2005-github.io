import { Link } from 'react-router-dom'
import { Play, ArrowDown } from 'lucide-react'
import { siteConfig } from '../data/portfolio'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-dark pointer-events-none" />

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(245, 158, 11, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(245, 158, 11, 1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            专业视频剪辑师
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
            <span className="block">{siteConfig.name}</span>
            <span className="block text-amber-500 mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light">
              用镜头讲述故事
            </span>
          </h1>

          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            {siteConfig.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/#portfolio"
              className="btn-primary text-base px-8 py-4 group"
            >
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              查看作品
            </Link>
            <Link to="/contact" className="btn-outline text-base px-8 py-4">
              联系我
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-gray-500" />
      </div>
    </section>
  )
}
