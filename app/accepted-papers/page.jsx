"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    router.push('/CALDAM-2025-Accepted-Papers.pdf');
  }, [router]);

  return null; 
}

