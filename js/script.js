var patterns = [{
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}];

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

var selectOnClickBehavior,
    selectBrand,
    selectLayoutType,
    selectedPattern,
    selectDesktopImg,
    selectMobileImg,
    selectBgColor;

var globalSettings = {
    selectBrand: 'py',
    breakPoints: {
        desktop: 'yes',
        mobile: 'yes'
    },
    bgDesktopPlaceholder: 'Demo-image-962.png',
    bgMobilePlaceholder: 'Demo-image-575.png',
    maxBannerNumber: 4,
    minBannerNumber: 1
}

var bannerTabsLegend = '<legend><h3>Banners (max ' + globalSettings.maxBannerNumber + ')</h3></legend><p>Click on the "[ Banner #### ]" button to display the form. Click on the "+" button to add another banner. Click on the "-" button to remove a banner.</p></div></div><hr>';

$(document).ready(function () {

    $(document).on("hidden.bs.modal", ".modal", function () {
        $(this).remove();
    });

    // $('div#samples > span.dynamic').html('<a href="#layouts" style="color:blue;text-decoration:underline;">*Select Layout first.</a>');

    var idInit = randomId(1000, 9999);

    // Add initial tab
    $('#bannerTabs').prepend(bannerTabsLegend);
    $('#bannerTabs span.dynamic').append('<div class="row-fluid flex-it"></div>');

    var o = new bannerObj(idInit);
    o.render();
    //$('fieldset#props' + idInit + ', button.banner-tabs').addClass('show');
    $('button.subtract-button').attr('hidden', true);

    //buttonBehave1(idInit);

    $('button#form-reset').on('click', function () {
        $('form > span.dynamic').html('');
        $('fieldset#bannerTabs span.dynamic .row-fluid.flex-it').html('');
        var o = new bannerObj(randomId(1000, 9999));
        o.render();
        $('button.subtract-button').attr('hidden', true);
    });
});

function buttonBehave1(thisBanner) {

    // dropdown events
    $('select#brands,  select#onClickBehavior').on('change', function () {
        var selectMenu = $(this).attr('name');

        if (selectMenu == 'brands') {
            globalSettings.selectBrand = $('#brands :selected').val();
            if (thisBanner.resourceOrigin == 'remote') {
                $('input[name="lorr1_' + thisBanner.id + '"]').trigger("change");
                $(".input-group1").removeClass("found notfound");
                $(".input-group1").next('.error').attr('hidden', true);
            }
        } else {
            displayOnClickBehavior($(':selected', this).val());
        }
    });

    $('input[name="bpDesktop"],input[name="bpMobile"],input[name="lorr1_' + thisBanner.id + '"]').on('change', function () {

        var type = $(this).attr('name');

        if (type == 'bpDesktop' || type == 'bpMobile') {
            var breakPointNegatoryArray = [],
                namespace = $(this).attr('name').substr(2);

            thisBanner.breakPoints.desktop = $('fieldset#breakpoints input[name="bpDesktop"]:checked').val();
            thisBanner.breakPoints.mobile = $('fieldset#breakpoints input[name="bpMobile"]:checked').val();

            for (x in Object.values(thisBanner.breakPoints)) {
                if (Object.values(thisBanner.breakPoints)[x] == 'no') {
                    breakPointNegatoryArray.push(Object.values(thisBanner.breakPoints)[x]);
                }
            }

            if (breakPointNegatoryArray.length > 1) {
                $('input[name="lorr1_' + thisBanner.id + '"]').closest('.row').addClass("disabled");
                $('input#bgDesktop,input#bgMobile').closest('.row').addClass("disabled");
                $('input#bgDesktop,input#bgMobile').prop({ 'disabled': true, 'required': false });
            } else if ($(this).val() == 'no') {
                $('input#bg' + namespace).prop({ 'disabled': true, 'required': false });
                $('input#bg' + namespace).closest('.row').addClass("disabled");
                $('input[name="lorr1_' + thisBanner.id + '"]').closest('.row').removeClass("disabled");
            } else {
                $('input#bg' + namespace).prop({ 'disabled': false, 'required': true });
                $('input#bg' + namespace).closest('.row').removeClass("disabled");
                $('input[name="lorr1_' + thisBanner.id + '"]').closest('.row').removeClass("disabled");
            }
        } else {
            thisBanner.resourceOrigin = $(this).val();

            if (thisBanner.resourceOrigin == "local") {

                $("fieldset#props" + thisBanner.id + " input[name='bgDesktop'],fieldset#props" + thisBanner.id + " input[name='bgMobile']").each(function () {
                    var curr = $(this).val();
                    if (curr !== "")
                        $(this).attr("data-remote", curr);

                    if ($(this).data("local"))
                        $(this).val($(this).data("local"));

                    $(this).siblings("fieldset#props" + thisBanner.id + " span.input-group-addon1").text("Enter local filename");
                    if ($(this).attr("name") == "bgDesktop")
                        var size = globalSettings.bgDesktopPlaceholder;
                    else
                        var size = globalSettings.bgMobilePlaceholder;
                    $(this).val("").attr("placeholder", size);
                });
            } else if (thisBanner.resourceOrigin == "remote") {

                $("fieldset#props" + thisBanner.id + " input[name='bgDesktop'],fieldset#props" + thisBanner.id + " input[name='bgMobile']").each(function () {
                    var curr = $(this).val();
                    if (curr !== "") {
                        $(this).attr("data-local", curr);
                    }

                    if ($(this).data("remote")) {
                        $(this).val($(this).data("remote"));
                    }

                    if ($("select[name='brands']").val() == "") {
                        $(this).val("").attr("placeholder", "Select a brand");
                        $(this).siblings("fieldset#props" + thisBanner.id + " span.input-group-addon1").text("Enter remote filename");
                    } else {
                        $(this).siblings("fieldset#props" + thisBanner.id + " span.input-group-addon1").text("/images/evergage/" + globalSettings.selectBrand + "/");
                        $(this).val("").attr("placeholder", "Enter Filename...");
                    }
                });
            }

            $(".input-group1").removeClass("found notfound");
            $(".input-group1").next('.error').attr('hidden', true);
        }

        console.log(thisBanner);
    });

    $('input#r,input#g,input#b').on('input', function () {
        var code = $(this).val();

        if (Number(code) > 250) {
            $(this).addClass('error');
            $(this).parent().next('.error').html('Max value is 250');
            $(this).parent().next('.error').attr('hidden', false);
        } else if (Number(code) < 0) {
            $(this).addClass('error');
            $(this).parent().next('.error').html('Min value is 0');
            $(this).parent().next('.error').attr('hidden', false);
        } else {
            $(this).removeClass('error');
            $(this).parent().next('.error').html('');
            $(this).parent().next('.error').attr('hidden', true);
        }
    })

    $("button[name='exporthtml'],button[name='exportcss'],button[name='chooseLayout']").on("click", function () {

        var type = $(this).attr("name"),
            layoutRadioMsg = '';
        if (type == 'chooseLayout') {

            for (var k = 0; k < patterns.length; k++) {
                if (k !== patterns.length - 1) {
                    layoutRadioMsg += '<div class="row"><div class="col-xs-12"><label for="' + k + '">Pattern ' + Number(k + 1) + '</label>&nbsp;&nbsp;<input id="' + k + '" name="pattern" type="radio" value="' + k + '">&nbsp;&nbsp;<img src="' + patterns[k].img + '"></div></div><br>';
                } else {
                    layoutRadioMsg += '<div class="row"><div class="col-xs-12"><label for="' + k + '">Pattern ' + Number(k + 1) + '</label>&nbsp;&nbsp;<input id="' + k + '" name="pattern" type="radio" value="' + k + '">&nbsp;&nbsp;<img src="' + patterns[k].img + '"></div></div>';
                }
            }
            msgBoxFullWidth('<div class="container">' + layoutRadioMsg + '</div>', 'Choose a Layout Type');
            $('input[name="pattern"]').first().prop('checked', true);

            $('input[name="pattern"]').on('change', function () {
                displayContentForm($('input[name="pattern"]:checked').val());
            });
        } else {
            exportCode1(type);
        }
    });

    $("span.help1").on("click", function () {
        var helpMsg = "";
        switch ($(this).data("help")) {
            case "desktop": helpMsg = 'For local testing, place a 962x430px image in the same directory as this HTML file and enter the filename here <i style="font-style:serif;color:#a1a1a1; ">(png,gif,jpg)</i>.<br>For remote testing, place a 962x430px image on the "Production" FTP for the brand you are working on and enter the relative path, for example: "E88/test-image.jpg"';
                break;
            case "mobile": helpMsg = 'For local testing, place a 575x683px image in the same directory as this HTML file and enter the filename here <i style="font-style:serif;color:#a1a1a1; ">(png,gif,jpg)</i>.<br>For remote testing, place a 575x683px image on the "Production" FTP for the brand you are working on and enter the relative path, for example: "E88/test-image.jpg"';
                break;
            case "rgb": helpMsg = 'Enter a number value between the range of 0-250 for each of the RGB fields.';
                break;
            case "required": helpMsg = 'Whether this text is required for this offer. Certain text cannot be omitted.';
            default: break;
        }
        console.log(helpMsg);

        msgBox1(helpMsg, "Help");
    });

    // Run a search on all user fields and confirmAllRequiredMet requirements have been met
    $("input, select, textarea").on("change", function () {
        confirmAllRequiredMet();
    });

    // imgaddress
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

function displayContentForm(el1) {

    $('div#samples > span.dynamic').html('');
    $('div#content > span.dynamic').html('');
    $('.row.text-render span.dynamic').html('');
    var layoutSelected = patterns[el1],
        visualIndex = Number(el1) + 1,
        patternOptionHTML = '<h4>Pattern ' + visualIndex + '</h4><div class="row"> <div class="col-xs-12"> <img src="' + layoutSelected.img + '" alt=""></div>',
        patternCopy = layoutSelected.copy,
        copyFields = '';

    for (var i = 0; i < patternCopy.length; i++) {
        copyFields += ' <div><label for="copy' + (i + 1) + '"></label> <br><input id="copy' + (i + 1) + '" name="copy' + (i + 1) + '" placeholder="text ' + (i + 1) + '" type="text"></div>';
    }

    $('div#samples > span.dynamic').append(patternOptionHTML);
    $('div#copy > span.dynamic').append(copyFields);

    $('div#content > span.dynamic').append('<hr><h4>Copy</h4><div class="row"><h5 class="col-xs-12">Enter your copy for Pattern ' + visualIndex + '</h5><p class="col-xs-12">If this banner does not require copy, then leave these fields blank.</p></div><div class="row enter-text-banner flex-it">' + copyFields + '</div><br>');

    renderedTextInputs = document.querySelectorAll('div#content > span.dynamic input');
    renderedTextInputs.forEach(function (currentValue, index) {
        $('.row.text-render span.dynamic').append('<span id="text-render-' + index + '" style="' + patternCopy[index].styles + '"></span>&nbsp;');
        renderCopyFields(currentValue, index);
    });
}

function renderCopyFields(el1, el2) {
    $(el1).on('input', function (event) {
        var value = $(el1).val(),
            value1 = $('.row.text-render span.dynamic span#text-render-' + el2).text();
        if (value != value1) {
            $('.row.text-render span.dynamic span#text-render-' + el2).text(value);
        } else {
            $('.row.text-render span.dynamic span#text-render-' + el2).append(String.fromCharCode(event.which));
        }
    });
}

function displayOnClickBehavior(el1) {
    $('.row.onclickbehavior span.dynamic').html('');

    var modalHTML = '<fieldset id="modalDefs" class="row"> <legend> <h3>Modal</h3> </legend> <div class="col-xs-6"> <div class="row enter-text-modal flex-it"> <div> <label for="modalHeader">Modal Header</label> <br><input id="modalHeader" name="modalHeader" placeholder="For free standard shipping on orders of $59 or more, &hellip;" type="text" size="50" maxlength="50"></div><br><div> <label for="modalBody">Modal Body<span class="required">*</span></label> <br><textarea name="modalBody" id="modalBody" cols="50" rows="10" placeholder="Free shipping offer excludes&hellip; Not valid in conjuction with any other offer." required></textarea> </div><br><div> <label for="modalExpires">Modal Expires</label> <br><input id="modalExpires" name="modalExpires" placeholder="*Offer expires 8/7/20 at 11:59 pm PDT." type="text" size="50" maxlength="50"></div></div></div><div class="col-xs-6"> <span class="example-modal"> <h4>Example Modal</h4> <img src="https://www.paulayoung.com/images/evergage/py/lightbox/sitewide-c07.gif" alt="Example modal"> </span> </div></fieldset>',
        linkHMTL = '<br><div class="row"> <div class="col-xs-3"><label for="offerLink">Link to another page:<span class="required">*</span></label></div><div class="col-xs-2"> <input id="offerLink" placeholder="/category/wigs/all-wigs.do" type="text" required></div></div>',
        linkAnchorHTML = '<br><div class="row"> <div class="col-xs-3"><label for="anchorLink">Link to a location on the same page:<span class="required">*</span></label></div><div class="col-xs-2"> <input id="anchorLink" placeholder="#anchor" type="text" required></div></div>',
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

    $('.row.onclickbehavior span.dynamic input,.row.onclickbehavior span.dynamic textarea').on('change', confirmAllRequiredMet);
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
    if (fpath == "Enter local filename") {
        fpath = "";
    }

    var fname = $(el).val();
    if (flag) {
        return domain + fpath + fname;
    } else {
        return fpath + fname;
    }

}

function checkImageExists1(el, url) {
    var img = new Image();

    img.onload = function () {
        $(el).parent().addClass("found");
        $(el).parent().next().prop('hidden', true);
        reDraw1();
    };
    img.onerror = function () {
        $(el).parent().addClass("notfound");
        $(el).parent().next().prop('hidden', false);
    };

    img.src = imgURL1(el, true);
}

function exportCode1(type) {
    switch (type) {
        case "exporthtml": htmlExport1();
            break;
        case "exportcss": styleExport1();
            break;
        default: break;
    }
}

function styleExport1() {
    // Form the CSS
    var css = `section.section-offer { position: relative; width: 100%; } section.section-offer h2 { margin: 0; } section.section-offer img { height: auto; width: 100%; } @media screen and (min-width:576px) { section.py-shadow-b-lrg { box-shadow: 0 12px 9px -9px #aaa; } } @media screen and (max-width:575px) { section.py-shadow-b-sml { box-shadow: 0 12px 9px -9px #aaa; } }`;
    var html = "<textarea>" + css + "</textarea>";
    html += '<div class="faux-footer"><button class="copy btn btn-default">Copy To Clipboard</button></div>';
    msgBox(html, "CSS Export");
}

function htmlExport1() {
    // Clone the html to a non visible area
    $("body").append("<div class='noSeeCode'></div>");
    $(".faux-website-container .container section").clone().appendTo(".noSeeCode");

    // Change out all the dummy sections for user input
    // Heading
    $(".noSeeCode img#section-offer-img").attr("alt", $("input[type='text'][name='heading']").val().replace(/'/g, "").replace(/"/g, ""));

    // Img
    var bgDesktopsrc = imgURL1($(".imgaddress[name='bgDesktop']"), false);
    var bgMobilesrc = imgURL1($(".imgaddress[name='bgMobile']"), false);
    // source 962
    $(".noSeeCode picture source[media*='576']").attr("srcset", bgDesktopsrc);
    // source 575
    $(".noSeeCode picture source[media*='575']").attr("srcset", bgMobilesrc);
    // default src and data-srcset
    $(".noSeeCode img#section-offer-img").attr("src", bgDesktopsrc).attr("data-srcset", bgMobilesrc);

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

    console.log($(".noSeeCode"));

    // Destroy noSeeCode element
    $(".noSeeCode").remove();
}

function msgBox1(msg, title) {
    if (!title) title = "";
    var html = `<div id="msgBox" class="modal fade" tabindex="-1" role="dialog">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4 class="modal-title">${title}</h4>
				</div>
				<div class="modal-body">
					${msg}
				</div>
			</div>
		</div>
	</div>`;

    $("body").append(html);
    $("#msgBox").modal("show");
}

function msgBoxFullWidth(msg, title) {
    if (!title) title = "";
    var html = `<div id="msgBox" class="modal fade" tabindex="-1" role="dialog">
		<div class="modal-dialog" style="width:100%" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4 class="modal-title">${title}</h4>
				</div>
				<div class="modal-body">
					${msg}
				</div>
			</div>
		</div>
	</div>`;

    $("body").append(html);
    $("#msgBox").modal("show");
}

function reDraw1() {
    // Update the background-image URLs
    var bgDesktopsrc = imgURL1($(".bgimgaddress[name='bgDesktop']"), true);
    var bgMobilesrc = imgURL1($(".bgimgaddress[name='bgMobile']"), true);

    // source 962
    $("picture source[media*='576']").attr("srcset", bgDesktopsrc);
    // source 575
    $("picture source[media*='575']").attr("srcset", bgMobilesrc);
    // default src and data-srcset
    $("img#section-offer-img").attr("src", bgDesktopsrc).attr("data-srcset", bgMobilesrc);
}

function escapeHTML1(text) {
    var map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, function (m) { return map[m]; });
}

function randomId(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};

function confirmAllRequiredMet() {

    var invalids = [],
        valids = [],
        allRequireds = $(':required');

    for (var j = 0; j < allRequireds.length; j++) {
        if (allRequireds[j].value == '') {
            invalids.push(Number(j) + ':' + allRequireds[j].getAttribute('id'));
        } else {
            valids.push(Number(j) + ':' + allRequireds[j].getAttribute('id'));
        }
    }

    if (invalids.length < 1) {
        $("button[name='exporthtml'],button[name='exportcss']").prop("disabled", false);
    }
    else {
        $("button[name='exporthtml'],button[name='exportcss']").prop("disabled", true);
    }
}

function showBanner(el1) {
    var thisId = $(el1).closest('span').attr('id').substr(5);

    $('fieldset[id*="props"],button.banner-tabs').removeClass('show');
    $('fieldset#props' + thisId + ',button.banner-tabs').addClass('show');

    buttonBehave1(bannerObj(thisId));
}

function addBanner(el1) {
    var tabs = $('.banner-tabs'),
        newId = randomId(1000, 9999),
        o;

    // Dedup
    for (var h = 0; h < tabs.length; h++) {
        if (newId == $(tabs[h]).closest('span').attr('id')) {
            newId = randomId(1000, 9999);
            o = new bannerObj(newId);
        } else {
            o = new bannerObj(newId);
        }
    }

    o.render();

    if (o.visibleIndex($('.banner-tabs')) == globalSettings.maxBannerNumber) {
        $('button.add-button').attr('hidden', true);
    }
}

function removeBanner(el1) {
    var tabs,
        thisId = $(el1).closest('span').attr('id').substr(5);

    $('span#tabbs' + thisId).remove();
    $('fieldset#props' + thisId).remove();

    $('button.add-button').attr('hidden', false);

    tabs = $('.banner-tabs');

    if (tabs.length == globalSettings.minBannerNumber) {
        $('button.subtract-button').attr('hidden', true);
    }
}

function bannerObj(el1) {
    var obj;

    obj = {
        id: Number(el1),
        breakPoints: {
            desktop: 'yes',
            mobile: 'yes'
        },
        onClickBehavior: 'doNothing',
        resourceOrigin: 'local',
        layout: '',
        remoteBuild: false,
        localBuild: true,
        visibleIndex: function (e1) {
            var tabs = e1.length;
            return tabs;
        },
        bannerFormHTML: bannerFormHTML(el1),
        bannerTabsHTML: bannerTabsHTML(el1),
        render: function () {
            // this.buttonBehave(this);
            $('#props' + this.id + ' input[name="lorr1_' + this.id + '"]').first().prop('checked', true);
            $('form > span.dynamic').append(this.bannerFormHTML);
            $('fieldset#bannerTabs span.dynamic .row-fluid.flex-it').append(this.bannerTabsHTML);
            $('button.subtract-button').attr('hidden', false);
        }
    }

    return obj;
}

function bannerFormHTML(el1) {
    var html = '<fieldset id="props' + el1 + '" class="row banner-properties"> <legend> <h2>Banner ' + el1 + ' Properties</h2> </legend> <div class="col-xs-12"> <span class="dynamic"></span> <div class="row"> <div class="col-xs-12"> <div class="row-fluid"> <fieldset id="layouts"> <legend> <h3>Layout</h3> </legend> <button type="button" id="chooseLayout" name="chooseLayout">Choose a layout</button> </fieldset> <fieldset id="patterns"> <legend> <h3>Content</h3> </legend> <div id="samples"> <span class="dynamic"></span> </div><div id="content"> <span class="dynamic"></span> </div></fieldset> </div></div></div><div class="row"> <div class="col-xs-12"> <fieldset id="content"> <legend> <h3>Background</h3> </legend> <div class="row"> <div class="col-xs-12"> <h5>Enter the background details.</h5> </div></div><div class="row"> <div class="col-xs-3"><label for="local1">Local</label> <input id="local1" name="lorr1_' + el1 + '" type="radio" value="local" checked></div><div class="col-xs-3"><label for="remote1">Remote</label> <input id="remote1" name="lorr1_' + el1 + '" type="radio" value="remote"></div></div><div class="row"> <div class="col-xs-12"> <div class="row"> <div class="col-xs-3"><label for="bgDesktop">Image for desktop breakpoint <span class="help1 glyphicon glyphicon-question-sign" data-help="desktop" aria-hidden="true"></span>:<span class="required">*</span></label> </div><div class="col-xs-6 input-group1"> <span class="input-group-addon1" id="img2label">Enter local filename</span> <input id="bgDesktop" class="bgimgaddress form-control1" type="text" name="bgDesktop" placeholder="' + globalSettings.bgDesktopPlaceholder + '" required></div><div class="col-xs-3 error" hidden>Image not found</div></div><div class="row"> <div class="col-xs-3"><label for="bgMobile">Image for mobile breakpoint <span class="help1 glyphicon glyphicon-question-sign" data-help="mobile" aria-hidden="true"></span>:<span class="required">*</span></label> </div><div class="col-xs-6 input-group1"> <span class="input-group-addon1" id="img2label">Enter local filename</span> <input id="bgMobile" class="bgimgaddress form-control1" type="text" name="bgMobile" placeholder="' + globalSettings.bgMobilePlaceholder + '" required></div><div class="col-xs-3 error" hidden>Image not found</div></div></div></div><div class="row"> <div class="col-xs-3"><label for="bgColor">Background color <span class="help1 glyphicon glyphicon-question-sign" data-help="rgb" aria-hidden="true"></span>:</label><span class="required">*</span></div><div class="col-xs-6 input-group1"><span class="input-group-addon1" id="img2label">R</span> <input id="r" class="bgcolor" placeholder="###" type="number" width="10" minlength="3" maxlength="3" required><span class="input-group-addon1" id="img2label">G</span><input id="g" class="bgcolor" placeholder="###" type="number" width="10" maxlength="3" required><span class="input-group-addon1" id="img2label">B</span><input id="b" class="bgcolor" placeholder="###" type="number" width="10" maxlength="3" required></div><div class="col-xs-3 error" hidden></div></div><hr> <div class="row"> <div class="col-xs-3"> <label for="onClickBehavior">OnClick behavior:<span class="required">*</span></label></div><div class="col-xs-2"> <select name="onClickBehavior" id="onClickBehavior" required> <option value="">-- select --</option> <option value="fireModal">Fire modal</option> <option value="linkToPage">Link to page</option> <option value="linkToAnchor">Link to anchor</option> <option value="doNothing">Do nothing </option> </select></div></div><div class="row onclickbehavior"> <div class="col-xs-12"> <span class="dynamic"></span> </div></div></fieldset> </div></div></div></fieldset>';
    return html;
}

function bannerTabsHTML(el1) {
    var html = '<span id="tabbs' + el1 + '" class="col-xs-3"><button type="button" class="subtract-button" onClick="removeBanner(this)">-</button><button type="button" class="banner-tabs" name="bannertab" onClick="showBanner(this)">Banner ' + el1 + '</button><button type="button" class="add-button" onClick="addBanner(this)">+</button><span>';
    return html;
}