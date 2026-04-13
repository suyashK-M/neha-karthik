/**
 * GOOGLE APPS SCRIPT FOR NEHA & KARTHIK RSVP (ULTRA-LOGGING VERSION)
 */

const LOG_SHEET_NAME = "Neha Karthik 2026";
const MASTER_LIST_SHEET_NAME = "MasterList";

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(LOG_SHEET_NAME);

    // --- DELETE HANDLER ---
    if (payload.type === "delete") {
      const targetTimestamp = payload.timestamp;
      const data = sheet.getDataRange().getValues();
      // Start from row 2 (index 1) to skip header
      for (let i = 1; i < data.length; i++) {
        const rowTimestamp = data[i][0] ? new Date(data[i][0]).toISOString() : "";
        if (rowTimestamp === targetTimestamp) {
          sheet.deleteRow(i + 1); // Sheet rows are 1-indexed, +1 for header
          return ContentService.createTextOutput(JSON.stringify({ success: true, deleted: true }))
            .setMimeType(ContentService.MimeType.JSON);
        }
      }
      return ContentService.createTextOutput(JSON.stringify({ success: false, error: "Row not found" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // --- SUBMIT HANDLER ---
    const timestamp = new Date();
    
    sheet.appendRow([
      timestamp,
      payload.event,
      payload.fullName,
      payload.email,
      payload.guestCount,
      payload.dietary || "None",
      payload.additionalGuests || "None",
      payload.contactNumber || "",
      payload.accessibility || "None",
      payload.foodAllergies || "None"
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ "success": true }))
      .setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ "success": false, "error": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const identifier = e.parameter.q; 
  
  if (!identifier) {
    const sheet = ss.getSheetByName(LOG_SHEET_NAME);
    const data = sheet.getDataRange().getValues();
    data.shift(); 
    return ContentService.createTextOutput(JSON.stringify(data))
      .setMimeType(ContentService.MimeType.JSON);
  }
  
  const masterSheet = ss.getSheetByName(MASTER_LIST_SHEET_NAME);
  const masterData = masterSheet.getDataRange().getValues();
  const headers = masterData[0];
  const results = { found: false, invitedEvents: [] };
  
  // LOG START
  const cleanId = identifier.toString().toLowerCase().replace(/[^a-z0-9]/g, '');
  console.log("--- START LOOKUP ---");
  console.log("Looking for Cleaned ID: '" + cleanId + "' (Original: '" + identifier + "')");
  console.log("MasterList Data Rows: " + masterData.length);
  
  for (let i = 1; i < masterData.length; i++) {
    const row = masterData[i];
    
    // Column C (Phone) - Index 2
    let phoneRaw = row[2] ? row[2].toString() : "";
    let phoneClean = phoneRaw.toLowerCase().replace(/[^a-z0-9]/g, '').split('.')[0];
    
    // Column D (Email) - Index 3
    let emailRaw = row[3] ? row[3].toString() : "";
    let emailClean = emailRaw.toLowerCase().trim();
    
    // Check match — use includes() for phone to catch bulk entries like
    // "+91 9740660530 / Rekha +91 9902001470 / Bhagyashree +91 9741475978"
    if (phoneClean.includes(cleanId) || cleanId === emailClean) {
      console.log("MATCH FOUND at row " + (i + 1) + " (Name: " + row[1] + ")");
      results.found = true;
      for (let j = 11; j < headers.length; j++) {
        const val = row[j] ? row[j].toString().toUpperCase().trim() : "";
        if (val === "Y") {
          results.invitedEvents.push(headers[j]);
        }
      }
      break; 
    }
  }
  
  console.log("Final Result: " + JSON.stringify(results));
  console.log("--- END LOOKUP ---");
  
  return ContentService.createTextOutput(JSON.stringify(results))
    .setMimeType(ContentService.MimeType.JSON);
}
