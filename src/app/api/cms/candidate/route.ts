import { NextRequest, NextResponse } from 'next/server';
import { CMS } from '@/lib/cms';

export async function GET() {
  try {
    const candidate = CMS.getCandidate();
    return NextResponse.json(candidate);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch candidate data' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const candidate = await request.json();
    CMS.updateCandidate(candidate);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update candidate data' }, { status: 500 });
  }
}