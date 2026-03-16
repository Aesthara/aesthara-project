const SHEET_NAME = "Contact Form";

function doPost(e) {
  try {
    const sheet = getOrCreateSheet_();
    const recipients = (e.parameter.recipients || "")
      .split(",")
      .map((value) => value.trim())
      .filter(Boolean)
      .join(",");

    const submission = {
      timestamp: new Date(),
      name: (e.parameter.name || "").trim(),
      email: (e.parameter.email || "").trim(),
      phone: (e.parameter.phone || "").trim(),
      company: (e.parameter.company || "").trim(),
      message: (e.parameter.message || "").trim(),
      source: (e.parameter.source || "").trim(),
    };

    validateSubmission_(submission);

    sheet.appendRow([
      submission.timestamp,
      submission.name,
      submission.email,
      submission.phone,
      submission.company,
      submission.message,
      submission.source,
    ]);

    if (recipients) {
      GmailApp.sendEmail(
        recipients,
        "New Aesthara website enquiry",
        [
          "A new contact form submission was received.",
          "",
          "Name: " + submission.name,
          "Email: " + submission.email,
          "Phone: " + submission.phone,
          "Company: " + submission.company,
          "Message:",
          submission.message,
          "",
          "Source: " + submission.source,
          "Submitted at: " + submission.timestamp,
        ].join("\n"),
      );
    }

    return ContentService.createTextOutput(
      JSON.stringify({ ok: true }),
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({
        ok: false,
        error: error instanceof Error ? error.message : String(error),
      }),
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function getOrCreateSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
    sheet.appendRow([
      "Timestamp",
      "Name",
      "Email",
      "Phone",
      "Company",
      "Message",
      "Source",
    ]);
  }

  return sheet;
}

function validateSubmission_(submission) {
  const values = [
    submission.name,
    submission.email,
    submission.phone,
    submission.company,
    submission.message,
  ];

  if (values.some((value) => !value)) {
    throw new Error("All fields are required.");
  }
}
