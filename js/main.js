$(document).ready(function () {
	
	var head=$('.header');
	var bottom=head.position().top + head.outerHeight(true);

	if($(window).scrollTop()>bottom){
		$('.header').addClass('scrolled');
	}
	else{
		$('.header').removeClass('scrolled');
	}

	$(window).resize(function(){ 
		bottom=head.position().top + head.outerHeight(true);
	});

	$(window).scroll(function(){
		if($(window).scrollTop()>bottom){
			$('.header').addClass('scrolled');
		}else{
			$('.header').removeClass('scrolled');
		}
	});

	$(".accordion__item").on('click', function () {
		$(this).find(".accordion__item__bottom").slideToggle()
		$(this).find(".accordion__item__top").find(".accordion__item__top__icon").toggleClass("openedBar")
	});

	  document.getElementById('hamIcon').onclick = function(e) {
		e.preventDefault();
		(this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
		$(".menu").slideToggle(200);
		$("body").toggleClass("popuped");
	  };

    // Work with inputs:
    $('#input_name').change(function() {
        console.log("Changed");
    });

    $('.form__input input').focus(function() {
        $(this).parent().find(".label-placeholder").addClass("noneEmpty");
    });
    $('.form__input input').focusout(function() {
        if($(this).val().length == 0){
            $(this).parent().find(".label-placeholder").removeClass("noneEmpty");
        }
    });

    $('.popup_input-container input').focus(function() {
        $(this).parent().find(".label-placeholder").addClass("noneEmpty");
    });
    $('.popup_input-container input').focusout(function() {
        if($(this).val().length == 0){
            $(this).parent().find(".label-placeholder").removeClass("noneEmpty");
        }
    });

    
    $('#input_email').keyup(function() {
        if ($(this).is(":invalid")) {
            $(this).addClass("invalidData");
            $(this).parent().find(".label-placeholder").text("Неправильный формат email");
            $(this).parent().find(".label-placeholder").addClass("invalidData_label");
            $(this).parent().find("img").css("display", "block");
        }
        else{
            $(this).removeClass("invalidData");
            $(this).parent().find(".label-placeholder").text("Ваш email");
            $(this).parent().find(".label-placeholder").removeClass("invalidData_label");
            $(this).parent().find("img").css("display", "none");
        }
    });

    $('#input_card').keyup(function() {
        if ($(this).is(":invalid")) {
            $(this).addClass("invalidData");
            $(this).parent().find(".label-placeholder").text("Неправильный формат карты");
            $(this).parent().find(".label-placeholder").addClass("invalidData_label");
            $(this).parent().find("img").css("display", "block");
        }
        else{
            $(this).removeClass("invalidData");
            $(this).parent().find(".label-placeholder").text("Карта отправителя");
            $(this).parent().find(".label-placeholder").removeClass("invalidData_label");
            $(this).parent().find("img").css("display", "none");
        }
    });

    $('#input_coupon').keyup(function() {
        if ($(this).val() != "coupon") {
            $(this).addClass("invalidData");
            $(this).parent().find(".label-placeholder").text("Такого купона не существует");
            $(this).parent().find(".label-placeholder").addClass("invalidData_label");
            $(this).parent().find("img").css("display", "block");
        }
        else{
            $(this).removeClass("invalidData");
            $(this).parent().find(".label-placeholder").text("Код купона (при наличии)");
            $(this).parent().find(".label-placeholder").removeClass("invalidData_label");
            $(this).parent().find("img").css("display", "none");
        }
    });

    $('#input_coupon').focusout(function() {
        $(this).removeClass("invalidData");
            $(this).parent().find(".label-placeholder").text("Код купона (при наличии)");
            $(this).parent().find(".label-placeholder").removeClass("invalidData_label");
            $(this).parent().find("img").css("display", "none");
    });

    $('#input_coupon').focus(function() {
        if ($(this).val() != "coupon") {
            $(this).addClass("invalidData");
            $(this).parent().find(".label-placeholder").text("Такого купона не существует");
            $(this).parent().find(".label-placeholder").addClass("invalidData_label");
            $(this).parent().find("img").css("display", "block");
        }
        else{
            $(this).removeClass("invalidData");
            $(this).parent().find(".label-placeholder").text("Код купона (при наличии)");
            $(this).parent().find(".label-placeholder").removeClass("invalidData_label");
            $(this).parent().find("img").css("display", "none");
        }
    });

    $('#popup_email').keyup(function() {
        if ($(this).is(":invalid")) {
            $(this).addClass("invalidData");
            $(this).parent().find(".label-placeholder").text("Неправильный формат email");
            $(this).parent().find(".label-placeholder").addClass("invalidData_label");
            $(this).parent().find("img").css("display", "block");
        }
        else{
            $(this).removeClass("invalidData");
            $(this).parent().find(".label-placeholder").text("Email");
            $(this).parent().find(".label-placeholder").removeClass("invalidData_label");
            $(this).parent().find("img").css("display", "none");
        }
    });

    $('#popup_password').keyup(function() {
        if ($(this).is(":invalid")) {
            $(this).addClass("invalidData");
            $(this).parent().find(".label-placeholder").text("Неправильный формат пароля");
            $(this).parent().find(".label-placeholder").addClass("invalidData_label");
            $(this).parent().find("img").css("display", "block");
        }
        else{
            $(this).removeClass("invalidData");
            $(this).parent().find(".label-placeholder").text("Пароль");
            $(this).parent().find(".label-placeholder").removeClass("invalidData_label");
            $(this).parent().find("img").css("display", "none");
        }
    });

    $('#popup_password-r').keyup(function() {
        if ($(this).is(":invalid")) {
            $(this).addClass("invalidData");
            $(this).parent().find(".label-placeholder").text("Неправильный формат пароля");
            $(this).parent().find(".label-placeholder").addClass("invalidData_label");
            $(this).parent().find("img").css("display", "block");
        }
        else{
            if($('#popup_password').val() != $(this).val()){
                $(this).addClass("invalidData");
                $(this).parent().find(".label-placeholder").text("Пароли не совпадают");
                $(this).parent().find(".label-placeholder").addClass("invalidData_label");
                $(this).parent().find("img").css("display", "block");
            }
            else{
                $(this).removeClass("invalidData");
                $(this).parent().find(".label-placeholder").text("Повторите пароль");
                $(this).parent().find(".label-placeholder").removeClass("invalidData_label");
                $(this).parent().find("img").css("display", "none");
            }
            
        }
    });

    $('#popup-in_email').keyup(function() {
        if ($(this).is(":invalid")) {
            $(this).addClass("invalidData");
            $(this).parent().find(".label-placeholder").text("Неправильный формат email");
            $(this).parent().find(".label-placeholder").addClass("invalidData_label");
            $(this).parent().find("img").css("display", "block");
        }
        else{
            $(this).removeClass("invalidData");
            $(this).parent().find(".label-placeholder").text("Ваш email");
            $(this).parent().find(".label-placeholder").removeClass("invalidData_label");
            $(this).parent().find("img").css("display", "none");
        }
    });

});


function getFile() {
    var file = document.getElementById("file-input").files[0];
    console.log(file)
    if (file) {

        if (/\.(jpe?g|bmp|gif|png)$/i.test(file.name)) {
            var elPreview = document.getElementById("popup__image");
            var newImg = document.createElement("img");
            newImg.className = "preview-img";

            if (typeof file.getAsDataURL == "function") {
                if (file.getAsDataURL().substr(0, 11) == "data:image/") {
                    newImg.setAttribute("src", file.getAsDataURL());
                    $(".popup__input").hide();
                    $("#popup__image").css("display", "block");
                    $(".popup__footer_second_button").removeClass("disactiv");
                    elPreview.appendChild(newImg);
                }
            } else {
                var reader = new FileReader();
                reader.onloadend = function (evt) {
                    if (evt.target.readyState == FileReader.DONE) {
                        newImg.setAttribute("src", evt.target.result);
                        $(".popup__input").hide();
                        $("#popup__image").css("display", "block");
                        $(".popup__footer_second_button").removeClass("disactiv");
                        elPreview.appendChild(newImg);
                    }
                };

                var blob;
                if (file.slice) {
                    blob = file.slice(0, file.size);
                } else if (file.webkitSlice) {
                    blob = file.webkitSlice(0, file.size);
                } else if (file.mozSlice) {
                    blob = file.mozSlice(0, file.size);
                }
                reader.readAsDataURL(blob);
            }
        }
    }

}

function popupSend() {
    if ($(".popup__footer_second_button").hasClass("disactiv")) {

    } else {
        $(".popup__footer, .popup__content").hide();
        document.getElementById("popup__title").innerHTML = "";
        $(".popup__send").fadeIn();
    }

}

$(".delete_block__close, .delete_block__back").on("click", function () {
    $(".second_point__delete_block").fadeOut();
})
$(".second_point__delete_button").on("click", function () {
    $(".second_point__delete_block").fadeIn();
})
$(".delete_block__cancel").on("click", function () {
    $(".ex_proc__second_point").hide();
    $(".ex_proc__third_point").show();
    $(".popup__footer_second_button").addClass("disactiv");
})


$(".btn-pay").on("click", function () {
    $(".popup").fadeIn();
})

$(".popup__close").on("click", function () {
    $(".popup").fadeOut();
})

$(document).mouseup(function (e) {
    var popup = $(".popup__container");
    if (e.target != popup[0] && popup.has(e.target).length === 0) {
        $(".popup").fadeOut();
    }
})

$(document).ready(function () {
    $('.popup-switcher__body').each(function () {
        $(this).find(".popup-switcher__body__card:eq(0)").css("display", "flex");
        $(this).find(".popup-switcher__body__card:eq(1)").css("display", "flex");
        $(this).find(".popup-switcher__body__card:eq(2)").css("display", "flex");
    });
});

// POP-UP
// close popup on link
$(".popup__go-back").on('click', function () {
    $(".popup-main").fadeOut();
});
// three similiar popups
$(".btn-pay").on('click', function () {
    $(".popup-main-p1").fadeIn();
});
$(".btn-sign").on('click', function () {
    $(".popup-main-p2").fadeIn();
});
$(".popup2__footer_button").on('click', function () {
    $(".popup-main-p2").hide();
    $(".popup-main-p3").show();

});
$(".popup2__close-icon").on("click", function () {
    $(".popup-main-p2").fadeOut();
})
$(document).mouseup(function (e) {
    var popup = $(".popup2-container");
    if (e.target != popup[0] && popup.has(e.target).length === 0) {
        $(".popup-main-p2").hide();
    }
})
$(".popup3__close-icon").on("click", function () {
    $(".popup-main-p3").fadeOut();
})
$(document).mouseup(function (e) {
    var popup = $(".popup3-container");
    if (e.target != popup[0] && popup.has(e.target).length === 0) {
        $(".popup-main-p3").hide();
    }
})
$(".popup3__footer_button").on('click', function () {
    $(".popup-main-p2").show();
    $(".popup-main-p3").hide();
});

// close popup on icon
$(".popup__close-icon, .popup__footer_first_button").on('click', function () {
    $(".popup-main").fadeOut();
    $(".popup__footer, .popup__content").fadeIn();
    document.getElementById("popup__title").innerHTML = "верификация карты";
    $(".popup__send").fadeOut();
});
$(document).mouseup(function (e) {
    var container = $(".popup-container");
    if (e.target != container[0] && !container.has(e.target).length) {
        $(".popup-main").hide();
        $(".popup__footer, .popup__content").fadeIn();
        document.getElementById("popup__title").innerHTML = "верификация карты";
        $(".popup__send").fadeOut();
    }
});

$("#popup__delete_button").on("click", function () {
    $(".popup__delete_block").fadeIn();
})

$(".delete_block__close, .delete_block__back").on("click", function () {
    $(".popup__delete_block").fadeOut();
})

$(".delete_block__cancel").on("click", function () {
    $(".popup__input").fadeIn();
    $(".popup__delete_block").hide();
    $("#popup__image img").remove();
    $("#popup__image").hide();
})
