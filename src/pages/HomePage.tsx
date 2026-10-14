import { ArrowUpRight, Database, ShieldCheck, Sparkles } from 'lucide-react'
import './HomePage.scss'

function HomePage() {
  return (
    <div className="home-page">
      <div className="home-glow animate-breath" aria-hidden="true" />
      <div className="home-grid" aria-hidden="true" />
      <div className="home-content">
        <div className="home-kicker">
          <span className="home-kicker-dot" />
          本地工作台 · WECHAT DATA WORKSPACE
        </div>

        <div className="brand-lockup" aria-label="WeFlow">
          <span className="brand-mark">W</span>
          <span className="brand-word">weflow</span>
        </div>

        <h1 className="home-title">把聊天记录，变成<br /><em>可理解的生活数据</em></h1>
        <p className="home-subtitle">从左侧进入聊天、分析或导出。所有内容默认留在本地，探索从一条消息开始。</p>

        <div className="home-signals" aria-label="WeFlow 特点">
          <span><ShieldCheck size={15} /> 本地优先</span>
          <span><Database size={15} /> 实时索引</span>
          <span><Sparkles size={15} /> 智能洞察</span>
        </div>

        <div className="home-hint">
          <span>从左侧开始探索</span>
          <ArrowUpRight size={16} />
        </div>
      </div>
    </div>
  )
}

export default HomePage
