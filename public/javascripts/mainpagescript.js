const upperbar = document.querySelector('.upperbar');
const getstartbtn = document.querySelector('#getstart');
const navbtnham = document.querySelector('.open');
const navbtnx = document.querySelector('.close');
const mobnavmenu = document.querySelector('.mobilenavbar');
const disclaimerbtn = document.querySelector('#disclaimerbtn');
const disclaimercheckbox = document.querySelector('input[name="disclaimercheckbox"]');
const disclaimerscreen = document.querySelector('header');

window.addEventListener('scroll', () => {
	const scrollTop = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
	let bar;
	if (scrollTop >= 640) {
		bar = true;
	}
	if (bar === true) {
		upperbar.classList.add('barafter');
		mobnavmenu.classList.add('barafter');
	} else {
		upperbar.classList.remove('barafter');
		mobnavmenu.classList.remove('barafter');
	}
});

getstartbtn.addEventListener('click', () => {
	window.scrollTo({
		top: 640,
		behavior: 'smooth'
	});
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

disclaimerbtn.addEventListener('click', () => {
	if (disclaimercheckbox.checked) {
		document.cookie = `keepdisclaimer=false; expires=${new Date('31 Dec 9999 00:00:00 UTC')}`;
	} else {
		document.cookie = `keepdisclaimer=true; expires=${new Date('31 Dec 9999 00:00:00 UTC')}`;
	}
	disclaimerscreen.classList.remove('show');
});
