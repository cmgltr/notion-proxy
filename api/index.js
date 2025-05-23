export default async function handler(req, res) {
  const notionUrl = "https://mecsys.notion.site/Mechanical-Systems-Forum-1ddd6db7d2508011b79cf032297d399f";
  res.writeHead(302, { Location: notionUrl });
  res.end();
}
