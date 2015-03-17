/*

Documento de los contenidos en español del documental.

*/

var contenidoInteractivo =
{
	titulo : "", // Título de la página en general
	url : "http://", // URL de la página web
	descripcion : "", // Descripción de la página web
	intro : "<p></p>", // Texto que aparece en la página principal del documental. Admite etiquetas HTML y debe comenzar con la etiqueta <p> y terminar con </p>
	home: {
		bg : "assets/imgs/inicio/INTRO1.jpg", // Url relativa de la imagen de fondo de la página de inicio.
		audio : "AUDIOINICIO.mp3" // Audio de la página inicial
	},
	secciones: [
		/*
		El contenido que se llena a continuación pertene a las secciones del documental. El formato actual está pensado para 4 secciones diferentes.
		*/
		{
			// Datos de sección
			titulo: "", // Nombre de la sección. Ej. "Los personajes".
			seccion: "", // Clave de la sección, debe ser una palabra sin espacio ni caracteres latinos. Ej. "los_personajes".
			audio: "", // Audio de la sección. Debe ser formato .mp3
			background: "", // URL relativa de la imagen de la sección, es la imagen visible en el menú. Las imágenes deben estar en la carpeta assets/imgs/
			diapositivas: [
			{
				// Datos de diapositiva
				id: "1", // ID de la diapostiva. Esta secuencia debe ser progresiva con respecto a su ordent (1,2,3,4,....).
				bg: "", // URL relativa de la imagen del fondo. Las imágenes deben estar en la carpeta assets/imgs/
				altura: "abajo", // Posición del texto. Datos válidos: arriba, enmedio, abajo
				descrip: "<p></p>" // Texto que aparece en la diapositiva. Admite etiquetas HTML y debe comenzar con la etiqueta <p> y terminar con </p>. Si la diapositiva no contiene descripción, es necesario eliminar todo el renglón.
			}, // Agregar más diapositivas aquí
			/*
			Para agregar más diapositivas a esta  sección, copia el formato vacío que aparece a continuación y pégalo un renglón abajo de la llave de cierre y la coma }, que aparecen arriba.
			{
				id: "",
				bg: "",
				altura: "",
				descrip: "<p></p>"
			},
			*/
			]
		},
		{
			// Datos de sección
			titulo: "",
			seccion: "",
			audio: "",
			background: "",
			subtitulos: "<p></p>",
			diapositivas: [
			{
				// Datos de diapositiva
				id: "",
				bg: "",
				altura: "",
				descrip: "<p></p>"
			},
			]
		},
		{
			// Datos de sección
			titulo: "",
			seccion: "",
			audio: "",
			background: "",
			subtitulos: "<p></p>",
			diapositivas: [
			{
				// Datos de diapositiva
				id: "",
				bg: "",
				altura: "",
				descrip: "<p></p>"
			},
			]
		},
		{
			// Datos de sección
			titulo: "",
			seccion: "",
			audio: "",
			background: "",
			subtitulos: "<p></p>",
			diapositivas: [
			{
				// Datos de diapositiva
				id: "",
				bg: "",
				altura: "",
				descrip: "<p></p>"
			},
			]
		},
	],
	paginas: [
		/*
		El contenido que se llena a continuación pertene a páginas estáticas que no contienen sub páginas. Ej. "Acerca de".
		*/
		{
			titulo: "", // Nombre de la página. Ej. "Acerca de".
			pagina: "", // Clave de la página, debe ser una palabra sin espacios ni caracteres latinos. Ej. "acerca".
			background: "", // URL relativa de la imagen de la página. Las imágenes deben estar en la carpeta assets/imgs/
			descripcion: "<p></p>" // Texto que aparece en la página. Admite etiquetas HTML y debe comenzar con la etiqueta <p> y terminar con </p>. Si la página no contiene texto, es necesario eliminar todo el renglón.
		}
	],
};