'use client'

import { Bitcoin, Shield, TrendingUp, Zap } from 'lucide-react'

import { FAQSection } from '../_components/faq-section'
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

      <FAQSection
        faqs={[
          {
            question: 'Which cryptocurrency exchanges do you cover?',
            answer:
              'We aggregate data from 400+ exchanges including Binance, Coinbase, Kraken, Bybit, OKX, Huobi, KuCoin, and all major DEXs (Uniswap, PancakeSwap, SushiSwap). Coverage includes spot, futures, perpetuals, and options markets.',
          },
          {
            question: 'What is the latency for real-time price feeds?',
            answer:
              'Our WebSocket connections deliver tick-by-tick updates with <50ms latency from exchange to your application. REST API responses average 35ms globally via our edge network. Enterprise clients can colocate for single-digit millisecond latency.',
          },
          {
            question: 'Do you provide order book data?',
            answer:
              'Yes, Professional and Enterprise plans include full order book depth (up to 1,000 levels) with real-time updates. We provide snapshots and incremental updates via WebSocket for efficient bandwidth usage.',
          },
          {
            question: 'How far back does your historical data go?',
            answer:
              'Historical trade data extends to 2010 for Bitcoin and to launch dates for all other cryptocurrencies. Professional plans get 5 years, Enterprise gets unlimited. Data includes OHLCV, trades, order books, and funding rates (for perpetuals).',
          },
          {
            question:
              'Can I access blockchain data in addition to market prices?',
            answer:
              'Yes, our multi-chain analytics cover Bitcoin, Ethereum, Solana, Polygon, BSC, and 50+ chains. Access transaction data, wallet balances, smart contract events, gas prices, and on-chain metrics through the same unified API.',
          },
          {
            question: 'What authentication methods do you support?',
            answer:
              'We support API key authentication (HMAC-SHA256 signing), OAuth 2.0, and JWT tokens. Enterprise clients can implement IP whitelisting, mTLS certificates, and SSO integration for enhanced security.',
          },
          {
            question: 'Do you offer data normalization across exchanges?',
            answer:
              'Absolutely. We normalize all data to consistent formats: standardized symbol naming (BTC-USD vs BTCUSD), unified timestamps (Unix milliseconds), and harmonized order book schemas. This eliminates integration complexity.',
          },
          {
            question: 'What is your uptime SLA?',
            answer:
              'Professional plans have 99.9% uptime SLA, Enterprise plans get 99.99%. We maintain redundant infrastructure across multiple cloud regions with automatic failover. Historical uptime is 99.98% over the past 12 months.',
          },
          {
            question: 'Can I backtest trading strategies with your data?',
            answer:
              'Yes, our historical data is tick-accurate and suitable for backtesting. Enterprise plans include a dedicated backtesting environment with low-latency access to historical order books and trade data. We support minute, hourly, and daily aggregations.',
          },
          {
            question: 'Are you compliant with financial regulations?',
            answer:
              'We maintain compliance with GDPR, MiFID II (for EU), and provide data lineage documentation for SEC/CFTC reporting. Our data sourcing is transparent, and we offer audit trails for all API access. We work with institutional clients requiring regulatory oversight.',
          },
        ]}
        accentColor={accentColor}
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
