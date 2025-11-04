import { Award, BookOpen, FlaskConical, Microscope } from 'lucide-react'
import { Metadata } from 'next'
import helper from '@/lib/helper'

export const metadata: Metadata = {
  title: 'About Us | PandoraLabs',
  description:
    'Founded by engineers and data scientists who have built scraping infrastructure for fintech, cybersecurity, and intelligence firms.',
  openGraph: {
    ...helper.openGraphData,
    title: 'About Us | PandoraLabs',
    description:
      'Founded by engineers and data scientists who have built scraping infrastructure for fintech, cybersecurity, and intelligence firms.',
    url: process.env.NEXT_PUBLIC_APP_URL + '/about-us',
    type: 'website',
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_APP_URL}/about-us`,
  },
}

export default function AboutUs() {
  return (
    <>
      <section className="relative -mt-24 border-b border-white/5 bg-black pt-24">
        <div className="container mx-auto px-4 py-32">
          <div className="mx-auto max-w-4xl">
            {/* Section header */}
            <div className="mb-16 text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
                <Microscope className="h-4 w-4 text-white/60" />
                <span className="text-sm font-medium tracking-wider uppercase text-white/60">
                  About PandoraLabs
                </span>
              </div>

              <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
                Frontier Labs.
                <br />
                <span className="to-green-light bg-linear-to-l from-green-100 bg-clip-text text-transparent">
                  Built by Researchers
                </span>
              </h1>
            </div>

            {/* Founder content */}
            <div className="space-y-12">
              {/* Logo/Portrait */}
              <div className="flex justify-center">
                <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-gradient-to-br from-white/10 to-white/5">
                  <FlaskConical className="h-16 w-16 text-white" />
                </div>
              </div>

              {/* Bio text */}
              <div className="space-y-6 text-lg leading-relaxed text-white/70">
                <p className="text-center">
                  Founded by engineers and data scientists who&apos;ve built
                  scraping infrastructure for fintech, cybersecurity, and
                  intelligence firms, PandoraLabs was born from a simple
                  observation:
                </p>

                <p className="text-center text-xl font-medium text-white">
                  &ldquo;Most data extraction tools fail when they&apos;re
                  needed most.&rdquo;
                </p>

                <p className="text-center">
                  We started as a research lab, experimenting with LLM-based
                  agents, browser automation, and adversarial anti-detection
                  techniques. What began as academic curiosity turned into
                  production systems serving Fortune 500 companies.
                </p>

                <p className="text-center">
                  Today, we&apos;re a fully remote team of specialists—each with
                  deep expertise in machine learning, distributed systems, or
                  offensive security. We don&apos;t do &ldquo;simple&rdquo;
                  scraping. We build agents for the frontier: the dynamic, the
                  protected, and the previously impossible.
                </p>
              </div>

              {/* Credentials/Highlights */}
              <div className="grid gap-6 border-t border-white/10 pt-12 md:grid-cols-3">
                <div className="border border-white/10 bg-white/[0.02] p-6 text-center backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]">
                  <div className="mb-4 inline-flex rounded-lg border border-white/10 bg-white/5 p-3">
                    <Award className="h-6 w-6 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-white">
                    World Record in AI Inference Speed
                  </h3>
                  <p className="text-sm text-white/60">
                    2x faster than the competition
                  </p>
                </div>

                <div className="border border-white/10 bg-white/[0.02] p-6 text-center backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]">
                  <div className="mb-4 inline-flex rounded-lg border border-white/10 bg-white/5 p-3">
                    <BookOpen
                      className="h-6 w-6 text-white"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-white">
                    Published Research
                  </h3>
                  <p className="text-sm text-white/60">AI & Web Security</p>
                </div>

                <div className="border border-white/10 bg-white/[0.02] p-6 text-center backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]">
                  <div className="mb-4 inline-flex rounded-lg border border-white/10 bg-white/5 p-3">
                    <Microscope
                      className="h-6 w-6 text-white"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-white">
                    Research-First
                  </h3>
                  <p className="text-sm text-white/60">
                    Academia to Production
                  </p>
                </div>
              </div>

              {/* Closing statement */}
              <div className="border-t border-white/10 pt-12 text-center">
                <p className="italic text-white/50">
                  &ldquo;We&apos;re not just scraping the web. We&apos;re
                  mapping the frontier.&rdquo;
                </p>
                <p className="mt-2 text-sm text-white/40">
                  — The PandoraLabs Team
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Background effects */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/4 h-96 w-96 animate-pulse rounded-full bg-white/5 blur-[120px]" />
          <div className="delay-1000 absolute top-1/3 right-1/4 h-96 w-96 animate-pulse rounded-full bg-white/5 blur-[120px]" />
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "About Us | PandoraLabs",
                "url": "${process.env.NEXT_PUBLIC_APP_URL}",
                "description": "Founded by engineers and data scientists who have built scraping infrastructure for fintech, cybersecurity, and intelligence firms.",
                "inLanguage": "en",
                "image": "${process.env.NEXT_PUBLIC_APP_URL}/images/logo.svg",
                "breadcrumb": {
                    "@type": "BreadcrumbList",
                    "itemListElement": [{
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "${process.env.NEXT_PUBLIC_APP_URL}"
                    },{
                        "@type": "ListItem",
                        "position": 2,
                        "name": "About Us | PandoraLabs",
                        "item": "${process.env.NEXT_PUBLIC_APP_URL}/about-us"
                    }]
                }
            }`,
        }}
      />
    </>
  )
}
