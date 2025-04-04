
import { Button } from "@/components/common/Button";
import ProgressDashboard from "@/components/dashboard/ProgressDashboard";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { BookOpenCheck, Settings } from "lucide-react";
import { useState } from "react";

const progressMockData = {
  overall: 65,
  majorRequired: 80,
  majorElective: 60,
  generalRequired: 90,
  generalElective: 45,
  totalCredits: 78,
  requiredCredits: 120,
};

const Dashboard = () => {
  const [profileComplete, setProfileComplete] = useState(true);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2 animate-fade-in">나의 졸업 현황</h1>
              <p className="text-muted-foreground animate-fade-in" style={{ animationDelay: "100ms" }}>
                전공, 교양, 필수, 선택 과목의 진행 상황을 확인하세요.
              </p>
            </div>
            
            <div className="flex space-x-4 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <Button 
                variant="outline" 
                icon={<BookOpenCheck size={18} />}
              >
                졸업 요건 살펴보기
              </Button>
              <Button 
                variant="outline" 
                icon={<Settings size={18} />}
              >
                설정
              </Button>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "300ms" }}>
            <ProgressDashboard data={progressMockData} />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
