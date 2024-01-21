async function output(value, currency) {
  const url =
    "https://api.currencyapi.com/v3/latest?apikey=cur_live_0LMHJvMXiLsFEsqsG5a5lkzPktwgDHo3yxGKXJ4S&base_currency=" +
    currency;

  let myStr = ""
  let result = await fetch(url);
  let data = await result.json();
  document.querySelector(".result").style.display = "block";


for (let key of Object.keys(data["data"])) {
    myStr += ` <tr>
                    <td>${key}</td>
                    <td>${data["data"][key]["code"]}</td>
                    <td>${Math.round(data["data"][key]["value"] * value)}</td>
                </tr> 
            `;
            const tableBody = document.querySelector("tbody");
            tableBody.innerHTML = myStr;
}

}

const btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  const value = parseInt(
    document.querySelector("input[name='quantity']").value
  );
  const currency = document.querySelector("select[name='currency']").value;
  output(value,currency);
});


