!(function (e) {
    "use strict";
    e(window).on("load", function () {
        e("#status").fadeOut(),
            e("#preloader").delay(350).fadeOut("slow"),
            e("body").delay(350).css({ overflow: "visible" });
    });
    var a = e(".video");
    a.length > 0 &&
        a.magnificPopup({
            type: "iframe",
            iframe: {
                markup:
                    '<style>.mfp-iframe-holder .mfp-content {max-width: 900px;height:500px}</style><div class="mfp-iframe-scaler" ><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe></div></div>',
            },
        });
    var s = e(".counter");
    s.length > 0 && s.counterUp({ delay: 20, time: 5e3 });
    var t = e(".parallaxie");
    t.length > 0 && t.parallaxie({ speed: 0.5 });
    var o = e(".screen");
    o.length > 0 &&
        o.owlCarousel({
            center: !0,
            loop: !0,
            nav: !1,
            autoplay: !0,
            autoplayTimeout: 2e3,
            margin: 25,
            responsive: {
                320: { items: 1, margin: 10 },
                481: { items: 3, margin: 60 },
                991: { items: 4 },
            },
        });
    var i = e(".quote");
    i.length > 0 &&
        i.owlCarousel({
            loop: !0,
            autoplay: !0,
            autoplayTimeout: 2500,
            margin: 10,
            nav: !1,
            responsive: { 300: { items: 1 }, 768: { items: 2 } },
        });
    var n = e(".app-slide");
    n.length > 0 &&
        (n.owlCarousel({
            loop: !0,
            center: !0,
            margin: 0,
            autoWidth: !0,
            nav: !1,
            dots: !0,
            ouchDrag: !1,
            mouseDrag: !1,
            dotsContainer: ".tab-list",
        }),
        e(".owl-dot").on("click", function () {
            n.trigger("to.owl.carousel", [e(this).index(), 300]);
        })),
        new WOW().init(),
        e(".subscribe form").submit(function (a) {
            a.preventDefault();
            var s = e(".subscribe form").serialize();
            e.ajax({
                type: "POST",
                url: "assets/subscribe.php",
                data: s,
                dataType: "json",
                success: function (a) {
                    0 == a.valid
                        ? (e(".success-message").hide(),
                          e(".error-message").hide(),
                          e(".error-message").html(a.message),
                          e(".error-message").fadeIn("fast", function () {
                              e(".subscribe form")
                                  .addClass("animated shake")
                                  .one(
                                      "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
                                      function () {
                                          e(this).removeClass("animated shake");
                                      }
                                  );
                          }))
                        : (e(".error-message").hide(),
                          e(".success-message").hide(),
                          e(".subscribe form").hide(),
                          e(".success-message").html(a.message),
                          e(".success-message").fadeIn("fast", function () {
                              e(".top-content").backstretch("resize");
                          }));
                },
            });
        });
    var r = e(".right-nav a, .demo a");
    if (
        (r.length > 0 &&
            r.on("click", function (a) {
                if (
                    (e(document).off("scroll"),
                    location.pathname.replace(/^\//, "") ==
                        this.pathname.replace(/^\//, "") ||
                        location.hostname == this.hostname)
                ) {
                    var s = e(this.hash),
                        t = e(".navbar").height() - 2;
                    if (
                        (s = s.length
                            ? s
                            : e("[name=" + this.hash.slice(1) + "]")).length
                    )
                        return (
                            e("html,body").animate(
                                { scrollTop: s.offset().top - t },
                                1e3
                            ),
                            !1
                        );
                }
            }),
        document.querySelectorAll(".type").length > 0)
    )
        new Typed(".type", {
            strings: ["Play & Earn Real Money"],
            typeSpeed: 40,
            backSpeed: 10,
            loop: !0,
            loopCount: 1 / 0,
        });
})(jQuery);
