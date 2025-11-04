'use client'

import { useState, FormEvent } from 'react'
import { Input } from '@/components/ui/input'
import { buttonVariants } from '@/components/ui/button'
import { Sparkles } from 'lucide-react'

interface ExampleQuery {
  text: string
  icon: string
}

const exampleQueries: ExampleQuery[] = [
  {
    text: 'Extract pricing data from Amazon electronics',
    icon: '💰',
  },
  {
    text: 'Monitor competitor product launches in real-time',
    icon: '🎯',
  },
  {
    text: 'Track brand sentiment across social media',
    icon: '📊',
  },
  {
    text: 'Analyze SaaS pricing trends',
    icon: '📈',
  },
]

export default function HeroSearchInput() {
  const [query, setQuery] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (query.trim()) {
      // TODO: Implement actual submission logic
      console.log('Submitting query:', query)
      // For now, just log the query
      // In production, this would navigate to a results page or open a modal
    }
  }

  const handleExampleClick = (exampleText: string) => {
    setQuery(exampleText)
    // Auto-submit after setting the query
    setTimeout(() => {
      const form = document.getElementById('hero-search-form') as HTMLFormElement
      if (form) {
        form.requestSubmit()
      }
    }, 100)
  }

  return (
    <div className="mx-auto max-w-2xl">
      <form id="hero-search-form" onSubmit={handleSubmit} className="mb-6">
        <div className="flex gap-3">
          <Input
            type="text"
            placeholder="Describe data extraction requirements"
            className="flex-1"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className={buttonVariants()}>
            Get Started
          </button>
        </div>
      </form>

      {/* Example Queries */}
      <div className="space-y-3">
        <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
          <Sparkles className="h-4 w-4" />
          <span>Try an example:</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {exampleQueries.map((example, index) => (
            <button
              key={index}
              onClick={() => handleExampleClick(example.text)}
              className="group relative rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 transition-all hover:border-green-light/50 hover:bg-white/10 hover:text-white"
            >
              <span className="mr-2">{example.icon}</span>
              {example.text}
              <div className="absolute inset-0 rounded-full bg-linear-to-r from-green-100/0 via-green-light/10 to-green-100/0 opacity-0 transition-opacity group-hover:opacity-100" />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
