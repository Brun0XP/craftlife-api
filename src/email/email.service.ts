import { Injectable, InternalServerErrorException } from '@nestjs/common';
import * as doT from 'dot';
import * as fs from 'fs-extra';
import * as htmlToText from 'html-to-text';
const mjml = require('mjml');
import * as nodemailer from 'nodemailer';
import * as path from 'path';


export enum EmailTemplate {
  PIX_GENERATED = 'pix-gerado',
}

@Injectable()
export class EmailService {

  private transporter: nodemailer.Transporter;
  private templatePath: string;
  private templateCache = new Map<string, Promise<doT.RenderFunction>>();

  constructor() {
    this.transporter = nodemailer.createTransport({
      pool: true,
      secure: false,
      host: process.env.SMTP_HOST,
      port: +process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
      },
    });
    this.templatePath = path.join(process.cwd(), 'resources');
  }

  async send(destination: string, subject: string, template: EmailTemplate, data?: any) {
    const renderer = await this.getTemplate(template);
    const {html, errors} = mjml(renderer(data), {
      filePath: this.templatePath,
    });

    if (errors.length > 0) {
      throw new InternalServerErrorException(errors[0].message);
    }
    await this.transporter.sendMail({
      from: '"Bruno Rodrigues" <contato@brunodsr.com>',
      sender: 'contato@brunodsr.com',
      to: destination,
      subject,
      text: htmlToText.fromString(html),
      html,
    });
  }

  private getTemplate(name: string): Promise<doT.RenderFunction> {
    if (this.templateCache.has(name)) {
      return this.templateCache.get(name);
    }
    const template = (async () => {
      const source = await fs.readFile(path.join(this.templatePath, `${name}.mjml`), 'utf-8');
      return doT.template(source);
    })();
    this.templateCache.set(name, template);
    return template;
  }

}
