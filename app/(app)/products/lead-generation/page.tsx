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

import { FAQSection } from '../_components/faq-section'
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
      <PricingSection
        tiers={[
          {
            name: 'Starter',
            price: '$0',
            period: 'month',
            description: 'Test our data quality',
            requests: '100 credits/month',
            features: [
              'Email verification',
              'Basic enrichment',
              'Email support',
              'API access',
            ],
            cta: 'Start Free',
          },
          {
            name: 'Growth',
            price: '$299',
            period: 'month',
            description: 'For growing sales teams',
            requests: '5,000 credits/month',
            features: [
              'Full contact database',
              'AI lead scoring',
              'Priority support (24/7)',
              'Custom integrations',
              'Advanced enrichment',
              'Bulk lookups',
            ],
            cta: 'Start Trial',
            highlighted: true,
          },
          {
            name: 'Enterprise',
            price: 'Custom',
            period: 'year',
            description: 'For enterprise organizations',
            requests: 'Unlimited credits',
            features: [
              'Everything in Growth',
              'Dedicated account manager',
              'Custom data sourcing',
              'White-label options',
              'On-premise deployment',
              'SLA guarantees',
            ],
            cta: 'Contact Sales',
          },
        ]}
        accentColor={accentColor}
        accentGlow={accentGlow}
      />
      <FAQSection
        faqs={[
          {
            question: 'How do you ensure 95% email accuracy?',
            answer:
              'We use a multi-step verification process: syntax validation, domain verification, mailbox existence checks, and catch-all detection. Emails are reverified every 30 days. Our accuracy guarantee means if bounce rate exceeds 5%, we provide credits for affected records.',
          },
          {
            question: 'What data sources do you use for contact information?',
            answer:
              'We aggregate data from 150+ ethical sources including public business directories, corporate websites, social networks (with user consent), conference attendee lists, and business registrations. All sources comply with GDPR Article 6(1)(f) for legitimate interest or Article 6(1)(a) for explicit consent.',
          },
          {
            question:
              'Can I integrate with my CRM or marketing automation platform?',
            answer:
              'Yes, we provide native integrations with Salesforce, HubSpot, Marketo, Pardot, and 50+ other platforms. Our RESTful API and webhooks enable custom integrations with any system. Enterprise plans include dedicated integration support.',
          },
          {
            question: 'How does AI lead scoring work?',
            answer:
              'Our ML models analyze 100+ signals including job title seniority, company growth trajectory, technology stack, hiring patterns, and web activity. Each lead receives a 0-100 score indicating conversion likelihood. Models are continuously trained on your historical conversion data for personalization.',
          },
          {
            question: 'What is your GDPR compliance approach?',
            answer:
              'All contacts have legal basis for processing under GDPR (consent or legitimate interest). We maintain detailed provenance records, honor right-to-erasure requests within 48 hours, and provide data processing agreements for all customers. We are ISO 27001 and SOC 2 Type II certified.',
          },
          {
            question: 'Can I export bulk contact lists?',
            answer:
              'Yes, Professional and Enterprise plans support bulk exports in CSV, JSON, or direct CRM integration. You can export up to 10,000 records per request with filters for industry, location, job title, company size, and more.',
          },
          {
            question: 'Do you provide phone numbers in addition to emails?',
            answer:
              'Yes, our database includes direct dial phone numbers, mobile numbers, and office lines where available. Phone coverage varies by geography: 85% for North America, 70% for Europe, 60% for APAC. All phone numbers are verified for validity.',
          },
          {
            question: 'What enrichment attributes are available?',
            answer:
              'We provide 40+ enrichment fields including: contact name, job title, email, phone, LinkedIn URL, company name, industry, revenue, employee count, funding, technologies used, and more. Enterprise clients can request custom enrichment fields.',
          },
          {
            question: 'How do credits work?',
            answer:
              'Each API request consumes 1 credit. Email verification: 0.5 credits, enrichment: 1 credit, bulk lookup: 0.8 credits per record. Unused credits roll over for up to 12 months on annual plans. Enterprise plans offer unlimited credits.',
          },
          {
            question: 'What is your data freshness policy?',
            answer:
              'Contact records are reverified every 30 days. Job changes, company updates, and email validity are monitored in real-time. Stale data (>90 days old without verification) is flagged. Enterprise clients receive daily data freshness reports.',
          },
        ]}
        accentColor={accentColor}
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
