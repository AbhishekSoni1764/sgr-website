'use client' // Error boundaries must be Client Components

import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div>
            <h2>Something went wrong!</h2>
            <button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Try again
            </button>
            <Link href={'/'}><button>
                Go to Home
            </button></Link>
        </div>
    )
}