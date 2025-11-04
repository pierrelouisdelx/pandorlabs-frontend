'use client'

import {
  Shield,
  ShoppingCart,
  TrendingDown,
  TrendingUp,
  Zap,
} from 'lucide-react'

import { FAQSection } from '../_components/faq-section'
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

      <FAQSection
        faqs={[
          {
            question: 'Which e-commerce platforms do you monitor?',
            answer:
              'We monitor 50+ marketplaces including Amazon (all regions), eBay, Walmart, Shopify stores, WooCommerce, Etsy, AliExpress, and major regional platforms. Enterprise clients can request custom marketplace integrations.',
          },
          {
            question:
              'How accurate is your product matching across different sellers?',
            answer:
              'Our AI-powered matching achieves 98% accuracy using computer vision (image recognition), NLP (title/description analysis), and attribute matching (UPC, EAN, ASIN). False positives are under 2%, and you can manually review and adjust matches.',
          },
          {
            question: 'How frequently are prices updated?',
            answer:
              'Professional plans update every 15 minutes. Starter plans update daily. Enterprise plans offer real-time monitoring with instant webhook notifications for price changes, stock updates, and new competitor listings.',
          },
          {
            question: 'Can I track stock availability in addition to prices?',
            answer:
              'Yes, we monitor stock status (in stock, out of stock, low stock) alongside prices. You can set alerts for stock changes, back-in-stock notifications, and inventory trends across all monitored competitors.',
          },
          {
            question: 'How does MAP violation detection work?',
            answer:
              'You define your MAP (Minimum Advertised Price) policies per product or product category. Our system continuously monitors all sellers and triggers alerts when listings violate your MAP rules. Reports include seller details, violation screenshots, and historical evidence.',
          },
          {
            question: 'Can I monitor international marketplaces?',
            answer:
              'Yes, we support Amazon (US, UK, DE, FR, ES, IT, CA, JP, AU), eBay (25+ countries), and regional platforms in Europe, Asia, and Latin America. Prices are automatically converted to your preferred currency with real-time exchange rates.',
          },
          {
            question: 'Do you provide historical price data?',
            answer:
              'Professional plans include 2 years of historical pricing. Enterprise plans get unlimited history. Historical data includes price points, stock status, seller changes, and promotional periods. Data is exportable in CSV or JSON formats.',
          },
          {
            question: 'How do webhook notifications work?',
            answer:
              'Webhooks send HTTPS POST requests to your endpoint when monitored events occur (price change, stock update, new seller, MAP violation). Payloads include product details, old/new values, and timestamp. Webhooks are signed for security verification.',
          },
          {
            question: 'Can I automate repricing based on competitor data?',
            answer:
              'While we provide the data, you implement repricing logic. Our API returns competitor prices in real-time, enabling you to build dynamic repricing algorithms. Enterprise plans include integration support for popular repricing tools.',
          },
          {
            question: 'What is your data retention policy?',
            answer:
              'Historical data is retained for the duration specified in your plan (2 years for Professional, unlimited for Enterprise). After plan downgrade or cancellation, data is retained for 90 days before permanent deletion. Exports are recommended for long-term storage.',
          },
        ]}
        accentColor={accentColor}
      />
      <FinalCTASection accentColor={accentColor} accentGlow={accentGlow} />
    </div>
  )
}
