export default function getChange(apiKEY: string, from: string, to: string) {
  return fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=${apiKEY}&currencies=${to}&base_currency=${from}`, {
    method: 'GET'
  })
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error('Request failed!');
      }
    })
    .then((json) => json);
}