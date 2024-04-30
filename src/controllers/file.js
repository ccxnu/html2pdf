import {
  generatePdf,
  generatePdfFromLocalFile,
} from "../models/generate-pdf.js";

export class fileController {
  static async getPdf(req, res) {
    const file = req.query.file || "url";
    const link = req.query.link || "https://www.google.com";
    let type = "url";

    try {
      const result = await generatePdf(type, link);

      if (file === "base64") {
        const base64Format = Buffer.from(result).toString("base64");
        res.send(base64Format);
      }
      res.attachment("file.pdf");
      res.contentType("application/pdf");
      res.send(result);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  static async getLocalfile(req, res) {
    const file = req.query.file || "url";
    const { id } = req.params;
    console.log(file, id);

    try {
      const result = await generatePdfFromLocalFile({ id });

      if (file === "base64") {
        const base64Format = Buffer.from(result).toString("base64");
        res.send(base64Format);
      }

      res.attachment("test.pdf");
      res.contentType("application/pdf");
      res.send(result);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  static async getBase64ToPdf(req, res) {
    try {
      let result = await generatePdf("base64", req.body.content);
      let filename = crypto.randomBytes(16).toString("hex").toUpperCase();
      console.log(filename);
      if (req.body.filename) {
        let validated_file_name = req.body.filename
          .trim()
          .replace(/[^a-zA-Z0-9_-]/gim, "");
        filename = validated_file_name;
      }
      res.attachment(`${filename}.pdf`);
      res.contentType("application/pdf");
      res.send(result);
    } catch (error) {
      res.status(400).send(error);
    }
  }
}
