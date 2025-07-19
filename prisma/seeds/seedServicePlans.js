import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function seedServicePlans() {
  await prisma.servicePlanFeature.deleteMany()
  await prisma.servicePlan.deleteMany()

  const plans = [
    {
      title: "🎯 Initial Consultation & Health Analysis",
      price: 60,
      description: "This initial consultation is an in-depth evaluation of your current health, lifestyle, and personal goals. \n\nWe will precisely identify your needs, define clear goals, and create a customized roadmap for your wellness journey.",
      language: "en",
      order: 1,
      features: {
        create: [
          { name: "Personalized interview via video (60–90 min.)" },
          { name: "Comprehensive health assessment and goal setting" },
          { name: "Customized nutrition plan delivered within 72 hours" },
          { name: "Written summary with tailored recommendations" },
          { name: "Access to introductory videos and resources" },
          { name: "Email support for implementation questions (included for 1 week)" }
        ]
      }
    },
    {
      title: "🔄Weekly Follow-Up Consultation",
      price: 40,
      description: "Ideal for consistent support and quick adjustments. Perfect if you seek weekly accountability, motivation, and steady progress.",
      language: "en",
      order: 2,
      features: {
        create: [
          { name: "Weekly check-in session (30–45 min.) via video/phone" },
          { name: "Customized weekly meal plan" },
          { name: "Personalized nutrition and fitness recommendations" },
          { name: "Specific strategies to overcome plateaus" },
          { name: "Continuous email support between sessions" }
        ]
      }
    },
    {
      title: "📅 Biweekly Check-in Plan",
      price: 80,
      description: "Great for steady progress. Offers consistent monitoring and motivation without the commitment of weekly meetings.",
      language: "en",
      order: 3,
      features: {
        create: [
          { name: "2 personalized sessions (45 min. each, every two weeks)" },
          { name: "2 customized meal plans adjusted according to progress and feedback" },
          { name: "Individualized recommendations and targeted adjustments" },
          { name: "Email & messenger support between sessions" },
          { name: "Bonus: Access to nutrition guides and checklists" }
        ]
      }
    },
    {
      title: "🚀 Intensive Starter Package (1 Month)",
      price: 150,
      description: "Ideal for a powerful start, establishing healthy habits through focused coaching and dedicated support, achieving sustainable results quickly.",
      language: "en",
      order: 4,
      features: {
        create: [
          { name: "4 weekly check-ins (45–60 min. each) via video/phone" },
          { name: "4 individualized weekly meal plans and recipe suggestions" },
          { name: "Weekly personalized adjustments to nutrition and fitness" },
          { name: "Regular email or messenger support" },
          { name: "Bonus: Introductory video on nutrition basics & access to private support community" },
          { name: "Complimentary digital health journal for progress tracking" }
        ]
      }
    },
    {
      title: "📈 6-Month Sustainable Lifestyle Package",
      price: 450,
      description: "Perfect for deep, sustainable lifestyle transformation. Continuous professional guidance to embed lasting healthy habits into your daily life.",
      language: "en",
      order: 5,
      features: {
        create: [
          { name: "Biweekly personalized consultations (12 sessions total, 45–60 min. each)" },
          { name: "Individualized meal plans updated every 2 weeks based on progress/preferences" },
          { name: "Comprehensive and ongoing adjustments to nutrition and fitness" },
          { name: "Continuous messenger & email support for the entire duration" },
          { name: "Complimentary health journal for tracking your progress" }
        ]
      }
    },
    {
      title: "🥗🏋️ Complete Personalized Nutrition & Fitness Plan",
      price: 80,
      description: "Designed for independent individuals who prefer detailed, professional guidance to effectively implement and achieve their health and fitness goals.",
      language: "en",
      order: 6,
      features: {
        create: [
          { name: "Step-by-step guide for self-assessed fitness evaluation" },
          { name: "Development of a customized fitness plan" },
          { name: "Creation of a personalized nutrition plan" },
          { name: "Detailed instructions for safe and independent implementation" },
          { name: "Access to video tutorials and written materials" },
          { name: "Email support for implementation questions (included for 1 month)" },
          { name: "Bonus: Progress tracking tips and adjustments" }
        ]
      }
    }
  ]

  for (const plan of plans) {
    await prisma.servicePlan.create({ data: plan })
  }

  console.log("✅ Seeded English service plans!")
}
