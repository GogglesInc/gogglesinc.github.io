const disclaimerDisplay = document.querySelector('header');
window.addEventListener('load', () => {
	const allCookies = document.cookie
		.split(';')
		.map((cookie) => cookie.split('='))
		.reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {});
	if (allCookies.keepdisclaimer === 'false') {
		disclaimerDisplay.classList.remove('show');
	} else {
		disclaimerDisplay.classList.add('show');
	}
});

const disclaimerbtn = document.querySelector('#disclaimerbtn');
const disclaimercheckbox = document.querySelector('input[name="disclaimercheckbox"]');
disclaimerbtn.addEventListener('click', () => {
	if (disclaimercheckbox.checked) {
		document.cookie = `keepdisclaimer=false; expires=${new Date('31 Dec 9999 00:00:00 UTC')}`;
	} else {
		document.cookie = `keepdisclaimer=true; expires=${new Date('31 Dec 9999 00:00:00 UTC')}`;
	}
	disclaimerDisplay.classList.remove('show');
});

const getstartbtn = document.querySelector('#getstart');
getstartbtn.addEventListener('click', () => {
	window.scrollTo({
		top: 640,
		behavior: 'smooth'
	});
});

const upperbar = document.querySelector('.upperbar');
const navbtnham = document.querySelector('.open');
const navbtnx = document.querySelector('.close');
const mobnavmenu = document.querySelector('.mobilenavbar');

window.addEventListener('scroll', () => {
	const scrollTop = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
	console.warn(scrollTop);
	if (scrollTop >= 640) {
		upperbar.classList.add('barafter');
		mobnavmenu.classList.add('barafter');
	} else {
		upperbar.classList.remove('barafter');
		mobnavmenu.classList.remove('barafter');
	}
});

navbtnham.addEventListener('click', () => {
	navbtnham.classList.add('show');
	navbtnx.classList.add('show');
	mobnavmenu.classList.add('show');
});

navbtnx.addEventListener('click', () => {
	navbtnx.classList.remove('show');
	navbtnham.classList.remove('show');
	mobnavmenu.classList.remove('show');
});

// fetch('http://localhost:4200/api/v0.0.1').then((response) => response.json()).then((json) => console.log(json));
