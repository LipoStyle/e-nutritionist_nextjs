import FullRecipe from './fullrecipe/FullRecipe';

// ✅ Safely handle params in both metadata and page
export async function generateMetadata({ params }) {
  const slug = await params?.slug;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/recipes/${encodeURIComponent(slug)}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    return {
      title: 'Recipe Not Found',
      description: 'This recipe does not exist.',
    };
  }

  const recipe = await res.json();
  return {
    title: recipe.metaInfo?.meta_title || recipe.title,
    description: recipe.metaInfo?.meta_description || '',
    keywords: recipe.metaInfo?.meta_keywords || '',
  };
}

export default async function RecipePage({ params }) {
  const slug = await params?.slug;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/recipes/${encodeURIComponent(slug)}`, {
    cache: 'no-store',
  });

  if (!res.ok) return <p>❌ Recipe not found.</p>;

  const recipe = await res.json();
  return <FullRecipe recipe={recipe} />;
}
