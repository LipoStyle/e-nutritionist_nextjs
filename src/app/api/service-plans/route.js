import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const lang = searchParams.get('lang') || 'en'

  try {
    const plans = await prisma.servicePlan.findMany({
      where: { language: lang },
      orderBy: { order: 'asc' },
      include: { features: true }
    })

    return Response.json(plans)
  } catch (error) {
    console.error('❌ Error fetching service plans:', error)
    return new Response(JSON.stringify({ error: 'Failed to fetch service plans' }), {
      status: 500
    })
  }
}
