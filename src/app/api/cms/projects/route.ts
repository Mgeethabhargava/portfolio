import { NextRequest, NextResponse } from 'next/server';
import { CMS } from '@/lib/cms';

export async function GET() {
  try {
    const projects = CMS.getProjects();
    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const projects = await request.json();
    CMS.updateProjects(projects);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update projects' }, { status: 500 });
  }
}