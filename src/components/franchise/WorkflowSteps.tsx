import KiranaMartLogo from "../../assets/img/logo/KIRANA MART.png"
export default function WorkflowSteps() {
  const steps = [
    { id: 1, title: "FIX APPOINTMENT", icon: "📅" },
    { id: 2, title: "CLIENT MEETING", icon: "👥" },
    { id: 3, title: "FRANCHISE VERIFICATION", icon: "✓" },
    { id: 4, title: "AREA CODE ACTIVATION", icon: "📍" },
    { id: 5, title: "HANDLING G-FRESH KIT", icon: "📦" },
    { id: 6, title: "AGREEMENT SIGN", icon: "📝" },
  ];

  return (
    <div className="relative w-[90%] max-w-3xl mx-auto h-[600px] p-4">
      {/* Center Logo */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                  w-24 h-24 rounded-full bg-green-400 flex items-center justify-center
                    shadow-[0_0_30px_rgba(255,103,9,0.3)] transition-all duration-500
                    hover:shadow-[0_0_40px_rgba(255,103,9,0.4)] hover:scale-110"
      >
        <img src={KiranaMartLogo} alt="" className="p-2" />
      </div>

      {/* Circular Steps */}
      {steps.map((step, index) => {
        const angle = (index * (360 / steps.length) - 90) * (Math.PI / 180);
        const radius = 200;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <div
            key={step.id}
            className="absolute top-1/2 left-1/2"
            style={{
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
            }}
          >
            <div className="group relative flex flex-col items-center">
              <div
                className="w-16 h-16 rounded-full bg-[#FF6709] text-white flex items-center justify-center text-2xl
                          shadow-[0_4px_12px_rgba(255,103,9,0.25)] transition-all duration-500 ease-in-out
                          group-hover:shadow-[0_8px_20px_rgba(74,222,128,0.4)] group-hover:scale-110
                          group-hover:bg-green-400"
              >
                {step.icon}
              </div>
              <div className="mt-2 text-center">
                <span
                  className="whitespace-nowrap text-xs font-semibold text-[#FF6709] bg-white px-3 py-1 rounded-full
                              shadow-[0_2px_8px_rgba(255,103,9,0.15)] transition-all duration-300
                              group-hover:text-green-400 group-hover:shadow-[0_2px_8px_rgba(74,222,128,0.3)]"
                >
                  {step.title}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
