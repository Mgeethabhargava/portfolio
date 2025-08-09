import { NextRequest, NextResponse } from 'next/server';
import { CMS } from '@/lib/cms';

export async function GET() {
  try {
    const skills = CMS.getSkills();
    return NextResponse.json(skills);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch skills' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const skills = await request.json();
    CMS.updateSkills(skills);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update skills' }, { status: 500 });
  }
}