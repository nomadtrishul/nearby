import { NextResponse } from 'next/server';
import { getRecentTips } from '@/lib/petTips';

export async function GET() {
  try {
    const recentTips = getRecentTips(3);

    return NextResponse.json({
      recentTips: recentTips.map((tip) => ({
        slug: tip.slug,
        title: tip.title,
        date: tip.date,
      })),
    });
  } catch (error) {
    return NextResponse.json(
      { recentTips: [] },
      { status: 200 }
    );
  }
}
