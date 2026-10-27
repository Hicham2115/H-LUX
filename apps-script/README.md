# Order intake setup

`Code.gs` appends validated orders to the `Sheet1` tab. The script recalculates delivery fees and totals instead of trusting values sent by the browser.

1. Create an Apps Script project bound to the order spreadsheet and replace its starter code with `Code.gs`.
2. In **Project Settings → Script Properties**, add `ORDER_APPS_SCRIPT_SECRET` with a long random value.
3. Deploy the script as a web app that executes as the spreadsheet owner. Public site visitors need access to submit orders; the script checks the secret kept on the Next.js server.
4. Set `ORDER_APPS_SCRIPT_URL` to the deployed `/exec` URL and `ORDER_APPS_SCRIPT_SECRET` to the same secret in the Next.js server environment, then restart/redeploy the site.
