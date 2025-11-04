import AboutUsHeroBanner from '@/components/custom/about-us-hero-banner'
import MilestoneCarousel from '@/components/custom/milestone-carousel'
import SectionHeading from '@/components/custom/section-heading'
import IconFaceBook from '@/components/icons/icon-facebook'
import IconInstagram from '@/components/icons/icon-instagram'
import IconLinkedin from '@/components/icons/icon-linkedin'
import IconTwitter from '@/components/icons/icon-twitter'
import helper from '@/lib/helper'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'About Us | InfynixAI',
    description:
        'Enhance your service offerings and streamline processes with our intuitive AI SaaS template.',
    openGraph: {
        ...helper.openGraphData,
        title: 'About Us | InfynixAI',
        description:
            'Enhance your service offerings and streamline processes with our intuitive AI SaaS template.',
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
            <div className="relative -mt-24 overflow-hidden pt-24">
                <span className="absolute left-0 top-0 z-[-1] size-[570px] rounded-[50%] bg-secondary/[0.6] blur-[270px]"></span>
                <span className="absolute right-0 top-0 z-[-1] size-[570px] rounded-[50%] bg-secondary/[0.6] blur-[270px]"></span>
                <AboutUsHeroBanner />
                <div className="bg-gray-light/50 overflow-hidden sm:pt-10">
                    <div className="flex animate-[marquee_4s_linear_infinite] items-center gap-8 whitespace-nowrap text-2xl font-medium text-black sm:animate-[marquee_30s_linear_infinite] sm:text-4xl lg:text-[80px]/[90px]">
                        <div className="relative bg-linear-to-l from-green-100 to-green-light bg-clip-text text-transparent">
                            About Us
                        </div>
                        <Image
                            src="/images/star.png"
                            width={32}
                            height={32}
                            alt="Star"
                            className="size-8"
                        />
                        <div className="border-webkit relative bg-linear-to-l from-transparent to-transparent bg-clip-text text-transparent transition-all duration-500 hover:from-green-100 hover:to-green-light">
                            About Us
                        </div>
                        <Image
                            src="/images/star.png"
                            width={32}
                            height={32}
                            alt="Star"
                            className="size-8"
                        />
                        <div className="relative bg-linear-to-l from-green-100 to-green-light bg-clip-text text-transparent">
                            About Us
                        </div>
                        <Image
                            src="/images/star.png"
                            width={32}
                            height={32}
                            alt="Star"
                            className="size-8"
                        />
                        <div className="border-webkit relative bg-linear-to-l from-transparent to-transparent bg-clip-text text-transparent transition-all duration-500 hover:from-green-100 hover:to-green-light">
                            About Us
                        </div>
                        <Image
                            src="/images/star.png"
                            width={32}
                            height={32}
                            alt="Star"
                            className="size-8"
                        />
                        <div className="relative bg-linear-to-l from-green-100 to-green-light bg-clip-text text-transparent">
                            About Us
                        </div>
                        <Image
                            src="/images/star.png"
                            width={32}
                            height={32}
                            alt="Star"
                            className="size-8"
                        />
                        <div className="border-webkit relative bg-linear-to-l from-transparent to-transparent bg-clip-text text-transparent transition-all duration-500 hover:from-green-100 hover:to-green-light">
                            About Us
                        </div>
                        <Image
                            src="/images/star.png"
                            width={32}
                            height={32}
                            alt="Star"
                            className="size-8"
                        />
                        <div className="relative bg-linear-to-l from-green-100 to-green-light bg-clip-text text-transparent">
                            About Us
                        </div>
                        <Image
                            src="/images/star.png"
                            width={32}
                            height={32}
                            alt="Star"
                            className="size-8"
                        />
                        <div className="border-webkit relative bg-linear-to-l from-transparent to-transparent bg-clip-text text-transparent transition-all duration-500 hover:from-green-100 hover:to-green-light">
                            About Us
                        </div>
                        <Image
                            src="/images/star.png"
                            width={32}
                            height={32}
                            alt="Star"
                            className="size-8"
                        />
                        <div className="relative bg-linear-to-l from-green-100 to-green-light bg-clip-text text-transparent">
                            About Us
                        </div>
                        <Image
                            src="/images/star.png"
                            width={32}
                            height={32}
                            alt="Star"
                            className="size-8"
                        />
                        <div className="border-webkit relative bg-linear-to-l from-transparent to-transparent bg-clip-text text-transparent transition-all duration-500 hover:from-green-100 hover:to-green-light">
                            About Us
                        </div>
                        <Image
                            src="/images/star.png"
                            width={32}
                            height={32}
                            alt="Star"
                            className="size-8"
                        />
                        <div className="relative bg-linear-to-l from-green-100 to-green-light bg-clip-text text-transparent">
                            About Us
                        </div>
                        <Image
                            src="/images/star.png"
                            width={32}
                            height={32}
                            alt="Star"
                            className="size-8"
                        />
                        <div className="border-webkit relative bg-linear-to-l from-transparent to-transparent bg-clip-text text-transparent transition-all duration-500 hover:from-green-100 hover:to-green-light">
                            About Us
                        </div>
                        <Image
                            src="/images/star.png"
                            width={32}
                            height={32}
                            alt="Star"
                            className="size-8"
                        />
                        <div className="relative bg-linear-to-l from-green-100 to-green-light bg-clip-text text-transparent">
                            About Us
                        </div>
                        <Image
                            src="/images/star.png"
                            width={32}
                            height={32}
                            alt="Star"
                            className="size-8"
                        />
                        <div className="border-webkit relative bg-linear-to-l from-transparent to-transparent bg-clip-text text-transparent transition-all duration-500 hover:from-green-100 hover:to-green-light">
                            About Us
                        </div>
                    </div>
                </div>
                <div id="ai-image" className="scroll-smooth pt-16 lg:pt-28">
                    <div className="mx-auto h-96 w-full max-w-7xl overflow-hidden border-2 border-dashed border-green-100 lg:h-[600px]">
                        <Image
                            src="/images/ai-img.jpg"
                            alt="ai-iamge"
                            width={1276}
                            height={596}
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            </div>

            <div className="container py-16 lg:py-20">
                <SectionHeading
                    title={
                        <>
                            Meet Our Expert <span>Technical Team</span>
                        </>
                    }
                    descriptionClassName="max-w-3xl"
                    description="Our team of skilled professionals is dedicated to
                        pushing the boundaries of AI innovation, providing
                        expert solutions that drive success and efficiency."
                />

                <div className="grid items-center gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="group rounded-3xl border border-green-light/20 bg-linear-to-b from-green-100/10 to-transparent p-2.5 shadow-[10px_10px_0_0_rgba(255,255,255,0.1)] transition hover:shadow-none lg:p-5">
                        <div className="flex flex-col gap-5 rounded-3xl bg-linear-to-b from-green-100/5 to-transparent p-2.5 lg:p-5">
                            <div className="relative overflow-hidden rounded-3xl">
                                <span className="absolute inset-0 bg-primary/50 opacity-0 transition duration-300 group-hover:opacity-100"></span>
                                <Link
                                    href="https://www.facebook.com/login/"
                                    target="_blank"
                                    className="group/social absolute -bottom-full right-4 z-10 grid size-10 place-items-center rounded-full bg-linear-to-l from-green-100 to-green-light text-primary transition-all duration-700 group-hover:bottom-4"
                                >
                                    <IconFaceBook className="size-5 shrink-0 transition group-hover/social:scale-110" />
                                </Link>
                                <Link
                                    href="https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"
                                    target="_blank"
                                    className="group/social absolute -bottom-full right-4 z-10 grid size-10 place-items-center rounded-full bg-linear-to-l from-green-100 to-green-light text-primary transition-all duration-500 group-hover:bottom-16"
                                >
                                    <IconTwitter className="size-5 shrink-0 transition group-hover/social:scale-110" />
                                </Link>
                                <Link
                                    href="https://www.instagram.com/"
                                    target="_blank"
                                    className="group/social absolute -bottom-full right-4 z-10 grid size-10 place-items-center rounded-full bg-linear-to-l from-green-100 to-green-light text-primary transition-all duration-300 group-hover:bottom-28"
                                >
                                    <IconInstagram className="size-5 shrink-0 transition group-hover/social:scale-110" />
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin"
                                    target="_blank"
                                    className="group/social absolute -bottom-full right-4 z-10 grid size-10 place-items-center rounded-full bg-linear-to-l from-green-100 to-green-light text-primary transition-all group-hover:bottom-40"
                                >
                                    <IconLinkedin className="size-5 shrink-0 transition group-hover/social:scale-110" />
                                </Link>
                                <Image
                                    src="/images/chif-officer.png"
                                    alt="team member"
                                    className="w-full"
                                    width={371}
                                    height={371}
                                />
                            </div>
                            <div className="rounded-2xl border border-green-light/20 bg-linear-to-l from-green-100/10 to-transparent p-2 lg:p-3">
                                <div className="rounded-2xl border border-green-light/20 bg-primary p-2 text-center duration-300 group-hover:shadow-[0_-13px_30px_-10px_rgba(68,241,38,0.4)] lg:p-3">
                                    <h3 className="mb-1.5 text-2xl font-medium">
                                        John Mitchell
                                    </h3>
                                    <p className="text-gray">
                                        Chief AI Officer
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="group rounded-3xl border border-green-light/20 bg-linear-to-b from-green-100/10 to-transparent p-2.5 shadow-[10px_10px_0_0_rgba(255,255,255,0.1)] transition hover:shadow-none lg:p-5">
                        <div className="flex flex-col gap-5 rounded-3xl bg-linear-to-b from-green-100/5 to-transparent p-2.5 lg:p-5">
                            <div className="relative overflow-hidden rounded-3xl">
                                <span className="absolute inset-0 bg-primary/50 opacity-0 transition duration-300 group-hover:opacity-100"></span>
                                <Link
                                    href="https://www.facebook.com/login/"
                                    target="_blank"
                                    className="group/social absolute -bottom-full right-4 z-10 grid size-10 place-items-center rounded-full bg-linear-to-l from-green-100 to-green-light text-primary transition-all duration-700 group-hover:bottom-4"
                                >
                                    <IconFaceBook className="size-5 shrink-0 transition group-hover/social:scale-110" />
                                </Link>
                                <Link
                                    href="https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"
                                    target="_blank"
                                    className="group/social absolute -bottom-full right-4 z-10 grid size-10 place-items-center rounded-full bg-linear-to-l from-green-100 to-green-light text-primary transition-all duration-500 group-hover:bottom-16"
                                >
                                    <IconTwitter className="size-5 shrink-0 transition group-hover/social:scale-110" />
                                </Link>
                                <Link
                                    href="https://www.instagram.com/"
                                    target="_blank"
                                    className="group/social absolute -bottom-full right-4 z-10 grid size-10 place-items-center rounded-full bg-linear-to-l from-green-100 to-green-light text-primary transition-all duration-300 group-hover:bottom-28"
                                >
                                    <IconInstagram className="size-5 shrink-0 transition group-hover/social:scale-110" />
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin"
                                    target="_blank"
                                    className="group/social absolute -bottom-full right-4 z-10 grid size-10 place-items-center rounded-full bg-linear-to-l from-green-100 to-green-light text-primary transition-all group-hover:bottom-40"
                                >
                                    <IconLinkedin className="size-5 shrink-0 transition group-hover/social:scale-110" />
                                </Link>
                                <Image
                                    src="/images/ai-solutions.jpg"
                                    alt="team member"
                                    className="w-full"
                                    width={371}
                                    height={371}
                                />
                            </div>
                            <div className="rounded-2xl border border-green-light/20 bg-linear-to-l from-green-100/10 to-transparent p-2 lg:p-3">
                                <div className="rounded-2xl border border-green-light/20 bg-primary p-2 text-center duration-300 group-hover:shadow-[0_-13px_30px_-10px_rgba(68,241,38,0.4)] lg:p-3">
                                    <h3 className="mb-1.5 text-2xl font-medium">
                                        Sarah Collins
                                    </h3>
                                    <p className="text-gray">
                                        Lead Machine Learning Engineer
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="group rounded-3xl border border-green-light/20 bg-linear-to-b from-green-100/10 to-transparent p-2.5 shadow-[10px_10px_0_0_rgba(255,255,255,0.1)] transition hover:shadow-none lg:p-5">
                        <div className="flex flex-col gap-5 rounded-3xl bg-linear-to-b from-green-100/5 to-transparent p-2.5 lg:p-5">
                            <div className="relative overflow-hidden rounded-3xl">
                                <span className="absolute inset-0 bg-primary/50 opacity-0 transition duration-300 group-hover:opacity-100"></span>
                                <Link
                                    href="https://www.facebook.com/login/"
                                    target="_blank"
                                    className="group/social absolute -bottom-full right-4 z-10 grid size-10 place-items-center rounded-full bg-linear-to-l from-green-100 to-green-light text-primary transition-all duration-700 group-hover:bottom-4"
                                >
                                    <IconFaceBook className="size-5 shrink-0 transition group-hover/social:scale-110" />
                                </Link>
                                <Link
                                    href="https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"
                                    target="_blank"
                                    className="group/social absolute -bottom-full right-4 z-10 grid size-10 place-items-center rounded-full bg-linear-to-l from-green-100 to-green-light text-primary transition-all duration-500 group-hover:bottom-16"
                                >
                                    <IconTwitter className="size-5 shrink-0 transition group-hover/social:scale-110" />
                                </Link>
                                <Link
                                    href="https://www.instagram.com/"
                                    target="_blank"
                                    className="group/social absolute -bottom-full right-4 z-10 grid size-10 place-items-center rounded-full bg-linear-to-l from-green-100 to-green-light text-primary transition-all duration-300 group-hover:bottom-28"
                                >
                                    <IconInstagram className="size-5 shrink-0 transition group-hover/social:scale-110" />
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin"
                                    target="_blank"
                                    className="group/social absolute -bottom-full right-4 z-10 grid size-10 place-items-center rounded-full bg-linear-to-l from-green-100 to-green-light text-primary transition-all group-hover:bottom-40"
                                >
                                    <IconLinkedin className="size-5 shrink-0 transition group-hover/social:scale-110" />
                                </Link>
                                <Image
                                    src="/images/data-scientist.png"
                                    alt="team member"
                                    className="w-full"
                                    width={371}
                                    height={371}
                                />
                            </div>
                            <div className="rounded-2xl border border-green-light/20 bg-linear-to-l from-green-100/10 to-transparent p-2 lg:p-3">
                                <div className="rounded-2xl border border-green-light/20 bg-primary p-2 text-center duration-300 group-hover:shadow-[0_-13px_30px_-10px_rgba(68,241,38,0.4)] lg:p-3">
                                    <h3 className="te mb-1.5 text-2xl font-medium">
                                        David Ross
                                    </h3>
                                    <p className="text-gray">
                                        Senior AI Research Scientist
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container flex flex-col justify-between gap-10 pb-16 pt-10 sm:gap-14 lg:flex-row lg:py-20">
                <SectionHeading
                    className="max-w-lg text-left mb-0 sm:mb-10"
                    title={
                        <>
                            Unleash the Power of <span>AI Innovation</span>
                        </>
                    }
                    titleClassName="max-w-[520px] w-full"
                    descriptionClassName="mx-0 max-w-lg"
                    description="Explore how AI can drive change, streamline operations, and foster new opportunities in every industry."
                />
                <div className="grid max-w-2xl grow gap-5 sm:grid-cols-2">
                    <div className="border border-green-100/20 bg-linear-to-br from-green-100/10 p-5 shadow-[0_0_8px_2px_rgba(255,255,255,0.1)] sm:-mt-10 sm:mb-10">
                        <Image
                            src="/images/renewable-energy.svg"
                            height={48}
                            width={48}
                            alt="renewable energy"
                            className="mb-2 w-12 shrink-0"
                        />
                        <h3 className="mb-3.5 text-2xl">Sustainability</h3>
                        <p>
                            Developing AI tools that prioritize sustainability,
                            helping businesses reduce their environmental
                            footprint while innovating.
                        </p>
                    </div>
                    <div className="border border-green-100/20 bg-linear-to-bl from-green-100/10 p-5 shadow-[0_0_8px_2px_rgba(255,255,255,0.1)]">
                        <Image
                            src="/images/collaboration.svg"
                            height={48}
                            width={48}
                            alt="collaboration"
                            className="mb-2 w-12 shrink-0"
                        />
                        <h3 className="mb-3.5 text-2xl">Collaboration</h3>
                        <p>
                            Empowering teams with AI-driven tools that enhance
                            productivity and streamline collaboration across
                            industries.
                        </p>
                    </div>
                    <div className="border border-green-100/20 bg-linear-to-tr from-green-100/10 p-5 shadow-[0_0_8px_2px_rgba(255,255,255,0.1)] sm:-mt-10 sm:mb-10">
                        <Image
                            src="/images/quality-medal.svg"
                            height={48}
                            width={48}
                            alt="quality-medal"
                            className="mb-2 w-12 shrink-0"
                        />
                        <h3 className="mb-3.5 text-2xl">Excellence</h3>
                        <p>
                            Dedicated to delivering cutting-edge AI solutions
                            that elevate performance and provide exceptional
                            results.
                        </p>
                    </div>
                    <div className="border border-green-100/20 bg-linear-to-tl from-green-100/10 p-5 shadow-[0_0_8px_2px_rgba(255,255,255,0.1)]">
                        <Image
                            src="/images/security.svg"
                            height={48}
                            width={48}
                            alt="security"
                            className="mb-2 w-12 shrink-0"
                        />
                        <h3 className="mb-3.5 text-2xl">Security</h3>
                        <p>
                            Ensuring that all AI tools are built with robust
                            security features to protect data and maintain
                            privacy.
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <SectionHeading
                    className="mb-10!"
                    title={
                        <>
                            Company <span>Milestones</span>
                        </>
                    }
                />
                <MilestoneCarousel />
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: `{
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "About Us | InfynixAI",
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
                        "name": "About Us | InfynixAI",
                        "item": "${process.env.NEXT_PUBLIC_APP_URL}/about-us"
                    }]
                }
            }`,
                }}
            />
        </>
    )
}
