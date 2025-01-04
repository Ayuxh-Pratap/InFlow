"use client"

export default function logo() {
    return (
      <div className="flex items-center gap-2">
        <div className="grid grid-cols-3 gap-0.5">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="h-1.5 w-1.5 rounded-sm bg-white opacity-90"
            />
          ))}
        </div>
        <span className="text-xl font-semibold text-white">InFlow</span>
      </div>
    )
  }
  
  