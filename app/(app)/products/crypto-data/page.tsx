'use client'

import { Bitcoin, Shield, TrendingUp, Zap } from 'lucide-react'

import { FeaturesGrid } from '../_components/features-grid'
import { FinalCTASection } from '../_components/final-cta-section'
import { ProductHero } from '../_components/product-hero'

const accentColor = '#8B5CF6'
const accentGlow = 'rgba(139, 92, 246, 0.15)'

export default function CryptoDataPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <ProductHero
        product="crypto"
        headline="Cryptocurrency Market Data API"
        subheadline="Access real-time crypto prices from 400+ exchanges with <50ms latency and institutional-grade reliability"
        valueProps={[
          '10,000+ cryptocurrencies across 400+ exchanges',
          '<50ms latency with WebSocket support',
          'SOC 2 certified institutional infrastructure',
          'Unified multi-chain blockchain analytics',
        ]}
        primaryCTA="Start Free Trial"
        secondaryCTA="View Documentation"
        trustIndicators={[
          { Icon: Zap, text: '<50ms Latency' },
          { Icon: Shield, text: 'SOC 2 Certified' },
          { Icon: TrendingUp, text: 'Real-time Data' },
        ]}
        accentColor={accentColor}
        accentGlow={accentGlow}
        accentGradient="from-violet-500/20 via-transparent to-transparent"
        visualElement={
          <div className="relative aspect-square w-full">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative h-full w-full">
                {[
                  {
                    coin: 'BTC',
                    price: '$67,234',
                    change: '+5.2%',
                    x: '20%',
                    y: '25%',
                    delay: '0s',
                  },
                  {
                    coin: 'ETH',
                    price: '$3,456',
                    change: '+3.8%',
                    x: '60%',
                    y: '20%',
                    delay: '0.3s',
                  },
                  {
                    coin: 'SOL',
                    price: '$98.50',
                    change: '+7.1%',
                    x: '40%',
                    y: '60%',
                    delay: '0.6s',
                  },
                ].map((crypto, i) => (
                  <div
                    key={i}
                    className="absolute rounded-xl border border-violet-500/30 bg-gradient-to-br from-violet-500/20 to-transparent p-4 backdrop-blur-sm"
                    style={{
                      left: crypto.x,
                      top: crypto.y,
                      animation: `float 3s ease-in-out infinite`,
                      animationDelay: crypto.delay,
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-500/30">
                        <Bitcoin className="h-6 w-6 text-violet-400" />
                      </div>
                      <div>
                        <div className="text-xs text-white/60">
                          {crypto.coin}
                        </div>
                        <div className="text-sm font-bold">{crypto.price}</div>
                        <div className="text-xs text-emerald-400">
                          {crypto.change}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        }
      />
      <FeaturesGrid
        title="Institutional-Grade Crypto Market Data"
        subtitle="Power trading platforms and analytics with enterprise reliability"
        features={[
          {
            Icon: Bitcoin,
            title: 'Comprehensive Coverage',
            description:
              '10,000+ cryptocurrencies from 400+ exchanges with tick-by-tick trade data and order book depth.',
            metrics: '400+ Exchanges',
          },
          {
            Icon: Zap,
            title: 'Ultra-Low Latency',
            description:
              'Sub-50ms response times via global CDN and WebSocket connections for real-time price feeds.',
            metrics: '<50ms Latency',
          },
          {
            Icon: Shield,
            title: 'Institutional Security',
            description:
              'SOC 2 Type II certified with 99.99% uptime SLA, DDoS protection, and encrypted data transmission.',
          },
          {
            Icon: TrendingUp,
            title: 'Multi-Chain Analytics',
            description:
              'Unified blockchain data across Bitcoin, Ethereum, Solana, and 50+ chains with transaction tracking.',
          },
          {
            Icon: Bitcoin,
            title: 'Historical Data',
            description:
              'Full historical trade data dating back to 2010 with minute-level granularity for backtesting.',
          },
          {
            Icon: Shield,
            title: 'Regulatory Compliance',
            description:
              'GDPR, MiFID II, and SEC compliance support with audit trails and data lineage documentation.',
          },
        ]}
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
