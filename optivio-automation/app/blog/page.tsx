import { Metadata } from 'next'
import Link from 'next/link'
import { getAllBlogPosts } from '@/lib/blog-data'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Learn how AI voice agents are transforming UK service businesses. Tips, guides, and insights on AI receptionists, missed calls, and business automation — built for UK dental practices and beyond.',
  openGraph: {
    title: 'Blog | Optivio Automation',
    description:
      'Learn how AI voice agents are transforming UK service businesses. Tips, guides, and insights on AI receptionists, missed calls, and business automation — built for UK dental practices and beyond.',
  },
}

const categoryColors: Record<string, string> = {
  Dental: 'bg-emerald-500/15 text-emerald-400',
  Business: 'bg-purple-500/15 text-purple-400',
  HVAC: 'bg-orange-500/15 text-orange-400',
  Guide: 'bg-[rgba(0,200,255,0.15)] text-[#00C8FF]',
}

export default function BlogPage() {
  const posts = getAllBlogPosts()

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 blog-page-fade">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#00C8FF] font-sora text-sm font-semibold tracking-widest uppercase mb-4 block">
              Blog
            </span>
            <h1 className="font-sora font-bold text-4xl sm:text-5xl text-white mb-4">
              Insights &amp; Guides
            </h1>
            <p className="text-[#94A3B8] font-dm text-lg max-w-2xl mx-auto">
              Learn how AI voice agents are transforming service businesses. Actionable tips,
              real numbers, and honest guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block group h-full">
                <article className="h-full bg-[#0F1F35] border border-[rgba(0,200,255,0.1)] rounded-2xl p-8 transition-all duration-300 hover:border-[rgba(0,200,255,0.3)] hover:shadow-[0_0_40px_rgba(0,200,255,0.07)]">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`text-xs font-sora font-semibold px-3 py-1 rounded-full ${
                        categoryColors[post.category] || categoryColors.Guide
                      }`}
                    >
                      {post.category}
                    </span>
                    <span className="text-[#94A3B8] text-xs font-dm">{post.readTime}</span>
                  </div>
                  <h2 className="font-sora font-bold text-xl text-white mb-3 group-hover:text-[#00C8FF] transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-[#94A3B8] font-dm text-sm leading-relaxed mb-6">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <time className="text-[#94A3B8] text-xs font-dm">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    <span className="text-[#00C8FF] text-sm font-sora font-semibold group-hover:translate-x-1 transition-transform inline-block">
                      Read Article &rarr;
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
