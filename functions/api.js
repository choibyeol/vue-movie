const API_KEY = process.env.VUE_APP_API_KEY;

export const request = async (url) => {
  try {
    const res = await fetch(`https://www.omdbapi.com?apikey=${API_KEY}${url}`);

    if (!res.ok) {
      throw new Error("API Call Fail");
    }

    return await res.json();
  } catch (e) {
    alert(e.message);
  }
};
