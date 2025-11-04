import type { Metadata } from 'next'
import '@/app/globals.css'
import helper from '@/lib/helper'
import { Funnel_Display } from 'next/font/google'

const font = Funnel_Display({
    subsets: ['latin'],
    variable: '--font-funnel-display',
})

export const metadata: Metadata = {
    title: 'InfynixAI',
    description:
        'Enhance your service offerings and streamline processes with our intuitive AI SaaS template.',
    openGraph: {
        ...helper.openGraphData,
        url: process.env.NEXT_PUBLIC_APP_URL + '/',
        type: 'website',
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}/`,
    },
    twitter: {
        site: '@infynixai',
    },
    robots: {
        index: true,
        follow: true,
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className="bg-primary font-funnel-display flex min-h-screen flex-col text-base/6 font-normal text-white antialiased"
                style={
                    {
                        '--font-funnel-display': font.style.fontFamily,
                    } as React.CSSProperties
                }
            >
                {children}
            </body>
        </html>
    )
}
