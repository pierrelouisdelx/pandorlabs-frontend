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

import { FAQSection } from '../_components/faq-section'
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

const pricingTiers = [
  {
    name: 'Starter',
    price: '$299',
    period: 'month',
    description: 'Perfect for startups and small teams',
    requests: '50,000 API calls/month',
    features: [
      'Multi-platform data access',
      'Basic engagement metrics',
      'Email support',
      'API documentation',
      '30-day data retention',
    ],
    cta: 'Start Free Trial',
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '$799',
    period: 'month',
    description: 'For growing businesses and agencies',
    requests: '250,000 API calls/month',
    features: [
      'Everything in Starter',
      'Real-time webhook notifications',
      'Sentiment analysis',
      'Historical data (12 months)',
      'Priority support (24/7)',
      'Advanced analytics dashboard',
      'Custom data retention',
    ],
    cta: 'Start Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'year',
    description: 'For large-scale operations',
    requests: 'Unlimited API calls',
    features: [
      'Everything in Professional',
      'Dedicated account manager',
      'Custom SLA guarantees',
      'White-label options',
      'On-premise deployment',
      'Bulk data exports',
      'Custom integrations',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
]

const faqs = [
  {
    question: 'What is a social media data API?',
    answer:
      'A social media data API is a programmatic interface that allows applications to access structured social media content, engagement metrics, and audience data from platforms like Instagram, TikTok, and Twitter. It enables automated data collection for analytics, monitoring, and research without manual scraping, delivering real-time posts, comments, hashtags, and user interactions through standardized endpoints.',
  },
  {
    question: 'Which social media platforms does your API support?',
    answer:
      'Our Social Media Data API supports 10+ major platforms including Instagram, TikTok, Twitter/X, Facebook, LinkedIn, YouTube, Pinterest, Reddit, Snapchat, and Threads. All platforms share a unified data schema for consistent cross-platform analysis. Coverage includes posts, stories, reels, comments, engagement metrics, hashtag performance, and audience demographics where publicly available.',
  },
  {
    question: 'How fresh is the social media data provided?',
    answer:
      'Our API delivers real-time data with sub-60-second latency for new posts, comments, and engagement updates. Real-time webhooks notify applications instantly when monitored keywords, hashtags, or accounts post new content. Historical data extends back 12 months for trend analysis. Data refresh rates vary by platform but typically update every 15-30 minutes for engagement metrics.',
  },
  {
    question: 'What metrics and data points are included?',
    answer:
      'Our API provides 200+ data points per post including engagement metrics (likes, comments, shares, saves), reach and impressions, engagement rate, posting times, content type, hashtags, mentions, sentiment scores, author demographics, follower counts, growth trends, viral coefficient, share of voice, and competitive benchmarks. Custom metric aggregations available for enterprise clients.',
  },
  {
    question: 'Is social media API data collection legal and compliant?',
    answer:
      "Yes. Our API collects only publicly available social media data in compliance with GDPR, CCPA, and each platform's terms of service. We do not access private accounts, direct messages, or restricted content. Data collection includes built-in anonymization, configurable retention policies, automatic PII detection, and transparent audit trails meeting regulatory requirements for financial services, healthcare, and government sectors.",
  },
  {
    question: 'Can I track competitors and industry trends with your API?',
    answer:
      'Yes. Monitor competitor social media accounts, track their engagement rates, content strategies, posting frequency, hashtag usage, and audience growth. Set up keyword and hashtag tracking to identify emerging trends, analyze share of voice across your industry, benchmark performance against competitors, and receive alerts when competitors launch campaigns or experience viral content.',
  },
  {
    question: 'How much does a social media data API cost?',
    answer:
      'Pricing starts at $299/month for 50,000 API calls covering basic engagement metrics. Professional plans ($799/month) include 250,000 calls with sentiment analysis and historical data. Enterprise plans offer custom pricing for unlimited calls, dedicated infrastructure, priority support, and advanced features like predictive analytics. All plans include real-time data access and multi-platform coverage.',
  },
  {
    question: 'What are common use cases for social media APIs?',
    answer:
      'Social media APIs power brand monitoring, competitive intelligence, influencer marketing analytics, crisis management, trend forecasting, consumer sentiment analysis, market research, content performance optimization, lead generation, and customer service automation. Agencies use APIs for client reporting, researchers for academic studies, and enterprises for strategic decision-making based on social listening insights.',
  },
  {
    question: 'What technical support and documentation is available?',
    answer:
      'All plans include comprehensive REST API documentation, interactive API playground, SDK libraries for major programming languages, code examples, integration guides, and video tutorials. Professional and Enterprise plans add dedicated technical support via email and Slack, onboarding consultation, custom integration assistance, and 24/7 emergency support with guaranteed response times under 2 hours.',
  },
  {
    question: 'How do I access social media data through an API?',
    answer:
      'Access social media data by registering for an API key, choosing your subscription tier, and making HTTP requests to our REST endpoints. Use our SDKs for Python, JavaScript, PHP, or Ruby for quick integration, or call endpoints directly. Authenticate with your API key, specify platforms and data types needed, and receive structured JSON responses with real-time or historical social media data.',
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
      <FAQSection faqs={faqs} accentColor={accentColor} />
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
