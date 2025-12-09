'use client'

import { useState } from 'react'
import { Stack, Text, Card, Button } from '@/components/ui'

/*
 * ===========================================
 * CHARACTER PROTOTYPE
 * ===========================================
 * TODO: Describe what this prototype explores
 */

export default function CharacterPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <Stack spacing="lg">
        
        {/* Header */}
        <Stack direction="horizontal" justify="between" align="center">
          <Stack spacing="xs">
            <Text variant="headline-1">Character</Text>
            <Text variant="body-2" color="secondary">
              Prototype description goes here
            </Text>
          </Stack>
          <Button variant="primary">Primary Action</Button>
        </Stack>

        {/* Content */}
        <Card padding="lg">
          <Stack spacing="md">
            <Text variant="headline-3">Getting Started</Text>
            <Text variant="body-1">
              Start building your prototype here. Check the docs folder for component references and patterns.
            </Text>
          </Stack>
        </Card>

        {/* Add your prototype content below */}
        
      </Stack>
    </div>
  )
}
