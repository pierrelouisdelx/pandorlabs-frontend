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

  const pathName = usePathname()
  useEffect(() => {
    setIsOpen(false)
  }, [pathName])

  return (
    <header className="sticky top-5 z-50 container flex items-center justify-center">
      <div className="flex w-full items-center justify-between gap-5 rounded-full bg-white/10 px-10 py-2 shadow-[0_0_10px_0_rgba(255,255,255,0.1)] backdrop-blur-lg">
        <Logo />
        <div className="flex-1 flex justify-center">
          <NavLinks className="hidden lg:flex" />
        </div>
        <div className="flex gap-3.5">
          <Link
            href="/contact-us"
            className={`${buttonVariants()} rounded-full`}
          >
            Book a demo
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
