import { useEffect, useRef, useCallback } from 'react'
import { X, Maximize, Volume2 } from 'lucide-react'
import type { PortfolioItem } from '../data/portfolio'

interface VideoModalProps {
  item: PortfolioItem | null
  onClose: () => void
}

export default function VideoModal({ item, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    },
    [onClose]
  )

  useEffect(() => {
    if (item) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [item, handleKeyDown])

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose()
  }

  if (!item) return null

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in"
      onClick={handleOverlayClick}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
        aria-label="Close modal"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Video Container */}
      <div className="relative w-full max-w-5xl mx-4">
        {/* Title */}
        <div className="mb-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-white">{item.title}</h2>
          <p className="text-gray-400 text-sm mt-1">{item.description}</p>
        </div>

        {/* Video Player */}
        <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl">
          {item.videoType === 'direct' ? (
            <video
              ref={videoRef}
              className="w-full aspect-video"
              src={item.videoUrl}
              controls
              autoPlay
              playsInline
              controlsList="nodownload"
            >
              <p className="text-gray-400 p-8 text-center">
                您的浏览器不支持视频播放，请尝试使用 Chrome 或 Edge 浏览器。
              </p>
            </video>
          ) : (
            <div className="w-full aspect-video flex items-center justify-center bg-dark-100">
              <p className="text-gray-400">
                暂不支持此视频平台的嵌入式播放
              </p>
            </div>
          )}
        </div>

        {/* Video Controls Hint */}
        <div className="mt-3 flex items-center justify-center gap-4 text-gray-500 text-sm">
          <span className="flex items-center gap-1">
            <Maximize className="w-3.5 h-3.5" />
            全屏播放
          </span>
          <span className="flex items-center gap-1">
            <Volume2 className="w-3.5 h-3.5" />
            音量控制
          </span>
          <span>ESC 退出</span>
        </div>
      </div>
    </div>
  )
}
