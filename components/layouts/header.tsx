'use client'

import { MenuIcon } from 'lucide-react'
import NavLinks from '@/components/layouts/nav-links'
import { buttonVariants } from '@/components/ui/button'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Logo from './logo'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const pathName = usePathname()
    useEffect(() => {
        setIsOpen(false)
    }, [pathName])
    return (
        <header
            className={`header sticky top-0 z-50 bg-white/10 backdrop-blur-lg transition ${isScrolled ? 'shadow-[0_0_10px_0_rgba(255,255,255,0.1)]' : ''}`}
        >
            <div className="container flex items-center justify-center gap-5 py-3.5 lg:gap-10 lg:py-0">
                <div className="flex items-center gap-12">
                    <Logo />
                    <NavLinks className="hidden lg:flex" />
                </div>
                <div className="flex gap-3.5">
                    <Link
                        href="/contact-us"
                        className={`${buttonVariants()} rounded-full`}
                    >
                        Contact Us
                    </Link>

                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <button type="button" className="lg:hidden">
                                <span className="sr-only">Menu</span>
                                <MenuIcon className="size-8 text-white" />
                            </button>
                        </SheetTrigger>
                        <SheetContent className="p-0">
                            <SheetTitle hidden />
                            <SheetDescription hidden />
                            <NavLinks />
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}
