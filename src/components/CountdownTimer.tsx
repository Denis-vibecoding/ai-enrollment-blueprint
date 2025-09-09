import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate?: Date;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  // Default to 24 hours from now if no target date provided
  const defaultTarget = new Date();
  defaultTarget.setHours(defaultTarget.getHours() + 23);
  defaultTarget.setMinutes(59);
  defaultTarget.setSeconds(58);

  const target = targetDate || defaultTarget;

  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target.getTime() - now;

      if (distance > 0) {
        const hours = Math.floor(distance / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ hours, minutes, seconds });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [target]);

  return (
    <div className="text-center space-y-3">
      <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
        This deal expires in:
      </div>
      <div className="flex justify-center gap-4">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 text-center border border-white/20">
          <div className="text-2xl font-bold text-white">{timeLeft.hours.toString().padStart(2, '0')}</div>
          <div className="text-xs text-white/80 uppercase tracking-wide">Hours</div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 text-center border border-white/20">
          <div className="text-2xl font-bold text-white">{timeLeft.minutes.toString().padStart(2, '0')}</div>
          <div className="text-xs text-white/80 uppercase tracking-wide">Mins</div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 text-center border border-white/20">
          <div className="text-2xl font-bold text-white">{timeLeft.seconds.toString().padStart(2, '0')}</div>
          <div className="text-xs text-white/80 uppercase tracking-wide">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;