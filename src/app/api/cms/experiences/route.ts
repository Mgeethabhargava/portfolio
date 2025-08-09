import { NextRequest, NextResponse } from 'next/server';
import { CMS } from '@/lib/cms';

export async function GET() {
  try {
    const experiences = CMS.getExperiences();
    return NextResponse.json(experiences);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch experiences' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const experiences = await request.json();
    CMS.updateExperiences(experiences);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update experiences' }, { status: 500 });
  }
}