import { getPdf } from "../middlewares/getpdf.js";

export class fileController {
  static async convertToPdf(req, res) {
    const { filename } = req.query;

    const pdfBuffer = await getPdf({ filename });
    const pdfBase64 = Buffer.from(pdfBuffer).toString("base64");
    //res.send(pdfBase64); Send like base64 string
    res.contentType("application/pdf");
    res.send(pdfBuffer); // Send like pdf
  }
}
