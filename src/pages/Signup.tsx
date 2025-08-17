import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Signup(){
  const [role, setRole] = useState("Patient");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Demo signup successful. You can now login.");
  };

  return (
    <>
      <Helmet>
        <title>Signup | Webquro Patient Portal</title>
        <meta name="description" content="Create your Webquro account to manage appointments, records, and more." />
        <link rel="canonical" href="/signup" />
      </Helmet>

      <section className="py-16">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto p-6 rounded-xl border bg-card">
            <h1 className="text-3xl font-bold mb-1">Create account</h1>
            <p className="text-muted-foreground mb-6">Join Webquro for seamless care experience.</p>
            <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-4">
              <input required placeholder="Full Name" className="h-11 rounded-md border px-3 bg-background" />
              <input required type="email" placeholder="Email" className="h-11 rounded-md border px-3 bg-background" />
              <input required type="tel" placeholder="Phone" className="h-11 rounded-md border px-3 bg-background" />
              <input required type="date" placeholder="DOB" className="h-11 rounded-md border px-3 bg-background" />
              <select className="h-11 rounded-md border px-3 bg-background" value={role} onChange={(e)=>setRole(e.target.value)}>
                <option>Patient</option>
                <option>Doctor</option>
              </select>
              <select className="h-11 rounded-md border px-3 bg-background">
                <option>Gender</option>
                <option>Female</option>
                <option>Male</option>
                <option>Other</option>
              </select>
              {role === 'Doctor' && (
                <>
                  <input placeholder="Specialty" className="h-11 rounded-md border px-3 bg-background" />
                  <input placeholder="Department" className="h-11 rounded-md border px-3 bg-background" />
                </>
              )}
              <input required type="password" placeholder="Password" className="h-11 rounded-md border px-3 bg-background" />
              <input required type="password" placeholder="Confirm Password" className="h-11 rounded-md border px-3 bg-background" />
              <div className="md:col-span-2 flex justify-end gap-3 mt-2">
                <button type="reset" className="h-11 px-4 rounded-md border">Reset</button>
                <Button type="submit" variant="default">Create account</Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
