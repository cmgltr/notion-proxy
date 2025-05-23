export default async function handler(req, res) {
  const notionUrl = "https://mecsys.notion.site/Mechanical-Systems-Forum-1ddd6db7d2508011b79cf032297d399f";

  try {
    const notionResponse = await fetch(notionUrl);
    
    // Status ve content-type dahil tüm header'ları geçir
    res.status(notionResponse.status);
    notionResponse.headers.forEach((value, name) => {
      res.setHeader(name, value);
    });

    const body = await notionResponse.text();
    res.send(body);
  } catch (error) {
    res.status(500).send("Notion sayfası yüklenemedi.");
  }
}
