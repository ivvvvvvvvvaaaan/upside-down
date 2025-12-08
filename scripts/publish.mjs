#!/usr/bin/env node

/**
 * Create a new version/snapshot of your prototype
 * Usage: npm run publish
 * 
 * This will:
 * 1. Ask for a version name
 * 2. Create a new branch with that name
 * 3. Push to GitHub
 * 4. Vercel will create a unique preview URL for this version
 */

import { execSync } from 'child_process'
import readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function exec(command, silent = false) {
  try {
    const result = execSync(command, { 
      stdio: silent ? 'pipe' : 'inherit',
      encoding: 'utf-8' 
    })
    return result
  } catch (error) {
    return null
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
  console.log('\n📸 Create a new version snapshot\n')
  console.log('This will create a permanent URL for this version of your prototype.\n')

  // Check if git is initialized
  try {
    execSync('git rev-parse --git-dir', { stdio: 'ignore' })
  } catch {
    console.log('❌ Git is not initialized. Please run: git init')
    process.exit(1)
  }

  // Get version name from user
  const versionName = await askQuestion('Version name (e.g., "user-testing-v1", "client-review"): ')
  rl.close()

  if (!versionName.trim()) {
    console.log('❌ Version name is required')
    process.exit(1)
  }

  // Sanitize branch name
  const branchName = versionName
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')

  console.log(`\n📌 Creating version: ${branchName}\n`)

  // Save current work
  console.log('1️⃣  Saving current work...')
  exec('git add .')
  const hasChanges = exec('git diff --cached --quiet', true) === null
  
  if (hasChanges) {
    if (!exec(`git commit -m "Version: ${branchName}"`)) {
      console.log('❌ Failed to commit changes')
      process.exit(1)
    }
  } else {
    console.log('   No changes to save')
  }

  // Create new branch
  console.log(`2️⃣  Creating branch: ${branchName}...`)
  if (!exec(`git branch ${branchName}`)) {
    console.log(`❌ Failed to create branch. Branch "${branchName}" may already exist.`)
    process.exit(1)
  }

  // Push branch
  console.log('3️⃣  Pushing to GitHub...')
  if (!exec(`git push -u origin ${branchName}`)) {
    console.log('\n⚠️  Push failed. Make sure your remote is set up:')
    console.log('   git remote add origin https://github.com/yourusername/your-repo.git')
    process.exit(1)
  }

  console.log('\n✅ Version published!')
  console.log(`📡 Branch: ${branchName}`)
  console.log('\nIf connected to Vercel:')
  console.log(`   - Preview URL will be created automatically`)
  console.log(`   - Check your Vercel dashboard for the link`)
  console.log(`   - URL format: your-project-${branchName}.vercel.app\n`)
  
  // Return to main branch
  const currentBranch = exec('git branch --show-current', true)?.trim()
  if (currentBranch !== 'main' && currentBranch !== 'master') {
    console.log('↩️  Returning to main branch...')
    exec('git checkout main') || exec('git checkout master')
  }

  console.log('\n💡 Tip: You can create multiple versions for different stakeholders!\n')
}

main()
