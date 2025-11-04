'use client'

import { Building2, Home, Shield, TrendingUp, Zap } from 'lucide-react'

import { FAQSection } from '../_components/faq-section'
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

const pricingTiers = [
  {
    name: 'Starter',
    price: '$0',
    period: 'month',
    description: 'Perfect for developers getting started',
    requests: '1,000 API calls/month',
    features: [
      'Basic property data',
      'Standard API access',
      'Email support',
      'Community documentation',
    ],
    cta: 'Start Free',
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '$299',
    period: 'month',
    description: 'For growing PropTech applications',
    requests: '100,000 API calls/month',
    features: [
      'Full property data access',
      'Real-time market analytics',
      'Priority support (24/7)',
      'Custom webhooks',
      'Historical data (10 years)',
      'Advanced ML valuations',
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
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
]

const faqs = [
  {
    question: 'What geographic regions does your API cover?',
    answer:
      'Our Real Estate Data API covers 50+ markets globally, including the United States (all 50 states), Canada, United Kingdom, Australia, and major European markets. We provide comprehensive property data for residential, commercial, and land sectors in each region.',
  },
  {
    question: 'How frequently is the property data updated?',
    answer:
      'Property listings are updated every 15 minutes through direct MLS (Multiple Listing Service) integrations. Historical data, market trends, and analytics are refreshed daily. For enterprise clients, we offer real-time webhook notifications for specific property changes.',
  },
  {
    question: 'What is the accuracy rate of your ML-powered valuations?',
    answer:
      'Our machine learning valuation models achieve 94% accuracy within 5% of actual sale prices. These models are trained on 20+ years of historical transaction data and continuously refined with new market data. Accuracy varies by property type and market liquidity.',
  },
  {
    question: 'Do you offer historical property transaction data?',
    answer:
      'Yes, we provide access to 20+ years of historical property transactions, including sale prices, dates, buyer/seller information (where legally available), and property characteristics at the time of sale. Enterprise plans include unlimited historical data access.',
  },
  {
    question: 'Is the API compliant with data privacy regulations?',
    answer:
      'Absolutely. We are fully GDPR, CCPA, and PIPEDA compliant. All personal data is anonymized or requires explicit consent. We maintain SOC 2 Type II certification and undergo regular third-party security audits. Data encryption is enforced both in transit (TLS 1.3) and at rest (AES-256).',
  },
  {
    question: 'What authentication methods do you support?',
    answer:
      'We support API key authentication (for development), OAuth 2.0 (recommended for production), and JWT tokens. Enterprise clients can integrate with SSO providers (Okta, Auth0, Azure AD) and implement IP whitelisting for additional security.',
  },
  {
    question: 'Can I get property images and floor plans?',
    answer:
      'Yes, our API provides access to high-resolution property images, virtual tours, and floor plans where available. Image URLs are CDN-optimized for fast loading. Enterprise plans include unlimited image downloads and bulk image processing capabilities.',
  },
  {
    question: 'What are the API rate limits?',
    answer:
      'Rate limits vary by plan: Starter (10 requests/second), Professional (100 requests/second), Enterprise (negotiable). We use a sliding window algorithm for fair usage. Exceeding limits returns a 429 status code with retry-after headers.',
  },
  {
    question: 'Do you provide webhook notifications for property changes?',
    answer:
      'Yes, Professional and Enterprise plans include webhook support. You can subscribe to events like price changes, status updates, new listings, and sold properties. Webhooks are delivered via HTTPS POST with payload signatures for security verification.',
  },
  {
    question: 'Can I export bulk property data?',
    answer:
      'Enterprise clients have access to bulk data exports in CSV, JSON, or Parquet formats. Exports can be scheduled daily, weekly, or on-demand. We also support direct database replication for clients requiring real-time data warehousing.',
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
      <FAQSection faqs={faqs} accentColor={accentColor} />
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
