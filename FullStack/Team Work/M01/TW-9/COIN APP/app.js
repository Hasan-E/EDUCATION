//!   FORM ELEMANLARININ SEÇİMİ
const input = document.querySelector("input");
const btn = document.querySelector("button");
//!   VERİ YAZILACAK LİSTEYİ SEÇME
const liste = document.querySelector("ul");
//!   VERİ ÇEKME İŞLEMİ
let veri = [];

const veriCekme = async (input) => {
  const API_KEY = `coinranking659405703a53f65d1e820cb2e08f5138e3d4bb879cac7da0`;
  const url = `https://api.coinranking.com/v2/coins?search=${input}`;
  const response = await fetch(url, {
    headers: {
      "x-access-token": API_KEY,
    },
  });
  const jsonVeri = await response.json();
  veri = jsonVeri.data.coins;
  //   console.log(veri);
};

//!   EKRANA YAZDIRMA FONKSİYONU
const printScreen = () => {
  //! BULUNAMADI UYARISI
  if (searchInput.length === 0) {
    Swal.fire({
      icon: "warning",
      title: "Coin not FOUND!",
    });
    return;
  }
  //! ZATEN VAR UYARISI
  const olanKart = Array.from(liste.children).find((card) => {
    const cardName = card.querySelector("h3").textContent.toLowerCase();
    return cardName === searchInput[0].name.toLowerCase();
  });

  if (olanKart) {
    Swal.fire({
      icon: "warning",
      title: `${searchInput[0].name} is already EXIST!😉`,
    });
    return;
  }
  //!   INPUT BOS UYARISI
  if (input.value === "") {
    Swal.fire({
      position: "top",
      icon: "warning",
      title: "Iput is EMPTY!",
      showConfirmButton: true,
      timer: 1500,
    });
    return;
  }
  //====   KART DİVİ
  const card = document.createElement("div");
  card.classList.add(
    "card",
    "p-3",
    "mb-4",
    "shadow-lg",
    "col-lg-3",
    "col-md-6",
    "col-12",
    "position-relative",
    "g-4",
    "opacity-75"
  );

  //====   KAPATMA İKONU
  const closeBtn = document.createElement("i");
  closeBtn.classList.add(
    "fas",
    "fa-times",
    "text-danger",
    "close",
    "position-absolute",
    "top-0",
    "end-0",
    "p-2"
  );
  closeBtn.addEventListener("click", () => card.remove());
  card.appendChild(closeBtn);

  //====   COİN ADI VE SYMBOL
  const nameContainer = document.createElement("div");
  nameContainer.classList.add("position-relative", "w-100");
  // Coin Name
  const name = document.createElement("h3");
  name.classList.add(
    "mt-5",
    "ml-4",
    "text-secondary",
    "text-capitalize",
    "fs-3",
    "fw-bold"
  );
  name.textContent = searchInput[0].name;
  // Coin Symbol
  const symbol = document.createElement("sup");
  symbol.classList.add(
    "position-absolute",
    "top-0",
    "end-0",
    "fs-6",
    "text-center",
    "me-2",
    "bg-warning",
    "border",
    "rounded-4",
    "p-2",
    "w-50",
    "text-white"
  );
  symbol.textContent = searchInput[0].symbol;

  nameContainer.appendChild(name);
  nameContainer.appendChild(symbol);

  // === GERİ KALANLAR İÇİN DİV
  const imgDiv = document.createElement("div");
  imgDiv.classList.add("text-center");

  // ===== DEĞERİ
  const price = document.createElement("h1");
  price.textContent = `$ ${parseFloat(searchInput[0].price).toFixed(4)}`;
  price.classList.add("fw-semibold");
  imgDiv.appendChild(price);
  // =====  İCONU
  const icon = document.createElement("img");
  icon.src = searchInput[0].iconUrl;
  icon.style.maxWidth = "250px";
  icon.style.maxHeight = "250px";
  imgDiv.appendChild(icon);
  // =====  TRENDİ
  const trend = document.createElement("i");
  trend.textContent = searchInput[0].change;
  trend.classList.add(
    "fas",
    "fa-chart-line",
    "d-block",
    "mt-4",
    "mb-4",
    "position-absolute",
    "bottom-0",
    "fw-semibold"
  );
  imgDiv.appendChild(trend);

  card.appendChild(nameContainer);
  card.appendChild(imgDiv);
  liste.appendChild(card);

  if (trend.textContent < 0) {
    trend.classList.add("text-danger");
  } else if (trend.textContent >= 0) {
    trend.classList.add("text-success");
  }
};

//!   BUTTONA BASILDIĞINDA İNPUTTAN FİLTRELENEN DEĞER EKRANA BASILACAK
let searchInput = [];
btn.onclick = async (e) => {
  e.preventDefault();
  await veriCekme(input.value);
  searchInput = veri.filter(
    (b) =>
      b.name.toLowerCase().includes(input.value.toLowerCase()) ||
      b.symbol.toLowerCase().includes(input.value.toLowerCase())
  );
  printScreen();
  console.log(searchInput[0]);
  input.value = "";
};
