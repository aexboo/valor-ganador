interface BraveraLogoProps {
  variant?: "default" | "footer"
  className?: string
}

export function BraveraLogo({ variant = "default", className = "" }: BraveraLogoProps) {
  const isFooter = variant === "footer"

  return (
    <div className={`flex flex-col items-start ${className}`}>
      <div className="flex items-center gap-1.5">
        <span
          className={`font-bold tracking-tight ${isFooter ? "text-xl md:text-2xl" : "text-xl md:text-2xl"} text-white`}
        >
          BRAVERA
        </span>
        <svg
          className={`${isFooter ? "w-2.5 h-5" : "w-2.5 h-5"}`}
          viewBox="0 0 10 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="0,20 5,0 10,20" fill="#22d3ee" />
        </svg>
      </div>
      <span
        className={`text-cyan-400 tracking-widest uppercase font-medium ${isFooter ? "text-[10px]" : "text-[10px]"}`}
      >
        Valor Ganador™
      </span>
    </div>
  )
}
