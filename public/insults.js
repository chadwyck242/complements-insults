document.querySelector('.request-insult').addEventListener('click', function() {
	fetch('/insult')
		.then(function(res) {
			return res.json();
		})
		.then(function(data) {
			document.querySelector('.insult').innerText = data.insult;
		})
		.catch(function(err) {
			// eslint-disable-next-line no-console
			console.error(err);
		});
});
