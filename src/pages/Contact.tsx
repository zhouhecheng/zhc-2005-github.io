import { siteConfig } from '../data/portfolio'
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react'

export default function Contact() {
  return (
    <main className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            联系我
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            如果您有视频剪辑、后期制作或其他创意项目需求，欢迎随时联系我
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div className="card p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">电子邮箱</h3>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>

            <div className="card p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">联系电话</h3>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </div>
            </div>

            <div className="card p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">所在地</h3>
                <p className="text-gray-400">{siteConfig.location}</p>
              </div>
            </div>

            <div className="card p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">QQ邮箱</h3>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card p-6 md:p-8">
            <h3 className="text-xl font-semibold text-white mb-6">
              发送消息
            </h3>
            <form
              className="space-y-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  您的姓名
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="请输入姓名"
                  className="w-full px-4 py-3 rounded-lg bg-dark-100 border border-dark-200 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  您的邮箱
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="请输入邮箱"
                  className="w-full px-4 py-3 rounded-lg bg-dark-100 border border-dark-200 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  消息内容
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="请输入您的项目需求或合作意向..."
                  className="w-full px-4 py-3 rounded-lg bg-dark-100 border border-dark-200 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary justify-center text-base py-3.5"
              >
                <Send className="w-4 h-4" />
                发送消息
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
