jQuery(function (e) {
    e(function () {
        if (e('div[id^="lightgallery"]').length) {
            e('div[id^="lightgallery"]').lightGallery({galleryId: 1})
        }
        if (e("input.phone_number").length) {
            e("input.phone_number").inputmask("+9(999)999-99-99")
        }
        if (e("#country_topbg").length) {
            e("body").addClass("greybg");
            e(".top").addClass("bg_top country").css({"background-image": "url(" + e("#country_topbg").val() + ")"});
            e(".content").addClass("country");
            e(".page_caption").appendTo(".top_flex")
        }
        if (e("#franshiza_topbg").length) {
            e(".top").addClass("bg_top main franshiza").css({"background-image": "url(" + e("#franshiza_topbg").val() + ")"})
        }
        if (e("#pasport_page").length) {
            e(".top").addClass("bg_top top_passport")
        }
        if (e("#blog_topbg").length) {
            e(".top").addClass("bg_top blog").css({"background-image": "url(" + e("#blog_topbg").val() + ")"});
            e("body").addClass("greybg")
        }
        if (e("#blogitem_topbg").length) {
            e(".top").addClass("bg_top blog").css({"background-image": "url(" + e("#blogitem_topbg").val() + ")"});
            if (e(".blog_item_title").length) {
                e(".blog_item_title").clone().appendTo(".top_flex")
            }
        }
        if (e("#pressblog_topbg").length) {
            e(".top").addClass("bg_top press-blog").css({"background-image": "url(" + e("#pressblog_topbg").val() + ")"});
            e(".page_caption").appendTo(".top_flex")
        }
    });
    e(function () {
        e("body").on("click", 'a[href="#callback"]', function () {
            var g = e(this);
            if (g.data("action") && "undefined" !== g.data("action")) {
                e("#popup_form_msg_type").val(e("#popup_form_msg_type").data("default") + "(" + g.data("action") + ")")
            }
            e("#popup_form_callback").find(".not_send").show().next(".send_success").hide();
            d(e("#_dark"));
            e("#_dark").fadeTo(500, 0.6);
            f(e("#popup_form_callback"));
            e(e("#popup_form_callback")).fadeTo(500, 1);
            return false
        });
        e("body").on("click", ".popup_close_btn", function () {
            e("#_dark").fadeTo(500, 0, function () {
                e(this).hide();
                e("body").css("overflow", "inherit")
            });
            e("#popup_form_callback").fadeTo(500, 0, function () {
                e(this).hide()
            });
            e("#popup_form_order").fadeTo(500, 0, function () {
                e(this).hide()
            })
        })
    });
    e(function () {
        e("body").on("click", "a.order_viza, a.orderviza_btn", function () {
            var g = e(this);
            if (g.data("action") && "undefined" !== g.data("action")) {
                e("#popup_order_msg_type").val(g.data("action"))
            }
            if (g.data("kuda") && "undefined" !== g.data("kuda")) {
                e("#popup_order_msg_type").val(e("#popup_order_msg_type").data("default") + g.data("kuda"));
                e("#popup_order_subtitle").text(e("#popup_order_subtitle").data("default") + g.data("kuda"))
            }
            e("#popup_form_order").find(".not_send").show().next(".send_success").hide();
            d(e("#_dark"));
            e("#_dark").fadeTo(500, 0.6);
            f(e("#popup_form_order"));
            e(e("#popup_form_order")).fadeTo(500, 1);
            return false
        })
    });
    e(function (g) {
        if (g.browser.msie) {
            g("body").find("input[type='text']").each(function () {
                var h = g(this).attr("placeholder");
                g(this).attr("value", h).css("color", "#ccc")
            }).focusin(function () {
                var h = g(this).attr("placeholder");
                if (g(this).val() == h) {
                    g(this).attr("value", "").css("color", "#ccc")
                }
            }).focusout(function () {
                var h = g(this).attr("placeholder");
                if (g(this).val() == "") {
                    g(this).attr("value", h).css("color", "#a0a0a0")
                }
            })
        }
        g("body").on("click", "a.btn_send", function () {
            var l = g(this);
            var h = 0;
            var p = 0;
            var k = "";
            var s;
            var t = "Необходимо заполнить обязательные поля!";
            if (g("#logo").length) {
                s = g("#logo").attr("href")
            } else {
                s = document.location.href
            }
            var j = s + "?tmpl=callback&order_done=1";
            var i = "";
            var q = new Object();
            var n = new Object();
            var v = "";
            if (l.hasClass("popup_btn")) {
                h = 1
            }
            if (l.closest("#popup_form_callback").length || l.closest("#popup_form_order").length) {
                h = 2
            }
            if (l.closest("div.userfields").find("input[name=formname]").length) {
                i = l.closest("div.userfields").find("input[name=formname]").val()
            }
            if (l.closest("div.mod_why_form").length && l.closest("div.mod_why_form").find("input[name=gtm_event]").length) {
                v = l.closest("div.mod_why_form").find("input[name=gtm_event]").val()
            } else {
                v = l.closest("div.userfields").find("input[name=gtm_event]").val()
            }
            if (!v) {
                v = "feedback_call"
            }
            var u = "";
            var m = "";
            var o = "";
            var r = "";
            l.closest("div.userfields").find(".error_msg").remove();
            l.closest("div.userfields").find("input, textarea").each(function () {
                if (g(this)) {
                    var w = g(this).attr("name");
                    var x = g(this).val();
                    if (g(this).is(".require")) {
                        if (g.browser.msie) {
                            var y = g(this).attr("placeholder");
                            if (x == y) {
                                g(this).addClass("error_field");
                                if (g(this).closest(".incity_select").length) {
                                    g(this).closest(".incity_select").addClass("error_field")
                                }
                                p = 1
                            }
                        } else {
                            if (g(this).attr("type") == "email") {
                                if (x.length == 0 || (x.match(/.+?\@.+/g) || []).length !== 1) {
                                    p = 1;
                                    g(this).addClass("error_field");
                                    g(this).parent().append('<span class="error_msg">Данные введены неверно</span>')
                                } else {
                                    g(this).removeClass("error_field");
                                    k += w + "=" + encodeURIComponent(x) + "&";
                                    g(this).parent().append('<span class="success_msg">Данные введены корректно</span>')
                                }
                            } else {
                                if (x == "") {
                                    p = 1;
                                    if (g(this).closest(".incity_select").length) {
                                        g(this).closest(".incity_select").addClass("error_field")
                                    }
                                    g(this).addClass("error_field");
                                    if (g(this).is("input") || g(this).is("textarea")) {
                                        if (!g(this).parent("label").length) {
                                            g(this).wrap('<label class="single_label" />').parent().append('<span class="error_msg">Данные введены неверно</span>')
                                        } else {
                                            g(this).parent().append('<span class="error_msg">Данные введены неверно</span>')
                                        }
                                    }
                                } else {
                                    if (g(this).hasClass("phone_number")) {
                                        if (!g(this).inputmask("isComplete")) {
                                            p = 1;
                                            g(this).addClass("error_field");
                                            if (!g(this).parent("label").length) {
                                                g(this).wrap('<label class="single_label" />').parent().append('<span class="error_msg">Данные введены неверно</span>')
                                            } else {
                                                g(this).parent().append('<span class="error_msg">Данные введены неверно</span>')
                                            }
                                        } else {
                                            g(this).removeClass("error_field");
                                            k += w + "=" + encodeURIComponent(x) + "&";
                                            if (g(this).is("input") || g(this).is("textarea")) {
                                                if (!g(this).parent("label").length) {
                                                    g(this).wrap("<label />").parent().append('<span class="success_msg">Данные введены корректно</span>')
                                                } else {
                                                    g(this).parent().append('<span class="success_msg">Данные введены корректно</span>')
                                                }
                                            }
                                        }
                                    } else {
                                        g(this).removeClass("error_field");
                                        k += w + "=" + encodeURIComponent(x) + "&";
                                        if (g(this).is("input") || g(this).is("textarea")) {
                                            if (!g(this).parent("label").length) {
                                                g(this).wrap("<label />").parent().append('<span class="success_msg">Данные введены корректно</span>')
                                            } else {
                                                g(this).parent().append('<span class="success_msg">Данные введены корректно</span>')
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else {
                        k += w + "=" + encodeURIComponent(x) + "&"
                    }
                    if (l.closest("div.userfields").find("input[name=formname]").length) {
                        if (w == "name") {
                            q.name = x;
                            u = x
                        }
                        if (w == "phone") {
                            q.phone = x;
                            m = x
                        }
                        if (w == "email") {
                            q.email = x;
                            o = x
                        }
                        if (w == "text") {
                            r = x
                        }
                    }
                }
            });
            l.closest("div.userfields").find("select").each(function () {
                g(this).closest(".incity_select").removeClass("error_field");
                k += g(this).attr("name") + "=" + g.trim(g(this).find("option:selected").val()) + "&";
                k += "chosen_city=" + g.trim(g(this).find("option:selected").text()) + "&";
                k += "incityCode=" + g.trim(g(this).find("option:selected").val()) + "&"
            });
            if (!p) {
                k += "&source=14";
                l.hide().after('<span class="sending_msg">Отправка заявки ...</span>');
                g.ajax({
                    url: s + "?tmpl=clear", data: k, type: "POST", success: function (w) {
                        dataLayer.push({event: v});
                        if (v == "feedback_question") {
                            if (!o) {
                                o = ""
                            }
                            dataLayer.push({
                                event: "crto_transactionpage",
                                crto: {email: o, transactionid: w, products: [{id: v}]}
                            })
                        } else {
                            dataLayer.push({
                                event: "crto_transactionpage",
                                crto: {email: "", transactionid: w, products: [{id: v}]}
                            })
                        }
                        if (l.attr("id") == "agencyform") {
                            ga("send", "event", "tourfirm", "ok")
                        }
                        window.ga = window.ga || function () {
                            (ga.q = ga.q || []).push(arguments)
                        };
                        ga.l = +new Date;
                        ga("create", "UA-76506294-1", "auto");
                        ga("require", "ecommerce");
                        ga("ecommerce:addTransaction", {id: w, affiliation: "Заявка на визу"});
                        ga("ecommerce:send");
                        k += "&nd=send_ajax";
                        k += "&cookieid=" + g.trim(w);
                        g.ajax({
                            url: s + "bitrix24/send.php", data: k, type: "POST", success: function () {
                                l.show().next("span").remove();
                                if (l.closest(".franshiza_banner").length) {
                                    g(".franshiza_banner").remove();
                                    return false
                                }
                                if (h > 0) {
                                    if (l.closest(".not_send").length) {
                                        l.closest(".not_send").hide().next(".send_success").show()
                                    } else {
                                        var y = window.location.href;
                                        window.location.assign(y + "&order_done=1")
                                    }
                                } else {
                                    var x = g(document).width();
                                    if (x > 559) {
                                        x = 560
                                    } else {
                                        x = x - 30;
                                        j += "&mobile=1"
                                    }
                                    if (l.hasClass("btn_quiz")) {
                                        l.closest(".popup_quiz").remove()
                                    }
                                    hs2.htmlExpand(null, {objectType: "iframe", src: j, width: x})
                                }
                            }
                        })
                    }
                })
            }
            return false
        });
        g("body").on("click", "a.btn_send_comment", function () {
            var n = g(this);
            var l = 0;
            var j = 0;
            var o = "";
            var k = document.location.href;
            var h = k + "?tmpl=callback&comment_sent=1";
            var i = "Чтобы оставить отзыв оцените нас и заполните текстовое поле!";
            var m = n.closest("div.userfields").find("input[name=gtm_event]").val();
            n.closest("div.userfields").find("input, textarea").each(function () {
                if (g(this)) {
                    var p = g(this).attr("name");
                    var q = g(this).val();
                    if (g(this).is(".require")) {
                        if (g.browser.msie) {
                            var r = g(this).attr("placeholder");
                            if (q == r) {
                                g(this).addClass("error_field");
                                l = 1
                            }
                        } else {
                            if (q == "") {
                                l = 1;
                                g(this).addClass("error_field")
                            } else {
                                g(this).removeClass("error_field");
                                o += p + "=" + encodeURIComponent(q) + "&"
                            }
                        }
                    } else {
                        if (g(this).attr("id") == "user_rating") {
                            if (q == 0) {
                                j = 1;
                                g(".popup_stars").addClass("error")
                            } else {
                                j = 0;
                                g(".popup_stars").removeClass("error");
                                o += p + "=" + encodeURIComponent(q) + "&"
                            }
                        } else {
                            o += p + "=" + encodeURIComponent(q) + "&"
                        }
                    }
                }
            });
            if (l || j) {
                alert(i)
            } else {
                n.replaceWith('<span class="sending_msg">Отправка заявки ...</span>');
                g.ajax({
                    url: k + "?tmpl=clear", data: o, type: "POST", success: function (p) {
                        n.show().next("span").remove();
                        dataLayer.push({event: m});
                        dataLayer.push({
                            event: "crto_transactionpage",
                            crto: {email: "", transactionid: p, products: [{id: m}]}
                        });
                        g("#_dark").fadeTo(500, 0, function () {
                            g(this).hide();
                            g("body").css("overflow", "inherit")
                        });
                        g("#social_auth").fadeTo(500, 0, function () {
                            g(this).hide()
                        });
                        document.location.reload()
                    }
                })
            }
            return false
        })
    });
    e(function () {
        e("body").on("click", "div.country_nav a", function () {
            var h = e(this).attr("href");
            var g = 0;
            e("div.country_nav a.active").removeClass("active");
            e(this).addClass("active");
            e("div.country_vizy.active").removeClass("active");
            e(h).addClass("active").siblings(".country_item").removeClass("active");
            g = e(h).offset().top;
            e("html:not(:animated),body:not(:animated)").animate({scrollTop: g}, 300);
            return false
        });
        e("body").on("click", "a.confidential", function () {
            window.open(document.location.protocol + "//" + document.location.host + "/images/policy.pdf", "_blank");
            return (false)
        });
        e(window).scroll(function () {
            var g = e(window).scrollTop();
            if (e(window).width() > 959) {
                if (g > e(".toppanel").height() * 1) {
                    if (!e(".toppanel.sticky").length) {
                        e(".toppanel").addClass("sticky")
                    }
                } else {
                    e(".toppanel").removeClass("sticky")
                }
            }
            if (g > 150) {
                e(".bottom_panel").addClass("sticky")
            } else {
                e(".bottom_panel").removeClass("sticky")
            }
        });
        if (e(".bottom_panel").length) {
            e(".header_left .mod_geolocation .top_phones a").clone().appendTo(".bottom_phone")
        }
        e("body").on("click", ".bottom_back_totop a", function () {
            e("body,html").animate({scrollTop: 0}, 500);
            return false
        })
    });

    function f(g) {
        var h = (e(window).height() / 2 - g.height() / 2) + e(window).scrollTop();
        if (h < 0) {
            h = 45
        }
        g.css("top", (h + "px"));
        g.css("left", (e(document).width() / 2 - g.width() / 2) + "px")
    }

    function d(g) {
        g.width(e(document).width());
        g.height(e(document).height() + 250)
    }

    e(function () {
        e("body").on("click", 'a[href="#city"]', function () {
            overlayShow();
            e("#popup_select_city").slideDown(function () {
                var h = e("#popup_select_city").find(".city_list");
                h.jScrollPane({showArrows: false, verticalGutter: 0});
                var i = h.data("jsp");
                i.scrollToElement(".active", true)
            });
            if (e(this).closest(".prices").length) {
                e("body,html").animate({scrollTop: 0}, 800)
            }
            return false
        });
        e("body").on("click", ".city_link a", function () {
            var j = "г. " + e(this).attr("href").replace("#", "");
            var h;
            var i = "set_city=" + j;
            if (e("#logo").length) {
                h = e("#logo").attr("href") + "?tmpl=callback"
            } else {
                h = document.location.href + "?tmpl=callback"
            }
            e.ajax({
                url: h, type: "POST", data: i, success: function (k) {
                    window.top.location.reload()
                }
            });
            return false
        });
        e("body").on("click", ".filial_link a, .contact_link a", function () {
            if (!e(this).closest(".vacancy_title").length) {
                var i = e(this).attr("href");
                var k = "г. " + e(this).text();
                var h;
                var j = "set_city=" + k;
                if (e("#logo").length) {
                    h = e("#logo").attr("href") + "?tmpl=callback"
                } else {
                    h = document.location.href + "?tmpl=callback"
                }
                e.ajax({
                    url: h, type: "POST", data: j, success: function (l) {
                        window.location.assign(i)
                    }
                });
                return false
            }
        });
        e("body").on("click", "a.set_city", function () {
            var j = "г. " + e(this).parent("div").find("input").val();
            var h;
            var i = "set_city=" + j;
            if (e("#logo").length) {
                h = e("#logo").attr("href") + "?tmpl=callback"
            } else {
                h = document.location.href + "?tmpl=callback"
            }
            e.ajax({
                url: h, type: "POST", data: i, success: function (k) {
                    top.window.location.reload()
                }
            });
            return false
        });
        e("body").on("click", "a.confirm_no", function () {
            e("div.popup_confirm").remove();
            e("#popup_select_city").slideToggle(function () {
                e("#popup_select_city").find(".city_list").jScrollPane({showArrows: false, verticalGutter: 0})
            });
            return false
        });
        e("body").on("click", "a.confirm_yes", function () {
            var k = e("#geo_city").html();
            var i = e("#geo_city").data("cityid");
            var h;
            var j = "set_city=" + k;
            if (e("#logo").length) {
                h = e("#logo").attr("href") + "?tmpl=callback"
            } else {
                h = document.location.href + "?tmpl=callback"
            }
            e("#popup_form_city_name").val(k);
            e("#popup_form_city_id").val(i);
            e("#popup_form_city_name2").val(k);
            e("#popup_form_city_id2").val(i);
            e.ajax({
                url: h, type: "POST", data: j, success: function (l) {
                    e("div.popup_confirm").remove();
                    overlayHide()
                }
            });
            return false
        });
        if (e("#city_autocomplete").length) {
            var g = [];
            e("div.city_list").find(".city_link").each(function () {
                g.push(e(this).children("a").html())
            })
        }
        e("body").click(function (h) {
            if (e(h.target).closest(".popup_confirm").length == 0) {
                e(".popup_confirm").css("display", "none");
                overlayHide()
            }
        });
        e("body").click(function (h) {
            if (e(h.target).closest("#popup_select_city").length == 0) {
                e("#popup_select_city").css("display", "none");
                overlayHide()
            }
        })
    });
    e(function () {
        e("div.incity_select select").change(function () {
            var g = e(this).find("option:selected").text();
            e(this).prev("span.styled").html(g).attr("data-citycode", e(this).find("option:selected").val())
        })
    });
    e(function () {
        e(".input-wrapper input[type=radio]").change(function () {
            var k = e(this);
            var i = document.location.href;
            var l = "calc_pasport=1";
            if (k.is(":checked")) {
                k.closest(".filter_param").find(".input-wrapper.checked").removeClass("checked");
                k.closest(".input-wrapper").addClass("checked")
            }
            var j = e("#pasport_propiska").find("input[type=radio]:checked").val();
            var g = e("#pasport_age").find("input[type=radio]:checked").val();
            var h = e("#pasport_type").find("input[type=radio]:checked").val();
            l += "&show_propiska=" + j + "&show_age=" + g + "&show_type=" + h;
            e.ajax({
                url: i + "?tmpl=clear", data: l, type: "POST", success: function (m) {
                    e("#calc_table").html(m)
                }
            })
        });
        e(".pasrort_select select").change(function () {
            var g = e(this).find("option:selected").text();
            e(this).prev("span.styled").html(g)
        });
        e("body").on("click", ".pasport_calculate", function () {
            var i = e(this);
            var g = i.attr("href");
            var k = "calc_pasport=1";
            var j = "";
            i.closest(".pasport_selection").find("select").each(function () {
                k += "&" + e(this).attr("name") + "=" + e(this).find("option:selected").val()
            });
            if (e("#pasport_type").length) {
                if (e("#pasport_type").find("option:selected").val() == "bio") {
                    j += "Биометрический загранпаспорт<br>"
                } else {
                    if (e("#pasport_type").find("option:selected").val() == "former") {
                        j += "Загранпаспорт старого образца<br>"
                    } else {
                        j += "Загранпаспорт обоих типов<br>"
                    }
                }
            }
            if (e("#pasport_reg").length) {
                if (e("#pasport_reg").find("option:selected").val() == "msk") {
                    j += "в Москве "
                } else {
                    if (e("#pasport_reg").find("option:selected").val() == "mo") {
                        j += "в Московской области "
                    } else {
                        j += "в другом регионе "
                    }
                }
            }
            if (e("#pasport_age").length) {
                if (e("#pasport_age").find("option:selected").val() == "more18") {
                    j += "для лица старше 18 лет"
                } else {
                    if (e("#pasport_age").find("option:selected").val() == "middle") {
                        j += "для лица 14 - 18 лет"
                    } else {
                        j += "для лица младше 14 лет"
                    }
                }
                var h = "#docs_" + e("#pasport_age").find("option:selected").val();
                e(".pasport_docs").find(".docs_list.active").removeClass("active");
                e(h).addClass("active")
            }
            e.ajax({
                url: g + "?tmpl=clear", data: k, type: "POST", success: function (l) {
                    e("#pasport_table_title").html(j);
                    e("#calc_table").html(l);
                    e("html:not(:animated),body:not(:animated)").animate({scrollTop: e("#pasport_table_title").offset().top - e(".toppanel ").outerHeight(true)}, 300)
                }
            });
            return false
        });
        e("#pasport_age input[type=radio]").change(function () {
            var h = e(this);
            if (h.is(":checked")) {
                var g = "#docs_" + h.val();
                e(".pasport_docs").find(".docs_list.active").removeClass("active");
                e(g).addClass("active")
            }
        });
        e(".country_radio input[type=radio]").change(function () {
            var g = e(this);
            if (g.is(":checked")) {
                g.closest(".country_radio").siblings(".checked").removeClass("checked");
                g.closest(".country_radio").addClass("checked")
            }
            if (g.val() == 1) {
                e(".with_hotel").css({display: "flex"}).show().next(".without_hotel").css({display: "flex"}).hide()
            } else {
                e(".with_hotel").css({display: "flex"}).hide().next(".without_hotel").css({display: "flex"}).show()
            }
        })
    });
    e(".vacancy_list li a").click(function () {
        var h = e(this).attr("href");
        var g = e(h).offset().top;
        e("html:not(:animated),body:not(:animated)").animate({scrollTop: g}, 300);
        return false
    });
    e(function () {
        n();
        e("body").on("click", ".ico_mobmenu", function () {
            e(this).toggleClass("open");
            if (e(".mobile_menu").is(":visible")) {
                e(".mobile_menu").hide();
                e("body,html").css({overflow: "inherit"})
            } else {
                e(".mobile_menu").css({display: "block"}).show();
                e("body,html").css({overflow: "hidden"})
            }
        });
        e("body").on("click", ".mobile_menu", function (t) {
            if (e(window).width() < 960) {
                if (e(t.target).closest(".mobile_menu li a").length == 0) {
                    e(".mobile_menu").css("display", "none");
                    e("body,html").css({overflow: "inherit"});
                    e(".ico_mobmenu").removeClass("open")
                }
            }
        });
        e(window).resize(function () {
            n()
        });

        function n() {
            if (e(window).width() < 960) {
                if (!e(".ico_mobmenu").length) {
                    e("body").append('<div class="ico_mobmenu"></div>');
                    if (!e(".top").is(".bg_top")) {
                        e(".ico_mobmenu").addClass("dark_icon")
                    }
                }
                if (!e(".mobile_menu").length) {
                    e("div.toppanel ul.lastmenu").clone().addClass("mobile_menu").appendTo("body");
                    if (!e(".fromright").length) {
                        e(".header_right").children("ul.menu").children("li").reverse().each(function () {
                            e(this).clone().addClass("fromright").prependTo(".mobile_menu")
                        })
                    }
                    if (!e(".fromtopphones").length) {
                        e(".header_left").find(".top_phones").clone().addClass("fromtopphones").appendTo(".mobile_menu")
                    }
                }
                if (!e(".mobile_cabinet").length) {
                    e(".cabinet_menu").children("li").addClass("mobile_cabinet").prependTo(".mobile_menu")
                }
                if (e(".press_slider").length) {
                    e(".press_slider ul li").css({width: e(window).width() * 0.33})
                }
            } else {
                if (e(".mobile_cabinet").length) {
                    e(".mobile_cabinet").removeClass("mobile_cabinet").appendTo(".cabinet_menu")
                }
                e(".mobile_menu").remove();
                if (e(".press_slider").length) {
                    e(".press_slider ul li").css({width: "280px"})
                }
            }
            if (e(".popular_bg_left").length && e(".popular_bg_right").length) {
                var x = e(window).width();
                var w = e(".centerBlock").width();
                var A = (x - w) / 2;
                e(".popular_bg_left, .popular_bg_right").css({width: A - 40})
            }
            if (e(window).width() > 1360 && e(window).width() < 1920) {
                if (e(".bg_top.main").length) {
                    e(".bg_top.main").css({height: e(window).outerHeight(true)});
                    if (e(".facts_bg_inner").hasClass("franshiza")) {
                        e(".mainform").css({height: e(window).outerHeight(true) - (e(".toppanel").outerHeight(true) + e(".header").outerHeight(true))})
                    }
                }
            }
            if (e(".fci_slider").length) {
                if (e(window).width() < 810) {
                    e(".franshiza_comment_item").css({width: e(window).width()})
                }
            }
            if (e(".wedo_list").length || e(".franshiza_numbers_list").length || e(".franshiza_brand_list").length) {
                var u = e(".wedo_list");
                var C = e(".franshiza_numbers_list");
                var t = e(".franshiza_brand_list");
                if (e(window).width() < 601) {
                    u.slick({
                        autoplay: false,
                        speed: 500,
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true,
                        waitForAnimate: false
                    });
                    C.slick({
                        autoplay: false,
                        speed: 500,
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true,
                        waitForAnimate: false
                    });
                    t.slick({
                        autoplay: false,
                        speed: 500,
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true,
                        waitForAnimate: false
                    })
                } else {
                    if (u.hasClass("slick-slider")) {
                        u.slick("unslick")
                    }
                    if (C.hasClass("slick-slider")) {
                        C.slick("unslick")
                    }
                    if (t.hasClass("slick-slider")) {
                        t.slick("unslick")
                    }
                    if (e(".fci_text").length) {
                        e(".fci_text").bind("jsp-scroll-y", function (F, E, G, D) {
                            if (D) {
                                e(this).closest(".franshiza_comment_item").find(".fci_bg").hide()
                            } else {
                                e(this).closest(".franshiza_comment_item").find(".fci_bg").show()
                            }
                        }).jScrollPane({showArrows: false})
                    }
                }
            }
            if (e(".cities_alphabet").length) {
                var y = e(".cities_alphabet");
                var v = y.closest(".centerBlock");
                if (e(window).width() < 601) {
                    y.sly({
                        horizontal: 1,
                        itemNav: "basic",
                        smart: 1,
                        activateOn: "",
                        mouseDragging: 1,
                        touchDragging: 1,
                        releaseSwing: 1,
                        scrollBar: v.find(".sities_scrollbar"),
                        scrollBy: 1,
                        speed: 300,
                        elasticBounds: 1,
                        easing: "easeOutExpo",
                        dragHandle: 1,
                        dynamicHandle: 1,
                        clickBar: 1
                    })
                } else {
                    y.sly(false)
                }
            }
            if (e(".calc_passport_wrapper").length) {
                var B = e(".calc_passport_wrapper");
                var z = B.closest(".centerBlock");
                if (e(window).width() < 601) {
                    B.sly({
                        horizontal: 1,
                        itemNav: "basic",
                        smart: 1,
                        activateOn: "",
                        mouseDragging: 1,
                        touchDragging: 1,
                        releaseSwing: 1,
                        scrollBar: z.find(".sities_scrollbar"),
                        scrollBy: 1,
                        speed: 300,
                        elasticBounds: 1,
                        easing: "easeOutExpo",
                        dragHandle: 1,
                        dynamicHandle: 1,
                        clickBar: 1
                    })
                } else {
                    B.sly(false)
                }
            }
        }

        e("body").on("click", ".fci_arrow", function () {
            e(this).hide().closest(".franshiza_comment_item").find(".fci_text").css({height: "auto"}).next(".fci_bg").hide()
        });
        if (e(".country_nav a").length) {
            var l = Math.ceil(e(".country_nav a").length / 6);
            var j = e(".country_nav");
            while (j.children(":not(.country_col)").length) {
                j.children(":not(.country_col):lt(" + l + ")").wrapAll('<div class="country_col">')
            }
            if (e("#country_autocomplete").length) {
                var g = [];
                e(".country_nav").find("a").each(function () {
                    g.push(e(this).text())
                });
                e("#country_autocomplete").autocomplete({source: g})
            }
        }
        if (e(".popular_city_nav a").length) {
            var l = Math.ceil(e(".popular_city_nav a").length / 6);
            var j = e(".popular_city_nav");
            while (j.children(":not(.country_col)").length) {
                j.children(":not(.country_col):lt(" + l + ")").wrapAll('<div class="country_col">')
            }
        }
        if (e("#country_autocomplete2").length) {
            var k = [];
            e(".country_list").find("a").each(function () {
                k.push(e(this).text())
            });
            e("#country_autocomplete2").autocomplete({source: k})
        }
        e(".country_item h3 a").click(function () {
            var t = e(this);
            t.closest(".country_item").toggleClass("active").siblings(".active").removeClass("active");
            return false
        });
        e("#country_autocomplete").keyup(function (v) {
            if (v.keyCode == 13) {
                v.preventDefault();
                var w = e(this).val();
                var u, t;
                e(".country_nav").find("a").each(function () {
                    if (e(this).text() == w) {
                        u = e(this)
                    }
                });
                document.location.assign(u.attr("href"));
                return false
            }
        });
        e("#country_autocomplete2").keyup(function (t) {
            if (t.keyCode == 13) {
                var u = e(this).val();
                e(".country_main_list").find("a").each(function () {
                    if (e(this).text() == u) {
                        elem = e(this)
                    }
                });
                e("#main_select_country").text(u).attr("data-link", elem.attr("href"));
                e("#popup_search_country").slideToggle();
                return false
            }
        });
        e("body").on("click", "#main_select_country", function () {
            e("#popup_search_country").slideToggle(function () {
                e("#popup_search_country").find(".country_main_list").jScrollPane({
                    showArrows: false,
                    verticalGutter: 0
                })
            });
            return false
        });
        e("body").on("click", ".country_main_list a", function () {
            var t = e(this).text();
            e("#main_select_country").text(t).attr("data-link", e(this).attr("href"));
            e("#popup_search_country").slideToggle();
            return false
        });
        if (e("#popup_select_city").length) {
            e("#city_autocomplete").keyup(function (v) {
                if (v.keyCode == 13) {
                    return false
                } else {
                    var u = e(this).val().toLowerCase();
                    e(".city_link").each(function () {
                        var x = e(this).html().toLowerCase();
                        if (x.indexOf(u) + 1) {
                            e(this).removeClass("hidden")
                        } else {
                            e(this).addClass("hidden")
                        }
                    });
                    var t = e("#popup_select_city").find(".city_list");
                    t.jScrollPane({showArrows: false, verticalGutter: 0});
                    var w = t.data("jsp");
                    w.scrollToY(0)
                }
            });
            e("#city_autocomplete").change(function (u) {
                u.preventDefault();
                var y = e(this).val();
                var x = 0;
                e(".city_link").each(function () {
                    if (e(this).text() == y) {
                        x = 1
                    }
                });
                if (x) {
                    var w = "г. " + y;
                    var t;
                    var v = "set_city=" + w;
                    if (e("#logo").length) {
                        t = e("#logo").attr("href") + "?tmpl=callback"
                    } else {
                        t = document.location.href + "?tmpl=callback"
                    }
                    e.ajax({
                        url: t, type: "POST", data: v, success: function (z) {
                            window.top.location.reload()
                        }
                    })
                }
                return false
            })
        }
        e("body").on("click", ".go_to_country", function () {
            var u = e(this);
            var t = e("#main_select_country").data("link");
            if (t) {
                document.location.assign(t)
            } else {
                e(".choose_country").fadeIn();
                setTimeout(function () {
                    e(".choose_country").fadeOut()
                }, 3000)
            }
            return false
        });
        var q = e(".facts_bg_inner");
        if (q.length) {
            q.slick({
                autoplay: true,
                speed: 500,
                arrows: false,
                fade: true,
                autoplaySpeed: 8000,
                dots: true,
                waitForAnimate: false
            })
        }
        if (e(".services_inner").length) {
            e(".services_inner").slick({
                autoplay: false,
                speed: 500,
                slidesToShow: 4,
                slidesToScroll: 4,
                autoplaySpeed: 7000,
                dots: true,
                responsive: [{breakpoint: 1279, settings: {slidesToShow: 3, slidesToScroll: 3}}, {
                    breakpoint: 959,
                    settings: {slidesToShow: 2, slidesToScroll: 2}
                }, {
                    breakpoint: 600,
                    settings: {slidesToShow: 1, slidesToScroll: 1, arrows: false, variableWidth: false}
                }]
            })
        }
        if (e(".press_inner").length) {
            e(".press_inner").slick({
                autoplay: false,
                speed: 500,
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplaySpeed: 7000,
                dots: true,
                variableWidth: false,
                responsive: [{breakpoint: 600, settings: {slidesToShow: 1, slidesToScroll: 1, arrows: false}}]
            })
        }
        if (e(".popular_inner").length) {
            var i = e(".popular_inner");
            var s = i.closest(".popular");
            i.sly({
                horizontal: 1,
                itemNav: "basic",
                smart: 1,
                activateOn: "",
                mouseDragging: 1,
                touchDragging: 1,
                releaseSwing: 1,
                scrollBar: s.find(".scrollbar"),
                scrollBy: 1,
                speed: 300,
                elasticBounds: 1,
                easing: "easeOutExpo",
                dragHandle: 1,
                dynamicHandle: 1,
                clickBar: 1
            })
        }
        e("body").on("click", ".select_country_from_title", function () {
            e("#popup_select_country").slideToggle(function () {
                e("#popup_select_country").find(".country_list").jScrollPane({showArrows: false, verticalGutter: 0})
            });
            return false
        });
        e("body").on("click", ".show_contacts_cities", function () {
            e("#popup_select_contact").slideToggle(function () {
                e("#popup_select_contact").find(".contact_list").jScrollPane({showArrows: false, verticalGutter: 0})
            });
            return false
        });
        e("body").click(function (t) {
            if (e(t.target).closest("#popup_select_country").length == 0) {
                e("#popup_select_country").css("display", "none")
            }
        });
        e(".country_rest h2").click(function () {
            e(this).parent(".country_rest").toggleClass("active").siblings(".country_rest").removeClass("active")
        });
        e("body").click(function (t) {
            if (e(t.target).closest(".country_rest.active").length == 0) {
                e(".country_rest.active").removeClass("active")
            }
        });
        e("body").click(function (t) {
            if (e(t.target).closest("#popup_select_contact").length == 0) {
                e("#popup_select_contact").css("display", "none")
            }
        });
        if (e(".address_text_scroll").length) {
            e(".address_text_scroll").jScrollPane({showArrows: false})
        }
        e(".parallax").each(function () {
            var t = e(this);
            var u = e(this).parent();

            function v() {
                var x = t.data("speed");
                var A = u.offset().top;
                var C = e(this).scrollTop();
                var y = e(this).height();
                var D = u.innerHeight();
                var z = C + y;
                if (z > A && C < A + D) {
                    var E = ((z - A) * x);
                    var B = y + D;
                    var w = ((E / B) * 100) + (50 - (x * 50))
                }
                if (w >= 0) {
                    t.css({top: w + "%", transform: "translate(-50%, -" + w + "%)"})
                }
            }

            e(document).on({
                scroll: function () {
                    v()
                }, ready: function () {
                    v()
                }
            })
        });
        if (e(".fci_slider").length) {
            e(".fci_slider").slick({
                autoplay: false,
                autoplaySpeed: 10000,
                arrows: false,
                dots: true,
                infinite: true,
                centerMode: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: true,
                centerPadding: 0,
                responsive: [{
                    breakpoint: 810,
                    settings: {centerMode: true, centerPadding: 0, slidesToShow: 1},
                    breakpoint: 600,
                    settings: {centerMode: false, centerPadding: 0, slidesToShow: 1, variableWidth: false}
                }]
            });
            e(".fci_slider").on("beforeChange", function (u, t, w, v) {
                if (e(window).width() < 601) {
                    e(".franshiza_comment_item:eq(" + (w + 1) + ")").find(".fci_text").css({height: "400px"}).next(".fci_bg").show().next(".fci_arrow").show()
                }
            })
        }
        if (e(".about_history_bg_left").length && e(".about_history_bg_right").length) {
            var o = e(window).width();
            var m = e(".centerBlock").width();
            var p = (o - m) / 2;
            e(".about_history_bg_left").css({width: p - 40});
            e(".about_history_bg_right").css({width: p});
            if (e(window).width() > 800) {
                var i = e(".history_inner");
                var s = i.closest(".about_history");
                i.sly({
                    horizontal: 1,
                    itemNav: "basic",
                    smart: 1,
                    activateOn: "",
                    mouseDragging: 1,
                    touchDragging: 1,
                    releaseSwing: 1,
                    scrollBar: s.find(".history_scrollbar"),
                    scrollBy: 1,
                    speed: 300,
                    elasticBounds: 1,
                    easing: "easeOutExpo",
                    dragHandle: 1,
                    dynamicHandle: 1,
                    clickBar: 1
                });
                e(".history_inner").sly("on", "move", function (t) {
                    if (this.pos.end == this.pos.cur) {
                        i.closest(".about_history").addClass("endscroll")
                    } else {
                        i.closest(".about_history").removeClass("endscroll")
                    }
                })
            }
        }
        e("body").on("click", ".alpha_col span", function () {
            if (e(window).width() < 601) {
                var u = e(this);
                var t = e(".cities_list_mobile");
                if (!u.hasClass("active")) {
                    t.html("");
                    u.closest(".alpha_col").find("p.filial_link").each(function () {
                        e(this).clone().removeClass("filial_link").addClass("first_letter_filial_link").appendTo(t)
                    })
                }
                u.addClass("active").closest(".alpha_col").siblings(".alpha_col").find("span.active").removeClass("active")
            }
            return false
        });
        e("body").on("click", ".konsul_tabs a", function () {
            if (!e(this).parent("li").hasClass("active")) {
                e(this).parent("li").addClass("active").siblings(".active").removeClass("active");
                e(".konsul_descr").removeClass("active");
                e(e(this).attr("href")).addClass("active")
            }
            return false
        });
        e("body").on("click", ".toggle_text", function () {
            e(this).hide();
            e(".hidden_short_descr").show();
            return false
        });
        if (e(".allnews").length) {
            var r = e(".ajax_response");
            r.masonry({
                itemSelector: ".news_item",
                columnWidth: ".news_item",
                percentPosition: false,
                gutter: 30,
                isFitWidth: true
            });
            e("body").on("click", ".ajax_pagination a", function () {
                var u = e(this);
                var t = e(this).attr("href") + "&tmpl=component";
                u.addClass("preload");
                e.ajax({
                    url: t, type: "POST", success: function (v) {
                        u.parent("div").remove();
                        $new = e(v);
                        r.append($new).masonry("appended", $new);
                        t += "&getpagination=1";
                        e.ajax({
                            url: t, type: "POST", success: function (w) {
                                e(".news_pagination").html(w)
                            }
                        })
                    }
                });
                return false
            })
        }
        e("body").on("click", ".catalog_sort a", function () {
            var u = e(this);
            if (!u.hasClass("active")) {
                var t = e(".custom_logo").find("a").attr("href") + "?tmpl=clear";
                var v = "filter_sortby=" + u.data("sort");
                e.ajax({
                    url: t, data: v, type: "POST", success: function (w) {
                        document.location.reload()
                    }
                })
            }
            return false
        });
        e("body").on("click", ".item_like a", function () {
            var t = e(this);
            e.ajax({
                url: e(".custom_logo").find("a").attr("href") + "?tmpl=clear",
                type: "POST",
                data: {add_like: t.data("like"), like_id: t.attr("href").replace("#", "")},
                success: function (u) {
                    t.parent().html('<span class="like_plus"></span><span class="like_count">' + u + '</span><span class="like_minus"></span>')
                }
            });
            return false
        });
        if (e(".comments_list").length) {
            var h = e(".comments_list");
            h.masonry({
                itemSelector: ".comment_item",
                columnWidth: ".comment_item",
                percentPosition: false,
                gutter: 30,
                isFitWidth: true
            });
            e("body").on("click", ".ajax_pagination a", function () {
                var u = e(this);
                var t = e(this).attr("href") + "&tmpl=component";
                u.addClass("preload");
                e.ajax({
                    url: t, type: "POST", success: function (v) {
                        u.parent("div").remove();
                        $new = e(v);
                        h.append($new).masonry("appended", $new);
                        t += "&getpagination=1";
                        e.ajax({
                            url: t, type: "POST", success: function (w) {
                                e(".news_pagination").html(w)
                            }
                        })
                    }
                });
                return false
            })
        }
        e("body").on("click", ".send_comment_btn", function () {
            d(e("#_dark"));
            e("#_dark").fadeTo(500, 0.6);
            f(e(e(this).attr("href")));
            e(e(this).attr("href")).fadeTo(500, 1);
            return false
        });
        e("body").on("click", "a[href=#hr_form]", function () {
            d(e("#_dark"));
            e("#_dark").fadeTo(500, 0.6);
            f(e(e(this).attr("href")));
            e(e(this).attr("href")).fadeTo(500, 1);
            return false
        });
        e("body").on("click", ".popup_close, #_dark", function () {
            e("#_dark").fadeTo(500, 0, function () {
                e(this).hide();
                e("body").css("overflow", "inherit")
            });
            e("#social_auth").fadeTo(500, 0, function () {
                e(this).hide()
            });
            e("#hr_form").fadeTo(500, 0, function () {
                e(this).hide()
            });
            e("#popup_form_callback").fadeTo(500, 0, function () {
                e(this).hide()
            });
            e("#popup_form_order").fadeTo(500, 0, function () {
                e(this).hide()
            });
            return false
        });
        e("body").on("click", ".popup_stars span", function () {
            e(".popup_stars").find(".active").removeClass("active");
            e(".popup_stars span:lt(" + (e(this).index() + 1) + ")").addClass("active");
            e("#user_rating").val(e(this).index() + 1)
        });
        e("body").on("click", ".vacancy_item h3", function () {
            if (!e(this).parent(".vacancy_item").hasClass("active")) {
                e(this).parent(".vacancy_item").addClass("active").siblings(".active").removeClass("active")
            }
        });
        e("input[type=text], input[type=tel], input[type=email]").focus(function () {
            if (!e(this).parent(".search_input").length) {
                if (!e(this).parent().find(".toplabel").length) {
                    e(this).parent().append('<span class="toplabel">' + e(this).data("label") + "</span>")
                }
            }
        });
        e("input[type=text], input[type=tel], input[type=email]").blur(function () {
            e(this).parent().find(".toplabel").remove()
        });
        e("body").on("click", ".clearfield", function () {
            e(this).parent("label").find("input").val("")
        });
        e("body").on("click", ".blog_gallery_nav a", function () {
            var w = e(this);
            var t = w.closest(".blog_gallery");
            var v = t.find(".blog_gallery_item.active");
            var u = v.index();
            if (w.hasClass("prev")) {
                if (v.prev(".blog_gallery_item").length) {
                    v.removeClass("active").prev(".blog_gallery_item").addClass("active");
                    u = v.prev(".blog_gallery_item").index()
                } else {
                    v.removeClass("active");
                    t.find(".blog_gallery_item:last").addClass("active");
                    u = t.find(".blog_gallery_item:last").index()
                }
            } else {
                if (v.next(".blog_gallery_item").length) {
                    v.removeClass("active").next(".blog_gallery_item").addClass("active");
                    u = v.next(".blog_gallery_item").index()
                } else {
                    v.removeClass("active");
                    t.find(".blog_gallery_item:first").addClass("active");
                    u = t.find(".blog_gallery_item:first").index()
                }
            }
            e("#current_gallery_image").html(u + 1);
            e(".blog_gallery_caption").find("p:eq(" + u + ")").addClass("active").removeClass("hidden").siblings("p").removeClass("active").addClass("hidden");
            return false
        });
        if (e(".rotate").length > 0) {
            e(".rotate").textrotator({animation: "dissolve", separator: ";", speed: 2000})
        }
    });
    e("body").on("click", "a[href=#franform]", function () {
        var j = e(this);
        var i = j.attr("href");
        var h = j.data("action");
        var g = e(i).offset().top;
        if (h) {
            e(i).find("input[name=msg_type]").val(e(this).data("action"))
        }
        e("html:not(:animated),body:not(:animated)").animate({scrollTop: g}, 300);
        return false
    });
    e("body").on("click", "#footer-tariffs a", function () {
        var h = e(this).attr("href");
        var g = h.split("#");
        g = g[1];
        if (e("#" + g).length) {
            e("body,html").animate({scrollTop: e("#" + g).offset().top - 80}, 500)
        } else {
            document.location.assign(h)
        }
        return false
    });
    if (e(".scroll").length) {
        e(window).on("load scroll resize", function () {
            var g = e(window).scrollTop();
            if (g > 0) {
                e(".scroll").addClass("hidden")
            } else {
                e(".scroll").removeClass("hidden")
            }
        })
    }
    e("body").on("click", ".country_navigation a", function () {
        var g = e(this).attr("href");
        e("body,html").animate({scrollTop: e(g).offset().top - 50}, 500);
        return false
    });
    e(".mobile_show_more span").on("click", function () {
        var g = e(this).text();
        e(this).text(g == "Показать подробнее о тарифе" ? "Скрыть подробнее о тарифе" : "Показать подробнее о тарифе").parent().toggleClass("expand").prev(".price_details").toggleClass("expand")
    });

    function b(g) {
        var h = document.cookie.match(new RegExp("(?:^|; )" + g.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
        return h ? decodeURIComponent(h[1]) : undefined
    }

    if (e(".franshiza_banner").length) {
        e(document).mouseleave(function (g) {
            if (g.clientY < 0) {
                e(".franshiza_banner").fadeIn("fast")
            }
        });
        e(document).click(function (g) {
            if ((e(".franshiza_banner").is(":visible")) && (!e(g.target).closest(".franshiza_banner").length)) {
                e(".franshiza_banner").remove()
            }
        });
        e("body").on("click", ".franshiza_banner_close", function () {
            e(".franshiza_banner").remove();
            return false
        })
    }
    e("body").on("click", ".nav a", function () {
        try {
            ekEvents.push("productOpen", {categoryId: e(this).html()})
        } catch (g) {
        }
    });
    e("body").on("click", ".rating_close", function () {
        var h = e(this);
        var g = h.attr("href");
        var i = "set_rating_cookie=1";
        e.ajax({
            url: g + "?tmpl=clear", type: "POST", data: i, success: function (j) {
                h.closest(".popup_rating").addClass("minimized")
            }
        });
        return false
    });
    e("body").on("click", ".popup_rating.minimized", function () {
        e(this).removeClass("minimized");
        return false
    });
    e("body").on("click", ".blog_price_form_checkbox", function () {
        var g = e(this);
        g.toggleClass("checked");
        if (g.hasClass("checked")) {
            e("#multiviza").val(1)
        } else {
            e("#multiviza").val(0)
        }
    });
    e("body").on("click", ".quiz_body ul li", function () {
        var g = e(this);
        g.closest(".quiz_step1").addClass("quiz_hidden");
        e(g.data("selected")).removeClass("quiz_hidden")
    });
    if (e(".popup_quiz").length) {
        e(document).mouseleave(function (g) {
            if (g.clientY < 0) {
                e(".popup_quiz").fadeIn("fast")
            }
        });
        e("body").on("click", ".quiz_close", function () {
            e(".popup_quiz").remove();
            return false
        })
    }
    var a = e("#processbar");
    e(".answer_item").click(function () {
        var n = e(this);
        var m = n.closest(".curculator_question");
        var l = m.next();
        var k = e(".curc_slider");
        var i = (l.index() + 1) * 20 + "%";
        var h = e("#curcul").offset().top - 80;
        var j = [];
        n.addClass("active").siblings(".answer_item").removeClass("active").parent(".curc_answers").find("input").val(n.text());
        m.removeClass("active");
        l.addClass("active");
        k.find(".active").removeClass("active").next("li").addClass("active");
        k.find("span").removeClass().addClass("step" + l.index());
        e("html:not(:animated),body:not(:animated)").animate({scrollTop: h}, 300);
        if (l.hasClass("last")) {
            k.css({right: "2px", left: "auto"});
            e(".curculator").children(".userfields").find("input[type=hidden]").each(function (o) {
                if (!e(this).val()) {
                    j.push(o)
                }
            });
            if (j.length) {
                e(".curc_processing").hide();
                e(".unanswered").show()
            } else {
                e(".curc_processing").show();
                e(".unanswered").hide();
                var g = e(".progress-label");
                a.progressbar({
                    value: false, change: function () {
                        g.text(a.progressbar("value") + "%")
                    }, complete: function () {
                        g.text("100%");
                        e(".computing_complete").slideDown()
                    }
                });
                setTimeout(c, 600)
            }
        }
        return false
    });

    function c() {
        var g = a.progressbar("value") || 0;
        a.progressbar("value", g + 2);
        if (g < 99) {
            setTimeout(c, 30)
        }
    }

    e(".curc_slider a").click(function () {
        var k = e(this);
        var j = e(k.attr("href"));
        var i = k.closest(".curc_slider");
        var h = [];
        k.parent().addClass("active").siblings("li").removeClass("active");
        i.find("span").removeClass().addClass("step" + k.parent().index());
        j.addClass("active").siblings(".curculator_question").removeClass("active");
        if (j.hasClass("last")) {
            k.closest(".curculator_steps").next(".userfields").find("input[type=hidden]").each(function (l) {
                if (!e(this).val()) {
                    h.push(l)
                }
            });
            if (h.length) {
                e(".curc_processing").hide();
                e(".unanswered").show()
            } else {
                e(".curc_processing").show();
                e(".unanswered").hide();
                var g = e(".progress-label");
                a.progressbar({
                    value: false, change: function () {
                        g.text(a.progressbar("value") + "%")
                    }, complete: function () {
                        g.text("100%");
                        e(".computing_complete").slideDown()
                    }
                });
                setTimeout(c, 600)
            }
        }
        return false
    })
});
jQuery.fn.reverse = [].reverse;
var popupConfirmHtml = '<div class="popup_confirm"><div class="popup_confirm_triangle"></div>Ваш город: <span id="geo_city"></span><div class="popup_confirm_btns"><a href="#" class="confirm_yes" onclick=""><span>Да</span></a><a href="#" class="confirm_no" onclick=""><span>Нет</span></a></div><div id="geo_city_offices"></div></div>',
    popupConfirm = $(popupConfirmHtml), selectContainer = $(".select_city_container"), overlay = $("#_dark3");

function overlayShow() {
    if (overlay.is(":hidden")) {
        overlay.fadeTo(500, 0.6, function () {
            $(this).show()
        })
    }
}

function overlayHide() {
    if (overlay.is(":visible")) {
        overlay.fadeTo(500, 0, function () {
            $(this).hide()
        })
    }
}

function city_confirm(d, e, b) {
    if (popupConfirm.find("#geo_city").is(":empty")) {
        popupConfirm.find("#geo_city").text(d).attr("data-cityid", e)
    }
    if (b > 1) {
        var a = document.location.href;
        var c = "find_city_offices=" + d;
        $.ajax({
            url: a + "?tmpl=clear", type: "POST", data: c, dataType: "json", success: function (f) {
                $("#geo_city_offices").html(f.html)
            }
        })
    }
    if ($(window).width() > 600) {
        popupConfirm.appendTo(".toppanel .select_city_container");
        overlay.appendTo(".toppanel .select_city_container")
    } else {
        popupConfirm.appendTo(jQuery("body"));
        overlay.appendTo(jQuery("body"))
    }
    overlayShow()
};