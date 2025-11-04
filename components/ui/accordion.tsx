'use client'

import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDown, PlusCircle } from 'lucide-react'

import { cn } from '@/lib/utils'
import IconPlusRounded from '@/components/icons/icon-plus-rounded'

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
    <AccordionPrimitive.Item
        ref={ref}
        className={cn(
            'border border-gray/50 bg-[url(/images/single-faq-bg.png)] bg-cover bg-center bg-no-repeat',
            className,
        )}
        {...props}
    />
))
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
            'bg-gray-200 flex w-full items-center justify-between gap-5 px-4 py-3.5 text-left text-base/6 transition-all lg:text-lg [&[data-state=open]>svg>.path1]:hidden [&[data-state=open]>svg]:-rotate-90',
            className,
        )}
        {...props}
    >
        {children}
        <IconPlusRounded className="plus size-5 shrink-0 rounded-full border border-green-100 p-px text-green-100 duration-300" />
    </AccordionPrimitive.Trigger>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
        ref={ref}
        className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
        {...props}
    >
        <div className={cn('px-4 pb-3.5 leading-6 text-gray', className)}>
            {children}
        </div>
    </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
