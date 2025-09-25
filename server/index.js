import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
dotenv.config();
import path from 'path';

const app = express();

const __dirname= path.resolve();


//midleware

app.use(cors({
    origin: "https://portfolio-yi3y.onrender.com", 
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }))
app.use(express.json());


//server

const PORT =process.env.PORT ||4000
app.listen(PORT,()=>{
    console.log("server is running in the PORT:",PORT)
});


app.post('/api/sendemail', async(req,res)=>{
    const {name,email,message}=req.body
    try {
        const transporter= nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:process.env.EMAIL_USER,
                pass:process.env.EMAIL_PASS
            }
        });
        const mailOptions = {
            from:email,
            to:process.env.EMAIL_USER,
            subject:`New Message from ${name}`,
            text: `
            Name: ${name}
            Email: ${email}
            Message:${message}
            `,
        };
        await transporter.sendMail(mailOptions);
        res.status(200).json({message:"Email sent successfully",success:true})
    } catch (error) {
        console.log("error in sending email:", error)
        res.status(500).json({message:"Failed to send email", success:false})
    }

})

app.use(express.static(path.join(__dirname,'/client/dist')));

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'client','dist', 'index.html'));
});