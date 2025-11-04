import FeaturesCarousel from '@/components/custom/features-carousel'
import HeroSectionTyper from '@/components/custom/hero-section-typer'
import SectionHeading from '@/components/custom/section-heading'
import SubcribeSection from '@/components/custom/subcribe-section'
import { PlayIcon } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { buttonVariants } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import helper from '@/lib/helper'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'PandorLabs | AI Powered Web Scraping Agents Solution',
  description:
    'AI-powered web scraping agents that extract intelligence from the unstructured, dynamic, and hidden corners of the web.',
  openGraph: {
    ...helper.openGraphData,
    title: 'PandorLabs | AI Powered Web Scraping Agents Solution',
    description:
      'AI-powered web scraping agents that extract intelligence from the unstructured, dynamic, and hidden corners of the web.',
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
      <div className="relative -mt-24 bg-[url(/images/hero-section.png)] bg-cover bg-center bg-no-repeat pt-24">
        <span className="from-primary to-primary/20 absolute inset-0 z-5 bg-linear-to-t"></span>
        <div className="cursor-effect-section relative z-5 container pt-20">
          <div className="mb-10 text-center">
            <h1 className="relative mb-5 text-[30px]/9 font-semibold tracking-wider sm:text-4xl lg:text-6xl/[80px]">
              Leading&nbsp;
              <span className="relative mr-2 animate-pulse">
                &nbsp;AI&nbsp;
                <span className="to-green-light absolute inset-x-0 top-1.5 h-0.5 w-full bg-linear-to-r from-green-100"></span>
                <span className="to-green-light absolute inset-x-0 bottom-1.5 h-0.5 w-full bg-linear-to-r from-green-100"></span>
                <span className="to-green-light absolute inset-y-0 right-1.5 h-full w-0.5 bg-linear-to-r from-green-100"></span>
                <span className="to-green-light absolute inset-y-0 left-1.5 h-full w-0.5 bg-linear-to-r from-green-100"></span>
              </span>
              Content Platform <br />
              <HeroSectionTyper />
            </h1>
            <p className="text-gray mx-auto max-w-xl text-lg">
              Your go-to platform for Image Generator, Audio Generator and Video
              Generator. We offer a wide range of AI-powered tools to help you
              boost your online solutions.
            </p>
          </div>
          <div className="mb-10 flex flex-col items-center justify-center gap-2.5">
            <div className="inline-flex items-center justify-center -space-x-2">
              <span className="size-8 overflow-hidden rounded-full border-2 border-white">
                <Image
                  src="/images/profile1.png"
                  alt="avatar"
                  width="30"
                  height="30"
                  className="size-full object-cover"
                />
              </span>
              <span className="size-8 overflow-hidden rounded-full border-2 border-white">
                <Image
                  src="/images/profile2.png"
                  alt="avatar"
                  width="30"
                  height="30"
                  className="size-full object-cover"
                />
              </span>
              <span className="size-8 overflow-hidden rounded-full border-2 border-white">
                <Image
                  src="/images/profile3.png"
                  alt="avatar"
                  width="30"
                  height="30"
                  className="size-full object-cover"
                />
              </span>
              <span className="size-8 overflow-hidden rounded-full border-2 border-white">
                <Image
                  src="/images/profile1.png"
                  alt="avatar"
                  width="30"
                  height="30"
                  className="size-full object-cover"
                />
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl">1.3 M+</span>
              Trusted by users worldwide
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link href="/sign-in" className={buttonVariants()}>
              Get 6 months free
            </Link>

            <Dialog>
              <DialogTrigger asChild>
                <button
                  type="button"
                  className="play bg-primary z-10 inline-flex items-center gap-2.5"
                >
                  <PlayIcon className="play size-11 text-green-100" />
                  Watch video
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <DialogTitle />
                <DialogDescription />
                <iframe
                  className="h-full min-h-60 sm:min-h-96"
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/5wOhrU2V-SI?si=nACwTNGSSt8Im-1B"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="relative z-10 container pt-20 lg:pt-40">
          <h2 className="text-center text-lg font-semibold uppercase">
            Trusted by Industry Leaders
          </h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-20">
            <Image
              src="/images/companies/avian.svg"
              alt="SIEMENS"
              width={195}
              height={75}
            />
            <Image
              src="/images/companies/nvidia.svg"
              alt="NVIDIA"
              width={195}
              height={75}
            />
            <Image
              src="/images/companies/siemens-healthineers.svg"
              alt="SIEMENS"
              width={195}
              height={75}
            />
          </div>
        </div>
      </div>

      <div className="overflow-hidden py-16 lg:py-20">
        <div className="container mb-7 flex gap-10 sm:mb-10 sm:pr-36 lg:mb-14">
          <SectionHeading
            className="mb-0! text-left"
            descriptionClassName="mx-0"
            title={
              <>
                Discover Our
                <span>&nbsp;Key Features</span>
              </>
            }
            description="Experience cutting-edge AI tools designed for seamless Image Generator, Audio Generator and Video Generator."
          />
        </div>
        <FeaturesCarousel />
      </div>

      <SubcribeSection />

      <div className="bg-[url(/images/tastimonial-bg.png)] bg-cover bg-center bg-no-repeat py-16 lg:py-20">
        <div className="container">
          <SectionHeading
            title={
              <>
                What Our{' '}
                <span className="to-green-light bg-linear-to-l from-green-100 bg-clip-text text-transparent">
                  Users Say
                </span>
              </>
            }
            description="Discover how our AI tools have transformed workflows, inspired creativity, and delivered exceptional results for users worldwide."
          />
          <div className="grid gap-4 md:grid-cols-3 xl:gap-[30px]">
            <div className="flex flex-col gap-4 xl:gap-[30px]">
              <div className="border-gray/50 hover:bg-gray/0 border bg-linear-to-tr from-[#000000]/30 to-green-100/0 p-5 backdrop-blur-xs transition-all duration-500 hover:border-green-100/25 hover:from-green-100/30 hover:via-transparent hover:to-green-100/20">
                <div className="mb-5 size-16 overflow-hidden">
                  <Image
                    src="/images/men-profile.png"
                    alt="avatar"
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="pb-3">
                  InfynixAI&apos;s AI tools have streamlined our content
                  creation process, boosting efficiency and creativity. The
                  results are outstanding!
                </div>
                <div className="border-gray/30 border-t pt-3">
                  <h3 className="mb-0.5 text-lg/6 font-medium">John Carter</h3>
                  <p className="text-gray text-xs">- Marketing Manager</p>
                </div>
              </div>
              <div className="border-gray/50 hover:bg-gray/0 border bg-linear-to-tr from-[#000000]/30 to-green-100/0 p-5 backdrop-blur-xs transition-all duration-500 hover:border-green-100/25 hover:from-green-100/30 hover:via-transparent hover:to-green-100/20">
                <div className="mb-5 size-16 overflow-hidden">
                  <Image
                    src="/images/men-profile.png"
                    alt="avatar"
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="pb-3">
                  Using InfynixAI’s image generation tools has transformed how
                  we create visuals for our products. The quality and speed are
                  unmatched!
                </div>
                <div className="border-gray/30 border-t pt-3">
                  <h3 className="mb-0.5 text-lg/6 font-medium">
                    Sarah Williams
                  </h3>
                  <p className="text-gray text-xs">- Product Designer</p>
                </div>
              </div>
              <div className="border-gray/50 hover:bg-gray/0 border bg-linear-to-tr from-[#000000]/30 to-green-100/0 p-5 backdrop-blur-xs transition-all duration-500 hover:border-green-100/25 hover:from-green-100/30 hover:via-transparent hover:to-green-100/20">
                <div className="mb-5 size-16 overflow-hidden">
                  <Image
                    src="/images/men-profile.png"
                    alt="avatar"
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="pb-3">
                  Our team saves hours each week thanks to InfynixAI&apos;s
                  AI-driven solutions. It has been a game-changer for our
                  business operations.
                </div>
                <div className="border-gray/30 border-t pt-3">
                  <h3 className="mb-0.5 text-lg/6 font-medium">Michael Lee</h3>
                  <p className="text-gray text-xs">- CEO</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 xl:gap-[30px]">
              <div className="border-gray/50 hover:bg-gray/0 border bg-linear-to-tr from-[#000000]/30 to-green-100/0 p-5 backdrop-blur-xs transition-all duration-500 hover:border-green-100/25 hover:from-green-100/30 hover:via-transparent hover:to-green-100/20">
                <div className="mb-5 size-16 overflow-hidden">
                  <Image
                    src="/images/men-profile.png"
                    alt="avatar"
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="pb-3">
                  The audio generation feature helped us produce engaging
                  voiceovers for our social media campaigns in record time. It’s
                  a must-have tool!
                </div>
                <div className="border-gray/30 border-t pt-3">
                  <h3 className="mb-0.5 text-lg/6 font-medium">Emma Clark</h3>
                  <p className="text-gray text-xs">- Social Media Strategist</p>
                </div>
              </div>
              <div className="border-gray/50 hover:bg-gray/0 border bg-linear-to-tr from-[#000000]/30 to-green-100/0 p-5 backdrop-blur-xs transition-all duration-500 hover:border-green-100/25 hover:from-green-100/30 hover:via-transparent hover:to-green-100/20">
                <div className="mb-5 size-16 overflow-hidden">
                  <Image
                    src="/images/men-profile.png"
                    alt="avatar"
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="pb-3">
                  InfynixAI has helped improve the quality of our content. The
                  AI tools are intuitive and have made content creation more
                  effective.
                </div>
                <div className="border-gray/30 border-t pt-3">
                  <h3 className="mb-0.5 text-lg/6 font-medium">David Nguyen</h3>
                  <p className="text-gray text-xs">- Content Writer</p>
                </div>
              </div>
              <div className="hidden grow place-content-center md:grid">
                <Image
                  src="/images/quot.svg"
                  alt="quot"
                  width={80}
                  height={71}
                  className="w-20 shrink-0 animate-bounce"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 xl:gap-[30px]">
              <div className="border-gray/50 hover:bg-gray/0 border bg-linear-to-tr from-[#000000]/30 to-green-100/0 p-5 backdrop-blur-xs transition-all duration-500 hover:border-green-100/25 hover:from-green-100/30 hover:via-transparent hover:to-green-100/20">
                <div className="mb-5 size-16 overflow-hidden">
                  <Image
                    src="/images/men-profile.png"
                    alt="avatar"
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="pb-3">
                  The video generation tool has allowed us to create
                  professional videos without the need for extensive editing.
                  Highly recommended!
                </div>
                <div className="border-gray/30 border-t pt-3">
                  <h3 className="mb-0.5 text-lg/6 font-medium">Olivia Brown</h3>
                  <p className="text-gray text-xs">- Creative Director</p>
                </div>
              </div>
              <div className="border-gray/50 hover:bg-gray/0 border bg-linear-to-tr from-[#000000]/30 to-green-100/0 p-5 backdrop-blur-xs transition-all duration-500 hover:border-green-100/25 hover:from-green-100/30 hover:via-transparent hover:to-green-100/20">
                <div className="mb-5 size-16 overflow-hidden">
                  <Image
                    src="/images/men-profile.png"
                    alt="avatar"
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="pb-3">
                  InfynixAI has provided us with creative freedom we didn’t know
                  was possible. Their AI tools are powerful and easy to use.
                </div>
                <div className="border-gray/30 border-t pt-3">
                  <h3 className="mb-0.5 text-lg/6 font-medium">
                    James Thompson
                  </h3>
                  <p className="text-gray text-xs">- Founder</p>
                </div>
              </div>
              <div className="border-gray/50 hover:bg-gray/0 border bg-linear-to-tr from-[#000000]/30 to-green-100/0 p-5 backdrop-blur-xs transition-all duration-500 hover:border-green-100/25 hover:from-green-100/30 hover:via-transparent hover:to-green-100/20">
                <div className="mb-5 size-16 overflow-hidden">
                  <Image
                    src="/images/men-profile.png"
                    alt="avatar"
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="pb-3">
                  The AI-driven content optimization features have helped us
                  boost our engagement rates. InfynixAI is a must for any
                  marketer!
                </div>
                <div className="border-gray/30 border-t pt-3">
                  <h3 className="mb-0.5 text-lg/6 font-medium">Sophia Davis</h3>
                  <p className="text-gray text-xs">
                    - Digital Marketing Expert
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <SectionHeading
          className="container"
          title={
            <>
              Affordable
              <span>&nbsp;Pricing Plans&nbsp;</span>
              for All Needs
            </>
          }
          description="Choose the perfect plan for your business. Whether you're an individual or a large enterprise, our pricing options are designed to fit your requirements."
        />
      </div>

      <div className="container py-16 lg:py-20">
        <div className="border-gray/50 relative border bg-[url(/images/faq-bg.png)] bg-cover bg-center bg-no-repeat px-5 py-10 lg:p-20">
          <SectionHeading
            className="text-left"
            title={
              <>
                Frequently Asked<span>&nbsp;Questions</span>
              </>
            }
          />
          <Accordion
            type="single"
            collapsible
            className="grid gap-4 md:grid-cols-2 xl:gap-[30px]"
          >
            <div className="space-y-4 xl:space-y-[30px]">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  What is AI-powered image generation?
                </AccordionTrigger>
                <AccordionContent>
                  AI-powered image generation allows you to create high-quality
                  visuals using artificial intelligence, turning text
                  descriptions into images quickly and accurately.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  How does audio generation work in your platform?
                </AccordionTrigger>
                <AccordionContent>
                  Our AI audio generation tool converts written text into
                  realistic voiceovers or narrations in multiple languages and
                  tones, saving time and effort in content creation.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  What makes your video generator unique?
                </AccordionTrigger>
                <AccordionContent>
                  Our AI video generator helps you create professional-quality
                  videos with minimal input. The tool automates editing,
                  effects, and transitions to save you time while maintaining
                  high standards.
                </AccordionContent>
              </AccordionItem>
            </div>
            <div className="space-y-4 xl:space-y-[30px]">
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Can I customize the AI-generated content?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, our platform allows full customization of images, audio,
                  and video outputs to match your brand&apos;s voice and style,
                  giving you more control over the results.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  What kind of support do you provide with the plans?
                </AccordionTrigger>
                <AccordionContent>
                  Our pricing plans come with varying levels of support: basic
                  community support for the free plan, and priority or dedicated
                  support for professional and enterprise users.
                </AccordionContent>
              </AccordionItem>
            </div>
          </Accordion>
        </div>
      </div>

      <div className="container">
        <SectionHeading
          title={
            <>
              Start Your Journey<span>&nbsp;Today</span>
            </>
          }
          description="Unlock the power of AI for your business. Our tools are
                        designed to streamline your workflow, enhance
                        creativity, and drive results. Don't wait, start
                        transforming your content now!"
        />
        <div className="flex items-center justify-center gap-5">
          <Link href="/sign-up" className={buttonVariants()}>
            Get Started
          </Link>
          <div className="group bg-gray/50 to-green-light relative flex items-center gap-0.5 overflow-hidden bg-linear-to-r from-green-100 p-0.5 hover:from-transparent hover:to-transparent">
            <div className="to-green-light/20 absolute inset-0 h-full w-full animate-[spin_5s_linear_infinite] bg-linear-to-tr from-green-100 opacity-0 group-hover:opacity-100"></div>
            <Link href="/about-us" className="bg-primary z-5 px-2.5 py-2">
              Learn more
            </Link>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Home | InfynixAI",
                "url": "${process.env.NEXT_PUBLIC_APP_URL}",
                "description": "Enhance your service offerings and streamline processes with our intuitive AI SaaS template.",
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
