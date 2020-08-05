

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

var selectOnClickBehavior,
    selectBrand,
    selectLayoutType,
    selectedPattern,
    selectDesktopImg,
    selectMobileImg,
    selectBgColor,
    resourceOrigin,
    adderHTML = '<div class="adder col-xs-6"><div class="row-fluid"><p>Add<br>another<br>banner!</p></div></div>';

$(document).ready(function () {

    buttonBehave1();

    $(document).on("hidden.bs.modal", ".modal", function () {
        $(this).remove();
    });

    insertAdder();

    // event listener - copy to clipboard
    // $(document).on("click", "button.copy", function () {
    //     $(".modal textarea").select();
    //     document.execCommand('copy');
    //     $(".modal textarea").blur();
    //     var type = $(".modal:visible .modal-title").text().split(" ")[0];
    //     var alertM = `
    // 	<div class="alert alert-success" role="alert">
    // 		<a href="#" class="alert-link">${type} Copied!</a>
    // 	</div>`;
    //     $(".modal-body:visible").prepend(alertM);
    //     setTimeout(function () { $(".modal-body .alert").remove(); }, 3000);
    // });

    $('div#samples > span.dynamic').html('<a href="#layouts" style="color:blue;text-decoration:underline;">*Select Layout first.</a>');

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
});

function buttonBehave1() {

    //$('input, select, textarea').filter('[required]:visible').on("change", validate);

    $('button#form-reset').on('click', function () {
        $('span.dynamic').html('');
        selectOnClickBehavior = '';
        selectBrand = '';
        selectLayoutType = '';
        selectedPattern = '';
        selectDesktopImg = '';
        selectMobileImg = '';
        selectBgColor = '';
        resourceOrigin = '';
    });

    // $('select#brands').on('change', function () {
    //     selectBrand = $('#brands :selected').val();
    // });

    $('select#layoutDropDown, select#onClickBehavior, select#brands').on('change', function () {
        var selectMenu = $(this).attr('name');
        if (selectMenu == 'layoutDropDown') {
            $('div#samples > span.dynamic,div#content > span.dynamic, .row.text-render span.dynamic').html('');
            if ($(':selected', this).val() == 'moreThanOneBannerSplit') {
                displayMultiPatternForm($(':selected', this).val());
            } else if ($(':selected', this).val() != '') {
                displaySinglePatternForm($(':selected', this).val());
            } else {
                $('div#samples > span.dynamic').html('<a href="#layouts" style="color:blue;text-decoration:underline;">*Select Layout first.</a>');
            }
        } else if (selectMenu == 'onClickBehavior') {
            displayOnClickBehavior($(':selected', this).val());
        } else {
            selectBrand = $('#brands :selected').val();
            if (resourceOrigin == 'remote') {
                $("input[name='lorr1']").trigger("change");
                $(".input-group1").removeClass("found notfound");
            }
        }
    });

    $('input[name="bpDesktop"],input[name="bpMobile"]').on('click', function () {
        var namespace = $(this).attr('name').substr(2),
            radiobp = $('fieldset#breakpoints input:checked'),
            bpNoArray = [];

        radiobp.each(function () {
            if ($(this).val() == 'no') {
                bpNoArray.push($(this).val());
            }
        });

        if (bpNoArray.length > 1) {
            $('[name="lorr1"]').closest('.row').addClass("disabled");
            $('input#bgbpDesktop,input#bgMobile').closest('.row').addClass("disabled");
        } else if ($(this).val() == 'no') {
            $('input#bg' + namespace).prop({ 'disabled': true, 'required': false });
            $('input#bg' + namespace).closest('.row').addClass("disabled");
            $('[name="lorr1"]').closest('.row').removeClass("disabled");
        } else {
            $('input#bg' + namespace).prop({ 'disabled': false, 'required': true });
            $('input#bg' + namespace).closest('.row').removeClass("disabled");
            $('[name="lorr1"]').closest('.row').removeClass("disabled");
        }

    });

    // On radio button change
    $("input[name='lorr1']").on("change", function () {

        resourceOrigin = $(this).val();

        if (resourceOrigin == "local") {
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
        } else if (resourceOrigin == "remote") {
            // Enable 'Brand'/'Export'
            // $(".opt-row.brand .clabel").removeClass("disabled");
            // $(".opt-row.brand select").removeAttr("disabled");

            $("input[name='bgDesktop'], input[name='bgMobile']").each(function () {
                var curr = $(this).val();
                if (curr !== "") {
                    $(this).attr("data-local", curr);
                }

                if ($(this).data("remote")) {
                    $(this).val($(this).data("remote"));
                }

                if ($("select[name='brands']").val() == "") {
                    $(this).val("").attr("placeholder", "Select a brand");
                    $(this).siblings("span.input-group-addon1").text("Enter remote filename");
                } else {
                    $(this).siblings("span.input-group-addon1").text("/images/evergage/" + selectBrand + "/");
                    $(this).val("").attr("placeholder", "Enter Filename...");
                }
            });
        }

        $(".input-group1").removeClass("found notfound");
    });

    // $("select[name='brands']").on("change", function () {
    //     if (resourceOrigin == 'remote') {
    //         $("input[name='lorr1']").trigger("change");
    //         $(".input-group1").removeClass("found notfound");
    //     }
    // });

    $('input#r,input#g,input#b').on('input', function () {
        var message = '',
            code = $(this).val(),
            id = $(this).attr('id');

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

    $("button[name='exporthtml'],button[name='exportcss']").on("click", function () {
        var type = $(this).attr("name");
        exportCode1(type);
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

    $("input, select, textarea").on("change", function () {
        // Test the left hand inputs
        // var left1 = 0;
        // var right1 = 1;
        // $(".optCont:first-of-type input.required").each(function () {
        //     if (!$(this).is(":checked"))
        //         return;
        //     var sel = $(this).attr("name");
        //     var value = $(this).parents(".opt-row").contents().find("[name='" + sel + "']:not(.required)").val();
        //     if (value == "")
        //         left1 = 1;
        // });
        // Test the right hand inputs
        // MUST be set to Remote!
        // if ($("input[name='lorr1']:checked").val() == "remote") {
        //     if ($("input#bgDesktop").val() !== "" && $("input#bgMobile").val() !== "" && $("select[name='brand']").val() !== "")
        //         right1 = 0;
        // }

        // if (!left1 && !right1) {
        //     $(".opt-row.export .clabel").removeClass("disabled");
        //     $(".opt-row.export button").removeAttr("disabled");
        // }
        // else {
        //     $(".opt-row.export .clabel").addClass("disabled");
        //     $(".opt-row.export button").attr("disabled", "disabled");
        // }

        // Update href if link checkbox checked
        // if ($("input[type='text'][name='href']").val() !== "" && $("select[name='brand']").val() !== "") {
        //     if ($("input[type='checkbox'][name='linktest']").is(":checked")) {
        //         $("section.section-offer a").attr({
        //             "href": websiteURL1() + $("input[type='text'][name='href']").val(),
        //             "target": "_blank"
        //         });
        //     }
        //     else {
        //         $("section.section-offer a").attr("href", "#").removeAttr("target");
        //     }
        // }
        validate();
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

function displaySinglePatternForm(el1) {
    var layoutSelected,
        patternOptionsHTML = '';

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


    for (item in layoutSelected) {
        patternOptionsHTML += '<div class="row"> <div class="col-xs-12"> <label for="pattern_' + (Number(item) + 1) + '_' + el1 + '">Pattern ' + (Number(item) + 1) + '</label><input data-index="' + Number(item) + '" id="pattern_' + (Number(item) + 1) + '" name="pattern" type="radio"> </div></div><div class="row"><div class="col-xs-12"><img src="' + layoutSelected[item].img + '" alt=""></div></div>';

    };
    $('div#samples > span.dynamic').append('<h4>Patterns</h4>' + patternOptionsHTML);


    $('div#samples input').first().prop('checked', true);
    displayCopyFields(layoutSelected, $('div#samples input').first().data('index'));

    $('input[name="pattern"]').on('click', function () {
        $('div#content > span.dynamic, .row.text-render span.dynamic').html('');
        displayCopyFields(layoutSelected, $(this).data('index'));
    });
}

function displayMultiPatternForm(el1) {
    console.log('here we go');
}


function displayCopyFields(el1, el2) {
    var patternCopy = el1[el2].copy,
        copyFields = '';

    for (var i = 0; i < patternCopy.length; i++) {
        // copyFields += ' <div><label for="copy' + (i + 1) + '">' + patternCopy[i].field + '</label> <br><input id="copy' + (i + 1) + '" name="copy' + (i + 1) + '" placeholder="text ' + (i + 1) + '" type="text"></div>';
        copyFields += ' <div><label for="copy' + (i + 1) + '"></label> <br><input id="copy' + (i + 1) + '" name="copy' + (i + 1) + '" placeholder="text ' + (i + 1) + '" type="text"></div>';
    }

    $('div#content > span.dynamic').append('<hr><h4>Copy</h4><div class="row"><h5 class="col-xs-12">Enter your copy for Pattern ' + (el2 + 1) + '</h5><p class="col-xs-12">If this banner does not require copy, then leave these fields blank.</p></div><div class="row enter-text-banner flex-it">' + copyFields + '</div><br>');

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

    $('.row.onclickbehavior span.dynamic input,.row.onclickbehavior span.dynamic textarea').on('change', validate);
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
    console.log(`${msg}`);
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

function validate() {

    var invalids = [],
        valids = [];

    var allRequireds = $(':required');

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

function bannerObject(el1) {
    var obj;

    obj = {
        patternOptionsHTML: '',
        selectOnClickBehavior: '',
        selectBrand: '',
        selectLayoutType: '',
        selectedPattern: '',
        selectDesktopImg: '',
        selectMobileImg: '',
        selectBgColor: '',
        resourceOrigin: ''
    }

    return obj;
}

function insertAdder() {
    var dataInstance = $('[data-instance]');
    for (var z = 0; z < dataInstance.length; z++) {
        $(dataInstance[z]).attr('data-instance', z);
    }
    $(dataInstance).parent().append(adderHTML);
}