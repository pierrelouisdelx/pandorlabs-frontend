import helper from '@/lib/helper'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Privacy Policy | InfynixAI',
    description:
        'Enhance your service offerings and streamline processes with our intuitive AI SaaS template.',
    openGraph: {
        ...helper.openGraphData,
        title: 'Privacy Policy | InfynixAI',
        description:
            'Enhance your service offerings and streamline processes with our intuitive AI SaaS template.',
        url: process.env.NEXT_PUBLIC_APP_URL + '/privacy-policy',
        type: 'website',
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}/privacy-policy`,
    },
}

export default function PrivacyPolicy() {
    return (
        <>
            <div className="relative -mt-24 bg-[url(/images/privacy-bg.jpg)] bg-cover bg-right bg-no-repeat pt-24 sm:bg-center">
                <div className="flex h-60 items-center justify-center lg:h-80">
                    <span className="absolute inset-0 bg-linear-to-r from-primary/90 to-primary/40"></span>
                    <h1 className="container relative text-center text-[30px]/9 font-semibold sm:text-4xl lg:text-5xl/[60px]">
                        Privacy
                        <span className="bg-linear-to-l from-green-100 to-green-light bg-clip-text text-transparent">
                            Policy
                        </span>
                    </h1>
                </div>
            </div>

            <div className="prose mx-auto w-full max-w-[1142px] px-4 pt-12 lg:prose-lg lg:pt-20">
                <p>
                    At InfynixAI, we value your privacy and are committed to
                    protecting your personal data. This Privacy Policy outlines
                    the information we collect, how we use it, and the steps we
                    take to safeguard it.
                </p>
                <ol type="1">
                    <li>
                        <h2>Information we collect</h2>
                        <p>
                            We collect both personal and non-personal
                            information when you use our services, including but
                            not limited to:
                        </p>
                        <ul>
                            <li>
                                Personal information: Name, email address,
                                contact details, billing information, etc.
                            </li>
                            <li>
                                Usage data: IP address, browser type, device
                                information, and interactions with our website.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h2>How we use your information</h2>
                        <p>
                            We use the information we collect for the following
                            purposes:
                        </p>
                        <ul>
                            <li>To provide and improve our AI services</li>
                            <li>
                                To communicate with you, including sending
                                important updates and marketing communications
                            </li>
                            <li>To process payments and manage your account</li>
                            <li>
                                To ensure the security and integrity of our
                                platform
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h2>Sharing your information</h2>
                        <p>
                            We do not sell, rent, or trade your personal
                            information. However, we may share your data with
                            trusted third-party service providers to help us
                            operate our platform or comply with legal
                            obligations.
                        </p>
                    </li>
                    <li>
                        <h2>Data security</h2>
                        <p>
                            We take appropriate measures to protect your
                            personal data from unauthorized access, alteration,
                            or disclosure. Our security practices are designed
                            to provide a high level of protection for your
                            information.
                        </p>
                    </li>
                    <li>
                        <h2>Your rights</h2>
                        <p>You have the right to:</p>
                        <ul>
                            <li>
                                Access, correct, or update your personal
                                information
                            </li>
                            <li>
                                Request the deletion of your data (where
                                applicable)
                            </li>
                            <li>
                                Opt-out of receiving marketing communications at
                                any time
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h2>Cookies and tracking technologies</h2>
                        <p>
                            We use cookies and similar technologies to enhance
                            your user experience, analyze usage, and provide
                            personalized content. You can control cookie
                            settings through your browser.
                        </p>
                    </li>
                    <li>
                        <h2>Changes to this privacy policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time.
                            Any changes will be posted on this page with an
                            updated effective date. Please check periodically
                            for updates.
                        </p>
                    </li>
                    <li>
                        <h2>Contacting Us</h2>
                        <p>
                            If you have any questions or concerns regarding this
                            Privacy Policy, feel free to contact us at:
                        </p>
                        <p className="mb-2.5 leading-5! lg:mb-5">
                            Email address: &nbsp;
                            <Link href="mailto:info@infynixai.com">
                                info@infynixai.com
                            </Link>
                        </p>
                        <p className="mb-2.5 leading-5! lg:mb-5">
                            Contact number: &nbsp;
                            <Link href="tel:+208-555-0112">+208-555-0112</Link>
                        </p>
                        <p className="mb-2.5 leading-5! lg:mb-5">
                            Address: &nbsp;
                            <span className="font-medium text-green-light">
                                4648 Rocky Road Philadelphia PA, 1920
                            </span>
                        </p>
                    </li>
                </ol>
                <div className="pt-5">
                    <p>
                        Thank you for your continued support, and we hope our
                        website remains a valuable resource for you.
                    </p>
                    <p className="mb-0!">Sincerely,</p>
                    <h4 className="text-green-light">InfynixAI Team</h4>
                </div>
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: `{
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Privicy Policy | InfynixAI",
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
                        "name": "Privicy Policy | InfynixAI",
                        "item": "${process.env.NEXT_PUBLIC_APP_URL}/privacy-policy"
                    }]
                }
            }`,
                }}
            />
        </>
    )
}
