export const Marquee = () => {
  const content = "PURE DRINKING WATER ◆ SURAT, GUJARAT ◆ BIS CERTIFIED ◆ FSSAI APPROVED ◆ FUDO BEVERAGES PVT LTD ◆ HAVE YOU HAD YOUR FUDO YET? ◆ 100% SAFE & PURE ◆ ";
  
  return (
    <div className="bg-primary h-12 flex items-center overflow-hidden">
      <div className="marquee-track animate-marquee whitespace-nowrap flex">
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} className="text-marquee text-primary-foreground mx-4 shrink-0">
            {content}
          </span>
        ))}
      </div>
    </div>
  );
};
