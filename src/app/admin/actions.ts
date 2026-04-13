"use server";

export async function fetchRSVPs() {
  const scriptUrl = "https://script.google.com/macros/s/AKfycbzsQkf238rutNUzfkcTez2fljeyxrueRA9ciLeV0yA1rAQ3wyBOK8zQP_9u1Ccss2Pk/exec";

  try {
    const response = await fetch(scriptUrl, {
      method: "GET",
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
      },
      cache: 'no-store', // Always get fresh data
      redirect: 'follow'
    });

    if (!response.ok) {
      throw new Error(`Google Script Error: ${response.status}`);
    }

    const data = await response.json();
    
    // Mapping the Google Sheets rows to a more usable object structure
    // Row indices: 0: Date, 1: Event, 2: Full Name, 3: Email, 4: Guest Count, 5: Dietary, 6: Additional Guests, 7: Contact, 8: Accessibility, 9: Allergies
    return {
      success: true,
      data: data.map((row: any) => ({
        timestamp: row[0],
        event: row[1],
        fullName: row[2],
        email: row[3],
        guestCount: row[4],
        dietary: row[5],
        additionalGuests: row[6],
        contactNumber: row[7],
        accessibility: row[8],
        foodAllergies: row[9]
      }))
    };
  } catch (error: any) {
    console.error("fetchRSVPs Error:", error);
    return { success: false, error: error.message };
  }
}
