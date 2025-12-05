import { NextResponse } from 'next/server';
import { getRecentPosts, getAllCategories, getAllTags } from '@/lib/blog';

export async function GET() {
  try {
    const recentPosts = getRecentPosts(5);
    const categories = getAllCategories();
    const tags = getAllTags();

    return NextResponse.json({
      recentPosts: recentPosts.map((post) => ({
        slug: post.slug,
        title: post.title,
        date: post.date,
        category: post.category,
      })),
      categories,
      tags,
    });
  } catch (error) {
    return NextResponse.json(
      { recentPosts: [], categories: [], tags: [] },
      { status: 200 }
    );
  }
}
