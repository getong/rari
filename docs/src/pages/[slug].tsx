import MarkdownRenderer from '../components/MarkdownRenderer'

export default function DocPage({ params }: { params: { slug: string } }) {
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
