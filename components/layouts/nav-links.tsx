import NavLink from '@/components/ui/nav-link'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

const NavLinks = ({ className }: any) => {
  return (
    <ul
      className={cn(
        'flex flex-col gap-5 py-2 transition-all duration-300 lg:flex-row lg:items-center lg:gap-10 lg:p-0',
        className,
      )}
    >
      <li className="inline-block lg:hidden">
        <Link href="/" className="inline-block">
          <Image
            src="/images/logo.svg"
            alt="logo"
            width={128}
            height={26}
            className="h-auto w-36"
          />
        </Link>
      </li>
      <span className="via-green-light/50 mb-4 block h-px w-full bg-linear-to-r from-white/5 to-white/5 lg:hidden"></span>
      <li>
        <NavLink href="/" className="nav-links">
          Products
        </NavLink>
      </li>
      <li>
        <NavLink href="/about-us" className="nav-links">
          About us
        </NavLink>
      </li>
      <li>
        <NavLink href="/contact-us" className="nav-links">
          Contact us
        </NavLink>
      </li>
    </ul>
  )
}
export default NavLinks
