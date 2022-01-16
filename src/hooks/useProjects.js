import React, { useState, useEffect } from 'react'

export const useProjects = () => {
  const [projects, setProjects] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(`../data/projects.json`)
        const data = await res.json()

        setProjects(data.data)
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
        setError(error)
      }
    }
    fetchProjects()
  }, [])

  return [projects, isLoading, error]
}
