'use client'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

export default function FeaturesCarousel() {
    return (
        <Carousel
            plugins={[
                Autoplay({
                    delay: 2000,
                }),
            ]}
            opts={{
                align: 'start',
                loop: true,
            }}
        >
            <div className="container relative text-right">
                <div className="relative mb-7 mt-3 z-5 justify-end inline-flex shrink-0 items-center gap-0.5 overflow-hidden p-0.5 sm:absolute sm:-top-[88px] sm:right-4 lg:-top-[124px]">
                    <span className="absolute -left-1/2 -top-1/2 -z-1 h-[300%] w-[200%] animate-rounded bg-linear-to-l from-green-100 to-secondary/30" />
                    <CarouselPrevious />
                    <CarouselNext />
                </div>
            </div>
            <div className="relative border-t border-gray/20">
                <div className="absolute -top-px left-0 z-5 h-px w-20 animate-right-left bg-linear-to-l from-transparent via-green to-transparent" />
                <div className="container relative">
                    <span className="absolute inset-x-0 bottom-0 z-5 block h-10 w-full bg-linear-to-t from-primary/80 to-transparent" />
                    <div className="border-l-2 border-r-2 border-gray/20">
                        <CarouselContent className="flex divide-x divide-gray/20">
                            <CarouselItem className="border-l border-gray/20 px-5 py-14 sm:basis-1/2 md:basis-1/3 lg:py-20 xl:basis-1/4 xl:px-8">
                                <Image
                                    src="/images/quality-medal.svg"
                                    alt="quality"
                                    width={64}
                                    height={64}
                                    className="mb-6 w-16 shrink-0"
                                ></Image>
                                <h3 className="mb-3.5 text-xl lg:text-2xl">
                                    Real-time image enhancement
                                </h3>
                                <p className="text-gray">
                                    Boost the quality of your visuals instantly
                                    with AI-driven enhancement. Turn ordinary
                                    images into stunning masterpieces
                                    effortlessly.
                                </p>
                            </CarouselItem>
                            <CarouselItem className="px-5 py-14 sm:basis-1/2 md:basis-1/3 lg:py-20 xl:basis-1/4 xl:px-8">
                                <Image
                                    src="/images/browser.svg"
                                    alt="quality"
                                    width={64}
                                    height={64}
                                    className="mb-6 w-16 shrink-0"
                                ></Image>
                                <h3 className="mb-3.5 text-xl lg:text-2xl">
                                    Custom audio templates
                                </h3>
                                <p className="text-gray">
                                    Design unique audio tracks tailored to your
                                    brand. Use AI tools to create voiceovers,
                                    background music, and sound effects
                                    seamlessly.
                                </p>
                            </CarouselItem>
                            <CarouselItem className="px-5 py-14 sm:basis-1/2 md:basis-1/3 lg:py-20 xl:basis-1/4 xl:px-8">
                                <Image
                                    src="/images/robot.svg"
                                    alt="quality"
                                    width={64}
                                    height={64}
                                    className="mb-6 w-16 shrink-0"
                                ></Image>
                                <h3 className="mb-3.5 text-xl lg:text-2xl">
                                    Automated video editing
                                </h3>
                                <p className="text-gray">
                                    Edit videos like a pro with AI-powered
                                    automation. Trim, add effects, and optimize
                                    videos for all platforms in just a few
                                    clicks.
                                </p>
                            </CarouselItem>
                            <CarouselItem className="px-5 py-14 sm:basis-1/2 md:basis-1/3 lg:py-20 xl:basis-1/4 xl:px-8">
                                <Image
                                    src="/images/magic.svg"
                                    alt="quality"
                                    width={64}
                                    height={64}
                                    className="mb-6 w-16 shrink-0"
                                ></Image>
                                <h3 className="mb-3.5 text-xl lg:text-2xl">
                                    AI-driven content optimization
                                </h3>
                                <p className="text-gray">
                                    Improve your content with AI insights for
                                    better engagement. Get recommendations for
                                    text, visuals, and formats to reach your
                                    audience.
                                </p>
                            </CarouselItem>
                            <CarouselItem className="px-5 py-14 sm:basis-1/2 md:basis-1/3 lg:py-20 xl:basis-1/4 xl:px-8">
                                <Image
                                    src="/images/security.svg"
                                    alt="quality"
                                    width={64}
                                    height={64}
                                    className="mb-6 w-16 shrink-0"
                                ></Image>
                                <h3 className="mb-3.5 text-xl lg:text-2xl">
                                    Smart text-to-speech converter
                                </h3>
                                <p className="text-gray">
                                    Convert text into lifelike speech with
                                    advanced AI. Create voiceovers or narrations
                                    in various tones and languages effortlessly.
                                </p>
                            </CarouselItem>
                            <CarouselItem className="px-5 py-14 sm:basis-1/2 md:basis-1/3 lg:py-20 xl:basis-1/4 xl:px-8">
                                <Image
                                    src="/images/renewable-energy.svg"
                                    alt="quality"
                                    width={64}
                                    height={64}
                                    className="mb-6 w-16 shrink-0"
                                ></Image>
                                <h3 className="mb-3.5 text-xl lg:text-2xl">
                                    Advanced style transfer
                                </h3>
                                <p className="text-gray">
                                    Apply artistic styles to your images and
                                    videos with AI. Give your media a unique and
                                    professional touch instantly.
                                </p>
                            </CarouselItem>
                        </CarouselContent>
                    </div>
                </div>
            </div>
        </Carousel>
    )
}
