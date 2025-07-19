export async function generateMetadata(props) {
  const { params } = props;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/recipes/${params.slug}`, {
    cache: 'no-store',
  });

  if (!res.ok) return { title: 'Recipe Not Found' };

  const recipe = await res.json();

  return {
    title: recipe.meta_info?.meta_title || recipe.title,
    description: recipe.meta_info?.meta_description || recipe.description,
    keywords: recipe.meta_info?.meta_keywords || '',
  };
}
