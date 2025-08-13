import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(req: Request) {
  const form = await req.formData()
  const name = String(form.get('name') || '')
  const email = String(form.get('email') || '')
  const message = String(form.get('message') || '')

  const payload = {
    type: 'contact' as const,
    name,
    email,
    message,
    source_path: '/contact',
    user_agent: req.headers.get('user-agent') || '',
    ts: new Date().toISOString(),
  }
  console.log('contact payload', JSON.stringify(payload))

  const { error } = await supabase.from('inquiries').insert({
    type: 'contact',
    name,
    email,
    message,
    source_path: '/contact',
    user_agent: payload.user_agent,
  })
  if (error) {
    console.error('supabase insert error', error)
    return NextResponse.json({ ok: false }, { status: 500 })
  }

  // Redirect to home after successful submission to avoid showing JSON page
  return NextResponse.redirect(new URL('/', req.url), { status: 303 })
}

export function GET() {
  return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 })
}
