var globals = {
    bgDesktopPlaceholder: 'Demo-image-962.png',
    bgMobilePlaceholder: 'Demo-image-575.png',
    maxBannerNumber: 4,
    minBannerNumber: 1,
    campaign: {
        campaign: function (el) {
            return el == '' ? 'campaign' : el;
        },
        brands: {
            'py': {
                'baseUrl': 'https://www.paulayoung.com',
                'evergagePath': 'py',
                'brandColor': 'rgb(184,117,174)'
            },
            'ey': {
                'baseUrl': 'https://www.especiallyyours.com',
                'evergagePath': 'ey',
                'brandColor': 'rgb(23, 95, 180)'
            },
            'tl': {
                'baseUrl': 'https://www.thelook.fashion',
                'evergagePath': 'tl',
                'brandColor': 'rgb(0, 93, 166);'
            },
            'wg': {
                'baseUrl': 'https://www.wig.com',
                'evergagePath': 'wg',
                'brandColor': 'rgb(86, 160, 224);'
            },
            'be': {
                'baseUrl': 'https://www.beyondextensions.com',
                'evergagePath': 'be',
                'brandColor': 'rgb(255, 97, 84)'
            }
        },
        name: 'campaign',
        stackbreakpoint: '575',
        selectBrand: '',
        get selectBrandPath() {
            var path = this.selectBrand == '' ? 'Choose Brand <span class="required">*</span>' : this.brands[this.selectBrand].baseUrl;
            return path;
        },
        evergagehtml: '',
        evergagecss: '',
        bannerObjects: {}
    },

    buildStyles: function (elObject) {
        var stackbreakpoint = this.campaign.stackbreakpoint = '' || this.campaign.stackbreakpoint < 1 ? '575' : this.campaign.stackbreakpoint,
            styles = '.render{display:flex; flex-direction: row;}@media all and (max-width:' + stackbreakpoint + 'px){.render{flex-direction: column;}}.banner{width:100%;}';
        for (x in Object.values(elObject)) {
            var id = Object.values(elObject)[x]['id'],
                hex = Object.values(elObject)[x]['hex'],
                cursor = Object.values(elObject)[x]['cursor'],
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
                    //bgState = Object.values(breakpoints)[y]['background']['state'],
                    media = Number(Object.values(breakpoints)[y]['minwidth']) == 0 && Number(Object.values(breakpoints)[y]['maxwidth']) == 0 ? '[id="banner_' + id + '"] [data-bp="' + bpid + '"]{cursor: ' + cursor + ';display:flex;flex-direction: row;justify-content: space-evenly;flex-wrap:wrap;width:100%;align-items: center;height:auto;min-height:' + height + 'px;background-color:' + hex + ';background-image:url("' + bgImg + '");background-position:' + bgPosition + ';background-position-x:' + bgPositionX + ';background-position-y:' + bgPositionY + ';background-repeat:no-repeat;background-size:' + bgwidth + ' ' + bgheight + ';}' : '[id="banner_' + id + '"] [data-bp="' + bpid + '"]{ display:none;}@media screen' +
                        min +
                        max +
                        '{ [id="banner_' + id + '"] [data-bp="' + bpid + '"]{ display:flex;flex-direction: row;justify-content: space-evenly;flex-wrap:wrap;width:100%;align-items: center;height:auto;min-height:' + height + 'px;background-color:' + hex + ';background-image:url("' + bgImg + '");background-position:' + bgPosition + ';background-position-x:' + bgPositionX + ';background-position-y:' + bgPositionY + ';background-repeat:no-repeat;background-size:' + bgwidth + ' ' + bgheight + ';}}';


                styles += media;
            }
        };
        styles += '.modal{padding-right:0px!important;}@media all and (max-width:' + stackbreakpoint + 'px){.modal-dialog{width:auto; margin: 30px auto;}}.gutter{padding:0 2px 0 0;}@media all and (max-width:' + stackbreakpoint + 'px){.gutter{padding:0 0 2px 0;}}.gutter:last-child{display:none;}';
        return styles;
    },
    render: function () {
        for (banner in this.campaign.bannerObjects) {
            this.campaign.bannerObjects[banner].render();
        }
    }
};

$(document).ready(function () {

    //$('[id="bannerTabs"]').prepend(bannerTabsLegend);

    $(document).on('hidden.bs.modal', '#msgBox.modal', function () {
        $(this).remove();
    });

    $("button[name='newCampaign'], button[name='importjson']").on("click", function () {
        var type = $(this).attr('name');

        if (type == 'newCampaign') {
            var idInit = '',
                bannerInit;

            $('#campaign .col-xs-12').html('');
            globals.campaign.bannerObjects = {};

            $('#campaign .col-xs-12').append(sections);

            // Create new banner object
            idInit = randomId(1000, 9999);
            bannerInit = new bannerObj(idInit);

            // Add new banner object to global banner objects container
            globals.campaign.bannerObjects['banner_' + idInit] = bannerInit;

            // Run the new banner object render function
            globals.render();

        } else {

            msgBox1(importjsonForm(), 'Import JSON');

            $('button#UpdateJSON').on('click', function () {
                globals.campaign = JSON.parse($('textarea#pastedjson').val());

                $('#campaign .col-xs-12').html('');

                $('#campaign .col-xs-12').append(sections);

                $('#msgBox').modal('hide');

                console.log(globals.campaign);

                jsonRender(globals.campaign);

            });
        }

        coreBehaviors();

    });


});

function jsonRender(obj) {
    $('input#campaignName').val(obj.name);
    $('select#brands').val(obj.selectBrand);
    $('input#stackingBp').val(obj.stackingBp);
    $('style#banners').append(obj.evergagecss);
    $('.row .render').append(obj.evergagehtml);

    for (banner in globals.campaign.bannerObjects) {
        $('[id="bannerTabs"] span.dynamic .row-fluid.flex-it').append(bannerTab(globals.campaign.bannerObjects[banner]));
        $('#properties.row > .dynamic').append(bannerCreatorForm(globals.campaign.bannerObjects[banner]));

        bannerBaseBehaviors(globals.campaign.bannerObjects[banner]);

        for (breakpoints in banner) {

            for (textgroups in breakpoints) {

            }

        }
    }

}

function coreBehaviors() {
    // When brand selected/changed, update all address fields
    $('input#campaignName').on('focusout', function () {
        globals.campaign.name = ($(this).val());
    });

    // When embedded styles have been generated, enable export buttons
    $('body').on('DOMSubtreeModified', 'style#banners', function () {
        $('button[name="exportjson"]').prop('disabled', false);
        $('button[name="exporthtml"]').prop('disabled', false);
        $('button[name="exportcss"]').prop('disabled', false);
    });

    // button events
    $("button[name='exporthtml'],button[name='exportcss'],button[name='exportjson']").on("click", function () {
        var type = $(this).attr('name');
        exportCode1(type);
    });

    //https://stackoverflow.com/questions/15657686/jquery-event-detect-changes-to-the-html-text-of-a-div

    $('button[name="resetall"]').on('click', function () {

        // Remove banner tabs, banner property forms, embedded styles, rendered banners
        $('#bannerTabs .dynamic .row-fluid.flex-it, #properties .dynamic, style#banners, .render').html('');

        // Since embedded styles now removed, disable export buttons
        $('button[name="exportjson"]').prop('disabled', true);
        $('button[name="exporthtml"]').prop('disabled', true);
        $('button[name="exportcss"]').prop('disabled', true);

        // Empty out banner objects
        globals.campaign.bannerObjects = {};

        // Create new banner object
        idInit = randomId(1000, 9999);
        bannerInit = new bannerObj(idInit);

        // Add new banner object to global banner objects container
        globals.campaign.bannerObjects['banner_' + idInit] = bannerInit;

        // Run the new banner object render function
        globals.campaign.bannerObjects['banner_' + idInit].render();

    });

    // Interchangeable messaging for help modal
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

        msgBox1(helpMsg, 'Help');
    });

    $('button#stackingBpUpdate').on('click', function (e) {
        e.preventDefault();

        // Update to stacking breakpoint triggers update to global object and embedded stylesheet

        globals.campaign.stackbreakpoint = $('input#stackingBp').val();

        updateStyles();
    });
}

function bannerBaseBehaviors(thisBanner) {
    var id = thisBanner.id,
        thisBannerH2;

    // When brand selected/changed, update all address fields
    $('select[name="brands"]').on('change', function () {
        globals.campaign.selectBrand = $(':selected', this).val();

        $('input[name*="lorr1_"]').trigger('change');

        $('select[name="onClickBehavior"]', '[id="props_' + id + '"]').trigger('change');

        //$('[id*="linkAnchorHTML_"] span.input-group-addon1, [id*="linkHMTL_"] span.input-group-addon1').html(globals.campaign.selectBrandPath);

    });

    // When click behavior selected/changed, display that click behavior form
    $('select[name="onClickBehavior"]', '[id="props_' + id + '"]').on('change', function () {

        displayOnClickBehavior($(':selected', this).val(), id);

    });

    // color events
    $('input[id*="r_bg"],input[id*="g_bg"],input[id*="b_bg"]', '[id="props_' + id + '"]').on('input', function () {

        var code = $(this).val(),
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

        // Convert entered RGB values to HEX and store as banner's property
        thisBanner.hex = rgbToHex(Number(thisBanner.css.bgColor.r), Number(thisBanner.css.bgColor.g), Number(thisBanner.css.bgColor.b));

        // Update embedded stylesheet
        updateStyles();
    });

    // When tab is clicked, enable editing and updating UI name
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

    // When update button is clicked, pending which one, it will update banner object, rendered HTML, and embedded stylesheet
    $('[name="update"]', '[id="props_' + id + '"]').on('click', function (e) {
        e.preventDefault();

        var buttonId = $(e.target).attr('id');

        if (buttonId == 'textGroups') {
            //Text groups specific to breakpoint

            var allBreakpoints = $('[data-domain="breakpoints"] .inputs [name*="bpid"]', '[id="content_' + id + '"]');

            for (var q = 0; q < allBreakpoints.length; q++) {

                var bpid = $(allBreakpoints[q]).attr('name').substr(-5),
                    inputs = $('[data-input-index]', allBreakpoints[q]);

                for (var p = 0; p < inputs.length; p++) {
                    $(inputs[p]).removeAttr('class');

                    var index = $(inputs[p]).data('input-index'),
                        newChildElems;

                    $('.render [id="banner_' + id + '"] [data-bp="bpid_' + bpid + '"] [data-output-index="' + index + '"]').empty();

                    if ($('textarea.editor', inputs[p]).val()) {
                        $('.render [id="banner_' + id + '"] [data-bp="bpid_' + bpid + '"] [data-output-index="' + index + '"]').append($('textarea.editor', inputs[p]).val());

                        globals.campaign.bannerObjects['banner_' + id].bpjson[bpid][p] = { 'html': $('textarea.editor', inputs[p]).val() };

                        newChildElems = $('.render [id="banner_' + id + '"] [data-bp="bpid_' + bpid + '"] [data-output-index="' + index + '"]').children();

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

function websiteURL1() {
    var brand = globals.campaign.selectBrand;
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

    img.onload = function () {
        $(el).parent().addClass('found');
        $(el).parent().next().prop('hidden', true);

        globals.campaign.bannerObjects['banner_' + banner.id].css.breakpoints['bpid_' + bp].background.img = img.src;

        updateStyles()
    };
    img.onerror = function () {
        $(el).parent().addClass('notfound');
        $(el).parent().next().prop('hidden', false);

        globals.campaign.bannerObjects['banner_' + banner.id].css.breakpoints['bpid_' + bp].background.img = 'none';

        updateStyles()
    };

    img.src = imgURL1(el, true);
}

function exportCode1(type) {
    switch (type) {
        case 'exporthtml':
            htmlExport1();
            if (globals.campaign.evergagehtml) {
                delete globals.campaign.evergagehtml;
                globals.campaign['evergagehtml'] = $('#rendering .section-offer-content .row .render').html();
            } else {
                globals.campaign['evergagehtml'] = $('#rendering .section-offer-content .row .render').html();
            }
            $(document).on('hidden.bs.modal', '#msgBox.modal', function () {
                $(this).remove();
            });
            break;
        case 'exportcss':
            styleExport1();
            if (globals.campaign.evergagecss) {
                delete globals.campaign.evergagecss;
                globals.campaign['evergagecss'] = $('style#banners').html();
            } else {
                globals.campaign['evergagecss'] = $('style#banners').html();
            }
            $(document).on('hidden.bs.modal', '#msgBox.modal', function () {
                $(this).remove();
            });
            break;
        case 'exportjson':
            jsonExport1();
            $(document).on('hidden.bs.modal', '#msgBox.modal', function () {
                $(this).remove();
            });
            break;
        default:
            break;
    }
}

function jsonExport1() {
    // Form the CSS
    globals.campaign.evergagecss = $('style#banners').html();
    globals.campaign.evergagehtml = $('#rendering .section-offer-content .row .render').html();
    var html = "<textarea id='export'>" + JSON.stringify(globals.campaign) + "</textarea>";
    html += '<div class="faux-footer"><button onClick="copyToClipBoard();" class="copy btn btn-default">Copy To Clipboard</button><button onClick="saveToJson();" class="save btn btn-default">Save as JSON</button></div>';
    console.log(globals.campaign);
    msgBox1(html, "JSON Export");
}

function styleExport1() {
    // Form the CSS
    var html = "<textarea id='export'>" + globals.campaign.evergagecss + "</textarea>";
    html += '<div class="faux-footer"><button onClick="copyToClipBoard();" class="copy btn btn-default">Copy To Clipboard</button></div>';
    msgBox1(html, "CSS Export");
}

function htmlExport1() {
    // Clone the html to a non visible area
    $('body').append('<div class="noSeeCode"></div>');
    $('#rendering .section-offer-content .row .render').clone().appendTo('.noSeeCode');

    // Change out all the dummy sections for user input
    // Heading
    //$(".noSeeCode img#section-offer-img").attr("alt", $("input[type='text'][name='heading']").val().replace(/'/g, '').replace(/"/g, ''));

    // Img
    //var bgDesktopsrc = imgURL1($('.imgaddress[name*="bgDesktop_"]'), false);
    //var bgMobilesrc = imgURL1($('.imgaddress[name*="bgMobile_"]'), false);
    // source 962
    //$('.noSeeCode picture source[media*="576"]').attr('srcset', bgDesktopsrc);
    // source 575
    //$('.noSeeCode picture source[media*="575"]').attr('srcset', bgMobilesrc);
    // default src and data-srcset
    //$('.noSeeCode img#section-offer-img').attr('src', bgDesktopsrc).attr('data-srcset', bgMobilesrc);

    // Body
    // if ($('input[type="checkbox"][name="body"]:checked').length == 1)
    //     $('.noSeeCode .body').text($('textarea[name="body"]').val());
    // else
    //     $('.noSeeCode .body').remove();

    // Coupon
    // if ($('input[type="checkbox"][name="coupon"]:checked').length == 1)
    //     $('.noSeeCode .coupon').text($('input[type="text"][name="coupon"]').val());
    // else
    //     $('.noSeeCode .coupon').remove();

    // If no Body or Coupon, remove aria-describedby and offer-description
    // if ($('input[type="checkbox"][name="body"]:checked').length == 0 && $('input[type="checkbox"][name="coupon"]:checked').length == 0) {
    //     $('.noSeeCode #offer-description').remove();
    //     $('.noSeeCode img#section-offer-img').removeAttr('aria-describedby');
    // }

    // 'a' href
    //$('.noSeeCode a').attr('href', $('input[type="text"][name="href"]').val());

    // Remove href target
    //$('.noSeeCode a').removeAttr('target');

    var html = '<textarea id="export">' + escapeHTML1(globals.campaign.evergagehtml) + '</textarea>';
    html += '<div class="faux-footer"><button onClick="copyToClipBoard();" class="copy btn btn-default">Copy To Clipboard</button></div>';
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

    var id = el1.id;

    $('.render [id="banner_' + id + '"] [data-bp="bpid_' + el2.substr(-5) + '"]').css({ 'background-image': 'url("' + globals.campaign.bannerObjects['banner_' + id].css.breakpoints['bp_' + el2].background.img + '")', 'background-size': 'cover', 'background-repeat': 'no-repeat', 'background-position': 'center center' });
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

function displayOnClickBehavior(behaviorSelected, id) {

    $('[id="clickbehavior_' + id + '"] .onclickbehavior').removeClass('showing');

    switch (behaviorSelected) {
        case 'fireModal':
            $('[id="modalHTML_' + id + '"]').addClass('showing');
            $('[id="clickbehavior_' + id + '"] #updateOnClick').css('display', 'block');
            break;
        case 'linkToPage':
            $('[id="linkHMTL_' + id + '"]').addClass('showing');
            $('[id="clickbehavior_' + id + '"] #updateOnClick').css('display', 'block');
            if (globals.campaign.selectBrand == '') {
                $('[id*="linkAnchorHTML_"] span.input-group-addon1, [id*="linkHMTL_"] span.input-group-addon1').html(globals.campaign.selectBrandPath);
            } else {
                $('[id="clickbehavior_' + id + '"] input#offerLink.form-control1').removeClass('error');
                $('[id*="linkAnchorHTML_"] span.input-group-addon1, [id*="linkHMTL_"] span.input-group-addon1').html(globals.campaign.selectBrandPath);
            }
            break;
        case 'linkToAnchor':
            $('[id="linkAnchorHTML_' + id + '"]').addClass('showing');
            $('[id="clickbehavior_' + id + '"] #updateOnClick').css('display', 'block');
            if (globals.campaign.selectBrand == '') {
                $('[id*="linkAnchorHTML_"] span.input-group-addon1, [id*="linkHMTL_"] span.input-group-addon1').html(globals.campaign.selectBrandPath);
            } else {
                $('[id="clickbehavior_' + id + '"] input#anchorLink.form-control1').removeClass('error');
                $('[id*="linkAnchorHTML_"] span.input-group-addon1, [id*="linkHMTL_"] span.input-group-addon1').html(globals.campaign.selectBrandPath);
            }
            break;
        case 'doNothing':
            $('[id="doNothing_' + id + '"]').addClass('showing');
            $('[id="clickbehavior_' + id + '"] #updateOnClick').css('display', 'block');
            break;
        default:
            $('[id="clickbehavior_' + id + '"] #updateOnClick').css('display', 'none');
            break;
    }
}

function assignOnClickBehavior(id) {
    var type = $('[id="clickbehavior_' + id + '"] .showing').attr('name');

    if (type == 'modalHTML') {
        var title,
            body,
            footer;

        $('.render #banner_' + id).attr('role', 'button');
        $('.render #banner_' + id).removeAttr('onclick');
        $('.render #banner_' + id).css('cursor', 'pointer');

        globals.campaign.bannerObjects['banner_' + id].onClickBehavior.name = 'fireModal';
        globals.campaign.bannerObjects['banner_' + id].cursor = 'pointer';


        if ($('[id="modal_' + id + '"].modal')) {

            // If a modal exists with the same ID, remove and create a new one
            $('[id="modal_' + id + '"].modal').remove();

            title = $('[id="modalHTML_' + id + '"] input#modalTitle').val() ? $('[id="modalHTML_' + id + '"] input#modalTitle').val() : 'Enter Title text under Click Behavior Settings';

            body = $('[id="modalHTML_' + id + '"] textarea#modalBody').val() ? $('[id="modalHTML_' + id + '"] textarea#modalBody').val() : 'Enter Body text under Click Behavior Settings';

            footer = $('[id="modalHTML_' + id + '"] input#modalFooter').val() ? $('[id="modalHTML_' + id + '"] input#modalFooter').val() : 'Enter Footer text under Click Behavior Setting';

            $('.render').append(globals.campaign.bannerObjects['banner_' + id].onClickBehavior.modal.html(id, title, body, footer));

            $('.render #banner_' + id).attr('data-toggle', 'modal');
            $('.render #banner_' + id).attr('data-target', '#modal_' + id);
        }

    } else if (type == 'linkHMTL') {
        var link = '#';

        $('.render #banner_' + id).removeAttr('data-toggle');
        $('.render #banner_' + id).removeAttr('data-target');
        $('.render #banner_' + id).attr('role', 'button');
        $('.render #banner_' + id).attr('target', '_blank');
        $('.render #banner_' + id).css('cursor', 'pointer');

        globals.campaign.bannerObjects['banner_' + id].onClickBehavior.name = 'linkToPage';
        globals.campaign.bannerObjects['banner_' + id].cursor = 'pointer';

        link = $('[id="clickbehavior_' + id + '"] input#offerLink').val() ? $('[id="clickbehavior_' + id + '"] input#offerLink').val() : '#';

        if (globals.campaign.selectBrand == '') {
            $('[id="clickbehavior_' + id + '"] input#offerLink.form-control1').addClass('error');
            $('[id*="linkAnchorHTML_"] span.input-group-addon1, [id*="linkHMTL_"] span.input-group-addon1').html(globals.campaign.selectBrandPath);
        } else {
            $('[id="clickbehavior_' + id + '"] input#offerLink.form-control1').removeClass('error');
            $('[id*="linkAnchorHTML_"] span.input-group-addon1, [id*="linkHMTL_"] span.input-group-addon1').html(globals.campaign.selectBrandPath);

            globals.campaign.bannerObjects['banner_' + id].onClickBehavior.anchor = globals.campaign.brands[globals.campaign.selectBrand].baseUrl + link;

            $('.render #banner_' + id).attr('onclick', 'window.open(\'' + globals.campaign.brands[globals.campaign.selectBrand].baseUrl + link + '\',\'new_window\');');
        }

    } else if (type == 'linkAnchorHTML') {
        var link = '#';

        $('.render #banner_' + id).removeAttr('data-toggle');
        $('.render #banner_' + id).removeAttr('data-target');
        $('.render #banner_' + id).attr('role', 'button');
        $('.render #banner_' + id).attr('target', '_blank');
        $('.render #banner_' + id).css('cursor', 'pointer');

        globals.campaign.bannerObjects['banner_' + id].onClickBehavior.name = 'linkToAnchor';
        globals.campaign.bannerObjects['banner_' + id].cursor = 'pointer';

        link = $('[id="clickbehavior_' + id + '"] input#anchorLink').val() ? $('[id="clickbehavior_' + id + '"] input#anchorLink').val() : 'mlTen';

        if (globals.campaign.selectBrand == '') {
            $('[id="clickbehavior_' + id + '"] input#anchorLink.form-control1').addClass('error');
            $('[id*="linkAnchorHTML_"] span.input-group-addon1, [id*="linkHMTL_"] span.input-group-addon1').html(globals.campaign.selectBrandPath);
        } else {
            $('[id="clickbehavior_' + id + '"] input#anchorLink.form-control1').removeClass('error');
            $('[id*="linkAnchorHTML_"] span.input-group-addon1, [id*="linkHMTL_"] span.input-group-addon1').html(globals.campaign.selectBrandPath);

            globals.campaign.bannerObjects['banner_' + id].onClickBehavior.anchor = globals.campaign.brands[globals.campaign.selectBrand].baseUrl + link;

            $('.render #banner_' + id).attr('onclick', 'window.open(\'' + globals.campaign.brands[globals.campaign.selectBrand].baseUrl + link + '\',\'new_window\');');
        }

    } else {

        $('.render #banner_' + id).removeAttr('data-toggle');
        $('.render #banner_' + id).removeAttr('data-target');
        $('.render #banner_' + id).attr('role', 'presentation');
        $('.render #banner_' + id).removeAttr('onclick');
        $('.render #banner_' + id).css('cursor', 'auto');

        globals.campaign.bannerObjects['banner_' + id].onClickBehavior.name = 'doNothing';
        globals.campaign.bannerObjects['banner_' + id].cursor = 'none';

    }
    updateStyles();
}

// function linkToPage(id) {
//     var link = '#';

//     globals.campaign.bannerObjects['banner_' + id].onClickBehavior.name = 'linkToPage';
//     globals.campaign.bannerObjects['banner_' + id].cursor = 'pointer';

//     $('.render #banner_' + id).removeAttr('data-toggle');
//     $('.render #banner_' + id).removeAttr('data-target');

//     $('.render #banner_' + id).attr('role', 'button');
//     $('.render #banner_' + id).attr('target', '_blank');
//     $('.render #banner_' + id).css('cursor', 'pointer');

//     $('[id="clickbehavior_' + id + '"] #updateOnClick').css('display', 'block');

//     $('[id="clickbehavior_' + id + '"] #updateOnClick').on('click', function () {

//         link = $('[id="clickbehavior_' + id + '"] input#offerLink').val() ? $('[id="clickbehavior_' + id + '"] input#offerLink').val() : '#';

//         globals.campaign.bannerObjects['banner_' + id].onClickBehavior.anchor = globals.campaign.brands[globals.campaign.selectBrand].baseUrl + link;
//         $('.render #banner_' + id).attr('onclick', 'window.open(\'' + globals.campaign.brands[globals.campaign.selectBrand].baseUrl + link + '\',\'new_window\');');

//         var embedstyles = $('style#banners');

//         $(embedstyles).html('');
//         $(embedstyles).append(globals.buildStyles(globals.campaign.bannerObjects));
//     });

// }

// function linkToAnchor(id) {
//     var link = '#';

//     globals.campaign.bannerObjects['banner_' + id].onClickBehavior.name = 'linkToAnchor';
//     globals.campaign.bannerObjects['banner_' + id].cursor = 'pointer';

//     $('.render #banner_' + id).removeAttr('data-toggle');
//     $('.render #banner_' + id).removeAttr('data-target');

//     $('.render #banner_' + id).attr('role', 'button');
//     $('.render #banner_' + id).attr('target', '_blank');
//     $('.render #banner_' + id).css('cursor', 'pointer');

//     $('[id="clickbehavior_' + id + '"] #updateOnClick').css('display', 'block');

//     $('[id="clickbehavior_' + id + '"] #updateOnClick').on('click', function () {

//         link = $('[id="clickbehavior_' + id + '"] input#anchorLink').val() ? $('[id="clickbehavior_' + id + '"] input#anchorLink').val() : 'mlTen';

//         globals.campaign.bannerObjects['banner_' + id].onClickBehavior.anchor = globals.campaign.brands[globals.campaign.selectBrand].baseUrl + link;
//         $('.render #banner_' + id).attr('onclick', 'window.open(\'' + globals.campaign.brands[globals.campaign.selectBrand].baseUrl + link + '\',\'new_window\');');

//         var embedstyles = $('style#banners');

//         $(embedstyles).html('');
//         $(embedstyles).append(globals.buildStyles(globals.campaign.bannerObjects));
//     });
// }

// function doNothing(id) {
//     globals.campaign.bannerObjects['banner_' + id].onClickBehavior.name = 'doNothing';
//     globals.campaign.bannerObjects['banner_' + id].cursor = 'none';

//     $('.render #banner_' + id).removeAttr('data-toggle');
//     $('.render #banner_' + id).removeAttr('data-target');

//     $('.render #banner_' + id).attr('role', 'presentation');
//     $('.render #banner_' + id).removeAttr('onclick');
//     $('.render #banner_' + id).css('cursor', 'auto');

//     $('[id="clickbehavior_' + id + '"] #updateOnClick').css('display', 'none');

//     var embedstyles = $('style#banners');

//     $(embedstyles).html('');
//     $(embedstyles).append(globals.buildStyles(globals.campaign.bannerObjects));
// }

// function confirmAllRequiredMet() {

//     var invalids = [],
//         valids = [],
//         allRequireds = $(':required');

//     for (var j = 0; j < allRequireds.length; j++) {
//         if (allRequireds[j].value == '') {
//             invalids.push(Number(j) + ':' + allRequireds[j].getAttribute('id'));
//         } else {
//             valids.push(Number(j) + ':' + allRequireds[j].getAttribute('id'));
//         }
//     }

//     if (invalids.length < 1) {
//         $('button[name="exporthtml"],button[name="exportcss"]').prop('disabled', false);
//     } else {
//         $('button[name="exporthtml"],button[name="exportcss"]').prop('disabled', true);
//     }
// }

function show(thisButton) {
    var dataDomain = $(thisButton).closest('[data-domain]').data('domain'),
        id;

    if (dataDomain == 'tabs') {

        id = $(thisButton).closest('[id*="tabs_"]').attr('id').substr(-4);

        $('[id*="props_"], .banner-tab, .render > div').removeClass('showing');

        $('[id="props_' + id + '"], [id="banner_' + id + '"]').addClass('showing');

    } else {

        id = $(thisButton).closest('[id*="props_"]').attr('id').substr(-4);
        var bpid = $(thisButton).closest('[id="props_' + id + '"] [name*="bpid_"]').attr('name').substr(-5);

        $('[data-domain="breakpoints"] .tabs div button.breakpoint-tab, [data-domain="breakpoints"] .inputs .col-xs-12 .input, .backgroundimage [data-bp*="bg_"]', '[id="content_' + id + '"]').removeClass('showing');

        $('[data-domain="breakpoints"] .inputs .col-xs-12 [name="bpid_' + bpid + '"], .backgroundimage [data-bp="bg_' + bpid + '"]', '[id="content_' + id + '"]').addClass('showing');

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
                globals.campaign.bannerObjects['banner_' + id] = z;
            } else {
                z = new bannerObj(id);
                globals.campaign.bannerObjects['banner_' + id] = z;
            }
        }

        globals.campaign.bannerObjects['banner_' + id].render();

        // Recheck qty of banners
        series = $('[id*="tabs_"]');

        if (globals.campaign.bannerObjects['banner_' + id].visibleIndex(series) == globals.maxBannerNumber) {
            $('[data-domain="' + dataDomain + '"] .add-button').prop('hidden', true);
        }

        $('[data-domain="' + dataDomain + '"] .subtract-button').prop('hidden', false);

        $('[id*="props_"], .banner-tab, .render > div').removeClass('showing');

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
        $('.render [id="banner_' + id + '"] [data-bp="bpid_' + bpid + '"]').append(bannerObj(id).copyOutput($(seriesParent).children().last().data('input-index')));

        // Since there is more than one input now, disable hidden attribute for all input subtract buttons
        $('.subtract-button', seriesParent).prop('hidden', false);

        series = $('textarea', seriesParent);

        // Initiate ckeditor on this new textarea
        $(series).last().ckeditor();

        globals.campaign.bannerObjects['banner_' + id].bpjson[bpid][$(seriesParent).children('[data-input-index]').last().data('input-index')];

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

        globals.campaign.bannerObjects['banner_' + id].bpjson[bpid] = {};

        globals.campaign.bannerObjects['banner_' + id].bpjson[bpid][1] = { 'html': '' };


        globals.campaign.bannerObjects['banner_' + id].bp(bpid);
        globals.campaign.bannerObjects['banner_' + id].thisBannerBgSettingsExtended(id, bpid);
        globals.campaign.bannerObjects['banner_' + id].thisBannerExtendedBehaviors(id, bpid);

        // Since there is more than one breakpoint now, disable hidden attribute for all breakpoint subtract buttons
        $('[id="content_' + id + '"] [data-domain="bpconfig"] .subtract-button').prop('hidden', false);
    }
}

function removeThis(thisButton) {

    var dataDomain = $(thisButton).closest('[data-domain]').data('domain');

    if (dataDomain == 'tabs') {
        var seriesParent = $(thisButton).closest('[id*="tabs_"]'),
            id = $(seriesParent).attr('id').substr(-4),
            series;

        delete globals.campaign.bannerObjects['banner_' + id];

        $('[id="tabs_' + id + '"], [id="props_' + id + '"], .render > [id="banner_' + id + '"], .render > [id="banner_' + id + '"] + .gutter').remove();

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

        delete globals.campaign.bannerObjects['banner_' + id].bpjson[bpid][dataIndex];

        $('[data-input-index="' + dataIndex + '"]', seriesParent).remove();
        $('.render [id="banner_' + id + '"] [data-bp="bpid_' + bpid + '"] [data-output-index="' + dataIndex + '"]').remove();

        series = $('[data-input-index]', seriesParent);

        if (series.length == globals.minBannerNumber) {
            $('.subtract-button', seriesParent).prop('hidden', true);
        }

    } else {
        var seriesParent = $(thisButton).closest('[data-domain="breakpoints"]'),
            bpid = $(thisButton).closest('[name*="bpid"]').attr('name').substr(-5),
            id = $(thisButton).closest('[id*="content"]').attr('id').substr(-4),
            series;

        delete globals.campaign.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid];

        delete globals.campaign.bannerObjects['banner_' + id].bpjson[bpid];

        $('[name="bpid_' + bpid + '"]').remove();

        $('[data-bp="bg_' + bpid + '"]').remove();

        $('.render [id="banner_' + id + '"] [data-bp="bpid_' + bpid + '"]').remove();

        // Recheck qty of breakpoints
        series = $('[data-domain="bpconfig"]', seriesParent);

        if (series.length == 1) {
            $('[id="content_' + id + '"] .subtract-button').prop('hidden', true);
        }

    }

    updateStyles();
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
        name = globals.campaign.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid].name,
        minwidth = globals.campaign.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid].minwidth,
        maxwidth = globals.campaign.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid].maxwidth,
        height = globals.campaign.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid].height;

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
    if (minwidth == 0 && maxwidth == 0) {
        $('button[name="copyTab"]', el2).html('<h5 style="margin-top:0;margin-bottom:0;">' +
            name +
            '</h5>' +
            '<span data-toggle="collapse" href="#dl_' + bpid + '" role="button" aria-expanded="false" aria-controls="collapseExample" class="glyphicon"></span>' +
            '<dl id="dl_' + bpid + '" class="collapse">' +
            '<dd><span style="font-weight:400;font-size:smaller;">height:</span> ' +
            height + 'px</span></dd>' +
            '</dl>'
        );
    } else if (minwidth == 0) {
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

    globals.campaign.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid].name = name;
    globals.campaign.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid].minwidth = minwidth;
    globals.campaign.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid].maxwidth = maxwidth;
    globals.campaign.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid].height = height;

    $('[data-bp="bg_' + bpid + '"] b.bpName').html(name);

    updateStyles();

    $('#msgBox').modal('hide');
}

function randomId(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
//https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb

function saveToJson() {
    var text = $("#export").val();
    //var filename = $("#input-fileName").val();
    var filename = globals.campaign.name;
    var blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    saveAs(blob, filename + ".json");
}

function copyToClipBoard() {
    var text = document.getElementById('export');
    text.select();
    text.setSelectionRange(0, 99999);
    document.execCommand('copy');
}

function updateStyles() {
    var embedstyles = $('style#banners');

    $(embedstyles).html('');
    $(embedstyles).append(globals.buildStyles(globals.campaign.bannerObjects));
}

function sections() {
    var html = '<br>' +
        '<div class="row">' +
        '<p class="col-xs-12">' +
        '<span class="required">*</span> - Indicates a required field.</p>' +
        '</div>' +
        '</div>' +
        '<div id="globals" class="row">' +
        '<fieldset id="globalProperties" class="col-xs-12">' +
        '<legend>' +
        '<h2>Global Attributes</h2>' +
        '</legend>' +
        '<div class="row-fluid">' +
        '<fieldset id="brand" class="col-xs-12">' +
        '<legend> <h3>Campaign</h3>' +
        '</legend> <div class="row">' +
        '<div class="col-xs-2">' +
        '<label for="brand">Enter your campaign name:<span class="required">*</span></label>' +
        '</div>' +
        '<div class="col-xs-2">' +
        '<input id="campaignName" type="text" placeholder="' + globals.campaign.name + '" value="' + globals.campaign.name + '">' +
        '</div>' +
        '</div>' +
        '</fieldset>' +
        '</div>' +
        '<div class="row-fluid">' +
        '<fieldset id="brand" class="col-xs-12">' +
        '<legend>' +
        '<h3>Brand</h3>' +
        '</legend>' +
        '<div class="row">' +
        '<div class="col-xs-2">' +
        '<label for="brand">Choose a brand:<span class="required">*</span></label>' +
        '</div>' +
        '<div class="col-xs-3">' +
        '<select name="brands" id="brands" required> ' +
        '<option value="">-- select --</option> ' +
        '<option value="py">Paula Young</option> ' +
        '<option value="ey">Especially Yours</option> ' +
        '<option value="tl">The Look</option> ' +
        '<option value="wg">Wig</option>' +
        '</select> </div></div></fieldset>' +
        '</div><div class="row-fluid">' +
        '<fieldset id="stackingBreakpoint" class="col-xs-12">' +
        '<legend>' +
        '<h3>Stacking Breakpoint</h3>' +
        '</legend> <div class="row">' +
        '<div class="col-xs-12">' +
        '<p>Enter the max width whereby the banners will render as a column stack ( &nbsp;<span class="vertical"><svg width="10" height="2"> <rect width="10" height="2" style="fill:rgb(0,0,0);stroke-width:0;stroke:rbg(0,0,0);"/> </svg><br><svg width="10" height="2"> <rect width="10" height="2" style="fill:rgb(0,0,0);stroke-width:0;stroke:rbg(0,0,0);"/> </svg><br><svg width="10" height="2"> <rect width="10" height="2" style="fill:rgb(0,0,0);stroke-width:0;stroke:rbg(0,0,0);"/> </svg></span>&nbsp;vs&nbsp;<span class="vertical"></span>&nbsp;). By default, banners will render as stacked in screenwidths of up to 575px when there is more than one banner.</p>' +
        '</div>' +
        '</div>' +
        '<div class="row">' +
        '<div class="col-xs-2">' +
        '<label for="stackingBp">Enter number:</label>' +
        '</div>' +
        '<div class="col-xs-3 field-unit">' +
        '<input id="stackingBp" name="stackingBp" type="number" min="0" placeholder="575" required> <span>px</span> </div>' +
        '</div>' +
        '<div class="row">' +
        '<div class="col-xs-12" style="text-align:right;">' +
        '<button id="stackingBpUpdate" type="button" name="update">Update Stacking Breakpoint</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="row-fluid">' +
        '<fieldset id="bannerTabs" class="col-xs-12">' +
        '<legend>' +
        '<h3>Banners</h3>' +
        '</legend>' +
        '<p>Click on the <b>[ |A]</b> button to edit the name of the banner and to display the banner\'s properties form.<br>Hover over <b>[ |A]</b> button(s) to view toolbar.<br>Click on the <b>[ <span style="color:green;">+</span>]</b></b> button to add another banner.<br>Click on the <b>[ <span style="color:red;">x</span>]</b> button to remove a banner.</p>' +
        '<hr>' +
        '<span class="dynamic">' +
        '<div class="row-fluid flex-it" data-domain="tabs"></div>' +
        '</span>' +
        '</fieldset>' +
        '</div></fieldset>' +
        '</div>' +
        '<style id="banners"></style>' +
        '<div id="rendering" class="row">' +
        '<div class="section-offer-content col-xs-12">' +
        '<div class="row">' +
        '<div class="col-xs-12 render">' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div id="properties" class="row">' +
        '<div class="dynamic"></div>' +
        '</div>' +
        '<br>' +
        '<div id="actionsOutput" class="row">' +
        '<br>' +
        '<div class="col-xs-12">' +
        '<button type="button" name="exporthtml" disabled>Export HTML</button>' +
        '<button type="button" name="exportcss" disabled>Export CSS</button>' +
        '<button id="form-reset" type="button" name="resetall">Reset</button>' +
        '</div>' +
        '</div>';

    return html;
}

function bannerCreatorForm(el1) {
    var id = el1.id,
        content = '<div class="row-fluid">' +

            '<fieldset id="content_' + id + '" class="col-xs-12">' +

            '<legend><h3>Banner Breakpoint Settings</h3></legend>' +

            '<div class="row-fluid">' +
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

            '<div class="row-fluid content" data-domain="breakpoints">' +
            '<div class="col-xs-12">' +
            '<div class="row flex-it tabs">' +
            '</div>' +
            '<hr>' +

            '<div class="row backgroundimage">' +
            '<div class="col-xs-12">' +
            '<div class="row">' +
            '<div class="col-xs-12">' +
            '<h4>Breakpoint <b class="bpName"></b> Background Image</h4>' +
            '</div>' +
            '</div>' +

            '</div>' +
            '</div>' +
            '<hr>' +



            '<div class="row inputs">' +
            '<div class="col-xs-12">' +

            '<div class="row">' +
            '<div class="col-xs-12">' +
            '<h4>' +
            'Breakpoint <b class="bpName"></b> Text Groups' +
            '</h4>' +
            '</div>' +
            '</div>' +

            '<div class="row">' +
            '<div class="col-xs-12">' +
            '<p>' +
            '<br>Click on the <b>[ <span style="color:green;">+</span> ]</b></b> button to add another text group.' +
            '<br>Click on the <b>[ <span style="color:red;">x</span> ]</b> button to remove a text group.' +
            '</p>' +
            '</div>' +
            '</div>' +
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

        background = '<div class="row-fluid">' +
            '<fieldset id="background_' + id + '" class="col-xs-12">' +
            '<legend> <h3>Banner Background Settings</h3> </legend>' +

            '<div class="row-fluid">' +
            '<div class="col-xs-12">' +
            '<h5>COLOR</h5>' +
            '</div>' +
            '</div>' +
            '<div class="row-fluid">' +
            '<div class="col-xs-3">' +
            '<label for="bgColor">Banner background color <span class="help1 glyphicon glyphicon-question-sign" data-help="rgb" aria-hidden="true"></span>:</label>' +
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

        clickbehavior = '<div class="row-fluid">' +
            '<fieldset id="clickbehavior_' + id + '" class="col-xs-12">' +
            '<legend><h3>Click Behavior Settings</h3></legend>' +
            '<div class="row-fluid">' +
            '<div class="col-xs-3">' +
            '<label for="onClickBehavior_' + id + '">Banner OnClick behavior:</label>' +
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
            '<div class="row-fluid">' +
            '<div class="col-xs-12">' +
            '<div id="modalHTML_' + id + '" class="row-fluid onclickbehavior" name="modalHTML">' +
            '<div class="col-xs-12">' +
            '<div class="row-fluid">' +
            '<div class="col-xs-12">' +
            '<h4>Modal</h4>' +
            '</div>' +
            '</div>' +
            '<hr>' +
            '<div class="row-fluid">' +
            '<div class="col-xs-6">' +
            '<div class="row-fluid enter-text-modal flex-it">' +
            '<label for="modalTitle">Modal Title</label>' +
            '<br>' +
            '<input id="modalTitle" name="modalTitle" placeholder="For free standard shipping on orders of $59 or more, &hellip;" type="text" size="50" maxlength="50">' +
            '</div>' +
            '<br>' +
            '<div class="row-fluid enter-text-modal flex-it">' +
            '<label for="modalBody">Modal Body</label>' +
            '<br>' +
            '<textarea name="modalBody" id="modalBody" class="editor"  cols="50" rows="10" placeholder="Free shipping offer excludes&hellip; Not valid in conjuction with any other offer." required></textarea>' +
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
            '</div>' +
            '</div>' +
            '<div id="linkHMTL_' + id + '" class="row-fluid onclickbehavior" name="linkHMTL">' +
            '<br>' +
            '<div class="col-xs-3">' +
            '<label for="offerLink">Link to another page:</label>' +
            '</div>' +
            '<div class="col-xs-9 input-group1">' +
            '<span class="input-group-addon1" id="img2label">' + globals.campaign.selectBrandPath + '</span><input id="offerLink" class="form-control1" placeholder="Ex. /category/wigs/all-wigs.do" type="text" style="width:100%" required>' +
            '</div>' +
            '</div>' +
            '<div id="linkAnchorHTML_' + id + '" class="row-fluid onclickbehavior" name="linkAnchorHTML">' +
            '<br>' +
            '<div class="col-xs-3">' +
            '<label for="anchorLink">Link to point on same page:</label>' +
            '</div>' +
            '<div class="col-xs-9 input-group1">' +
            '<span class="input-group-addon1" id="img2label">' + globals.campaign.selectBrandPath + '</span><input id="anchorLink" class="form-control1" placeholder="Ex. /home.do#anchor" type="text" required>' +
            '</div>' +
            '</div>' +
            '<div id="doNothing_' + id + '" class="row-fluid onclickbehavior" name="doNothing">' +
            '<br>' +
            '<div class="col-xs-12">' +
            '<p>This will be a static banner.</p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="row-fluid">' +
            '<div class="col-xs-12" style="display: flex;justify-content: flex-end;">' +
            '<button id="updateOnClick" name="update" type="button" style="display:none;">Update onclick</button>' +
            '</div>' +
            '</div>' +
            '</fieldset>' +
            '</div>',

        html = '<fieldset id="props_' + id + '" class="col-xs-12 banner-properties">' +
            '<legend>' +
            '<h2>' +
            '<span class="txtPlaceholder"></span>Properties' +
            '</h2>' +
            '</legend>' +
            background +
            content +
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
    var html = '<div id="banner_' + banner.id + '" class="banner trigger" role="presentation" style="display:block">' +
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
    var html = '<div name="bpid_' + id + '" data-domain="inputs" class="row input showing">' +
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
            '<input id="bpName" name="bpName" class="col-xs-8" type="text" placeholder="' + globals.campaign.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid].name + '">' +
            '</div>' +
            '<div class="row">' +
            '<label for="bpMinWidth" class="col-xs-4">Min-width:' +
            '<br><small style="font-weight:400;">Set to 0 to omit</small>' +
            '<br><small style="font-weight:400;">Default is 575px</small>' +
            '</label>' +
            '<input id="bpMinWidth" name="bpMinWidth" class="col-xs-8" type="number" placeholder="' + globals.campaign.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid].minwidth + '">' +
            '</div>' +
            '<div class="row">' +
            '<label for="bpMaxWidth" class="col-xs-4">Max-width:' +
            '<br><small style="font-weight:400;">Set to 0 to omit</small>' +
            '<br><small style="font-weight:400;">Default is 767px</small>' +
            '</label>' +
            '<input id="bpMaxWidth" name="bpMaxWidth" class="col-xs-8" type="number" placeholder="' + globals.campaign.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid].maxwidth + '">' +
            '</div>' +
            '<div class="row">' +
            '<label for="bpHeight" class="col-xs-4">Height:<br><small style="font-weight:400;">Default is 56px</small></label><input id="bpHeight" name="bpHeight" class="col-xs-8" type="number" placeholder="' + globals.campaign.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid].height + '">' +
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
            '<div class="col-xs-12 field-group">' +
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
            '<label for="bgimg_' + bpid + '">Breakpoint <b class="bpName">' + name + '</b> image <span class="help1 glyphicon glyphicon-question-sign" data-help="desktop" aria-hidden="true"></span>:</label>' +
            '</div>' +

            '<div class="col-xs-3 input-group1">' +
            '<span class="input-group-addon1" id="img2label">Local</span> <input id="bgimg_' + bpid + '" class="bgimgaddress form-control1" type="text" name="bg_' + bpid + '" placeholder="' + globals.bgDesktopPlaceholder + '">' +
            '</div>' +

            '<div class="col-xs-3 error" hidden>Image not found</div>' +
            '</div>' +


            '<div class="row" data-bp="bgdimensions">' +

            '<div class="col-xs-3">' +

            '<label for="width_' + bpid + '">Width for <b class="bpName">' + name + '</b> image <span class="help1 glyphicon glyphicon-question-sign" data-help="width" aria-hidden="true"></span>:</label>' +
            '</div>' +

            '<div class="col-xs-2 field-unit">' +
            '<input id="width_' + bpid + '" name="width" type="number" placeholder="0" maxlength="3" size="3" style="width:100%;">' +
            '<span>px</span></div>' +

            '<div class="col-xs-3">' +
            '<label for="height_' + bpid + '">Height for <b class="bpName">' + name + '</b> image <span class="help1 glyphicon glyphicon-question-sign" data-help="height" aria-hidden="true"></span>:</label>' +
            '</div>' +

            '<div class="col-xs-2 field-unit">' +
            '<input id="height_' + bpid + '" name="height" type="number" placeholder="0" maxlength="3" size="3" style="width:100%;">' +
            '<span>px</span></div>' +
            '</div>' +


            '<div class="row" data-bp="bgpos">' +

            '<div class="col-xs-3">' +

            '<label for="x_' + bpid + '">Horizontal position for <b class="bpName">' + name + '</b> image <span class="help1 glyphicon glyphicon-question-sign" data-help="xpos" aria-hidden="true"></span>:</label>' +
            '</div>' +

            '<div class="col-xs-2 field-unit">' +
            '<input id="x_' + bpid + '" name="x" type="number" placeholder="0" maxlength="3" size="3" style="width:100%;">' +
            '<span>%</span></div>' +

            '<div class="col-xs-3">' +
            '<label for="y_' + bpid + '">Vertical position for <b class="bpName">' + name + '</b> image <span class="help1 glyphicon glyphicon-question-sign" data-help="ypos" aria-hidden="true"></span>:</label>' +
            '</div>' +

            '<div class="col-xs-2 field-unit">' +
            '<input id="y_' + bpid + '" name="y" type="number" placeholder="0" maxlength="3" size="3" style="width:100%;">' +
            '<span>%</span></div>' +
            '</div>' +

            '</div>' +
            '</div>';

    return html;
}

function importjsonForm() {
    var html = '<div class="row">' +
        '<div class="col-xs-12">' +
        '<p>Paste the JSON into the Textarea below. Then, click <b>Submit JSON</b>.</p>' +
        '<textarea id="pastedjson"></textarea>' +
        '</div>' +
        '</div>' +
        '<div class="row">' +
        '<div class="col-xs-12" style="text-align:right;">' +
        '<button id="UpdateJSON" type="button" name="UpdateJSON">Submit JSON</button>' +
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
        cursor: 'pointer',
        css: {
            breakpoints: {},
            bgColor: {
                r: 184,
                g: 117,
                b: 174
            }
        },
        bpjson: {},
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
        thisBannerBaseBehaviors: function () {
            bannerBaseBehaviors(this);
        },
        onClickBehavior: {
            name: 'doNothing',
            modal: {
                html: function (id, title, body, footer) {
                    var modal = '<div id="modal_' + id + '" class="modal fade" tabindex="-1" role="dialog">' +
                        '<div class="modal-dialog" role="document">' +
                        '<div class="modal-content">' +
                        '<div class="modal-header">' +
                        '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
                        '<h4 class="modal-title">' + title + '</h4>' +
                        '</div>' +
                        '<div class="modal-body">' + body +
                        '</div>' +
                        '<div class="modal-footer" style="text-align:left;">' + footer +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>';

                    return modal;
                }
            },
            link: '#',
            anchor: '#'
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
        thisBannerBgSettingsExtended: function (id, bpid) {
            // Add new breakpoint tab
            $('[id="content_' + id + '"] [data-domain="breakpoints"] .tabs').append(breakpointTab(bpid));

            // Add new breakpoint textarea
            $('[id="content_' + id + '"] [data-domain="breakpoints"] .inputs > div').append(breakpointInput(1, bpid));

            // Add new breakpoint section to banner preview
            $('.render [id="banner_' + id + '"]').append(bannerPreviewBreakpoint(id, bpid));

            // Add new breakpoint section to background image fields
            $('[id="content_' + id + '"] .backgroundimage > .col-xs-12').append(breakpointBackgroundImg('', bpid));

            // Remove showing class from all breakpoint tabs
            $('[id="content_' + id + '"] [data-domain="breakpoints"] .tabs div button, [id="content_' + id + '"] [data-domain="breakpoints"] .inputs div, [id="content_' + id + '"] .backgroundimage [data-bp*="bg_"]').removeClass('showing');

            // Assign showing class to this new breakpoint tab
            $('[id="content_' + id + '"] [data-domain="breakpoints"] .tabs [name="bpid_' + bpid + '"] .breakpoint-tab, [id="content_' + id + '"] [data-domain="breakpoints"] .inputs [name="bpid_' + bpid + '"], [id="content_' + id + '"] .backgroundimage [data-bp="bg_' + bpid + '"]').addClass('showing');

            // Init background image source to local
            $('[id="content_' + id + '"] [data-bp="bg_' + bpid + '"] input:radio[value="local"]').prop('checked', true);

            // Init ckeditor on the initial textarea of this new breakpoint tab
            $('textarea.editor').ckeditor();

        },
        thisBannerExtendedBehaviors: function (id, bpid) {
            $('.backgroundimage .row.showing[data-bp="bg_' + bpid + '"] input[name="lorr1_' + bpid + '"]', '[id="props_' + id + '"]').on('change', function () {



                globals.campaign.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid].background.state = $('input[name="lorr1_' + bpid + '"]:checked').val();



                if (globals.campaign.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid].background.state == 'local') {

                    $('.backgroundimage .row.showing[data-bp="bg_' + bpid + '"] input.form-control1', '[id="props_' + id + '"]').removeClass('error');

                    $('[data-bp="bg_' + bpid + '"] input.form-control1').prop('disabled', false);

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

                } else if (globals.campaign.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid].background.state == 'remote') {

                    if (globals.campaign.selectBrand == '') {

                        $('[data-bp="bg_' + bpid + '"] input.form-control1').prop('disabled', true);

                        $('.backgroundimage .row.showing[data-bp="bg_' + bpid + '"] span.input-group-addon1', '[id="props_' + id + '"]').text('Remote');

                        $('.backgroundimage .row.showing[data-bp="bg_' + bpid + '"] input.form-control1', '[id="props_' + id + '"]').attr('placeholder', 'Select a brand');

                    } else {
                        $('[data-bp="bg_' + bpid + '"] input.form-control1').removeClass('error');
                        $('[data-bp="bg_' + bpid + '"] input.form-control1').prop('disabled', false);

                        $('[data-bp="bg_' + bpid + '"] input.form-control1').text(globals.campaign.brands[globals.campaign.selectBrand].baseUrl);

                        $('input[name*="bg"]').each(function () {
                            var curr = $(this).val();
                            if (curr !== '') {
                                $(this).attr('data-local', curr);
                            }

                            if ($(this).data('remote')) {
                                $(this).val($(this).data('remote'));
                            }
                            $(this).val('').attr('placeholder', 'Enter Filename...');

                            $('[data-bp="bg_' + bpid + '"] span.input-group-addon1').text('/images/evergage/' + globals.campaign.selectBrand + '/');
                        });
                    }

                }

                $(".input-group1").removeClass("found notfound");
                $(".input-group1").next('.error').prop('hidden', true);

            });

            // imgaddress
            $('.backgroundimage .row.showing[data-bp="bg_' + bpid + '"] .bgimgaddress').on({
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

                }
            });

            $('.backgroundimage .row.showing [data-bp="bgdimensions"] input,.backgroundimage .row.showing [data-bp="bgpos"] input', '[id="props_' + id + '"]').on('focusout', function () {
                var bpid = $(this).attr('id').substr(-5),
                    id = $(this).parents('[id*="content_"]').attr('id').substr(-4);

                switch ($(this).attr('name')) {
                    case 'width':
                        globals.campaign.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid].background.bgwidth = $(this).val();
                        break;
                    case 'height':
                        globals.campaign.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid].background.bgheight = $(this).val();
                        break;
                    case 'x':
                        globals.campaign.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid].background.positionx = $(this).val();
                        break;
                    case 'y':
                        globals.campaign.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid].background.positiony = $(this).val();
                        break;
                    default:
                        break;
                }

                var embedstyles = $('style#banners');

                $(embedstyles).html('');
                $(embedstyles).append(globals.buildStyles(globals.campaign.bannerObjects));

            });

            $('[id="clickbehavior_' + this.id + '"] #updateOnClick').on('click', function () {
                assignOnClickBehavior($(this).parents('[id*="clickbehavior_"]').attr('id').substr(-4));
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
            $('.row .render').append(bannerPreview(this));

            // Since this is the first of all, hide all remove buttons
            $('[id="props_' + this.id + '"] .subtract-button, [id="tabs_' + this.id + '"] .subtract-button').prop('hidden', true);

            // Initial CKEditor on the first designated text area
            $('textarea.editor').ckeditor();


            this.thisBannerBgSettingsExtended(this.id, bpid);

            this.thisBannerExtendedBehaviors(this.id, bpid);

            this.thisBannerBaseBehaviors(this);

            globals.campaign.bannerObjects['banner_' + this.id].bpjson[bpid] = {};

            globals.campaign.bannerObjects['banner_' + this.id].bpjson[bpid][1] = { 'html': '' };
        }
    }

    return obj;
}