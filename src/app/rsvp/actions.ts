"use server";

const scriptUrl = process.env.GOOGLE_SCRIPT_URL || "";

export async function validatePassword(password: string) {
  const guestPass = process.env.GUEST_PASSWORD || "nehakarthik2026";
  const adminPass = process.env.ADMIN_PASSWORD || "nk2026@meragi";
  
  if (password === guestPass || password === adminPass) {
    return { success: true, role: password === adminPass ? 'admin' : 'guest' };
  }
  return { success: false };
}

export async function submitRSVP(payload: any) {
  try {
    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      redirect: 'follow'
    });

    if (!response.ok) {
      const text = await response.text();
      console.error(`Google Script Error (${response.status}):`, text);
      return { success: false, error: `Server returned ${response.status}` };
    }

    return { success: true };
  } catch (error: any) {
    console.error("Server Action RSVP Error:", error);
    return { success: false, error: error.message };
  }
}

export async function checkInvitation(identifier: string) {
  try {
    const response = await fetch(`${scriptUrl}?q=${encodeURIComponent(identifier)}`, {
      method: "GET",
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
      },
      cache: 'no-store',
      redirect: 'follow'
    });

    if (!response.ok) {
      console.error("Google Script FETCH Error:", response.status);
      throw new Error(`Google Script Error: ${response.status}`);
    }

    const data = await response.json();
    console.log("Invitation Lookup Result for", identifier, ":", data);
    return { success: true, ...data };
  } catch (error: any) {
    console.error("checkInvitation Error:", error);
    return { success: false, error: error.message };
  }
}

export async function checkDuplicateRSVP(email: string) {
  try {
    const response = await fetch(scriptUrl, {
      method: "GET",
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
      },
      cache: 'no-store',
      redirect: 'follow'
    });

    if (!response.ok) {
      throw new Error(`Google Script Error: ${response.status}`);
    }

    const data = await response.json();
    
    // Each row: [Date, Event, Full Name, Email, Guest Count]
    // Email is at index 3
    const exists = data.some((row: any) => 
      row[3] && row[3].toString().toLowerCase().trim() === email.toLowerCase().trim()
    );

    return { success: true, exists };
  } catch (error: any) {
    console.error("checkDuplicateRSVP Error:", error);
    return { success: false, error: error.message };
  }
}
