import IconCheck from '@/components/icons/icon-check'
import IconClose from '@/components/icons/icon-close'
import { buttonVariants } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function PricingPlans() {
    return (
        <div className="container grid gap-5 sm:max-w-lg lg:max-w-7xl lg:grid-cols-3 lg:gap-10">
            <div className="flex border border-gray/5 shadow-xs shadow-white/10 lg:my-10">
                <div className="group relative mx-8 grow bg-primary py-8 pt-20">
                    <div className="absolute left-0 top-8 transition-all duration-700 group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:scale-125">
                        <Image
                            src="/images/fan-circled.png"
                            width={40}
                            height={40}
                            alt="fan-circled"
                            className="size-7 shrink-0 animate-[spin_0.7s_linear_infinite] opacity-80 duration-700 group-hover:size-10"
                        />
                    </div>
                    <div>
                        <h3 className="text-2xl font-normal text-[#ffc876]">
                            Basic plan
                        </h3>
                        <p className="text-gray">
                            Essential AI tools for individuals, at no cost.
                        </p>
                        <h4 className="mb-5 mt-4 flex items-center gap-1.5 text-3xl lg:text-5xl">
                            Free
                        </h4>

                        <div className="group relative z-1 mb-10 flex items-center gap-0.5 overflow-hidden bg-gray/50 bg-linear-to-r from-green-100 to-green-light p-0.5 hover:from-transparent hover:to-transparent">
                            <div className="absolute inset-0 h-full w-full animate-[spin_5s_linear_infinite] bg-linear-to-tr from-green-100 to-green-light/20 opacity-0 group-hover:opacity-100"></div>
                            <Link
                                href="/sign-in"
                                className="z-5 block w-full bg-primary! px-2.5 py-2 text-center"
                            >
                                Get started
                            </Link>
                        </div>
                        <div className="overflow-hidden">
                            <h5 className="relative mb-5 border-b border-gray/20 py-2 text-xl">
                                Features
                            </h5>
                            <ul className="space-y-2.5 text-gray">
                                <li className="flex gap-2">
                                    <div className="relative mt-0.5 inline-block size-4 text-primary before:absolute before:-bottom-0 before:-left-0 before:size-3.5 before:rounded-full before:bg-linear-to-l before:from-green-100 before:to-green-light">
                                        <IconCheck className="relative mr-1 size-3.5 shrink-0 pl-0.5" />
                                    </div>
                                    <p>
                                        AI-powered image generation (Basic
                                        quality)
                                    </p>
                                </li>
                                <li className="flex gap-2">
                                    <div className="relative mt-0.5 inline-block size-4 text-primary before:absolute before:-bottom-0 before:-left-0 before:size-3.5 before:rounded-full before:bg-linear-to-l before:from-green-100 before:to-green-light">
                                        <IconCheck className="relative mr-1 size-3.5 shrink-0 pl-0.5" />
                                    </div>
                                    <p>Access to basic templates and tools</p>
                                </li>
                                <li className="flex gap-2">
                                    <div className="relative mt-0.5 inline-block size-4 text-primary before:absolute before:-bottom-0 before:-left-0 before:size-3.5 before:rounded-full before:bg-linear-to-l before:from-green-100 before:to-green-light">
                                        <IconCheck className="relative mr-1 size-3.5 shrink-0 pl-0.5" />
                                    </div>
                                    <p>Community support</p>
                                </li>
                                <li className="flex gap-2">
                                    <div className="relative mt-0.5 inline-block size-4 text-primary before:absolute before:-bottom-0 before:-left-0 before:size-3.5 before:rounded-full before:bg-linear-to-l before:from-green-100 before:to-green-light">
                                        <IconCheck className="relative mr-1 size-3.5 shrink-0 pl-0.5" />
                                    </div>
                                    <p>Basic video editing tools</p>
                                </li>
                                <li className="flex gap-2">
                                    <div className="relative mt-0.5 inline-block size-4 text-primary before:absolute before:-bottom-0 before:-left-0 before:size-3.5 before:rounded-full before:bg-linear-to-l before:from-green-100 before:to-green-light">
                                        <IconCheck className="relative mr-1 size-3.5 shrink-0 pl-0.5" />
                                    </div>
                                    <p>Limited text-to-speech conversion</p>
                                </li>
                                <li className="flex gap-2 opacity-50">
                                    <div className="relative mt-0.5 inline-block size-4 text-primary before:absolute before:-bottom-0 before:-left-0 before:size-3.5 before:rounded-full before:bg-linear-to-l before:from-green-100 before:to-green-light">
                                        <IconClose className="relative mr-1 size-3.5 shrink-0 pl-0.5" />
                                    </div>
                                    <p>Premium image quality</p>
                                </li>
                                <li className="flex gap-2 opacity-50">
                                    <div className="relative mt-0.5 inline-block size-4 text-primary before:absolute before:-bottom-0 before:-left-0 before:size-3.5 before:rounded-full before:bg-linear-to-l before:from-green-100 before:to-green-light">
                                        <IconClose className="relative mr-1 size-3.5 shrink-0 pl-0.5" />
                                    </div>
                                    <p>Advanced customization options</p>
                                </li>
                                <li className="flex gap-2 opacity-50">
                                    <div className="relative mt-0.5 inline-block size-4 text-primary before:absolute before:-bottom-0 before:-left-0 before:size-3.5 before:rounded-full before:bg-linear-to-l before:from-green-100 before:to-green-light">
                                        <IconClose className="relative mr-1 size-3.5 shrink-0 pl-0.5" />
                                    </div>
                                    <p>Unlimited audio generation</p>
                                </li>
                                <li className="flex gap-2 opacity-50">
                                    <div className="relative mt-0.5 inline-block size-4 text-primary before:absolute before:-bottom-0 before:-left-0 before:size-3.5 before:rounded-full before:bg-linear-to-l before:from-green-100 before:to-green-light">
                                        <IconClose className="relative mr-1 size-3.5 shrink-0 pl-0.5" />
                                    </div>
                                    <p>Premium support</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative flex overflow-hidden bg-gray/50 p-px shadow-[0_0_40px_-5px_rgba(255,255,255,0.1)] duration-300 hover:shadow-none">
                <div className="glow absolute inset-0 size-60 animate-move bg-linear-to-l from-green to-transparent" />
                <div className="glow absolute inset-0 size-60 animate-move2 bg-linear-to-r from-green to-transparent" />
                <div className="group relative grow bg-primary p-8 pt-20">
                    <div className="absolute left-8 top-8 transition-all duration-700 group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:scale-125">
                        <Image
                            src="/images/diamond-premium.png"
                            alt="fan-circled"
                            height={40}
                            width={40}
                            className="mb-5 size-8 shrink-0 animate-pulse"
                        />
                    </div>
                    <div>
                        <h3 className="text-2xl font-normal text-[#85ea80]">
                            Professional plan
                        </h3>
                        <p className="text-gray">
                            Advanced features for small businesses.
                        </p>
                        <h4 className="mb-5 mt-4 flex items-center gap-1.5 text-3xl lg:text-5xl">
                            $ 20.00
                            <span className="text-lg text-gray/80">
                                /Per year
                            </span>
                        </h4>
                        <div className="mb-10">
                            <Link
                                href="/sign-in"
                                className={`w-full ${buttonVariants()}`}
                            >
                                Get started
                            </Link>
                        </div>

                        <div className="overflow-hidden">
                            <h5 className="relative mb-5 border-b border-gray/20 py-2 text-xl">
                                <div className="absolute -bottom-px left-0 z-10 h-px w-20 animate-right-left bg-linear-to-l from-transparent via-green to-transparent"></div>
                                Features
                            </h5>
                            <ul className="space-y-2.5 text-gray">
                                <li className="flex gap-2">
                                    <div className="relative mt-0.5 inline-block size-4 text-primary before:absolute before:-bottom-0 before:-left-0 before:size-3.5 before:rounded-full before:bg-linear-to-l before:from-green-100 before:to-green-light">
                                        <IconCheck className="relative mr-1 size-3.5 shrink-0 pl-0.5" />
                                    </div>
                                    <p>High-quality AI image generation</p>
                                </li>
                                <li className="flex gap-2">
                                    <div className="relative mt-0.5 inline-block size-4 text-primary before:absolute before:-bottom-0 before:-left-0 before:size-3.5 before:rounded-full before:bg-linear-to-l before:from-green-100 before:to-green-light">
                                        <IconCheck className="relative mr-1 size-3.5 shrink-0 pl-0.5" />
                                    </div>
                                    <p>Unlimited audio generation</p>
                                </li>
                                <li className="flex gap-2">
                                    <div className="relative mt-0.5 inline-block size-4 text-primary before:absolute before:-bottom-0 before:-left-0 before:size-3.5 before:rounded-full before:bg-linear-to-l before:from-green-100 before:to-green-light">
                                        <IconCheck className="relative mr-1 size-3.5 shrink-0 pl-0.5" />
                                    </div>
                                    <p>
                                        Full access to advanced templates and
                                        tools
                                    </p>
                                </li>
                                <li className="flex gap-2">
                                    <div className="relative mt-0.5 inline-block size-4 text-primary before:absolute before:-bottom-0 before:-left-0 before:size-3.5 before:rounded-full before:bg-linear-to-l before:from-green-100 before:to-green-light">
                                        <IconCheck className="relative mr-1 size-3.5 shrink-0 pl-0.5" />
                                    </div>
                                    <p>Priority support</p>
                                </li>
                                <li className="flex gap-2">
                                    <div className="relative mt-0.5 inline-block size-4 text-primary before:absolute before:-bottom-0 before:-left-0 before:size-3.5 before:rounded-full before:bg-linear-to-l before:from-green-100 before:to-green-light">
                                        <IconCheck className="relative mr-1 size-3.5 shrink-0 pl-0.5" />
                                    </div>
                                    <p>Advanced video editing tools</p>
                                </li>
                                <li className="flex gap-2">
                                    <div className="relative mt-0.5 inline-block size-4 text-primary before:absolute before:-bottom-0 before:-left-0 before:size-3.5 before:rounded-full before:bg-linear-to-l before:from-green-100 before:to-green-light">
                                        <IconCheck className="relative mr-1 size-3.5 shrink-0 pl-0.5" />
                                    </div>
                                    <p>
                                        Customizable AI text-to-speech options
                                    </p>
                                </li>
                                <li className="flex gap-2 opacity-50">
                                    <div className="relative mt-0.5 inline-block size-4 text-primary before:absolute before:-bottom-0 before:-left-0 before:size-3.5 before:rounded-full before:bg-linear-to-l before:from-green-100 before:to-green-light">
                                        <IconClose className="relative mr-1 size-3.5 shrink-0 pl-0.5" />
                                    </div>
                                    <p>Enterprise-level API integration</p>
                                </li>
                                <li className="flex gap-2 opacity-50">
                                    <div className="relative mt-0.5 inline-block size-4 text-primary before:absolute before:-bottom-0 before:-left-0 before:size-3.5 before:rounded-full before:bg-linear-to-l before:from-green-100 before:to-green-light">
                                        <IconClose className="relative mr-1 size-3.5 shrink-0 pl-0.5" />
                                    </div>
                                    <p>Team collaboration features</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex border border-gray/5 shadow-xs shadow-white/10 lg:my-10">
                <div className="group relative mx-8 grow bg-primary py-8 pt-20">
                    <div className="absolute left-0 top-8 transition-all duration-700 group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:scale-125">
                        <Image
                            src="/images/music-bars.png"
                            alt="fan-circled"
                            width={40}
                            height={40}
                            className="mb-5 size-7 shrink-0 animate-zoom-in-zoom-out"
                        />
                    </div>

                    <div>
                        <h3 className="text-2xl font-normal text-[#ff776f]">
                            Enterprise plan
                        </h3>
                        <p className="text-gray">
                            Unlimited tools and support for large teams.
                        </p>
                        <h4 className="mb-5 mt-4 flex items-center gap-1.5 text-3xl lg:text-5xl">
                            $ 40.00
                            <span className="text-lg text-gray/80">
                                /Per year
                            </span>
                        </h4>
                        <div className="group relative z-1 mb-10 flex items-center gap-0.5 overflow-hidden bg-gray/50 bg-linear-to-r from-green-100 to-green-light p-0.5 hover:from-transparent hover:to-transparent">
                            <div className="absolute inset-0 h-full w-full animate-[spin_5s_linear_infinite] bg-linear-to-tr from-green-100 to-green-light/20 opacity-0 group-hover:opacity-100"></div>
                            <Link
                                href="/sign-in"
                                className="z-5 w-full bg-primary px-2.5 py-2 text-center"
                            >
                                Get started
                            </Link>
                        </div>
                        <div className="overflow-hidden">
                            <h5 className="relative mb-5 border-b border-gray/20 py-2 text-xl">
                                Features
                            </h5>
                            <ul className="space-y-2.5 text-gray">
                                <li className="flex gap-2">
                                    <div className="relative mt-0.5 inline-block size-4 text-primary before:absolute before:-bottom-0 before:-left-0 before:size-3.5 before:rounded-full before:bg-linear-to-l before:from-green-100 before:to-green-light">
                                        <IconCheck className="relative mr-1 size-3.5 shrink-0 pl-0.5" />
                                    </div>
                                    <p>
                                        Ultra-high-quality image generation
                                        (Custom resolution)
                                    </p>
                                </li>
                                <li className="flex gap-2">
                                    <div className="relative mt-0.5 inline-block size-4 text-primary before:absolute before:-bottom-0 before:-left-0 before:size-3.5 before:rounded-full before:bg-linear-to-l before:from-green-100 before:to-green-light">
                                        <IconCheck className="relative mr-1 size-3.5 shrink-0 pl-0.5" />
                                    </div>
                                    <p>Unlimited audio and video generation</p>
                                </li>
                                <li className="flex gap-2">
                                    <div className="relative mt-0.5 inline-block size-4 text-primary before:absolute before:-bottom-0 before:-left-0 before:size-3.5 before:rounded-full before:bg-linear-to-l before:from-green-100 before:to-green-light">
                                        <IconCheck className="relative mr-1 size-3.5 shrink-0 pl-0.5" />
                                    </div>
                                    <p>
                                        Access to all advanced features and
                                        tools
                                    </p>
                                </li>
                                <li className="flex gap-2">
                                    <div className="relative mt-0.5 inline-block size-4 text-primary before:absolute before:-bottom-0 before:-left-0 before:size-3.5 before:rounded-full before:bg-linear-to-l before:from-green-100 before:to-green-light">
                                        <IconCheck className="relative mr-1 size-3.5 shrink-0 pl-0.5" />
                                    </div>
                                    <p>Dedicated account manager</p>
                                </li>
                                <li className="flex gap-2">
                                    <div className="relative mt-0.5 inline-block size-4 text-primary before:absolute before:-bottom-0 before:-left-0 before:size-3.5 before:rounded-full before:bg-linear-to-l before:from-green-100 before:to-green-light">
                                        <IconCheck className="relative mr-1 size-3.5 shrink-0 pl-0.5" />
                                    </div>
                                    <p>Team collaboration and sharing tools</p>
                                </li>
                                <li className="flex gap-2">
                                    <div className="relative mt-0.5 inline-block size-4 text-primary before:absolute before:-bottom-0 before:-left-0 before:size-3.5 before:rounded-full before:bg-linear-to-l before:from-green-100 before:to-green-light">
                                        <IconCheck className="relative mr-1 size-3.5 shrink-0 pl-0.5" />
                                    </div>
                                    <p>Full API integration</p>
                                </li>
                                <li className="flex gap-2">
                                    <div className="relative mt-0.5 inline-block size-4 text-primary before:absolute before:-bottom-0 before:-left-0 before:size-3.5 before:rounded-full before:bg-linear-to-l before:from-green-100 before:to-green-light">
                                        <IconCheck className="relative mr-1 size-3.5 shrink-0 pl-0.5" />
                                    </div>
                                    <p>24/7 premium support</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
