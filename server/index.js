import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
dotenv.config();

const app = express();

//midleware

app.use(cors())
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