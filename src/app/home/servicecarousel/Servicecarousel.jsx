'use client'

import React, { useEffect, useRef, useState, useMemo } from 'react'
import Slider from 'react-slick'
import Link from 'next/link'
import { useLanguage } from '../../../context/LanguageContext'
import { translations } from './translations'
import { useInView } from '../../../hooks/useInView'
import './Servicecarousel.css'
import ObserverSection from '../../components/testobserver/ObserverSection'

const ServiceCarousel = () => {
  const { selectedLanguage } = useLanguage()
  const [plans, setPlans] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const sliderRef = useRef(null)
  const titleRef = useRef(null)
  const sectionRef = useRef(null)

  const sectionVisible = useInView(sectionRef, 0.1)
  const t = translations[selectedLanguage] || translations.en

  // Fetch service plans
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const res = await fetch(`/api/service-plans?lang=${selectedLanguage}`)
        if (!res.ok) throw new Error('Failed to fetch service plans')
        const data = await res.json()
        setPlans(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchPlans()
  }, [selectedLanguage])

  // Title observer logic from your code
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            entry.target.classList.remove('lazy-load')
          }
        })
      },
      { threshold: 0.15 }
    )

    if (titleRef.current) {
      observer.observe(titleRef.current)
    }

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current)
    }
  }, [])

  // Auto-slide carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) sliderRef.current.slickNext()
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  const settings = useMemo(() => ({
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ]
  }), [])

  if (loading) {
    return (
      <section className="carousel-section loading">
        <div className="carousel-title skeleton-title" />
        <div className="carousel-skeleton-grid">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="carousel-card skeleton-card"></div>
          ))}
        </div>
      </section>
    )
  }

  if (error) return <div className="carousel-status">❌ {error}</div>
  if (!plans.length) return <div className="carousel-status">{t.empty}</div>

  return (
    <section>
      <ObserverSection>
        <h2 className='carousel-title'>
          {t.title}
        </h2>
      </ObserverSection>
      <Slider {...settings}>
        {plans.map((plan, index) => {
          const bgClass = `bg-${(index % 3) + 1}`
          return (
            <div key={plan.id} className={`carousel-card ${bgClass}`}>
              <div className="carousel-content">
                <h3 className="carousel-plan-title">{plan.title}</h3>
                <p className="carousel-plan-desc">{plan.description}</p>
                <Link href="/services" className="carousel-button">
                  {t.button}
                </Link>
              </div>
            </div>
          )
        })}
      </Slider>
    </section>
  )
}

export default ServiceCarousel
