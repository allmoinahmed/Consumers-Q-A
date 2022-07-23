jQuery(document).ready(function($) {

const liElm = document.querySelectorAll('#tab-nav ul li')
liElm.forEach((liSi) => {
	liSi.addEventListener('click', function(e){
		$('.cqa-panel.active').removeClass('active')
		const getData = liSi.getAttribute('data-target')
		$('#'+getData).addClass('active')
	})	
})




	// Inside Vertical Panel Accordion JS
	const singleAccor = document.querySelectorAll('#single-accor')
	singleAccor.forEach((acc) => {
	    acc.addEventListener('click', e => {        
	        removeActiveAcc()
	        acc.classList.add('accActive')
	        $('.accActive  img').attr('src','https://dcu.ussl.nl/wp-content/themes/hello-theme-child-master/assets/imgs/opened.png')
	    })
	})

	// Remove Other Active Classes
	function removeActiveAcc() {
	    singleAccor.forEach((s) => {
	        $('.accActive  img').attr('src','https://dcu.ussl.nl/wp-content/themes/hello-theme-child-master/assets/imgs/closed.png')
	        s.classList.remove('accActive')
	    })    
	}	
});