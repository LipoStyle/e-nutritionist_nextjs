'use client'
import React, { useEffect, useState } from 'react'
import './ServicePlans.css'
import { translations } from './translations'
import { motion } from 'framer-motion'

const ServicePlans = ({ lang = 'en' }) => {
  const [plans, setPlans] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const res = await fetch(`/api/service-plans?lang=${lang}`)
        const data = await res.json()
        const sorted = data.sort((a, b) => a.order - b.order)
        setPlans(sorted)
      } catch (err) {
        console.error('Failed to load service plans:', err)
        setPlans([])
      } finally {
        setLoading(false)
      }
    }

    fetchPlans()
  }, [lang])

  return (
    <section className="service-plans-section">
      <h2 className="section-title">{translations[lang]?.title}</h2>

      {loading ? (
        <p className="service-loading">{translations[lang]?.loading}</p>
      ) : plans.length === 0 ? (
        <p className="service-empty">{translations[lang]?.empty}</p>
      ) : (
        <div className="plans-grid">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className="plan-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <div className="card-header">
                <span className="plan-emoji">{plan.title.slice(0, 2)}</span>
                <h3 className="plan-title">{plan.title.slice(2)}</h3>
                <div className="plan-price">€{plan.price}</div>
              </div>
              <p className="plan-description">{plan.description}</p>
              <ul className="plan-features">
                {plan.features.map(feature => (
                  <li key={feature.id}>• {feature.name}</li>
                ))}
              </ul>
              <button className="plan-cta">
                {translations[lang]?.button}
              </button>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  )
}

export default ServicePlans
