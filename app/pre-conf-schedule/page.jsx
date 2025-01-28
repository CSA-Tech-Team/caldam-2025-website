"use client"
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
export default function SpecialIssue() {
    const router = useRouter()
    useEffect(() => {
        router.push("/Pre-Conference School Schedule.pdf")
    }, [router])
    return null
}
