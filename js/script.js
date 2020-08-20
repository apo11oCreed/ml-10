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
    ordinals: [],
    banners: []
},
bannerTabsLegend = '<legend><h3>Banners</h3></legend><p>Click on the [ <span style="font-weight:700;">Banner ####</span> ] button to display the form. Hover over [ <span style="font-weight:700;">Banner ####</span> ] button(s) to view all controls. Click on the [ <span style="color:green;font-weight:700;">+</span> ] button to add another banner. Click on the [ <span style="color:red;font-weight:700;">x</span> ] button to remove a banner. <span style="text-transform:uppercase;">Note</span>: Changes to number of banners will require new selections of layout patterns for all previously assigned.</p></div></div><hr>',
deviceTypeRegex = /desktop|mobile/,
bgTxtRegex = /bg|txt/;

$(document).ready(function () {

var idInit = randomId(1000, 9999);

$(document).on("hidden.bs.modal", ".modal", function () {
    $(this).remove();
});

$('[id="bannerTabs"]').prepend(bannerTabsLegend);
$('[id="bannerTabs"] span.dynamic').append('<div class="row-fluid flex-it"></div>');

var bannerInit = new bannerObj(idInit);
bannerInit.render();
$('[id*="tabbs"] .subtract-button').attr('hidden', true);

$('button[name="resetall"]').on('click', function () {
    $('[id="bannerTabs"] span.dynamic .row-fluid.flex-it,form > span.dynamic, .text-render span.dynamic').html('');
    bannerInit = new bannerObj(randomId(1000, 9999));
    bannerInit.render();
    $('[id*="tabbs"] .subtract-button').attr('hidden', true);
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
        var breakPointNegatoryArray = [];

        Number($('input[name="bpdesktop_' + id + '"]:checked').val()) ? thisBanner.css.devicetype.desktop.visible = true : thisBanner.css.devicetype.desktop.visible = false;
        Number($('input[name="bpmobile_' + id + '"]:checked').val()) ? thisBanner.css.devicetype.mobile.visible = true : thisBanner.css.devicetype.mobile.visible = false;

        for (key in thisBanner.css.devicetype) {
            if (thisBanner.css.devicetype[key].visible == false) {
                breakPointNegatoryArray.push(false);
            }
        }

        console.log(breakPointNegatoryArray);

        if (breakPointNegatoryArray.length > 1) {
            $('input[name="lorr1_' + id + '"]').closest('.row').addClass("disabled");
            $('[data-bp="desktop"],[data-bp="mobile"]').addClass("disabled");

            $('[id="props' + id + '"] input[name="bgdesktop_' + id + '"],[id="props' + id + '"] input[name="bgmobile_' + id + '"]').prop({
                'disabled': true,
                'required': false
            });
        } else if ($(this).val() == '0') {
            $('input[name="bg' + namespace + '_' + id + '"]').prop({
                'disabled': true,
                'required': false
            });

            $('[id="props' + id + '"] [data-bp="' + namespace + '"],[id="output_' + id + '"] [data-bp="' + namespace + '"]').not('.disabled').addClass('disabled');

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
        namespace = bgTxtRegex.exec($(this).attr('id')),
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

        if (namespace == 'bg') {
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
        } else {
            switch (rgb) {
                case "r":
                    thisBanner.css.textcolor.txtColor.r = $(this).val();
                    break;
                case "g":
                    thisBanner.css.textcolor.txtColor.g = $(this).val();;
                    break;
                case "b":
                    thisBanner.css.textcolor.txtColor.b = $(this).val();;
                    break;
                default:
                    break;
            }
        }

    }

    if ($('.text-render > span.dynamic > [id*="output_' + id + '"]')) {
        $('.text-render > span.dynamic > [id="output_' + id + '"] [data-bp]').attr('style', 'background-color: ' + thisBanner.css.background.desktop.latestBgColor + ';color: ' + thisBanner.css.textcolor.latestTxtColor + ';');
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
}

function chooseLayoutMenuBuilder(layoutsArray) {

var layoutRadioMsg = '';
for (var q = 0; q < layoutsArray.length; q++) {

    layoutRadioMsg += '<h2>' + patterns[layoutsArray[q]][0].pattern + '</h2>';

    for (var k = 0; k < patterns[layoutsArray[q]].length; k++) {
        if (k !== patterns.length - 1) {
            layoutRadioMsg += '<div class="row"><div class="col-xs-12"><label for="' + k + '">Pattern ' + Number(k + 1) + '</label>&nbsp;&nbsp;<input data-family-pattern="' + patterns[layoutsArray[q]][0].pattern + '" data-family-code="' + layoutsArray[q] + '" id="' + k + '" name="pattern" type="radio" value="' + k + '">&nbsp;&nbsp;<img src="' + patterns[layoutsArray[q]][k].img + '"></div></div><br>';
        } else {
            layoutRadioMsg += '<div class="row"><div class="col-xs-12"><label for="' + k + '">Pattern ' + Number(k + 1) + '</label>&nbsp;&nbsp;<input data-family-pattern="' + patterns[layoutsArray[q]][0].pattern + '" data-family-code="' + layoutsArray[q] + '" id="' + k + '" name="pattern" type="radio" value="' + k + '">&nbsp;&nbsp;<img src="' + patterns[layoutsArray[q]][k].img + '"></div></div>';
        }
    }
}
return layoutRadioMsg;
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
    type = deviceTypeRegex.exec($(el).attr('id'));

img.onload = function () {
    $(el).parent().addClass("found");
    $(el).parent().next().prop('hidden', true);
    reDraw1(banner);

    if (type == 'Desktop') {
        banner.css.background.desktop.bgImageDesktop = img.src;
    } else {
        banner.css.background.mobile.bgImageMobile = img.src;
    }
};
img.onerror = function () {
    $(el).parent().addClass("notfound");
    $(el).parent().next().prop('hidden', false);

    if (type == 'Desktop') {
        banner.css.background.desktop.bgImageDesktop = '';
    } else {
        banner.css.background.mobile.bgImageMobile = '';
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

function reDraw1(el1) {
// Update the background-image URLs
var bgDesktopsrc = imgURL1($(".bgimgaddress[name='bgDesktop_" + el1.id + "']"), true);
console.log('redraw');
var bgMobilesrc = imgURL1($(".bgimgaddress[name='bgMobile_" + el1.id + "']"), true);
console.log('redraw');

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
return text.replace(/[&<>"']/g, function (m) {
    return map[m];
});
}

function randomId(min, max) {
return Math.floor(Math.random() * (max - min) + min);
};

function getTextRenderItem(el1) {
var parentbp = $(el1).parents('[data-bp]').attr('data-bp'),
    bannerId = $(el1).parents('[id*="edits"]').attr('id').substr(-4),
    item = $(el1).parents('[data-input-index]').attr('data-input-index'),
    itemOutput = document.querySelector('.text-render span.dynamic [id="output_' + bannerId + '"] [data-bp="' + parentbp + '"] [data-output-index="' + item + '"]');

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

var modalHTML = '<div class="row-fluid"><h4>Modal</h4><hr><div class="col-xs-6"> <div class="row enter-text-modal flex-it"> <div> <label for="modalHeader">Modal Header</label> <br><input id="modalHeader" name="modalHeader" placeholder="For free standard shipping on orders of $59 or more, &hellip;" type="text" size="50" maxlength="50"></div><br><div> <label for="modalBody">Modal Body<span class="required">*</span></label> <br><textarea name="modalBody" id="modalBody" cols="50" rows="10" placeholder="Free shipping offer excludes&hellip; Not valid in conjuction with any other offer." required></textarea> </div><br><div> <label for="modalExpires">Modal Expires</label> <br><input id="modalExpires" name="modalExpires" placeholder="*Offer expires 8/7/20 at 11:59 pm PDT." type="text" size="50" maxlength="50"></div></div></div><div class="col-xs-6"> <span class="example-modal"> <h5>Example Modal</h5> <img src="img/test.png" alt="Example modal"> </span> </div></div>',
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

function showBanner(thisButton) {
var thisId = $(thisButton).closest('[data-ordinal]').attr('id').substr(5);

$('fieldset[id*="props"],button.banner-tabs,[id*="output_"]').removeClass('show');
$('fieldset#props' + thisId + ', [id="output_' + thisId + '"]').addClass('show');
$(thisButton).addClass('show');
}

function add(thisButton) {

var thisButtonDomain = $(thisButton).data('domain'),
    thisButtonBannerId,
    thisButtonParent,
    thisButtonParentValue,
    thisSeries;

if (thisButtonDomain == 'tabs') {
    var idNew = randomId(1000, 9999),
        z;

    thisButtonParent = $(thisButton).closest('div[id*="tabbs"]');
    thisSeries = $('.banner-tabs');

    // Dedup
    for (var h = 0; h < thisSeries.length; h++) {
        if (idNew == thisButtonParent.attr('id')) {
            idNew = randomId(1000, 9999);
            z = new bannerObj(idNew);
        } else {
            z = new bannerObj(idNew);
        }
    }

    $('[id*="content"] > span.dynamic, div.text-render > span.dynamic .desktop, div.text-render > span.dynamic .mobile').html('');

    z.render();

    thisSeries = $('.banner-tabs');

    if (z.visibleIndex(thisSeries) == globalSettings.maxBannerNumber) {
        $('[id*="tabbs"] .add-button').attr('hidden', true);
    }

    $('fieldset[id*="props"],button.banner-tabs,[id*="output_"]').removeClass('show');
    $('fieldset#props' + z.id + ', [id="tabbs' + z.id + '"] .banner-tabs, [id="output_' + z.id + '"]').addClass('show');

    for (var h = 0; h < thisSeries.length; h++) {
        bannerObj($(thisSeries[h]).closest('div[id*="tabbs"]').attr('id').substr(5)).previousPattern = '';
    }

} else {
    thisButtonBannerId = $(thisButton).parents('.editablewrapper').attr('id').substr(5);
    thisButtonParent = $(thisButton).closest('[data-bp]');
    thisButtonParentValue = $(thisButtonParent).data('bp');
    var i = 1;

    thisSeries = $('.editable');
    $(thisButtonParent).append(bannerObj(thisButtonBannerId).copyInput($(thisButtonParent).children('[data-input-index]').length + 1));

    $('[id="output_' + thisButtonBannerId + '"] [data-bp="' + thisButtonParentValue + '"]').append(bannerObj(thisButtonBannerId).copyOutput($(thisButtonParent).children('[data-input-index]').length));
    
    $('[data-bp="' + thisButtonParentValue +'"] button.subtract-button').attr('hidden', false);
}

}

function remove(thisButton) {

var thisButtonDomain = $(thisButton).data('domain'),
    thisButtonParent,
    thisSeries,
    id;

if (thisButtonDomain == 'tabs') {
    thisButtonParent = $(thisButton).closest('[id*="tabbs"]');
    id = $(thisButtonParent).attr('id').substr(5);

    $('#tabbs' + id + ',fieldset#props' + id + ',div.text-render > span.dynamic > [id="output_' + id + '"]').remove();

    thisSeries = $('.banner-tabs');

    if (thisSeries.length == globalSettings.minBannerNumber) {
        $('[id*="tabbs"] .subtract-button').attr('hidden', true);
    }

} else {
    id=$(thisButton).closest('[id*="edits"]').attr('id').substr(5);
    thisButtonParent = $(thisButton).closest('[data-bp]');

    var thisButtonParentIndex = $(thisButton).closest('[data-input-index]');

    $('[data-bp="' + thisButtonParent.attr('data-bp') + '"] [data-input-index="' + thisButtonParentIndex.attr('data-input-index') + '"], [data-bp="' + thisButtonParent.attr('data-bp') + '"] [data-output-index="' + thisButtonParentIndex.attr('data-input-index') + '"]').remove();

    thisSeries = $('[id="edits' + id + '"] [data-bp="' + $(thisButtonParent).data('bp') + '"] [data-input-index]');

    if (thisSeries.length == globalSettings.minBannerNumber) {
        $('[id="edits' + id + '"] [data-bp="' + $(thisButtonParent).data('bp') + '"] [data-input-index] .subtract-button').attr('hidden', true);
    }
}
}

function bannerFormHTML(el1) {
var html = '<fieldset id="props' + el1.id + '" class="row banner-properties"> <legend> <h2>Banner ' + el1.id + ' Properties</h2> </legend> <div class="col-xs-12">' +

    '<div class="row"><div class="col-xs-12"><div class="row-fluid"><fieldset id="patterns_' + el1.id + '"> <legend> <h3>Content</h3> </legend>' +

    '<div id="edits' + el1.id + '" class="editablewrapper">' +

    '<span data-bp="desktop"><span data-input-index="1"><span class="controls-add-subtract"><button type="button" data-domain="editors" class="subtract-button" onClick="remove(this)" style="color:red;">x</button><button type="button" data-domain="editors" class="add-button" onClick="add(this)"style="color:green;">+</button></span><span class="editablecontainer"><div class="editable" contenteditable="true" onfocus="renderCopyFields(this,getTextRenderItem(this))"></div></span></span></span>' +

    '<br>' +

    '<span data-bp="mobile"><span data-input-index="1"><span class="controls-add-subtract"><button type="button" data-domain="editors" class="subtract-button" onClick="remove(this)" style="color:red;">x</button><button type="button" data-domain="editors" class="add-button" onClick="add(this)"style="color:green;">+</button></span><span class="editablecontainer"><div class="editable" contenteditable="true" onfocus="renderCopyFields(this,getTextRenderItem(this))"></div></span></span></span>' +

    '</div>' +

    '</fieldset> </div></div></div>' +

    '<div class="row">' +

    '<div class="col-xs-6"><div class="row-fluid"><fieldset id="breakpoints_' + el1.id + '"> <legend> <h3>Breakpoints</h3> </legend> <div class="row"> <div class="col-xs-6"><label for="bpDesktopYes_' + el1.id + '">Desktop? Yes</label> <input id="bpDesktopYes_' + el1.id + '" name="bpdesktop_' + el1.id + '" type="radio" value="1" checked> <label for="bpDesktopNo_' + el1.id + '">No</label> <input id="bpDesktopNo_' + el1.id + '" name="bpdesktop_' + el1.id + '" type="radio" value="0"> </div><div class="col-xs-6"> <label for="bpMobileYes_' + el1.id + '">Mobile? Yes</label> <input id="bpMobileYes_' + el1.id + '" name="bpmobile_' + el1.id + '" type="radio" value="1" checked> <label for="bpMobileNo_' + el1.id + '">No</label> <input id="bpMobileNo_' + el1.id + '" name="bpmobile_' + el1.id + '" type="radio" value="0"> </span> </div></div></fieldset></div></div>' +

    '</div>' +

    '<div class="row"> <div class="col-xs-12"> <fieldset id="background_' + el1.id + '"> <legend> <h3>Background</h3> </legend> <div class="row"> <div class="col-xs-12"> <h5>Enter the background details.</h5> </div></div><div class="row"> <div class="col-xs-3"><label for="local1_' + el1.id + '">Local</label> <input id="local1_' + el1.id + '" name="lorr1_' + el1.id + '" type="radio" value="local" checked></div><div class="col-xs-3"><label for="remote1_' + el1.id + '">Remote</label> <input id="remote1_' + el1.id + '" name="lorr1_' + el1.id + '" type="radio" value="remote"></div></div><div class="row"> <div class="col-xs-12"> <div class="row" data-bp="desktop"> <div class="col-xs-3"><label for="bgDesktop_' + el1.id + '">Image for desktop breakpoint <span class="help1 glyphicon glyphicon-question-sign" data-help="desktop" aria-hidden="true"></span>:<span class="required">*</span></label> </div><div class="col-xs-6 input-group1"> <span class="input-group-addon1" id="img2label">Local</span> <input id="bgDesktop_' + el1.id + '" class="bgimgaddress form-control1" type="text" name="bgdesktop_' + el1.id + '" placeholder="' + globalSettings.bgDesktopPlaceholder + '" required></div><div class="col-xs-3 error" hidden>Image not found</div></div><div class="row" data-bp="mobile"> <div class="col-xs-3"><label for="bgMobile_' + el1.id + '">Image for mobile breakpoint <span class="help1 glyphicon glyphicon-question-sign" data-help="mobile" aria-hidden="true"></span>:<span class="required">*</span></label> </div><div class="col-xs-6 input-group1"> <span class="input-group-addon1" id="img2label">Local</span> <input id="bgMobile_' + el1.id + '" class="bgimgaddress form-control1" type="text" name="bgmobile_' + el1.id + '" placeholder="' + globalSettings.bgMobilePlaceholder + '" required></div><div class="col-xs-3 error" hidden>Image not found</div></div></div></div><div class="row"> <div class="col-xs-3"><label for="bgColor">Background color <span class="help1 glyphicon glyphicon-question-sign" data-help="rgb" aria-hidden="true"></span>:</label><span class="required">*</span></div><div class="col-xs-6 input-group1"><span class="input-group-addon1" id="img2label">R</span> <input id="r_bg' + el1.id + '" name="r" class="bgcolor" placeholder="###" type="number" width="10" minlength="3" maxlength="3" required><span class="input-group-addon1" id="img2label">G</span><input id="g_bg' + el1.id + '" name="g" class="bgcolor" placeholder="###" type="number" width="10" maxlength="3" required><span class="input-group-addon1" id="img2label">B</span><input id="b_bg' + el1.id + '" name="b" class="bgcolor" placeholder="###" type="number" width="10" maxlength="3" required></div><div class="col-xs-3 error" hidden></div></div><div class="row"> <div class="col-xs-3"><label for="bgColor">Text color <span class="help1 glyphicon glyphicon-question-sign" data-help="rgb" aria-hidden="true"></span>:</label><span class="required">*</span></div><div class="col-xs-6 input-group1"><span class="input-group-addon1" id="img2label">R</span> <input id="r_txt' + el1.id + '" name="r" class="bgcolor" placeholder="###" type="number" width="10" minlength="3" maxlength="3" required><span class="input-group-addon1" id="img2label">G</span><input id="g_txt' + el1.id + '" name="g" class="bgcolor" placeholder="###" type="number" width="10" maxlength="3" required><span class="input-group-addon1" id="img2label">B</span><input id="b_txt' + el1.id + '" name="b" class="bgcolor" placeholder="###" type="number" width="10" maxlength="3" required></div><div class="col-xs-3 error" hidden></div></fieldset></div></div>' +

    '<div class="row"><div class="col-xs-12"><fieldset id="clickbehavior_' + el1.id + '"><legend><h3>Click Behavior</h3></legend><div class="row"> <div class="col-xs-3"> <label for="onClickBehavior_' + el1.id + '">OnClick behavior:<span class="required">*</span></label></div><div class="col-xs-2"> <select name="onClickBehavior" id="onClickBehavior_' + el1.id + '" required> <option value="">-- select --</option> <option value="fireModal">Fire modal</option> <option value="linkToPage">Link to page</option> <option value="linkToAnchor">Link to anchor</option> <option value="doNothing">Do nothing </option> </select></div></div><div class="row onclickbehavior"> <div class="col-xs-12"> <span class="dynamic"></span> </div></div></fieldset>' +

    '</div></div></div></fieldset>';

return html;
}

function bannerTabsHTML(el1) {
var html = '<div id="tabbs' + el1.id + '" class="col-xs-3" data-ordinal="' + el1.ordinal + '"><span class="controls-add-subtract"><button type="button" data-domain="tabs" class="subtract-button" onClick="remove(this)" style="color:red;">x</button><button type="button" data-domain="tabs" class="add-button" onClick="add(this)"style="color:green;">+</button></span><span class="controls-ordinals"><button type="button" class="controls-ordinals left"><</button><button type="button" class="banner-tabs" name="bannertab" onClick="showBanner(this)">Banner ' + el1.id + '</button><button type="button" class="controls-ordinals right">></button></span><div>';

return html;
}

function bannerCopySnippetHTML(el1) {
var html = '<span id="output_' + el1.id + '" data-ordinal=' + el1.ordinal + '><div data-bp="desktop" style="background-color:' + el1.css.background.desktop.latestBgColor + ';color: ' + el1.css.textcolor.latestTxtColor + ';"><span data-output-index="1"></span></div><div data-bp="mobile" style="background-color:' + el1.css.background.desktop.latestBgColor + ';color: ' + el1.css.textcolor.latestTxtColor + ';"><div data-output-index="1"></div></div></span>';

return html;
}

function bannerObj(el1) {
var obj;

obj = {
    id: el1,
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
        var html = '<span data-input-index="' + number + '"><span class="controls-add-subtract"><button type="button" data-domain="editors" class="subtract-button" onClick="remove(this)" style="color:red;">x</button><button type="button" data-domain="editors" class="add-button" onClick="add(this)"style="color:green;">+</button></span><span class="editablecontainer"><div class="editable" contenteditable="true" onfocus="renderCopyFields(this,getTextRenderItem(this))"></div></span></span>';

        return html;
    },
    copyOutput: function (number) {
        console.log(number);
        var html = '<span data-output-index="' + number + '"></span>';

        return html;
    },
    ordinal: '',
    previousPattern: '',
    visibleIndex: function (e1) {
        var tabs = e1.length;
        return tabs;
    },
    onClickBehaviorHTML: '<br><p>This will be a static banner.</p>',
    buttonBehave: function () {
        buttonBehave1(this);
    },
    render: function () {
        $('[id="props' + this.id + '"] input[name="bpdesktop_' + this.id + '"]').first().prop('checked', true);
        $('[id="props' + this.id + '"] input[name="bpmobile_' + this.id + '"]').first().prop('checked', true);
        $('input[name="lorr1_' + this.id + '"]').first().prop('checked', true);
        $('[id="bannerTabs"] span.dynamic .row-fluid.flex-it').append(bannerTabsHTML(this));
        $('form > span.dynamic').append(bannerFormHTML(this));
        this.buttonBehave();
        $('.text-render > span.dynamic').append(bannerCopySnippetHTML(this));
        $('button.subtract-button').attr('hidden', false);
    },
    state: 'local'
}
return obj;
}