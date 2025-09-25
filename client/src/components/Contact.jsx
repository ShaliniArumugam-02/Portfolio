import { Instagram, Linkedin, Mail,Map,Phone ,Send} from "lucide-react";
import {cn} from '../lib/utils';
import axios from 'axios';
import { useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData,setFormData]=useState({
    name:"",
    email:"",
    message:""
  });
  const [status,setStatus]=useState(false);

  const handleChange = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const handleSubmit= async (e) => {
    e.preventDefault();
     setStatus(true)
    try {
     
      const res = await axios.post("https://portfolio-yi3y.onrender.com/api/sendemail", formData);
      if(res.data.success){
        setStatus(false);
        toast.success('Email sent successfully')
        setFormData({name:"",email:"",message:""})
      }
    } catch (error) {
      console.log("error in sending email");
      setStatus(false)
    }
  }
  return (
    <section id="contact" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl mb-4 text-center">
          Get In
          <span className="text-primary"> Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              Contact Information
            </h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/30">
                  <Mail className="size-6 text-primary" />
                </div>
                <div >
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:shaliniarumugam003@gmail.com" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  > shaliniarumugam003@gmail.com</a>
                  
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/30">
                  <Phone className="size-6 text-primary" />
                </div>
                <div >
                  <h4 className="font-medium">Phone</h4>
                  <a href="tel:9043602795" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  > (+91)9043602795</a>
                  
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/30">
                  <Map className="size-6 text-primary" />
                </div>
                <div >
                  <h4 className="font-medium">Location</h4>
                  <a 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  > Chennai, Anna Nagar</a>
                  
                </div>
              </div>
            </div>
              <div className="pt-8">
                <h4 className="font-medium mb-4">Connect With Me</h4>
                <div className="flex space-x-4 justify-center">
                  <a href="https://www.linkedin.com/in/shalini-arumugam02/" target="_blank">
                    <Linkedin/>
                  </a>
                  <a href="" target="_blank">
                    <Instagram/>
                  </a>
                </div>

              </div>
          </div>
            <div className="bg-card p-8 rounded-lg shadow-sm">
               <h3 className="text-2xl font-semibold mb-6">Send me a Message</h3>
               <form className="space-y-6" onSubmit={handleSubmit}>
                   <div>
                    <label htmlFor="name" className="block text-lg font-medium mb-2">Your Name</label>
                    <input
                    onChange={handleChange}
                    value={formData.name}
                    type="text"
                    id="name" 
                    name="name"
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"

                    />
                   </div>
                   <div>
                    <label htmlFor="Email" className="block text-lg font-medium mb-2">Your Email</label>
                    <input
                    onChange={handleChange}
                    value={formData.email}
                    type="email"
                    id="email" 
                    name="email"
                    required
                    placeholder="example@sample.com"
                    className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"

                    />
                   </div>
                   <div>
                    <label htmlFor="name" className="block text-lg font-medium mb-2">Message</label>
                    <textarea
                    onChange={handleChange}
                    value={formData.message}
                    id="message" 
                    name="message"
                    required
                    placeholder="Hello, I'd like to talk about..."
                    className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"

                    />
                   </div>
                   <button type="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2",
                       )}
                      
                       > {status? "Sending...": "Send Message"}
                    <Send size={16}/>

                   </button>
               </form>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
