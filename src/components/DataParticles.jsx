const dataItems = [
  { text: "98.7%", x: "8%", y: "20%", delay: "0s", duration: "8s", moveX: "25px", moveY: "-30px" },
  { text: "+24.6%", x: "18%", y: "70%", delay: "2s", duration: "10s", moveX: "-35px", moveY: "-20px" },
  { text: "56K", x: "30%", y: "30%", delay: "1s", duration: "9s", moveX: "30px", moveY: "25px" },
  { text: "94.2%", x: "42%", y: "75%", delay: "3s", duration: "11s", moveX: "-25px", moveY: "-35px" },
  { text: "SQL", x: "55%", y: "20%", delay: "1.5s", duration: "9s", moveX: "40px", moveY: "-20px" },
  { text: "87.3%", x: "68%", y: "65%", delay: "2.5s", duration: "10s", moveX: "-30px", moveY: "30px" },
  { text: "12.8K", x: "78%", y: "30%", delay: "0.5s", duration: "8s", moveX: "25px", moveY: "35px" },
  { text: "110%", x: "90%", y: "72%", delay: "2s", duration: "11s", moveX: "-40px", moveY: "-25px" },
  { text: "+18.4%", x: "15%", y: "45%", delay: "4s", duration: "9s", moveX: "35px", moveY: "20px" },
  { text: "99.1%", x: "82%", y: "50%", delay: "1s", duration: "10s", moveX: "-25px", moveY: "-40px" },
];

export const DataParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {dataItems.map((item, index) => (
        <span
          key={index}
          className="absolute text-white/30 text-sm md:text-base font-semibold tracking-wide animate-data-float"
          style={{
            left: item.x,
            top: item.y,
            animationDelay: item.delay,
            animationDuration: item.duration,
            "--move-x": item.moveX,
            "--move-y": item.moveY,
          }}
        >
          {item.text}
        </span>
      ))}

    </div>
  );
};