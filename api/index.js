export default function handler(req, res) {
  res.writeHead(302, { Location: "https://mecsys.notion.site/Mechanical-Systems-Forum-..." });
  res.end();
}
