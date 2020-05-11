var apartments = [];

function differenceInDays(firstDate, secondDate) {
	return Math.round((secondDate.getTime() - firstDate.getTime()) / (1000*60*60*24));
}

function listApartments() {
	let list = document.getElementById('list');
	list.innerHTML = '';

	var checkIn = new Date(document.getElementById("inputCheckIn").value);
	var checkOut = new Date(document.getElementById("inputCheckOut").value);

	var differenceD = differenceInDays(checkIn, checkOut);

	for(let i = 0; i < apartments.length; i++) {
		let card = document.createElement('div');
		card.className = 'list-group-item listcolun';

		let img = document.createElement('div');
		img.style.backgroundImage = 'url(' + apartments[i].photo + ')';
		img.className = 'list-img';
		card.appendChild(img);

		let cardText = document.createElement('div');
		cardText.className = 'card-text';
		card.appendChild(cardText);

		let title = document.createElement('small');
		title.appendChild(document.createTextNode(apartments[i].property_type));
		cardText.appendChild(title);

		let name = document.createElement('h4');
		name.appendChild(document.createTextNode(apartments[i].name));
		cardText.appendChild(name);

		let price = document.createElement('div');
		price.innerHTML = '<b>R$'+ (apartments[i].price) + '</b>/noite';
		cardText.appendChild(price);

		if (!isNaN(differenceD)) {
			let total = document.createElement('div');
			total.innerHTML = 'Total de R$'+ (apartments[i].price * differenceD);
			cardText.appendChild(total);
		}
		list.appendChild(card);
	}
}

var url = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";//Sua URL

var xhttp = new XMLHttpRequest();
xhttp.open("GET", url, true);
xhttp.onreadystatechange = function() {//Função a ser chamada quando a requisição retornar do servidor
		if ( this.readyState == 4 && this.status == 200 ) {//Verifica se o retorno do servidor deu certo
			apartments = JSON.parse(this.responseText);
			listApartments();
	}
}

xhttp.send();//A execução do script CONTINUARÁ mesmo que a requisição não tenha retornado do servidor

