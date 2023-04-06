import React from 'react'

function CardLoading() {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-3/12 p-4">
    <div className="container mx-auto">
        <div className="max-w-sm mx-auto md:max-w-lg">
            <div className="w-full">
                <div className="bg-white rounded">
                    <div className="bg-gray-200 h-48 p-3 overflow-hidden animate-pulse"> </div>
                    <div className="h- p-3">
                        <div className="grid grid-cols-3 gap-4 mt-2">
                            <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
                            <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
                            <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
                            <div className="h-8 col-span-2 bg-gray-200 rounded animate-pulse"></div>
                            <div className=" h-8 bg-gray-200 rounded animate-pulse"></div>
                            <div className="..."></div>
                            <div className="col-span-2 ..."></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default CardLoading