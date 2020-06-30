		/*OPEN BARS*/
		var sbar = document.getElementById("sidebar");
		function myopen()
		{
			if (sbar.style.display === "block") sbar.style.display = "none";
			else sbar.style.display = "block";
		}
		function myclose() 
		{
    		sbar.style.display = "none";
		}
		window.onclick = function (event) {if (event.target == sbar) {sbar.style.display = "none";}}

		/*Animatebar*/
		var prevScrollpos = window.pageYOffset;
		window.onscroll = function() 
		{
			var currentScrollPos = window.pageYOffset;
  			if (prevScrollpos > currentScrollPos) 
  			{
    			document.getElementById("mebar").style.top = "0";
  			} 
  			else 
  			{
    			document.getElementById("mebar").style.top = "-50px";
  			}
  				prevScrollpos = currentScrollPos;
		}

		/*IMAGES SHOW AUTO*/	
		var myIndex = 0;
		carousel();
		function carousel()
		{
			var x = document.getElementsByClassName("myslide");
			for (var i = 0; i < x.length; i++) 
			{
				x[i].style.display = "none";
			}
			myIndex++;
			if (myIndex > x.length)
				myIndex = 1
			x[myIndex-1].style.display = "block";
			setTimeout(carousel,4000);
		}

		/*IMAGES SHOW*/
		var slideIndex = [1,1];
		var slideId = ["myslide1", "myslide2"]
		showSlides(1, 0);
		showSlides(1, 1);

		function plusSlides(n, no) 
		{
  			showSlides(slideIndex[no] += n, no);
		}

		function showSlides(n, no)
		{
  			var i;
  			var x = document.getElementsByClassName(slideId[no]);
  			if (n > x.length) {slideIndex[no] = 1}    
  			if (n < 1) {slideIndex[no] = x.length}
  			for (i = 0; i < x.length; i++) {
     			x[i].style.display = "none";  
  			}
  			x[slideIndex[no]-1].style.display = "block";  
		}	

		

		