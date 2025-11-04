'use client'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import * as React from 'react'

const products = [
  {
    id: 'real-estate-data',
    title: 'Real Estate Data',
    description:
      'Comprehensive property listings, market trends, and investment analytics at your fingertips',
    href: '/products/real-estate-data',
  },
  {
    id: 'lead-generation',
    title: 'Lead Generation',
    description:
      'Capture, qualify, and convert high-quality leads with automated intelligence',
    href: '/products/lead-generation',
  },
  {
    id: 'shopping-monitoring',
    title: 'Shopping Monitoring',
    description:
      'Track competitor prices, stock levels, and market trends across e-commerce platforms',
    href: '/products/shopping-monitoring',
  },
  {
    id: 'crypto-data',
    title: 'Crypto Data',
    description:
      'Real-time cryptocurrency prices, blockchain analytics, and market intelligence APIs',
    href: '/products/crypto-data',
  },
  {
    id: 'ai-datasets',
    title: 'AI Datasets',
    description:
      'Production-ready training data for machine learning models across text, vision, and audio',
    href: '/products/ai-datasets',
  },
  {
    id: 'social-media',
    title: 'Social Media Data',
    description:
      'Real-time social media intelligence from 10+ platforms for brand monitoring and analytics',
    href: '/products/social-media',
  },
]

export default function ProductsMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="nav-links bg-transparent text-white">
            Products
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {products.map((product) => (
                <ListItem
                  key={product.id}
                  title={product.title}
                  href={product.href}
                >
                  {product.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-white">
            {title}
          </div>
          <p className="line-clamp-2 text-xs leading-snug text-white/70">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'
