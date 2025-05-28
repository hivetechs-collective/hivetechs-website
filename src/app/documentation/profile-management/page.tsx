import PageLayout from '@/components/PageLayout'
import Link from 'next/link'
import Image from 'next/image'
import fs from 'fs'
import path from 'path'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypePrism from 'rehype-prism-plus'
import '../documentation.css'

export default async function ProfileManagement() {
  const filePath = path.join(process.cwd(), 'src/app/documentation/profile-management.md')
  const fileContent = fs.readFileSync(filePath, 'utf8')

  return (
    <PageLayout>
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white relative overflow-hidden">
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
              👤 Profile Management
            </h1>
            <p className="text-xl mb-8">
              Create and manage optimized configurations for different use cases and scenarios
            </p>
            <Link 
              href="/documentation"
              className="inline-flex items-center text-white/80 hover:text-white transition-colors"
            >
              ← Back to Documentation
            </Link>
          </div>
        </div>
      </section>
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
    </PageLayout>
  )
}