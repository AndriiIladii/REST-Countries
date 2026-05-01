const BASE_URL = "https://restcountries.com/v3.1";

export async function getAllCountries() {
  try {
    const response = await fetch(
      `${BASE_URL}/all?fields=name,flags,population,region,capital`,
    );
    if (!response.ok) throw new Error("Something went wrong!");
    return await response.json();
  } catch {
    console.error("Error!");
  }
}

export async function getCountryByName(name: string) {
  try {
    const response = await fetch(`${BASE_URL}/name/${name}`);
    if (!response.ok) throw new Error("Something went wrong!");
    return await response.json();
  } catch {}
}

export async function getCountriesByBorderCodes(codesString: string) {
  try {
    const response = await fetch(`${BASE_URL}/alpha?codes=${codesString}`);
    if (!response.ok) throw new Error("Something went wrong!");
    return await response.json();
  } catch {}
}
