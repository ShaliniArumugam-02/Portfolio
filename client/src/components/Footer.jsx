import { ArrowUp } from "lucide-react"


const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t  mt-12 pt-8 flex flex-wrap justify-between items-center">
        <p className="text-sm text-foreground">
            &copy; {new Date().getFullYear()} Shalini | Portfolio,All rights are reserved. </p>
            <a href="#hero" className="p-3 rounded-full bg-primary/30 hover:bg-primary/60 transition-colors duration-300">
                <ArrowUp size={20}/>
            </a>
    </footer>
  )
}

export default Footer