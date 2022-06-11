import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter-";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "398f04b48dc882",
    pass: "b4e8f2c1a43161",
  },
});
export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Gabriel Campos <gabrielcmps55@gmail.com>",
      subject,
      html: body,
    });
  }
}
