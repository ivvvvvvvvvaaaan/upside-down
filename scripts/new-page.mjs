#!/usr/bin/env node

/**
 * Create a new prototype page
 * Usage: npm run new:page <page-name>
 */

import fs from 'fs'
import path from 'path'
import readline from 'readline'
import { getTemplate, TEMPLATES } from './templates.mjs'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const question = (query) => new Promise((resolve) => rl.question(query, resolve))

async function main() {
  // 1. Get Page Name
  let pageName = process.argv[2]
  
  if (!pageName) {
    console.log('✨ Creating a new prototype page\n')
    pageName = await question('   Name of your page (e.g. "asset-library"): ')
  }

  if (!pageName) {
    console.error('❌ Please provide a page name')
    process.exit(1)
  }

  // 2. Get Template Type
  let type = process.argv.find(arg => arg.startsWith('--type='))?.split('=')[1]

  if (!type) {
    console.log('\n   Choose a template:')
    Object.entries(TEMPLATES).forEach(([key, t]) => {
      console.log(`   ${key.padEnd(10)} - ${t.name} (${t.description})`)
    })
    console.log('')
    
    const answer = await question('   Template (default: empty): ')
    type = answer.trim() || 'empty'
  }

  // Convert to valid path (kebab-case)
  const slug = pageName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
  
  // Convert to title case
  const title = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
  
  // Component name (PascalCase)
  const componentName = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')

  const pageDir = path.join(process.cwd(), 'src', 'app', slug)
  const pagePath = path.join(pageDir, 'page.tsx')

  // Check if exists
  if (fs.existsSync(pageDir)) {
    console.error(`\n❌ Page "${slug}" already exists`)
    rl.close()
    process.exit(1)
  }

  // Create directory
  fs.mkdirSync(pageDir, { recursive: true })

  // Get Content
  const templateResult = getTemplate(type, { title, componentName })

  // Write file(s)
  if (typeof templateResult === 'string') {
    // Legacy single file
    fs.writeFileSync(pagePath, templateResult)
    console.log(`   📄 page.tsx`)
  } else {
    // Multi-file
    Object.entries(templateResult).forEach(([filename, content]) => {
      fs.writeFileSync(path.join(pageDir, filename), content)
      console.log(`   📄 ${filename}`)
    })
  }

  console.log('')
  console.log('✅ Created new prototype!')
  console.log('')
  console.log(`   Template: ${TEMPLATES[type]?.name || type}`)
  console.log(`   Path:     src/app/${slug}/`)
  console.log('')
  console.log(`🚀 View at: http://localhost:3000/${slug}`)
  console.log('')
  
  rl.close()
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
