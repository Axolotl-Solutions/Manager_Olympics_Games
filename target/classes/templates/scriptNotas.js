var notas = document.getElementById("notas");
Sortable.create(notas,{
  onEnd: () => {
    calcularPosicionNota();
  }
});

function agregarNota(){
  var titulo = document.getElementById("titulo");
  var contenido = document.getElementById("contenido");
  var s =
    "<div class='row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5' id='notas'>"+
      "<div class='col-md-4'>"+
        "<div class='card card-cover h-100 overflow-hidden text-white bg-dark rounded-20 shadow-lg'>"+
          "<div class='card-header' style='z-index:3;'>"+
            "<ul class='nav navbar-dark bg-dark shadow'>"+
              "<li class='nav-item'>"+
                "<a class='nav-link active text-white' aria-current='true' >Titulo</a>"+
              "</li>"+
              "<li class='nav-item'>"+
                "<a class='nav-link text-white' >Texto</a>"+
              "</li>"+
              "<li class='nav-item'>"+
                "<a class='nav-link text-white'  tabindex='-1' aria-disabled='true'>Editar</a>"+
              "</li>"+
            "</ul>"+
          "</div>"+
          "<div class='d-flex flex-column h-100 overflow-auto p-5 pb-1 pt-1 text-white text-shadow-1' name='card' style='position:absolute; width:100%; opacity:1; z-index:1;'>"+
            "<h2 class='pt-5 mt-5 mb-5 display-6 lh-1 fw-bold'>Titulo de la nota</h2>"+
            "<p>lololololololololololololololololollo</p>"+
            "<div class='ul'>"+
              "<ul class='d-flex list-unstyled mt-auto'>"+
                "<li class='me-auto'>"+
                  "<i class='bi bi-arrows-move' style='color:white;'></i>"+
                "</li>"+
                "<li class='d-flex align-items-center me-4'>"+
                  "<input style='border:none;' type='color' class='form-control form-control-color' id='exampleColorInput' value='#6aec9c' title='elige un color'>"+
                "</li>"+
                "<li class='d-flex align-items-center'>"+
                  "<button type='button' class='btn btn-outline-danger'>"+
                    "<i class='bi bi-trash-fill'></i>"+
                  "</button>"+
                "</li>"+
              "</ul>"+
            "</div>"+
          "</div>"+
          "<div class='d-flex flex-column h-100 overflow-auto p-5 pb-1 pt-1 text-white text-shadow-1' name='card' style='position:absolute; width:100%;opacity:0; z-index:0'>"+
            "<p class='mt-5' >Hola Soy un pollito Soy un pollitoSoy un pollitoSoy un pollitoSoy un pollitoSoy un pollitoSoy un pollitoSoy un pollitoSoy un pollitoSoy un pollito"+
            "Soy un pollitoSoy un pollitoSoy un pollitoSoy un pollito</p>"+
            "<p class='mt-5' >Hola Soy un pollito Soy un pollitoSoy un pollitoSoy un pollitoSoy un pollitoSoy un pollitoSoy un pollitoSoy un pollitoSoy un pollitoSoy un pollito"+
            "Soy un pollitoSoy un pollitoSoy un pollitoSoy un pollito</p>"+
            "<div class='ul'>"+
              "<ul class='d-flex list-unstyled mt-auto'>"+
                "<li class='me-auto'>"+
                "  <i class='bi bi-arrows-move' style='color:white;'></i>"+
                "</li>"+
                "<li class='d-flex align-items-center me-4'>"+
                  "<input style='border:none;' type='color' class='form-control form-control-color' id='exampleColorInput' value='#6aec9c' title='elige un color'>"+
                "</li>"+
                "<li class='d-flex align-items-center'>"+
                  "<button type='button' class='btn btn-outline-danger'>"+
                    "<i class='bi bi-trash-fill'></i>"+
                  "</button>"+
                "</li>"+
              "</ul>"+
            "</div>"+
          "</div>"+
          "<div class='d-flex flex-column h-100 overflow-auto p-5 pb-1 pt-1 text-white text-shadow-1' name='card' style='width:100%; opacity:0; '>"+
            "<h2 class='pt-5 mt-5 mb-5 display-6 lh-1 fw-bold'>Titulo de la nota 2</h2>"+
            "<div class='ul'>"+
              "<ul class='d-flex list-unstyled mt-auto'>"+
                "<li class='me-auto'>"+
                  "<i class='bi bi-arrows-move' style='color:white;'></i>"+
                "</li>"+
              "  <li class='d-flex align-items-center me-4'>"+
                  "<input style='border:none;' type='color' class='form-control form-control-color' id='exampleColorInput' value='#6aec9c' title='elige un color'>"+
                "</li>"+
                "<li class='d-flex align-items-center'>"+
                  "<button type='button' class='btn btn-outline-danger'>"+
                    "<i class='bi bi-trash-fill'></i>"+
                  "</button>"+
                "</li>"+
              "</ul>"+
          "  </div>"+
          "</div>"+
        "</div>";
        console.log(s);

}

function calcularPosicionNota(){
  var nav = document.getElementsByClassName("nav");
  var card = document.getElementsByName("card");
  let contador=0;
  for(let i=0; i< nav.length;i++){
      let ch = nav[i].children;
      for(let j=0;j<ch.length;j++){
          var old_element = ch[j];
          var new_element = old_element.cloneNode(true);
          old_element.parentNode.replaceChild(new_element, old_element);
          ch[j].addEventListener(
            "click", () => {
             for(let h=0,k=i*3;h<3;h++,k++){
                 if(h!=j){
                     ch[h].classList.remove("border-bottom");
                     //card[k].style.cssText+="z-index:-1; opacity:0;"
                     card[k].style.zIndex = "1";
                     card[k].style.opacity = "0";
                 }else{
                     ch[h].classList.add("border-bottom");
                     //card[k].style.cssText+="z-index:2; opacity:1;";
                     card[k].style.zIndex = "2";
                     card[k].style.opacity = "1";
                 }
               }
            }
          );
        contador++;
      }
  }
}
calcularPosicionNota();
