"use client"
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
export default function SpecialIssue() {
    const router = useRouter()
    useEffect(() => {
        router.push("/CALDAM 2024 DAM special issue writeup.docx.pdf")
    }, [router])
    return null
}
