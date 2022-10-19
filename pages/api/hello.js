/*eslint no-octal: "error"*/

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      res.status(200).json({ hello: "world!" });
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
