'use client'

import {
  CheckCircle2,
  MessageSquare,
  Shield,
  TrendingUp,
  UserCheck,
  Users,
  Zap,
} from 'lucide-react'

import { FeaturesGrid } from '../_components/features-grid'
import { FinalCTASection } from '../_components/final-cta-section'
import { ProductHero } from '../_components/product-hero'

const accentColor = '#10B981'
const accentGlow = 'rgba(16, 185, 129, 0.15)'

export default function LeadGenerationPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <ProductHero
        product="leadGen"
        headline="Lead Generation Data API"
        subheadline="Access 321M+ verified B2B contacts with 95% email accuracy and GDPR compliance"
        valueProps={[
          '321M+ verified business contacts worldwide',
          '95% email accuracy with real-time verification',
          'AI-powered lead enrichment and scoring',
          'GDPR & CCPA compliant data sourcing',
        ]}
        primaryCTA="Start Free Trial"
        secondaryCTA="View Documentation"
        trustIndicators={[
          { Icon: Zap, text: '99.9% Uptime' },
          { Icon: Shield, text: 'GDPR Compliant' },
          { Icon: TrendingUp, text: 'Real-time Verification' },
        ]}
        accentColor={accentColor}
        accentGlow={accentGlow}
        accentGradient="from-emerald-500/20 via-transparent to-transparent"
        visualElement={
          <div className="relative aspect-square w-full">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-8">
              {[
                {
                  width: '100%',
                  label: 'Prospects',
                  count: '10,000',
                  Icon: Users,
                },
                {
                  width: '70%',
                  label: 'Qualified',
                  count: '7,000',
                  Icon: UserCheck,
                },
                {
                  width: '40%',
                  label: 'Engaged',
                  count: '4,000',
                  Icon: MessageSquare,
                },
                {
                  width: '20%',
                  label: 'Converted',
                  count: '2,000',
                  Icon: CheckCircle2,
                },
              ].map((stage, i) => (
                <div
                  key={i}
                  className="relative flex items-center justify-between rounded-lg border border-emerald-500/30 bg-gradient-to-r from-emerald-500/20 to-transparent p-4"
                  style={{
                    width: stage.width,
                    animation: `slideIn 1s ease-out ${i * 0.2}s both`,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <stage.Icon className="h-6 w-6 text-emerald-400" />
                    <span className="font-semibold text-white">
                      {stage.label}
                    </span>
                  </div>
                  <span className="font-bold text-emerald-400">
                    {stage.count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        }
      />
      <FeaturesGrid
        title="B2B Lead Intelligence at Scale"
        subtitle="Everything you need to power your sales and marketing teams"
        features={[
          {
            Icon: Users,
            title: 'Verified Contact Database',
            description:
              '321M+ business contacts with direct dial phones, verified emails, and social profiles across all industries.',
            metrics: '321M+ Contacts',
          },
          {
            Icon: Shield,
            title: 'Email Verification',
            description:
              'Real-time email verification with 95% accuracy guarantee. Reduce bounces and protect sender reputation.',
            metrics: '95% Accuracy',
          },
          {
            Icon: TrendingUp,
            title: 'AI Lead Scoring',
            description:
              'Machine learning models analyze firmographics, technographics, and intent signals for lead prioritization.',
          },
          {
            Icon: Zap,
            title: 'Real-Time Enrichment',
            description:
              'Instantly enrich partial contact data with 40+ attributes including job title, company size, and revenue.',
          },
          {
            Icon: UserCheck,
            title: 'Company Intelligence',
            description:
              'Deep firmographic data including funding, technologies used, employee count, and growth signals.',
          },
          {
            Icon: Shield,
            title: 'GDPR Compliance',
            description:
              'All data sourced through GDPR-compliant methods with consent tracking and right-to-erasure support.',
          },
        ]}
        accentColor={accentColor}
        accentGlow={accentGlow}
      />
      <FinalCTASection accentColor={accentColor} accentGlow={accentGlow} />

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  )
}
