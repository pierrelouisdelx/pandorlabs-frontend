import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
    'inline-flex items-center relative z-1! justify-center gap-2 whitespace-nowrap font-normal transition-colors focus-visible:outline-nonedisabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
    {
        variants: {
            variant: {
                default:
                    'bg-green-100 text-primary before:absolute before:inset-0 before:-z-1 before:bg-linear-to-l before:from-transparent before:via-green-light before:to-transparent before:bg-size-[250%] before:bg-left before:duration-500 hover:before:bg-right',
                destructive:
                    '',
                outline:
                    'border border-green bg-background hover:bg-accent hover:text-accent-foreground',
                secondary:
                    '',
                ghost: '',
                link: 'text-primary underline-offset-4 hover:underline',
            },
            size: {
                default: 'px-3 py-2.5',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    },
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button'
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
