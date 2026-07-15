import { Scissors } from 'lucide-react'
import { siteConfig } from '../data/portfolio'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-dark-100 bg-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center">
                <Scissors className="w-4 h-4 text-black" />
              </div>
              <span className="text-lg font-bold text-white">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              专业视频剪辑师，专注于影视后期制作与创意视觉设计。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <a href="/#" className="text-gray-400 hover:text-amber-500 text-sm transition-colors">
                  首页
                </a>
              </li>
              <li>
                <a href="/#portfolio" className="text-gray-400 hover:text-amber-500 text-sm transition-colors">
                  作品集
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-amber-500 text-sm transition-colors">
                  关于我
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-amber-500 text-sm transition-colors">
                  联系
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">联系方式</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">{siteConfig.email}</li>
              <li className="text-gray-400 text-sm">{siteConfig.phone}</li>
              <li className="text-gray-400 text-sm">{siteConfig.location}</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-dark-100 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
