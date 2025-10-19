/* eslint-disable react-refresh/only-export-components */
import type { PageProps } from 'rari/client'
import MarkdownRenderer from '../../components/MarkdownRenderer'

export default function DocPage({ params }: PageProps) {
  const slug = params?.slug

  if (typeof slug !== 'string' || slug.includes('..') || slug.includes('/')) {
    return <div>Invalid documentation path.</div>
  }

  return (
    <div className="prose prose-invert max-w-none overflow-hidden">
      <MarkdownRenderer filePath={`${slug}.md`} />
    </div>
  )
}

export const metadata = {
  title: 'Documentation | Rari',
  description: 'Complete documentation for Rari framework. Learn about React Server Components, routing, and advanced features.',
}
