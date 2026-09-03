$(document).ready(function () {


    /* ================= SCROLL ================= */

    $("#navCustomize, #heroStart").on("click", function () {

        $("html, body").animate({
            scrollTop: $("#studio").offset().top - 70
        }, 700);

    });


    /* ================= CATEGORY FILTER ================= */

    $(".category").on("click", function () {

        $(".category").removeClass("active");

        $(this).addClass("active");

        let category = $(this).data("category");

        if (category === "all") {

            $(".clothing-card")
                .stop(true, true)
                .fadeIn(250);

        } else {

            $(".clothing-card")
                .stop(true, true)
                .hide();

            $('.clothing-card[data-category="' + category + '"]')
                .stop(true, true)
                .fadeIn(250);
        }

    });


    /* ================= SEARCH ================= */

    $("#searchInput").on("keyup", function () {

        let search = $(this)
            .val()
            .toLowerCase()
            .trim();

        $(".clothing-card").each(function () {

            let name = String(
                $(this).data("name")
            ).toLowerCase();

            if (name.includes(search)) {

                $(this)
                    .stop(true, true)
                    .fadeIn(180);

            } else {

                $(this)
                    .stop(true, true)
                    .fadeOut(180);

            }

        });

    });


    /* ================= CLOTHING SELECT ================= */

    $(".clothing-card").on("click", function () {

        let category = $(this).data("category");

        let name = $(this).data("name");

        let color = $(this).data("color");


        /* TOP */

        if (category === "tops") {

            $("#modelTop")
                .stop(true, true)
                .fadeOut(120, function () {

                    if (color) {
                        $(this).css("background", color);
                    }

                    $(this).fadeIn(300);

                });

            $("#currentTop").text(name);

            showToast("👕 " + name + " added");
        }


        /* BOTTOM */

        else if (category === "bottoms") {

            $("#modelBottom")
                .stop(true, true)
                .fadeOut(120, function () {

                    if (color) {
                        $("#modelBottom div")
                            .css("background", color);
                    }

                    $(this).fadeIn(300);

                });

            $("#currentBottom").text(name);

            showToast("👖 " + name + " added");
        }


        /* SHOES */

        else if (category === "shoes") {

            let shoe = "👟";

            if (name === "Brown Loafers") {
                shoe = "👞";
            }

            if (name === "White Boots") {
                shoe = "🥾";
            }

            $("#modelShoes")
                .stop(true, true)
                .fadeOut(120, function () {

                    $(this)
                        .text(shoe)
                        .fadeIn(300);

                });

            $("#currentShoes").text(name);

            showToast("👟 " + name + " added");
        }


        /* ACCESSORIES */

        else if (category === "accessories") {

            let icon = "👜";

            let accessoryClass = "";


            if (name === "Black Sunglasses") {

                icon = "🕶️";

                accessoryClass = "acc-sunglasses";

            }

            else if (name === "Classic Hand Bag") {

                icon = "👜";

                accessoryClass = "acc-bag";

            }

            else if (name === "Fashion Cap") {

                icon = "🧢";

                accessoryClass = "acc-cap";

            }

            else if (name === "Gold Necklace") {

                icon = "📿";

                accessoryClass = "acc-necklace";

            }

            else if (name === "Classic Watch") {

                icon = "⌚";

                accessoryClass = "acc-watch";

            }

            else if (name === "Mini Shoulder Bag") {

                icon = "👝";

                accessoryClass = "acc-shoulder";

            }


            $("#modelAccessory")
                .removeClass(
                    "acc-sunglasses " +
                    "acc-bag " +
                    "acc-cap " +
                    "acc-necklace " +
                    "acc-watch " +
                    "acc-shoulder"
                )
                .addClass(accessoryClass)
                .stop(true, true)
                .fadeOut(150, function () {

                    $(this)
                        .text(icon)
                        .fadeIn(350);

                });


            showToast(icon + " " + name + " added");
        }


        /* CARD CLICK ANIMATION */

        $(this)
            .css("transform", "scale(0.97)");

        setTimeout(() => {

            $(this).css("transform", "scale(1)");

        }, 150);

    });


    /* ================= TOP COLORS ================= */

    $(".top-colors .color").on("click", function () {

        $(".top-colors .color")
            .removeClass("selected");

        $(this).addClass("selected");


        let color = $(this).data("color");

        let colorName = $(this).attr("title");


        $("#modelTop")
            .stop(true, true)
            .animate({
                opacity: 0.25
            }, 120, function () {

                $(this).css(
                    "background",
                    color
                );

                $(this).animate({
                    opacity: 1
                }, 250);

            });


        $("#topColorName").text(colorName);

        showToast("🎨 Top color: " + colorName);

    });


    /* ================= BOTTOM COLORS ================= */

    $(".bottom-colors .color").on("click", function () {

        $(".bottom-colors .color")
            .removeClass("selected");

        $(this).addClass("selected");


        let color = $(this).data("color");

        let colorName = $(this).attr("title");


        $("#modelBottom div")
            .stop(true, true)
            .animate({
                opacity: 0.25
            }, 120, function () {

                $(this).css(
                    "background",
                    color
                );

                $(this).animate({
                    opacity: 1
                }, 250);

            });


        $("#bottomColorName").text(colorName);

        showToast(
            "🎨 Bottom color: " +
            colorName
        );

    });


    /* ================= RANDOM LOOK ================= */

    $("#randomLook").on("click", function () {

        let tops =
            $(".clothing-card[data-category='tops']");

        let bottoms =
            $(".clothing-card[data-category='bottoms']");

        let shoes =
            $(".clothing-card[data-category='shoes']");


        let randomTop =
            tops.eq(
                Math.floor(
                    Math.random() * tops.length
                )
            );


        let randomBottom =
            bottoms.eq(
                Math.floor(
                    Math.random() * bottoms.length
                )
            );


        let randomShoes =
            shoes.eq(
                Math.floor(
                    Math.random() * shoes.length
                )
            );


        randomTop.trigger("click");


        setTimeout(function () {
            randomBottom.trigger("click");
        }, 150);


        setTimeout(function () {
            randomShoes.trigger("click");
        }, 300);


        $(".preview-model")
            .stop(true, true)
            .animate({
                opacity: 0.3
            }, 150)
            .animate({
                opacity: 1
            }, 350);


        showToast("✦ Random look created!");

    });


    /* ================= SAVE LOOK ================= */

    $("#saveLook").on("click", function () {

        let outfitName =
            $("#outfitName")
                .val()
                .trim();


        if (outfitName === "") {

            outfitName =
                "My Fashion Look";

        }


        let top =
            $("#currentTop").text();

        let bottom =
            $("#currentBottom").text();

        let shoes =
            $("#currentShoes").text();


        $(".empty-favorites").remove();


        let card = `

            <div class="saved-look">

                <div class="saved-look-image">

                    <div class="saved-mini-top"></div>

                    <div class="saved-mini-bottom"></div>

                    <div class="saved-mini-shoes">
                        👟
                    </div>

                </div>


                <div class="saved-look-info">

                    <h3>
                        ${outfitName}
                    </h3>

                    <p>
                        👕 ${top}
                    </p>

                    <p>
                        👖 ${bottom}
                    </p>

                    <p>
                        👟 ${shoes}
                    </p>


                    <button class="delete-look">
                        Remove
                    </button>

                </div>

            </div>

        `;


        $("#favoritesContainer")
            .prepend(card);


        $("#outfitName")
            .val("");


        showToast(
            "♡ Look saved successfully!"
        );

    });


    /* ================= DELETE ================= */

    $(document).on(
        "click",
        ".delete-look",
        function () {

            let card =
                $(this).closest(".saved-look");


            card.fadeOut(300, function () {

                $(this).remove();


                if (
                    $(".saved-look").length === 0
                ) {

                    $("#favoritesContainer")
                        .html(`

                            <div class="empty-favorites">

                                <div class="empty-icon">
                                    ♡
                                </div>

                                <h3>
                                    No saved looks yet
                                </h3>

                                <p>
                                    Create an outfit and
                                    save it here.
                                </p>

                            </div>

                        `);

                }

            });


            showToast(
                "Look removed"
            );

        }
    );


    /* ================= RESET ================= */

    $("#resetLook").on("click", function () {

        $("#modelTop")
            .css(
                "background",
                "#b96c83"
            );


        $("#modelBottom div")
            .css(
                "background",
                "#3f5776"
            );


        $("#currentTop")
            .text("Rose Knit Top");


        $("#currentBottom")
            .text("Blue Jeans");


        $("#currentShoes")
            .text("Classic Sneakers");


        $("#modelShoes")
            .text("👟");


        $("#modelAccessory")
            .stop(true, true)
            .fadeOut(200);


        $(".top-colors .color")
            .removeClass("selected");

        $(".top-colors .color")
            .first()
            .addClass("selected");


        $(".bottom-colors .color")
            .removeClass("selected");

        $(".bottom-colors .color")
            .first()
            .addClass("selected");


        $("#topColorName")
            .text("Rose");


        $("#bottomColorName")
            .text("Denim");


        $("#outfitName")
            .val("");


        $(".preview-model")
            .stop(true, true)
            .animate({
                opacity: 0.3
            }, 150)
            .animate({
                opacity: 1
            }, 400);


        showToast(
            "↻ Outfit reset"
        );

    });


    /* ================= HEART HOVER ================= */

    $(document).on(
        "mouseenter",
        ".product-heart",
        function () {

            $(this).text("♥");

        }
    );


    $(document).on(
        "mouseleave",
        ".product-heart",
        function () {

            $(this).text("♡");

        }
    );


    /* ================= CARD HOVER ================= */

    $(".clothing-card").hover(

        function () {

            $(this)
                .find(".product-visual")
                .css(
                    "transform",
                    "scale(1.03)"
                );

        },

        function () {

            $(this)
                .find(".product-visual")
                .css(
                    "transform",
                    "scale(1)"
                );

        }

    );


    /* ================= TOAST ================= */

    function showToast(message) {

        $("#toast")
            .stop(true, true)
            .text(message)
            .fadeIn(200)
            .delay(1500)
            .fadeOut(350);

    }


    console.log(
        "StyleStudio Dark Theme loaded ✦"
    );

});