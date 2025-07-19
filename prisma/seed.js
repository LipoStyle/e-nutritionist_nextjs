import { PrismaClient } from '@prisma/client'
import { seedServicePlans } from './seeds/seedServicePlans.js'
import { seedRecipes } from './seeds/seedRecipes.js'

const prisma = new PrismaClient()

async function main() {
  console.log("🌱 Seeding database...")

  await seedServicePlans()
  await seedRecipes()

  console.log("✅ All seed data inserted successfully!")
}

main()
  .catch((e) => {
    console.error("❌ Error during seed:", e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
