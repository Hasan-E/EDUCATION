console.log("******TRAVERSING DOM*****");

//*===========================================
//*            TRAVERSING DOM
//*===========================================
//? Bir HTML elementi uzerinden baska elementleri secmeye
//? DOM traversing denilir. Ozellikle dinamik olarak degisen
//? (silme veya yeni ekleme gibi) HTML elemanlarinin secerken
//? gerekli olabilir.

//? Secme islemi 3 yonlu yapilabilir.
//? - Yukari yonde (Parent)
//? - Asagi yonde (children)
//? -  yoYataynde (Sibling)

//* 1- Yukari Yonde traverse
//*----------------------------------------------
//! parentElement, parentNode

const h2 = document.getElementById("add-new-item");
console.log(h2);
console.log(h2.parentNode); //documente kadar çıkar
console.log(h2.parentElement); //html ye kadar çıkabilir

//? bulunduğumuz yer

const htmlLi = document.querySelector("ul li:nth-child(1)");
console.log(htmlLi);

console.log(htmlLi.parentNode.parentNode.parentNode); //? section.item-list

console.log(htmlLi.closest(".item-list"));
console.log(htmlLi.closest("#new-sec"));

console.log(htmlLi.closest("section>section"));

console.log(htmlLi.closest("main").querySelector("section.add-item"));

//* 2- Asagi Yonde traverse
//*----------------------------------------------
//? Children, firstElementChild, lastElementChild

const section = document.querySelector("section.add-item");
console.log(section);

console.log(section.firstElementChild); //h2
console.log(section.firstChild); // text yazı içeren html elementlerinin yazısına erişir

console.log(section.lastElementChild);

console.log(section.children);

//* 3- Yatay Yonde traverse
//*----------------------------------------------
//! nextElementSibling ,previousElementSibling

console.log(htmlLi.nextElementSibling.innerText);
console.log(htmlLi.nextElementSibling.nextElementSibling.innerText);
console.log(
  htmlLi.nextElementSibling.nextElementSibling.nextElementSibling.innerText
);
console.log(
  htmlLi.nextElementSibling.nextElementSibling.nextElementSibling
    .previousElementSibling.innerText
);
