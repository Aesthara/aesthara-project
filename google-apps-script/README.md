# Contact Form Setup

This project sends the website contact form through a Vercel serverless function to a Google Apps Script webhook.

## What it does

- Appends each submission to a Google Sheet
- Sends the same submission to:
  - `kawaljeet.karir9@gmail.com`
  - `kawaljeet@aesthara.in`

## Setup

1. Create a new Google Sheet.
2. Open `Extensions -> Apps Script`.
3. Replace the default script with [`contact-form.gs`](./contact-form.gs).
4. Save the script.
5. Deploy it as `Deploy -> New deployment -> Web app`.
6. Set:
   - Execute as: `Me`
   - Who has access: `Anyone`
7. Copy the deployed `/exec` URL.
8. In Vercel, add these Environment Variables:

- `GOOGLE_APPS_SCRIPT_URL`
- `CONTACT_RECIPIENTS`

Example:

```env
GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/AKfycbx5y94IbSh0Ol1WEBIPTMjIugk1gHG8AdtU6MB7dPiQYlbfCxsfMk6ajWaS5L9HMLbF/exec
CONTACT_RECIPIENTS=kawaljeet.karir9@gmail.com,kawaljeet@aesthara.in
```

9. Redeploy the Vercel project.

## Notes

- The frontend submits to `/api/contact`, which runs on Vercel.
- The Apps Script URL stays on the server side in Vercel env vars.
- The frontend requires: name, email, phone, company, and message.
- The existing canister submission is still attempted secondarily, but it no longer blocks success if the webhook path works.
