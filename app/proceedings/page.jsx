"use client"
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
export default function SpecialIssue() {
    const router = useRouter()
    useEffect(() => {
        router.push("/proceedings.pdf")
    }, [router])
    return null
}
