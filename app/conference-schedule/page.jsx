"use client"
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
export default function ConferenceTimeline() {
    const router = useRouter()
    useEffect(() => {
        router.push("/CALDAM 2025 Conference Schedule.pdf")
    }, [router])
    return null
}
