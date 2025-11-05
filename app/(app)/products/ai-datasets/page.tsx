'use client'

import {
  Brain,
  Code2,
  Shield,
  Sparkles,
  TrendingUp,
  Zap,
  Database,
  Image as ImageIcon,
  FileText,
  Mic,
  Layers,
  Users,
  CheckCircle2,
  Activity,
  Award,
  Lock,
  Bot,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { ProductHero } from '../_components/product-hero'
import StatsCard from '@/components/custom/stats-card'
import ProcessStep from '@/components/custom/process-step'
import UseCaseCard from '@/components/custom/use-case-card'
import TechFeatureCard from '@/components/custom/tech-feature-card'
import TrustBadge from '@/components/custom/trust-badge'
import { buttonVariants } from '@/components/ui/button'

const accentColor = '#EC4899'
const accentGlow = 'rgba(236, 72, 153, 0.15)'

export default function AIDataPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Enhanced Hero Section */}
      <div className="relative">
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

        {/* Trust Badges */}
        <div className="absolute bottom-10 left-0 right-0 z-20">
          <div className="container">
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
              <Image
                src="/images/companies/nvidia.svg"
                alt="NVIDIA"
                width={120}
                height={48}
                className="opacity-70 transition-opacity hover:opacity-100"
              />
              <Image
                src="/images/companies/siemens-healthineers.svg"
                alt="SIEMENS Healthineers"
                width={120}
                height={48}
                className="opacity-70 transition-opacity hover:opacity-100"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Why AI Datasets Section */}
      <div className="from-primary via-primary/95 to-background relative overflow-hidden bg-gradient-to-b py-16 lg:py-20">
        <div className="container">
          <div className="flex flex-col gap-20 lg:flex-row">
            <div className="w-full lg:w-1/2">
              <div className="mb-10 text-center lg:text-left">
                <p className="text-gray mb-3 text-sm tracking-wider uppercase">
                  WHY AI DATASETS
                </p>
                <h2 className="mb-6 text-[26px]/8 font-semibold sm:text-3xl lg:text-5xl/[60px]">
                  Your AI Training Data{' '}
                  <span className="from-pink-100 to-pink-500 bg-linear-to-l bg-clip-text text-transparent">
                    Advantage
                  </span>
                </h2>
              </div>

              <div className="text-gray mx-auto mb-12 max-w-4xl space-y-4 text-center lg:text-left">
                <p>
                  AI models are only as good as their training data. Manual
                  dataset curation takes months, annotation quality varies
                  wildly, and data licensing is a legal minefield.
                </p>
                <p className="text-lg font-semibold text-white">
                  What if you could access production-ready datasets with
                  verified quality—instantly?
                </p>
                <p>
                  PandoraLabs AI Datasets delivers 100,000+ curated datasets
                  with 99% annotation accuracy. From computer vision to NLP to
                  audio, get the training data you need to accelerate model
                  development by 10x.
                </p>
                <p>
                  No manual labeling. No quality concerns. No legal risks. Just
                  production-ready datasets that power better AI models, faster
                  than your competitors.
                </p>
              </div>

              {/* Stats Cards */}
              <div className="grid gap-6 md:grid-cols-3">
                <StatsCard
                  value="100K+"
                  label="Curated Datasets"
                  className="hover:border-pink-500/50 hover:shadow-pink-500/20"
                />
                <StatsCard
                  value="99%"
                  label="Annotation Accuracy"
                  className="hover:border-pink-500/50 hover:shadow-pink-500/20"
                />
                <StatsCard
                  value="10x"
                  label="Faster Development"
                  className="hover:border-pink-500/50 hover:shadow-pink-500/20"
                />
              </div>
            </div>

            {/* Visualization */}
            <div className="hidden w-full items-center justify-center lg:flex lg:w-1/2">
              <div className="relative h-[400px] w-[400px]">
                <div className="absolute inset-0 rounded-full bg-pink-500/10 blur-3xl"></div>
                <div className="relative flex h-full items-center justify-center">
                  <div className="grid grid-cols-3 gap-4">
                    {[ImageIcon, FileText, Mic, Database, Brain, Code2].map(
                      (Icon, i) => (
                        <div
                          key={i}
                          className="flex h-20 w-20 items-center justify-center rounded-2xl border border-pink-500/30 bg-pink-500/10 backdrop-blur-sm transition-all duration-500 hover:scale-110 hover:border-pink-500/60 hover:bg-pink-500/20"
                          style={{
                            animation: `float 3s ease-in-out ${i * 0.2}s infinite`,
                          }}
                        >
                          <Icon className="h-8 w-8 text-pink-400" />
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="from-background to-background relative overflow-hidden bg-gradient-to-b via-white/5 py-16 lg:py-20">
        <div className="from-pink-500/5 to-pink-500/5 absolute inset-0 bg-gradient-to-r via-transparent opacity-30"></div>
        <div className="relative z-10 container">
          <div className="mb-12 text-center">
            <p className="text-gray mb-3 text-sm tracking-wider uppercase">
              HOW IT WORKS
            </p>
            <h2 className="mb-4 text-[26px]/8 font-semibold sm:text-3xl lg:text-5xl/[60px]">
              From Search to Training —{' '}
              <span className="from-pink-100 to-pink-500 bg-linear-to-l bg-clip-text text-transparent">
                in Minutes
              </span>
            </h2>
            <p className="text-gray mx-auto max-w-2xl">
              No complex setup. No manual labeling. Just three simple steps to
              get production-ready training data.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <ProcessStep
              number="01"
              title="Search & Discover"
              description="Browse 100,000+ datasets by domain (computer vision, NLP, audio), modality, or specific use case. Advanced filtering helps you find exactly what you need."
              className="[&_div]:hover:border-pink-500/50 [&_div]:hover:shadow-pink-500/20 [&_.text-green-light]:text-pink-400 [&_.border-green-light\\/30]:border-pink-500/30 [&_.bg-green-light\\/10]:bg-pink-500/10 [&_.hover\\:border-green-light\\/60]:hover:border-pink-500/60 [&_.hover\\:bg-green-light\\/20]:hover:bg-pink-500/20 [&_.from-green-100]:from-pink-100 [&_.to-green-light]:to-pink-500 [&_.hover\\:text-green-light]:hover:text-pink-400"
            />
            <ProcessStep
              number="02"
              title="Quality Verification"
              description="Every dataset undergoes multi-stage quality control with human verification and AI validation. Review sample data, annotation quality, and metadata before commitment."
              className="[&_div]:hover:border-pink-500/50 [&_div]:hover:shadow-pink-500/20 [&_.text-green-light]:text-pink-400 [&_.border-green-light\\/30]:border-pink-500/30 [&_.bg-green-light\\/10]:bg-pink-500/10 [&_.hover\\:border-green-light\\/60]:hover:border-pink-500/60 [&_.hover\\:bg-green-light\\/20]:hover:bg-pink-500/20 [&_.from-green-100]:from-pink-100 [&_.to-green-light]:to-pink-500 [&_.hover\\:text-green-light]:hover:text-pink-400"
            />
            <ProcessStep
              number="03"
              title="Integrate & Train"
              description="Stream datasets directly to your ML pipeline via API, download in your preferred format, or integrate with popular frameworks. Start training immediately."
              className="[&_div]:hover:border-pink-500/50 [&_div]:hover:shadow-pink-500/20 [&_.text-green-light]:text-pink-400 [&_.border-green-light\\/30]:border-pink-500/30 [&_.bg-green-light\\/10]:bg-pink-500/10 [&_.hover\\:border-green-light\\/60]:hover:border-pink-500/60 [&_.hover\\:bg-green-light\\/20]:hover:bg-pink-500/20 [&_.from-green-100]:from-pink-100 [&_.to-green-light]:to-pink-500 [&_.hover\\:text-green-light]:hover:text-pink-400"
            />
          </div>

          {/* Timeline */}
          <div className="text-gray mt-10 flex items-center justify-center gap-4">
            <span className="rounded-full bg-white/5 px-4 py-2 font-medium transition-all duration-300 hover:bg-white/10">
              Start
            </span>
            <div className="bg-pink-500/30 shadow-pink-500/20 h-1 w-20 rounded-full shadow-lg"></div>
            <span className="from-pink-100 to-pink-500 bg-pink-500/10 animate-pulse rounded-full bg-linear-to-l bg-clip-text px-5 py-2.5 font-semibold text-transparent">
              Minutes to model training
            </span>
            <div className="bg-pink-500/30 shadow-pink-500/20 h-1 w-20 rounded-full shadow-lg"></div>
            <span className="rounded-full bg-white/5 px-4 py-2 font-medium transition-all duration-300 hover:bg-white/10">
              Data Ready
            </span>
          </div>
        </div>
      </div>

      {/* Dataset Categories Section */}
      <div className="from-background to-primary/20 relative overflow-hidden bg-gradient-to-b py-16 lg:py-20">
        <div className="from-pink-500/10 absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] via-transparent to-transparent"></div>
        <div className="relative z-10 container">
          <div className="mb-12 text-center">
            <p className="text-gray mb-3 text-sm tracking-wider uppercase">
              DATASET LIBRARY
            </p>
            <h2 className="mb-4 text-[26px]/8 font-semibold sm:text-3xl lg:text-5xl/[60px]">
              Every AI Modality.{' '}
              <span className="from-pink-100 to-pink-500 bg-linear-to-l bg-clip-text text-transparent">
                One Platform
              </span>
            </h2>
            <p className="text-gray mx-auto max-w-2xl">
              From computer vision to natural language processing, access
              production-ready datasets across all AI domains.
            </p>
          </div>

          <div className="mb-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <UseCaseCard
              icon={ImageIcon}
              title="Computer Vision Datasets"
              description="Object detection, semantic segmentation, facial recognition, pose estimation, and more. High-resolution images with pixel-perfect annotations for production vision models."
              className="hover:border-pink-500/50 hover:shadow-pink-500/20 [&_.text-green-light]:text-pink-400 [&_.bg-green-light\\/10]:bg-pink-500/10 [&_.hover\\:bg-green-light\\/20]:hover:bg-pink-500/20 [&_.hover\\:text-green-light]:hover:text-pink-400"
            />
            <UseCaseCard
              icon={FileText}
              title="Natural Language Processing"
              description="Text classification, sentiment analysis, named entity recognition, question answering, and translation. Multi-language datasets with linguistic annotations for NLP excellence."
              className="hover:border-pink-500/50 hover:shadow-pink-500/20 [&_.text-green-light]:text-pink-400 [&_.bg-green-light\\/10]:bg-pink-500/10 [&_.hover\\:bg-green-light\\/20]:hover:bg-pink-500/20 [&_.hover\\:text-green-light]:hover:text-pink-400"
            />
            <UseCaseCard
              icon={Mic}
              title="Speech & Audio"
              description="Speech recognition, speaker identification, audio classification, and voice synthesis. Professional-grade audio datasets with transcriptions and acoustic annotations."
              className="hover:border-pink-500/50 hover:shadow-pink-500/20 [&_.text-green-light]:text-pink-400 [&_.bg-green-light\\/10]:bg-pink-500/10 [&_.hover\\:bg-green-light\\/20]:hover:bg-pink-500/20 [&_.hover\\:text-green-light]:hover:text-pink-400"
            />
            <UseCaseCard
              icon={Layers}
              title="Multimodal AI"
              description="Cross-modal learning, image captioning, visual question answering, and audio-visual fusion. Aligned datasets for building sophisticated multimodal models."
              className="hover:border-pink-500/50 hover:shadow-pink-500/20 [&_.text-green-light]:text-pink-400 [&_.bg-green-light\\/10]:bg-pink-500/10 [&_.hover\\:bg-green-light\\/20]:hover:bg-pink-500/20 [&_.hover\\:text-green-light]:hover:text-pink-400"
            />
            <UseCaseCard
              icon={Sparkles}
              title="Synthetic Data Generation"
              description="AI-powered synthetic data creation for edge cases, rare events, and privacy-preserving scenarios. Balance datasets and augment training with high-fidelity synthetic samples."
              className="hover:border-pink-500/50 hover:shadow-pink-500/20 [&_.text-green-light]:text-pink-400 [&_.bg-green-light\\/10]:bg-pink-500/10 [&_.hover\\:bg-green-light\\/20]:hover:bg-pink-500/20 [&_.hover\\:text-green-light]:hover:text-pink-400"
            />
            <UseCaseCard
              icon={Users}
              title="Custom Labeling Services"
              description="Professional annotation teams with industry-specific expertise. Custom dataset creation with quality guarantees and domain expert verification for your unique use cases."
              className="hover:border-pink-500/50 hover:shadow-pink-500/20 [&_.text-green-light]:text-pink-400 [&_.bg-green-light\\/10]:bg-pink-500/10 [&_.hover\\:bg-green-light\\/20]:hover:bg-pink-500/20 [&_.hover\\:text-green-light]:hover:text-pink-400"
            />
          </div>

          <div className="text-center">
            <p className="text-gray mb-4">
              Need a specific dataset type? Our team can source or create
              custom datasets for your requirements.
            </p>
            <Link href="/contact" className={buttonVariants()}>
              Request Custom Dataset →
            </Link>
          </div>
        </div>
      </div>

      {/* Quality & Technology Section */}
      <div className="from-primary/20 to-background relative overflow-hidden bg-gradient-to-b via-white/5 py-16 lg:py-20">
        <div className="to-pink-500/5 absolute inset-0 bg-gradient-to-br from-pink-100/5 via-transparent"></div>
        <div className="relative z-10 container">
          <div className="mb-12 text-center">
            <p className="text-gray mb-3 text-sm tracking-wider uppercase">
              QUALITY & TECHNOLOGY
            </p>
            <h2 className="mb-4 text-[26px]/8 font-semibold sm:text-3xl lg:text-5xl/[60px]">
              Built for{' '}
              <span className="from-pink-100 to-pink-500 bg-linear-to-l bg-clip-text text-transparent">
                Production AI Models
              </span>
            </h2>
            <p className="text-gray mx-auto max-w-2xl">
              When your AI models depend on training data quality, you can&apos;t
              afford errors, bias, or legal risks. PandoraLabs datasets are
              built to production standards.
            </p>
          </div>

          <div className="mb-12 grid gap-8 md:grid-cols-3">
            <TechFeatureCard
              icon={Shield}
              title="Multi-Stage Quality Control"
              description="Human verification combined with AI validation ensures 99% annotation accuracy. Every dataset undergoes rigorous quality checks before release."
              className="[&_.text-green-light]:text-pink-400 [&_.bg-green-light\\/10]:bg-pink-500/10 [&_.hover\\:bg-green-light\\/20]:hover:bg-pink-500/20 [&_.hover\\:shadow-green-light\\/30]:hover:shadow-pink-500/30 [&_.hover\\:text-green-light]:hover:text-pink-400"
            />
            <TechFeatureCard
              icon={Lock}
              title="Ethical Data Sourcing"
              description="Full provenance tracking and consent documentation for every dataset. GDPR and CCPA compliant with transparent data licensing and usage rights."
              className="[&_.text-green-light]:text-pink-400 [&_.bg-green-light\\/10]:bg-pink-500/10 [&_.hover\\:bg-green-light\\/20]:hover:bg-pink-500/20 [&_.hover\\:shadow-green-light\\/30]:hover:shadow-pink-500/30 [&_.hover\\:text-green-light]:hover:text-pink-400"
            />
            <TechFeatureCard
              icon={Bot}
              title="Version Control & Updates"
              description="Incremental dataset updates with backward compatibility. Track data versions, maintain reproducibility, and evolve datasets as your models improve."
              className="[&_.text-green-light]:text-pink-400 [&_.bg-green-light\\/10]:bg-pink-500/10 [&_.hover\\:bg-green-light\\/20]:hover:bg-pink-500/20 [&_.hover\\:shadow-green-light\\/30]:hover:shadow-pink-500/30 [&_.hover\\:text-green-light]:hover:text-pink-400"
            />
          </div>

          {/* Tech Stats */}
          <div className="grid gap-6 md:grid-cols-4">
            <StatsCard
              value="99%"
              label="Accuracy"
              className="hover:border-pink-500/50 hover:shadow-pink-500/20"
            />
            <StatsCard
              value="100K+"
              label="Datasets"
              className="hover:border-pink-500/50 hover:shadow-pink-500/20"
            />
            <StatsCard
              value="10M+"
              label="Samples"
              className="hover:border-pink-500/50 hover:shadow-pink-500/20"
            />
            <StatsCard
              value="50+"
              label="Domains"
              className="hover:border-pink-500/50 hover:shadow-pink-500/20"
            />
          </div>
        </div>
      </div>

      {/* Enterprise & Trust Section */}
      <div className="from-background to-primary/10 relative overflow-hidden bg-gradient-to-b py-16 lg:py-20">
        <div className="from-pink-500/10 absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] via-transparent to-transparent"></div>
        <div className="relative z-10 container">
          <div className="mb-12 text-center">
            <p className="text-gray mb-3 text-sm tracking-wider uppercase">
              TRUSTED BY AI TEAMS
            </p>
            <h2 className="mb-4 text-[26px]/8 font-semibold sm:text-3xl lg:text-5xl/[60px]">
              Powering Models at{' '}
              <span className="from-pink-100 to-pink-500 bg-linear-to-l bg-clip-text text-transparent">
                Leading Organizations
              </span>
            </h2>
            <p className="text-gray mx-auto mb-8 max-w-2xl">
              From research labs to production AI teams, organizations trust
              PandoraLabs datasets for model development.
            </p>
          </div>

          {/* Testimonials */}
          <div className="mb-12 grid gap-6 md:grid-cols-3">
            <div className="group hover:border-pink-500/50 hover:shadow-pink-500/20 rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:bg-white/10 hover:shadow-2xl">
              <div className="mb-4">
                <div className="text-pink-400 mb-2 text-2xl">🔬</div>
                <h4 className="mb-1 font-semibold text-white">
                  AI Research Lab
                </h4>
                <p className="text-gray/80 text-sm">University Medical Center</p>
              </div>
              <p className="text-gray leading-relaxed">
                &quot;PandoraLabs datasets reduced our model training time by 60%.
                The annotation quality is exceptional—better than our in-house
                labeling.&quot;
              </p>
            </div>

            <div className="group hover:border-pink-500/50 hover:shadow-pink-500/20 rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:bg-white/10 hover:shadow-2xl">
              <div className="mb-4">
                <div className="text-pink-400 mb-2 text-2xl">🚀</div>
                <h4 className="mb-1 font-semibold text-white">
                  Computer Vision Startup
                </h4>
                <p className="text-gray/80 text-sm">Series A Company</p>
              </div>
              <p className="text-gray leading-relaxed">
                &quot;We achieved production-ready models in 3 months instead of 12.
                Access to diverse, high-quality datasets was a game changer for
                our launch.&quot;
              </p>
            </div>

            <div className="group hover:border-pink-500/50 hover:shadow-pink-500/20 rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:bg-white/10 hover:shadow-2xl">
              <div className="mb-4">
                <div className="text-pink-400 mb-2 text-2xl">🏢</div>
                <h4 className="mb-1 font-semibold text-white">
                  Enterprise ML Team
                </h4>
                <p className="text-gray/80 text-sm">Fortune 500 Tech Company</p>
              </div>
              <p className="text-gray leading-relaxed">
                &quot;The custom labeling service delivered exactly what we needed.
                Domain experts annotated our specialized dataset with 99.5%
                accuracy.&quot;
              </p>
            </div>
          </div>

          {/* Enterprise Features */}
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="group hover:border-pink-500/50 hover:shadow-pink-500/20 rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:bg-white/10 hover:shadow-2xl">
                <div className="mb-4 flex items-center gap-3">
                  <div className="bg-pink-500/10 group-hover:bg-pink-500/20 flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110">
                    <Database className="text-pink-400 h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="group-hover:text-pink-400 text-lg font-semibold text-white transition-colors duration-300">
                    Custom Dataset Creation
                  </h3>
                </div>
                <p className="text-gray group-hover:text-gray/90 leading-relaxed transition-colors duration-300">
                  Need something unique? Our annotation teams create custom
                  datasets tailored to your specific requirements with quality
                  guarantees.
                </p>
              </div>

              <div className="group hover:border-pink-500/50 hover:shadow-pink-500/20 rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:bg-white/10 hover:shadow-2xl">
                <div className="mb-4 flex items-center gap-3">
                  <div className="bg-pink-500/10 group-hover:bg-pink-500/20 flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110">
                    <Activity className="text-pink-400 h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="group-hover:text-pink-400 text-lg font-semibold text-white transition-colors duration-300">
                    Dedicated Support & SLAs
                  </h3>
                </div>
                <p className="text-gray group-hover:text-gray/90 leading-relaxed transition-colors duration-300">
                  Enterprise-grade support with guaranteed response times.
                  Direct access to our data science team via Slack or Teams.
                </p>
              </div>

              <div className="group hover:border-pink-500/50 hover:shadow-pink-500/20 rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:bg-white/10 hover:shadow-2xl">
                <div className="mb-4 flex items-center gap-3">
                  <div className="bg-pink-500/10 group-hover:bg-pink-500/20 flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110">
                    <CheckCircle2 className="text-pink-400 h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="group-hover:text-pink-400 text-lg font-semibold text-white transition-colors duration-300">
                    On-Premise Deployment
                  </h3>
                </div>
                <p className="text-gray group-hover:text-gray/90 leading-relaxed transition-colors duration-300">
                  GDPR, CCPA, HIPAA-ready deployments. Self-hosted options
                  available for organizations with strict data residency
                  requirements.
                </p>
              </div>
            </div>

            {/* API Integration Preview */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md rounded-2xl border border-pink-500/30 bg-[#1a1a1a] p-6 shadow-2xl shadow-pink-500/20">
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="ml-auto text-xs text-gray">
                    API Integration
                  </span>
                </div>
                <div className="space-y-2 font-mono text-sm">
                  <div>
                    <span className="text-pink-400">import</span>{' '}
                    <span className="text-white">pandora</span>
                  </div>
                  <div className="text-gray"># Initialize API</div>
                  <div>
                    <span className="text-white">client = </span>
                    <span className="text-blue-400">pandora</span>
                    <span className="text-white">.Client()</span>
                  </div>
                  <div className="mt-4 text-gray"># Load dataset</div>
                  <div>
                    <span className="text-white">dataset = client.</span>
                    <span className="text-yellow-400">load</span>
                    <span className="text-white">(</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-green-400">&quot;coco-detection&quot;</span>
                    <span className="text-white">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-white">split=</span>
                    <span className="text-green-400">&quot;train&quot;</span>
                  </div>
                  <div>
                    <span className="text-white">)</span>
                  </div>
                  <div className="mt-4 text-gray"># Stream to pipeline</div>
                  <div>
                    <span className="text-pink-400">for</span>{' '}
                    <span className="text-white">batch</span>{' '}
                    <span className="text-pink-400">in</span>{' '}
                    <span className="text-white">dataset:</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-white">model.</span>
                    <span className="text-yellow-400">train</span>
                    <span className="text-white">(batch)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="from-primary/10 to-primary relative overflow-hidden bg-gradient-to-b via-white/5 py-16 lg:py-20">
        <div className="from-pink-500/10 absolute inset-0 bg-gradient-to-t via-transparent to-transparent"></div>
        <div className="relative z-10 container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-[26px]/8 font-semibold sm:text-3xl lg:text-5xl/[60px]">
              Start Building Better AI Models{' '}
              <span className="from-pink-100 to-pink-500 bg-linear-to-l bg-clip-text text-transparent">
                Today
              </span>
            </h2>
            <p className="text-gray mb-8 text-lg">
              While your competitors spend months curating datasets, you could
              be training production models with verified, high-quality data.
              Start free. No credit card required.
            </p>

            <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/request" className={buttonVariants({ size: 'lg' })}>
                Start Free Trial →
              </Link>
              <Link
                href="/docs"
                className={buttonVariants({ variant: 'outline', size: 'lg' })}
              >
                View Documentation
              </Link>
            </div>

            {/* Trust Elements */}
            <div className="mb-4 space-y-3">
              <div className="flex flex-wrap items-center justify-center gap-4">
                <TrustBadge
                  icon={Shield}
                  text="SOC 2 Type II Certified"
                  className="hover:border-pink-500/50 hover:shadow-pink-500/20 [&_.text-green-light]:text-pink-400"
                />
                <TrustBadge
                  icon={CheckCircle2}
                  text="GDPR Compliant"
                  className="hover:border-pink-500/50 hover:shadow-pink-500/20 [&_.text-green-light]:text-pink-400"
                />
                <TrustBadge
                  icon={Activity}
                  text="99.9% Uptime SLA"
                  className="hover:border-pink-500/50 hover:shadow-pink-500/20 [&_.text-green-light]:text-pink-400"
                />
              </div>
              <div className="text-gray space-y-1 text-sm">
                <p>✓ Free tier with 10GB sample datasets</p>
                <p>✓ No credit card required to explore</p>
                <p>✓ Cancel anytime, no long-term contracts</p>
              </div>
            </div>

            <p className="text-gray text-sm">
              Trusted by AI teams at NVIDIA, Siemens Healthineers, and research
              labs worldwide
            </p>
          </div>
        </div>
      </div>

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
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  )
}
