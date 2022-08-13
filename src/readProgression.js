function getScrollPercent() {
	let perc = (window.scrollY) / (document.body.clientHeight - document.documentElement.clientHeight);
	let percRounded = Math.round(perc * 100);
	// return percRounded;
	document.getElementById('progress-line').style.width = percRounded + '%';
}
getScrollPercent();

window.addEventListener('scroll', function () {
	getScrollPercent();
});

document.getElementById('get-json').addEventListener('click', function (e) {
	e.preventDefault();
	let xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			let data = JSON.parse(this.responseText);
			for (let i = 0; i < data.length; i++) {
				let p = document.createElement('P');
				p.innerHTML = data[i];
				let span = document.createElement('SPAN');
				span.classList.add('delete');
				p.append(span);
				document.getElementById('article').insertBefore(p, document.getElementById('get-json'));
			}
			getScrollPercent();
			deleteP();
		}
	};
	xhttp.open('GET', 'https://baconipsum.com/api/?type=all-meat&paras=2', true);
	xhttp.send();
});

function deleteP () {
	let deletes = document.querySelectorAll('.delete');
	for (let d = 0; d < deletes.length; d++) {
		deletes[d].addEventListener('click', function (e) {
			e.preventDefault();
			let el = this;
			this.parentNode.remove();
		});
	}
}
deleteP();