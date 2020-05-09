var url = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";//Sua URL

var xhttp = new XMLHttpRequest();
xhttp.open("GET", url, true);
xhttp.onreadystatechange = function(){//Função a ser chamada quando a requisição retornar do servidor
		if ( this.readyState == 4 && this.status == 200 ) {//Verifica se o retorno do servidor deu certo
			var apartments = JSON.parse(this.responseText);

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
				title.className = 'card-text';
				title.appendChild(document.createTextNode(apartments[i].property_type));
				cardText.appendChild(title);

				let name = document.createElement('h4');
				name.className = 'card-text';
				name.appendChild(document.createTextNode(apartments[i].name));
				cardText.appendChild(name);

				let price = document.createElement('h6');
				price.className = 'card-text';
				price.appendChild(document.createTextNode('R$ '+apartments[i].price));
				cardText.appendChild(price);

				let list = document.getElementById('list');
				list.appendChild(card);

				console.log(card, apartments[i]);
				console.log(apartments[i].name);
			}




	}
}

xhttp.send();//A execução do script CONTINUARÁ mesmo que a requisição não tenha retornado do servidor

