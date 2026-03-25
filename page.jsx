import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

export default function OldAgeHomeWebsite() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = () => {
    const subject = "New Inquiry from Website";
    const body = `Name: ${form.name}%0APhone: ${form.phone}%0AMessage: ${form.message}`;
    window.location.href = `mailto:deben65@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="p-6 space-y-10">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">[Old Age Home Name]</h1>
        <p className="text-lg">A place of care, comfort, and dignity</p>
        <Button>Contact Us</Button>
      </section>

      {/* About Section */}
      <section>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">About Us</h2>
            <p>
              [Add description about your old age home here. Include mission, values,
              and what makes your facility special.]
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Services Section */}
      <section className="grid md:grid-cols-3 gap-4">
        {["Residential Care", "Medical Support", "Recreation"].map((item, i) => (
          <motion.div key={i} whileHover={{ scale: 1.05 }}>
            <Card>
              <CardContent className="p-4">
                <h3 className="text-xl font-medium">{item}</h3>
                <p>[Add details]</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      {/* Gallery */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1,2,3,4].map((i) => (
            <div key={i} className="h-32 bg-gray-200 flex items-center justify-center">
              Image {i}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section>
        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold">Contact Us</h2>
            <Input placeholder="Your Name" onChange={(e)=>setForm({...form,name:e.target.value})} />
            <Input placeholder="Phone Number" onChange={(e)=>setForm({...form,phone:e.target.value})} />
            <Textarea placeholder="Message" onChange={(e)=>setForm({...form,message:e.target.value})} />
            <Button onClick={handleSubmit}>Submit</Button>
          </CardContent>
        </Card>
      </section>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919849649095"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg"
      >
        WhatsApp
      </a>

      {/* Map Placeholder */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Find Us</h2>
        <div className="h-64 bg-gray-300 flex items-center justify-center">
          Map will be added once location is provided
        </div>
      </section>

      {/* Brochure Download */}
      <section className="text-center">
        <a href="/brochure.pdf" download>
          <Button>Download Brochure</Button>
        </a>
      </section>
    </div>
  );
}
