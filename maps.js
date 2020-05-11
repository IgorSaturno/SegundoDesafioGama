var map;
var centerPos = new google.maps.LatLng(-23.558126,-46.645255);
var zoomLevel = 13;
function initialize() {
	var mapOptions = {
		center: centerPos,
		zoom: zoomLevel
	};
	map = new google.maps.Map( document.getElementById("map-canvas"), mapOptions );

	var locations = [
	['Apartment in Son Parc, wonderful views', 40.0190632, 4.1615008],
	['APARTAMENTO IDEAL PAREJAS EN SON PARC', 40.018638, 4.162226],
	['Casa Charmosa Bem Localizada', -22.970288, -42.025667],
	['Quartos pertinho do Anhembi!', -23.5134004, -46.6563539],
	['Charming Chalet, private pool, free AC & WiFi', 40.025297, 4.164493],
	['Menorca Green Park C7', 40.020445, 4.162369],
	['Villa Monty', 40.019230, 4.168149],
	['Bonito penthouse cerca del aeropuerto CDMX', 19.4360762, -99.0719083],
	['The Backpackers Retreat', -17.5210415, 146.0302536],
	['10min airport, Foro Sol, Palacio de los Deportes', 19.4055251, -99.0985425],
	['Acogedor depto cerca aeropuerto, foro Sol, Centro', 40.019230, 4.168149],
	['Sol Nascente da Prainha',	-22.9615953, -42.0249106],
	['Ap novo com wi-fi na Prainha - Arraial do Cabo', -22.9620016,	-42.025439],
	['Suite @ Subway Trianon Masp',-23.565591, -46.654429],
	['Quarto Arouche Centro SP Ótima Localização', -23.5386407,-46.6458618],
	['Quarto 1 - Parque da Aclimacão', -23.5721091,-46.6289573],
	['Existe amor em SP', -23.571721, -46.631318],
	['Confortável quarto de casal px. à Av. Paulista', -23.569880, -46.646282],
	['Room Higienopolis São Paulo', -23.546238, -46.660215],
	['Confortável quarto solteiro px. à Av. Paulista', -23.569308, -46.646437],
	['Modern, Cozy + all you need! Muito aconchegante!!', -23.558126, -46.645255],
	['Recanto Rosana - Quartos e estrutura completa', -23.529724, -46.663611],
	['Suite na Montanha - Refúgio do Artista', -23.479654, -46.690013],
	['Sítio Costa do Sol', -23.498228, -46.612784],
];
var image = 'imagens/map-marker-alt-solid.svg';


for (i = 0; i < locations.length; i++) {
marker = new google.maps.Marker({
position: new google.maps.LatLng(locations[i][1], locations[i][2]),
	title: locations[i][0],
	map: map,
	icon: image
});
}

}
google.maps.event.addDomListener(window, 'load', initialize);