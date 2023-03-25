const button = document.getElementById("convert-button");
const select = document.getElementById("currencySelect");
const dolar = 5.25;
const euro = 5.66;
const convertValue = () => {
  const inputReal = document.getElementById("input-real").value;
  const realValue = document.getElementById("real-value");
  const currencyValue = document.getElementById("currency-value");
  //realValue.innerHTML = inputReal;
  realValue.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputReal);
  //currencyValue.innerHTML = inputReal / dolar;
  if (select.value === "US$ Dólar Americano") {
    currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputReal / dolar);
  }
  if (select.value === "€ Euro") {
    currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputReal / euro);
  }
};
changeCurrency = () => {
  const currencyName = document.getElementById("currency-name");
  const currencyImg = document.getElementById("currency-img");

  if (select.value === "US$ Dólar Americano") {
    currencyName.innerHTML = "Dólar";
    currencyImg.src = "./assets/eua.svg";
  }

  if (select.value === "€ Euro") {
    currencyName.innerHTML = "Euro";
    currencyImg.src = "./assets/euro.svg";
  }
  convertValue();
};
button.addEventListener("click", convertValue);
select.addEventListener("change", changeCurrency);
