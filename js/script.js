function menu() {
  let open = document.querySelector(".menu_open");
  let menu = document.getElementById("container_menu");
  open.addEventListener("click", () => {
    menu.style.display = "flex";
    menu.style.right = "0px";
    menu.style.animation = "move ease-in 400ms";
  });

  let close = document.querySelector(".close");

  close.addEventListener("click", () => {
    menu.style.display = "flex";
    menu.style.right = "-100%";
    menu.style.animation = "move ease-out 400ms";
  });

  let area_menu = document.querySelectorAll(".area_menu nav ul li a");
  if (window.innerWidth <= 1024) {
    area_menu.forEach((element) => {
      element.addEventListener("click", () => {
        menu.style.right = "-100%";
        menu.style.animation = "move ease-out 400ms";
      });
    });
  }

}
menu();

function faq() {

  const quest = document.querySelectorAll(".faq_quests");
  const aswer = document.querySelectorAll(".aswer");
  const img_icon = document.querySelectorAll('.area_img_faq img');

  for (let i = 0; i < quest.length; i++) {

      quest[i].addEventListener("click", () => {

          if (quest[i].classList.contains("close_faq")) {
              quest[i].classList.toggle("close_faq");
              aswer[i].classList.toggle("open");
              img_icon[i].src = 'img/+.svg';
          } else {
              quest[i].classList.add("close_faq");
              aswer[i].classList.add("open");

              img_icon[i].src = 'img/-.svg';
          }
      });
  }

}
faq();

const animations = document.querySelectorAll("[data-animation]");
const animationClass = "animate";

function animation_scroll() {
  const area_window = window.innerHeight * 0.21 * 4.2;

  animations.forEach((element) => {
    let posicaoAtual = element.getBoundingClientRect().top;

    if (area_window > posicaoAtual) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  });
}

if (animations.length) {
  window.addEventListener("scroll", animation_scroll);
}

const plano_anual = [
  "R$ 149,90",
  "R$ 99,00",
  "https://app.leevesistemas.com.br/#/inscricao?return=emailAqui",

  "R$ 279,90",
  "R$ 159,00",
  "https://app.leevesistemas.com.br/#/inscricao?return=emailAqui",

  "R$ 339,90",
  "R$ 249,90",
  "#",

  "R$ 669,90",
  "R$ 499,90",
  "#",
];

const plano_semestral = [
  "",
  "R$ 129,00",
  "https://app.leevesistemas.com.br/#/inscricao?return=emailAqui",

  "",
  "R$ 199,00",
  "https://app.leevesistemas.com.br/#/inscricao?return=emailAqui",

  "R$ 339,90",
  "R$ 309,90",
  "#",

  "R$ 669,90",
  "R$ 599,90",
  "#",
];

const plano_mensal = [
  "",
  "R$ 149,90",
  "#",

  "",
  "R$ 279,90",
  "#",

  "",
  "R$ 339,90",
  "#",

  "",
  "R$ 669,90",
  "#",
];

let preco_del = document.querySelectorAll(".preco_del del");
let preco = document.querySelectorAll(".preco_plano h2");
let link_btn = document.querySelectorAll(".area_btn_planos a");

const removeActive = () => {
  //Transformando o nodelist em array
  const btnActive = [...document.querySelectorAll(".plano_anual.selected")];
  //map para percorrer
  btnActive.map((el) => {
      el.classList.remove("selected");
  })

}

function planos() {

  let btns_planos = document.querySelectorAll(".plano_anual");

  btns_planos.forEach((element, key) => {

    element.addEventListener('click', () => {

      switch (key) {
        case 0:
          removeActive()
          element.classList.toggle("selected");
          preco_del.forEach((element, key) => {
            switch (key) {
              case 0:
                element.innerHTML = plano_anual[0];
                break;
              case 1:
                element.innerHTML = plano_anual[3];
                break;
              case 2:
                element.innerHTML = plano_anual[6];
                break;
              case 3:
                element.innerHTML = plano_anual[9];
                break;
            }
          });

          preco.forEach((element, key) => {
            switch (key) {
              case 0:
                element.innerHTML = plano_anual[1];
                break;
              case 1:
                element.innerHTML = plano_anual[4];
                break;
              case 2:
                element.innerHTML = plano_anual[7];
                break;
              case 3:
                element.innerHTML = plano_anual[10];
                break;
            }
          });

          link_btn.forEach((element, key) => {
            switch (key) {
              case 0:
                element.href = plano_anual[2];
                break;
              case 1:
                element.href = plano_anual[5];
                break;
              case 2:
                element.href = plano_anual[8];
                break;
              case 3:
                element.href = plano_anual[11];
                break;
            }
          });
        
          break;
        /*Semestral*/
        case 1:
          removeActive()
          element.classList.toggle("selected");
          preco_del.forEach((element, key) => {
            switch (key) {
              case 0:
                element.innerHTML = plano_semestral[0];
                break;
              case 1:
                element.innerHTML = plano_semestral[3];
                break;
              case 2:
                element.innerHTML = plano_semestral[6];
                break;
              case 3:
                element.innerHTML = plano_semestral[9];
                break;
            }
          });

          preco.forEach((element, key) => {
            switch (key) {
              case 0:
                element.innerHTML = plano_semestral[1];
                break;
              case 1:
                element.innerHTML = plano_semestral[4];
                break;
              case 2:
                element.innerHTML = plano_semestral[7];
                break;
              case 3:
                element.innerHTML = plano_semestral[10];
                break;
            }
          });

          link_btn.forEach((element, key) => {
            switch (key) {
              case 0:
                element.href = plano_semestral[2];
                break;
              case 1:
                element.href = plano_semestral[5];
                break;
              case 2:
                element.href = plano_semestral[8];
                break;
              case 3:
                element.href = plano_semestral[11];
                break;
            }
          });
      
          break;
        /*Mensal*/
        case 2:
          preco_del.forEach((element, key) => {
            switch (key) {
              case 0:
                element.innerHTML = plano_mensal[0];
                break;
              case 1:
                element.innerHTML = plano_mensal[3];
                break;
              case 2:
                element.innerHTML = plano_mensal[6];
                break;
              case 3:
                element.innerHTML = plano_mensal[9];
                break;
            }
          });

          preco.forEach((element, key) => {
            switch (key) {
              case 0:
                element.innerHTML = plano_mensal[1];
                break;
              case 1:
                element.innerHTML = plano_mensal[4];
                break;
              case 2:
                element.innerHTML = plano_mensal[7];
                break;
              case 3:
                element.innerHTML = plano_mensal[10];
                break;
            }
          });

          link_btn.forEach((element, key) => {
            switch (key) {
              case 0:
                element.href = plano_mensal[2];
                break;
              case 1:
                element.href = plano_mensal[5];
                break;
              case 2:
                element.href = plano_mensal[8];
                break;
              case 3:
                element.href = plano_mensal[11];
                break;
            }
          });

          break;

      }

    });

  });



}
planos();
/*
function colors() {

  const area_window = window.innerHeight * 0.21 * 2.1;

  let section = document.querySelectorAll(".container_compativel");
  let titles = document.querySelectorAll(".color-1 h2");
  let titles_b = document.querySelectorAll(".color-1 h2 b");
  let subtitle = document.querySelectorAll(".color-2 p");
  let bg_cards = document.querySelectorAll(".cards_bg");
  let color_texts = document.querySelectorAll(".color-texts");
  let svg_icons = document.querySelectorAll(".cards_section_int svg path");

  section.forEach( (element) => {

    let posicaoAtual = element.getBoundingClientRect().top;

    if( area_window > posicaoAtual ) {
        document.querySelector("body").style.background = "#02A6DC";

        titles.forEach( (element) => {
          element.style.color = "var(--text-color-3)";
        });
        titles_b.forEach( (element) => {
          element.style.color = "var(--text-color-1)";
        });
        subtitle.forEach( (element) => {
          element.style.color = "var(--text-color-3)";
        });
        bg_cards.forEach( (element) => {
          element.style.background = "var(--bg-color-1)";
        });
        color_texts.forEach( (element) => {
          element.style.color = "var(--text-color-1)";
        });
        svg_icons.forEach( (element) => {
          element.style.fill = "var(--text-color-1)";
        });

    }else {
      document.querySelector("body").style.background = "#fff";
      titles.forEach( (element) => {
          element.style.color = "var(--text-color-1)";
      });
      titles_b.forEach( (element) => {
        element.style.color = "var(--text-color-2)";
      });
      subtitle.forEach( (element) => {
        element.style.color = "var(--text-color-1)";
      });
      bg_cards.forEach( (element) => {
        element.style.background = "var(--bg-color-2)";
      });
      color_texts.forEach( (element) => {
        element.style.color = "var(--text-color-3)";
      });
      svg_icons.forEach( (element) => {
        element.style.fill = "var(--text-color-3)";
      });
    }

  });

}*/
//window.addEventListener("scroll", colors);