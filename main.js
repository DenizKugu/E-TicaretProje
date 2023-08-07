window.onload = async function () {
  let OriginalData = await fetch("data.json");
  let TransferedData = await OriginalData.json();

  console.log(TransferedData);

  //Bootstrap
  let card = document.querySelector("#mainContent");
  let home = document.querySelector("#home");

  //Navigator Bar
  let family = document.querySelector("#aile");
  let strategy = document.querySelector("#strateji");
  let party = document.querySelector("#parti");
  let coop = document.querySelector("#co-op");

  //Card Yapısı
  const createUserElement = (item) => {
    //Card Yapısındaki Elementler
    let itemImg = document.createElement("img");
    let itemName = document.createElement("h3");
    let itemDesc = document.createElement("p");
    let itemPrice = document.createElement("h5");
    let buyBtn = document.createElement("button");
    let itemProp = document.createElement("span");
    let div = document.createElement("div");

    //Elementlerin İçerikleri
    itemImg.src = item.image;
    itemName.innerHTML = item.title;
    itemDesc.innerHTML = item.description;
    itemPrice.innerHTML = item.price;
    itemProp.innerHTML = item.prop;
    buyBtn.innerHTML = "Sepete Ekle";

    //Append
    div.appendChild(itemImg);
    div.appendChild(itemName);
    div.appendChild(itemDesc);
    div.appendChild(itemPrice);
    itemPrice.appendChild(buyBtn);
    div.appendChild(itemProp);
    div.setAttribute("class", "main-items");
    buyBtn.setAttribute("id", item.id);

    card.appendChild(div);

    //Sepete Ekleme ve Çıkarma
    buyBtn.addEventListener("click", () => {
      let img = document.createElement("img");
      let h1 = document.createElement("h1");
      let p = document.createElement("p");
      let dltBtn = document.createElement("button");

      img.src = item.image;
      h1.innerHTML = item.title;
      p.innerHTML = item.price;
      dltBtn.innerHTML = "Sil";

      let div = document.createElement("div");
      div.appendChild(img);
      div.appendChild(h1);
      div.appendChild(p);
      div.appendChild(dltBtn);

      cart.appendChild(div);

      dltBtn.addEventListener("click", () => {
        div.remove();
      });
    });
  };

  const renderUserElements = (dataArray) => {
    card.innerHTML = "";
    dataArray.forEach((item, index) => {
      createUserElement(item);
    });
  };

  //Verileri sayfaya çağırma
  renderUserElements(TransferedData);

  //Anasayfaya Basınca Bütün Oyunları Getir
  home.addEventListener("click", () => {
    renderUserElements(TransferedData);
  });

  //Sadece Aile Oyunları
  family.addEventListener("click", () => {
    const familyGames = TransferedData.filter(
      (item) => item.category === "family"
    );
    renderUserElements(familyGames);
  });

  //Sadece Strateji Oyunları
  strategy.addEventListener("click", () => {
    const strGames = TransferedData.filter(
      (item) => item.category === "strategy"
    );
    renderUserElements(strGames);
  });

  //Sadece Parti Oyunları
  party.addEventListener("click", () => {
    const partyGames = TransferedData.filter(
      (item) => item.category === "party"
    );
    renderUserElements(partyGames);
  });

  //Sadece Co-op Oyunlar
  coop.addEventListener("click", () => {
    const coopGames = TransferedData.filter(
      (item) => item.category === "cooperative"
    );
    renderUserElements(coopGames);
  });
  // Sepet Açma/Kapama
  let cartBtn = document.querySelector("#cartBtn");
  let cart = document.querySelector(".cart");
  cartBtn.addEventListener("click", () => {
    if (cart.style.display === "block") {
      cart.style.display = "none";
    } else {
      cart.style.display = "block";
    }
  });
};
