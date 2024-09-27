export function extractTime(dateString: string) {
  const date = new Date(dateString);

  // Format time to AM/PM
  const hours = date.getHours();
  const minutes = padZero(date.getMinutes());
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = padZero(hours % 12 || 12); // Convert to 12-hour format

  // Extract day and month as numbers
  const day = padZero(date.getDate()); // Get day and pad with zero if needed
  const month = padZero(date.getMonth() + 1); // Months are 0-indexed, so add 1

  return `${day}/${month}, ${formattedHours}:${minutes} ${ampm}`;
}

// Helper function to pad single-digit numbers with a leading zero
function padZero(number: number) {
  return number.toString().padStart(2, "0");
}
