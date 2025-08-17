import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  color: "primary" | "success" | "warning" | "destructive";
  trend?: {
    value: number;
    isPositive: boolean;
  };
  delay?: number;
}

export function StatCard({ title, value, icon: Icon, color, trend, delay = 0 }: StatCardProps) {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const counter = setInterval(() => {
        current += increment;
        if (current >= value) {
          setAnimatedValue(value);
          clearInterval(counter);
        } else {
          setAnimatedValue(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(counter);
    }, delay * 200);

    return () => clearTimeout(timer);
  }, [value, delay]);

  const colorClasses = {
    primary: "from-primary to-primary-glow",
    success: "from-success to-success/80",
    warning: "from-warning to-warning/80",
    destructive: "from-destructive to-destructive/80"
  };

  const bgColors = {
    primary: "bg-primary/10",
    success: "bg-success/10",
    warning: "bg-warning/10",
    destructive: "bg-destructive/10"
  };

  return (
    <motion.div
      className="glass-card p-6 hover-glow group cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: delay * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-muted-foreground text-sm font-medium mb-2">{title}</p>
          <motion.h3
            className="text-3xl font-bold text-foreground mb-2"
            key={animatedValue}
          >
            {animatedValue.toLocaleString()}
          </motion.h3>
          {trend && (
            <div className="flex items-center gap-1">
              <span
                className={`text-sm font-medium ${
                  trend.isPositive ? "text-success" : "text-destructive"
                }`}
              >
                {trend.isPositive ? "+" : ""}{trend.value}%
              </span>
              <span className="text-muted-foreground text-sm">vs last month</span>
            </div>
          )}
        </div>
        
        <motion.div
          className={`p-4 rounded-2xl ${bgColors[color]} group-hover:scale-110 transition-transform duration-300`}
          whileHover={{ rotate: 10 }}
        >
          <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${colorClasses[color]} flex items-center justify-center`}>
            <Icon className="w-5 h-5 text-white" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}