import SectionHeading from '@/components/custom/section-heading'
import StatsCard from '@/components/custom/stats-card'
import ProcessStep from '@/components/custom/process-step'
import UseCaseCard from '@/components/custom/use-case-card'
import TechFeatureCard from '@/components/custom/tech-feature-card'
import TerminalMock from '@/components/custom/terminal-mock'
import DashboardPreview from '@/components/custom/dashboard-preview'
import TrustBadge from '@/components/custom/trust-badge'
import { buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
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
  title: 'PandorLabs | Market Intelligence, On Demand',
  description:
    'Access competitor data, pricing trends, and market insights on demand. API-delivered intelligence that powers strategic decisions.',
  openGraph: {
    ...helper.openGraphData,
    title: 'PandorLabs | Market Intelligence, On Demand',
    description:
      'Access competitor data, pricing trends, and market insights on demand. API-delivered intelligence that powers strategic decisions.',
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
      <div className="relative -mt-24 bg-[url(/images/hero-section.png)] bg-cover bg-center bg-no-repeat pt-24">
        <span className="from-primary to-primary/20 absolute inset-0 z-5 bg-linear-to-t"></span>
        <div className="cursor-effect-section relative z-5 container py-20 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="relative mb-5 text-[30px]/9 font-semibold tracking-wider sm:text-4xl lg:text-6xl/[80px]">
              Market Intelligence, <br />
              <span className="to-green-light bg-linear-to-l from-green-100 bg-clip-text text-transparent">
                On Demand
              </span>
            </h1>
            <p className="text-gray mx-auto mb-8 max-w-2xl text-lg">
              Access competitor data, pricing trends, and market insights on
              demand. API-delivered intelligence that powers strategic
              decisions.
            </p>

            {/* Input Field */}
            <div className="mx-auto mb-10 max-w-2xl">
              <div className="flex gap-3">
                <Input
                  type="text"
                  placeholder="Describe data extraction requirements"
                  className="flex-1"
                />
                <button className={buttonVariants()}>Get Started</button>
              </div>
            </div>

            {/* Trust Badges */}
            <p className="text-center text-lg font-semibold">
              Trusted by Industry Leaders
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-10">
              <Image
                src="/images/companies/avian.svg"
                alt="SIEMENS"
                width={150}
                height={60}
              />
              <Image
                src="/images/companies/nvidia.svg"
                alt="NVIDIA"
                width={150}
                height={60}
              />
              <Image
                src="/images/companies/siemens-healthineers.svg"
                alt="SIEMENS Healthineers"
                width={150}
                height={60}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="container py-16 lg:py-20">
        <div className="mb-10 text-center">
          <p className="text-gray mb-3 text-sm tracking-wider uppercase">
            OUR VISION
          </p>
          <h2 className="mb-6 text-[26px]/8 font-semibold sm:text-3xl lg:text-5xl/[60px]">
            Pioneering the Next Frontier of{' '}
            <span className="to-green-light bg-linear-to-l from-green-100 bg-clip-text text-transparent">
              Web Intelligence
            </span>
          </h2>
        </div>

        <div className="text-gray mx-auto mb-12 max-w-4xl space-y-4 text-center">
          <p>
            The web is vast, chaotic, and constantly evolving. Most data
            extraction tools fail when faced with dynamic JavaScript,
            authentication flows, anti-bot defenses, or legacy systems locked
            behind outdated interfaces.
          </p>
          <p className="text-lg font-semibold text-white">
            PandorLabs exists to solve the impossible cases.
          </p>
          <p>
            We don't scrape static HTML—we navigate complex multi-step
            workflows, handle real-time data streams, and extract intelligence
            from sources others can't reach.
          </p>
          <p>
            Whether it's monitoring dark web marketplaces, extracting insights
            from proprietary databases, or building real-time surveillance
            systems for threat intelligence, we engineer custom agents that
            adapt, learn, and deliver.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          <StatsCard value="99.9%" label="Uptime SLA" />
          <StatsCard value="<2s" label="Avg Response" />
          <StatsCard value="24/7" label="Monitoring" />
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-white/5 py-16 lg:py-20">
        <div className="container">
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
              Our streamlined process gets you from request to delivery faster
              than traditional data vendors.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <ProcessStep
              number="01"
              title="Tell Us What You Need"
              description="Describe your data requirements—structured or unstructured, real-time or historical, public or gated. No data source is too complex."
            />
            <ProcessStep
              number="02"
              title="We Build the Agent"
              description="Our engineers design custom AI-powered scraping agents tailored to your use case, handling auth flows, JavaScript rendering, and anti-bot evasion."
            />
            <ProcessStep
              number="03"
              title="You Get Clean Data"
              description="Receive structured, validated datasets via API, webhook, or direct database integration. Real-time or batch—your choice."
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
      <div className="container py-16 lg:py-20">
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
            title="Threat Intelligence"
            description="Monitor dark web forums, paste sites, and underground marketplaces for leaked credentials, ransomware chatter, and emerging threats."
          />
          <UseCaseCard
            icon={Search}
            title="Market Research"
            description="Extract pricing data, product catalogs, and competitor intelligence from e-commerce platforms and business directories."
          />
          <UseCaseCard
            icon={Users}
            title="Lead Generation"
            description="Build targeted prospect lists from LinkedIn, company websites, and professional networks with validated contact information."
          />
          <UseCaseCard
            icon={Target}
            title="Brand Monitoring"
            description="Track brand mentions, sentiment, and reputation across social media, review sites, and news outlets in real-time."
          />
          <UseCaseCard
            icon={Scale}
            title="Legal & Compliance"
            description="Extract and monitor regulatory filings, court records, and compliance documents from government databases."
          />
          <UseCaseCard
            icon={Radio}
            title="Real-Time Surveillance"
            description="Continuous monitoring of dynamic data sources with instant alerts when target patterns are detected."
          />
        </div>

        <div className="text-center">
          <p className="text-gray mb-4">
            Don't see your use case? We build custom solutions.
          </p>
          <Link href="/contact" className={buttonVariants()}>
            Tell us what you need →
          </Link>
        </div>
      </div>

      {/* Technology Section */}
      <div className="bg-white/5 py-16 lg:py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <p className="text-gray mb-3 text-sm tracking-wider uppercase">
              TECHNOLOGY
            </p>
            <h2 className="mb-4 text-[26px]/8 font-semibold sm:text-3xl lg:text-5xl/[60px]">
              AI-Powered Agents Built for{' '}
              <span className="to-green-light bg-linear-to-l from-green-100 bg-clip-text text-transparent">
                the Unknown
              </span>
            </h2>
            <p className="text-gray mx-auto max-w-2xl">
              Our proprietary technology stack combines cutting-edge AI with
              battle-tested infrastructure.
            </p>
          </div>

          <div className="mb-12 grid gap-8 md:grid-cols-3">
            <TechFeatureCard
              icon={Bot}
              title="Adaptive AI Agents"
              description="Self-healing scrapers that adapt to site changes, handle CAPTCHAs, and navigate complex multi-step workflows autonomously."
            />
            <TechFeatureCard
              icon={Lock}
              title="Enterprise Security"
              description="Bank-grade encryption, rotating proxies, and compliance-ready infrastructure. SOC 2 Type II certified."
            />
            <TechFeatureCard
              icon={Zap}
              title="Scalable Architecture"
              description="Distributed systems built to handle millions of requests per hour with sub-second latency. Auto-scaling and redundancy built-in."
            />
          </div>

          {/* Terminal Display */}
          <div className="mb-10">
            <TerminalMock
              lines={[
                {
                  text: 'Agent initialized: web_scraper_v3.2.1',
                  type: 'success',
                },
                { text: 'Target identified: dynamic_spa_application' },
                { text: 'Auth flow detected: oauth2_with_2fa' },
                {
                  text: 'Anti-bot bypass: cloudflare_challenge_solved',
                  type: 'success',
                },
                {
                  text: 'Data extraction: 10,247 records parsed',
                  type: 'success',
                },
                {
                  text: 'Status: Complete | Delivery: API endpoint',
                  type: 'success',
                },
              ]}
            />
          </div>

          {/* Tech Stats */}
          <div className="grid gap-6 md:grid-cols-4">
            <StatsCard value="99.7%" label="Success Rate" />
            <StatsCard value="1.2s" label="Avg. Response" />
            <StatsCard value="10K+" label="Sites Supported" />
            <StatsCard value="50M+" label="Requests/Day" />
          </div>
        </div>
      </div>

      {/* Enterprise Section */}
      <div className="container py-16 lg:py-20">
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
                Book a Demo
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

      {/* Final CTA Section */}
      <div className="bg-white/5 py-16 lg:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-[26px]/8 font-semibold sm:text-3xl lg:text-5xl/[60px]">
              Access the Web's{' '}
              <span className="to-green-light bg-linear-to-l from-green-100 bg-clip-text text-transparent">
                Hidden Intelligence
              </span>
            </h2>
            <p className="text-gray mb-8 text-lg">
              Stop settling for incomplete data. Start extracting intelligence
              from anywhere on the web.
            </p>

            <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/request" className={buttonVariants({ size: 'lg' })}>
                Request Data
              </Link>
              <Link
                href="/demo"
                className={buttonVariants({ variant: 'outline', size: 'lg' })}
              >
                Book a Demo
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
                "@type": "WebSite",
                "name": "PandorLabs | Market Intelligence, On Demand",
                "url": "${process.env.NEXT_PUBLIC_APP_URL}",
                "description": "Access competitor data, pricing trends, and market insights on demand. API-delivered intelligence that powers strategic decisions.",
                "inLanguage": "en",
                "image": "${process.env.NEXT_PUBLIC_APP_URL}/images/logo.svg",
                "breadcrumb": {
                    "@type": "BreadcrumbList",
                    "itemListElement": [{
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "${process.env.NEXT_PUBLIC_APP_URL}"
                    }]
                }
            }`,
        }}
      />
    </>
  )
}
