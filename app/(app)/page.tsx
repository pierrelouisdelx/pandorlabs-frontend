import StatsCard from '@/components/custom/stats-card'
import ProcessStep from '@/components/custom/process-step'
import UseCaseCard from '@/components/custom/use-case-card'
import TechFeatureCard from '@/components/custom/tech-feature-card'
import TerminalMock from '@/components/custom/terminal-mock'
import DashboardPreview from '@/components/custom/dashboard-preview'
import TrustBadge from '@/components/custom/trust-badge'
import { buttonVariants } from '@/components/ui/button'
import HeroSearchInput from '@/components/custom/hero-search-input'
import helper from '@/lib/helper'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Shield,
  Target,
  Search,
  Users,
  Scale,
  Radio,
  Bot,
  Lock,
  Zap,
  Award,
  CheckCircle2,
  Activity,
} from 'lucide-react'

export const metadata: Metadata = {
  title:
    'PandoraLabs | AI-Powered Data Intelligence Platform with Autonomous Agents',
  description:
    'Autonomous AI agents that extract data from any website automatically. No coding, no maintenance. From question to dataset in minutes with intelligent web scraping.',
  openGraph: {
    ...helper.openGraphData,
    title: 'PandoraLabs | AI-Powered Data Intelligence Platform',
    description:
      'Autonomous AI agents that extract data from any website automatically. No coding, no maintenance. From question to dataset in minutes.',
    url: process.env.NEXT_PUBLIC_APP_URL,
    type: 'website',
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_APP_URL,
  },
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative -mt-24 flex min-h-screen items-center bg-[url(/images/hero-section.png)] bg-cover bg-center bg-no-repeat pt-24">
        <span className="from-primary to-primary/20 absolute inset-0 z-5 bg-linear-to-t"></span>
        <div className="cursor-effect-section relative z-5 container w-full py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="relative mb-6 text-[32px]/tight font-bold tracking-tight sm:text-5xl lg:text-7xl/tight">
              Market Intelligence, <br />
              <span className="to-green-light bg-linear-to-l from-green-100 bg-clip-text text-transparent drop-shadow-lg">
                On Demand
              </span>
            </h1>
            <p className="text-gray mx-auto mb-10 max-w-2xl text-lg leading-relaxed sm:text-xl">
              Autonomous AI-powered data extraction that replaces weeks of
              manual work. Just describe what you need—our agents handle
              authentication, parsing, and delivery.
            </p>

            <HeroSearchInput />

            {/* Trust Badges */}
            <div className="mt-20">
              <p className="mb-8 text-center text-lg font-semibold text-white/90 uppercase">
                Trusted by Industry Leaders
              </p>
              <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-16">
                <Image
                  src="/images/companies/avian.svg"
                  alt="SIEMENS"
                  width={198}
                  height={79}
                />
                <Image
                  src="/images/companies/nvidia.svg"
                  alt="NVIDIA"
                  width={198}
                  height={79}
                />
                <Image
                  src="/images/companies/siemens-healthineers.svg"
                  alt="SIEMENS Healthineers"
                  width={198}
                  height={79}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="from-primary via-primary/95 to-background relative overflow-hidden bg-gradient-to-b py-16 lg:py-20">
        <div className="container">
          <div className="flex gap-20">
            <div className="w-full lg:w-1/2">
              <div className="mb-10 text-center">
                <p className="text-gray mb-3 text-sm tracking-wider uppercase">
                  WHY PANDORALABS
                </p>
                <h2 className="mb-6 text-[26px]/8 font-semibold sm:text-3xl lg:text-5xl/[60px]">
                  Autonomous AI Agents Built for{' '}
                  <span className="to-green-light bg-linear-to-l from-green-100 bg-clip-text text-transparent">
                    Any Data Source
                  </span>
                </h2>
              </div>

              <div className="text-gray mx-auto mb-12 max-w-4xl space-y-4 text-center">
                <p>
                  Traditional web scraping requires constant maintenance, breaks
                  with site updates, and demands technical expertise. Manual
                  data collection is slow, expensive, and error-prone.
                </p>
                <p className="text-lg font-semibold text-white">
                  PandoraLabs changes everything with autonomous AI agents.
                </p>
                <p>
                  Our intelligent agents don't just extract data—they understand
                  website structures, adapt to changes automatically, and handle
                  complex authentication flows without human intervention.
                  Simply describe what data you need in plain English, and our
                  AI does the rest.
                </p>
                <p>
                  From instant access to our pre-scraped database covering
                  thousands of sources, to dynamic scraper creation for custom
                  requests, PandoraLabs delivers the data intelligence you
                  need—when you need it.
                </p>
              </div>

              {/* Stats Cards */}
              <div className="grid gap-6 md:grid-cols-3">
                <StatsCard value="99.9%" label="Uptime SLA" />
                <StatsCard value="<2s" label="Avg Response" />
                <StatsCard value="24/7" label="Monitoring" />
              </div>
            </div>
            <Image
              src="/images/radar.gif"
              alt="Radar"
              width={500}
              height={500}
              className="hidden w-1/2 lg:block"
            />
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="from-background to-background relative overflow-hidden bg-gradient-to-b via-white/5 py-16 lg:py-20">
        <div className="from-green-light/5 to-green-light/5 absolute inset-0 bg-gradient-to-r via-transparent opacity-30"></div>
        <div className="relative z-10 container">
          <div className="mb-12 text-center">
            <p className="text-gray mb-3 text-sm tracking-wider uppercase">
              HOW IT WORKS
            </p>
            <h2 className="mb-4 text-[26px]/8 font-semibold sm:text-3xl lg:text-5xl/[60px]">
              From Question to Dataset —{' '}
              <span className="to-green-light bg-linear-to-l from-green-100 bg-clip-text text-transparent">
                in Minutes
              </span>
            </h2>
            <p className="text-gray mx-auto max-w-2xl">
              Our autonomous AI agents streamline data extraction from request
              to delivery, handling all technical complexity automatically.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <ProcessStep
              number="01"
              title="Ask in Plain English"
              description="No technical knowledge required. Just describe the data you need in natural language. Our AI understands your request and identifies the best approach to retrieve it."
            />
            <ProcessStep
              number="02"
              title="AI Builds & Deploys Automatically"
              description="Autonomous agents analyze the target source, build custom scrapers, handle authentication and anti-bot systems—all without human intervention. Setup completes in minutes."
            />
            <ProcessStep
              number="03"
              title="Receive Clean, Structured Data"
              description="Get validated datasets delivered via API, webhook, or database integration in JSON or CSV format. Choose real-time streaming or batch delivery based on your needs."
            />
          </div>

          {/* Timeline */}
          <div className="text-gray mt-10 flex items-center justify-center gap-4">
            <span className="rounded-full bg-white/5 px-4 py-2 font-medium transition-all duration-300 hover:bg-white/10">
              Start
            </span>
            <div className="bg-green-light/30 shadow-green-light/20 h-1 w-20 rounded-full shadow-lg"></div>
            <span className="to-green-light bg-green-light/10 animate-pulse rounded-full bg-linear-to-l from-green-100 bg-clip-text px-5 py-2.5 font-semibold text-transparent">
              Minutes, not weeks
            </span>
            <div className="bg-green-light/30 shadow-green-light/20 h-1 w-20 rounded-full shadow-lg"></div>
            <span className="rounded-full bg-white/5 px-4 py-2 font-medium transition-all duration-300 hover:bg-white/10">
              Data Delivered
            </span>
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="from-background to-primary/20 relative overflow-hidden bg-gradient-to-b py-16 lg:py-20">
        <div className="from-green-light/10 absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] via-transparent to-transparent"></div>
        <div className="relative z-10 container">
          <div className="mb-12 text-center">
            <p className="text-gray mb-3 text-sm tracking-wider uppercase">
              LIMITLESS APPLICATIONS
            </p>
            <h2 className="mb-4 text-[26px]/8 font-semibold sm:text-3xl lg:text-5xl/[60px]">
              One Engine.{' '}
              <span className="to-green-light bg-linear-to-l from-green-100 bg-clip-text text-transparent">
                Infinite Use Cases
              </span>
            </h2>
            <p className="text-gray mx-auto max-w-2xl">
              Our adaptive scraping infrastructure powers diverse applications
              across industries.
            </p>
          </div>

          <div className="mb-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <UseCaseCard
              icon={Shield}
              title="Security Intelligence"
              description="Monitor security forums, vulnerability databases, and threat feeds for emerging risks. Automated threat detection keeps your organization protected 24/7."
            />
            <UseCaseCard
              icon={Search}
              title="E-commerce & Shopping Data"
              description="Extract pricing, product catalogs, reviews, and inventory data from Amazon, Shopify, and major retailers. Track competitor pricing and market trends automatically."
            />
            <UseCaseCard
              icon={Users}
              title="Lead Generation"
              description="Build targeted prospect lists from LinkedIn, company websites, and professional directories. AI agents validate contact information and enrich profiles automatically."
            />
            <UseCaseCard
              icon={Target}
              title="Social Media Intelligence"
              description="Track brand mentions, sentiment analysis, and audience insights across Twitter, Instagram, LinkedIn, and other platforms with real-time monitoring and alerts."
            />
            <UseCaseCard
              icon={Scale}
              title="Real Estate Data"
              description="Extract property listings, pricing trends, and market analytics from Zillow, Realtor.com, and MLS databases. Monitor new listings and price changes in real-time."
            />
            <UseCaseCard
              icon={Radio}
              title="Crypto & Blockchain Analytics"
              description="Track cryptocurrency prices, NFT listings, DeFi protocols, and blockchain transactions. Monitor multiple exchanges and marketplaces with continuous data feeds."
            />
          </div>

          <div className="text-center">
            <p className="text-gray mb-4">
              Don't see your use case? Our AI agents can handle custom data
              extraction from any source.
            </p>
            <Link href="/contact" className={buttonVariants()}>
              Start Your First Data Request →
            </Link>
          </div>
        </div>
      </div>

      {/* Technology Section */}
      <div className="from-primary/20 to-background relative overflow-hidden bg-gradient-to-b via-white/5 py-16 lg:py-20">
        <div className="to-green-light/5 absolute inset-0 bg-gradient-to-br from-green-100/5 via-transparent"></div>
        <div className="relative z-10 container">
          <div className="mb-12 text-center">
            <p className="text-gray mb-3 text-sm tracking-wider uppercase">
              TECHNOLOGY
            </p>
            <h2 className="mb-4 text-[26px]/8 font-semibold sm:text-3xl lg:text-5xl/[60px]">
              Enterprise-Grade AI Technology{' '}
              <span className="to-green-light bg-linear-to-l from-green-100 bg-clip-text text-transparent">
                You Can Trust
              </span>
            </h2>
            <p className="text-gray mx-auto max-w-2xl">
              Autonomous AI agents powered by cutting-edge technology and
              battle-tested infrastructure that scales with your needs.
            </p>
          </div>

          <div className="mb-12 grid gap-8 md:grid-cols-3">
            <TechFeatureCard
              icon={Bot}
              title="Autonomous AI Agents"
              description="Intelligent agents that understand website structures, adapt to changes automatically, and build custom scrapers on-demand without manual coding or maintenance."
            />
            <TechFeatureCard
              icon={Lock}
              title="Enterprise Security"
              description="Bank-grade encryption, SOC 2 Type II certified infrastructure, and full GDPR/CCPA compliance. Your data security is our priority."
            />
            <TechFeatureCard
              icon={Zap}
              title="Scalable Infrastructure"
              description="Cloud-native architecture built to deliver data at any scale with 99.9% uptime SLA, sub-2 second response times, and automatic redundancy."
            />
          </div>

          {/* Tech Stats */}
          <div className="grid gap-6 md:grid-cols-4">
            <StatsCard value="99.7%" label="Success Rate" />
            <StatsCard value="<2s" label="Avg. Response" />
            <StatsCard value="Any Site" label="Works With" />
            <StatsCard value="10K+" label="Datasets/Month" />
          </div>
        </div>
      </div>

      {/* Enterprise Section */}
      <div className="from-background to-primary/10 relative overflow-hidden bg-gradient-to-b py-16 lg:py-20">
        <div className="from-green-light/10 absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] via-transparent to-transparent"></div>
        <div className="relative z-10 container">
          <div className="mb-12 text-center">
            <p className="text-gray mb-3 text-sm tracking-wider uppercase">
              FOR BUSINESSES AT SCALE
            </p>
            <h2 className="mb-4 text-[26px]/8 font-semibold sm:text-3xl lg:text-5xl/[60px]">
              From Startups to{' '}
              <span className="to-green-light bg-linear-to-l from-green-100 bg-clip-text text-transparent">
                Fortune 500s
              </span>
            </h2>
            <p className="text-gray mx-auto mb-12 max-w-2xl">
              Whether you're a scrappy startup needing competitive intel or an
              enterprise requiring real-time threat intelligence at scale, we've
              got you covered.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="group hover:border-green-light/50 hover:shadow-green-light/20 rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:bg-white/10 hover:shadow-2xl">
                <div className="mb-4 flex items-center gap-3">
                  <div className="bg-green-light/10 group-hover:bg-green-light/20 flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110">
                    <Award className="text-green-light h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="group-hover:text-green-light text-lg font-semibold text-white transition-colors duration-300">
                    Enterprise Solutions
                  </h3>
                </div>
                <p className="text-gray group-hover:text-gray/90 leading-relaxed transition-colors duration-300">
                  Dedicated infrastructure, SLAs, and white-glove onboarding for
                  Fortune 500 teams.
                </p>
              </div>

              <div className="group hover:border-green-light/50 hover:shadow-green-light/20 rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:bg-white/10 hover:shadow-2xl">
                <div className="mb-4 flex items-center gap-3">
                  <div className="bg-green-light/10 group-hover:bg-green-light/20 flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110">
                    <Activity className="text-green-light h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="group-hover:text-green-light text-lg font-semibold text-white transition-colors duration-300">
                    24/7 Support
                  </h3>
                </div>
                <p className="text-gray group-hover:text-gray/90 leading-relaxed transition-colors duration-300">
                  Direct access to engineering team. Slack/Teams integration
                  available.
                </p>
              </div>

              <div className="group hover:border-green-light/50 hover:shadow-green-light/20 rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:bg-white/10 hover:shadow-2xl">
                <div className="mb-4 flex items-center gap-3">
                  <div className="bg-green-light/10 group-hover:bg-green-light/20 flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110">
                    <CheckCircle2 className="text-green-light h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="group-hover:text-green-light text-lg font-semibold text-white transition-colors duration-300">
                    Custom Compliance
                  </h3>
                </div>
                <p className="text-gray group-hover:text-gray/90 leading-relaxed transition-colors duration-300">
                  GDPR, CCPA, HIPAA-ready deployments. On-premise hosting
                  available.
                </p>
              </div>

              <div className="flex gap-4">
                <Link href="/demo" className={buttonVariants()}>
                  See AI in Action
                </Link>
                <Link
                  href="/pricing"
                  className={buttonVariants({ variant: 'outline' })}
                >
                  View Pricing
                </Link>
              </div>
            </div>

            {/* Dashboard Preview */}
            <div>
              <DashboardPreview />
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="from-primary/10 to-primary relative overflow-hidden bg-gradient-to-b via-white/5 py-16 lg:py-20">
        <div className="from-green-light/10 absolute inset-0 bg-gradient-to-t via-transparent to-transparent"></div>
        <div className="relative z-10 container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-[26px]/8 font-semibold sm:text-3xl lg:text-5xl/[60px]">
              Turn Any Website Into{' '}
              <span className="to-green-light bg-linear-to-l from-green-100 bg-clip-text text-transparent">
                Your Data Source
              </span>
            </h2>
            <p className="text-gray mb-8 text-lg">
              Stop wasting time on manual data collection. Let autonomous AI
              agents extract the intelligence you need—automatically.
            </p>

            <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/request" className={buttonVariants({ size: 'lg' })}>
                Start Your First Request—Free
              </Link>
              <Link
                href="/demo"
                className={buttonVariants({ variant: 'outline', size: 'lg' })}
              >
                See How It Works
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="mb-4 flex flex-wrap items-center justify-center gap-4">
              <TrustBadge icon={Shield} text="SOC 2 Type II Certified" />
              <TrustBadge icon={CheckCircle2} text="GDPR Compliant" />
              <TrustBadge icon={Activity} text="99.9% Uptime SLA" />
            </div>

            <p className="text-gray text-sm">
              Trusted by NVIDIA, Siemens Healthineers, and industry-leading
              research teams
            </p>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                "name": "PandoraLabs",
                "applicationCategory": "BusinessApplication",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "ratingCount": "127"
                },
                "description": "AI-Powered Data Intelligence Platform with autonomous agents that extract data from any website automatically. No coding, no maintenance required.",
                "url": "${process.env.NEXT_PUBLIC_APP_URL}",
                "image": "${process.env.NEXT_PUBLIC_APP_URL}/images/logo.svg",
                "publisher": {
                  "@type": "Organization",
                  "name": "PandoraLabs",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "${process.env.NEXT_PUBLIC_APP_URL}/images/logo.svg"
                  }
                },
                "featureList": [
                  "Autonomous AI agents for web scraping",
                  "Real Estate data extraction",
                  "Lead Generation automation",
                  "E-commerce & Shopping intelligence",
                  "Crypto & Blockchain analytics",
                  "Social Media monitoring",
                  "Security threat intelligence"
                ],
                "operatingSystem": "Web-based"
            }`,
        }}
      />
    </>
  )
}
