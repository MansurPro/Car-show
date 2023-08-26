export async function fetchCars() {
  const headers = {
		'X-RapidAPI-Key': '98ce4c3391msha2357b3a419e216p187152jsnd0d5c4c3ef34',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

  const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
    headers: headers,
  });

  const result = await response.json();

  return result;
}