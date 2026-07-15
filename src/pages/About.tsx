import { siteConfig } from '../data/portfolio'
import { Scissors, Music, Film, Award, Clock } from 'lucide-react'

const skills = [
  { name: 'Premiere Pro', level: 95 },
  { name: 'Final Cut Pro', level: 90 },
  { name: 'DaVinci Resolve', level: 85 },
  { name: 'After Effects', level: 80 },
  { name: 'Photoshop', level: 75 },
  { name: 'Audition', level: 85 },
]

const experience = [
  {
    title: '资深视频剪辑师',
    company: '自由职业',
    period: '2020 - 至今',
    description:
      '为多家企业和个人提供视频剪辑、后期制作服务，累计完成100+个项目，涵盖商业广告、宣传片、MV、纪录片等多种类型。',
  },
  {
    title: '视频剪辑师',
    company: '郑州某影视传媒公司',
    period: '2018 - 2020',
    description:
      '负责公司商业项目剪辑制作，参与大型活动视频的策划与执行，熟练使用各类剪辑和特效软件。',
  },
]

const highlights = [
  { icon: Award, label: '项目经验', value: '100+' },
  { icon: Clock, label: '从业年限', value: '6+' },
  { icon: Film, label: '作品类型', value: '4+' },
  { icon: Music, label: '合作艺人', value: '20+' },
]

export default function About() {
  return (
    <main className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Section */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
            {/* Avatar Placeholder */}
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 flex-shrink-0 flex items-center justify-center">
              <Scissors className="w-14 h-14 text-white" />
            </div>

            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                关于{siteConfig.name}
              </h1>
              <p className="text-amber-500 font-medium mb-4">专业视频剪辑师</p>
              <p className="text-gray-400 leading-relaxed mb-6">
                我是一名来自{siteConfig.location}的专业视频剪辑师，拥有6年以上的影视后期制作经验。
                擅长商业广告、影视短片、音乐MV和纪录片等多种类型的剪辑工作。
                我对画面和节奏有着敏锐的感知力，致力于通过精妙的剪辑手法将每一个故事以最动人的方式呈现。
              </p>
              <p className="text-gray-400 leading-relaxed">
                熟练运用Premiere Pro、Final Cut Pro、DaVinci Resolve等主流剪辑软件，
                同时掌握After Effects特效合成和Audition音频处理，能够独立完成从粗剪到精剪、调色、音效的全流程制作。
              </p>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="card p-6 text-center"
              >
                <item.icon className="w-8 h-8 text-amber-500 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">
                  {item.value}
                </div>
                <div className="text-gray-400 text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-20">
          <h2 className="section-title">专业技能</h2>
          <p className="section-subtitle">多年积累的软件技能与工具掌握度</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <div key={skill.name} className="card p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-amber-500 text-sm font-medium">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full h-2 bg-dark-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section>
          <h2 className="section-title">工作经历</h2>
          <p className="section-subtitle">职业发展历程</p>

          <div className="relative space-y-8">
            {/* Timeline Line */}
            <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-dark-100" />

            {experience.map((exp, index) => (
              <div key={index} className="relative pl-12">
                {/* Timeline Dot */}
                <div className="absolute left-3 top-2 w-3 h-3 rounded-full bg-amber-500 ring-4 ring-dark" />

                <div className="card p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <h3 className="text-lg font-semibold text-white">
                      {exp.title}
                    </h3>
                    <span className="text-amber-500 text-sm font-medium whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">{exp.company}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
