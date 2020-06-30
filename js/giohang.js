		/*CART*/
		var modal = document.getElementById("mycart");
		var btn = document.getElementById("shopcart");
		var close = document.getElementsByClassName("close")[0];
		var close_footer = document.getElementsByClassName("closefooter")[0];
		var order = document.getElementsByClassName("order")[0];
		
		btn.onclick = function () { modal.style.display = "block"; }

		close.onclick = function () { modal.style.display = "none"; }

		close_footer.onclick = function () {modal.style.display = "none";}

		order.onclick = function () {alert("Cảm ơn bạn đã thanh toán đơn hàng");}
		
		window.onclick = function (event) {if (event.target == modal) {modal.style.display = "none";}}

		// xóa cart
		var remove_cart = document.getElementsByClassName("ghdanger");
		for (var i = 0; i < remove_cart.length; i++) 
		{
  			var button = remove_cart[i]
  			button.addEventListener("click", function () 
  			{
    			var button_remove = event.target;
    			button_remove.parentElement.parentElement.remove();
    			updatecart();
  			})
		}
		// update cart 
		function updatecart() 
		{
  			var cart_item = document.getElementsByClassName("ghitems")[0];
  			var cart_rows = cart_item.getElementsByClassName("ghrow");
  			var total = 0;
  			for (var i = 0; i < cart_rows.length; i++) 
  			{
    			var cart_row = cart_rows[i];
    			var price_item = cart_row.getElementsByClassName("ghprice ")[0];
    			var quantity_item = cart_row.getElementsByClassName("ghquantityinput")[0];
    			var price = parseFloat(price_item.innerText);
    			var quantity = quantity_item.value;
    			total = total + (price * quantity);
  			}
  			document.getElementsByClassName("ghtotalprice")[0].innerText = total + 'VNĐ';
		}

		// thay đổi số lượng sản phẩm
		var quantity_input = document.getElementsByClassName("ghquantityinput");
		for (var i = 0; i < quantity_input.length; i++) 
		{
  			var input = quantity_input[i];
  			input.addEventListener("change", function (event) 
  			{
    			var input = event.target
    			if (isNaN(input.value) || input.value <= 0) 
    			{
      				input.value = 1;
    			}
    			updatecart()
  			})
		}

		/*ấn thêm*/
		var add_cart = document.getElementsByClassName("btn-indigo");
		for (var i = 0; i < add_cart.length; i++) 
		{
  			var add = add_cart[i];
  			add.addEventListener("click", function (event) 
  			{
    			var button = event.target;
    			var product = button.parentElement.parentElement;
    			var img = product.parentElement.getElementsByClassName("card-img-top")[0].src;
    			var title = product.getElementsByClassName("cont")[0].innerText;
    			var price = product.getElementsByClassName("price")[0].innerText;
    			addItemToCart(title, price, img);
    			modal.style.display = "block";
    			updatecart()
  			})
		}

		function addItemToCart(title, price, img) 
		{
  			var cartRow = document.createElement('div');
  			cartRow.classList.add('ghrow');
  			var cartItems = document.getElementsByClassName('ghitems')[0];
  			var cart_title = cartItems.getElementsByClassName('ghitemtitle');
  			for (var i = 0; i < cart_title.length; i++) 
  			{
   				if (cart_title[i].innerText == title) 
    			{
      				alert('Sản Phẩm Đã Có Trong Giỏ Hàng');
      				return;
    			}
  			}

 			var cartRowContents = `
  			<div class="ghitem ghcolumn">
      			<img class="ghitemimage" src="${img}" width="100" height="100">
      			<span class="ghitemtitle">${title}</span>
  			</div>
  			<span class="ghprice ghcolumn">${price}</span>
  			<div class="ghquantity ghcolumn">
      			<input class="ghquantityinput" type="number" value="1">
      			<button class="btn ghdanger" type="button">Xóa</button>
  			</div>`

  			cartRow.innerHTML = cartRowContents;
  			cartItems.append(cartRow);
  			cartRow.getElementsByClassName('ghdanger')[0].addEventListener('click', function () 
  			{
    			var button_remove = event.target;
    			button_remove.parentElement.parentElement.remove();
    			updatecart();
  			})

  			cartRow.getElementsByClassName('ghquantityinput')[0].addEventListener('change', function (event) 
  			{
    			var input = event.target
    			if (isNaN(input.value) || input.value <= 0) 
    			{
      				input.value = 1;
    			}
    			updatecart()
  			})
		}