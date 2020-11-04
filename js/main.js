const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const modalAuth=document.querySelector(".modal-auth")
const buttonAuth=document.querySelector(".button-auth")
const buttonCloseAuth=document.querySelector(".close-auth")
const logInForm=document.querySelector("#logInForm")
const buttonOut=document.querySelector(".button-out")
const userName=document.querySelector(".user-name")
const inputLogin=document.querySelector("#login");
const restaurants=document.querySelector(".cards-restaurants");
const container=document.querySelector(".container")
const containerPromo=document.querySelector(".container-promo")
const restaurantsSection=document.querySelector(".restaurants")
const menu=document.querySelector(".menu")
const logo=document.querySelector('.logo')
const cardsMenu=document.querySelector(".cards-menu")


let login=localStorage.getItem("login");

































const getData= async function(url)
{
  const responce=await fetch(url)
  console.log(responce.json())


};
getData('./db/partners.json')




























function toggleModal() {
  modal.classList.toggle("is-open");
}
cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);


buttonAuth.addEventListener("click",openModalAuth)
buttonOut.addEventListener("click", exitAccount)
buttonCloseAuth.onclick=function()
{
  modalAuth.classList.toggle("is-open")
  logInForm.reset();
};


function openModalAuth()
{
  modalAuth.classList.toggle("is-open")
}


function noAutho()
{
  function toComeItAuth(event)
  {
    event.preventDefault();
    if(inputLogin.value)
    {
      login=inputLogin.value;
      localStorage.setItem("login",login)
      modalAuth.classList.toggle("is-open")
    
      userName.innerHTML=login;
      userName.style.display="inline"
      buttonAuth.style.display="none"
      buttonOut.style.display="block"
    }
    else 
    {
      alert("введтие логин")
    }

    proverka()
  }
  logInForm.addEventListener("submit",toComeItAuth)
  
}


function exitAccount(event)
{
  event.preventDefault();
  localStorage.removeItem("login")
  buttonOut.style.display="none"
  buttonAuth.style.display="block"
  userName.innerHTML="";
  userName.style.display="none";
  logInForm.reset();
 
 
}




function autho()
{
 
  userName.innerHTML=login;
    userName.style.display="inline"
    buttonAuth.style.display="none"
    buttonOut.style.display="block"
  
}

function proverka() {
  if(login)
  {
    autho();
  }
  else 
  noAutho();
}
proverka()

createElemtCard()
createElemtCard()
createElemtCard()
createElemtCard()

function createElemtCard()
{
  const cart=`
  <a class="card card-restaurant">
						<img src="img/pizza-plus/preview.jpg" alt="image" class="card-image"/>
						<div class="card-text">
							<div class="card-heading">
								<h3 class="card-title">Пицца плюс</h3>
								<span class="card-tag tag">50 мин</span>
							</div>
							<div class="card-info">
								<div class="rating">
									4.5
								</div>
								<div class="price">От 900 ₽</div>
								<div class="category">Пицца</div>
							</div>
						</div>
					</a>
  `
  restaurants.insertAdjacentHTML("beforeEnd",cart);
  
}

restaurants.addEventListener("click",openCart)

createCardGood()
createCardGood()
function createCardGood()
{
  const card=document.createElement("div");
  card.classList.add("card");

  card.insertAdjacentHTML("beforeEnd",`
  
						<img src="img/pizza-plus/pizza-vesuvius.jpg" alt="image" class="card-image"/>
						<div class="card-text">
							<div class="card-heading">
								<h3 class="card-title card-title-reg">Пицца Везувий</h3>
							</div>
							<div class="card-info">
								<div class="ingredients">Соус томатный, сыр «Моцарелла», ветчина, пепперони, перец
									«Халапенье», соус «Тобаско», томаты.
								</div>
							</div>
							<div class="card-buttons">
								<button class="button button-primary button-add-cart">
									<span class="button-card-text">В корзину</span>
									<span class="button-cart-svg"></span>
								</button>
								<strong class="card-price-bold">545 ₽</strong>
							</div>
						</div>
						
  `);
  cardsMenu.insertAdjacentElement('beforeend',card)
}








function openCart(event)
{
 const proverkaLogin=localStorage.getItem("login");
  if(proverkaLogin)
  {
    const target= event.target;

    const restaurant =target.closest(".card-restaurant")
    
    if(restaurant)
    {
      containerPromo.classList.toggle("hide")
      restaurantsSection.classList.toggle("hide")
      menu.classList.toggle("hide")
    }
  }
  else{
    
    openModalAuth()
    
  }
  
}


logo.addEventListener("click",closecart)


function closecart()
{
  
    containerPromo.classList.remove("hide")
    restaurantsSection.classList.remove("hide")
    menu.classList.add("hide")
  
  
}

