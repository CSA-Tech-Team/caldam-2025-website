"use client"
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
export default function SpecialIssue() {
    const router = useRouter()
    useEffect(() => {
        router.push("/Ajit Arvind Diwan.pdf")
    }, [router])
    return null
}
