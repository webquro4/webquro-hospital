import { useState } from "react";
import { Sidebar } from "@/components/patient/Sidebar";
import { Overview } from "@/components/patient/Overview";
import { MedicalHistory } from "@/components/patient/MedicalHistory";
import { Appointments } from "@/components/patient/Appointments";
import { Prescriptions } from "@/components/patient/Prescriptions";
import { Billing } from "@/components/patient/Billing";
import { Documents } from "@/components/patient/Documents";
import { Messages } from "@/components/patient/Messages";
import { Settings } from "@/components/patient/Settings";

export type TabType = 'overview' | 'medical-history' | 'appointments' | 'prescriptions' | 'billing' | 'documents' | 'messages' | 'settings';

const PatientProfile = () => {
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <Overview />;
      case 'medical-history':
        return <MedicalHistory />;
      case 'appointments':
        return <Appointments />;
      case 'prescriptions':
        return <Prescriptions />;
      case 'billing':
        return <Billing />;
      case 'documents':
        return <Documents />;
      case 'messages':
        return <Messages />;
      case 'settings':
        return <Settings />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Background Pattern */}
      <div 
        className="fixed inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, hsl(180 60% 90% / 0.3) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, hsl(180 50% 85% / 0.2) 0%, transparent 50%)
          `
        }}
      />
      
      
      
      <div className="flex relative">
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
        
        <div className="flex-1 ml-72">
          <main className="p-8 space-y-6">
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;