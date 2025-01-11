export const getBackgroundStyle = (slug: string) => {
  switch (slug) {
    case "ai-chatbots":
      return {
        background: `
          linear-gradient(45deg, 
            rgba(34, 31, 38, 0.95), 
            rgba(155, 135, 245, 0.85)
          ),
          radial-gradient(circle at 50% 50%, 
            rgba(14, 165, 233, 0.4) 0%, 
            rgba(139, 92, 246, 0.4) 50%, 
            rgba(217, 70, 239, 0.4) 100%
          ),
          repeating-linear-gradient(
            45deg,
            rgba(249, 115, 22, 0.1) 0px,
            rgba(249, 115, 22, 0.1) 2px,
            transparent 2px,
            transparent 10px
          )
        `,
        backgroundBlendMode: "overlay, screen, normal",
        position: "relative" as const,
        overflow: "hidden" as const,
      };
    case "process-automation":
      return {
        background: `
          linear-gradient(45deg, 
            rgba(15, 23, 42, 0.9), 
            rgba(56, 189, 248, 0.8)
          ),
          radial-gradient(circle at 30% 70%, 
            rgba(56, 189, 248, 0.4) 0%, 
            rgba(14, 165, 233, 0.4) 50%, 
            rgba(3, 105, 161, 0.4) 100%
          ),
          repeating-linear-gradient(
            -45deg,
            rgba(56, 189, 248, 0.1) 0px,
            rgba(56, 189, 248, 0.1) 1px,
            transparent 1px,
            transparent 8px
          )
        `,
        backgroundBlendMode: "overlay, screen, normal",
        position: "relative" as const,
        overflow: "hidden" as const,
      };
    case "ai-agents":
      return {
        background: `
          linear-gradient(45deg, 
            rgba(17, 24, 39, 0.95), 
            rgba(79, 70, 229, 0.85)
          ),
          radial-gradient(circle at 70% 30%, 
            rgba(79, 70, 229, 0.4) 0%, 
            rgba(67, 56, 202, 0.4) 50%, 
            rgba(55, 48, 163, 0.4) 100%
          ),
          repeating-linear-gradient(
            135deg,
            rgba(99, 102, 241, 0.1) 0px,
            rgba(99, 102, 241, 0.1) 2px,
            transparent 2px,
            transparent 10px
          )
        `,
        backgroundBlendMode: "overlay, screen, normal",
        position: "relative" as const,
        overflow: "hidden" as const,
      };
    case "performance-optimization":
      return {
        background: `
          linear-gradient(45deg, 
            rgba(20, 83, 45, 0.95), 
            rgba(34, 197, 94, 0.85)
          ),
          radial-gradient(circle at 40% 60%, 
            rgba(34, 197, 94, 0.4) 0%, 
            rgba(22, 163, 74, 0.4) 50%, 
            rgba(21, 128, 61, 0.4) 100%
          ),
          repeating-linear-gradient(
            -45deg,
            rgba(74, 222, 128, 0.1) 0px,
            rgba(74, 222, 128, 0.1) 2px,
            transparent 2px,
            transparent 10px
          )
        `,
        backgroundBlendMode: "overlay, screen, normal",
        position: "relative" as const,
        overflow: "hidden" as const,
      };
    default:
      return {};
  }
};