'use client'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

export default function MilestoneCarousel() {
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
            <div className="milestone-section overflow-hidden px-4 text-center text-gray">
                <CarouselContent className="milestone-container gap-4 flex sm:px-4">
                    <CarouselItem className="flex h-full flex-col gap-5 px-4 pt-4 sm:basis-1/2 md:basis-1/3 xl:basis-1/4">
                        <div className="flex h-full flex-col gap-4">
                            <p className="grow">
                                Founded with a vision to revolutionize AI
                                technology, InfynixAI began as a small startup
                                dedicated to solving complex problems with
                                artificial intelligence.
                            </p>
                            <h3 className="text-2xl font-semibold text-white">
                                Company foundation
                            </h3>
                        </div>

                        <div className="flex flex-col items-center gap-4">
                            <h4 className="active-year text-xl font-bold">
                                2014
                            </h4>
                            <span className="relative block h-10 w-0.5 bg-gray/20 before:absolute before:-top-2 before:left-1/2 before:size-2 before:-translate-x-1/2 before:rounded-full before:bg-gray/50"></span>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="flex h-full flex-col gap-5 px-4 pt-4 sm:basis-1/2 md:basis-1/3 xl:basis-1/4">
                        <div className="flex h-full flex-col gap-4">
                            <p className="grow">
                                We introduced our first AI-powered tool, making
                                it easier for businesses to leverage advanced
                                machine learning algorithms for content
                                creation.
                            </p>
                            <h3 className="text-2xl font-semibold text-white">
                                First AI tool launch
                            </h3>
                        </div>

                        <div className="flex flex-col items-center gap-4">
                            <h4 className="active-year text-xl font-bold">
                                2015
                            </h4>
                            <span className="relative block h-10 w-0.5 bg-gray/20 before:absolute before:-top-2 before:left-1/2 before:size-2 before:-translate-x-1/2 before:rounded-full before:bg-gray/50"></span>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="flex h-full flex-col gap-5 px-4 pt-4 sm:basis-1/2 md:basis-1/3 xl:basis-1/4">
                        <div className="flex h-full flex-col gap-4">
                            <p className="grow">
                                With early success, InfynixAI raised its Series A
                                funding, enabling us to expand our team and
                                enhance our technology to better serve global
                                clients.
                            </p>
                            <h3 className="text-2xl font-semibold text-white">
                                Series a funding
                            </h3>
                        </div>

                        <div className="flex flex-col items-center gap-4">
                            <h4 className="active-year text-xl font-bold">
                                2017
                            </h4>
                            <span className="relative block h-10 w-0.5 bg-gray/20 before:absolute before:-top-2 before:left-1/2 before:size-2 before:-translate-x-1/2 before:rounded-full before:bg-gray/50"></span>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="flex h-full flex-col gap-5 px-4 pt-4 sm:basis-1/2 md:basis-1/3 xl:basis-1/4">
                        <div className="flex h-full flex-col gap-4">
                            <p className="grow">
                            InfynixAI formed key partnerships with top global
                                enterprises, empowering them with our AI
                                technology to drive efficiency and productivity.
                            </p>
                            <h3 className="text-2xl font-semibold text-white">
                                Strategic partnerships
                            </h3>
                        </div>

                        <div className="flex flex-col items-center gap-4">
                            <h4 className="active-year text-xl font-bold">
                                2019
                            </h4>
                            <span className="relative block h-10 w-0.5 bg-gray/20 before:absolute before:-top-2 before:left-1/2 before:size-2 before:-translate-x-1/2 before:rounded-full before:bg-gray/50"></span>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="flex h-full flex-col gap-5 px-4 pt-4 sm:basis-1/2 md:basis-1/3 xl:basis-1/4">
                        <div className="flex h-full flex-col gap-4">
                            <p className="grow">
                                Our user base grew exponentially, surpassing 1
                                million active users, solidifying InfynixAI as a
                                trusted name in the AI SaaS space.
                            </p>
                            <h3 className="text-2xl font-semibold text-white">
                                1 Million active users
                            </h3>
                        </div>

                        <div className="flex flex-col items-center gap-4">
                            <h4 className="active-year text-xl font-bold">
                                2022
                            </h4>
                            <span className="relative block h-10 w-0.5 bg-gray/20 before:absolute before:-top-2 before:left-1/2 before:size-2 before:-translate-x-1/2 before:rounded-full before:bg-gray/50"></span>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="flex h-full flex-col gap-5 px-4 pt-4 sm:basis-1/2 md:basis-1/3 xl:basis-1/4">
                        <div className="flex h-full flex-col gap-4">
                            <p className="grow">
                                Continuing our growth, InfynixAI expanded its
                                reach globally, launching new advanced features
                                and gaining recognition as a leader in AI
                                innovation.
                            </p>
                            <h3 className="text-2xl font-semibold text-white">
                                Global expansion
                            </h3>
                        </div>

                        <div className="flex flex-col items-center gap-4">
                            <h4 className="active-year text-xl font-bold">
                                2023
                            </h4>
                            <span className="relative block h-10 w-0.5 bg-gray/20 before:absolute before:-top-2 before:left-1/2 before:size-2 before:-translate-x-1/2 before:rounded-full before:bg-gray/50"></span>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <div className="relative overflow-hidden rounded-full border border-gray/20 py-px">
                    <div className="flex animate-marquee2 gap-10">
                        <div className="w-screen">
                            <span className="absolute left-0 top-1/2 z-10 h-0.5 w-20 -translate-y-1/2 bg-linear-to-r from-transparent to-green" />
                        </div>
                        <div className="w-screen">
                            <span className="absolute left-0 top-1/2 z-10 h-0.5 w-20 -translate-y-1/2 bg-linear-to-r from-transparent to-green" />
                        </div>
                        <div className="w-screen">
                            <span className="absolute left-0 top-1/2 z-10 h-0.5 w-20 -translate-y-1/2 bg-linear-to-r from-transparent to-green" />
                        </div>
                    </div>
                </div>
            </div>
        </Carousel>
    )
}
