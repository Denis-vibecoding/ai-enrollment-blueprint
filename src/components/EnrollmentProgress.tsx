import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface EnrollmentProgressProps {
  enrolled?: number;
  total?: number;
}

const EnrollmentProgress = ({ enrolled: initialEnrolled = 0, total = 40 }: EnrollmentProgressProps) => {
  const [enrolled, setEnrolled] = useState(initialEnrolled);
  const [hasStarted, setHasStarted] = useState(false);
  const { toast } = useToast();
  
  const percentage = (enrolled / total) * 100;
  const remaining = total - enrolled;

  useEffect(() => {
    // Start the enrollment simulation after 10 seconds
    const startTimer = setTimeout(() => {
      setHasStarted(true);
    }, 10000);

    return () => clearTimeout(startTimer);
  }, []);

  useEffect(() => {
    if (!hasStarted || enrolled >= Math.floor(total * 0.92)) return; // Stop at 92% (37 students)

    let interval: number;
    
    // Phase 1: Rapid enrollment until 70% (28 students)
    if (enrolled < Math.floor(total * 0.7)) {
      interval = Math.random() * 3000 + 2000; // 2-5 seconds (rapid)
    }
    // Phase 2: Slower enrollment from 70% to 92% (28-37 students)
    else {
      interval = Math.random() * 7000 + 8000; // 8-15 seconds (slower)
    }

    const enrollmentTimer = setTimeout(() => {
      setEnrolled(prev => {
        const newCount = prev + 1;
        const remaining = total - newCount;
        
        // Show toast notification
        toast({
          title: "🎉 New Student Enrolled!",
          description: `Only ${remaining} academy student spots remaining`,
          duration: 4000,
        });
        
        return newCount;
      });
    }, interval);

    return () => clearTimeout(enrollmentTimer);
  }, [hasStarted, enrolled, total, toast]);

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-lg mx-auto border border-white/20">
      <div className="space-y-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-white mb-1">
            {enrolled} of {total} Academy Student Spots Taken
          </div>
          <div className="text-white/80 text-lg">
            Only {remaining} spots remaining!
          </div>
        </div>
        
        <div className="space-y-2">
          <Progress 
            value={percentage} 
            className="h-3 bg-white/20" 
          />
          <div className="flex justify-between text-sm text-white/70">
            <span>{enrolled} enrolled</span>
            <span>{remaining} spots left</span>
          </div>
        </div>
        
        <div className="text-center">
          <div className="text-yellow-300 text-sm font-medium animate-pulse">
            🔥 {percentage >= 80 ? 'Almost full!' : 'Filling up fast!'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentProgress;