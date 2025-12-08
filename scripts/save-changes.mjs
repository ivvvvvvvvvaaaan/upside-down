#!/usr/bin/env node

/**
 * Simple script for designers to save their work
 * Usage: npm run save
 * 
 * This will:
 * 1. Stage all changes
 * 2. Commit with a timestamp
 * 3. Push to GitHub (which auto-deploys if connected to Vercel)
 */

import { execSync } from 'child_process'
import readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function exec(command) {
  try {
    execSync(command, { stdio: 'inherit' })
    return true
  } catch (error) {
    return false
  }
}

function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer)
    })
  })
}

async function main() {
  console.log('\n📦 Saving your changes...\n')

  // Check if git is initialized
  try {
    execSync('git rev-parse --git-dir', { stdio: 'ignore' })
  } catch {
    console.log('❌ Git is not initialized. Please run: git init')
    process.exit(1)
  }

  // Ask for a commit message (optional)
  const message = await askQuestion('What did you change? (optional, press Enter to skip): ')
  rl.close()

  const commitMessage = message.trim() || `Update prototype - ${new Date().toLocaleString()}`

  console.log('\n1️⃣  Staging changes...')
  if (!exec('git add .')) {
    console.log('❌ Failed to stage changes')
    process.exit(1)
  }

  console.log('2️⃣  Committing changes...')
  if (!exec(`git commit -m "${commitMessage}"`)) {
    console.log('ℹ️  No changes to commit')
    process.exit(0)
  }

  console.log('3️⃣  Pushing to GitHub...')
  if (!exec('git push')) {
    console.log('\n⚠️  Push failed. You might need to set up your remote:')
    console.log('   git remote add origin https://github.com/yourusername/your-repo.git')
    console.log('   git push -u origin main')
    process.exit(1)
  }

  console.log('\n✅ Changes saved and pushed!')
  console.log('📡 If connected to Vercel, your site will auto-deploy in ~2 minutes\n')
}

main()
