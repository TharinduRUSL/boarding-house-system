const API_BASE_URL = "http://localhost:8080/api";

export async function getAllBoardings() {
  const response = await fetch(`${API_BASE_URL}/boardings`);
  return response.json();
}

export async function createBoarding(boardingData) {
  const response = await fetch(`${API_BASE_URL}/boardings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(boardingData),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Backend error response:", errorText);
    throw new Error(errorText);
  }

  return response.json();
}

export async function searchBoardingsByLocation(location) {
  const response = await fetch(
    `${API_BASE_URL}/boardings/search/location?location=${location}`
  );
  return response.json();
}

export async function filterBoardingsByGender(genderType) {
  const response = await fetch(
    `${API_BASE_URL}/boardings/filter/gender?genderType=${genderType}`
  );
  return response.json();
}

export async function filterBoardingsByPrice(price) {
  const response = await fetch(
    `${API_BASE_URL}/boardings/filter/price?price=${price}`
  );
  return response.json();
}