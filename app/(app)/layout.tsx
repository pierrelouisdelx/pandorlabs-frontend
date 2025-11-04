'use client'

import { ScreenLoading } from '@/components/custom/screen-loading'
import Footer from '@/components/layouts/footer'
import Header from '@/components/layouts/header'
import { useEffect, useState } from 'react'

export default function DefaultLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const [isLoad, setIsLoad] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setIsLoad(false)
        }, 1500)
    }, [])

    if (isLoad) {
        return <ScreenLoading />
    }
    return (
        <>
            <Header />
            <div className="grow pb-20">{children}</div>
            <Footer />
        </>
    )
}
