import { useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LogOut, CheckCircle } from "lucide-react";

const Logout = () => {
  useEffect(() => {
    // Simulate logout process
    const timer = setTimeout(() => {
      // In a real app, you would clear tokens, sessions, etc.
      console.log("User logged out");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleLogin = () => {
    // Redirect to login or home page
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative">
      <div className="medical-pattern" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <Card className="glass-panel w-96">
          <CardHeader className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mx-auto mb-4"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
            </motion.div>
            <CardTitle className="text-2xl font-bold text-foreground">
              Successfully Logged Out
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground"
            >
              You have been safely logged out from the MediAdmin system. 
              Thank you for using our platform.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-4"
            >
              <div className="text-sm text-muted-foreground">
                <p>Session ended at: {new Date().toLocaleString()}</p>
              </div>
              
              <Button 
                onClick={handleLogin}
                className="w-full btn-primary"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Login Again
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-xs text-muted-foreground"
            >
              For security reasons, please close all browser windows.
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Logout;