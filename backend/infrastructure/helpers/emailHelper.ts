import nodemailer from 'nodemailer'

const emailDireccion = process.env.ENV_EMAIL_DIRECCION || ''
const emailPassword = process.env.ENV_EMAIL_PASSWORD || ''
const emailHost = process.env.ENV_EMAIL_HOST || ''
const emialPort = process.env.ENV_EMAIL_PORT || ''

const transporter = nodemailer.createTransport({
  host: emailHost,
  port: Number(emialPort),
  secure: true, // true for 465, false for other ports
  auth: {
    user: emailDireccion, // generated ethereal user
    pass: emailPassword, // generated ethereal password
  },
})

export const sendEmail = async (email: String, name: string, token: string) => {
  console.log("execute")
  await transporter.sendMail({
    from: emailDireccion, // sender address
    to: `${email}`, // list of receivers
    subject: 'Confirmación de la cuenta', // Subject line
    html: `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Email</title>
    
        <style>
          * {
            padding: 0;
            margin: 0;
            font-family: Arial, Helvetica, sans-serif;
          }
    
          .container-general {
            background-color: #f0f2f5;
            width: 100%;
            height: 530px;
          }
    
          .container-card {
            max-width: 550px;
            margin: 0 auto;
            /* margin-top: 50px; */
            background-color: #fff;
            border-radius: 6px;
            padding: 15px;
          }
    
          .container-logo {
            display: flex;
            justify-content: center;
          }
    
          .logo-img {
            width: 200px;
          }
    
          .send-email-picture {
            width: 100%;
            padding: 15px 0;
          }
    
          .container-btn-verify {
            display: flex;
            justify-content: center;
            margin: 30px 0;
          }
    
          .btn-verify {
            background-color: transparent;
            padding: 10px 45px;
            border-radius: 100px;
            border: 2px solid #efc940;
            color: #000;
            font-weight: 600;
            cursor: pointer;
            font-size: 12px;
          }
    
          .btn-verify:hover {
            box-shadow: rgba(0, 0, 0, 0.1) 0px 14px 30px;
            background-color: #efc940;
          }
    
          .container-questions {
            width: 80%;
            margin: 0 auto;
            padding: 20px 0;
            background-color: #f0f2f5;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 6px;
          }
    
          .link-email {
            color: #000;
            text-decoration-color: #efc940;
            text-underline-offset: 3.5px;
          }
    
          .container-footer {
            border-top: 1px solid;
            border-color: #f0f2f5;
            margin-top: 25px;
            padding-top: 15px;
            font-size: 13.5px;
            color: #767676;
          }
        </style>
      </head>
      <body>
        <div class="container-general">
          <div class="container-card">
            <div class="container-logo">
               <img
                 src="cid:logo_horizontal-black"
                 alt="Logo"
                 class="logo-img"
               />
             </div>
            <h1 style="text-align: center">
              Verificación de tu correo electrónico
            </h1>
            <p style="text-align: center">
              Hola, ${name} ingresa al siguiente link y confirma tu cuenta
            </p>
            <div class="container-btn-verify">
              <a href="http://localhost:3000/verifiedAccount/${token}"><button class="btn-verify">VERIFICAR</button></a>
            </div>
            <div class="container-questions">
              <div>
                <img src="cid:email" alt="Email picture" />
              </div>
    
              <div style="padding-left: 20px">
                <h3>Tienes una pregunta?</h3>
                <a
                  href="mailto:info@fundacionsoytusalud.org"
                  target="_blank"
                  class="link-email"
                >
                  Escribenos un correo
                </a>
              </div>
            </div>
    
            <div class="container-footer">
              <p>Copyrights Soy Tú Salud © 2022.</p>
              <p style="padding-top: 7px">Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </body>
    </html>
    
    `, // html body
     attachments: [
       //this is for find the img at send
       {
         filename: 'logo_horizontal-black.png',
         path: "https://firebasestorage.googleapis.com/v0/b/quetions-app.appspot.com/o/logo_horizontal-black.png?alt=media&token=da78c055-e58f-4a68-a11b-851eb2a278a6",
         cid: 'logo_horizontal-black',
       },
      {
        filename: 'email.png',
        path: 'https://firebasestorage.googleapis.com/v0/b/quetions-app.appspot.com/o/email.svg?alt=media&token=409fed59-cf9c-41b7-a552-14f559588917',
        cid: 'email',
      },
     ],
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
