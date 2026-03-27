import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getBlogPost, getAllBlogPosts } from '@/lib/blog-data'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: ['Taha Ilyas'],
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: ['/og-image.png'],
    },
    alternates: {
      canonical: `https://optivioautomation.com/blog/${post.slug}`,
    },
  }
}

function extractHeadings(content: string): { id: string; text: string }[] {
  const regex = /<h2\s+id="([^"]+)"[^>]*>([^<]+)<\/h2>/g
  const headings: { id: string; text: string }[] = []
  let match
  while ((match = regex.exec(content)) !== null) {
    headings.push({ id: match[1], text: match[2] })
  }
  return headings
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  const allPosts = getAllBlogPosts()
  const relatedPosts = allPosts.filter((p) => p.slug !== post.slug).slice(0, 2)
  const headings = extractHeadings(post.content)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    author: { '@type': 'Person', name: 'Taha Ilyas' },
    publisher: {
      '@type': 'Organization',
      name: 'Optivio Automation',
      logo: {
        '@type': 'ImageObject',
        url: 'https://optivioautomation.com/logo.png',
      },
    },
    datePublished: post.date,
    dateModified: post.date,
    image: 'https://optivioautomation.com/og-image.png',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://optivioautomation.com/blog/${post.slug}`,
    },
  }

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            {/* Breadcrumb */}
            <div className="mb-8">
              <Link
                href="/blog"
                className="text-[#94A3B8] hover:text-[#00C8FF] font-dm text-sm transition-colors"
              >
                &larr; Back to Blog
              </Link>
            </div>

            {/* Header */}
            <header className="mb-12 max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-sora font-semibold px-3 py-1 rounded-full bg-[rgba(0,200,255,0.15)] text-[#00C8FF]">
                  {post.category}
                </span>
                <span className="text-[#94A3B8] text-xs font-dm">{post.readTime}</span>
              </div>
              <h1 className="font-sora font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-[#94A3B8] text-sm font-dm">
                <span>By Taha Ilyas</span>
                <span>&middot;</span>
                <time>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
            </header>
          </AnimatedSection>

          <div className="flex gap-12">
            {/* Table of Contents — desktop sidebar */}
            {headings.length > 0 && (
              <aside className="hidden lg:block w-64 flex-shrink-0">
                <div className="sticky top-28">
                  <AnimatedSection delay={0.1}>
                    <p className="text-xs font-sora font-semibold text-[#94A3B8] uppercase tracking-widest mb-4">
                      On this page
                    </p>
                    <nav className="flex flex-col gap-2">
                      {headings.map((heading) => (
                        <a
                          key={heading.id}
                          href={`#${heading.id}`}
                          className="text-sm text-[#94A3B8] hover:text-[#00C8FF] font-dm transition-colors leading-snug"
                        >
                          {heading.text}
                        </a>
                      ))}
                    </nav>
                  </AnimatedSection>
                </div>
              </aside>
            )}

            {/* Article Body */}
            <AnimatedSection delay={0.15} className="flex-1 min-w-0 max-w-3xl">
              <article
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </AnimatedSection>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <AnimatedSection delay={0.2}>
              <section className="mt-20 pt-12 border-t border-[rgba(0,200,255,0.1)]">
                <h2 className="font-sora font-bold text-2xl text-white mb-8">
                  Related Articles
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedPosts.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/blog/${related.slug}`}
                      className="block group"
                    >
                      <article className="bg-[#0F1F35] border border-[rgba(0,200,255,0.1)] rounded-2xl p-8 transition-all duration-300 hover:border-[rgba(0,200,255,0.3)] hover:shadow-[0_0_40px_rgba(0,200,255,0.07)]">
                        <span className="text-xs font-sora font-semibold px-3 py-1 rounded-full bg-[rgba(0,200,255,0.15)] text-[#00C8FF]">
                          {related.category}
                        </span>
                        <h3 className="font-sora font-bold text-lg text-white mt-4 mb-2 group-hover:text-[#00C8FF] transition-colors leading-snug">
                          {related.title}
                        </h3>
                        <p className="text-[#94A3B8] font-dm text-sm leading-relaxed">
                          {related.description}
                        </p>
                      </article>
                    </Link>
                  ))}
                </div>
              </section>
            </AnimatedSection>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
