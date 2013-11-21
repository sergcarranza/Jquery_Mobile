function saber_idioma(){
	if (navigator.appName == 'Netscape')
		var lenguage = navigator.language;
	else
	var lenguage = navigator.browserLanguage;
	if (lenguage.indexOf('en') > -1){
		ProcLang = 1;
		idioma(1);
	}
	else if (lenguage.indexOf('es') > -1){
		ProcLang = 0;
		idioma(0);
	}
	else if (lenguage.indexOf('fr') > -1){
		ProcLang = 1; //luego cambiamos a Frances
		idioma(1);
	}
	else if (lenguage.indexOf('pt') > -1){
		ProcLang = 2;
		idioma(2);
	}
	else{
  		ProcLang = 1; //otro idioma ingles
		idioma(1);
	}

}

function setContent(id, content)
{
	var ele = document.getElementById(id);
	if (ele)
	{
		ele.innerHTML = content;
	}
}
//Creamos una objeto que guarda nuestras palabras
var diccionario= {
	indice: 0, //idioma inicial
	lenguajes: ["Español","English","Portugueis"],
	frases: [
			["","",""]
			["Prueba","Prueba","Prueba"],
			["Si","Yes","Sim"],
			["No","Not","Não"],
			["Ubicar","Locate","Localizar"],
			["Portugues","Portuguese","Portugueis"],
			["Ingles","English","Ingles"],
			["Español","Spanish","Espanhol"],
			["Configurar","Setting","Configuraçaõ"],
			["Refrescar","Refresh","Refrescar"],
			["Invitar a descargar","Invite to download","Convidar para baixar"],
			["Cerrar","Close","Fechar"],
			["cargando","loading","carregamento"],
			["Volver","Back","Voltar"],
			["Atras","Back","Voltar"],
			["Obteniendo información del GPS","Getting information from the GPS","Obtendo informações do GPS"],
			["Mi ubicación","My location","Meu localização"],
			["Idioma","Language","Linguagem"],
			["Permiso denegado","Permission denied","Permissão negada"],
			["Posición no disponible","Position unavailable","Posição não disponível"],
			["Tiempo de espera","Timeout","Timeout"],
			["Código de error desconocido","Unknown error code","Código de erro desconhecido"],
			["App creada por Sergio Carranza","App created by Sergio Carranza","App criado por Sergio Carranza"],
			["Compartir","Share","Ação"],
			["Acerca de","About","Sobre"],
			["Preferencias","Preferencies","Preferenças"],
			["Guardando los cambios","Saving Changes","Salvando alterações"],
			["Usar mi ubicación","Use my location","Usar minha localização"],
			["Cargando el mapa","Loading map","Carregando o mapa"],
			["Ver mapa","View map","Ver mapa"],
			["Guardar","Save","Salvar"],
			["Cambio de idioma con javaScript","Change language with javaScript","Alterar o idioma com javascript"],
			["","",""]
	],
	getLngActualTxt: function (){return this.lenguajes[this.indice];},
	//Esta funcion es la que realiza la traduccion
	traducir: function (Frase) {
				if (this.indice == 0){
					return Frase;}
				else {
					var fraseNro = 0;
					for (var f=1;f< this.frases.length;f++){
						if (Frase == this.frases[f][0]){
							if (this.frases[f][this.indice]!== ""){
								return this.frases[f][this.indice];
								}
							};
						};
					if (fraseNro == 0) {return Frase;};
					};
				}
	};

/*	funcion que cambia el idioma
	cambia nuesttras etiquetas
*/
var dic = diccionario;

function idioma(nroIdioma){
	diccionario.indice = nroIdioma;
	localStorage.setItem("lang", nroIdioma);
	//para no recargar actualizo etiquetas
	setContent('lblShare', '<img src="img/share.png" width="40px"><br>' + dic.traducir("Compartir"));
	setContent('lblInvite', '<img src="img/to_bottom.png" width="40px"><br>' + dic.traducir("Invitar a descargar"));
	setContent('lblPt', dic.traducir("Portugues"));
	setContent('lblEn',dic.traducir("Ingles"));
	setContent('lblEs',dic.traducir("Español"));
	setContent('lblUbicar',dic.traducir("Ubicar"));
	setContent('lblRefrescar', '<img src="img/rotate.png" width="40px"><br>' + dic.traducir("Refrescar"));
	setContent('lblClose',dic.traducir("Cerrar")+'<img src="img/ico/ic_previous.png" class="ui-li-thumb">');
	setContent('lblConfig', '<img src="img/settings.png" width="40px"><br>' + dic.traducir("Configurar"));
	setContent('lblTitInfo',dic.traducir("Acerca de"));
	setContent('lblInfo',dic.traducir("Cambio de idioma con javaScript"));
	setContent('lblCalif',dic.traducir("Calificación"));
	setContent('lblDistancia',dic.traducir("Distancia"));
	setContent('lblPanel',dic.traducir("App creada por Sergio Carranza"));
	setContent('btnCloseAbout',dic.traducir("Cerrar"));
	setContent('lblConfigTipoEvento',dic.traducir("Preferencias"));
	setContent('lblconfGps',dic.traducir("Usar mi ubicación"));
	setContent('lblConfCant',dic.traducir("Cantidad de eventos"));
	setContent('lblGpsOptNo', dic.traducir("No"));
	setContent('lblGpsOptSi', dic.traducir("Si"));
	setContent('lblconfOrden', dic.traducir("Ordenar"));
	setContent('lblVermapa', dic.traducir("Ver mapa"));
	setContent('lblConfHasta', dic.traducir("Hasta: "));
	setContent('lblConfDesde', dic.traducir("Desde: "));
	setContent('lblMapGoogle', dic.traducir("Mapa de Google"));
	setContent('lblConfMapa', dic.traducir("Ver mapa"));
	setContent('lblConfSave', dic.traducir("Guardar"));
	setContent('lblLugares', dic.traducir("Lugares"));
	setContent('lblAgenda', dic.traducir("Agenda"));
	setContent('btnBackLabel', dic.traducir("Atras"));
	setContent('Back', dic.traducir("Atras"));
}