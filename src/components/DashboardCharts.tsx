import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area
} from "recharts";

const appointmentData = [
  { month: "Jan", appointments: 180, completed: 165 },
  { month: "Feb", appointments: 220, completed: 200 },
  { month: "Mar", appointments: 280, completed: 255 },
  { month: "Apr", appointments: 320, completed: 295 },
  { month: "May", appointments: 290, completed: 270 },
  { month: "Jun", appointments: 350, completed: 320 }
];

const patientDemographics = [
  { name: "Adults (18-65)", value: 45, color: "hsl(210, 100%, 56%)" },
  { name: "Seniors (65+)", value: 30, color: "hsl(142, 71%, 45%)" },
  { name: "Children (0-18)", value: 20, color: "hsl(38, 92%, 50%)" },
  { name: "Critical Care", value: 5, color: "hsl(0, 84%, 60%)" }
];

export function DashboardCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Appointments Trend */}
      <motion.div
        className="glass-card p-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h3 className="text-lg font-semibold text-foreground mb-4">Appointments Trend</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={appointmentData}>
              <defs>
                <linearGradient id="appointmentGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(210, 100%, 56%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(210, 100%, 56%)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="completedGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(142, 71%, 45%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(142, 71%, 45%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "12px",
                  backdropFilter: "blur(10px)"
                }}
              />
              <Area
                type="monotone"
                dataKey="appointments"
                stroke="hsl(210, 100%, 56%)"
                strokeWidth={3}
                fill="url(#appointmentGradient)"
                name="Total Appointments"
              />
              <Area
                type="monotone"
                dataKey="completed"
                stroke="hsl(142, 71%, 45%)"
                strokeWidth={3}
                fill="url(#completedGradient)"
                name="Completed"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Patient Demographics */}
      <motion.div
        className="glass-card p-6"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <h3 className="text-lg font-semibold text-foreground mb-4">Patient Demographics</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={patientDemographics}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={120}
                dataKey="value"
                animationBegin={800}
                animationDuration={1000}
              >
                {patientDemographics.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value, name) => [`${value}%`, name]}
                contentStyle={{
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "12px",
                  backdropFilter: "blur(10px)"
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        {/* Legend */}
        <div className="grid grid-cols-2 gap-3 mt-4">
          {patientDemographics.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm text-muted-foreground">{item.name}</span>
              <span className="text-sm font-medium text-foreground ml-auto">{item.value}%</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}