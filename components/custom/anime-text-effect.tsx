'use client'

import { useEffect, useRef } from 'react'
import { createTimeline } from 'animejs'

const AnimeTextEffect = () => {
    const text = 'Artificial Intelligence'
    const scope = useRef<HTMLSpanElement | null>(null)
    const timeline = useRef<ReturnType<typeof createTimeline> | null>(null)

    useEffect(() => {
        if (!scope.current) return

        timeline.current = createTimeline({
            loop: true,
        })

        timeline.current
            .add(scope.current.querySelectorAll('.letter'), {
                opacity: [0, 1],
                translateY: ['1.1em', 0],
                translateX: ['0.55em', 0],
                rotateZ: [180, 0],
                duration: 750,
                ease: 'outExpo',
                delay: (el, i) => 50 * i,
            })
            .add(
                scope.current,
                {
                    opacity: 0,
                    duration: 1000,
                    ease: 'outExpo',
                },
                '+=1000',
            )

        return () => {
            timeline.current?.pause()
        }
    }, [])

    return (
        <span ref={scope} className="home-text overflow-hidden">
            {text.split('').map((letter, index) => (
                <span
                    key={index}
                    className="letter"
                    style={{
                        display: 'inline-block',
                        opacity: 0,
                    }}
                >
                    {letter === ' ' ? '\u00A0' : letter}
                </span>
            ))}
        </span>
    )
}

export default AnimeTextEffect
