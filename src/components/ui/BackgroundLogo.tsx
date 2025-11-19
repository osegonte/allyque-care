export default function BackgroundLogo() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Background logo - positioned on right side */}
      <div 
        className="absolute top-1/2 right-0 w-1/2 h-full flex items-center justify-center" 
        style={{ transform: 'translateY(calc(-50% + 100px))' }}
      >
        <img 
          src="/logo-icon.svg" 
          alt="" 
          className="w-[500px] lg:w-[600px] h-auto opacity-[0.04]"
        />
      </div>
    </div>
  )
}
