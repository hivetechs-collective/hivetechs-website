import PageLayout from '@/components/PageLayout'
import Link from 'next/link'
import Image from 'next/image'
import fs from 'fs'
import path from 'path'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypePrism from 'rehype-prism-plus'
import './documentation.css'
import WorkingButton from '@/components/WorkingButton'

export default async function Documentation() {
  // Read the markdown file at build time
  const filePath = path.join(process.cwd(), 'src/app/documentation/documentation-index.md')
  const fileContent = fs.readFileSync(filePath, 'utf8')

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white relative overflow-hidden">
        {/* Background Logo - top right for documentation */}
        <div className="absolute right-0 top-0 pointer-events-none">
          <Image 
            src="/Hive-Logo.jpg" 
            alt="" 
            width={300} 
            height={300} 
            className="opacity-10 transform translate-x-1/3 -translate-y-1/3 rotate-12"
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="heading-1 mb-6">
              Documentation
            </h1>
            <p className="text-xl mb-8">
              Complete guides for using hive-tools CLI and MCP integration
            </p>
          </div>
        </div>
      </section>

      {/* Quick Start CTA Banner */}
      <section className="py-8 bg-primary/10 border-b border-primary/20">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">New to hive-tools?</h2>
              <p className="text-gray-300">Get up and running in under 5 minutes with our step-by-step guide</p>
            </div>
            <Link href="/documentation/quick-start" className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-600 text-dark font-semibold rounded-lg transition-colors duration-200 group">
              ⚡ Quick Start Guide
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Documentation Content */}
      <section className="py-20 bg-dark">
        <div className="container-custom">
          <div className="prose prose-lg max-w-4xl mx-auto">
            <MDXRemote 
              source={fileContent} 
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [rehypePrism],
                },
              }}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-2 mb-6">Ready to experience better AI answers?</h2>
            <p className="text-xl mb-8 font-semibold">
              Start your 7-day free trial today and see the difference our multi-model consensus pipeline can make for your projects.
            </p>
            <WorkingButton 
              url="https://store.hivetechs.io/l/basic-plan" 
              text="Start Free Trial" 
              large={true}
              variant="light"
            />
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
