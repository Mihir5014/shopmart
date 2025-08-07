// spinner loader 
export default function Loading() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">

            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-blue-500 mx-auto"></div>
            <p className="text-lg text-gray-600">Loading...</p>

        </div>
    )
}
