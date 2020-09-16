var globals = {
    brands: {
        'paulayoung': [{
            'baseUrl': 'https://www.paulayoung.com',
            'evergagePath': 'py',
            'brandColor': 'rgb(184,117,174)'
        }],
        'especiallyyours': [{
            'baseUrl': 'https://www.especiallyyours.com',
            'evergagePath': 'ey',
            'brandColor': 'rgb(23, 95, 180)'
        }],
        'thelook': [{
            'baseUrl': 'https://www.thelook.fashion',
            'evergagePath': 'tl',
            'brandColor': 'rgb(0, 93, 166);'
        }],
        'wig': [{
            'baseUrl': 'https://www.wig.com',
            'evergagePath': 'wg',
            'brandColor': 'rgb(86, 160, 224);'
        }],
        'beyondextensions': [{
            'baseUrl': 'https://www.beyondextensions.com',
            'evergagePath': 'be',
            'brandColor': 'rgb(255, 97, 84)'
        }]
    },
    selectBrand: '',
    bgDesktopPlaceholder: 'Demo-image-962.png',
    bgMobilePlaceholder: 'Demo-image-575.png',
    maxBannerNumber: 4,
    minBannerNumber: 1,
    bannerObjects: {},
    buildStyles: function (elObject) {
        var styles = '';
        for (x in Object.values(elObject)) {
            var id = Object.values(elObject)[x]['id'],
                hex = Object.values(elObject)[x]['hex'],
                breakpoints = Object.values(elObject)[x]['css']['breakpoints'];

            for (y in Object.values(breakpoints)) {

                var bpid = Object.keys(breakpoints)[y],
                    max = Number(Object.values(breakpoints)[y]['maxwidth']) == 0 ? '' : ' and (max-width:' + Object.values(breakpoints)[y]['maxwidth'] + 'px)',
                    min = Number(Object.values(breakpoints)[y]['minwidth']) == 0 ? '' : ' and (min-width:' + Object.values(breakpoints)[y]['minwidth'] + 'px)',
                    height = Object.values(breakpoints)[y]['height'],
                    bgImg = Object.values(breakpoints)[y]['background']['img'],
                    bgPosition = Object.values(breakpoints)[y]['background']['position'],
                    bgPositionX = Number(Object.values(breakpoints)[y]['background']['positionx']) == 0 || Object.values(breakpoints)[y]['background']['positionx'] == 'auto' ? 'auto' : Object.values(breakpoints)[y]['background']['positionx'] + '%',
                    bgPositionY = Number(Object.values(breakpoints)[y]['background']['positiony']) == 0 || Object.values(breakpoints)[y]['background']['positiony'] == 'auto' ? 'auto' : Object.values(breakpoints)[y]['background']['positiony'] + '%',
                    bgwidth = Number(Object.values(breakpoints)[y]['background']['bgwidth']) == 0 || Object.values(breakpoints)[y]['background']['bgwidth'] == 'auto' ? 'auto' : Object.values(breakpoints)[y]['background']['bgwidth'] + '%',
                    bgheight = Number(Object.values(breakpoints)[y]['background']['bgheight']) == 0 || Object.values(breakpoints)[y]['background']['bgheight'] == 'auto' ? 'auto' : Object.values(breakpoints)[y]['background']['bgheight'] + '%',
                    bgState = Object.values(breakpoints)[y]['background']['state'],
                    media = Number(Object.values(breakpoints)[y]['minwidth']) == 0 && Number(Object.values(breakpoints)[y]['maxwidth']) == 0 ? '' : '[id="banner_' + id + '"] [data-bp="' + bpid + '"]{ display:none;}@media screen' +
                        min +
                        max +
                        '{ [id="banner_' + id + '"] [data-bp="' + bpid + '"]{ display:flex;flex-direction: row;justify-content: space-evenly;flex-wrap:wrap;width:100%;cursor:pointer;align-items: center;height:auto;min-height:' + height + 'px;background-color:' + hex + ';background-image:url("' + bgImg + '");background-position:' + bgPosition + ';background-position-x:' + bgPositionX + ';background-position-y:' + bgPositionY + ';background-repeat:no-repeat;background-size:' + bgwidth + ' ' + bgheight + ';}}';

                styles += media;
            }
        }

        return styles;
    }
},
    bannerTabsLegend = '<legend>' +
        '<h3>Banners</h3>' +
        '</legend>' +
        '<p>Click on the <b>[ |A ]</b> button to edit the name of the banner and to display the banner\'s properties form.<br>Hover over <b>[ |A ]</b> button(s) to view toolbar.<br>Click on the <b>[ <span style="color:green;">+</span> ]</b></b> button to add another banner.<br>Click on the <b>[ <span style="color:red;">x</span> ]</b> button to remove a banner.</p>' +
        '</div>' +
        '</div>' +
        '<hr>';

$(document).ready(function () {
    var idInit = '',
        bannerInit;

    $(document).on('hidden.bs.modal', '#msgBox.modal', function () {
        $(this).remove();
    });

    $('[id="bannerTabs"]').prepend(bannerTabsLegend);
    $('[id="bannerTabs"] .dynamic').append('<div class="row-fluid flex-it" data-domain="tabs"></div>');

    // Create new banner object
    idInit = randomId(1000, 9999);
    bannerInit = new bannerObj(idInit);

    // Add new banner object to global banner objects container
    globals.bannerObjects['banner_' + idInit] = bannerInit;

    // Run the new banner object render function
    globals.bannerObjects['banner_' + idInit].render();

    // console.log(globals);

    $('button[name="resetall"]').on('click', function () {

        $('[id="bannerTabs"] .dynamic .row-fluid.flex-it,#properties.row .dynamic, .text-render').html('');
        globals.bannerObjects = {};

        idInit = randomId(1000, 9999);
        bannerInit = new bannerObj(idInit);

        globals.bannerObjects['banner_' + idInit] = bannerInit;

        globals.bannerObjects['banner_' + idInit].render();

        // console.log(globals);
    });

});

function buttonBehave1(thisBanner) {
    var id = thisBanner.id,
        thisBannerH2;

    // dropdown events
    $('select[name="brands"],[id="props_' + id + '"] select[name="onClickBehavior"]').on('change', function () {

        var type = $(this).attr('name');

        if (type == 'brands') {

            globals.selectBrand = $(':selected', this).val();
            $('input[name*="lorr1_"]').trigger('change');

        } else {

            displayOnClickBehavior($(':selected', this).val(), id);

        }
    });

    // color events
    $('input[id*="r_bg"],input[id*="g_bg"],input[id*="b_bg"]').on('input', function () {

        var code = $(this).val(),
            // namespace = bgTxtRegex.exec($(this).attr('id')),
            id = $(this).attr('id').substr(-4),
            rgb = $(this).attr('name');

        if (Number(code) > 250) {
            $(this).addClass('error');
            $(this).parent().next('.error').html('Max value is 250');
            $(this).parent().next('.error').prop('hidden', false);
        } else if (Number(code) < 0) {
            $(this).addClass('error');
            $(this).parent().next('.error').html('Min value is 0');
            $(this).parent().next('.error').prop('hidden', false);
        } else {
            $(this).removeClass('error');
            $(this).parent().next('.error').html('');
            $(this).parent().next('.error').prop('hidden', true);

            // if (namespace == 'bg') {
            switch (rgb) {
                case "r":
                    thisBanner.css.bgColor.r = $(this).val();
                    break;
                case "g":
                    thisBanner.css.bgColor.g = $(this).val();;
                    break;
                case "b":
                    thisBanner.css.bgColor.b = $(this).val();;
                    break;
                default:
                    break;
            }
        }

        if ($('.text-render > [id*="' + id + '"]')) {
            thisBanner.hex = rgbToHex(Number(thisBanner.css.bgColor.r), Number(thisBanner.css.bgColor.g), Number(thisBanner.css.bgColor.b));

            var embedstyles = $('style#banners');

            $(embedstyles).html('');
            $(embedstyles).append(globals.buildStyles(globals.bannerObjects));
        }
        // console.log(globals);
    });

    // button events
    $("button[name='exporthtml'],button[name='exportcss']").on("click", function () {
        var type = $(this).attr('name');
        exportCode1(type);
    });

    $("span.help1").on('click', function () {

        var helpMsg = '';
        switch ($(this).data('help')) {
            case 'desktop':
                helpMsg = 'For local testing, place a 962x430px image in the same directory as this HTML file and enter the filename here <i style="font-style:serif;color:#a1a1a1; ">(png,gif,jpg)</i>.<br>For remote testing, place a 962x430px image on the "Production" FTP for the brand you are working on and enter the relative path, for example: "E88/test-image.jpg"';
                break;
            case 'mobile':
                helpMsg = 'For local testing, place a 575x683px image in the same directory as this HTML file and enter the filename here <i style="font-style:serif;color:#a1a1a1; ">(png,gif,jpg)</i>.<br>For remote testing, place a 575x683px image on the "Production" FTP for the brand you are working on and enter the relative path, for example: "E88/test-image.jpg"';
                break;
            case 'rgb':
                helpMsg = 'Enter a number value between the range of 0-250 for each of the RGB fields.';
                break;
            case 'required':
                helpMsg = 'Whether this text is required for this offer. Certain text cannot be omitted.';
            default:
                break;
        }
        // console.log(helpMsg);

        msgBox1(helpMsg, 'Help');
    });

    // validation event
    $('input, select, textarea').on('change', function () {

        confirmAllRequiredMet();
    });

    // Drop Shadow
    $('select[name="dShadow"]').on('change', function () {

        $('section.section-offer').removeClass('py-shadow-b py-shadow-b-lrg py-shadow-b-sml');
        var shadow = 'py-shadow-b';

        switch ($(this).val()) {
            case '1': shadow = 'py-shadow-b-lrg';
                break;
            case '2': shadow = 'py-shadow-b-sml';
                break;
            case '3': shadow = '';
        }

        $('section.section-offer').addClass(shadow);
    });

    $('[id="tabs_' + id + '"] [data-label="banner"] > span').on({

        click: function () {

            thisBanner.txtPlaceholder = $(this).text();
            $(this).text('');
            thisBannerH2 = $('[id="props_' + id + '"] h2 .txtPlaceholder').html();
        },
        focusout: function () {

            var newBannerTitle = $(this).text();

            if (newBannerTitle) {
                if (newBannerTitle != thisBanner.txtPlaceholder) {
                    thisBanner.txtPlaceholder = newBannerTitle;
                    $('[id="props_' + id + '"] h2 .txtPlaceholder').empty();
                    $('[id="props_' + id + '"] h2 .txtPlaceholder').html(thisBanner.txtPlaceholder + " ");
                } else {
                    $(this).text(thisBanner.txtPlaceholder);
                    $('[id="props_' + id + '"] h2 .txtPlaceholder').html(thisBannerH2);
                }
            } else {
                $(this).text(thisBanner.txtPlaceholder);
                $('[id="props_' + id + '"] h2 .txtPlaceholder').html(thisBannerH2);
            }
        }
    });

    $('[name="update"]').on('click', function (e) {
        e.preventDefault();
        var buttonId = $(e.target).attr('id');
        console.log(e.target);

        if (buttonId == 'textGroups') {
            console.log(this);
            var allBreakpoints = $('[id="content_' + id + '"] [data-domain="breakpoints"] .inputs [name*="bpid"]');
            console.log(allBreakpoints);
            for (var q = 0; q < allBreakpoints.length; q++) {

                var bpid = $(allBreakpoints[q]).attr('name').substr(-5),
                    inputs = $('[data-input-index]', allBreakpoints[q]);

                for (var p = 0; p < inputs.length; p++) {
                    $(inputs[p]).removeAttr('class');

                    var index = $(inputs[p]).data('input-index'),
                        newChildElems;

                    $('.text-render [id="banner_' + id + '"] [data-bp="bpid_' + bpid + '"] [data-output-index="' + index + '"]').empty();

                    if ($('textarea.editor', inputs[p]).val()) {
                        $('.text-render [id="banner_' + id + '"] [data-bp="bpid_' + bpid + '"] [data-output-index="' + index + '"]').append($('textarea.editor', inputs[p]).val());

                        newChildElems = $('.text-render [id="banner_' + id + '"] [data-bp="bpid_' + bpid + '"] [data-output-index="' + index + '"]').children();

                        $.each(newChildElems, function (index, value) {
                            $(this).css({ 'margin': '0', 'padding': '0' });
                        })
                    } else {

                        $(inputs[p]).addClass('error');
                        alert('Missing content in a text group.');
                    }
                }
            }
        }
    });
}

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
//https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb

function websiteURL1() {
    var brand = globals.selectBrand;
    var url = '';

    switch (brand) {
        case 'py':
            url = 'https://www.paulayoung.com';
            break;
        case 'ey':
            url = 'https://www.especiallyyours.com';
            break;
        case 'wg':
            url = 'https://www.wig.com';
            break;
        case 'tl':
            url = 'https://www.thelook.fashion';
            break;
        default:
            break;
    }

    return url;
}

function imgURL1(el, flag) {
    var domain = websiteURL1();
    var fpath = $(el).siblings('.input-group-addon1').text();
    if (fpath == 'Local') {
        fpath = '';
    }

    var fname = $(el).val();
    if (fpath) {
        // console.log(flag);
        return domain + fpath + fname;
    } else {
        // console.log(flag);
        return fpath + fname;
    }

}

function checkImageExists1(el, url, banner) {
    var img = new Image(),
        bp = $(el).closest('[data-bp]').attr('data-bp').substr(-5);
    // console.log(globals);

    img.onload = function () {
        $(el).parent().addClass('found');
        $(el).parent().next().prop('hidden', true);

        globals.bannerObjects['banner_' + banner.id].css.breakpoints['bpid_' + bp].background.img = img.src;

        var embedstyles = $('style#banners');

        $(embedstyles).html('');
        $(embedstyles).append(globals.buildStyles(globals.bannerObjects));
    };
    img.onerror = function () {
        $(el).parent().addClass('notfound');
        $(el).parent().next().prop('hidden', false);

        globals.bannerObjects['banner_' + banner.id].css.breakpoints['bpid_' + bp].background.img = 'none';

        var embedstyles = $('style#banners');

        $(embedstyles).html('');
        $(embedstyles).append(globals.buildStyles(globals.bannerObjects));
    };

    img.src = imgURL1(el, true);
}

function exportCode1(type) {
    switch (type) {
        case 'exporthtml':
            htmlExport1();
            break;
        case 'exportcss':
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
    $('body').append('<div class="noSeeCode"></div>');
    $('.faux-website-container .container section').clone().appendTo('.noSeeCode');

    // Change out all the dummy sections for user input
    // Heading
    //$(".noSeeCode img#section-offer-img").attr("alt", $("input[type='text'][name='heading']").val().replace(/'/g, '').replace(/"/g, ''));

    // Img
    var bgDesktopsrc = imgURL1($('.imgaddress[name*="bgDesktop_"]'), false);
    var bgMobilesrc = imgURL1($('.imgaddress[name*="bgMobile_"]'), false);
    // source 962
    $('.noSeeCode picture source[media*="576"]').attr('srcset', bgDesktopsrc);
    // source 575
    $('.noSeeCode picture source[media*="575"]').attr('srcset', bgMobilesrc);
    // default src and data-srcset
    $('.noSeeCode img#section-offer-img').attr('src', bgDesktopsrc).attr('data-srcset', bgMobilesrc);

    // Body
    if ($('input[type="checkbox"][name="body"]:checked').length == 1)
        $('.noSeeCode .body').text($('textarea[name="body"]').val());
    else
        $('.noSeeCode .body').remove();

    // Coupon
    if ($('input[type="checkbox"][name="coupon"]:checked').length == 1)
        $('.noSeeCode .coupon').text($('input[type="text"][name="coupon"]').val());
    else
        $('.noSeeCode .coupon').remove();

    // If no Body or Coupon, remove aria-describedby and offer-description
    if ($('input[type="checkbox"][name="body"]:checked').length == 0 && $('input[type="checkbox"][name="coupon"]:checked').length == 0) {
        $('.noSeeCode #offer-description').remove();
        $('.noSeeCode img#section-offer-img').removeAttr('aria-describedby');
    }

    // 'a' href
    $('.noSeeCode a').attr('href', $('input[type="text"][name="href"]').val());

    // Remove href target
    $('.noSeeCode a').removeAttr('target');

    var html = '<textarea>' + escapeHTML1($('.noSeeCode')[0].innerHTML) + '</textarea>';
    html += '<div class="faux-footer"><button class="copy btn btn-default">Copy To Clipboard</button></div>';
    msgBox1(html, 'HTML Export');

    // Clean up any empty lines in the textarea
    var text = $('.modal textarea').val();
    text = text.replace(/(?:(?:\r\n|\r|\n)\s*){2}/gm, '');
    $('.modal textarea').val(text);

    // console.log($('.noSeeCode'));

    // Destroy noSeeCode element
    $('.noSeeCode').remove();
}

function msgBox1(msg, title) {

    if (!title) title = '';

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

    $('body').append(html);
    $('#msgBox').modal('show');
}

function reDraw1(el1, el2) {

    //banners/py-sitewide.gif
    //banners/mothersday.gif

    var id = el1.id;
    // console.log(globals);

    $('.text-render [id="banner_' + id + '"] [data-bp="bpid_' + el2.substr(-5) + '"]').css({ 'background-image': 'url("' + globals.bannerObjects['banner_' + id].css.breakpoints['bp_' + el2].background.img + '")', 'background-size': 'cover', 'background-repeat': 'no-repeat', 'background-position': 'center center' });
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

function displayOnClickBehavior(behaviorSelected, id) {
    $('[id="props_' + id + '"] .row.onclickbehavior .dynamic').html('');

    // var modalHTML = '<div class="row-fluid">' +
    //     '<div class="col-xs-12">' +
    //     '<h4>Modal</h4>' +
    //     '</div>' +
    //     '</div>' +
    //     '<hr>' +
    //     '<div class="row-fluid">' +
    //     '<div class="col-xs-6">' +
    //     '<div class="row enter-text-modal flex-it">' +
    //     '<div>' +
    //     '<label for="modalTitle">Modal Title</label>' +
    //     '<br>' +
    //     '<input id="modalTitle" name="modalTitle" placeholder="For free standard shipping on orders of $59 or more, &hellip;" type="text" size="50" maxlength="50">' +
    //     '</div>' +
    //     '<br>' +
    //     '<div>' +
    //     '<label for="modalBody">Modal Body<span class="required">*</span>' +
    //     '</label>' +
    //     '<br>' +
    //     '<textarea name="modalBody" id="modalBody" cols="50" rows="10" placeholder="Free shipping offer excludes&hellip; Not valid in conjuction with any other offer." required>' +
    //     '</textarea>' +
    //     '</div>' +
    //     '<br>' +
    //     '<div>' +
    //     '<label for="modalFooter">Modal Footer</label>' +
    //     '<br>' +
    //     '<input id="modalFooter" name="modalFooter" placeholder="*Offer expires 8/7/20 at 11:59 pm PDT." type="text" size="50" maxlength="50">' +
    //     '</div>' +
    //     '</div>' +
    //     '</div>' +
    //     '<div class="col-xs-6">' +
    //     '<span class="example-modal">' +
    //     '<h5>Example Modal</h5>' +
    //     '<img src="img/test.png" alt="Example modal">' +
    //     '</span>' +
    //     '</div>' +
    //     '</div>' +
    //     '<div class="row-fluid" style="text-align:right;"><div class="col-xs-12"><button id="bannerModal" name="update" type="button">Update Banner Modal</button></div></div>',
    //     linkHMTL = '<br>' +
    //         '<div class="row">' +
    //         '<div class="col-xs-3">' +
    //         '<label for="offerLink">Link to another page:<span class="required">*</span>' +
    //         '</label>' +
    //         '</div>' +
    //         '<div class="col-xs-6">' +
    //         '<input id="offerLink" placeholder="/category/wigs/all-wigs.do" type="text" style="width:100%" required>' +
    //         '</div>' +
    //         '</div>',
    //     linkAnchorHTML = '<br>' +
    //         '<div class="row">' +
    //         '<div class="col-xs-3">' +
    //         '<label for="anchorLink">Link to point on same page:<span class="required">*</span>' +
    //         '</label>' +
    //         '</div>' +
    //         '<div class="col-xs-6">' +
    //         '<input id="anchorLink" placeholder="#anchor" type="text" required>' +
    //         '</div>' +
    //         '</div>',
    //     doNothing = '<br>' +
    //         '<p>This will be a static banner.</p>';

    switch (behaviorSelected) {
        case 'fireModal':
            globals.bannerObjects['banner_' + id].onClickBehaviorForm = modalHTML;
            fireModal('banner_' + id);
            break;
        case 'linkToPage':
            globals.bannerObjects['banner_' + id].onClickBehaviorForm = linkHMTL;
            linkToPage('banner_' + id);
            break;
        case 'linkToAnchor':
            globals.bannerObjects['banner_' + id].onClickBehaviorForm = linkAnchorHTML;
            linkToAnchor('banner_' + id);
            break;
        case 'doNothing':
            globals.bannerObjects['banner_' + id].onClickBehaviorForm = doNothing;
            doNothing('banner_' + id);
            break;
        default:
            break;
    }

    $('[id="props_' + id + '"] .row.onclickbehavior .dynamic').append(globals.bannerObjects['banner_' + id].onClickBehaviorForm);

    $("input, select, textarea").on('change', function () {
        confirmAllRequiredMet();
    });
}

function fireModal(banner) {
    if ($('[id="modal_' + banner + '"].modal')) {
        $('[id="modal_' + banner + '"].modal').remove();
    }

    globals.bannerObjects[banner].onClickBehavior.name = 'fireModal';
    $('.text-render').append(globals.bannerObjects[banner].onClickBehavior.modal.html(banner));
    $('.text-render #' + banner).attr('data-toggle', 'modal');
    $('.text-render #' + banner).attr('data-target', '#modal_' + banner);

    globals.bannerObjects[banner].onClickBehavior.modal.formSubmitListener(banner);

}

function linkToPage(banner) {
    globals.bannerObjects[banner].onClickBehavior.name = 'linkToPage';
}

function linkToAnchor(banner) {
    globals.bannerObjects[banner].onClickBehavior.name = 'linkToAnchor';
}

function doNothing(banner) {
    globals.bannerObjects[banner].onClickBehavior.name = 'doNothing';
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
        $('button[name="exporthtml"],button[name="exportcss"]').prop('disabled', false);
    } else {
        $('button[name="exporthtml"],button[name="exportcss"]').prop('disabled', true);
    }
}

function show(thisButton) {
    var dataDomain = $(thisButton).closest('[data-domain]').data('domain'),
        id;

    if (dataDomain == 'tabs') {

        id = $(thisButton).closest('[id*="tabs_"]').attr('id').substr(-4);

        $('[id*="props_"], .banner-tab, .text-render > div').removeClass('showing');

        $('[id="props_' + id + '"], [id="banner_' + id + '"]').addClass('showing');

    } else {

        id = $(thisButton).closest('[id*="props_"]').attr('id').substr(-4);
        var bpid = $(thisButton).closest('[name*="bpid_"]').attr('name').substr(-5);

        $('[id="content_' + id + '"] [data-domain="breakpoints"] .tabs div button.breakpoint-tab,[id="content_' + id + '"] [data-domain="breakpoints"] .inputs .col-xs-12 .input,[id="background_' + id + '"]  .backgroundimages [data-bp*="bg_"]').removeClass('showing');

        $(' [id="content_' + id + '"] [data-domain="breakpoints"] .inputs .col-xs-12 [name="bpid_' + bpid + '"], .backgroundimages [data-bp="bg_' + bpid + '"]').addClass('showing');

    }
    $(thisButton).addClass('showing');
}

function add(thisButton) {

    var dataDomain = $(thisButton).closest('[data-domain]').data('domain'),
        id;

    if (dataDomain == 'tabs') {
        id = randomId(1000, 9999);

        var seriesParent = thisButton.closest('[id*="tabs_"]'),
            parentId,
            series = $('[id*="tabs_"]'),
            z;

        // Dedup banner ID
        for (var h = 0; h < series.length; h++) {
            parentId = $(series[h]).attr('id').substr(-4);
            if (id == parentId) {
                id = randomId(1000, 9999);
                z = new bannerObj(id);
                globals.bannerObjects['banner_' + id] = z;
            } else {
                z = new bannerObj(id);
                globals.bannerObjects['banner_' + id] = z;
            }
        }

        globals.bannerObjects['banner_' + id].render();

        // Recheck qty of banners
        series = $('[id*="tabs_"]');

        if (globals.bannerObjects['banner_' + id].visibleIndex(series) == globals.maxBannerNumber) {
            $('[data-domain="' + dataDomain + '"] .add-button').prop('hidden', true);
        }

        $('[data-domain="' + dataDomain + '"] .subtract-button').prop('hidden', false);

        $('[id*="props_"], .banner-tab, .text-render > div').removeClass('showing');

        $('[id="props_' + z.id + '"], [id="tabs_' + z.id + '"] .banner-tab, [id="banner_' + z.id + '"]').addClass('showing');

    } else if (dataDomain == 'inputs') {

        id = $(thisButton).parents('[id*="content"]').attr('id').substr(-4);

        var seriesParent = $(thisButton).closest('[data-domain="' + dataDomain + '"]'),
            series,
            bpid = $(thisButton).closest('[name*="bpid"]').attr('name').substr(-5);

        //Remove previous error styling
        $('[data-input-index]', seriesParent).removeAttr('class');

        // Add new input to input series and assign latest index
        $(seriesParent).append(bannerObj(id).copyInput($(seriesParent).children('[data-input-index]').last().data('input-index') + 1));

        // Add new output to output series and assign latest index
        $('.text-render [id="banner_' + id + '"] [data-bp="bpid_' + bpid + '"]').append(bannerObj(id).copyOutput($(seriesParent).children().last().data('input-index')));

        // Since there is more than one input now, disable hidden attribute for all input subtract buttons
        $('.subtract-button', seriesParent).prop('hidden', false);

        series = $('textarea', seriesParent);

        // Initiate ckeditor on this new textarea
        $(series).last().ckeditor();

    } else {
        id = $(thisButton).parents('[id*="content"]').attr('id').substr(-4);
        var bpid = randomId(10000, 99999),
            seriesParent = thisButton.closest('[data-domain]'),
            parentId,
            series = $('.tabs', seriesParent);

        // Dedup breakpoint ID

        for (var h = 0; h < series.length; h++) {
            parentId = $(series[h]).attr('name').substr(-5);
            if (bpid == parentId) {
                bpid = randomId(10000, 99999);
            }
        }
        globals.bannerObjects['banner_' + id].bp(bpid);
        globals.bannerObjects['banner_' + id].bgSettingsRender(id, bpid);
        globals.bannerObjects['banner_' + id].bgEventListeners(id, bpid);

        // Since there is more than one breakpoint now, disable hidden attribute for all breakpoint subtract buttons
        $('[id="content_' + id + '"] [data-domain="bpconfig"] .subtract-button').prop('hidden', false);

    }

    // console.log(globals);
}

function removeThis(thisButton) {

    var dataDomain = $(thisButton).closest('[data-domain]').data('domain'),
        embedstyles = $('#banners'),
        seriesBreakpoints;

    if (dataDomain == 'tabs') {
        var seriesParent = $(thisButton).closest('[id*="tabs_"]'),
            id = $(seriesParent).attr('id').substr(-4),
            series;

        delete globals.bannerObjects['banner_' + id];

        $('[id="tabs_' + id + '"], [id="props_' + id + '"], .text-render > [id="banner_' + id + '"], .text-render > [id="banner_' + id + '"] + .gutter').remove();

        // Recheck qty of banners
        series = $('[id*="tabs_"]');

        if (series.length == globals.minBannerNumber) {
            $('[data-domain="' + dataDomain + '"] .subtract-button').prop('hidden', true);
        }

        $('[data-domain="' + dataDomain + '"] .add-button').prop('hidden', false);

    } else if (dataDomain == 'inputs') {
        var seriesParent = $(thisButton).closest('[data-domain="' + dataDomain + '"]'),
            dataIndex = $(thisButton).closest('[data-input-index]').attr('data-input-index'),
            bpid = $(thisButton).closest('[name*="bpid"]').attr('name').substr(-5),
            id = $(thisButton).closest('[id*="content"]').attr('id').substr(-4),
            series;

        $('[data-input-index="' + dataIndex + '"]', seriesParent).remove();
        $('.text-render [id="banner_' + id + '"] [data-bp="bpid_' + bpid + '"] [data-output-index="' + dataIndex + '"]').remove();

        series = $('[data-input-index]', seriesParent);

        if (series.length == globals.minBannerNumber) {
            $('.subtract-button', seriesParent).prop('hidden', true);
        }
    } else {
        var seriesParent = $(thisButton).closest('[data-domain="breakpoints"]'),
            bpid = $(thisButton).closest('[name*="bpid"]').attr('name').substr(-5),
            id = $(thisButton).closest('[id*="content"]').attr('id').substr(-4),
            series;

        delete globals.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid];

        $('[name="bpid_' + bpid + '"]').remove();

        $('[data-bp="bg_' + bpid + '"]').remove();

        $('.text-render [id="banner_' + id + '"] [data-bp="bpid_' + bpid + '"]').remove();

        // Recheck qty of breakpoints
        series = $('[data-domain="bpconfig"]', seriesParent);

        if (series.length == 1) {
            $('[data-domain="bpconfig"] .subtract-button').prop('hidden', true);
        }
    }

    var embedstyles = $('style#banners');

    $(embedstyles).html('');

    $(embedstyles).append(globals.buildStyles(globals.bannerObjects));

    // console.log(globals);
}

function edit(thisButton) {
    var bp = $(thisButton).closest('[data-bp]'),
        id = $(bp).closest('[id*="content_"]').attr('id').substr(-4),
        dataDomain = $(thisButton).closest('[data-domain]').data('domain');

    if (dataDomain == 'bpconfig') {
        msgBox1('<form id="bpForm" class="container-fluid">' + breakpointForm(id, $(bp)) + '</form>', 'Breakpoint Options');
        $('#bpForm').on('submit', function () {
            event.preventDefault();
            update(event.target, bp);
        });
    }
}

function update(el1, el2) {



    var seriesInputs = $('input[type="text"],input[type="number"]', el1),
        bpid = $(el2).attr('name').substr(-5),
        id = $(el2).parents('[id*="content_"]').attr('id').substr(-4),
        embedstyles = $('#banners'),
        name = globals.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid].name,
        minwidth = globals.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid].minwidth,
        maxwidth = globals.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid].maxwidth,
        height = globals.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid].height,
        embedstyles = $('style#banners');;

    $(embedstyles).html('');

    $.each(seriesInputs, function () {
        var inputId = $(this).attr('id');
        if ($(this).val()) {
            switch (inputId) {
                case 'bpName':
                    name = $('input#bpName', el1).val();
                    break;
                case 'bpMinWidth':
                    minwidth = $('input#bpMinWidth', el1).val();
                    break;
                case 'bpMaxWidth':
                    maxwidth = $('input#bpMaxWidth', el1).val();
                    break;
                case 'bpHeight':
                    height = $('input#bpHeight', el1).val();
                    break;
                default:
                    break;
            }
        }
    });

    if (minwidth == 0) {
        $('button[name="copyTab"]', el2).html('<h5 style="margin-top:0;margin-bottom:0;">' +
            name +
            '</h5>' +
            '<span data-toggle="collapse" href="#dl_' + bpid + '" role="button" aria-expanded="false" aria-controls="collapseExample" class="glyphicon"></span>' +
            '<dl id="dl_' + bpid + '" class="collapse">' +
            '<dd><span style="font-weight:400;font-size:smaller;">maxwidth:</span> ' +
            maxwidth + 'px</span></dd>' +
            '<dd><span style="font-weight:400;font-size:smaller;">height:</span> ' +
            height + 'px</span></dd>' +
            '</dl>'
        );
    } else if (maxwidth == 0) {
        $('button[name="copyTab"]', el2).html('<h5 style="margin-top:0;margin-bottom:0;">' +
            name +
            '</h5>' +
            '<span data-toggle="collapse" href="#dl_' + bpid + '" role="button" aria-expanded="false" aria-controls="collapseExample" class="glyphicon"></span>' +
            '<dl id="dl_' + bpid + '" class="collapse">' +
            '<dd><span style="font-weight:400;font-size:smaller;">minwidth:</span> ' +
            minwidth + 'px</span></dd>' +
            '<dd><span style="font-weight:400;font-size:smaller;">height:</span> ' +
            height + 'px</span></dd>' +
            '</dl>'
        );
    } else {
        $('button[name="copyTab"]', el2).html('<h5 style="margin-top:0;margin-bottom:0;">' +
            name +
            '</h5>' +
            '<span data-toggle="collapse" href="#dl_' + bpid + '" role="button" aria-expanded="false" aria-controls="collapseExample" class="glyphicon"></span>' +
            '<dl id="dl_' + bpid + '" class="collapse">' +
            '<dd><span style="font-weight:400;font-size:smaller;">minwidth:</span> ' +
            minwidth + 'px</span></dd>' +
            '<dd><span style="font-weight:400;font-size:smaller;">maxwidth:</span> ' +
            maxwidth + 'px</span></dd>' +
            '<dd><span style="font-weight:400;font-size:smaller;">height:</span> ' +
            height + 'px</span></dd>' +
            '</dl>'
        );
    }

    $(el2).attr('data-bp', name);
    $(el2).attr('data-bp-minwidth', minwidth);
    $(el2).attr('data-bp-maxwidth', maxwidth);
    $(el2).attr('data-bp-height', height);

    globals.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid].name = name;
    globals.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid].minwidth = minwidth;
    globals.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid].maxwidth = maxwidth;
    globals.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid].height = height;

    $('[data-bp="bg_' + bpid + '"] b.bpName').html(name);

    $(embedstyles).html('');
    $(embedstyles).append(globals.buildStyles(globals.bannerObjects));

    $('#msgBox').modal('hide');

    // console.log(globals);
}

function bannerCreatorForm(el1) {
    var id = el1.id,
        content = '<div class="row">' +
            '<fieldset id="content_' + id + '" class="col-xs-12">' +
            '<div class="row">' +
            '<div class="col-xs-12">' +
            '<legend><h3>Breakpoints</h3></legend>' +
            '</div>' +
            '</div>' +
            '<div class="row">' +
            '<div class="col-xs-12">' +
            '<p>' +
            '<br>Hover over <b>[ |A ]</b> button(s) to view breakpoint toolbar.' +
            '<br>Click on the<b> [ <span style="color:green;">+</span> ]</b> button to add breakpoint.' +
            '<br>Click on the <b>[ <span style="color:red;">x</span> ]</b> button to remove breakpoint.' +
            '<br>Click on the<b> [ <span class="glyphicon glyphicon-cog" style="color:blue;"></span> ]</b> button to set <b>Name</b>, <b>Min Width</b>, <b>Max Width</b>, <b>Height</b>, and <b>Background Image</b> options of breakpoint.' +
            '<br>Click on the <b>[ |A ]</b> button to display the text group form.' +
            '</p>' +
            '</div>' +
            '</div>' +
            '<div class="row content" data-domain="breakpoints">' +
            '<div class="col-xs-12">' +
            '<div class="row-fluid flex-it tabs"></div>' +
            '<hr>' +
            '<div class="row-fluid inputs">' +
            '<div class="col-xs-12">' +
            '<div class="row"><div class="col-xs-12"><h3>' +
            'Text Groups' +
            '</h3></div></div>' +
            '<div class="row"><div class="col-xs-12"><p>' +
            '<br>Click on the <b>[ <span style="color:green;">+</span> ]</b></b> button to add another text group.' +
            '<br>Click on the <b>[ <span style="color:red;">x</span> ]</b> button to remove a text group.' +
            '</p></div></div>' +
            '</div>' +
            '</div>' +
            '<div class="row-fluid" style="text-align:right;">' +
            '<div class="col-xs-12">' +
            '<button id="textGroups" name="update" type="submit">Update Text Groups</button>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</fieldset>' +
            '</div>',

        background = '<div class="row">' +
            '<fieldset id="background_' + id + '" class="col-xs-12">' +
            '<div class="row">' +
            '<div class="col-xs-12">' +
            '<legend> <h3>Background Settings</h3> </legend>' +
            '</div>' +
            '</div>' +
            '<div class="row">' +
            '<div class="col-xs-12">' +
            '<h5>BREAKPOINT</h5>' +
            '</div>' +
            '</div>' +
            '<div class="row" data-domain="backgroundimg">' +
            '</div>' +
            '<div class="row">' +
            '<div class="col-xs-12 backgroundimages">' +
            '</div>' +
            '</div>' +
            '<div class="row">' +
            '<div class="col-xs-12">' +
            '<h5>BANNER</h5>' +
            '</div>' +
            '</div>' +
            '<div class="row">' +
            '<div class="col-xs-3">' +
            '<label for="bgColor">Banner background color <span class="help1 glyphicon glyphicon-question-sign" data-help="rgb" aria-hidden="true"></span>:</label><span class="required">*</span>' +
            '</div>' +
            '<div class="col-xs-6 input-group1">' +
            '<span class="input-group-addon1" id="img2label">R</span> <input id="r_bg' + id + '" name="r" class="bgcolor" placeholder="###" type="number" width="10" minlength="3" maxlength="3" min="0" max="250" required>' +
            '<span class="input-group-addon1" id="img2label">G</span><input id="g_bg' + id + '" name="g" class="bgcolor" placeholder="###" type="number" width="10" maxlength="3" min="0" max="250" required>' +
            '<span class="input-group-addon1" id="img2label">B</span><input id="b_bg' + id + '" name="b" class="bgcolor" placeholder="###" type="number" width="10" maxlength="3" min="0" max="250" required>' +
            '</div>' +
            '<div class="col-xs-3 error" hidden>' +
            '</div>' +
            '</div>' +
            '<br>' +
            '<div class="row-fluid" style="text-align:right;"><div class="col-xs-12"><button id="backgroundSettings" name="update" type="submit">Update Background Settings</button></div></div>' +
            '<br>' +
            '</fieldset>' +
            '</div>',

        clickbehavior = '<div class="row">' +
            '<fieldset id="clickbehavior_' + id + '" class="col-xs-12">' +
            '<div class="row">' +
            '<div class="col-xs-12">' +
            '<legend><h3>Click Behavior Settings</h3></legend>' +
            '<div class="row">' +
            '<div class="col-xs-3">' +
            '<label for="onClickBehavior_' + id + '">Banner OnClick behavior:<span class="required">*</span></label>' +
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

            '<div id="modalHTML_' + id + '" class="row">' +
            '<div class="col-xs-12">' +
            '<div class="row">' +
            '<div class="col-xs-12">' +
            '<h4>Modal</h4>' +
            '</div>' +
            '</div>' +
            '<hr>' +
            '<div class="row">' +
            '<div class="col-xs-6">' +
            '<div class="row-fluid enter-text-modal flex-it">' +
            '<label for="modalTitle">Modal Title</label>' +
            '<br>' +
            '<input id="modalTitle" name="modalTitle" placeholder="For free standard shipping on orders of $59 or more, &hellip;" type="text" size="50" maxlength="50">' +
            '</div>' +
            '<br>' +
            '<div class="row-fluid enter-text-modal flex-it">' +
            '<label for="modalBody">Modal Body<span class="required">*</span></label>' +
            '<br>' +
            '<textarea name="modalBody" id="modalBody" cols="50" rows="10" placeholder="Free shipping offer excludes&hellip; Not valid in conjuction with any other offer." required></textarea>' +
            '</div>' +
            '<br>' +
            '<div class="row-fluid enter-text-modal flex-it">' +
            '<label for="modalFooter">Modal Footer</label>' +
            '<br>' +
            '<input id="modalFooter" name="modalFooter" placeholder="*Offer expires 8/7/20 at 11:59 pm PDT." type="text" size="50" maxlength="50">' +
            '</div>' +
            '</div>' +
            '<div class="col-xs-6">' +
            '<div class="row-fluid">' +
            '<span class="example-modal">' +
            '<h5>Example Modal</h5>' +
            '<img src="img/test.png" alt="Example modal">' +
            '</span>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="row" style="text-align:right;">' +
            '<div class="col-xs-12">' +
            '<button id="bannerModal" name="update" type="button">Update Banner Modal</button>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +

            '<div id="linkHMTL_' + id + '" class="row">' +
            '<br>' +
            '<div class="col-xs-3">' +
            '<label for="offerLink">Link to another page:<span class="required">*</span></label>' +
            '</div>' +
            '<div class="col-xs-6">' +
            '<input id="offerLink" placeholder="/category/wigs/all-wigs.do" type="text" style="width:100%" required>' +
            '</div>' +
            '</div>' +
            '<div id="linkAnchorHTML_' + id + '" class="row">' +
            '<br>' +
            '<div class="col-xs-3">' +
            '<label for="anchorLink">Link to point on same page:<span class="required">*</span></label>' +
            '</div>' +
            '<div class="col-xs-6">' +
            '<input id="anchorLink" placeholder="#anchor" type="text" required>' +
            '</div>' +
            '</div>' +
            '<div id="doNothing_' + id + '" class="row">' +
            '<br>' +
            '<div class="col-xs-12">' +
            '<p>This will be a static banner.</p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</fieldset>' +
            '</div>',
        html = '<fieldset id="props_' + id + '" class="col-xs-12 banner-properties">' +
            '<div class="row">' +
            '<div class="col-xs-12">' +
            '<legend>' +
            '<h2>' +
            '<span class="txtPlaceholder"></span>Properties' +
            '</h2>' +
            '</legend>' +
            '</div>' +
            '</div>' +
            content +
            background +
            clickbehavior +
            '</fieldset>';

    return html;
}

function bannerTab(el1) {
    var id = el1.id,
        html = '<div id="tabs_' + id + '" class="col-xs-3">' +
            '<span class="controls-add-subtract">' +
            '<button type="button" class="subtract-button" onClick="removeThis(this)" style="color:red;">x</button>' +
            '<button type="button" class="add-button" onClick="add(this)" style="color:green;">+</button>' +
            '</span>' +
            '<span>' +
            '<button type="button" class="banner-tab" name="bannertab" onClick="show(this)" data-label="banner"><span contenteditable>' + el1.txtPlaceholder + '<span></button>' +
            '</span>' +
            '<div>';

    return html;
}

function bannerPreview(banner) {
    var html = '<div id="banner_' + banner.id + '" class="banner trigger" role="button" style="display:block">' +
        '</div><span class="gutter"></span>';

    return html;
}

function bannerPreviewBreakpoint(id, breakpointId) {
    var html = '<div data-bp="bpid_' + breakpointId + '"><span class="text-group" data-output-index="1"></span></div>';

    return html;
}

function breakpointTab(bpid) {

    var html = '<div name="bpid_' + bpid + '" class="col-xs-3" data-domain="bpconfig" data-bp="bpid_' + bpid + '">' +
        '<span class="controls-add-subtract">' +
        '<button type="button" class="subtract-button" onClick="removeThis(this)" style="color:red;" hidden>x</button>' +
        '<button type="button" class="edit-button glyphicon glyphicon-cog" onClick="edit(this)" style="color:blue;top:0px;"></button>' +
        '<button type="button" class="add-button" onClick="add(this)" style="color:green;">+</button>' +
        '</span>' +
        '<span><button type="button" class="breakpoint-tab showing" name="copyTab" onClick="show(this);"><h5 style="margin-top:0;margin-bottom:0;"><span class="bpName">|A</span></h5></button></span>' +
        '</div>';

    return html;
}

function breakpointInput(number, id) {
    var html = '<div name="bpid_' + id + '" data-domain="inputs" class="input showing">' +
        '<span data-input-index="' + number + '">' +
        '<span class="controls-add-subtract">' +
        '<button type="button" class="subtract-button" onClick="removeThis(this)" style="color:red;" hidden>x</button>' +
        '<button type="button" class="add-button" onClick="add(this)"style="color:green;">+</button>' +
        '</span>' +
        '<span class="editablecontainer">' +
        '<textarea id="ckeditor_' + number + '" class="editor"></textarea>' +
        '</span>' +
        '</span>' +
        '</div>';

    return html;
}

function breakpointForm(id, bp) {
    var bpid = bp.data('bp').substr(-5),
        html = '<div class="row">' +
            '<label for="bpName" class="col-xs-4">Name:' +
            '<br><small style="font-weight:400;">Ex. Desktop, Tablet, Mobile</small>' +
            '<br><small style="font-weight:400;">Default is |A</small>' +
            '</label>' +
            '<input id="bpName" name="bpName" class="col-xs-8" type="text" placeholder="' + globals.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid].name + '">' +
            '</div>' +
            '<div class="row">' +
            '<label for="bpMinWidth" class="col-xs-4">Min-width:' +
            '<br><small style="font-weight:400;">Set to 0 to omit</small>' +
            '<br><small style="font-weight:400;">Default is 575px</small>' +
            '</label>' +
            '<input id="bpMinWidth" name="bpMinWidth" class="col-xs-8" type="number" placeholder="' + globals.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid].minwidth + '">' +
            '</div>' +
            '<div class="row">' +
            '<label for="bpMaxWidth" class="col-xs-4">Max-width:' +
            '<br><small style="font-weight:400;">Set to 0 to omit</small>' +
            '<br><small style="font-weight:400;">Default is 767px</small>' +
            '</label>' +
            '<input id="bpMaxWidth" name="bpMaxWidth" class="col-xs-8" type="number" placeholder="' + globals.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid].maxwidth + '">' +
            '</div>' +
            '<div class="row">' +
            '<label for="bpHeight" class="col-xs-4">Height:<br><small style="font-weight:400;">Default is 56px</small></label><input id="bpHeight" name="bpHeight" class="col-xs-8" type="number" placeholder="' + globals.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid].height + '">' +
            '</div>' +
            '<div class="row">' +
            '<button id="bpUpdate" type="submit" name="bpUpdate">Update Breakpoint</button>' +
            '</div>';

    return html;
}

function breakpointBackgroundImg(bpName, bannerId) {
    var name = bpName,
        bpid = bannerId,
        html = '<div class="row showing" data-bp="bg_' + bpid + '">' +
            '<div class="col-xs-12">' +
            '<div class="row" data-bp="bgorigin_' + bpid + '">' +

            '<div class="col-xs-3">' +
            '<label for="local1_' + bpid + '">Local</label> <input id="local1_' + bpid + '" name="lorr1_' + bpid + '" type="radio" value="local">' +
            '</div>' +
            '<div class="col-xs-3">' +
            '<label for="remote1_' + bpid + '">Remote</label> <input id="remote1_' + bpid + '" name="lorr1_' + bpid + '" type="radio" value="remote">' +
            '</div>' +

            '</div>' +
            '<div class="row" data-bp="bgimg_' + bpid + '">' +

            '<div class="col-xs-3">' +
            '<label for="bgimg_' + bpid + '">Breakpoint <b class="bpName">' + name + '</b> background image <span class="help1 glyphicon glyphicon-question-sign" data-help="desktop" aria-hidden="true"></span>:<span class="required">*</span></label>' +
            '</div>' +

            '<div class="col-xs-3 input-group1">' +
            '<span class="input-group-addon1" id="img2label">Local</span> <input id="bgimg_' + bpid + '" class="bgimgaddress form-control1" type="text" name="bg_' + bpid + '" placeholder="' + globals.bgDesktopPlaceholder + '">' +
            '</div>' +

            '<div class="col-xs-3 error" hidden>Image not found</div>' +
            '</div>' +


            '<div class="row" data-bp="bgdimensions">' +

            '<div class="col-xs-3">' +

            '<label for="width_' + bpid + '">Width for <b class="bpName">' + name + '</b> background image <span class="help1 glyphicon glyphicon-question-sign" data-help="width" aria-hidden="true"></span>:<span class="required">*</span></label>' +
            '</div>' +

            '<div class="col-xs-1">' +
            '<input id="width_' + bpid + '" name="width" type="number" placeholder="0" maxlength="3" size="3" style="width:100%;">' +
            '</div>' +

            '<div class="col-xs-3">' +
            '<label for="height_' + bpid + '">Height for <b class="bpName">' + name + '</b> background image <span class="help1 glyphicon glyphicon-question-sign" data-help="height" aria-hidden="true"></span>:<span class="required">*</span></label>' +
            '</div>' +

            '<div class="col-xs-1">' +
            '<input id="height_' + bpid + '" name="height" type="number" placeholder="0" maxlength="3" size="3" style="width:100%;">' +
            '</div>' +
            '</div>' +


            '<div class="row" data-bp="bgpos">' +

            '<div class="col-xs-3">' +

            '<label for="x_' + bpid + '">X position for <b class="bpName">' + name + '</b> background image <span class="help1 glyphicon glyphicon-question-sign" data-help="xpos" aria-hidden="true"></span>:<span class="required">*</span></label>' +
            '</div>' +

            '<div class="col-xs-1">' +
            '<input id="x_' + bpid + '" name="x" type="number" placeholder="0" maxlength="3" size="3" style="width:100%;">' +
            '</div>' +

            '<div class="col-xs-3">' +
            '<label for="y_' + bpid + '">Y position for <b class="bpName">' + name + '</b> background image <span class="help1 glyphicon glyphicon-question-sign" data-help="ypos" aria-hidden="true"></span>:<span class="required">*</span></label>' +
            '</div>' +

            '<div class="col-xs-1">' +
            '<input id="y_' + bpid + '" name="y" type="number" placeholder="0" maxlength="3" size="3" style="width:100%;">' +
            '</div>' +
            '</div>' +

            '<hr>' +
            '</div>' +
            '</div>';

    return html;
}

function bannerObj(el1) {
    var obj;

    obj = {
        id: el1,
        txtPlaceholder: '|A',
        hex: '#b875ae',
        css: {
            breakpoints: {},
            bgColor: {
                r: 184,
                g: 117,
                b: 174
            }
        },
        breakpointTabs: function (id) {
            return breakpointTab(id);
        },
        breakpointInputs: function (number, id) {
            return breakpointInput(number, id);
        },
        copyInput: function (number) {
            var html = '<span data-input-index="' + number + '">' +
                '<span class="controls-add-subtract">' +
                '<button type="button" class="subtract-button" onClick="removeThis(this)" style="color:red;">x</button>' +
                '<button type="button" class="add-button" onClick="add(this)" style="color:green;">+</button>' +
                '</span>' +
                '<span class="editablecontainer">' +
                '<textarea id="ckeditor_' + number + '" class="editor"></textarea>' +
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
        onClickBehaviorForm: '<br><p>This will be a static banner.</p>',
        buttonBehave: function () {
            buttonBehave1(this);
        },
        onClickBehavior: {
            name: 'doNothing',
            modal: {
                html: function (id) {
                    var modal = '<div id="modal_' + id + '" class="modal fade" tabindex="-1" role="dialog">' +
                        '<div class="modal-dialog" role="document">' +
                        '<div class="modal-content">' +
                        '<div class="modal-header">' +
                        '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
                        '<h4 class="modal-title">' + this.title + '</h4>' +
                        '</div>' +
                        '<div class="modal-body">' + this.body +
                        '</div>' +
                        '<div class="modal-footer" style="text-align:left;">' + this.footer +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>';

                    return modal;
                },
                formSubmitListener: function (banner) {
                    console.log(globals);
                    var id = $('#' + banner).attr('id').substr(-4);
                    var collection = document.querySelectorAll('input');

                    console.log($('.modal'));
                    console.log(collection);

                    $('#bannerModal').on('click', function () {
                        console.log(globals);
                        this.title = $('[id="clickbehavior_' + id + '"] input#modalTitle').val();
                        this.body = $('[id="clickbehavior_' + id + '"] input#modalBody').val();
                        this.footer = $('[id="clickbehavior_' + id + '"] input#modalFooter').val();
                    });
                },
                title: 'Enter Title text under Click Behavior Settings',
                body: 'Enter Body text under Click Behavior Settings',
                footer: 'Enter Footer text under Click Behavior Settings'
            },
            anchor: '#',
            link: '#'
        },
        bp: function (number) {
            this.css.breakpoints['bpid_' + number] = {
                name: '|A',
                background: {
                    img: 'none',
                    position: 'center center',
                    positionx: 50,
                    positiony: 50,
                    bgwidth: 100,
                    bgheight: 'auto',
                    state: 'local'
                },
                minwidth: 575,
                maxwidth: 767,
                height: 56
            };
        },
        bgSettingsRender: function (id, bpid) {
            // Add new breakpoint tab
            $('[id="content_' + id + '"] [data-domain="breakpoints"] .tabs').append(breakpointTab(bpid));

            // Add new breakpoint textarea
            $('[id="content_' + id + '"] [data-domain="breakpoints"] .inputs > div').append(breakpointInput(1, bpid));

            // Add new breakpoint section to banner preview
            $('.text-render [id="banner_' + id + '"]').append(bannerPreviewBreakpoint(id, bpid));

            // Add new breakpoint section to background image fields
            $('[id="background_' + id + '"] .backgroundimages').append(breakpointBackgroundImg('', bpid));

            // Since there is more than one breakpoint now, disable hidden attribute for all breakpoint subtract buttons
            // $('[id="content_' + id + '"] [data-domain="bpconfig"] .subtract-button').prop('hidden', false);

            // Remove showing class from all breakpoint tabs
            $('[id="content_' + id + '"] [data-domain="breakpoints"] .tabs div button, [id="content_' + id + '"] [data-domain="breakpoints"] .inputs div, [id="background_' + id + '"] .backgroundimages [data-bp*="bg_"]').removeClass('showing');

            // Assign showing class to this new breakpoint tab
            $('[id="content_' + id + '"] [data-domain="breakpoints"] .tabs [name="bpid_' + bpid + '"] .breakpoint-tab, [id="content_' + id + '"] [data-domain="breakpoints"] .inputs [name="bpid_' + bpid + '"], [id="background_' + id + '"] .backgroundimages [data-bp="bg_' + bpid + '"]').addClass('showing');

            $('[data-bp="bg_' + bpid + '"] input:radio[value="local"]').prop('checked', true);

            // Initiate ckeditor on the initial textarea of this new breakpoint tab
            $('textarea.editor').ckeditor();

            // $('select[name="brands"]').on('change', function () {
            //     $('input[name="lorr1_' + bpid + '"]').trigger('change');
            // });
        },
        bgEventListeners: function (id, bpid) {
            $('.backgroundimages .row.showing[data-bp="bg_' + bpid + '"] input[name="lorr1_' + bpid + '"]').on('change', function () {

                globals.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid].background.state = $('input[name="lorr1_' + bpid + '"]:checked').val();

                if (globals.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid].background.state == 'local') {

                    globals.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid].background.state = 'local';

                    $('input[name*="bg"]').each(function () {
                        var curr = $(this).val();
                        if (curr !== '')
                            $(this).attr('data-remote', curr);

                        if ($(this).data('local'))
                            $(this).val($(this).data("local"));

                        $('[data-bp="bg_' + bpid + '"] span.input-group-addon1').text('Local');
                        if ($(this).attr('name') == 'bpDesktop_' + bpid)
                            var size = 962;
                        else
                            var size = 575
                        $(this).val('').attr('placeholder', 'Demo-image-' + size + '.png');
                    });

                } else if (globals.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid].background.state == 'remote') {

                    globals.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid].background.state = 'remote';

                    $('input[name*="bg"]').each(function () {
                        var curr = $(this).val();
                        if (curr !== '') {
                            $(this).attr('data-local', curr);
                        }

                        if ($(this).data('remote')) {
                            $(this).val($(this).data('remote'));
                        }

                        if ($('select[name="brands"]').val() == '') {
                            $(this).val('').attr('placeholder', 'Select a brand');
                            $('[data-bp="bg_' + bpid + '"] span.input-group-addon1').text('Remote');
                        } else {
                            $(this).val('').attr('placeholder', 'Enter Filename...');
                            $('[data-bp="bg_' + bpid + '"] span.input-group-addon1').text('/images/evergage/' + globals.selectBrand + '/');
                        }
                    });
                }
                $(".input-group1").removeClass("found notfound");
                $(".input-group1").next('.error').prop('hidden', true);

                // console.log(globals);
            });

            // imgaddress
            $('.backgroundimages .row.showing[data-bp="bg_' + bpid + '"] .bgimgaddress').on({
                focus: function () {

                    $(this).parent().removeClass('found notfound');
                    if ($(this).parent().next().prop('hidden', false)) {
                        $(this).parent().next().prop('hidden', true);
                    }
                },
                focusout: function () {

                    if ($(this).val() != '') {
                        checkImageExists1(this, $(this).val(), bannerObj(id));
                    }

                    // console.log(globals);
                }
            });

            $('.backgroundimages .row.showing[data-bp*="bg_"] [data-bp="bgdimensions"] input,.backgroundimages .row.showing[data-bp*="bg_"] [data-bp="bgpos"] input').on('focusout', function () {
                var bpid = $(this).attr('id').substr(-5),
                    id = $(this).parents('[id*="background_"]').attr('id').substr(-4);
                console.log(bpid);
                console.log(id);

                switch ($(this).attr('name')) {
                    case 'width':
                        globals.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid].background.bgwidth = $(this).val();
                        break;
                    case 'height':
                        globals.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid].background.bgheight = $(this).val();
                        break;
                    case 'x':
                        globals.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid].background.positionx = $(this).val();
                        break;
                    case 'y':
                        globals.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid].background.positiony = $(this).val();
                        break;
                    default:
                        break;
                }

                var embedstyles = $('style#banners');

                $(embedstyles).html('');
                $(embedstyles).append(globals.buildStyles(globals.bannerObjects));

            });
        },
        render: function () {

            // Create the first breakpoint object ID
            var bpid = randomId(10000, 99999);

            // Add the first breakpoint object to this banner object
            this.bp(bpid);

            // Place the first banner navigation button
            $('[id="bannerTabs"] span.dynamic .row-fluid.flex-it').append(bannerTab(this));

            // Place the first banner create form
            $('#properties.row > .dynamic').append(bannerCreatorForm(this));

            // Place the first banner simulation
            $('.row .text-render').append(bannerPreview(this));

            // Since this is the first of all, hide all remove buttons
            $('.subtract-button').prop('hidden', true);

            // Initial CKEditor on the first designated text area
            $('textarea.editor').ckeditor();


            this.bgSettingsRender(this.id, bpid);

            this.bgEventListeners(this.id, bpid);

            this.buttonBehave();
        }
    }
    return obj;
}