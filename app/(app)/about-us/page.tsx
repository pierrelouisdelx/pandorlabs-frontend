import { Award, BookOpen, FlaskConical, Microscope } from 'lucide-react'
import { Metadata } from 'next'
import helper from '@/lib/helper'

export const metadata: Metadata = {
  title: 'About Us | PandorLabs',
  description:
    "PandorLabs pioneers AI-powered data extraction for the modern web. Built by researchers who push the boundaries of what's possible in web intelligence.",
  openGraph: {
    ...helper.openGraphData,
    title: 'About Us | PandorLabs',
    description:
      "PandorLabs pioneers AI-powered data extraction for the modern web. Built by researchers who push the boundaries of what's possible in web intelligence.",
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
      {/* Hero Section */}
      <section className="relative -mt-24 min-h-[60vh] border-b border-white/5 bg-black pt-24">
        <div className="relative z-10 container mx-auto px-4 pt-32">
          <div className="mx-auto max-w-4xl">
            {/* Section header */}
            <div className="mb-16 text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10">
                <Microscope className="h-4 w-4 text-white/60" />
                <span className="text-sm font-medium tracking-wider text-white/60 uppercase">
                  About PandorLabs
                </span>
              </div>

              <h1 className="mb-6 text-[32px]/tight font-bold tracking-tight sm:text-5xl lg:text-7xl/tight">
                Where Research Meets
                <br />
                <span className="to-green-light bg-linear-to-l from-green-100 bg-clip-text text-transparent drop-shadow-lg">
                  Real-World Intelligence
                </span>
              </h1>
            </div>
          </div>
        </div>

        {/* Background effects */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="from-green-light/10 to-green-light/5 absolute top-1/2 left-1/4 h-96 w-96 animate-pulse rounded-full bg-linear-to-br blur-[120px]" />
          <div className="from-green-light/10 to-green-light/5 absolute top-1/3 right-1/4 h-96 w-96 animate-pulse rounded-full bg-linear-to-br blur-[120px] delay-1000" />
        </div>
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-4 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl space-y-12">
          {/* Bio text */}
          <div className="space-y-6 text-lg leading-relaxed text-white/70">
            <p className="text-center">
              We emerged from the trenches of fintech, cybersecurity, and
              intelligence—where traditional web scraping simply doesn&apos;t
              cut it. Where milliseconds matter and failure isn&apos;t an
              option.
            </p>

            <div className="group hover:border-green-light/50 hover:shadow-green-light/20 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:shadow-2xl">
              <p className="group-hover:text-green-light text-center text-xl font-medium text-white transition-colors duration-300">
                &ldquo;The modern web is built to resist automation. We built
                the technology to overcome it.&rdquo;
              </p>
            </div>

            <p className="text-center">
              What started in academic research labs—experimenting with LLM
              agents, adversarial techniques, and intelligent automation—evolved
              into battle-tested infrastructure powering Fortune 500 operations.
              We don&apos;t just extract data; we solve the problems that make
              extraction impossible.
            </p>

            <p className="text-center">
              Our distributed team brings world-class expertise in machine
              learning, distributed systems, and offensive security. We
              specialize in the edge cases others avoid: dynamic applications,
              anti-bot systems, and data sources considered
              &ldquo;unscrappable.&rdquo; If it&apos;s on the web, we can reach
              it.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="bg-white/5 py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <p className="text-gray mb-3 text-sm tracking-wider uppercase">
                Our Foundation
              </p>
              <h2 className="mb-4 text-[26px]/8 font-semibold sm:text-3xl lg:text-5xl/[60px]">
                Built on{' '}
                <span className="to-green-light bg-linear-to-l from-green-100 bg-clip-text text-transparent">
                  Research Excellence
                </span>
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {/* Credential Card 1 */}
              <div className="group hover:border-green-light/50 hover:shadow-green-light/20 rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:bg-white/10 hover:shadow-2xl">
                <div className="bg-green-light/10 group-hover:bg-green-light/20 mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Award
                    className="text-green-light h-7 w-7 transition-transform duration-300 group-hover:scale-110"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="group-hover:text-green-light mb-3 text-lg font-semibold text-white transition-colors duration-300">
                  Industry-Leading Performance
                </h3>
                <p className="text-gray group-hover:text-gray/90 text-sm leading-relaxed transition-colors duration-300">
                  2x faster AI inference than competing solutions
                </p>
              </div>

              {/* Credential Card 2 */}
              <div className="group hover:border-green-light/50 hover:shadow-green-light/20 rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:bg-white/10 hover:shadow-2xl">
                <div className="bg-green-light/10 group-hover:bg-green-light/20 mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <BookOpen
                    className="text-green-light h-7 w-7 transition-transform duration-300 group-hover:scale-110"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="group-hover:text-green-light mb-3 text-lg font-semibold text-white transition-colors duration-300">
                  Peer-Reviewed Innovation
                </h3>
                <p className="text-gray group-hover:text-gray/90 text-sm leading-relaxed transition-colors duration-300">
                  Published research in AI and web security domains
                </p>
              </div>

              {/* Credential Card 3 */}
              <div className="group hover:border-green-light/50 hover:shadow-green-light/20 rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:bg-white/10 hover:shadow-2xl">
                <div className="bg-green-light/10 group-hover:bg-green-light/20 mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Microscope
                    className="text-green-light h-7 w-7 transition-transform duration-300 group-hover:scale-110"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="group-hover:text-green-light mb-3 text-lg font-semibold text-white transition-colors duration-300">
                  Research-Driven Engineering
                </h3>
                <p className="text-gray group-hover:text-gray/90 text-sm leading-relaxed transition-colors duration-300">
                  Academic rigor meets production reliability
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="container mx-auto px-4 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="hover:border-green-light/50 hover:shadow-green-light/20 rounded-2xl border border-white/10 bg-white/5 p-12 text-center backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:shadow-2xl">
            <p className="mb-4 text-xl text-white/70 italic sm:text-2xl">
              &ldquo;We don&apos;t just extract data—we unlock the intelligence
              hidden in the modern web.&rdquo;
            </p>
            <p className="to-green-light bg-linear-to-l from-green-100 bg-clip-text text-sm font-medium text-transparent">
              — The PandorLabs Team
            </p>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "About Us | PandorLabs",
                "url": "${process.env.NEXT_PUBLIC_APP_URL}",
                "description": "PandorLabs pioneers AI-powered data extraction for the modern web. Built by researchers who push the boundaries of what's possible in web intelligence.",
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
                        "name": "About Us | PandorLabs",
                        "item": "${process.env.NEXT_PUBLIC_APP_URL}/about-us"
                    }]
                }
            }`,
        }}
      />
    </>
  )
}
