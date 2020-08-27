var brands = {
    "paulayoung": [{
        "baseUrl": "https://www.paulayoung.com",
        "evergagePath": 'py',
        "brandColor": "rgb(184,117,174)"
    }],
    "especiallyyours": [{
        "baseUrl": "https://www.especiallyyours.com",
        "evergagePath": 'ey',
        "brandColor": "rgb(23, 95, 180)"
    }],
    "thelook": [{
        "baseUrl": "https://www.thelook.fashion",
        "evergagePath": 'tl',
        "brandColor": "rgb(0, 93, 166);"
    }],
    "wig": [{
        "baseUrl": "https://www.wig.com",
        "evergagePath": 'wg',
        "brandColor": "rgb(86, 160, 224);"
    }],
    "beyondextensions": [{
        "baseUrl": "https://www.beyondextensions.com",
        "evergagePath": 'be',
        "brandColor": "rgb(255, 97, 84)"
    }]
},
    globalSettings = {
        selectBrand: '',
        layoutMenu: 1,
        desktopmediaquery: '(min-width:768px)',
        mobilemediaquery: '(max-width:767px)',
        bgDesktopPlaceholder: 'Demo-image-962.png',
        bgMobilePlaceholder: 'Demo-image-575.png',
        maxBannerNumber: 4,
        minBannerNumber: 1,
    },
    bannerTabsLegend = '<legend><h3>Banners</h3></legend><p>Click on the [ <span style="font-weight:700;">Banner ####</span> ] button to display the form. Hover over [ <span style="font-weight:700;">Banner ####</span> ] button(s) to view all controls. Click on the [ <span style="color:green;font-weight:700;">+</span> ] button to add another banner. Click on the [ <span style="color:red;font-weight:700;">x</span> ] button to remove a banner.</p></div></div><hr>',
    deviceTypeRegex = /desktop|mobile/,
    // bgTxtRegex = /bg|txt/,
    tabText = '<span style="color:#A0A0A0;font-weight:400;"><span class="tab-visible"><span class="blink">|</span> Click to e</span><span class="header-visible"><span class="blink">|</span> E</span>nter banner name <span class="header-visible">in tab above</span>.</span><b>*</b>';

$(document).ready(function () {

    $(document).on("hidden.bs.modal", ".modal", function () {
        $(this).remove();
    });
    $('[id="bannerTabs"]').prepend(bannerTabsLegend);
    $('[id="bannerTabs"] span.dynamic').append('<div class="row-fluid flex-it"></div>');

    var idInit = randomId(1000, 9999),
        bannerInit = new bannerObj(idInit);

    bannerInit.render();

    $('[id*="tabbs"] .subtract-button').attr('hidden', true);
    //$('[id*="content"] .subtract-button').attr('hidden', true);

    $('button[name="resetall"]').on('click', function () {
        $('[id="bannerTabs"] span.dynamic .row-fluid.flex-it,form > span.dynamic, .text-render span.dynamic').html('');
        bannerInit = new bannerObj(randomId(1000, 9999));
        bannerInit.render();
        $('[id*="tabbs"] .subtract-button').attr('hidden', true);
        //$('[id*="content"] .subtract-button').attr('hidden', true);
    });

});

function buttonBehave1(thisBanner) {
    var id = thisBanner.id,
        state = thisBanner.state;

    // dropdown events
    $('select[name="brands"],[id="props' + id + '"] select[name="onClickBehavior"]').on('change', function () {
        var type = $(this).attr('name');

        if (type == 'brands') {
            globalSettings.selectBrand = $(':selected', this).val();
            if (state == 'remote') {
                $('[id="props' + id + '"] input[name="lorr1_' + id + '"]').trigger("change");
            }
        } else {
            displayOnClickBehavior($(':selected', this).val(), thisBanner);
        }
    });

    // radio events
    $('input[name="bpdesktop_' + id + '"],input[name="bpmobile_' + id + '"],input[name="lorr1_' + id + '"]').on('change', function () {
        var type = $(this).attr('name'),
            namespace = deviceTypeRegex.exec(type);

        if (namespace == 'desktop' || namespace == 'mobile') {

            if ($(this).val() == '0') {
                $('input[name="bg' + namespace + '_' + id + '"]').prop({
                    'disabled': true,
                    'required': false
                });

                $('[id="props' + id + '"] [data-bp="' + namespace + '"],[id="' + id + '"] [data-bp="' + namespace + '"]').not('.disabled').addClass('disabled');

            } else {

                $('[id="props' + id + '"] input[name*="bg' + namespace + '"]').prop({
                    'disabled': false,
                    'required': true
                });

                $('[id*="' + id + '"] [data-bp="' + namespace + '"]').removeClass('disabled');
            }

        } else {
            state = $(this).val();

            if (state == "local") {
                // Disable 'Brand'/'Export'
                // $(".opt-row.brand .clabel").addClass("disabled");
                // $("fieldset#brand select").attr("disabled", "disabled");

                //thisBanner.state = "local";

                $("input[name*='bg']").each(function () {
                    var curr = $(this).val();
                    if (curr !== "")
                        $(this).attr("data-remote", curr);

                    if ($(this).data("local"))
                        $(this).val($(this).data("local"));

                    $(this).siblings("[id='props" + id + "'] span.input-group-addon1").text("Local");
                    if ($(this).attr("name") == "bpDesktop_" + id)
                        var size = 962;
                    else
                        var size = 575
                    $(this).val("").attr("placeholder", "Demo-image-" + size + ".png");
                });

                thisBanner.state = 'local';

            } else if (state == "remote") {

                //thisBanner.state = "remote";

                $("input[name*='bg']").each(function () {
                    var curr = $(this).val();
                    if (curr !== "") {
                        $(this).attr("data-local", curr);
                    }

                    if ($(this).data("remote")) {
                        $(this).val($(this).data("remote"));
                    }

                    if ($("select[name='brands']").val() == "") {
                        $(this).val("").attr("placeholder", "Select a brand");
                        $(this).siblings("[id='props" + id + "'] span.input-group-addon1").text("Remote");
                    } else {
                        $(this).val("").attr("placeholder", "Enter Filename...");
                        $(this).siblings("[id='props" + id + "'] span.input-group-addon1").text("/images/evergage/" + globalSettings.selectBrand + "/");
                    }
                });

                thisBanner.state = 'remote';
            }

            $(".input-group1").removeClass("found notfound");
            $(".input-group1").next('.error').attr('hidden', true);
        }
    });

    // color events
    $('input[id*="r_"],input[id*="g_"],input[id*="b_"]').on('input', function () {
        var code = $(this).val(),
            // namespace = bgTxtRegex.exec($(this).attr('id')),
            id = $(this).attr('id').substr(-4),
            rgb = $(this).attr('name');

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

            // if (namespace == 'bg') {
            switch (rgb) {
                case "r":
                    thisBanner.css.background.desktop.bgColor.r = $(this).val();
                    break;
                case "g":
                    thisBanner.css.background.desktop.bgColor.g = $(this).val();;
                    break;
                case "b":
                    thisBanner.css.background.desktop.bgColor.b = $(this).val();;
                    break;
                default:
                    break;
            }
            // } else {
            //     switch (rgb) {
            //         case "r":
            //             thisBanner.css.textcolor.txtColor.r = $(this).val();
            //             break;
            //         case "g":
            //             thisBanner.css.textcolor.txtColor.g = $(this).val();;
            //             break;
            //         case "b":
            //             thisBanner.css.textcolor.txtColor.b = $(this).val();;
            //             break;
            //         default:
            //             break;
            //     }
            // }

        }

        if ($('.text-render > [id*="' + id + '"]')) {
            $('.text-render > [id="' + id + '"] [data-bp]').attr('style', 'background-color: ' + thisBanner.css.background.desktop.latestBgColor + ';');
        }
    });

    // button events
    $("button[name='exporthtml'],button[name='exportcss']").on("click", function () {

        var type = $(this).attr("name");
        exportCode1(type);
    });

    $("span.help1").on("click", function () {
        var helpMsg = "";
        switch ($(this).data("help")) {
            case "desktop":
                helpMsg = 'For local testing, place a 962x430px image in the same directory as this HTML file and enter the filename here <i style="font-style:serif;color:#a1a1a1; ">(png,gif,jpg)</i>.<br>For remote testing, place a 962x430px image on the "Production" FTP for the brand you are working on and enter the relative path, for example: "E88/test-image.jpg"';
                break;
            case "mobile":
                helpMsg = 'For local testing, place a 575x683px image in the same directory as this HTML file and enter the filename here <i style="font-style:serif;color:#a1a1a1; ">(png,gif,jpg)</i>.<br>For remote testing, place a 575x683px image on the "Production" FTP for the brand you are working on and enter the relative path, for example: "E88/test-image.jpg"';
                break;
            case "rgb":
                helpMsg = 'Enter a number value between the range of 0-250 for each of the RGB fields.';
                break;
            case "required":
                helpMsg = 'Whether this text is required for this offer. Certain text cannot be omitted.';
            default:
                break;
        }
        // console.log(helpMsg);

        msgBox1(helpMsg, "Help");
    });

    // validation event
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
            if ($(this).val() != '') {
                checkImageExists1(this, $(this).val(), thisBanner);
            }

        }
    });

    // Drop Shadow
    $("select[name='dShadow']").on("change", function () {
        $("section.section-offer").removeClass("py-shadow-b py-shadow-b-lrg py-shadow-b-sml");
        var shadow = "py-shadow-b";

        switch ($(this).val()) {
            case "1": shadow = "py-shadow-b-lrg";
                break;
            case "2": shadow = "py-shadow-b-sml";
                break;
            case "3": shadow = "";
        }

        $("section.section-offer").addClass(shadow);
    });

    $('[data-label="banner"]').on('focusout', function () {
        var thisId = $(this).parents('[id*="tabbs"]').attr('id').substr(-4);
        if ($(this).html()) {
            thisBanner.tag = $(this).html();
            $('[id="props' + thisId + '"] h2 .tag').empty();
            $('[id="props' + thisId + '"] h2 .tag').html(thisBanner.latestTag + " ");
        } else {
            $(this).html(tabText)
            $('[id="props' + thisId + '"] h2 .tag').html('*');
        }
    });
}

function websiteURL1() {
    var brand = globalSettings.selectBrand;
    var url = "";

    switch (brand) {
        case "py":
            url = "https://www.paulayoung.com";
            break;
        case "ey":
            url = "https://www.especiallyyours.com";
            break;
        case "wg":
            url = "https://www.wig.com";
            break;
        case "tl":
            url = "https://www.thelook.fashion";
            break;
        default:
            break;
    }

    return url;
}

function imgURL1(el, flag) {
    var domain = websiteURL1();
    var fpath = $(el).siblings(".input-group-addon1").text();
    if (fpath == "Local") {
        fpath = "";
    }

    var fname = $(el).val();
    if (fpath) {
        console.log(flag);
        return domain + fpath + fname;
    } else {
        console.log(flag);
        return fpath + fname;
    }

}

function checkImageExists1(el, url, banner) {
    var img = new Image(),
        bp = $(el).closest('[data-bp]').attr('data-bp');

    img.onload = function () {
        $(el).parent().addClass("found");
        $(el).parent().next().prop('hidden', true);

        if (bp == 'desktop') {
            banner.css.background.desktop.bgImageDesktop = img.src;
        } else {
            banner.css.background.mobile.bgImageMobile = img.src;
        }
        reDraw1(banner, bp);
    };
    img.onerror = function () {
        $(el).parent().addClass("notfound");
        $(el).parent().next().prop('hidden', false);

        if (bp == 'desktop') {
            banner.css.background.desktop.bgImageDesktop = 'none';
        } else {
            banner.css.background.mobile.bgImageMobile = 'none';
        }
    };

    img.src = imgURL1(el, true);
}

function exportCode1(type) {
    switch (type) {
        case "exporthtml":
            htmlExport1();
            break;
        case "exportcss":
            styleExport1();
            break;
        default:
            break;
    }
}

function styleExport1() {
    // Form the CSS
    var css = `section.section-offer { position: relative; width: 100%; } section.section-offer h2 { margin: 0; } section.section-offer img { height: auto; width: 100%; } @media screen and (min-width:576px) { section.py-shadow-b-lrg { box-shadow: 0 12px 9px -9px #aaa; } } @media screen and (max-width:575px) { section.py-shadow-b-sml { box-shadow: 0 12px 9px -9px #aaa; } }`;
    var html = "<textarea>" + css + "</textarea>";
    html += '<div class="faux-footer"><button class="copy btn btn-default">Copy To Clipboard</button></div>';
    msgBox1(html, "CSS Export");
}

function htmlExport1() {
    // Clone the html to a non visible area
    $("body").append("<div class='noSeeCode'></div>");
    $(".faux-website-container .container section").clone().appendTo(".noSeeCode");

    // Change out all the dummy sections for user input
    // Heading
    //$(".noSeeCode img#section-offer-img").attr("alt", $("input[type='text'][name='heading']").val().replace(/'/g, "").replace(/"/g, ""));

    // Img
    var bgDesktopsrc = imgURL1($(".imgaddress[name*='bgDesktop_']"), false);
    var bgMobilesrc = imgURL1($(".imgaddress[name*='bgMobile_']"), false);
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

    var html = "<textarea>" + escapeHTML1($(".noSeeCode")[0].innerHTML) + "</textarea>";
    html += '<div class="faux-footer"><button class="copy btn btn-default">Copy To Clipboard</button></div>';
    msgBox1(html, "HTML Export");

    // Clean up any empty lines in the textarea
    var text = $(".modal textarea").val();
    text = text.replace(/(?:(?:\r\n|\r|\n)\s*){2}/gm, "");
    $(".modal textarea").val(text);

    // console.log($(".noSeeCode"));

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

function reDraw1(el1, el2) {
    // Update the background-image URLs
    //var bgDesktopsrc = imgURL1($(".bgimgaddress[name='bgdesktop_" + el1.id + "']"), true);
    //console.log('redraw');
    //var bgMobilesrc = imgURL1($(".bgimgaddress[name='bgmobile_" + el1.id + "']"), true);
    // console.log('redraw');

    // source 962
    //$("picture source[media*='576']").attr("srcset", bgDesktopsrc);
    // source 575
    //$("picture source[media*='575']").attr("srcset", bgMobilesrc);
    // default src and data-srcset
    //$("img#section-offer-img").attr("src", bgDesktopsrc).attr("data-srcset", bgMobilesrc);

    var id = el1.id;

    $('[id="' + id + '"] [data-bp="' + el2 + '"]').css({ 'background-image': 'url("' + el1.css.background.desktop.bgImageDesktop + '")', 'background-size': 'cover', 'background-repeat': 'no-repeat', 'background-position': 'center center' });
}

function escapeHTML1(text) {
    var map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, function (m) {
        return map[m];
    });
}

function randomId(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};

function getTextRenderItem(el1) {
    var parentbp = $(el1).parents('[data-bp]').attr('data-bp'),
        bannerId = $(el1).parents('[id*="content"]').attr('id').substr(-4),
        item = $(el1).parents('[data-input-index]').attr('data-input-index'),
        itemOutput = document.querySelector('.text-render [id="' + bannerId + '"] [data-bp="' + parentbp + '"] [data-output-index="' + item + '"]');

    return itemOutput;
}

function renderCopyFields(el1, el2) {

    $(el1).on('input', function () {
        var value1 = $(el1).html(),
            value2 = $(el2).html();

        if (value1 == '') {
            $(el2).css('display', 'none');
        } else {
            $(el2).css('display', 'block');
        }

        if (value1 != value2) {
            $(el2).html(value1);
        } else {
            $(el2).append(String.fromCharCode(event.which));
        }
    });
}

function displayOnClickBehavior(behaviorSelected, banner) {
    $('[id="props' + banner.id + '"] .row.onclickbehavior span.dynamic').html('');

    var modalHTML = '<div class="row-fluid"><h4>Modal</h4><hr><div class="col-xs-6"> <div class="row enter-text-modal flex-it"> <div> <label for="modalHeader">Modal Header</label> <br><input id="modalHeader" name="modalHeader" placeholder="For free standard shipping on orders of $59 or more, &hellip;" type="text" size="50" maxlength="50"></div><br><div> <label for="modalBody">Modal Body<span class="required">*</span></label> <br><textarea name="modalBody" id="modalBody" cols="50" rows="10" placeholder="Free shipping offer excludes&hellip; Not valid in conjuction with any other offer." required></textarea> </div><br><div> <label for="modalFooter">Modal Footer</label> <br><input id="modalFooter" name="modalFooter" placeholder="*Offer expires 8/7/20 at 11:59 pm PDT." type="text" size="50" maxlength="50"></div></div></div><div class="col-xs-6"> <span class="example-modal"> <h5>Example Modal</h5> <img src="img/test.png" alt="Example modal"> </span> </div></div>',
        linkHMTL = '<br><div class="row"> <div class="col-xs-3"><label for="offerLink">Link to another page:<span class="required">*</span></label></div><div class="col-xs-6"> <input id="offerLink" placeholder="/category/wigs/all-wigs.do" type="text" style="width:100%" required></div></div>',
        linkAnchorHTML = '<br><div class="row"> <div class="col-xs-3"><label for="anchorLink">Link to point on same page:<span class="required">*</span></label></div><div class="col-xs-6"> <input id="anchorLink" placeholder="#anchor" type="text" required></div></div>',
        doNothing = '<br><p>This will be a static banner.</p>';

    switch (behaviorSelected) {
        case 'fireModal':
            banner.onClickBehaviorHTML = modalHTML;
            break;
        case 'linkToPage':
            banner.onClickBehaviorHTML = linkHMTL;
            break;
        case 'linkToAnchor':
            banner.onClickBehaviorHTML = linkAnchorHTML;
            break;
        case 'doNothing':
            banner.onClickBehaviorHTML = doNothing;
            break;
        default:
            break;
    }

    $('[id="props' + banner.id + '"] .row.onclickbehavior span.dynamic').append(banner.onClickBehaviorHTML);

    $("input, select, textarea").on("change", function () {
        confirmAllRequiredMet();
    });
}

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
    } else {
        $("button[name='exporthtml'],button[name='exportcss']").prop("disabled", true);
    }
}

function show(thisButton) {
    var thisId = $(thisButton).closest('[data-ordinal]').attr('id').substr(5);

    $('fieldset[id*="props"],button.banner-tabs,.text-render > div').removeClass('show');
    $('fieldset#props' + thisId + ', [id="' + thisId + '"]').addClass('show');
    $(thisButton).addClass('show');
}

function add(thisButton) {

    var dataDomain = $(thisButton).data('domain');

    if (dataDomain == 'tabs') {
        var id = randomId(1000, 9999),
            parent,
            parentValue,
            series = $('.banner-tabs'),
            z;

        // Dedup
        for (var h = 0; h < series.length; h++) {
            parent = $(series[h]).closest('div[id*="tabbs"]');
            parentValue = $(parent).attr('id');
            if (id == parentValue) {
                id = randomId(1000, 9999);
                z = new bannerObj(id);
            } else {
                z = new bannerObj(id);
            }
        }

        z.render();

        series = $('.banner-tabs');

        if (z.visibleIndex(series) == globalSettings.maxBannerNumber) {
            $('[id*="tabbs"] .add-button').attr('hidden', true);
        }

        $('[id*="tabbs"] .subtract-button').attr('hidden', false);

        $('fieldset[id*="props"],button.banner-tabs,.text-render > div').removeClass('show');
        $('fieldset#props' + z.id + ', [id="tabbs' + z.id + '"] .banner-tabs, [id="' + z.id + '"]').addClass('show');

    } else if (dataDomain == 'editors') {
        var id = $(thisButton).parents('[id*="content"]').attr('id').substr(-4),
            parent = $(thisButton).closest('[data-bp]'),
            parentValue = $(parent).data('bp'),
            series = $('.editable', parent);

        $(parent).append(bannerObj(id).copyInput($(parent).children('[data-input-index]').last().data('input-index') + 1));

        $('[id="' + id + '"] [data-bp="' + parentValue + '"]').append(bannerObj(id).copyOutput($(parent).children('[data-input-index]').last().data('input-index')));

        $('[id="content_' + id + '"] .editablewrapper [data-bp="' + parentValue + '"] .subtract-button').attr('hidden', false);
    } else {
        var id = $(thisButton).parents('[id*="content"]').attr('id').substr(-4),
            parent = $(thisButton).closest('.editablewrapper');

        $(parent).append(breakpointHTML('test'));

    }
}

function remove(thisButton) {

    var dataDomain = $(thisButton).data('domain');

    if (dataDomain == 'tabs') {
        var parent = $(thisButton).closest('[id*="tabbs"]'),
            id = $(parent).attr('id').substr(5),
            series;

        $('#tabbs' + id + ', fieldset#props' + id + ', .row .text-render > [id="' + id + '"], .row .text-render > [id="' + id + '"] + .gutter').remove();

        series = $('.banner-tabs');

        if (series.length == globalSettings.minBannerNumber) {
            $('[id*="tabbs"] .subtract-button').attr('hidden', true);
        }

        $('[id*="tabbs"] .add-button').attr('hidden', false);

    } else {
        var parentAttr = $(thisButton).closest('[data-bp]').attr('data-bp'),
            dataIndex = $(thisButton).closest('[data-input-index]').attr('data-input-index'),
            id = $(thisButton).closest('[id*="content"]').attr('id').substr(-4),
            series;

        $('[data-bp="' + parentAttr + '"] [data-input-index="' + dataIndex + '"], [data-bp="' + parentAttr + '"] [data-output-index="' + dataIndex + '"]').remove();
        //$(this).remove();

        series = $('[id="content_' + id + '"] [data-bp="' + parentAttr + '"] [data-input-index]');

        if (series.length == globalSettings.minBannerNumber) {
            $('[id="content_' + id + '"] [data-bp="' + parentAttr + '"] [data-input-index] .subtract-button').attr('hidden', true);
        }
    }
}

function bannerFormHTML(el1) {
    var id = el1.id,
        html,

        content = '<div class="row">' +
            '<div class="col-xs-12">' +
            '<div class="row-fluid">' +
            '<fieldset id="content_' + id + '">' +
            '<legend><h3>Content</h3></legend>' +
            '<p>Type or paste text into fields below. Add fields to create text groups. Click on the [ <span style="color:green;font-weight:700;">+</span> ] button to add another text field. Click on the [ <span style="color:red;font-weight:700;">x</span> ] button to remove a text field.</p>' +
            '<div class="row-fluid editablewrapper">' +
            '<span data-bp="desktop"><h4 class="col-xs-2" style="margin-top:0;margin-bottom:0;margin-right:1rem;">Breakpoint 1&nbsp;<button type="button" data-domain="breakpoints" class="subtract-button" onClick="remove(this)" style="color:red;">x</button><button type="button" data-domain="breakpoints" class="add-button" onClick="add(this)" style="color:green;">+</button></h4><span data-input-index="1"><span class="controls-add-subtract"><button type="button" data-domain="editors" class="subtract-button" onClick="remove(this)" style="color:red;">x</button><button type="button" data-domain="editors" class="textEdit-button" onClick="textEdit(this)" style="color:blue;font-weight:700;">T</button><button type="button" data-domain="editors" class="add-button" onClick="add(this)"style="color:green;">+</button></span><span class="editablecontainer"><div class="editable" contenteditable="true" onfocus="renderCopyFields(this,getTextRenderItem(this))"></div></span></span></span>' +
            // '<hr>' +
            // '<span data-bp="mobile"><h4 class="col-xs-2" style="margin-top:0;margin-bottom:0;margin-right:1rem;">Mobile</h4><span data-input-index="1"><span class="controls-add-subtract"><button type="button" data-domain="editors" class="subtract-button" onClick="remove(this)" style="color:red;">x</button><button type="button" data-domain="editors" class="textEdit-button" onClick="textEdit(this)" style="color:blue;font-weight:700;">T</button><button type="button" data-domain="editors" class="add-button" onClick="add(this)"style="color:green;">+</button></span><span class="editablecontainer"><div class="editable" contenteditable="true" onfocus="renderCopyFields(this,getTextRenderItem(this))"></div></span></span></span>' +
            '</div>' +
            '</fieldset>' +
            '</div>' +
            '</div>' +
            '</div>',

        breakpoints = '<div class="row">' +
            '<div class="col-xs-6">' +
            '<div class="row-fluid">' +
            '<fieldset id="breakpoints_' + id + '">' +
            '<legend> <h3>Breakpoints</h3> </legend>' +
            '<div class="row">' +
            '<div class="col-xs-6">' +
            '<label for="bpDesktopYes_' + id + '">Desktop? Yes</label> <input id="bpDesktopYes_' + id + '" name="bpdesktop_' + id + '" type="radio" value="1" checked> <label for="bpDesktopNo_' + id + '">No</label> <input id="bpDesktopNo_' + id + '" name="bpdesktop_' + id + '" type="radio" value="0"> </div>' +
            '<div class="col-xs-6">' +
            '<label for="bpMobileYes_' + id + '">Mobile? Yes</label> <input id="bpMobileYes_' + id + '" name="bpmobile_' + id + '" type="radio" value="1" checked> <label for="bpMobileNo_' + id + '">No</label> <input id="bpMobileNo_' + id + '" name="bpmobile_' + id + '" type="radio" value="0"> </div>' +
            '</div>' +
            '</fieldset>' +
            '</div>' +
            '</div>' +
            '</div>',

        campaign = '<div class="row">' +
            '<div class="col-xs-12">' +
            '<div class="row-fluid">' +
            '<fieldset id="campaign_' + id + '">' +
            '<legend> <h3>Campaign</h3> </legend>' +
            '<div class="row">' +
            '<div class="col-xs-6">' +
            '<label for="campaignName_' + id + '">Name: </label><input id="campaignName_' + id + '" name="campaignName_' + id + '" type="text" placeholder="' + id + '"> </div>' +
            '</div>' +
            '</fieldset>' +
            '</div>' +
            '</div>' +
            '</div>',

        background = '<div class="row">' +
            '<div class="col-xs-12">' +
            '<fieldset id="background_' + id + '"> <legend> <h3>Background</h3> </legend> <div class="row">' +
            '<div class="col-xs-12"><h5>Enter the background details.</h5> </div>' +
            '</div>' +
            '<div class="row">' +
            '<div class="col-xs-3">' +
            '<label for="local1_' + id + '">Local</label> <input id="local1_' + id + '" name="lorr1_' + id + '" type="radio" value="local" checked>' +
            '</div>' +
            '<div class="col-xs-3">' +
            '<label for="remote1_' + id + '">Remote</label> <input id="remote1_' + id + '" name="lorr1_' + id + '" type="radio" value="remote">' +
            '</div>' +
            '</div>' +
            '<div class="row">' +
            '<div class="col-xs-12">' +
            '<div class="row" data-bp="desktop">' +
            '<div class="col-xs-3">' +
            '<label for="bgDesktop_' + id + '">Image for desktop breakpoint <span class="help1 glyphicon glyphicon-question-sign" data-help="desktop" aria-hidden="true"></span>:<span class="required">*</span></label>' +
            '</div>' +
            '<div class="col-xs-6 input-group1">' +
            '<span class="input-group-addon1" id="img2label">Local</span> <input id="bgDesktop_' + id + '" class="bgimgaddress form-control1" type="text" name="bgdesktop_' + id + '" placeholder="' + globalSettings.bgDesktopPlaceholder + '" required>' +
            '</div>' +
            '<div class="col-xs-3 error" hidden>Image not found</div>' +
            '</div>' +
            '<div class="row" data-bp="mobile">' +
            '<div class="col-xs-3">' +
            '<label for="bgMobile_' + id + '">Image for mobile breakpoint <span class="help1 glyphicon glyphicon-question-sign" data-help="mobile" aria-hidden="true"></span>:<span class="required">*</span></label>' +
            '</div>' +
            '<div class="col-xs-6 input-group1">' +
            '<span class="input-group-addon1" id="img2label">Local</span> <input id="bgMobile_' + id + '" class="bgimgaddress form-control1" type="text" name="bgmobile_' + id + '" placeholder="' + globalSettings.bgMobilePlaceholder + '" required>' +
            '</div>' +
            '<div class="col-xs-3 error" hidden>Image not found</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="row">' +
            '<div class="col-xs-3">' +
            '<label for="bgColor">Background color <span class="help1 glyphicon glyphicon-question-sign" data-help="rgb" aria-hidden="true"></span>:</label><span class="required">*</span>' +
            '</div>' +
            '<div class="col-xs-6 input-group1">' +
            '<span class="input-group-addon1" id="img2label">R</span> <input id="r_bg' + id + '" name="r" class="bgcolor" placeholder="###" type="number" width="10" minlength="3" maxlength="3" required>' +
            '<span class="input-group-addon1" id="img2label">G</span><input id="g_bg' + id + '" name="g" class="bgcolor" placeholder="###" type="number" width="10" maxlength="3" required>' +
            '<span class="input-group-addon1" id="img2label">B</span><input id="b_bg' + id + '" name="b" class="bgcolor" placeholder="###" type="number" width="10" maxlength="3" required>' +
            '</div>' +
            '<div class="col-xs-3 error" hidden></div>' +
            '</div>' +
            // '<div class="row">' +
            // '<div class="col-xs-3">' +
            // '<label for="bgColor">Text color <span class="help1 glyphicon glyphicon-question-sign" data-help="rgb" aria-hidden="true"></span>:</label><span class="required">*</span>' +
            // '</div>' +
            // '<div class="col-xs-6 input-group1">' +
            // '<span class="input-group-addon1" id="img2label">R</span> <input id="r_txt' + id + '" name="r" class="bgcolor" placeholder="###" type="number" width="10" minlength="3" maxlength="3" required>' +
            // '<span class="input-group-addon1" id="img2label">G</span><input id="g_txt' + id + '" name="g" class="bgcolor" placeholder="###" type="number" width="10" maxlength="3" required>' +
            // '<span class="input-group-addon1" id="img2label">B</span><input id="b_txt' + id + '" name="b" class="bgcolor" placeholder="###" type="number" width="10" maxlength="3" required>' +
            // '</div>' +
            // '<div class="col-xs-3 error" hidden></div>' +
            // '</div>' +
            '</fieldset>' +
            '</div>' +
            '</div>',

        clickbehavior = '<div class="row">' +
            '<div class="col-xs-12">' +
            '<fieldset id="clickbehavior_' + id + '">' +
            '<legend><h3>Click Behavior</h3></legend>' +
            '<div class="row">' +
            '<div class="col-xs-3">' +
            '<label for="onClickBehavior_' + id + '">OnClick behavior:<span class="required">*</span></label>' +
            '</div>' +
            '<div class="col-xs-2">' +
            '<select name="onClickBehavior" id="onClickBehavior_' + id + '" required>' +
            '<option value="">-- select --</option>' +
            '<option value="fireModal">Fire modal</option>' +
            '<option value="linkToPage">Link to page</option>' +
            '<option value="linkToAnchor">Link to anchor</option>' +
            '<option value="doNothing">Do nothing </option>' +
            '</select>' +
            '</div>' +
            '</div>' +
            '<div class="row onclickbehavior">' +
            '<div class="col-xs-12">' +
            '<span class="dynamic"></span>' +
            '</div>' +
            '</div>' +
            '</fieldset>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</fieldset>' +
            '</div>' +
            '</div>';

    html = '<fieldset id="props' + id + '" class="row banner-properties"> <legend> <h2><span class="tag">*</span>Properties</h2> </legend> <div class="col-xs-12">'
        + content
        // + breakpoints
        // + campaign
        + background
        + clickbehavior
    '</div></fieldset>';

    return html;
}

function bannerTabsHTML(el1) {
    var id = el1.id,
        html = '<div id="tabbs' + id + '" class="col-xs-3" data-ordinal="">' +
            '<span class="controls-add-subtract">' +
            '<button type="button" data-domain="tabs" class="subtract-button" onClick="remove(this)" style="color:red;">x</button>' +
            '<button type="button" data-domain="tabs" class="add-button" onClick="add(this)" style="color:green;">+</button>' +
            '</span>' +
            '<span class="controls-ordinals">' +
            '<button type="button" class="banner-tabs" name="bannertab" onClick="show(this)" data-label="banner" contenteditable>' + el1.latestTag + '</button>' +
            '</span>' +
            '<div>';

    return html;
}

function bannerCopySnippetHTML(el1) {
    var html = '<div id="' + el1.id + '" class="banner trigger" style="background-color: ' + el1.css.background.desktop.latestBgColor + ';color: ' + el1.css.textcolor.latestTxtColor + ';" role="button" style="display:block">' +
        '<div data-bp="desktop">' +
        '<span class="text-group" data-output-index="1"></span>' +
        '</div>' +
        '<div data-bp="mobile">' +
        '<span class="text-group" data-output-index="1"></span>' +
        '</div>' +
        '</div><span class="gutter"></span>';

    return html;
}

function breakpointHTML(el1) {
    var html = '<span data-bp="desktop"><h4 class="col-xs-2" style="margin-top:0;margin-bottom:0;margin-right:1rem;">Breakpoint 1&nbsp;<button type="button" data-domain="breakpoints" class="subtract-button" onclick="remove(this)" style="color:red;" hidden="hidden">x</button><button type="button" data-domain="breakpoints" class="add-button" onclick="add(this)" style="color:green;">+</button></h4><span data-input-index="1"><span class="controls-add-subtract"><button type="button" data-domain="editors" class="subtract-button" onclick="remove(this)" style="color:red;" hidden="hidden">x</button><button type="button" data-domain="editors" class="textEdit-button" onclick="textEdit(this)" style="color:blue;font-weight:700;">T</button><button type="button" data-domain="editors" class="add-button" onclick="add(this)" style="color:green;">+</button></span><span class="editablecontainer"><div class="editable" contenteditable="true" onfocus="renderCopyFields(this,getTextRenderItem(this))"></div></span></span></span>';

    return html;
}

function bannerObj(el1) {
    var obj;

    obj = {
        id: el1,
        tag: '<span style="color:#A0A0A0;font-weight:400;"><span class="tab-visible"><span class="blink">|</span> Click to e</span><span class="header-visible"><span class="blink">|</span> E</span>nter banner name <span class="header-visible">in tab above</span>.</span><b>*</b>',
        get latestTag() {
            return this.tag;
        },
        css: {
            devicetype: {
                desktop: {
                    visible: true,
                    mediaquery: globalSettings.desktopmediaquery
                },
                mobile: {
                    visible: true,
                    mediaquery: globalSettings.mobilemediaquery
                }
            },
            background: {
                desktop: {
                    bgImageDesktop: '',
                    bgColor: {
                        r: 184,
                        g: 117,
                        b: 174
                    },
                    get latestBgColor() {
                        return 'rgb(' + this.bgColor.r + ',' + this.bgColor.g + ',' + this.bgColor.b + ')';
                    }
                },
                mobile: {
                    bgImageMobile: '',
                    bgColor: {
                        r: function () {
                            return this.desktop.latestBgColor.r;
                        },
                        g: function () {
                            return this.desktop.latestBgColor.g;
                        },
                        b: function () {
                            return this.desktop.latestBgColor.b;
                        }
                    }
                }
            },
            textcolor: {
                txtColor: {
                    r: 250,
                    g: 250,
                    b: 250
                },
                get latestTxtColor() {
                    return 'rgb(' + this.txtColor.r + ',' + this.txtColor.g + ',' + this.txtColor.b + ')';
                }
            }
        },
        copyInput: function (number) {
            var html = '<span data-input-index="' + number + '">' +
                '<span class="controls-add-subtract">' +
                '<button type="button" data-domain="editors" class="subtract-button" onClick="remove(this)" style="color:red;">x</button>' +
                '<button type="button" data-domain="editors" class="textEdit-button" onClick="textEdit(this)" style="color:blue;font-weight:700;">T</button>' +
                '<button type="button" data-domain="editors" class="add-button" onClick="add(this)" style="color:green;">+</button>' +
                '</span>' +
                '<span class="editablecontainer">' +
                '<div class="editable" contenteditable="true" onfocus="renderCopyFields(this,getTextRenderItem(this))"></div>' +
                '</span>' +
                '</span>';

            return html;
        },
        copyOutput: function (number) {
            var html = '<span class="text-group" data-output-index="' + number + '"></span>';

            return html;
        },
        visibleIndex: function (e1) {
            var tabs = e1.length;
            return tabs;
        },
        onClickBehaviorHTML: '<br><p>This will be a static banner.</p>',
        buttonBehave: function () {
            buttonBehave1(this);
        },
        render: function () {
            $('form > span.dynamic').append(bannerFormHTML(this));
            $('[id="bannerTabs"] span.dynamic .row-fluid.flex-it').append(bannerTabsHTML(this));
            $('.row .text-render').append(bannerCopySnippetHTML(this));
            $('input[name="lorr1_' + this.id + '"]').first().prop('checked', true);
            this.buttonBehave();
            $('[id="content_' + this.id + '"] .editablewrapper [data-bp] .subtract-button').attr('hidden', true);
        },
        state: 'local'
    }
    return obj;
}