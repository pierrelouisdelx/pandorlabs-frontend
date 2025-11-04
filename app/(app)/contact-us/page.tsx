import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import helper from '@/lib/helper'
import { ArrowUpRight, Send } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact Us | PandorLabs',
  description:
    'Enhance your service offerings and streamline processes with our intuitive AI SaaS template.',
  openGraph: {
    ...helper.openGraphData,
    title: 'Contact Us | PandorLabs',
    description:
      'Enhance your service offerings and streamline processes with our intuitive AI SaaS template.',
    url: process.env.NEXT_PUBLIC_APP_URL + '/contact-us',
    type: 'website',
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_APP_URL}/contact-us`,
  },
}
export default function ContactUs() {
  return (
    <>
      <div className="container flex flex-col items-start gap-16 pt-20 lg:flex-row lg:gap-24 xl:max-w-(--breakpoint-xl)">
        <div className="w-full max-w-xl">
          <div>
            <h1 className="mb-3 text-[26px]/8 font-semibold sm:text-3xl lg:mb-5 lg:text-5xl/[60px]">
              Get in Touch <br />
              <span className="to-green-light bg-linear-to-l from-green-100/50 bg-clip-text text-transparent">
                We Value Your Thoughts!
              </span>
            </h1>
            <p className="text-gray">
              Connect with us today, and let&apos;s explore how we can work
              together to bring your vision to life and achieve your goals.
            </p>
          </div>
          <div className="mt-10 space-y-7">
            <div className="space-y-2 lg:space-y-3">
              <h3 className="text-green-light/70 text-base tracking-[3px] uppercase">
                Address
              </h3>
              <Link
                href="https://maps.app.goo.gl/SjQBpXXeesF4EM6PA"
                className="border-gray/20 after:bg-green relative flex items-center justify-between gap-3 border-b pb-2.5 text-xl after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:duration-300 hover:after:w-full lg:pb-4"
              >
                <span className="grow">
                  4648 Rocky road Philadelphia PA, 1920
                </span>
                <ArrowUpRight className="ml-auto size-8 shrink-0 duration-300" />
              </Link>
            </div>
            <div className="space-y-2 lg:space-y-3">
              <h3 className="text-green-light/70 text-base tracking-[3px] uppercase">
                Phone
              </h3>
              <Link
                href="tel:+01541254623"
                className="border-gray/20 after:bg-green relative flex items-center justify-between gap-3 border-b pb-2.5 text-xl after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:duration-300 hover:after:w-full lg:pb-4"
              >
                <span className="grow">+208-555-0112</span>
                <ArrowUpRight className="ml-auto size-8 shrink-0 duration-300" />
              </Link>
            </div>
            <div className="space-y-2 lg:space-y-3">
              <h3 className="text-green-light/70 text-base tracking-[3px] uppercase">
                Mail
              </h3>
              <Link
                href="mailto:info@infynixai.com"
                className="border-gray/20 after:bg-green relative flex items-center justify-between gap-3 border-b pb-2.5 text-xl after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:duration-300 hover:after:w-full lg:pb-4"
              >
                <span className="grow">info@infynixai.com </span>
                <ArrowUpRight className="ml-auto size-8 shrink-0 duration-300" />
              </Link>
            </div>
          </div>
        </div>
        <div className="relative w-full grow bg-white/5 shadow-xl lg:-mt-10">
          <Image
            src="/images/404.jpg"
            width={576}
            height={640}
            alt="Contact img"
            className="absolute inset-0 h-full w-full object-cover opacity-20"
          />
          <div className="relative z-1 h-full px-6 py-8 backdrop-blur-[lg] xl:p-10">
            <h3 className="mb-8 text-xl font-semibold tracking-widest">
              Contact Us
            </h3>
            <form className="space-y-5 lg:space-y-8">
              <Input type="text" className="" placeholder="Name" />
              <Input type="text" className="form-input" placeholder="Email" />
              <Input type="text" className="form-input" placeholder="Phone" />
              <Textarea
                className="form-textarea"
                placeholder="Message"
                rows={5}
              ></Textarea>
              <div className="text-right">
                <Button type="submit" className="hover:[&_svg]:-rotate-45">
                  Send Message
                  <Send className="size-4 shrink-0 duration-300" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Contact Us | PandorLabs",
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
                    },{
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Contact Us | PandorLabs",
                        "item": "${process.env.NEXT_PUBLIC_APP_URL}/contact-us"
                    }]
                }
            }`,
        }}
      />
    </>
  )
}
