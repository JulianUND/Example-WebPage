$(document).ready(function(){

    // Slaider
    // Validacion para saber que logica entra segun la pagina a la que se entre
    if (window.location.href.indexOf('index') > -1) {
    
    $(".galeria").bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        pager: true
      });

    }

    // Posts
    // Validacion para saber que logica entra segun la pagina a la que se entre
    if (window.location.href.indexOf('index') > -1) {
        
        var posts = [
            {
                title: 'Prueba titulo 1',
                date:'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del año" + moment().format(" YYYY"),
                content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi semper nunc ac massa scelerisque, tempor rutrum libero sagittis. Nam lacus lorem, faucibus id risus ac, eleifend dignissim odio. Nulla vestibulum, orci ac tempor egestas, nunc neque dapibus ante, et fermentum arcu justo quis dolor. Nunc sodales rutrum eros ut lobortis. Pellentesque ornare congue purus, sit amet tempus nunc hendrerit ut. Sed posuere sodales nisi, fringilla maximus orci sollicitudin at. Duis turpis enim, dictum id dapibus id, malesuada sed mi. Vivamus lorem dolor, finibus a lobortis et, hendrerit nec nisi. Sed sit amet volutpat leo, ut pharetra turpis. Quisque ultricies consectetur bibendum. Donec sit amet ligula pulvinar, molestie neque vel, sollicitudin urna.'
            },
            {
                title: 'Prueba titulo 2',
                date:'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del año" + moment().format(" YYYY"),
                content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi semper nunc ac massa scelerisque, tempor rutrum libero sagittis. Nam lacus lorem, faucibus id risus ac, eleifend dignissim odio. Nulla vestibulum, orci ac tempor egestas, nunc neque dapibus ante, et fermentum arcu justo quis dolor. Nunc sodales rutrum eros ut lobortis. Pellentesque ornare congue purus, sit amet tempus nunc hendrerit ut. Sed posuere sodales nisi, fringilla maximus orci sollicitudin at. Duis turpis enim, dictum id dapibus id, malesuada sed mi. Vivamus lorem dolor, finibus a lobortis et, hendrerit nec nisi. Sed sit amet volutpat leo, ut pharetra turpis. Quisque ultricies consectetur bibendum. Donec sit amet ligula pulvinar, molestie neque vel, sollicitudin urna.'
            },
            {
                title: 'Prueba titulo 3',
                date:'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del año" + moment().format(" YYYY"),
                content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi semper nunc ac massa scelerisque, tempor rutrum libero sagittis. Nam lacus lorem, faucibus id risus ac, eleifend dignissim odio. Nulla vestibulum, orci ac tempor egestas, nunc neque dapibus ante, et fermentum arcu justo quis dolor. Nunc sodales rutrum eros ut lobortis. Pellentesque ornare congue purus, sit amet tempus nunc hendrerit ut. Sed posuere sodales nisi, fringilla maximus orci sollicitudin at. Duis turpis enim, dictum id dapibus id, malesuada sed mi. Vivamus lorem dolor, finibus a lobortis et, hendrerit nec nisi. Sed sit amet volutpat leo, ut pharetra turpis. Quisque ultricies consectetur bibendum. Donec sit amet ligula pulvinar, molestie neque vel, sollicitudin urna.'
            },
            {
                title: 'Prueba titulo 4',
                date:'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del año" + moment().format(" YYYY"),
                content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi semper nunc ac massa scelerisque, tempor rutrum libero sagittis. Nam lacus lorem, faucibus id risus ac, eleifend dignissim odio. Nulla vestibulum, orci ac tempor egestas, nunc neque dapibus ante, et fermentum arcu justo quis dolor. Nunc sodales rutrum eros ut lobortis. Pellentesque ornare congue purus, sit amet tempus nunc hendrerit ut. Sed posuere sodales nisi, fringilla maximus orci sollicitudin at. Duis turpis enim, dictum id dapibus id, malesuada sed mi. Vivamus lorem dolor, finibus a lobortis et, hendrerit nec nisi. Sed sit amet volutpat leo, ut pharetra turpis. Quisque ultricies consectetur bibendum. Donec sit amet ligula pulvinar, molestie neque vel, sollicitudin urna.'
            },
            {
                title: 'Prueba titulo 5',
                date:'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del año" + moment().format(" YYYY"),
                content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi semper nunc ac massa scelerisque, tempor rutrum libero sagittis. Nam lacus lorem, faucibus id risus ac, eleifend dignissim odio. Nulla vestibulum, orci ac tempor egestas, nunc neque dapibus ante, et fermentum arcu justo quis dolor. Nunc sodales rutrum eros ut lobortis. Pellentesque ornare congue purus, sit amet tempus nunc hendrerit ut. Sed posuere sodales nisi, fringilla maximus orci sollicitudin at. Duis turpis enim, dictum id dapibus id, malesuada sed mi. Vivamus lorem dolor, finibus a lobortis et, hendrerit nec nisi. Sed sit amet volutpat leo, ut pharetra turpis. Quisque ultricies consectetur bibendum. Donec sit amet ligula pulvinar, molestie neque vel, sollicitudin urna.'
            },
        ];

        // Cargar datos del json al html 
        posts.forEach((item,index) => {
            var post = `
                <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>
                        ${item.content}
                    </p>
                    <a href="#" class="button-more">Leer mas</a>
                </article>
            `;

            $("#posts").append(post);

        });
    }
    // Selector de temas
    var theme = $("#theme");

    $("#to-green").click(function(){
        theme.attr("href","css/green.css");
    });

    $("#to-blue").click(function(){
        theme.attr("href","css/blue.css");
    });

    $("#to-red").click(function(){
        theme.attr("href","css/red.css");
    });

    // Scroll
    $(".subir").click(function(e){
        e.prevenDefault();

        $('html,body').animate({
            scrollTop: 0
        },500);

        return false;
    });

    // Login falso quemado
    $("#login form").submit(function(){
        var form_name = $("#form_name").val();
        // almacenar en el localStorage
        localStorage.setItem("form_name",form_name);
    });
    // para obtener lo que almacene en el local storage
    var form_name = localStorage.getItem("form_name");

    if (form_name != null && form_name !== 'undefined') {
        var about_parrafo = $("#about p");

        about_parrafo.html("<br><strong>Bienvenido, " + form_name + " - " + "</strong>");
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesion</a>");
        
        $("#login").hide(); 

        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });
    }

    // Acordeon
    if (window.location.href.indexOf('about') > -1) {
        $('#acordeon').accordion();
    }

    // Reloj
    if (window.location.href.indexOf('reloj') > -1) {
       // Esta funcion permite ejecutar en bucle cada segundo o cada cierto tiempo que yo le indique un trozo de instrucciones
       setInterval(function(){
            var reloj = moment().format("h:mm:ss");
            $("#reloj").html(reloj);
       },1000);
    }

    // Validacion del formulario utilizando el plugin de validacion
    if (window.location.href.indexOf('contact') > -1) {

        // Calendario para la fecha de nacimiento
        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        }); 

        $.validate({
            lang: 'es',
            errorMessagePosition:'top',
            scrollToTopOnError:true
        });
    }
});