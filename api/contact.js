export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false, error: "Method not allowed." });
    return;
  }

  const {
    name = "",
    email = "",
    phone = "",
    company = "",
    message = "",
    source = "",
  } = req.body ?? {};

  const submission = {
    name: String(name).trim(),
    email: String(email).trim(),
    phone: String(phone).trim(),
    company: String(company).trim(),
    message: String(message).trim(),
    source: String(source).trim(),
  };

  if (Object.values(submission).some((value) => value.length === 0)) {
    res.status(400).json({ ok: false, error: "All fields are required." });
    return;
  }

  const webhookUrl = process.env.GOOGLE_APPS_SCRIPT_URL;
  if (!webhookUrl) {
    res.status(500).json({
      ok: false,
      error: "GOOGLE_APPS_SCRIPT_URL is not configured.",
    });
    return;
  }

  const recipients =
    process.env.CONTACT_RECIPIENTS ||
    "kawaljeet.karir9@gmail.com,kawaljeet@aesthara.in";

  const payload = new URLSearchParams({
    ...submission,
    recipients,
  });

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: payload.toString(),
    });

    const text = await response.text();
    let result = { ok: true };

    try {
      result = JSON.parse(text);
    } catch {
      result = { ok: response.ok };
    }

    if (!response.ok || result.ok !== true) {
      res.status(502).json({
        ok: false,
        error: result.error || "Apps Script rejected the submission.",
      });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (error) {
    res.status(500).json({
      ok: false,
      error: error instanceof Error ? error.message : "Unexpected error.",
    });
  }
}
