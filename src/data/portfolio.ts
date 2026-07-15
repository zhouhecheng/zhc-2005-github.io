export type VideoType = 'direct' | 'youtube' | 'bilibili' | 'vimeo' | '123pan'

export interface PortfolioItem {
  id: string
  title: string
  category: 'commercial' | 'film' | 'music' | 'documentary'
  description: string
  videoUrl: string
  videoType: VideoType
  thumbnail: string
  tags: string[]
  year: string
}

export interface SiteConfig {
  name: string
  description: string
  email: string
  phone: string
  location: string
}

export const siteConfig: SiteConfig = {
  name: '周合成',
  description: '专业视频剪辑师 | 影视后期制作 | 创意视觉设计师',
  email: 'zhczhc0512@qq.com',
  phone: '17629966509',
  location: '河南省郑州市',
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: '商业广告 - 品牌宣传片',
    category: 'commercial',
    description:
      '为知名品牌制作的商业宣传片，通过精妙的剪辑节奏和色彩分级，展现品牌调性与产品魅力。',
    videoUrl:
      'https://hecheng-2005-1454067432.cos.ap-guangzhou.myqcloud.com/%E3%80%8A%E6%88%91%E7%9A%84%E5%89%8D%E5%A5%B3%E5%8F%8B%E9%82%BB%E5%B1%85%E4%BB%AC%E3%80%8B.mp4',
    videoType: 'direct',
    thumbnail: '',
    tags: ['商业广告', '品牌宣传', '色彩分级'],
    year: '2024',
  },
  {
    id: '2',
    title: '影视短片 - 叙事剪辑',
    category: 'film',
    description:
      '独立电影短片剪辑作品，运用蒙太奇手法构建叙事张力，营造沉浸式观影体验。',
    videoUrl:
      'https://存储桶名称.cos.地域.myqcloud.com/video/视频2地址.mp4',
    videoType: 'direct',
    thumbnail: '',
    tags: ['影视剪辑', '叙事', '蒙太奇'],
    year: '2024',
  },
  {
    id: '3',
    title: '音乐MV - 节奏剪辑',
    category: 'music',
    description:
      '为音乐人打造的MV作品，紧贴音乐节奏进行画面切换与特效合成，视觉与听觉的完美融合。',
    videoUrl:
      'https://存储桶名称.cos.地域.myqcloud.com/video/视频3地址.mp4',
    videoType: 'direct',
    thumbnail: '',
    tags: ['音乐MV', '节奏剪辑', '视觉特效'],
    year: '2023',
  },
  {
    id: '4',
    title: '纪录片 - 人文纪实',
    category: 'documentary',
    description:
      '人文题材纪录片剪辑，以细腻的叙事节奏和真实的情感表达，记录普通人的不平凡故事。',
    videoUrl:
      'https://存储桶名称.cos.地域.myqcloud.com/video/纪录片示例.mp4',
    videoType: 'direct',
    thumbnail: '',
    tags: ['纪录片', '人文纪实', '叙事'],
    year: '2023',
  },
  {
    id: '5',
    title: '产品发布会开场视频',
    category: 'commercial',
    description:
      '大型产品发布会开场视频，融合动态图形设计与视频剪辑，营造震撼的视觉冲击力。',
    videoUrl:
      'https://存储桶名称.cos.地域.myqcloud.com/video/发布会示例.mp4',
    videoType: 'direct',
    thumbnail: '',
    tags: ['发布会', '动态图形', '商业'],
    year: '2024',
  },
  {
    id: '6',
    title: '实验短片 - 视觉探索',
    category: 'film',
    description:
      '先锋实验短片，探索视觉表达的边界，运用非常规剪辑手法和色彩处理创造独特美学。',
    videoUrl:
      'https://存储桶名称.cos.地域.myqcloud.com/video/实验短片示例.mp4',
    videoType: 'direct',
    thumbnail: '',
    tags: ['实验短片', '先锋', '视觉艺术'],
    year: '2023',
  },
]

export const categories = [
  { key: 'all', label: '全部作品' },
  { key: 'commercial', label: '商业广告' },
  { key: 'film', label: '影视短片' },
  { key: 'music', label: '音乐MV' },
  { key: 'documentary', label: '纪录片' },
]
