import type { LayoutProps } from 'rari/client'

export default function RootLayout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen">
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-gray-900">Rari</span>
              <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                DEMO
              </span>
            </div>
            <ul className="flex gap-1 list-none m-0">
              <li>
                <a
                  href="/"
                  className="px-4 py-2 text-sm font-medium text-gray-700 no-underline hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="px-4 py-2 text-sm font-medium text-gray-700 no-underline hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="px-4 py-2 text-sm font-medium text-gray-700 no-underline hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="px-4 py-2 text-sm font-medium text-gray-700 no-underline hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="/interactive"
                  className="px-4 py-2 text-sm font-medium text-gray-700 no-underline hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                >
                  Interactive
                </a>
              </li>
              <li>
                <a
                  href="/server-data"
                  className="px-4 py-2 text-sm font-medium text-gray-700 no-underline hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                >
                  Server Data
                </a>
              </li>
              <li>
                <a
                  href="/server-demo"
                  className="px-4 py-2 text-sm font-medium text-gray-700 no-underline hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                >
                  Server Demo
                </a>
              </li>
              <li>
                <a
                  href="/actions"
                  className="px-4 py-2 text-sm font-medium text-gray-700 no-underline hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                >
                  Actions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-6 py-8">{children}</main>
    </div>
  )
}

export const metadata = {
  title: 'Rari App Router Example',
  description: 'Testing the new app router implementation',
}
