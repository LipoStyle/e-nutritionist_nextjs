import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function seedRecipes() {
  await prisma.nutritionalFact.deleteMany()
  await prisma.valuableInfo.deleteMany()
  await prisma.instruction.deleteMany()
  await prisma.ingredient.deleteMany()
  await prisma.metaInfo.deleteMany()
  await prisma.recipe.deleteMany()

  // Recipe 1: Stuffed Sweet Potatoes
  await prisma.recipe.create({
    data: {
      title: "Stuffed Sweet Potatoes",
      description: "Looking for a meal that’s healthy, filling, and actually tastes amazing?\nThese stuffed sweet potatoes with black beans, corn, and avocado are a go-to when I want something simple, high in fiber, and packed with nutrients.\n\n✔️ Plant-based protein\n✔️ Complex carbs for lasting energy\n✔️ Healthy fats\n✔️ Perfect for lunch, dinner, or meal prep\n\nJust bake your sweet potatoes, mash the center, and fill them with black beans, sweet corn, avocado, lime juice, and chili flakes.\nThat’s it — real food that fuels you.",
      category: "Lunch",
      slug: "Loaded-Stuffed-Sweet-Potatoes",
      language: "en",
      imageUrl: "https://e-nutritionist-backend-0404ce3393a8.herokuapp.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTM2LCJwdXIiOiJibG9iX2lkIn19--07e70890e397775f15ca1d6e1388a1aa1450086b/PXL_20250412_151944879~2.jpg",
      publishedDate: new Date("2025-05-24"),

      ingredients: {
        create: [
          { name: "Sweet Potatoes", quantity: 2, size: "Medium" },
          { name: "Olive Oil", quantity: 1, size: "Tbsp" },
          { name: "Onion", quantity: 60, size: "g" },
          { name: "Frozen Corn", quantity: 100, size: "g" },
          { name: "Black Beans", quantity: 150, size: "g" },
          { name: "Tomato", quantity: 1, size: "Medium" },
          { name: "Cilantro", quantity: 2, size: "Tbsp" },
          { name: "Salt & Pepper", quantity: 1, size: "tsp" },
          { name: "Guacamole", quantity: 4, size: "Tbsp" }
        ]
      },
      instructions: {
        create: [
          { stepNumber: 1, stepContent: "Preheat your oven to 200 °C (390 °F)." },
          { stepNumber: 2, stepContent: "Scrub the sweet potatoes, pat dry, and pierce them all over with a fork." },
          { stepNumber: 3, stepContent: "Place on a baking sheet and roast 45–50 minutes, until a skewer slides in easily." },
          { stepNumber: 4, stepContent: "While potatoes bake, heat 1 Tbsp olive oil in a skillet over medium." },
          { stepNumber: 5, stepContent: "Add diced onion; sauté 3–4 minutes until translucent." },
          { stepNumber: 6, stepContent: "Stir in black beans and corn; cook 2–3 minutes until heated through." },
          { stepNumber: 7, stepContent: "Add diced tomato, cumin, paprika, and season with salt & pepper." },
          { stepNumber: 8, stepContent: "Cook another 1–2 minutes, then remove from heat and stir in chopped cilantro." },
          { stepNumber: 9, stepContent: "When the sweet potatoes are tender, remove from oven and let rest 5 minutes." },
          { stepNumber: 10, stepContent: "Slice each potato lengthwise without cutting through the bottom." },
          { stepNumber: 11, stepContent: "Spoon half of the bean–corn mixture into each potato." },
          { stepNumber: 12, stepContent: "Top each with ~¼ cup guacamole." },
          { stepNumber: 13, stepContent: "Garnish with extra cilantro leaves and a squeeze of lime, if using." }
        ]
      },
      valuableInfo: {
        create: {
          duration: "15",
          difficulty: "Easy",
          portions: 2
        }
      },
      metaInfo: {
        create: {
          metaTitle: "Loaded Stuffed Sweet Potatoes | Healthy, Savory Recipe",
          metaDescription: "Baked sweet potatoes stuffed with protein-rich black beans, quinoa, and melted cheese—packed with fiber, vitamins A & C, and plant-based protein. A nutrient-dense dinner ready in 45 minutes!",
          metaKeywords: "stuffed sweet potatoes, healthy dinner recipe, black bean quinoa bake, plant-based protein, fiber-rich meal, vitamin A recipe, easy weeknight dinners, vegetarian entree, meal prep, nutrient-dense recipes"
        }
      },
      nutritionalFacts: {
        create: [
          { name: "Protein", quantity: 14, size: "g" },
          { name: "Fat", quantity: 9, size: "g" },
          { name: "Carbs", quantity: 74.6, size: "g" },
          { name: "Fiber", quantity: 19.2, size: "g" },
          { name: "Saturated Fat", quantity: 1.2, size: "mg" },
          { name: "Vitamin A", quantity: 2, size: "mg" },
          { name: "Vitamin C", quantity: 23, size: "mg" },
          { name: "Potassium", quantity: 1515, size: "mg" }
        ]
      }
    }
  })

  // Recipe 2: Sweet Potato & Veggie Hash with Eggs
  await prisma.recipe.create({
    data: {
      title: "Sweet Potato & Veggie Hash with Eggs",
      description: "Kickstart your day with a savory sweet potato and veggie hash topped with perfectly fried eggs—packed with protein, fiber, vitamins A & C, and iron. Ready in 20 minutes!",
      category: "Breakfast",
      slug: "Sweet-Potato-Veggie-Hash",
      language: "en",
      imageUrl: "https://e-nutritionist-backend-0404ce3393a8.herokuapp.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTM5LCJwdXIiOiJibG9iX2lkIn19--0065944e4054d4cd7e0a0c7db2c03f15659aa2d4/PXL_20250506_101603332.MP~2.jpg",
      publishedDate: new Date("2025-05-25"),

      ingredients: {
        create: [
          { name: "Sweet Potatoes", quantity: 2, size: "Medium" },
          { name: "Onion", quantity: 1, size: "Large" },
          { name: "Olive Oil", quantity: 1, size: "Tbsp" },
          { name: "Red Bell Pepper", quantity: 1, size: "Medium" },
          { name: "Spinach", quantity: 2, size: "cups" },
          { name: "Salt", quantity: 1, size: "Pinch" },
          { name: "Pepper", quantity: 1, size: "pinch" },
          { name: "Eggs", quantity: 4, size: "Medium" }
        ]
      },
      instructions: {
        create: [
          { stepNumber: 1, stepContent: "Peel and dice sweet potatoes and onions into 1 cm pieces." },
          { stepNumber: 2, stepContent: "Heat a large skillet over medium heat, then add olive oil." },
          { stepNumber: 3, stepContent: "Add diced sweet potatoes (and onion, if using) to the hot skillet." },
          { stepNumber: 4, stepContent: "Season lightly with salt and pepper." },
          { stepNumber: 5, stepContent: "Sauté, stirring occasionally, for 8–10 minutes until tender and lightly golden." },
          { stepNumber: 6, stepContent: "Stir in diced bell pepper; cook 2–3 minutes until slightly softened" },
          { stepNumber: 7, stepContent: "Add chopped spinach; cook 1–2 minutes until wilted." },
          { stepNumber: 8, stepContent: "Season again to taste (you can add smoked paprika or chili flakes here)." },
          { stepNumber: 9, stepContent: "Make 4 wells and put in the eggs. Fry them." },
          { stepNumber: 10, stepContent: "Serve immediately." }
        ]
      },
      valuableInfo: {
        create: {
          duration: "30",
          difficulty: "Easy",
          portions: 2
        }
      },
      metaInfo: {
        create: {
          metaTitle: "Sweet Potato & Veggie Hash with Eggs | Hearty High-Protein Breakfast",
          metaDescription: "Kickstart your day with a savory sweet potato and veggie hash topped with perfectly fried eggs—packed with protein, fiber, vitamins A & C, and iron. Ready in 20 minutes!",
          metaKeywords: "sweet potato hash, veggie breakfast, eggs and sweet potatoes, high-protein breakfast, healthy morning recipe, fiber-rich meal, iron-rich breakfast, vitamin A recipe, quick breakfast ideas, meal prep hash"
        }
      },
      nutritionalFacts: {
        create: [
          { name: "Protein", quantity: 16, size: "g" },
          { name: "Fat", quantity: 17.9, size: "g" },
          { name: "Carbs", quantity: 38, size: "g" },
          { name: "Saturated Fat", quantity: 4.3, size: "g" },
          { name: "Fiber", quantity: 6.2, size: "g" },
          { name: "Vitamin A", quantity: 4.8, size: "mg" },
          { name: "Vitamin C", quantity: 69, size: "mg" },
          { name: "Iron", quantity: 2.9, size: "mg" }
        ]
      }
    }
  })

  console.log("✅ Seeded recipes!")
}
