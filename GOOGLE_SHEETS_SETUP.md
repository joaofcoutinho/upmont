# Google Sheets Integration Setup Guide

This guide will help you set up Google Sheets integration for the contact form to automatically save form submissions.

## Prerequisites

- A Google account
- Access to Google Sheets
- Access to Google Apps Script

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new blank spreadsheet
3. Name it "UpMont - Contact Form Leads" or any name you prefer
4. In the first row, add the following column headers:
   - `A1`: Timestamp
   - `B1`: Nome
   - `C1`: WhatsApp
   - `D1`: Email
   - `E1`: Unidade de Interesse

## Step 2: Create Google Apps Script

1. In your Google Sheet, go to **Extensions** > **Apps Script**
2. Delete any default code in the editor
3. Copy and paste the following code:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);

    // Format the timestamp
    var timestamp = new Date(data.timestamp);
    var formattedTimestamp = Utilities.formatDate(timestamp, Session.getScriptTimeZone(), "dd/MM/yyyy HH:mm:ss");

    // Append the data to the sheet
    sheet.appendRow([
      formattedTimestamp,
      data.nome,
      data.whatsapp,
      data.email,
      data.unidadeInteresse
    ]);

    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success', message: 'Data saved successfully' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: Test function
function testDoPost() {
  var testData = {
    postData: {
      contents: JSON.stringify({
        timestamp: new Date().toISOString(),
        nome: "João Silva",
        whatsapp: "(11) 98765-4321",
        email: "joao@example.com",
        unidadeInteresse: "4-suites"
      })
    }
  };

  var result = doPost(testData);
  Logger.log(result.getContent());
}
```

4. Click the **Save** icon (💾) and give your project a name (e.g., "Contact Form Handler")

## Step 3: Deploy the Web App

1. Click on **Deploy** > **New deployment**
2. Click on **Select type** (gear icon) and choose **Web app**
3. Fill in the deployment configuration:
   - **Description**: "Contact Form Integration" (or any description)
   - **Execute as**: "Me" (your Google account)
   - **Who has access**: "Anyone" (important for external form submissions)
4. Click **Deploy**
5. Review the permissions:
   - Click **Authorize access**
   - Choose your Google account
   - Click **Advanced** > **Go to [Your Project Name] (unsafe)**
   - Click **Allow**
6. **Copy the Web App URL** - you'll need this for the next step
   - It will look like: `https://script.google.com/macros/s/AKfycbz.../exec`

## Step 4: Configure Environment Variable

1. In your project root, create a `.env.local` file if it doesn't exist
2. Add the following line with your Web App URL:

```env
NEXT_PUBLIC_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

Replace `YOUR_SCRIPT_ID` with the actual URL you copied from Step 3.

3. Restart your Next.js development server for the environment variable to take effect:

```bash
# Stop the current server (Ctrl+C)
# Then restart it
npm run dev
```

## Step 5: Test the Integration

1. Go to your website's contact form
2. Fill out all fields:
   - Nome Completo
   - WhatsApp
   - E-mail
   - Unidade de Interesse
3. Click "RECEBER INFORMAÇÕES"
4. Check your Google Sheet - you should see a new row with the submitted data

## Troubleshooting

### Form submission doesn't appear in Google Sheet

1. **Check the Web App URL**: Make sure the URL in `.env.local` is correct
2. **Check deployment settings**: Ensure "Who has access" is set to "Anyone"
3. **Check the script**: Make sure the Google Apps Script code is saved and deployed
4. **Check browser console**: Open Developer Tools (F12) and look for any errors in the Console tab
5. **Test the script directly**: In Google Apps Script, run the `testDoPost()` function to verify it works

### Permission denied errors

1. Make sure you authorized the script to access your Google Sheets
2. Re-deploy the web app and re-authorize if needed
3. Check that the sheet is not restricted

### Environment variable not loading

1. Make sure the file is named `.env.local` (not `.env` or `.env.development`)
2. Restart your Next.js development server after creating/modifying the file
3. Verify the variable starts with `NEXT_PUBLIC_` (required for client-side access)

## Security Considerations

- The Web App URL is public, but only accepts POST requests with the expected data format
- Consider adding additional validation in the Google Apps Script if needed
- The script only has access to the specific spreadsheet you created
- Form data is sent over HTTPS (secure connection)

## Optional Enhancements

### Email Notifications

You can modify the Google Apps Script to send email notifications when a new lead is received:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    var timestamp = new Date(data.timestamp);
    var formattedTimestamp = Utilities.formatDate(timestamp, Session.getScriptTimeZone(), "dd/MM/yyyy HH:mm:ss");

    sheet.appendRow([
      formattedTimestamp,
      data.nome,
      data.whatsapp,
      data.email,
      data.unidadeInteresse
    ]);

    // Send email notification
    var emailBody = `
      Novo lead recebido!

      Nome: ${data.nome}
      WhatsApp: ${data.whatsapp}
      Email: ${data.email}
      Unidade de Interesse: ${data.unidadeInteresse}
      Data/Hora: ${formattedTimestamp}
    `;

    MailApp.sendEmail({
      to: "seu-email@upmont.com.br", // Replace with your email
      subject: "Novo Lead - UpMont Contact Form",
      body: emailBody
    });

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

### Data Validation

Add validation in the script to ensure data quality:

```javascript
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    // Validate required fields
    if (!data.nome || !data.whatsapp || !data.email || !data.unidadeInteresse) {
      throw new Error("Missing required fields");
    }

    // Validate email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      throw new Error("Invalid email format");
    }

    // Continue with saving data...
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    // ... rest of the code

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Support

If you encounter any issues not covered in this guide, please refer to:
- [Google Apps Script Documentation](https://developers.google.com/apps-script)
- [Google Sheets API Documentation](https://developers.google.com/sheets/api)

## Next Steps

Once the integration is working:
1. Monitor your Google Sheet regularly for new leads
2. Set up a process to follow up with leads promptly
3. Consider setting up email notifications (see Optional Enhancements above)
4. Periodically backup your leads data
