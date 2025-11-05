'use client'

import { Building2, Home, Shield, TrendingUp, Zap } from 'lucide-react'

import { FeaturesGrid } from '../_components/features-grid'
import { FinalCTASection } from '../_components/final-cta-section'
import { ProductHero } from '../_components/product-hero'

const accentColor = '#3B82F6'
const accentGlow = 'rgba(59, 130, 246, 0.15)'
const accentGradient = 'from-blue-500/20 via-transparent to-transparent'

const heroData = {
  product: 'realEstate' as const,
  headline: 'Real Estate Data API',
  subheadline:
    'Access 140M+ property listings with real-time market trends and ML-powered valuations',
  valueProps: [
    'Comprehensive property data across 50+ markets',
    'Real-time MLS integration with 15-minute updates',
    'ML-powered valuation models with 94% accuracy',
    'GDPR-compliant with enterprise security',
  ],
  primaryCTA: 'Start Free Trial',
  secondaryCTA: 'View Documentation',
  trustIndicators: [
    { Icon: Zap, text: '99.9% Uptime' },
    { Icon: Shield, text: 'Enterprise Security' },
    { Icon: TrendingUp, text: 'Real-time Data' },
  ],
  accentColor,
  accentGlow,
  accentGradient,
  visualElement: (
    <div className="relative aspect-square w-full">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-full w-full">
          {/* Background Map Grid */}
          <div className="absolute inset-0 opacity-20">
            <svg className="h-full w-full" viewBox="0 0 400 400">
              <defs>
                <pattern
                  id="grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="rgba(59,130,246,0.2)"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="400" height="400" fill="url(#grid)" />
            </svg>
          </div>

          {/* Floating Property Cards */}
          {[
            { x: '10%', y: '20%', price: '$450K', delay: '0s' },
            { x: '60%', y: '15%', price: '$789K', delay: '0.5s' },
            { x: '30%', y: '60%', price: '$1.2M', delay: '1s' },
          ].map((card, i) => (
            <div
              key={i}
              className="absolute rounded-lg border border-blue-500/30 bg-white/10 p-4 backdrop-blur-sm"
              style={{
                left: card.x,
                top: card.y,
                animation: `float 3s ease-in-out infinite`,
                animationDelay: card.delay,
              }}
            >
              <div className="flex items-center gap-3">
                <Home className="h-6 w-6 text-blue-400" />
                <div>
                  <div className="text-sm font-semibold text-blue-400">
                    {card.price}
                  </div>
                  <div className="text-xs text-white/60">3 bed • 2 bath</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
}

const features = [
  {
    Icon: Building2,
    title: 'Comprehensive Property Database',
    description:
      '140M+ verified property listings across residential, commercial, and land sectors with detailed information.',
    metrics: '140M+ Properties',
  },
  {
    Icon: TrendingUp,
    title: 'Real-Time Market Analytics',
    description:
      'Live market trends, price movements, and investment metrics updated every 15 minutes from MLS feeds.',
    metrics: '15-min Updates',
  },
  {
    Icon: Shield,
    title: 'ML-Powered Valuations',
    description:
      'Advanced machine learning models provide accurate property valuations with 94% precision rating.',
    metrics: '94% Accuracy',
  },
  {
    Icon: Zap,
    title: 'Lightning-Fast API',
    description:
      'Sub-50ms response times with 99.9% uptime SLA and global CDN distribution for maximum performance.',
  },
  {
    Icon: Home,
    title: 'Historical Data Access',
    description:
      '20+ years of historical property transactions, price trends, and market cycles for deep analysis.',
  },
  {
    Icon: Shield,
    title: 'Enterprise Security',
    description:
      'SOC 2 Type II certified with end-to-end encryption, GDPR compliance, and role-based access control.',
  },
]

export default function RealEstatePage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <ProductHero {...heroData} />
      <FeaturesGrid
        title="Powerful Features for PropTech Innovation"
        subtitle="Everything you need to build next-generation real estate applications"
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
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  )
}
