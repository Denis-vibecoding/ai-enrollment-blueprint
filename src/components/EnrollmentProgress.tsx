import { Progress } from "@/components/ui/progress";

interface EnrollmentProgressProps {
  enrolled?: number;
  total?: number;
}

const EnrollmentProgress = ({ enrolled = 17, total = 25 }: EnrollmentProgressProps) => {
  const percentage = (enrolled / total) * 100;
  const remaining = total - enrolled;

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-lg mx-auto border border-white/20">
      <div className="space-y-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-white mb-1">
            {enrolled} of {total} Founding Member Spots Taken
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