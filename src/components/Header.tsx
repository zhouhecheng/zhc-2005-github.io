import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Scissors, Menu, X } from 'lucide-react'
import { cn } from '../lib/utils'

const navLinks = [
  { to: '/', label: '首页' },
  { to: '/about', label: '关于我' },
  { to: '/contact', label: '联系' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-lg border-b border-dark-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center group-hover:bg-amber-400 transition-colors">
              <Scissors className="w-5 h-5 text-black" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              周合成
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                  location.pathname === link.to
                    ? 'text-amber-500 bg-amber-500/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          'md:hidden transition-all duration-300 overflow-hidden',
          mobileOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <nav className="px-4 pb-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={cn(
                'block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200',
                location.pathname === link.to
                  ? 'text-amber-500 bg-amber-500/10'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
