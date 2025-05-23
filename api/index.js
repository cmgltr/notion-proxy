export default async function handler(req, res) {
  const notionUrl = "https://mecsys.notion.site/Mechanical-Systems-Forum-1ddd6db7d2508011b79cf032297d399f?pvs=4";
  try {
    const response = await fetch(notionUrl);
    const html = await response.text();
    res.setHeader("Content-Type", "text/html");
    res.send(html);
  } catch (e) {
    res.status(500).send("Notion sayfası yüklenemedi.");
  }
}
