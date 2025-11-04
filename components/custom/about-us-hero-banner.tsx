'use client'

import AnimeTextEffect from '@/components/custom/anime-text-effect'
import { ChevronsDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

export default function AboutUsHeroBanner() {
  useEffect(() => {
    document.querySelector('#scrollButton')?.addEventListener('click', () => {
      document
        .querySelector('#ai-image')
        ?.scrollIntoView({ behavior: 'smooth' })
    })
  }, [])
  return (
    <div className="cursor-effect-section container flex flex-col items-center py-16 lg:pt-40 lg:pb-20">
      <h1 className="mx-auto mb-14 max-w-[1100px] overflow-hidden text-center text-[28px]/8 font-semibold tracking-wider sm:text-4xl lg:mb-20 lg:text-6xl/[75px]">
        PandorLabs Transforming the Future of&nbsp;
        <AnimeTextEffect />
      </h1>
      <div className="relative text-center">
        <button
          id="scrollButton"
          className="group inline-flex cursor-pointer rounded-full bg-green-100/5 p-2"
        >
          <span className="absolute top-1/2 left-1/2 z-10 mt-1.5 -translate-x-1/2 -translate-y-1/2 text-white">
            <ChevronsDown className="size-8 animate-[bounce_2s_infinite]" />
          </span>
          <Image
            src="/images/frame-one.png"
            alt="Ai image"
            width={144}
            height={144}
            className="w-24 animate-[spin_15s_linear_infinite] lg:w-36"
          />
        </button>
      </div>
    </div>
  )
}
