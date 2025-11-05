'use client'

import {
  Activity,
  Code,
  Database,
  MessageSquare,
  Radio,
  Search,
  Share2,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react'

import { FeaturesGrid } from '../_components/features-grid'
import { FinalCTASection } from '../_components/final-cta-section'
import { ProductHero } from '../_components/product-hero'

const accentColor = '#8B5CF6'
const accentGlow = 'rgba(139, 92, 246, 0.15)'
const accentGradient = 'from-purple-500/20 via-fuchsia-500/20 to-pink-500/20'

const heroData = {
  product: 'socialMedia' as const,
  headline: 'Social Media Data API for Market Intelligence',
  subheadline:
    'Access real-time social media data from 10+ platforms through a single API. Monitor brand mentions, track competitors, and analyze trends with comprehensive metrics.',
  valueProps: [
    'Real-time data from Instagram, TikTok, Twitter/X, and 7+ platforms',
    'Sub-60-second latency for instant brand monitoring',
    'Unified API with 200+ engagement metrics and sentiment analysis',
    'GDPR-compliant with enterprise security and privacy controls',
  ],
  primaryCTA: 'Start Free Trial',
  secondaryCTA: 'View Documentation',
  trustIndicators: [
    { Icon: Zap, text: '<100ms Response' },
    { Icon: Activity, text: 'Real-time Data' },
    { Icon: TrendingUp, text: '99.9% Uptime' },
  ],
  accentColor,
  accentGlow,
  accentGradient,
  visualElement: (
    <div className="relative aspect-square w-full">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-full w-full">
          {/* Animated gradient background */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.4) 0%, rgba(236, 72, 153, 0.2) 50%, transparent 100%)',
              animation: 'pulse 4s ease-in-out infinite',
            }}
          />

          {/* Floating Social Media Post Cards */}
          {[
            {
              x: '5%',
              y: '15%',
              platform: '📘',
              likes: '2.4K',
              comments: '89',
              delay: '0s',
            },
            {
              x: '55%',
              y: '10%',
              platform: '📸',
              likes: '5.8K',
              comments: '234',
              delay: '0.7s',
            },
            {
              x: '25%',
              y: '55%',
              platform: '🎵',
              likes: '12K',
              comments: '567',
              delay: '1.4s',
            },
          ].map((card, i) => (
            <div
              key={i}
              className="group absolute cursor-pointer rounded-xl border border-purple-500/30 bg-white/5 p-4 backdrop-blur-md transition-all hover:border-purple-400/50 hover:bg-white/10"
              style={{
                left: card.x,
                top: card.y,
                animation: `float 4s ease-in-out infinite`,
                animationDelay: card.delay,
              }}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-2xl">{card.platform}</span>
                  <Activity className="h-4 w-4 animate-pulse text-purple-400" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs text-white/80">
                    <TrendingUp className="h-3 w-3 text-purple-400" />
                    <span className="font-semibold">{card.likes}</span>
                    <span className="text-white/50">likes</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/80">
                    <MessageSquare className="h-3 w-3 text-pink-400" />
                    <span className="font-semibold">{card.comments}</span>
                    <span className="text-white/50">comments</span>
                  </div>
                </div>
              </div>
              {/* Engagement trend indicator */}
              <div className="mt-2 flex items-center gap-1">
                <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                    style={{
                      width: `${60 + i * 15}%`,
                      animation: 'slideIn 2s ease-out',
                    }}
                  />
                </div>
              </div>
            </div>
          ))}

          {/* Platform Icons constellation */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative h-48 w-48">
              {[
                { icon: '📸', angle: 0 },
                { icon: '🐦', angle: 45 },
                { icon: '📘', angle: 90 },
                { icon: '💼', angle: 135 },
                { icon: '▶️', angle: 180 },
                { icon: '🎵', angle: 225 },
                { icon: '📍', angle: 270 },
                { icon: '🤝', angle: 315 },
              ].map((item, i) => {
                const radius = 100
                const x =
                  radius * Math.cos((item.angle * Math.PI) / 180) + radius
                const y =
                  radius * Math.sin((item.angle * Math.PI) / 180) + radius
                return (
                  <div
                    key={i}
                    className="absolute flex h-10 w-10 items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm"
                    style={{
                      left: `${x - 20}px`,
                      top: `${y - 20}px`,
                      animation: `pulse 2s ease-in-out infinite`,
                      animationDelay: `${i * 0.2}s`,
                    }}
                  >
                    <span className="text-sm">{item.icon}</span>
                  </div>
                )
              })}
              {/* Center glow */}
              <div className="absolute top-1/2 left-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/20 blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
}

const features = [
  {
    Icon: Share2,
    title: 'Multi-Platform Coverage',
    description:
      'Access unified data from Instagram, TikTok, Twitter/X, Facebook, LinkedIn, YouTube, Pinterest, Reddit, and Snapchat through a single API endpoint with standardized schemas.',
    metrics: '10+ Platforms',
  },
  {
    Icon: Radio,
    title: 'Real-Time Streaming',
    description:
      'Track social media activity with sub-60-second data latency. Get instant webhook notifications for brand mentions, trending content, and competitive moves.',
    metrics: '<60s Latency',
  },
  {
    Icon: TrendingUp,
    title: 'Engagement Analytics',
    description:
      'Deep engagement analysis with 200+ metrics including sentiment scores, influencer identification, audience demographics, share of voice, and viral coefficient tracking.',
    metrics: '200+ Metrics',
  },
  {
    Icon: Users,
    title: 'Audience Insights',
    description:
      'Extract actionable insights from follower demographics, growth patterns, engagement velocity, and behavioral analytics to inform strategic decisions.',
  },
  {
    Icon: Search,
    title: 'Content Discovery',
    description:
      'Find and analyze trending content, hashtag performance, content categorization, and viral patterns across all platforms with advanced filtering and search.',
  },
  {
    Icon: Database,
    title: 'Historical Data',
    description:
      '12+ months of historical social media data for trend analysis, performance benchmarking, and predictive insights with full data export capabilities.',
  },
  {
    Icon: MessageSquare,
    title: 'Sentiment Analysis',
    description:
      'AI-powered sentiment analysis of comments, posts, and brand mentions with emotion detection, tone classification, and crisis alert capabilities.',
  },
  {
    Icon: Code,
    title: 'Developer-First API',
    description:
      'Comprehensive REST API with SDKs for Python, JavaScript, PHP, and Ruby. Interactive playground, detailed docs, and 24/7 technical support for seamless integration.',
  },
]

export default function SocialMediaPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <ProductHero {...heroData} />
      <FeaturesGrid
        title="Powerful Social Intelligence Features"
        subtitle="Everything you need to build next-generation social media analytics applications"
        features={features}
        accentColor={accentColor}
        accentGlow={accentGlow}
      />
      <FinalCTASection accentColor={accentColor} accentGlow={accentGlow} />

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes slideIn {
          from {
            width: 0%;
          }
          to {
            width: var(--final-width);
          }
        }
      `}</style>
    </div>
  )
}
