import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const language = searchParams.get('language') || 'en';

    const recipes = await prisma.recipe.findMany({
      where: { language },
      include: {
        ingredients: true,
        instructions: {
          orderBy: {
            stepNumber: 'asc' // ✅ correct camelCase
          }
        },
        valuableInfo: true,          // ✅ correct casing
        metaInfo: true,
        nutritionalFacts: true
      },
      orderBy: {
        publishedDate: 'desc'
      }
    });

    return NextResponse.json(recipes);
  } catch (error) {
    console.error('❌ Failed to fetch recipes:', error);
    return NextResponse.json(
      { error: 'Failed to load recipes.' },
      { status: 500 }
    );
  }
}
