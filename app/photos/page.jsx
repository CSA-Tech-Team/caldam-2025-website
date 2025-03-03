"use client"
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
export default function ConferenceTimeline() {
    const router = useRouter()
    useEffect(() => {
        router.push("https://drive.google.com/drive/folders/1kbwsjY0EulOmKASoldrZQ1IHulwIB2p6?usp=sharing")
    }, [router])
    return null
}
