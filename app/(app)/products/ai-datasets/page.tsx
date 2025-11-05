'use client'

import { Brain, Code2, Shield, Sparkles, TrendingUp, Zap } from 'lucide-react'

import { FeaturesGrid } from '../_components/features-grid'
import { FinalCTASection } from '../_components/final-cta-section'
import { ProductHero } from '../_components/product-hero'

const accentColor = '#EC4899'
const accentGlow = 'rgba(236, 72, 153, 0.15)'

export default function AIDataPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <ProductHero
        product="aiDatasets"
        headline="AI Training Datasets API"
        subheadline="Access 100,000+ production-ready datasets with 99% annotation accuracy and ethical sourcing"
        valueProps={[
          '100,000+ curated datasets across text, vision, audio',
          '99% annotation accuracy with human verification',
          'Ethical sourcing with full data provenance',
          'Synthetic data generation for edge cases',
        ]}
        primaryCTA="Start Free Trial"
        secondaryCTA="View Documentation"
        trustIndicators={[
          { Icon: Zap, text: '99% Accuracy' },
          { Icon: Shield, text: 'Ethical Sourcing' },
          { Icon: TrendingUp, text: 'Production Ready' },
        ]}
        accentColor={accentColor}
        accentGlow={accentGlow}
        accentGradient="from-pink-500/20 via-transparent to-transparent"
        visualElement={
          <div className="relative aspect-square w-full">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="h-full w-full" viewBox="0 0 400 400">
                <defs>
                  <radialGradient id="nodeGradient">
                    <stop offset="0%" stopColor="rgba(236,72,153,0.6)" />
                    <stop offset="100%" stopColor="rgba(236,72,153,0)" />
                  </radialGradient>
                </defs>
                {[
                  { x1: 100, y1: 100, x2: 200, y2: 200 },
                  { x1: 100, y1: 200, x2: 200, y2: 200 },
                  { x1: 100, y1: 300, x2: 200, y2: 200 },
                  { x1: 200, y1: 200, x2: 300, y2: 150 },
                  { x1: 200, y1: 200, x2: 300, y2: 250 },
                ].map((line, i) => (
                  <line
                    key={i}
                    x1={line.x1}
                    y1={line.y1}
                    x2={line.x2}
                    y2={line.y2}
                    stroke="rgba(236,72,153,0.3)"
                    strokeWidth="2"
                    className="animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
                {[
                  { x: 100, y: 100 },
                  { x: 100, y: 200 },
                  { x: 100, y: 300 },
                  { x: 200, y: 200 },
                  { x: 300, y: 150 },
                  { x: 300, y: 250 },
                ].map((node, i) => (
                  <g key={i}>
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r="8"
                      fill="url(#nodeGradient)"
                      className="animate-pulse"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r="4"
                      fill="rgba(236,72,153,1)"
                    />
                  </g>
                ))}
              </svg>
            </div>
            <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-4">
              {['Images', 'Text', 'Audio'].map((type, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-pink-500/30 bg-pink-500/20 px-4 py-2 backdrop-blur-sm"
                  style={{
                    animation: `slideIn 1s ease-out ${i * 0.2}s both`,
                  }}
                >
                  <div className="text-sm font-medium text-pink-400">
                    {type}
                  </div>
                  <div className="text-xs text-white/60">
                    {Math.floor(Math.random() * 900 + 100)}K samples
                  </div>
                </div>
              ))}
            </div>
          </div>
        }
      />
      <FeaturesGrid
        title="Enterprise AI Training Data at Scale"
        subtitle="Accelerate model development with production-ready datasets"
        features={[
          {
            Icon: Brain,
            title: 'Diverse Dataset Library',
            description:
              '100,000+ curated datasets spanning computer vision, NLP, speech recognition, and multimodal AI.',
            metrics: '100K+ Datasets',
          },
          {
            Icon: Sparkles,
            title: 'High-Quality Annotations',
            description:
              '99% annotation accuracy verified by domain experts with multi-stage quality control processes.',
            metrics: '99% Accuracy',
          },
          {
            Icon: Shield,
            title: 'Ethical Data Sourcing',
            description:
              'All datasets sourced ethically with proper consent, licensing, and full data provenance documentation.',
          },
          {
            Icon: Code2,
            title: 'Synthetic Data Generation',
            description:
              'AI-powered synthetic data creation for edge cases, rare events, and privacy-preserving scenarios.',
          },
          {
            Icon: TrendingUp,
            title: 'Custom Labeling Services',
            description:
              'Professional annotation teams for custom datasets with industry-specific expertise and quality guarantees.',
          },
          {
            Icon: Zap,
            title: 'API-First Delivery',
            description:
              'Stream datasets directly to your training pipeline via API with versioning and incremental updates.',
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
