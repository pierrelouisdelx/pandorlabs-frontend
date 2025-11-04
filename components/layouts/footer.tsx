import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className="mt-auto shadow-[0_0_20px_-10px_rgba(255,255,255,0.4)]">
      <div className="container">
        <div className="relative py-14 text-center lg:py-20">
          <Image
            src="/images/round.png"
            width={900}
            height={450}
            alt="round"
            className="absolute bottom-0 left-1/2 -z-1 w-[900px] -translate-x-1/2 animate-pulse opacity-80"
          />
          <Link href="/" className="inline-flex">
            <Image
              src="/images/logo.svg"
              alt="logo"
              width={128}
              height={26}
              className="h-auto w-36"
            />
          </Link>
          <ul className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-10">
            <li>
              <Link href="/about-us" className="hover:text-green">
                About us
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:text-green">
                Contact us
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-green">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-conditions" className="hover:text-green">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center gap-5 border-t border-white/30 py-7 sm:flex-row sm:justify-between">
          <p className="order-2 text-center font-semibold sm:order-0 md:text-left">
            © {new Date().getFullYear()}&nbsp;InfynixAI, Inc. All rights
            reserved.
          </p>
          <div className="order-1 flex items-center gap-5 sm:order-0">
            <Link
              href="https://www.facebook.com/sharer/sharer.php?u=https://ai-saas-theme-html.vercel.app/"
              target="_blank"
              className="hover:text-green"
            >
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="https://twitter.com/intent/tweet?url=https://ai-saas-theme-html.vercel.app/&amp;text="
              target="_blank"
              className="hover:text-green"
            >
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://www.instagram.com/?url=https%3A%2F%2Fai-saas-theme-html.vercel.app%2F"
              target="_blank"
              className="hover:text-green"
            >
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://ai-saas-theme-html.vercel.app/"
              target="_blank"
              className="hover:text-green"
            >
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
