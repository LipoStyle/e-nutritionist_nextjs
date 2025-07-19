'use client'

import React, { useEffect, useState } from 'react'
import './BookingForm.css'
import { translations } from './translations'
import { useLanguage } from '../../../context/LanguageContext'

const BookingForm = () => {
  const { selectedLanguage } = useLanguage()
  const t = translations[selectedLanguage] || translations.en

  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [form, setForm] = useState({
    service: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [availableTimes, setAvailableTimes] = useState([])

  // Load services
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch(`/api/service-plans?lang=${selectedLanguage}`)
        if (!res.ok) throw new Error('Failed to fetch service plans')
        const data = await res.json()
        setServices(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchServices()
  }, [selectedLanguage])

  // Set available times based on selected date
  useEffect(() => {
    const generateTimes = () => {
      const now = new Date()
      const selected = new Date(form.date)
      const times = []

      for (let hour = 0; hour < 24; hour++) {
        const timeString = `${hour.toString().padStart(2, '0')}:00`

        if (
          selected.toDateString() !== now.toDateString() ||
          hour > now.getHours()
        ) {
          times.push(timeString)
        }
      }

      setAvailableTimes(times)
    }

    if (form.date) generateTimes()
    else setAvailableTimes([])
  }, [form.date])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Submit booking to backend
    console.log('Booking submitted:', form)
  }

  const today = new Date().toISOString().split('T')[0]

  return (
    <div className="booking-container">
      <h2>{t.title}</h2>
      {error && <p className="error">❌ {t.error}</p>}

      <form className="booking-form" onSubmit={handleSubmit}>
        <label>{t.service}</label>
        <select name="service" value={form.service} onChange={handleChange} required>
          <option value="">{t.selectService}</option>
          {services.length === 0 ? (
            <option disabled>{t.noServices}</option>
          ) : (
            services.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))
          )}
        </select>

        <label>{t.date}</label>
        <input
          type="date"
          name="date"
          min={today}
          value={form.date}
          onChange={handleChange}
          required
        />

        <label>{t.time}</label>
        <select name="time" value={form.time} onChange={handleChange} required>
          <option value="">{t.selectTime}</option>
          {availableTimes.length === 0 ? (
            <option disabled>{t.noTimes}</option>
          ) : (
            availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))
          )}
        </select>

        <label>{t.name}</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label>{t.email}</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label>{t.phone}</label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <label>{t.message}</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit">{t.submit}</button>
      </form>
    </div>
  )
}

export default BookingForm
