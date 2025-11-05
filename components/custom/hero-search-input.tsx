'use client'

import { useState, FormEvent } from 'react'
import { Input } from '@/components/ui/input'
import { buttonVariants } from '@/components/ui/button'
import { Sparkles } from 'lucide-react'
import DemoRequestModal from './demo-request-modal'

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
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (query.trim()) {
      // Open the demo request modal
      setIsModalOpen(true)
      console.log('Opening demo request modal for query:', query)
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
    <>
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
        <div className="mt-8 space-y-4">
          <div className="flex items-center justify-center gap-2 text-sm text-white/70">
            <Sparkles className="h-4 w-4 text-green-light/80" />
            <span className="font-medium">Try an example:</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {exampleQueries.map((example, index) => (
              <button
                key={index}
                onClick={() => handleExampleClick(example.text)}
                className="group relative overflow-hidden rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-gray-200 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-green-light/60 hover:bg-white/10 hover:text-white hover:shadow-green-light/20"
              >
                <span className="relative z-10 mr-2 text-base">{example.icon}</span>
                <span className="relative z-10">{example.text}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-100/0 via-green-light/20 to-green-100/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </button>
            ))}
          </div>
        </div>
      </div>

      <DemoRequestModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  )
}
