'use client'

export default function Error({ error, reset }: { error: Error, reset: () => void }) {
    console.error(error);

    return (
        <main className="flex h-screen flex-col items-center justify-center">
            <h2 className="text-center text-2xl m-2">{error.message}</h2>

            <button
                className="cursor-pointer px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={
                    () => reset()
                }
            >
                Try again
            </button>
        </main>
    )
}
