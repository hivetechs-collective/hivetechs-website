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
  const filePath = path.join(process.cwd(), 'src/app/documentation/mcp-tool-guide.md')
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
              Learn how to use the hive-tools Multi-Model Consensus Pipeline (MCP) Tool
            </p>
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
