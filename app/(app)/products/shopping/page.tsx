'use client'

import {
  Shield,
  ShoppingCart,
  TrendingDown,
  TrendingUp,
  Zap,
} from 'lucide-react'

import { FeaturesGrid } from '../_components/features-grid'
import { FinalCTASection } from '../_components/final-cta-section'
import { ProductHero } from '../_components/product-hero'

const accentColor = '#F59E0B'
const accentGlow = 'rgba(245, 158, 11, 0.15)'

export default function ShoppingMonitoringPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <ProductHero
        product="shopping"
        headline="E-commerce Price Monitoring API"
        subheadline="Track 30.7M+ stores with 98% AI product matching and 15-minute price updates"
        valueProps={[
          '30.7M+ stores monitored across 50+ marketplaces',
          '98% AI-powered product matching accuracy',
          '15-minute price update frequency',
          'Automated MAP violation alerts',
        ]}
        primaryCTA="Start Free Trial"
        secondaryCTA="View Documentation"
        trustIndicators={[
          { Icon: Zap, text: '15-min Updates' },
          { Icon: Shield, text: 'Enterprise Security' },
          { Icon: TrendingUp, text: 'Real-time Alerts' },
        ]}
        accentColor={accentColor}
        accentGlow={accentGlow}
        accentGradient="from-amber-500/20 via-transparent to-transparent"
        visualElement={
          <div className="relative aspect-square w-full">
            <div className="relative rounded-2xl border border-amber-500/20 bg-gradient-to-b from-amber-500/10 to-transparent p-6">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingDown className="h-5 w-5 text-amber-400" />
                  <span className="font-semibold">Price Tracking</span>
                </div>
                <div className="font-bold text-amber-400">-23%</div>
              </div>
              <svg
                className="h-3/4 w-full"
                viewBox="0 0 400 200"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id="chartGradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="rgba(245,158,11,0.4)" />
                    <stop offset="100%" stopColor="rgba(245,158,11,0)" />
                  </linearGradient>
                </defs>
                <path
                  d="M 0 100 L 50 80 L 100 90 L 150 70 L 200 85 L 250 60 L 300 75 L 350 50 L 400 65 L 400 200 L 0 200 Z"
                  fill="url(#chartGradient)"
                />
                <path
                  d="M 0 100 L 50 80 L 100 90 L 150 70 L 200 85 L 250 60 L 300 75 L 350 50 L 400 65"
                  stroke="rgba(245,158,11,1)"
                  strokeWidth="3"
                  fill="none"
                  className="animate-pulse"
                />
              </svg>
              <div className="mt-4 flex justify-between text-sm text-white/60">
                <span>Jan</span>
                <span>Mar</span>
                <span>May</span>
                <span>Jul</span>
              </div>
            </div>
          </div>
        }
      />
      <FeaturesGrid
        title="Comprehensive E-commerce Intelligence"
        subtitle="Monitor competitors and optimize pricing strategies in real-time"
        features={[
          {
            Icon: ShoppingCart,
            title: 'Multi-Marketplace Coverage',
            description:
              'Track prices across Amazon, eBay, Walmart, Shopify, and 50+ marketplaces with unified API access.',
            metrics: '50+ Marketplaces',
          },
          {
            Icon: TrendingUp,
            title: 'Real-Time Price Tracking',
            description:
              'Monitor competitor prices with 15-minute refresh cycles. Get instant alerts for price changes and stock updates.',
            metrics: '15-min Updates',
          },
          {
            Icon: Shield,
            title: 'MAP Violation Detection',
            description:
              'Automated monitoring for Minimum Advertised Price violations with instant notifications and reporting.',
          },
          {
            Icon: Zap,
            title: 'AI Product Matching',
            description:
              '98% accuracy in matching products across different sellers using computer vision and NLP algorithms.',
            metrics: '98% Accuracy',
          },
          {
            Icon: TrendingDown,
            title: 'Price History Analytics',
            description:
              'Historical price data with trend analysis, seasonality detection, and predictive pricing recommendations.',
          },
          {
            Icon: Shield,
            title: 'Brand Protection',
            description:
              'Monitor unauthorized sellers, counterfeit listings, and trademark violations across all marketplaces.',
          },
        ]}
        accentColor={accentColor}
        accentGlow={accentGlow}
      />
      <FinalCTASection accentColor={accentColor} accentGlow={accentGlow} />
    </div>
  )
}
