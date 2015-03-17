// Codigo js para página documental interactivo
// @codekit-prepend "config-min.js"
// @codekit-prepend "librerias/queryloader2.min.js"
// @codekit-prepend "librerias/velocity.min.js"
// @codekit-prepend "librerias/audio5.js"

var ancho_pag = document.body.offsetWidth;
var audios = [];
var btn_menu = document.querySelector(".js-btn-menu");
var contenedor = document.querySelector("#contenedor");
var diap_visible;
var diapo_visible = 'home';
var diapositivas = contenedor.children;
var el_menu = document.querySelector(".js-navegacion");
var menu = document.querySelector(".js-menu");
var nums_diapositivas = [];
var secciones = document.querySelectorAll(".js-seccion");
var tOut = false;
var milSec = 500;
var audioHome;
var btns_reproductor = document.querySelectorAll(".js-reproducir_home");
var btns_volumen = document.querySelectorAll(".js-volumen_home");
var estado_home;
var volumen_home;

var playPause = function () {
	this[this.playing ? 'pause' : 'play']();
};

// Generales  -->

var index_en_array = function(el_array, objetivo)
{
	for (var i = 0, len = el_array.length; i < len; i++)
	{
		if (el_array[i].getAttribute("data-destino") === objetivo)
		{
			return i;
		}
	}
	return null;
};

function btns_play_home (estado_home)
{
	var rep_flip = document.querySelectorAll(".js-flip-play");

	if (estado_home === "play" )
	{
		audioHome.play();
		for(var i=0,j=rep_flip.length;i<j;i++)
		{
			rep_flip[i].classList.remove("cambio");
		}
	}
	else if (estado_home === "pausa" )
	{
		audioHome.pause();
		for(var ii=0,jj=rep_flip.length;ii<jj;ii++)
		{
			rep_flip[ii].classList.add("cambio");
		}
	}
}

function btns_vol_home ()
{
	var vol_flip = document.querySelectorAll(".js-flip-volumen");
	var vol_texto = document.querySelectorAll(".js-text-volumen");

	if (volumen_home === "silencio" )
	{
		btns_volumen[0].setAttribute("data-volumen","silencio");
		for(var m=0,n=vol_texto.length;m<n;m++)
		{
			vol_texto[m].textContent = "Volumen";
		}
		for(var k=0,l=vol_flip.length;k<l;k++)
		{
			vol_flip[k].classList.add("cambio");
		}
		audioHome.volume(0);
	}
	else if (volumen_home === "suena" )
	{
		btns_volumen[0].setAttribute("data-volumen","suena");
		for(var o=0,p=vol_texto.length;o<p;o++)
		{
			vol_texto[o].textContent = "Silencio";
		}
		for(var kk=0,ll=vol_flip.length;kk<ll;kk++)
		{
			vol_flip[kk].classList.remove("cambio");
		}
		audioHome.volume(1);
	}
}

function compartir_redes()
{
	var twitter_popup = document.querySelectorAll(".js-twitter_popup");
	var gplus_popup = document.querySelectorAll(".js-gplus_popup");
	var fb_popup = document.querySelectorAll(".js-fb_popup");
	Array.prototype.forEach.call(twitter_popup, function(btn){
		btn.onclick = function ()
		{
			var width  = 575,
			height = 400,
			left   = (window.innerWidth - width)  / 2,
			top    = (window.innerHeight - height) / 2,
			url    = this.href,
			opts   = 'status=1' +
				',width='  + width  +
				',height=' + height +
				',top='    + top    +
				',left='   + left;
			window.open(url, 'twitter', opts);

			return false;
		};
	});
	Array.prototype.forEach.call(gplus_popup, function(btn){
		btn.onclick = function ()
		{
			var width  = 575,
			height = 400,
			left   = (window.innerWidth  - width)  / 2,
			top    = (window.innerHeight - height) / 2,
			url    = this.href,
			opts   = 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,' +
				',width='  + width  +
				',height=' + height +
				',top='    + top    +
				',left='   + left;
			window.open(url,'', opts);
			return false;
		};
	});
	Array.prototype.forEach.call(fb_popup, function(btn){
		btn.onclick = function ()
		{
			var width  = 575,
			height = 400,
			left   = (window.innerWidth  - width)  / 2,
			top    = (window.innerHeight - height) / 2,
			url    = this.href,
			opts   = 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,' +
				',width='  + width  +
				',height=' + height +
				',top='    + top    +
				',left='   + left;
			window.open(url,'', opts);
			return false;
		};
	});
}

function initAudio (archivo, reproducir, estado, volumen, rep_flip, rango, btn_volumen, vol_flip, vol_texto)
{
	var audio5js = new Audio5js({
		ready: function () {
			var el_archivo = '../assets/audios/'+archivo;
			this.load(el_archivo);
			var duracion;

			// Progreso
			this.on('timeupdate', function (position, duration) {
				// Duracion Total

				duracion = parseInt(duration);

				// Posicion
				var posicion = position.split(":");
				var segundo =  parseInt(posicion[0]*60)+parseInt(posicion[1]);
				// Porcentaje
				var porcentaje = parseInt(segundo) * 100/parseInt(duracion) ;
				porcentaje = Number(porcentaje).toFixed(1);
		      // Mover el rango
				rango.value = porcentaje;
			}, this);

			// Loop
			this.on('ended', function () {
				audio5js.playPause();
			}, this);
			
			//this.play();

			reproducir.onclick = function() {
				rep_flip.classList.toggle("cambio");
				estado = reproducir.getAttribute("data-estado");

				if (estado === "pausa" )
				{
					reproducir.setAttribute("data-estado","play");
				}
				else if (estado === "play" )
				{
					reproducir.setAttribute("data-estado","pausa");
				}

				audio5js.playPause();
			};

			btn_volumen.onclick = function() {
				vol_flip.classList.toggle("cambio");
				volumen = btn_volumen.getAttribute("data-volumen");

				if (volumen === "suena" )
				{
					btn_volumen.setAttribute("data-volumen","silencio");
					vol_texto.textContent = "Volumen";
					audio5js.volume(0);
				}
				else if (volumen === "silencio" )
				{
					btn_volumen.setAttribute("data-volumen","suena");
					vol_texto.textContent = "Silencio";
					audio5js.volume(1);
				}
			};

			rango.onchange =  function () {
				var momento = this.value;
				momento = momento * duracion / 100;
				momento = momento.toFixed(1);
				audio5js.seek(momento);
			};

		}
	});
	audios.push(audio5js);
}

// <-- Generales

function cerrar_descripcion()
{
	var btns_cerrar = document.querySelectorAll('.js-cerrar-descrip');
	Array.prototype.forEach.call(btns_cerrar, function(cerrar){
		cerrar.onclick = function() {
			this.parentNode.classList.toggle("oculto");
		};
	});
}

function titulo_tab () {
	var titulo = document.querySelector("h1");
	document.title = titulo.innerHTML;
}

function subtitulos () {
	var btn_subtitulos = document.querySelectorAll(".js-transcript");
	Array.prototype.forEach.call(btn_subtitulos, function(subti){
		subti.onclick = function() {
			this.parentNode.classList.toggle("activo");
		};
	});
}

function estructura()
{
	// nivel superior
	var num_diapositivas = contenedor.childElementCount;

	contenedor.style.width = ancho_pag * num_diapositivas + "px";

	Array.prototype.forEach.call(diapositivas, function(el){
		el.style.width = ancho_pag + "px";
	});

	// Dentro de cada sección
	Array.prototype.forEach.call(secciones, function(el){
		var contenedor_seccion = el.querySelector(".js-contenedor");
		var diapositivas_seccion = el.querySelectorAll(".js-diapositiva");

		// Clonar diapositivas
		var num_diaps = diapositivas_seccion.length;
		var ultima_diap = num_diaps - 1;

		var clon_uno = diapositivas_seccion[0].innerHTML;
		var clon_uno_fondo = diapositivas_seccion[0].getAttribute("style");
		var clon_dos = diapositivas_seccion[ultima_diap].innerHTML;
		var clon_dos_fondo = diapositivas_seccion[ultima_diap].getAttribute("style");

		contenedor_seccion.insertAdjacentHTML('afterbegin', "<article class='contenido diapositiva js-diapositiva clon' style='"+clon_dos_fondo+"'>"+clon_dos+"</article>");
		contenedor_seccion.insertAdjacentHTML('beforeend', "<article class='contenido diapositiva js-diapositiva clon' style='"+clon_uno_fondo+"'>"+clon_uno+"</article>");

		diapositivas_seccion = el.querySelectorAll(".js-diapositiva");

		num_diaps = diapositivas_seccion.length;
		nums_diapositivas.push(num_diaps-2);

		// Ancho de carrusel
		contenedor_seccion.style.width = ancho_pag * num_diaps + "px";

		// Dar ancho fijo a todas las diapositivas
		Array.prototype.forEach.call(diapositivas_seccion, function(diap){
			diap.style.width = ancho_pag + "px";
		});
	});
}

// Generales del carrusel -->
function mover(cont, diap_visible) {
	Velocity(cont, { left: (diap_visible * ancho_pag) * ( - 1 ) + "px" }, {duration: 300});
}
function mover_regresar(cont, diap_visible) {
	Velocity(cont, { left: (diap_visible * ancho_pag) * ( - 1 ) + "px" }, {duration: 300, complete: function(){
		cont.style.left = (ancho_pag) * ( - 1 ) + "px";
	} });
}
function retroceder_regresar(cont, diap_visible, total) {
	Velocity(cont, { left: (diap_visible * ancho_pag) * ( - 1 ) + "px" }, {duration: 300, complete: function(){
		cont.style.left = ( ( total ) * ancho_pag) * ( - 1 ) + "px";
	} });
}
function resetear_diapostivas (sec) {
	var estas_diapostivas = sec.querySelectorAll(".js-diapositiva");
	Array.prototype.forEach.call(estas_diapostivas, function(est){
		est.style.transform = "translateX(0px)";
		est.style.webkitTransform = "translateX(0px)";
		est.style.zIndex = "0";
	});
}
function hover_sensibles (sensible_izq, sensible_der, sec, diap_visible) {
	sensible_izq.onmouseover = function() {
		var actual_uno = sec.querySelector("[data-diapositiva='"+diap_visible+"']");
		var lateral_over_ant = actual_uno.previousElementSibling;
		lateral_over_ant.style.webkitTransform = "translateX(10%)";
		lateral_over_ant.style.transform = "translateX(10%)";
		lateral_over_ant.style.zIndex = "20";
	};
	sensible_der.onmouseover = function() {
		var actual_dos = sec.querySelector("[data-diapositiva='"+diap_visible+"']");
		var lateral_over_sig = actual_dos.nextElementSibling;
		lateral_over_sig.style.webkitTransform = "translateX(-10%)";
		lateral_over_sig.style.transform = "translateX(-10%)";
	};
	sensible_izq.onmouseout = function() {
		var actual_tres = sec.querySelector("[data-diapositiva='"+diap_visible+"']");
		var lateral_out_ant = actual_tres.previousElementSibling;
		lateral_out_ant.style.webkitTransform = "translateX(0px)";
		lateral_out_ant.style.transform = "translateX(0px)";
		lateral_out_ant.style.zIndex = "0";
	};
	sensible_der.onmouseout = function() {
		var actual_cuatro = sec.querySelector("[data-diapositiva='"+diap_visible+"']");
		var lateral_out_sig = actual_cuatro.nextElementSibling;
		lateral_out_sig.style.webkitTransform = "translateX(0px)";
		lateral_out_sig.style.transform = "translateX(0px)";
	};
}

// <-- Generales del carrusel


// Carrusel -->

function carruseles_secciones(est, sec, cont, dest)
{
	if (est === "activo")
	{
		var i = index_en_array(secciones, dest);

		// mover menos 1 diap
		cont.style.left = (ancho_pag) * ( - 1 ) + "px";
		// Empiece el audio
		audios[i].playPause();

		cont.setAttribute("data-visible", 1);
		diap_visible = cont.getAttribute("data-visible");
		diap_visible = +diap_visible;

		// Brinco de segunda diapositiva
		var brinco_inicial = sec.querySelector("[data-diapositiva='2']");
		setTimeout(function()
		{
			brinco_inicial.style.webkitTransform = "translateX(-10%)";
			brinco_inicial.style.transform = "translateX(-10%)";
		}, 300);
		setTimeout(function()
		{
			brinco_inicial.style.webkitTransform = "translateX(0px)";
			brinco_inicial.style.transform = "translateX(0px)";
		}, 700);
		// Paginador
		var paginador = cont.parentNode.querySelector(".js-paginador");
		var pag_actual = paginador.querySelector(".js-paginador-actual");
		var pag_total = paginador.querySelector(".js-paginador-total");
		pag_total.textContent = nums_diapositivas[i];

		// Sensible
		var sensible_izq = sec.querySelector(".js-sensible_izq");
		var sensible_der = sec.querySelector(".js-sensible_der");

		sensible_izq.onclick = function() {
			if ( diap_visible > 1 )
			{
				diap_visible--;
				mover(cont, diap_visible);
			}
			else
			{
				diap_visible--;
				retroceder_regresar(cont, diap_visible, nums_diapositivas[i]);
				diap_visible = nums_diapositivas[i];

			}
			cont.setAttribute("data-visible", diap_visible);
			pag_actual.textContent = diap_visible;
			resetear_diapostivas(sec);
			hover_sensibles(sensible_izq, sensible_der, sec, diap_visible);
		};
		sensible_der.onclick = function() {
			if ( diap_visible <= ( nums_diapositivas[i]-1 ) )
			{
				diap_visible++;
				mover(cont, diap_visible);
			}
			else
			{
				diap_visible++;
				mover_regresar(cont, diap_visible);
				diap_visible = 1;
			}
			cont.setAttribute("data-visible", diap_visible);
			pag_actual.textContent = diap_visible;
			resetear_diapostivas(sec);
			hover_sensibles(sensible_izq, sensible_der, sec, diap_visible);
		};
		hover_sensibles(sensible_izq, sensible_der, sec, diap_visible);

	}
}

// <-- Carrusel

function fullScreen()
{
	var apagador = 0;
	function launchFullScreen(element) {
		if(element.requestFullScreen) {
			element.requestFullScreen();
		} else if(element.mozRequestFullScreen) {
			element.mozRequestFullScreen();
		} else if(element.webkitRequestFullScreen) {
			element.webkitRequestFullScreen();
		} else if(element.msRequestFullScreen) {
			element.msRequestFullScreen();
		}
	}
	function exitFullscreen() {
		if(document.exitFullscreen) {
			document.exitFullscreen();
		} else if(document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if(document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		}
	}

	var btn_fullScreen = document.querySelector(".js-fullScreen");
	if (btn_fullScreen)
	{
		btn_fullScreen.onclick = function() {
			if (apagador === 0)
			{
				launchFullScreen(document.documentElement);
				apagador = 1;
			} else {
				exitFullscreen();
				apagador = 0;
			}
			setTimeout(function()
			{
				rsize();
			},milSec);
		};
	}
}

// Menú y navegación -->

function mov_menu()
{
	btn_menu.classList.toggle("open");
	menu.classList.toggle("visible");
	el_menu.classList.toggle("visible");
}

function menu_func()
{
	if (btn_menu)
	{
		btn_menu.onclick = function() {
			mov_menu();
		};
	}
}

function menu_activo_func()
{
	var menu_activo = menu.querySelector("[data-seccion="+diapo_visible+"]");
	if (menu_activo)
	{
		Array.prototype.filter.call(menu_activo.parentNode.children, function(child){
			if( child !== menu_activo )
			{
				child.classList.remove("actual");
			}
		});
		menu_activo.classList.add("actual");
	}
}

function navegacion()
{
	var btns_nav = document.querySelectorAll('.js-nav');
	var titulo_footer = document.querySelector(".js-seccion-footer");
	Array.prototype.forEach.call(btns_nav, function(el){
		el.onclick = function() {
			diapo_visible = el.getAttribute('data-ir');

			// Pausa a los demás audios
			for (var j in audios ) 
			{
				audios[j][audios[j].playing ? 'pause' : 'pause']();
			}

			if (diapo_visible)
			{
				// Mover carrusel
				var diapo = index_en_array( diapositivas, diapo_visible);
				setTimeout(function()
				{
					contenedor.style.left = (diapo * ancho_pag) * ( - 1 ) + "px";
				},250);
				// Menú activo
				menu_activo_func();
			}

			// Funciones dependiendo de la sección
			setTimeout(function()
			{
				if (diapo_visible !== "home")
				{
					el_menu.style.display = "block";
					carruseles_secciones("inactivo");
					btn_menu.classList.remove("internas");

					var seccion = document.querySelector("[data-destino="+diapo_visible+"]");
					var data_seccion = seccion.getAttribute("data-seccion");
					var titulo_seccion = seccion.getAttribute("data-titulo");

					// Poner título en el footer
					if (titulo_seccion)
					{
						titulo_footer.innerHTML = "<p>" + titulo_seccion + "</p>";
					}
					if (diapo_visible === "inicio")
					{
						estado_home = btns_reproductor[0].getAttribute("data-estado");
						btns_play_home(estado_home);
						volumen_home = btns_volumen[0].getAttribute("data-volumen");
						btns_vol_home(volumen_home);
					}

					if ( data_seccion )
					{
						audioHome.pause();
						var contenedor_seccion = seccion.querySelector(".js-contenedor");
						btn_menu.classList.add("internas");

						carruseles_secciones("activo", seccion, contenedor_seccion, diapo_visible);
					}
				}
				else 
				{
					el_menu.style.display = "none";
					carruseles_secciones("inactivo");
					btn_menu.classList.remove("internas");

					// Quitar título en el footer
					titulo_footer.innerHTML = "<p>&nbsp;</p>";
					audioHome.play();
					estado_home = btns_reproductor[0].getAttribute("data-estado");
					btns_play_home(estado_home);
					volumen_home = btns_volumen[0].getAttribute("data-volumen");
					btns_vol_home(volumen_home);
				}
			}, 250);

			if (  el_menu.classList.contains("visible") )
			{
				mov_menu();
			}
		};
	});
}

// <-- Menú y navegación

function audio_home ()
{
	
	var hom = document.querySelector(".js-home");
	var elAudio = hom.getAttribute("data-audio");

	audioHome = new Audio5js({
		ready: function () {
			var el_archivo = '../assets/audios/'+elAudio;
			this.load(el_archivo);

			// Loop
			this.on('ended', function () {
				audioHome.playPause();
			}, this);
			
			this.play();

			Array.prototype.forEach.call(btns_reproductor, function(rep){

				rep.onclick = function()
				{
					estado_home = btns_reproductor[0].getAttribute("data-estado");
					if (estado_home === "pausa" )
					{
						btns_reproductor[0].setAttribute("data-estado","play");
						estado_home = "play";
					}
					else if (estado_home === "play" )
					{
						btns_reproductor[0].setAttribute("data-estado","pausa");
						estado_home = "pausa";
					}
					btns_play_home(estado_home);
				};
			});

			Array.prototype.forEach.call(btns_volumen, function(vol){
				vol.onclick = function()
				{
						volumen_home = btns_volumen[0].getAttribute("data-volumen");

						if (volumen_home === "suena" )
						{
							btns_volumen[0].setAttribute("data-volumen","silencio");
							volumen_home = "silencio";
						}
						else if (volumen_home === "silencio" )
						{
							btns_volumen[0].setAttribute("data-volumen","suena");
							volumen_home = "suena";
						}
					btns_vol_home(volumen_home);
				};
			});
		}
	});
}

function reproductor()
{
	// Audios de cada sección

	Array.prototype.forEach.call(secciones, function(el, i){

		var elAudio = el.getAttribute("data-audio");
		var btn_reproductor = el.querySelector(".js-reproducir");
		var rango = el.querySelector(".js-rango");
		var btn_volumen = el.querySelector(".js-volumen");
		var rep_flip = btn_reproductor.querySelector(".flip-container");
		var vol_flip = btn_volumen.querySelector(".flip-container");
		var vol_texto = btn_volumen.querySelector(".js-texto");
		var estado;
		var volumen;

		initAudio(elAudio, btn_reproductor, estado, volumen, rep_flip, rango, btn_volumen, vol_flip, vol_texto, i);

	});
}

// Resize -->

function rsize()
{
	ancho_pag = document.body.offsetWidth;
	// nivel superior
	var num_diapositivas = contenedor.childElementCount;

	contenedor.style.width = ancho_pag * num_diapositivas + "px";

	Array.prototype.forEach.call(diapositivas, function(el){
		el.style.width = ancho_pag + "px";
	});

	// Dentro de cada sección
	Array.prototype.forEach.call(secciones, function(el){
		var contenedor_seccion = el.querySelector(".js-contenedor");
		var diapositivas_seccion = el.querySelectorAll(".js-diapositiva");

		// Ancho de carrusel
		var num_diaps = diapositivas_seccion.length;
		contenedor_seccion.style.width = ancho_pag * num_diaps + "px";

		// Dar ancho fijo a todas las diapositivas
		Array.prototype.forEach.call(diapositivas_seccion, function(diap){
			diap.style.width = ancho_pag + "px";
		});
	});

	var esta_seccion = document.querySelector("[data-ir='"+diapo_visible+"']");
	var event = document.createEvent('HTMLEvents');
	event.initEvent('click', true, false);
	esta_seccion.dispatchEvent(event);
}

window.onresize = function(event)
{
	if(tOut !== false)
		clearTimeout(tOut);
	tOut = setTimeout(rsize, milSec);
};

// <-- Resize al recargar

window.addEventListener('DOMContentLoaded', function() {
	new QueryLoader2(document.querySelector("body"), {
		barColor: "#efefef",
		backgroundColor: "#111",
		percentage: true,
		barHeight: 2,
		minimumTime: 1500,
		fadeOutTime: 350
	});
});

document.addEventListener('DOMContentLoaded', function()
{
	audio_home();
	menu_func();
	cerrar_descripcion();
	estructura();
	fullScreen();
	navegacion();
	reproductor();
	compartir_redes();
	titulo_tab();
	subtitulos();
});