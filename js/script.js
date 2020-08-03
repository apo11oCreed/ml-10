var bannerObj = {};

var patterns = {
    "oneBannerfullWidth": [
        {
            "img": "img/fullwidth-1.png",
            "copy": [
                {
                    "field": "Bold 24px",
                    "styles": "font-weight:bold;font-size:24px;"
                },
                {
                    "field": "Reg 24px",
                    "styles": "font-weight:regular;font-size:24px;"
                },
                {
                    "field": "Bold 24px",
                    "styles": "font-weight:bold;font-size:24px;"
                },
                {
                    "field": "Reg 12px",
                    "styles": "font-weight:regular;font-size:12px;"
                }
            ]
        },
        {
            "img": "img/fullwidth-2.png",
            "copy": [
                {
                    "field": "Reg 24px",
                    "styles": "font-weight:bold;font-size:24px;"
                },
                {
                    "field": "Bold 24px",
                    "styles": "font-weight:regular;font-size:24px;"
                },
                {
                    "field": "Reg 24px",
                    "styles": "font-weight:bold;font-size:24px;"
                },
                {
                    "field": "Reg 12px",
                    "styles": "font-weight:regular;font-size:12px;"
                },
                {
                    "field": "Reg 12px",
                    "styles": "font-weight:regular;font-size:12px;"
                }
            ]
        }
    ],
    "oneBannerAlignLeft": [
        {
            "img": "img/22boldcaps-22regcaps-22boldcaps_12regcaps.png",
            "copy": [
                {
                    "field": "Bold 24px",
                    "styles": "font-weight:bold;font-size:24px;"
                },
                {
                    "field": "Reg 24px",
                    "styles": "font-weight:regular;font-size:24px;"
                },
                {
                    "field": "Bold 24px",
                    "styles": "font-weight:bold;font-size:24px;"
                },
                {
                    "field": "Reg 12px",
                    "styles": "font-weight:regular;font-size:12px;"
                }
            ]
        },
        {
            "img": "img/22boldcaps-22regcaps-22boldcaps_12regcaps_12regcaps.png",
            "copy": [
                {
                    "field": "Bold 24px",
                    "styles": "font-weight:bold;font-size:24px;"
                },
                {
                    "field": "Reg 24px",
                    "styles": "font-weight:regular;font-size:24px;"
                },
                {
                    "field": "Bold 24px",
                    "styles": "font-weight:bold;font-size:24px;"
                },
                {
                    "field": "Reg 12px",
                    "styles": "font-weight:regular;font-size:12px;"
                },
                {
                    "field": "Reg 12px",
                    "styles": "font-weight:regular;font-size:12px;"
                }
            ]
        }
    ],
    "oneBannerAlignRight": [
        {
            "img": "img/22boldcaps-22regcaps-22boldcaps_12regcaps.png",
            "copy": [
                {
                    "field": "Bold 24px",
                    "styles": "font-weight:bold;font-size:24px;"
                },
                {
                    "field": "Reg 24px",
                    "styles": "font-weight:regular;font-size:24px;"
                },
                {
                    "field": "Bold 24px",
                    "styles": "font-weight:bold;font-size:24px;"
                },
                {
                    "field": "Reg 12px",
                    "styles": "font-weight:regular;font-size:12px;"
                }
            ]
        },
        {
            "img": "img/22boldcaps-22regcaps-22boldcaps_12regcaps_12regcaps.png",
            "copy": [
                {
                    "field": "Bold 24px",
                    "styles": "font-weight:bold;font-size:24px;"
                },
                {
                    "field": "Reg 24px",
                    "styles": "font-weight:regular;font-size:24px;"
                },
                {
                    "field": "Bold 24px",
                    "styles": "font-weight:bold;font-size:24px;"
                },
                {
                    "field": "Reg 12px",
                    "styles": "font-weight:regular;font-size:12px;"
                },
                {
                    "field": "Reg 12px",
                    "styles": "font-weight:regular;font-size:12px;"
                }
            ]
        }
    ],
    "moreThanOneBannerSplit": [
        {
            "img": "img/22boldcaps-22regcaps-22boldcaps_12regcaps.png",
            "copy": [
                {
                    "field": "Bold 24px",
                    "styles": "font-weight:bold;font-size:24px;"
                },
                {
                    "field": "Reg 24px",
                    "styles": "font-weight:bold;font-size:24px;"
                },
                {
                    "field": "Bold 24px",
                    "styles": "font-weight:bold;font-size:24px;"
                },
                {
                    "field": "Reg 12px",
                    "styles": "font-weight:bold;font-size:24px;"
                }
            ]
        },
        {
            "img": "img/22boldcaps-22regcaps-22boldcaps_12regcaps_12regcaps.png",
            "copy": [
                {
                    "field": "Bold 24px",
                    "styles": "font-weight:bold;font-size:24px;"
                },
                {
                    "field": "Reg 24px",
                    "styles": "font-weight:bold;font-size:24px;"
                },
                {
                    "field": "Bold 24px",
                    "styles": "font-weight:bold;font-size:24px;"
                },
                {
                    "field": "Reg 12px",
                    "styles": "font-weight:bold;font-size:24px;"
                },
                {
                    "field": "Reg 12px",
                    "styles": "font-weight:bold;font-size:24px;"
                }
            ]
        }
    ]
}

var brands = {
    "paulayoung": [{
        "baseUrl": "https://www.paulayoung.com",
        "evergagePath": 'py'
    }],
    "especiallyyours": [{
        "baseUrl": "https://www.especiallyyours.com",
        "evergagePath": 'ey'
    }],
    "thelook": [{
        "baseUrl": "https://www.thelook.fashion",
        "evergagePath": 'tl'
    }],
    "wig": [{
        "baseUrl": "https://www.wig.com",
        "evergagePath": 'wg'
    }],
    "beyondextensions": [{
        "baseUrl": "https://www.beyondextensions.com",
        "evergagePath": 'be'
    }]
}

var patternOptionsHTML,
    selectOnClickBehavior,
    selectBrand,
    selectLayoutType,
    selectedPattern,
    selectDesktopImg,
    selectMobileImg,
    selectBgColor,
    resourceState;

$(document).ready(function () {

    buttonBehave1();

    $('fieldset#patterns > span.dynamic').html('<a href="#layouts" style="color:blue;text-decoration:underline;">*Select Layout first.</a>');
});

function displayPatterns(el1) {
    $('fieldset#patterns > span.dynamic,fieldset#content > span.dynamic, .row.text-render span.dynamic').html('');
    var layoutSelected;

    switch (el1) {
        case "oneBannerAlignLeft": layoutSelected = patterns.oneBannerAlignLeft;
            break;
        case "oneBannerAlignRight": layoutSelected = patterns.oneBannerAlignRight;
            break;
        case "oneBannerfullWidth": layoutSelected = patterns.oneBannerfullWidth;
            break;
        case "moreThanOneBannerSplit": layoutSelected = patterns.moreThanOneBannerSplit;
            break;
        default: break;
    }

    if (el1 !== 'select') {
        for (item in layoutSelected) {
            patternOptionsHTML = '<div class="row"> <div class="col-xs-12"> <label for="patternsHalfWidth' + (Number(item) + 1) + '">Pattern ' + (Number(item) + 1) + '</label><input data-index="' + Number(item) + '" id="patternsHalfWidth' + (Number(item) + 1) + '" name="pattern" type="radio"> </div></div><div class="row"><div class="col-xs-12"><img src="' + layoutSelected[item].img + '" alt=""></div></div>';
            $('fieldset#patterns > span.dynamic').append(patternOptionsHTML);
        };
    } else {
        $('fieldset#patterns > span.dynamic').html('<a href="#layouts" style="color:blue;text-decoration:underline;">*Select Layout first.</a>');
    }

    $('fieldset#patterns input').first().prop('checked', true);
    displayCopyFields(layoutSelected, $('fieldset#patterns input').first().data('index'));

    $('input[name="pattern"]').on('click', function () {
        $('fieldset#content > span.dynamic, .row.text-render span.dynamic').html('');
        displayCopyFields(layoutSelected, $(this).data('index'));
    });

    $('button#render-text-reset').on('click', function (e) {
        e.preventDefault();
        $('.enter-text-banner.flex-it input').val('');
        $('.row.text-render span.dynamic span').html('');
    });
}


function displayCopyFields(el1, el2) {
    var patternCopy = el1[el2].copy,
        copyFields = '';

    for (var i = 0; i < patternCopy.length; i++) {
        copyFields += ' <div><label for="copy' + (i + 1) + '">' + patternCopy[i].field + '</label> <br><input id="copy' + (i + 1) + '" name="copy' + (i + 1) + '" placeholder="text ' + (i + 1) + '" type="text"></div>';
    }

    $('fieldset#content > span.dynamic').append('<div class="row"><h4 class="col-xs-12">Enter your copy for Pattern ' + (el2 + 1) + '</h4><p class="col-xs-12">If this banner does not require copy, then leave these fields blank.</p></div><div class="row enter-text-banner flex-it">' + copyFields + '</div><br><div class="row"><span class="col-xs-12" style="text-align:right"><button id="render-text-reset" type="reset">Reset Copy</button></span></div><hr>');

    renderedTextInputs = document.querySelectorAll('fieldset#content > span.dynamic input');
    renderedTextInputs.forEach(function (currentValue, index) {
        $('.row.text-render span.dynamic').append('<span id="text-render-' + index + '" style="' + patternCopy[index].styles + '"></span>&nbsp;');
        renderCopyFields(currentValue, index);
    });
}

function renderCopyFields(el1, el2) {
    $(el1).on('keypress', function (event) {
        $('.row.text-render span.dynamic span#text-render-' + el2).append(String.fromCharCode(event.which));
    })
}

function displayOnClickBehavior(el1) {
    $('.row.onclickbehavior span.dynamic').html('');

    var modalHTML = '<fieldset id="modalDefs" class="row"> <legend> <h3>Modal</h3> </legend> <div class="col-xs-6"> <div class="row enter-text-modal flex-it"> <div> <label for="modalHeader">Modal Header<span class="required">*</span></label> <br><input id="modalHeader" name="modalHeader" placeholder="For free standard shipping on orders of $59 or more, &hellip;" type="text" size="50" maxlength="50" required></div><br><div> <label for="modalBody">Modal Body<span class="required">*</span></label> <br><textarea name="modalBody" id="modalBody" cols="50" rows="10" placeholder="Free shipping offer excludes&hellip; Not valid in conjuction with any other offer." required></textarea> </div><br><div> <label for="modalExpires">Modal Expires<span class="required">*</span></label> <br><input id="modalExpires" name="modalExpires" placeholder="*Offer expires 8/7/20 at 11:59 pm PDT." type="text" size="50" maxlength="50" required></div></div></div><div class="col-xs-6"> <span class="example-modal"> <h4>Example Modal</h4> <img src="https://www.paulayoung.com/images/evergage/py/lightbox/sitewide-c07.gif" alt="Example modal"> </span> </div></fieldset>',
        linkHMTL = '<br><div class="row"> <div class="col-xs-3"><label for="offerLink">Link to another page:<span class="required">*</span></label></div><div class="col-xs-2"> <input id="offerLink" placeholder="/category/wigs/all-wigs.do" type="text" required></div></div>',
        linkAnchorHTML = '<br><div class="row"> <div class="col-xs-3"><label for="offerLink">Link to a location on the same page:<span class="required">*</span></label></div><div class="col-xs-2"> <input id="offerLink" placeholder="#anchor" type="text" required></div></div>',
        doNothing = '<br><p>This will be a static banner.</p>',
        link,
        behavior = '';

    switch (el1) {
        case 'fireModal': behavior = modalHTML;
            break;
        case 'linkToPage': behavior = linkHMTL;
            break;
        case 'linkToAnchor': behavior = linkAnchorHTML;
            break;
        case 'doNothing': behavior = doNothing;
            break;
        default: break;
    }

    $('.row.onclickbehavior span.dynamic').append(behavior);

}

function buttonBehave1() {

    $('button#form-reset').on('click', function () {
        $('span.dynamic').html('');
        selectOnClickBehavior = '';
        selectBrand = '';
        selectLayoutType = '';
        selectedPattern = '';
        selectDesktopImg = '';
        selectMobileImg = '';
        selectBgColor = '',
            resourceState = '';
    });

    $('select#brands').on('change', function () {
        selectBrand = $('#brands :selected').val();
    });

    $('input[name="bpDesktop"],input[name="bpMobile"]').on('click', function () {
        var namespace = $(this).attr('name').substr(2);
        if ($(this).val() == 'no') {
            $('input#bg' + namespace).prop('disabled', true);
            $('input#bg' + namespace).parent().addClass("disabled");
        } else {
            $('input#bg' + namespace).prop('disabled', false);
            $('input#bg' + namespace).parent().removeClass("disabled");
        }
    });

    $('select#layoutDropDown, select#onClickBehavior').on('change', function () {
        var selectMenu = $(this).attr('name');
        if (selectMenu == 'layoutDropDown') {
            displayPatterns($(':selected', this).val());
        } else {
            displayOnClickBehavior($(':selected', this).val());
        }

    });

    // On radio button change
    $("input[name='lorr1']").on("change", function () {
        resourceState = $(this).val();
        //console.log(resourceState);
        if (resourceState == "local") {
            // Disable 'Brand'/'Export'
            // $(".opt-row.brand .clabel").addClass("disabled");
            // $(".opt-row.brand select").attr("disabled", "disabled");

            $("input[name='bgDesktop'], input[name='bgMobile']").each(function () {
                var curr = $(this).val();
                if (curr !== "")
                    $(this).attr("data-remote", curr);

                if ($(this).data("local"))
                    $(this).val($(this).data("local"));

                $(this).siblings("span.input-group-addon1").text("Enter local filename");
                if ($(this).attr("name") == "bgDesktop")
                    var size = 962;
                else
                    var size = 575;
                $(this).val("").attr("placeholder", "Demo-image-" + size + ".png");
            });
        }
        else if (resourceState == "remote") {
            // Enable 'Brand'/'Export'
            $(".opt-row.brand .clabel").removeClass("disabled");
            $(".opt-row.brand select").removeAttr("disabled");

            $("input[name='bgDesktop'], input[name='bgMobile']").each(function () {
                var curr = $(this).val();
                if (curr !== "")
                    $(this).attr("data-local", curr);

                if ($(this).data("remote"))
                    $(this).val($(this).data("remote"));

                if ($("select[name='brands']").val() == "") {
                    $(this).val("").attr("placeholder", "Select a brand");
                    $(this).siblings("span.input-group-addon1").text("Enter remote filename");
                }
                else {
                    $(this).siblings("span.input-group-addon1").text("/images/evergage/" + selectBrand + "/");
                    $(this).val("").attr("placeholder", "Enter Filename...");
                }
            });
        }
        $(".input-group1").removeClass("found notfound");
    });

    $("select[name='brands']").on("change", function () {
        if (resourceState == 'remote') {
            $("input[name='lorr1']").trigger("change");
            $(".input-group1").removeClass("found notfound");
        }
    });

    $("input, select, textarea").on("change", function () {
        // Test the left hand inputs
        var left = 0;
        var right = 1;
        $(".optCont:first-of-type input.required").each(function () {
            if (!$(this).is(":checked"))
                return;
            var sel = $(this).attr("name");
            var value = $(this).parents(".opt-row").contents().find("[name='" + sel + "']:not(.required)").val();
            if (value == "")
                left = 1;
        });
        // Test the right hand inputs
        // MUST be set to Remote!
        if ($("input[name='lorr1']:checked").val() == "remote") {
            if ($("input#img1").val() !== "" && $("input#img2").val() !== "" && $("select[name='brand']").val() !== "")
                right = 0;
        }

        if (!left && !right) {
            $(".opt-row.export .clabel").removeClass("disabled");
            $(".opt-row.export button").removeAttr("disabled");
        }
        else {
            $(".opt-row.export .clabel").addClass("disabled");
            $(".opt-row.export button").attr("disabled", "disabled");
        }

        // Update href if link checkbox checked
        if ($("input[type='text'][name='href']").val() !== "" && $("select[name='brand']").val() !== "") {
            if ($("input[type='checkbox'][name='linktest']").is(":checked")) {
                $("section.section-offer a").attr({
                    "href": websiteURL1() + $("input[type='text'][name='href']").val(),
                    "target": "_blank"
                });
            }
            else {
                $("section.section-offer a").attr("href", "#").removeAttr("target");
            }
        }
    });


    $(".bgimgaddress").on({
        focus: function () {
            $(this).parent().removeClass("found notfound");
            if ($(this).parent().next().attr('hidden', false)) {
                $(this).parent().next().attr('hidden', true);
            }
        },
        focusout: function () {
            if (!($(this).val() == 0)) {
                checkImageExists1(this, $(this).val());
            }
        }
    });
}

function websiteURL1() {
    var brand = $("select[name='brands']").val();
    var url = "";

    switch (brand) {
        case "py": url = "https://www.paulayoung.com";
            break;
        case "ey": url = "https://www.especiallyyours.com";
            break;
        case "wg": url = "https://www.wig.com";
            break;
        case "tl": url = "https://www.thelook.fashion";
            break;
        default: break;
    }

    return url;
}

function imgURL1(el, flag) {
    var domain = websiteURL1();
    var fpath = $(el).siblings(".input-group-addon1").text();
    if (fpath == "Local")
        fpath = "";
    var fname = $(el).val();
    if (flag) {
        console.log(domain + fpath + fname);
        return domain + fpath + fname;
    } else {
        console.log(fpath + fname);
        return fpath + fname;
    }

}

function checkImageExists1(el, url) {
    var img = new Image();
    //$(el).parent().removeClass("found notfound");

    img.onload = function () {
        $(el).parent().addClass("found");
        $(el).parent().next().prop('hidden', true);
        reDraw();
    };
    img.onerror = function () {
        $(el).parent().addClass("notfound");
        $(el).parent().next().prop('hidden', false);
    };

    img.src = imgURL1(el, true);
    console.log(img.src);
}

function reDraw() {
    // Update the background-image URLs
    var img1src = imgURL1($(".bgimgaddress[name='bgDesktop']"), true);
    var img2src = imgURL1($(".bgimgaddress[name='bgMobile']"), true);

    // source 962
    $("picture source[media*='576']").attr("srcset", img1src);
    // source 575
    $("picture source[media*='575']").attr("srcset", img2src);
    // default src and data-srcset
    $("img#section-offer-img").attr("src", img1src).attr("data-srcset", img2src);
}

function htmlExport() {
    // Clone the html to a non visible area
    $("body").append("<div class='noSeeCode'></div>");
    $(".faux-website-container .container section").clone().appendTo(".noSeeCode");

    // Change out all the dummy sections for user input
    // Heading
    $(".noSeeCode img#section-offer-img").attr("alt", $("input[type='text'][name='heading']").val().replace(/'/g, "").replace(/"/g, ""));

    // Img
    var img1src = imgURL1($(".imgaddress[name='img1']"), false);
    var img2src = imgURL1($(".imgaddress[name='img2']"), false);
    // source 962
    $(".noSeeCode picture source[media*='576']").attr("srcset", img1src);
    // source 575
    $(".noSeeCode picture source[media*='575']").attr("srcset", img2src);
    // default src and data-srcset
    $(".noSeeCode img#section-offer-img").attr("src", img1src).attr("data-srcset", img2src);

    // Body
    if ($("input[type='checkbox'][name='body']:checked").length == 1)
        $(".noSeeCode .body").text($("textarea[name='body']").val());
    else
        $(".noSeeCode .body").remove();

    // Coupon
    if ($("input[type='checkbox'][name='coupon']:checked").length == 1)
        $(".noSeeCode .coupon").text($("input[type='text'][name='coupon']").val());
    else
        $(".noSeeCode .coupon").remove();

    // If no Body or Coupon, remove aria-describedby and offer-description
    if ($("input[type='checkbox'][name='body']:checked").length == 0 && $("input[type='checkbox'][name='coupon']:checked").length == 0) {
        $(".noSeeCode #offer-description").remove();
        $(".noSeeCode img#section-offer-img").removeAttr("aria-describedby");
    }

    // 'a' href
    $(".noSeeCode a").attr("href", $("input[type='text'][name='href']").val());

    // Remove href target
    $(".noSeeCode a").removeAttr("target");

    var html = "<textarea>" + escapeHTML($(".noSeeCode")[0].innerHTML) + "</textarea>";
    html += '<div class="faux-footer"><button class="copy btn btn-default">Copy To Clipboard</button></div>';
    msgBox(html, "HTML Export");

    // Clean up any empty lines in the textarea
    var text = $(".modal textarea").val();
    text = text.replace(/(?:(?:\r\n|\r|\n)\s*){2}/gm, "");
    $(".modal textarea").val(text);

    // Destroy noSeeCode element
    $(".noSeeCode").remove();
}