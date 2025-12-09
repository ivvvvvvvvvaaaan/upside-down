import { createClient } from '@/lib/supabase/server'

export type Asset = {
  id: string
  name: string
  type: 'video' | 'image' | 'file' | 'folder'
  url?: string
  size?: string
  format?: string
  status?: string
  meta?: Record<string, any>
  created_at?: string
}

const MOCK_ASSETS: Asset[] = [
  { id: '1', name: 'hero_campaign_v2', type: 'video', format: 'MP4', size: '24.5 MB', status: 'Approved' },
  { id: '2', name: 'brand_guidelines_2024', type: 'file', format: 'PDF', size: '4.2 MB', status: 'Review' },
  { id: '3', name: 'social_post_instagram', type: 'image', format: 'PNG', size: '1.2 MB', status: 'Draft' },
  { id: '4', name: 'website_header_dark', type: 'image', format: 'JPG', size: '840 KB', status: 'Approved' },
  { id: '5', name: 'logo_animation_final', type: 'video', format: 'MOV', size: '156 MB', status: 'Approved' },
  { id: '6', name: 'legal_terms_draft', type: 'file', format: 'DOCX', size: '24 KB', status: 'Draft' },
  { id: '7', name: 'icon_set_v1', type: 'file', format: 'ZIP', size: '12 MB', status: 'Active' },
  { id: '8', name: 'team_photo_retreat', type: 'image', format: 'JPG', size: '5.6 MB', status: 'Active' },
]

export async function getAssets(): Promise<Asset[]> {
  const isLive = !!process.env.NEXT_PUBLIC_SUPABASE_URL

  if (!isLive) {
    // Simulate network delay for realism
    await new Promise(resolve => setTimeout(resolve, 500))
    return MOCK_ASSETS
  }

  try {
    const supabase = createClient()
    const { data, error } = await supabase.from('nodes').select('*').order('created_at', { ascending: false })
    
    if (error) {
      console.warn('Supabase error (falling back to mocks):', error.message)
      return MOCK_ASSETS
    }

    if (!data || data.length === 0) {
      return []
    }

    return data.map((item: any) => ({
      id: item.id,
      name: item.name,
      type: item.type,
      created_at: item.created_at,
      // Spread flexible meta fields which contains size, format, status etc.
      ...item.meta,
    })) as Asset[]
  } catch (e) {
    console.error('Failed to fetch assets:', e)
    return MOCK_ASSETS
  }
}

