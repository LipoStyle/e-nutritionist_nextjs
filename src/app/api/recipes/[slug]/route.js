import { prisma } from '../../../../lib/prisma';
import { NextResponse } from 'next/server';

// GET /api/recipes/[slug]
export async function GET(req, { params }) {
  const { slug } = params;

  try {
    const recipe = await prisma.recipe.findUnique({
      where: { slug },
      include: {
        ingredients: true,
        instructions: true,
        valuableInfo: true,
        nutritionalFacts: true,
        metaInfo: true,
      },
    });

    if (!recipe) {
      return NextResponse.json({ message: 'Recipe not found' }, { status: 404 });
    }

    return NextResponse.json(recipe, { status: 200 });
  } catch (error) {
    console.error('❌ Error fetching recipe by slug:', error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
