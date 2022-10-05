import nodemailer from 'nodemailer'


const emailDireccion = process.env.ENV_EMAIL_DIRECCION || ""
const emailPassword = process.env.ENV_EMAIL_PASSWORD || ""
const emailHost = process.env.ENV_EMAIL_HOST || ""
const emialPort = process.env.ENV_EMAIL_PORT || ""

const transporter = nodemailer.createTransport({
  host: emailHost,
  port: Number(emialPort),
  secure: true, // true for 465, false for other ports
  auth: {
    user: emailDireccion, // generated ethereal user
    pass: emailPassword, // generated ethereal password
  },
})

export const sendEmail = async (email:String, name: string ) => {
  await transporter.sendMail({
    from: emailDireccion, // sender address
    to: `${email}`, // list of receivers
    subject: 'Welcome to the App', // Subject line
    html: `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <style>
            body {
                font-size: 14px;
                color: rgb(43, 43, 43);
                background-color: rgb(236, 236, 236);
            }
            h1 {
                text-align: center;
                color: blue;
            }
            .footer {
                text-align: center;
            }
        </style>
        <title>HTML</title>
    </head>
    <body>
        <img width="100px" src="cid:iconoddhtransparente" alt="Logo App">
        <h1>Welcome ${name}, emails sended with Node.js</h1>
        <p>With this email get all information of us products!</p>
        
        <br /><br /><br /><br />
    
        <footer class="footer">&copy; Copyright Fundacion Soy Tu Salud</footer>
    </body>
    </html>`, // html body

  })
}

// attachments: [
//   //this is for find the img at send
//   {
//     filename: 'iconoddhtransparente.png',
//     path: __dirname + '/emails/iconoddhtransparente.png',
//     cid: 'iconoddhtransparente',
//   },
// ],