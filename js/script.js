var globals = {
    bgDesktopPlaceholder: 'Demo-image-962.png',
    bgMobilePlaceholder: 'Demo-image-575.png',
    maxBannerNumber: 4,
    minBannerNumber: 1,
    simulation: {
        width: 768,
        height: 72
    },
    campaign: {
        get getname() {
            return this.name == '' ? 'Campaign' : this.name;
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
        evergagehtml: '',
        evergagecss: '',
        evergagejs: '',
        bannerObjects: {}
    },
    get selectBrandPath() {
        var path = this.campaign.selectBrand == '' ? 'Choose Brand <span class="required">*</span>' : this.campaign.brands[this.campaign.selectBrand].baseUrl;
        return path;
    },
    buildScript: function () {
        var html = '$(\'${message.cssSelector}\').parents(\'.container\').addClass(\'evergage-campaign-banners\');' +
            '$(document).on(\'hidden.bs.modal\', \'[id*="modal_"]\', function () {$(this).remove();});' +
            '$(\'head\').append(\'<style id="evergageCampaignBanners">.container.evergage-campaign-banners{display:flex; flex-direction: row;}@media all and (max-width:' + this.campaign.stackbreakpoint + 'px){.container.evergage-campaign-banners{flex-direction: column;}}}</style>\');';

        return html;
    },
    buildStyles: function (elObject) {
        var stackbreakpoint = this.campaign.stackbreakpoint = '' || this.campaign.stackbreakpoint < 1 ? '575' : this.campaign.stackbreakpoint,
            fontSizeAdjustStyles = '',
            styles = '@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap");${message.cssSelector} {background-color: rgb(250, 250, 250);width: 100%!important;font-family: "Roboto Condensed", sans-serif;border-top:solid white 2px;border-bottom:solid white 2px;}.render{display:flex; flex-direction: row;}@media all and (max-width:' + stackbreakpoint + 'px){.render{flex-direction: column;}}.banner{width:100%;}';
        for (x in Object.values(elObject)) {
            var id = Object.values(elObject)[x]['id'],
                hex = Object.values(elObject)[x]['hex'],
                cursor = Object.values(elObject)[x]['cursor'],
                breakpoints = Object.values(elObject)[x]['css']['breakpoints'];

            if (typeof Object.values(elObject)[x]['css']['fontSizeAdjustStyles'] == 'undefined') {
                fontSizeAdjustStyles += '';
            } else {
                fontSizeAdjustStyles += Object.values(elObject)[x]['css']['fontSizeAdjustStyles'];
            }

            for (y in Object.values(breakpoints)) {

                // max will store maxwidth media query defined by admin for this specific breakpoint
                var bpid = Object.keys(breakpoints)[y],
                    max = Number(Object.values(breakpoints)[y]['maxwidth']) == 0 ? '' : ' and (max-width:' + Object.values(breakpoints)[y]['maxwidth'] + 'px)',

                    // min will store minwidth media query defined by admin for this specific breakpoint
                    min = Number(Object.values(breakpoints)[y]['minwidth']) == 0 ? '' : ' and (min-width:' + Object.values(breakpoints)[y]['minwidth'] + 'px)',

                    // height will store height value defined by admin for this specific breakpoint
                    height = Object.values(breakpoints)[y]['height'],

                    // bgimg will store background image value defined by admin for this specific breakpoint
                    bgImg = Object.values(breakpoints)[y]['background']['img'],

                    // bgposition will store background-position value defined by default 
                    bgPosition = Object.values(breakpoints)[y]['background']['position'],

                    // bgPositionX will store maxwidth value defined by admin for this specific breakpoint
                    bgPositionX = Number(Object.values(breakpoints)[y]['background']['positionx']) == 0 || Object.values(breakpoints)[y]['background']['positionx'] == 'auto' ? 'auto' : Object.values(breakpoints)[y]['background']['positionx'] + '%',

                    // bgPositionY will store y axis value defined by admin for this specific breakpoint
                    bgPositionY = Number(Object.values(breakpoints)[y]['background']['positiony']) == 0 || Object.values(breakpoints)[y]['background']['positiony'] == 'auto' ? 'auto' : Object.values(breakpoints)[y]['background']['positiony'] + '%',

                    // bgwidth will store the background image width value defined by admin for this specific breakpoint
                    bgwidth = Number(Object.values(breakpoints)[y]['background']['bgwidth']) == 0 || Object.values(breakpoints)[y]['background']['bgwidth'] == 'auto' ? 'auto' : Object.values(breakpoints)[y]['background']['bgwidth'] + '%',

                    // bgheight will store the background image width value defined by admin for this specific breakpoint
                    bgheight = Number(Object.values(breakpoints)[y]['background']['bgheight']) == 0 || Object.values(breakpoints)[y]['background']['bgheight'] == 'auto' ? 'auto' : Object.values(breakpoints)[y]['background']['bgheight'] + '%',

                    // Store media query definitions built from vars above
                    media = Number(Object.values(breakpoints)[y]['minwidth']) == 0 && Number(Object.values(breakpoints)[y]['maxwidth']) == 0

                        ?

                        // If minwidth & maxwidth both do not exist, exlude media queries altogether
                        '[id="banner_' + id + '"] [data-bp="' + bpid + '"]' +
                        '{' +
                        'cursor: ' + cursor + ';' +
                        'display:flex;' +
                        'flex-direction: row;' +
                        'justify-content: space-evenly;' +
                        'flex-wrap:wrap;' +
                        'width:100%;' +
                        'align-items: center;' +
                        'height:auto;' +
                        'min-height:' + height + 'px;' +
                        'background-color:' + hex + ';' +
                        'background-image:url("' + bgImg + '");' +
                        'background-position:' + bgPosition + ';' +
                        'background-position-x:' + bgPositionX + ';' +
                        'background-position-y:' + bgPositionY + ';' +
                        'background-repeat:no-repeat;' +
                        'background-size:' + bgwidth + ' ' + bgheight + ';' +
                        '}'

                        :

                        // If either minwidth or maxwidth exist, include the media query
                        '[id="banner_' + id + '"],[id="banner_' + id + '"] [data-bp="' + bpid + '"]{display:none;}' +
                        '@media screen' +
                        min +
                        max +
                        '{' +
                        '[id="banner_' + id + '"]{display:block!important;}' +
                        '[id="banner_' + id + '"] [data-bp="' + bpid + '"]{' +
                        'display:flex!important;' +
                        'flex-direction: row;' +
                        'justify-content: space-evenly;' +
                        'flex-wrap:wrap;width:100%;' +
                        'align-items: center;' +
                        'height:auto;' +
                        'min-height:' + height + 'px;' +
                        'background-color:' + hex + ';' +
                        'background-image:url("' + bgImg + '");' +
                        'background-position:' + bgPosition + ';' +
                        'background-position-x:' + bgPositionX + ';' +
                        'background-position-y:' + bgPositionY + ';' +
                        'background-repeat:no-repeat;' +
                        'background-size:' + bgwidth + ' ' + bgheight + ';' +
                        '}' +
                        '}',
                    textgroups,
                    textgroupsstyles = '';

                if (typeof Object.values(breakpoints)[y]['textgroups'] === 'undefined') {
                    textgroupsstyles = '';
                } else {
                    textgroups = Object.values(breakpoints)[y]['textgroups'];

                    for (q in Object.values(textgroups)) {

                        // console.log(Object.values(textgroups));
                        // console.log(Object.values(textgroups)[q]);

                        var maxwidth = Object.values(textgroups)[q]['maxwidth'] == '' ? '' : 'max-width:' + Object.values(textgroups)[q]['maxwidth'] + '%;';

                        textgroupsstyles += '[id="banner_' + id + '"] [data-bp="' + bpid + '"] .text-group[data-output-index="' + Object.values(textgroups)[q].index + '"]{display:block;' + maxwidth + '}';
                    };

                    textgroupsstyles += '[id="banner_' + id + '"] [data-bp="' + bpid + '"] .text-group{max-width:' + 100 / Number(Object.values(breakpoints)[y]['textgroups'].length) + '%;}';
                }

                //console.log(textgroupsstyles);
                styles += textgroupsstyles;
                styles += media;
            }
        };
        styles += '[id*="modal_"]{' +
            'padding-right:0px!important;' +
            '}' +
            '[id*="modal_"] p' +
            '{' +
            'padding:0;margin:0;' +
            '}' +
            '[id*="modal_"] .modal-dialog' +
            '{' +
            'width:600px;' +
            'margin:30px auto;' +
            'position:relative;' +
            '}' +
            '[id*="modal_"] .modal-dialog .modal-body' +
            '{' +
            'padding-top:15px;' +
            '}' +
            '@media all and (max-width:' + stackbreakpoint + 'px)' +
            '{' +
            '.modal-dialog' +
            '{' +
            'width:auto!important;' +
            '}' +
            '}' +
            'span.gutter' +
            '{' +
            'padding:0 2px 0 0;' +
            '}' +
            '@media all and (max-width:' + stackbreakpoint + 'px)' +
            '{' +
            'span.gutter' +
            '{' +
            'padding:0 0 2px 0;' +
            '}' +
            '}' +
            'span.gutter:last-of-type' +
            '{' +
            'display:none;' +
            '}' +
            fontSizeAdjustStyles;
        return styles;
    }
},
    originalLocation;

$(document).ready(function () {

    $(document).on('hidden.bs.modal', '#msgBox.modal', function () {
        //console.log('document.ready modal has been removed');
        $(this).remove();

    });

    $("button[name='newcampaign'], button[name='importjson']").on("click", function () {

        // Store name of init button clicked
        var type = $(this).attr('name');

        // If the value of the init button name is 'newcampaign'
        if (type == 'newcampaign') {

            // Create var to store randomized ID value
            // Create var to store new bannerObj initialized with idInit
            var idInit = '',
                bannerInit;

            // Remove all previously existing sections (renders,global props, banner props)
            $('#campaign .col-xs-12').html('');

            // Remove all banner objects
            globals.campaign.bannerObjects = {};

            // Reset the campaign name to default 'campaign'
            globals.campaign.name = 'campaign';

            // Reset the selected brand to empty value to enforce selection when banner background image and/or banner link are required
            globals.campaign.selectBrand = '';

            // Reset the pixel value of the screen width at which the banners will either stack in column or span in row
            globals.campaign.stackbreakpoint = 575;

            // Create new banner object
            idInit = randomId(1000, 9999);
            bannerInit = new bannerObj(idInit);

            // Add new banner object to global banner objects container
            globals.campaign.bannerObjects['banner_' + idInit] = bannerInit;

            // Insert starter sections
            $('#campaign .col-xs-12').append(sections());

            // Run the new banner object render function
            for (banner in globals.campaign.bannerObjects) {
                globals.campaign.bannerObjects[banner].render();
            }

            resetShowing(['[id*="props_"]', '.banner-tab', '.render > div', '.height .col-xs-12.forms .row']);



            // Launch core behaviors. These behaviors will affect all banners.
            coreBehaviors();

            simulate();

            updateStyles(idInit);

            originalLocation = $('#ifr')[0].contentWindow.location.origin;

        } else {

            // If the value of the init button name is 'importjson'
            // Open modal dialog in which admin will paste the JSON content
            msgBox1(importjsonForm(), 'Import JSON');

            // When the admin clicks on 'Submit JSON' button...
            $('button#UpdateJSON').on('click', function () {

                // Parse the content to JS object
                globals.campaign = JSON.parse($('textarea#pastedjson').val());

                // Remove all previously existing sections (renders,global props, banner props)
                $('#campaign .col-xs-12').html('');

                // Insert starter sections
                $('#campaign .col-xs-12').append(sections());

                // Hide the modal modal dialog, which will, in effect, delete the dialog modal
                $('#msgBox').modal('hide');

                // Run the JS object through jsonRender function to reconstruct saved settings
                jsonRender(globals.campaign);

                // All export functions enabled
                $('button[name="exportjson"]').prop('disabled', false);
                $('button[name="exporthtml"]').prop('disabled', false);
                $('button[name="exportcss"]').prop('disabled', false);
                $('button[name="exportjs"]').prop('disabled', false);

                originalLocation = $('#ifr')[0].contentWindow.location.origin;

            });


        }

    });

});

function simulate() {
    //$('#ifr')[0].contentWindow.location.reload();
    var textareaValue = $('.render').html(),
        textAreaStyles = $('style#banners').html(),
        d = document.getElementById('ifr');
    d = d.contentDocument.document || d.contentDocument;

    //var render = document.querySelectorAll('.render')[0];
    $('#simulateParent').css('height', 70 + $('iframe#ifr')[0].clientHeight + 'px');

    d.open();
    d.write(
        '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional //EN" "http://www.w3.org/TR/html4/loose.dtd">' +
        '<html><head><title>THE SIMULATORRRR</title><meta content="width=device-width,initial-scale=1,maximum-scale=1"name=viewport><script crossorigin=anonymous integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="src=https://code.jquery.com/jquery-3.3.1.min.js></script><link href=https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css rel=stylesheet crossorigin=anonymous integrity=sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u><script crossorigin=anonymous integrity=sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa src=https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js></script><link href=css/sectionoffer.css rel=stylesheet>' +
        '<\/head>' +
        '<body>' +
        '<div class="container">' +
        // '<div class="row">' +
        // '<div class="col-xs-12" style="display:table;">' +
        // '<\/div>' +
        // '<\/div>' +
        '<div class="row">' +
        '<div class="col-xs-12">' +
        '<style id="banners">' + textAreaStyles + '</style>' +
        '<div class="render">' + textareaValue + '<\/div>' +
        '<\/div>' +
        '<\/div>' +
        '<\/div>' +
        '<\/body>' +
        '<\/html>'
    );
}

function simulateCheck() {
    var series = $('[style="height:0px;overflow:hidden;"] .render [data-bp*="bpid_"]'),
        breakpointHeight,
        breakpointHeightRegx = /[0-9]{1,}/,
        breakpointTexts,
        breakpointTextHeight;

    $.each(series, function (i) {
        breakpointHeight = Number(breakpointHeightRegx.exec($(series[i]).css('min-height'))[0]);
        breakpointTexts = $('span', series[i]).children();

        $.each(breakpointTexts, function (j) {
            breakpointTextHeight = $(breakpointTexts[j])[0].clientHeight;

            if (breakpointTextHeight > breakpointHeight) {

                // console.log('breakpointTextHeight\n' + $(breakpointTexts[j])[0].outerHTML + '\n' + breakpointTextHeight + 'px\n===\n>\n===\n' + 'breakpointHeight\n' + $(series[i])[0].outerHTML + '\n' + breakpointHeight + 'px');

                $(breakpointTexts[j]).addClass('error');

            } else {

                // console.log('breakpointTextHeight\n' + $(breakpointTexts[j])[0].outerHTML + '\n' + breakpointTextHeight + 'px\n===\n<\n===\n' + 'breakpointHeight\n' + $(series[i])[0].outerHTML + '\n' + breakpointHeight + 'px');

                $(breakpointTexts[j]).removeAttr('class');

            }

        });
    });

}

function jsonRender(obj) {

    // Populate campaign name fields using value from JSON object
    $('input#campaignName').val(obj.name);

    // Populate brand selector drop-down using value from JSON object
    $('select#brands').val(obj.selectBrand);

    // Populate stacking breakpoing field using value from JSON object
    $('input#stackingBp').val(obj.stackingBp);

    // Populate banners' embedded stylesheet using value from JSON object
    //$('.row .render').append('<style id="banners">' + obj.evergagecss + '</style>');

    // Populate rendering container using value from JSON object
    $('style#banners,[data-domain="production"]').html('');
    $('style#banners').append(obj.evergagecss);
    $('[data-domain="production"]').append(obj.evergagehtml);


    // Populate global attributes fields using value from JSON object
    $('#globalProperties > legend > h2 > span.txtPlaceholder').text(obj.name + ' ');

    // For every banner in the campaign...
    for (banner in obj.bannerObjects) {
        var id = banner.substr(-4),
            bptabs;

        // Populate the banner tabs container with output HTML using the banner object as the function argument requires banner id and txtplaceholder props
        $('[id="bannerTabs"] span.dynamic .row-fluid.flex-it').append(bannerTab(obj.bannerObjects[banner]));

        // Populate the banner properties container with output HTML using the banner object as the function argument requires banner id
        $('#properties.row > .dynamic').append(bannerCreatorForm(obj.bannerObjects[banner]));

        // Populate the banner global properties header value of banner txtplaceholder prop
        $('span.txtPlaceholder', '[id="props_' + id + '"]').text(obj.bannerObjects[banner].txtPlaceholder + ' ');

        // Set the value of the onClickbehavior drop down to the value of the banner onclickbehavior prop
        $('select#onClickBehavior_' + id).val(obj.bannerObjects[banner].onClickBehavior.name);

        // Set the onclickbehavior section to visible
        $('#' + obj.bannerObjects[banner].onClickBehavior.name + '_' + id).addClass('showing');

        // Set the r field to the valuse of the banner r prop
        $('[name="r"]', '[id="props_' + id + '"]').attr('placeholder', obj.bannerObjects[banner].css.bgColor.r);

        // Set the b field to the valuse of the banner b prop
        $('[name="b"]', '[id="props_' + id + '"]').attr('placeholder', obj.bannerObjects[banner].css.bgColor.b);

        // Set the g field to the valuse of the banner g prop
        $('[name="g"]', '[id="props_' + id + '"]').attr('placeholder', obj.bannerObjects[banner].css.bgColor.g);

        // For every banner object in the banners object, if onclickbehavior has value make the update button visible
        if ($('select#onClickBehavior_' + id).val()) {
            $('[id="clickbehavior_' + id + '"] [id*="updateOnClick_"]').css('display', 'block');
        }

        // Create thisBannerExtendedBehaviors method for this banner
        obj.bannerObjects[banner]['thisBannerBgSettingsExtended'] = function (id, bpid) {
            return bannerBgSettingsExtended(id, bpid);
        }

        // Create thisBannerExtendedBehaviors method for this banner
        obj.bannerObjects[banner]['thisBannerExtendedBehaviors'] = function (id, bpid) {
            return bannerExtendedBehaviors(id, bpid);
        }

        // Create thisBannerBaseBehaviors method for this banner
        obj.bannerObjects[banner]['thisBannerBaseBehaviors'] = function () {
            return bannerBaseBehaviors(this);
        }

        obj.bannerObjects[banner]['bp'] = function (number) {
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
                minwidth: 0,
                maxwidth: 0,
                height: 56
            };
        }

        obj.bannerObjects[banner]['onClickBehavior'] = {
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
        }

        // For every breakpoint in the banners object...
        for (breakpoint in obj.bannerObjects[banner].bpjson) {

            var bpid = breakpoint,
                name = obj.bannerObjects[banner].css.breakpoints['bpid_' + breakpoint].name,
                minwidth = obj.bannerObjects[banner].css.breakpoints['bpid_' + breakpoint].minwidth,
                maxwidth = obj.bannerObjects[banner].css.breakpoints['bpid_' + breakpoint].maxwidth,
                height = obj.bannerObjects[banner].css.breakpoints['bpid_' + breakpoint].height;

            // Populate the breakpoint tabs container with output HTML as the function argument requires breakpoint id and breakpoint name
            $('[data-domain="breakpoints"] > .col-xs-12 > .row.flex-it.tabs', '[id="props_' + id + '"]').append(breakpointTab(bpid, name));

            // Populate the breakpoint drop down with HTML requiring 'name', 'bpid', 'maxwidth', 'minwidth' breakpoint props
            if (minwidth == 0 && maxwidth == 0) {
                $('[data-bp="bpid_' + bpid + '"] button[name="copyTab"]', '[id="props_' + id + '"]').html('<h5 style="margin-top:0;margin-bottom:0;">' +
                    name +
                    '</h5>' +
                    '<span data-toggle="collapse" href="#dl_' + bpid + '" role="button" aria-expanded="false" aria-controls="collapseBpProps_' + bpid + '" class="glyphicon"></span>' +
                    '<dl id="dl_' + bpid + '" class="collapse">' +
                    '<dd><span style="font-weight:400;font-size:smaller;">height:</span> ' +
                    height + 'px</span></dd>' +
                    '</dl>'
                );
            } else if (minwidth == 0) {
                $('[data-bp="bpid_' + bpid + '"] button[name="copyTab"]', '[id="props_' + id + '"]').html('<h5 style="margin-top:0;margin-bottom:0;">' +
                    name +
                    '</h5>' +
                    '<span data-toggle="collapse" href="#dl_' + bpid + '" role="button" aria-expanded="false" aria-controls="collapseBpProps_' + bpid + '" class="glyphicon"></span>' +
                    '<dl id="dl_' + bpid + '" class="collapse">' +
                    '<dd><span style="font-weight:400;font-size:smaller;">maxwidth:</span> ' +
                    maxwidth + 'px</span></dd>' +
                    '<dd><span style="font-weight:400;font-size:smaller;">height:</span> ' +
                    height + 'px</span></dd>' +
                    '</dl>'
                );
            } else if (maxwidth == 0) {
                $('[data-bp="bpid_' + bpid + '"] button[name="copyTab"]', '[id="props_' + id + '"]').html('<h5 style="margin-top:0;margin-bottom:0;">' +
                    name +
                    '</h5>' +
                    '<span data-toggle="collapse" href="#dl_' + bpid + '" role="button" aria-expanded="false" aria-controls="collapseBpProps_' + bpid + '" class="glyphicon"></span>' +
                    '<dl id="dl_' + bpid + '" class="collapse">' +
                    '<dd><span style="font-weight:400;font-size:smaller;">minwidth:</span> ' +
                    minwidth + 'px</span></dd>' +
                    '<dd><span style="font-weight:400;font-size:smaller;">height:</span> ' +
                    height + 'px</span></dd>' +
                    '</dl>'
                );
            } else {
                $('[data-bp="bpid_' + bpid + '"] button[name="copyTab"]', '[id="props_' + id + '"]').html('<h5 style="margin-top:0;margin-bottom:0;">' +
                    name +
                    '</h5>' +
                    '<span data-toggle="collapse" href="#dl_' + bpid + '" role="button" aria-expanded="false" aria-controls="collapseBpProps_' + bpid + '" class="glyphicon"></span>' +
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

            // Add breakpoint background image form
            $('.row.backgroundimage > .col-xs-12', '[id="props_' + id + '"]').append(breakpointBackgroundImg(bpid, id));

            // Add new breakpoint section to background height fields
            $('[id="content_' + id + '"] .height .col-xs-12.forms').append(breakpointHeight(id, bpid));

            // Add breakpoint textgroup container
            $('.row.inputs > .col-xs-12', '[id="props_' + id + '"]').append('<div name="bpid_' + bpid + '" data-domain="inputs" class="row input">' +
                '</div>');

            // Init breakpoint background image source to local status
            $('[id="content_' + id + '"] [data-bp="bg_' + bpid + '"] input:radio[value="local"]').prop('checked', true);

            // Bind thisBannerExtendedBehaviors to this breakpoint
            obj.bannerObjects[banner].thisBannerExtendedBehaviors(id, bpid);

            // For every text group in this breakpoint...
            for (textgroups in obj.bannerObjects[banner].bpjson[breakpoint]) {

                // Insert a CK Editor textarea
                $('.row.inputs [name="bpid_' + bpid + '"]', '[id="props_' + id + '"]').append('<span data-input-index="' + (Number(textgroups) + 1) + '">' +
                    '<span class="controls-add-subtract">' +
                    '<button type="button" class="subtract-button" onClick="removeThis(this)" style="color:red;">x</button>' +
                    '<button type="button" class="add-button" onClick="add(this)" style="color:green;">+</button>' +
                    '</span>' +
                    '<span class="editablecontainer">' +
                    '<textarea id="ckeditor_' + (Number(textgroups) + 1) + '" class="editor"></textarea>' +
                    '</span>' +
                    '</span>');

            }

        }

        // Bind thisBannerBaseBehaviors to this banner
        obj.bannerObjects[banner].thisBannerBaseBehaviors(obj.bannerObjects[banner]);

        resetShowing(['.render .banner', '[id="props_' + id + '"] [data-domain="breakpoints"] > .col-xs-12 > .row.flex-it.tabs button.breakpoint-tab', '[id="props_' + id + '"] .row.backgroundimage > .col-xs-12 > [data-bp]', '[id="props_' + id + '"] .row.inputs [name="bpid_' + bpid + '"]']);

        // Store the series of breakpoint subtract buttons
        bptabs = $('[data-domain="breakpoints"] .subtract-button', '[id="content_' + id + '"]');

        // If quantity of breakpoint subtract buttons is greater than 1...
        if (bptabs.length > 1) {
            // Make the subtract button visible
            $('[data-domain="breakpoints"] .subtract-button', '[id="content_' + id + '"]').prop('hidden', false);
        } else {
            // If not, make the subtract button hidden
            $('[data-domain="breakpoints"] .subtract-button', '[id="content_' + id + '"]').prop('hidden', true);
        }

    }

    resetShowing(['[id*="props_"]', '[id*="tabs_"] .banner-tab']);

    // Initial CKEditor on the first designated text area
    $('textarea.editor').ckeditor();

    // Launch core behaviors. These behaviors will affect all banners.
    coreBehaviors();

    simulate();

}

function coreBehaviors() {

    $('#simulateWidthHeightSettings').on('click', function () {

        globals.simulation.width = $('#simulateWidth').val() == '' ? globals.simulation.width : $('#simulateWidth').val();
        globals.simulation.height = $('#simulateHeight').val() == '' ? globals.simulation.height : $('#simulateHeight').val();

        $('#ifr').css('width', globals.simulation.width + 'px');
        $('#ifr').css('height', globals.simulation.height + 'px');

        $('#simulateParent').css('height', 70 + $('iframe#ifr')[0].clientHeight + 'px');

        // console.log(Number($('#simulateWidth').val()));
        // console.log(Number(globals.campaign.stackbreakpoint));
        // console.log($('#ifr').height());

        // if (Number($('#simulateWidth').val()) < Number(globals.campaign.stackbreakpoint)) {
        //     $('#simulateParent').css('height', $('#ifr').height());
        //     console.log($('.render').css('flex-direction'));
        // } else {
        //     console.log($('.render').css('flex-direction'));
        // }
    });

    // When 'Update Campaign Name' is clicked, update campaign object and Global Attributes label
    $('button#campaignNameUpdate').on('click', function () {
        globals.campaign.name = ($('input#campaignName').val());
        $('#globalProperties > legend > h2 > span.globalTxtPlaceholder').text(globals.campaign.getname + ' ');
        console.log(globals);
    });

    // When brand selected/changed, update all address fields
    $('select[name="brands"]').on('change', function () {

        // Update selected brand in campaign object
        globals.campaign.selectBrand = $(':selected', this).val();

        // Trigger update in ALL background image forms in remote status to enable/disable
        $('input[name*="lorr1_"]').trigger('change');

        // Trigger update in ALL banner click behavior forms to enable/disable
        $('select[name="onClickBehavior"]').trigger('change');

    });

    // When embedded styles have been generated, enable export buttons
    $('body').on('DOMSubtreeModified', 'style#banners', function () {

        $('button[name="exportjson"]').prop('disabled', false);
        $('button[name="exporthtml"]').prop('disabled', false);
        $('button[name="exportcss"]').prop('disabled', false);
        $('button[name="exportjs"]').prop('disabled', false);
        //https://stackoverflow.com/questions/15657686/jquery-event-detect-changes-to-the-html-text-of-a-div

        simulate();

    });

    $('body').on('DOMSubtreeModified', 'style#banners, .render', function () {

        $('button[name="exportjson"]').prop('disabled', false);
        $('button[name="exporthtml"]').prop('disabled', false);
        $('button[name="exportcss"]').prop('disabled', false);
        $('button[name="exportjs"]').prop('disabled', false);
        //https://stackoverflow.com/questions/15657686/jquery-event-detect-changes-to-the-html-text-of-a-div

        simulate();

    });

    // When enabled, pending which export button is clicked, run it through a function with switch case
    $("button[name*='export']").on("click", function () {
        var type = $(this).attr('name');
        exportCode1(type);
    });

    $('button[name="resetall"]').on('click', function () {

        // Remove banner tabs, banner property forms, embedded styles, rendered banners
        $('#bannerTabs .dynamic .row-fluid.flex-it, #properties .dynamic, style#banners, .render').html('')

        // Reset campaign settings
        $('input#campaignName').val('campaign');
        $('input#campaignName').attr('placeholder', 'campaign');

        // Reset brand settings
        $('select#brands').val('');
        $('select#brands:selected').val('-- select --');

        // Reset labeling
        $('.globalTxtPlaceholder').html('');
        $('.txtPlaceholder').html('');

        // Since embedded styles now removed, disable export buttons
        $('button[name="exportjson"]').prop('disabled', true);
        $('button[name="exporthtml"]').prop('disabled', true);
        $('button[name="exportcss"]').prop('disabled', true);
        $('button[name="exportjs"]').prop('disabled', true);

        // Empty banner objects
        globals.campaign.bannerObjects = {};

        // Create new banner object
        idInit = randomId(1000, 9999);
        bannerInit = new bannerObj(idInit);

        // Add new banner object to global banner objects container
        globals.campaign.bannerObjects['banner_' + idInit] = bannerInit;

        // Run the new banner object render function
        globals.campaign.bannerObjects['banner_' + idInit].render();

        resetShowing(['[id*="props_"]', '.banner-tab', '.render > div']);

    });

    $('button#stackingBpUpdate').on('click', function () {

        // Update to stacking breakpoint triggers update to global object and embedded stylesheet
        globals.campaign.stackbreakpoint = $('input#stackingBp').val();

        // Update media query reference to flex in embedded stylesheet
        updateStyles();

    });

    $('[style="height:0px;overflow:hidden;"] .render').resize(function () {
        console.log('checking');
        simulateCheck();
    });

    console.log('coreBehaviors');
}

function bannerBaseBehaviors(thisBanner) {

    var id = thisBanner.id,
        thisBannerH2;

    // When click behavior selected/changed, display that click behavior form
    $('select[name="onClickBehavior"]', '[id="props_' + id + '"]').on('change', function () {
        console.log('changed');

        displayOnClickBehavior($(':selected', this).val(), id);

    });

    // color events
    $('input[id*="hex_"]', '[id="props_' + id + '"]').on('input', function () {

        var code = $(this).val(),
            id = $(this).attr('id').substr(-4),
            codeRegx = /[0-9A-Fa-f]{6}\b/,
            validCode = codeRegx.exec(code);

        if (code.length > 5) {
            validCode = codeRegx.exec(code);
            if (validCode != null) {
                console.log(validCode);
                thisBanner.hex = '#' + validCode;
                updateStyles(id);
            } else {
                $(this).addClass('error');
            }
        }
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
                    $('[id="props_' + id + '"] .txtPlaceholder').empty();
                    $('[id="props_' + id + '"] .txtPlaceholder').html(thisBanner.txtPlaceholder + " ");
                } else {
                    $(this).text(thisBanner.txtPlaceholder);
                    $('[id="props_' + id + '"] .txtPlaceholder').html(thisBannerH2);
                }
            } else {
                $(this).text(thisBanner.txtPlaceholder);
                $('[id="props_' + id + '"] .txtPlaceholder').html(thisBannerH2);
            }
        }
    });

    // When update button is clicked, pending which one, it will update banner object, rendered HTML, and embedded stylesheet
    $('[name="update"]', '[id="props_' + id + '"]').on('click', function (e) {
        e.preventDefault();

        var buttonId = $(e.target).attr('id');

        //console.log(buttonId);

        if (buttonId.indexOf('textGroups') != -1) {
            var fontSizeAdjustStyles = '';
            //Text groups specific to breakpoint

            // Get all breakpoint instances for this banner
            var allBreakpoints = $('[data-domain="breakpoints"] .inputs [name*="bpid"]', '[id="content_' + id + '"]');

            // For each one of these breakpoint instances...
            for (var q = 0; q < allBreakpoints.length; q++) {

                // Get the bpid of this breakpoint
                // Get all of the textgroup instances of this breakpoint
                var bpid = $(allBreakpoints[q]).attr('name').substr(-5),
                    inputs = $('[data-input-index]', allBreakpoints[q]);

                //console.log(inputs);

                globals.campaign.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid]['textgroups'] = [];

                // For each one of these textgroup instances...
                for (var p = 0; p < inputs.length; p++) {

                    // Remove this textgroup instance's class attribute (error class) assuming it exists
                    $(inputs[p]).removeAttr('class');

                    // Get the index number of this textgroup instance
                    // Create new variable to store children of textgroup output instance
                    var index = $(inputs[p]).data('input-index'),
                        newChildElems;

                    // If textgroup instance does not contain anything...
                    if (!$('textarea.editor', inputs[p]).val()) {


                        $(inputs[p]).addClass('error');

                        return;

                    } else {
                        // If textgroup instance contains anything...


                        // Empty contents of all existing textgroup output instances
                        $('.render [id="banner_' + id + '"] [data-bp="bpid_' + bpid + '"] [data-output-index="' + index + '"]').empty();

                        // Insert into the respective textgroup output instance
                        $('.render [id="banner_' + id + '"] [data-bp="bpid_' + bpid + '"] [data-output-index="' + index + '"]').append($('textarea.editor', inputs[p]).val());

                        // Add an instance object to the parent breakpoint object
                        globals.campaign.bannerObjects['banner_' + id].bpjson[bpid][p] = { 'html': $('textarea.editor', inputs[p]).val() };

                        //console.log($(inputs[p]).data('input-index'));

                        globals.campaign.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid]['textgroups'][$(inputs[p]).data('input-index')];

                        globals.campaign.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid].textgroups[$(inputs[p]).data('input-index')] = {
                            'index': $(inputs[p]).data('input-index'),
                            'maxwidth':
                                $('[data-input-index="' + $(inputs[p]).data('input-index') + '"] input[id="maxWidthInput_' + $(inputs[p]).data('input-index') + '"]').val()
                        };




                        // Get all of the children of respective textgroup output instance
                        newChildElems = $('.render [id="banner_' + id + '"] [data-bp="bpid_' + bpid + '"] [data-output-index="' + index + '"]').children();

                        // For each child of respective textgroup output instance, define styles

                        $.each(newChildElems, function (index, value) {
                            var classes = '';

                            $(this).css({ 'margin': '0', 'padding': '0' });

                            var styleChilds = $('[style*="font-size"]', this);

                            $.each(styleChilds, function (i) {

                                var fontSize = $(styleChilds[i]).css('font-size');

                                classes = 'textgroup_' + id + '_' + bpid + '_' + $(inputs[p]).data('input-index') + '_' + styleChilds[i].nodeName + '_' + i;

                                $(styleChilds[i]).removeAttr('style');

                                $(styleChilds[i]).attr('class', classes);

                                fontSizeAdjustStyles += '.' + classes + '{font-size:' + fontSize + ';font-size: min(' + fontSize + ',10vw);' +
                                    '-webkit-text-size-adjust:99%;' +
                                    '-moz-text-size-adjust:99%;' +
                                    '-ms-text-size-adjust:99%;' +
                                    'text-size-adjust:99%;}';
                            });

                            $('.render [id="banner_' + id + '"] [data-bp]').removeAttr('class');
                        });

                        globals.campaign.bannerObjects['banner_' + id].css.fontSizeAdjustStyles = fontSizeAdjustStyles;

                        updateStyles(id);
                        simulateCheck();
                    }
                }
            }

        } else if (buttonId.indexOf('bpHeight') != -1) {

            var bpid = $('.breakpoint-tab.showing').parents('[data-bp]').data('bp').substr(-5);
            console.log(bpid);

            globals.campaign.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid].height = $('input[id="bpHeight_' + bpid + '"]').val();


            updateStyles(id);
            simulateCheck();
        }

    });

    $('[id*="updateOnClick_"]', '[id="clickbehavior_' + id + '"]').on('click', function () {

        var iframeLocationIsLocal = iframeSetToLocal('ifr');

        if (iframeLocationIsLocal) {
            assignOnClickBehavior($(this).parents('[id*="clickbehavior_"]').attr('id').substr(-4));
        } else {
            simulate();
            assignOnClickBehavior($(this).parents('[id*="clickbehavior_"]').attr('id').substr(-4));
        }

    });

    console.log('thisBannerBaseBehaviors');
}

function bannerBgSettingsExtended(id, bpid) {
    // Add new breakpoint tab
    $('[id="content_' + id + '"] [data-domain="breakpoints"] .tabs').append(breakpointTab(bpid, '|A'));

    // Add new breakpoint textarea
    $('[id="content_' + id + '"] [data-domain="breakpoints"] .inputs > div').append(breakpointInput(1, bpid));

    // Add new breakpoint section to banner preview
    $('.render [id="banner_' + id + '"]').append(bannerPreviewBreakpoint(id, bpid));

    // Add new breakpoint section to background image fields
    $('[id="content_' + id + '"] .backgroundimage > .col-xs-12').append(breakpointBackgroundImg(bpid, id));

    // Add new breakpoint section to background height fields
    $('[id="content_' + id + '"] .height .col-xs-12.forms').append(breakpointHeight(id, bpid));

    // Remove showing class from all breakpoint tabs
    $('[id="content_' + id + '"] [data-domain="breakpoints"] .tabs div button, [id="content_' + id + '"] [data-domain="breakpoints"] .inputs div, [id="content_' + id + '"] .backgroundimage [data-bp*="bg_"]').removeClass('showing');

    // Assign showing class to this new breakpoint tab
    $('[id="content_' + id + '"] [data-domain="breakpoints"] .tabs [name="bpid_' + bpid + '"] .breakpoint-tab, [id="content_' + id + '"] [data-domain="breakpoints"] .inputs [name="bpid_' + bpid + '"], [id="content_' + id + '"] .backgroundimage [data-bp="bg_' + bpid + '"]').addClass('showing');

    // Init background image source to local
    $('[id="content_' + id + '"] [data-bp="bg_' + bpid + '"] input:radio[value="local"]').prop('checked', true);

    // Init banner behavior linkTo pageAnchor to page
    $('[id="linkTo_' + id + '"] input[name="pageAnchor_' + id + '"]:radio[value="page"]').prop('checked', true);

    // Init banner behavior linkTo relativeAbsolute to relative
    $('[id="linkTo_' + id + '"] input[name="relativeAbsolute_' + id + '"]:radio[value="relative"]').prop('checked', true);

    // Init banner behavior linkTo relativeAbsolute to relative
    $('[id="linkTo_' + id + '"] input[name="sameNewTab_' + id + '"]:radio[value="sameTab"]').prop('checked', true);

    // Init ckeditor on the initial textarea of this new breakpoint tab
    $('textarea.editor').ckeditor();

    console.log('bannerBgSettingsExtended');
}

function bannerExtendedBehaviors(id, bpid) {
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

        updateStyles();

    });

    // Interchangeable messaging for help modal
    $("span.help1").on('click', function () {

        var helpMsg = '';
        switch ($(this).data('help')) {
            case 'desktop':
                helpMsg = '<h4>For breakpoints in which the width is <u>above</u> 575px</h4><ul><li><b>Local</b> Place a 962px wide (desktop,tablet) image in the same directory as this HTML file and enter the filename here.</li><li><b>Remote</b> Place a 962px wide (desktop,tablet) image on the "Production" FTP for the brand you are working on and enter the relative path, for example: "E88/test-image.jpg"</li></ul><h4>For breakpoints in which the width is <u>below</u> 575px</h4><ul><li><b>Local</b> Place a 575px wide (mobile) image in the same directory as this HTML file and enter the filename here.</li><li><b>Remote</b> Place a 575px wide (mobile) image on the "Production" FTP for the brand you are working on and enter the relative path, for example: "E88/test-image.jpg"</li></ul>';
                break;
            case 'width':
                helpMsg = 'Enter a number value between the range of 0-100 to fit the image within the breakpoint container. Enter a number value above 100 to scale the image beyond the breakpoint container. To keep dimensions proportional relative to width, set the <b>Height</b> to \'auto\'.';
                break;
            case 'height':
                helpMsg = 'Enter a number value between the range of 0-100 to fit the image within the breakpoint container. Enter a number value above 100 to scale the image beyond the breakpoint container. To keep dimensions proportional relative to height, set the <b>Width</b> to \'auto\'.';
                break;
            case 'xpos':
                helpMsg = 'Enter a number value between the range of 0-100 to position the image within the breakpoint container. Enter a number value above 100 to position the image beyond the breakpoint container. <b>NOTE</b> For positioning to work, make sure the image width is below the width of the breakpoint container.';
                break;
            case 'ypos':
                helpMsg = 'Enter a number value between the range of 0-100 to position the image within the breakpoint container. Enter a number value above 100 to position the image beyond the breakpoint container. <b>NOTE</b> For positioning to work, make sure the image height is below the height of the breakpoint container.';
                break;
            case 'rgb':
                helpMsg = 'Enter a number value between the range of 0-250 for each of the RGB fields.';
                break;
            case 'hex':
                helpMsg = 'Enter the six digit string Hex <u>excluding</u> the hash symbol (#).';
                break;
            case 'required':
                helpMsg = 'Whether this text is required for this offer. Certain text cannot be omitted.';
            default:
                break;
        }

        msgBox1(helpMsg, 'Help');

        $(document).on('hidden.bs.modal', '#msgBox.modal', function () {
            $(this).remove();
        });
    });

    console.log('thisBannerExtendedBehaviors');

}

function resetShowing(series) {
    console.log(series);
    $.each(series, function (index) {

        $(series[index]).removeClass('showing');
        $(series[index]).last().addClass('showing');
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

        updateStyles(banner.id)
    };
    img.onerror = function () {
        $(el).parent().addClass('notfound');
        $(el).parent().next().prop('hidden', false);

        globals.campaign.bannerObjects['banner_' + banner.id].css.breakpoints['bpid_' + bp].background.img = 'none';

        updateStyles(banner.id)
    };

    img.src = imgURL1(el, true);
}

function exportCode1(type) {
    switch (type) {
        case 'exporthtml':

            if (globals.campaign.evergagehtml) {
                delete globals.campaign.evergagehtml;
                globals.campaign['evergagehtml'] = $('[data-domain="production"]').html();
            } else {
                globals.campaign['evergagehtml'] = $('[data-domain="production"]').html();
            }
            htmlExport1();
            break;
        case 'exportcss':

            if (globals.campaign.evergagecss) {
                delete globals.campaign.evergagecss;
                globals.campaign['evergagecss'] = $('style#banners').html();
            } else {
                globals.campaign['evergagecss'] = $('style#banners').html();
            }
            styleExport1();
            break;
        case 'exportjs':

            if (globals.campaign.evergagejs) {
                delete globals.campaign.evergagejs;
                globals.campaign['evergagejs'] = globals.buildScript();
            } else {
                globals.campaign['evergagejs'] = globals.buildScript();
            }
            jsExport1();
            break;
        case 'exportjson':

            jsonExport1();
            break;
        default:
            break;
    }
    $(document).on('hidden.bs.modal', '#msgBox.modal', function () {
        $(this).remove();
    });
}

function jsonExport1() {
    // Form the CSS
    globals.campaign.evergagecss = $('style#banners').html();
    globals.campaign.evergagehtml = $('[data-domain="production"]').html();
    var html = "<textarea id='export'>" + JSON.stringify(globals.campaign) + "</textarea>";
    html += '<div class="faux-footer"><button onClick="copyToClipBoard();" class="copy btn btn-default">Copy To Clipboard</button><button onClick="saveToJson();" class="save btn btn-default">Save as JSON</button></div>';
    console.log(globals.campaign);
    msgBox1(html, "JSON Export");
}

function jsExport1() {
    // Form the CSS
    var html = "<textarea id='export'>" + globals.campaign.evergagejs + "</textarea>";
    html += '<div class="faux-footer"><button onClick="copyToClipBoard();" class="copy btn btn-default">Copy To Clipboard</button></div>';
    msgBox1(html, "JS Export");
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
    $('#rendering .section-offer-content .row-fluid').clone().appendTo('.noSeeCode');


    var html = '<textarea id="export">' + escapeHTML1(globals.campaign.evergagehtml) + '</textarea>';
    html += '<div class="faux-footer"><button onClick="copyToClipBoard();" class="copy btn btn-default">Copy To Clipboard</button></div>';
    msgBox1(html, 'HTML Export');

    // Clean up any empty lines in the textarea
    var text = $('.modal textarea').val();
    text = text.replace(/(?:(?:\r\n|\r|\n)\s*){2}/gm, '');
    $('.modal textarea').val(text);

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

    $(document).on('hidden.bs.modal', '#msgBox.modal', function () {
        $(this).remove();
    });
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
            $('[id="fireModal_' + id + '"]').addClass('showing');
            $('[id="clickbehavior_' + id + '"] [id*="updateOnClick_"]').css('display', 'block');
            break;
        case 'linkTo':
            $('[id="linkTo_' + id + '"]').addClass('showing');
            $('[id="clickbehavior_' + id + '"] [id*="updateOnClick_"]').css('display', 'block');
            if (globals.campaign.selectBrand == '') {
                $('[id*="linkToAnchor_"] span.input-group-addon1, [id*="linkToPage_"] span.input-group-addon1').html(globals.selectBrandPath);
            } else {
                $('[id="clickbehavior_' + id + '"] input[id="offerLink_' + id + '"].form-control1').removeClass('error');
                $('[id*="linkToAnchor_"] span.input-group-addon1, [id*="linkToPage_"] span.input-group-addon1').html(globals.selectBrandPath);
            }
            break;
        case 'linkToAnchor':
            $('[id="linkToAnchor_' + id + '"]').addClass('showing');
            $('[id="clickbehavior_' + id + '"] [id*="updateOnClick_"]').css('display', 'block');
            if (globals.campaign.selectBrand == '') {
                $('[id*="linkToAnchor_"] span.input-group-addon1, [id*="linkToPage_"] span.input-group-addon1').html(globals.selectBrandPath);
            } else {
                $('[id="clickbehavior_' + id + '"] input#anchorLink.form-control1').removeClass('error');
                $('[id*="linkToAnchor_"] span.input-group-addon1, [id*="linkToPage_"] span.input-group-addon1').html(globals.selectBrandPath);
            }
            break;
        case 'doNothing':
            $('[id="doNothing_' + id + '"]').addClass('showing');
            $('[id="clickbehavior_' + id + '"] [id*="updateOnClick_"]').css('display', 'block');
            break;
        default:
            $('[id="clickbehavior_' + id + '"] [id*="updateOnClick_"]').css('display', 'none');
            break;
    }
}

function iframeSetToLocal(iframe) {
    try {
        document.getElementById(iframe).contentWindow.location.href;
        return true;
    } catch (e) {
        $('#' + iframe).remove();

        $('#simulateParent').append('<iframe id="ifr" scrolling="no" name="simulation" frameborder="0" style="width:' + globals.simulation.width + 'px;height:' + globals.simulation.height + 'px;display:block;margin:0 auto;box-shadow: 0px 0px 11px rgba(0,0,0,0.25);position:absolute;left: 50%;top: 65px;transform: translateX(-50%);" title="Banner Simulation"></iframe>');
    }
}

function assignOnClickBehavior(id) {
    var type = $('[id="clickbehavior_' + id + '"] .showing').attr('name');

    if (type == 'fireModal') {
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

            title = $('[id="fireModal_' + id + '"] input[id="modalTitle_' + id + '"]').val() ? $('[id="fireModal_' + id + '"] input[id="modalTitle_' + id + '"]').val() : 'Enter Title text under Banner Behavior Settings';

            body = $('[id="fireModal_' + id + '"] textarea[id="modalBody_' + id + '"]').val() ? $('[id="fireModal_' + id + '"] textarea[id="modalBody_' + id + '"]').val() : 'Enter Body text under Banner Behavior Settings';

            footer = $('[id="fireModal_' + id + '"] input[id="modalFooter_' + id + '"]').val() ? $('[id="fireModal_' + id + '"] input[id="modalFooter_' + id + '"]').val() : 'Enter Footer text under Click Behavior Setting';

            $('.render').append(globals.campaign.bannerObjects['banner_' + id].onClickBehavior.modal.html(id, title, body, footer));

            $('.render #banner_' + id).attr('data-toggle', 'modal');
            $('.render #banner_' + id).attr('data-target', '#modal_' + id);
        }

    } else if (type == 'linkTo') {

        var link = $('[id="clickbehavior_' + id + '"] input[id="offerLink_' + id + '"]').val() ? $('[id="clickbehavior_' + id + '"] input[id="offerLink_' + id + '"]').val() : '#',
            relativeAbsolute = $('[id="clickbehavior_' + id + '"] input:radio[name="relativeAbsolute_' + id + '"]:checked').val(),
            sameNew = $('[id="clickbehavior_' + id + '"] input:radio[name="sameNewTab_' + id + '"]:checked').val();

        $('.render #banner_' + id).removeAttr('data-toggle');
        $('.render #banner_' + id).removeAttr('data-target');
        $('.render #banner_' + id).attr('role', 'button');
        $('.render #banner_' + id).attr('target', '_blank');
        $('.render #banner_' + id).css('cursor', 'pointer');

        globals.campaign.bannerObjects['banner_' + id].onClickBehavior.name = 'linkTo';
        globals.campaign.bannerObjects['banner_' + id].cursor = 'pointer';

        //relative
        //absolute
        //same
        //new

        if (relativeAbsolute == 'relative') {

            if (globals.campaign.selectBrand == '') {

                $('[id="clickbehavior_' + id + '"] input[id="offerLink_' + id + '"].form-control1').addClass('error');

                console.log('test1');

            } else {

                $('[id="clickbehavior_' + id + '"] input[id="offerLink_' + id + '"].form-control1').removeClass('error');

                $('[id="linkToAnchor_' + id + '"] span.input-group-addon1, [id*="linkToPage_"] span.input-group-addon1').html(globals.selectBrandPath);

                globals.campaign.bannerObjects['banner_' + id].onClickBehavior.link.uri = globals.campaign.brands[globals.campaign.selectBrand].baseUrl + link;

                console.log('test2');

                if (sameNew == 'sameTab') {

                    $('.render #banner_' + id).attr('onclick', 'window.location.replace(\'' + globals.campaign.bannerObjects['banner_' + id].onClickBehavior.link.uri + '\')');

                    console.log('test3');

                } else {

                    $('.render #banner_' + id).attr('onclick', 'window.open(\'' + globals.campaign.bannerObjects['banner_' + id].onClickBehavior.link.uri + '\',\'new_window\');');

                    console.log('test4');

                }

            }

        } else {

            if (sameNew == 'sameTab') {

                $('.render #banner_' + id).attr('onclick', 'window.location.replace(\'' + globals.campaign.bannerObjects['banner_' + id].onClickBehavior.link.uri + '\'');

                console.log('test5');

            } else {

                $('.render #banner_' + id).attr('onclick', 'window.open(\'' + globals.campaign.bannerObjects['banner_' + id].onClickBehavior.link.uri + '\',\'new_window\');');

                console.log('test6');

            }
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
    updateStyles(id);
}

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

        $('[data-domain="breakpoints"] .tabs div button.breakpoint-tab, [data-domain="breakpoints"] .inputs .col-xs-12 .input, .backgroundimage [data-bp*="bg_"], .height [data-bp*="height_"]', '[id="content_' + id + '"]').removeClass('showing');

        $('[data-domain="breakpoints"] .inputs .col-xs-12 [name="bpid_' + bpid + '"], .backgroundimage [data-bp="bg_' + bpid + '"], .height [data-bp="height_' + bpid + '"]', '[id="content_' + id + '"]').addClass('showing');

    }
    $(thisButton).addClass('showing');

    simulate();

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

        resetShowing(['[id*="props_"]', '.banner-tab', '.render > div']);

        updateStyles(id);

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

        updateStyles(id);

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

        globals.campaign.bannerObjects['banner_' + id].bp(bpid);
        globals.campaign.bannerObjects['banner_' + id].thisBannerBgSettingsExtended(id, bpid);
        globals.campaign.bannerObjects['banner_' + id].thisBannerExtendedBehaviors(id, bpid);
        globals.campaign.bannerObjects['banner_' + id].thisBannerBaseBehaviors(id, bpid);
        globals.campaign.bannerObjects['banner_' + id].bpjson[bpid] = {};
        globals.campaign.bannerObjects['banner_' + id].bpjson[bpid][1] = { 'html': '' };

        // Since there is more than one breakpoint now, disable hidden attribute for all breakpoint subtract buttons
        $('[id="content_' + id + '"] [data-domain="bpconfig"] .subtract-button').prop('hidden', false);

        resetShowing(['[id*="content_' + id + '"] .height .col-xs-12.forms .row']);
    }
}

function removeThis(thisButton) {

    var dataDomain = $(thisButton).closest('[data-domain]').data('domain'),
        id;

    if (dataDomain == 'tabs') {
        var seriesParent = $(thisButton).closest('[id*="tabs_"]'),
            series;

        id = $(seriesParent).attr('id').substr(-4);

        delete globals.campaign.bannerObjects['banner_' + id];

        $('[id="tabs_' + id + '"], [id="props_' + id + '"], .render > [id="banner_' + id + '"], .render > [id="banner_' + id + '"] + .gutter').remove();

        // Recheck qty of banners
        series = $('[id*="tabs_"]');

        resetShowing(['[id*="props_"]', '.banner-tab', '.render > div', '.height .col-xs-12.forms .row']);

        if (series.length == globals.minBannerNumber) {
            $('[data-domain="' + dataDomain + '"] .subtract-button').prop('hidden', true);
        }

        $('[data-domain="' + dataDomain + '"] .add-button').prop('hidden', false);

    } else if (dataDomain == 'inputs') {
        var seriesParent = $(thisButton).closest('[data-domain="' + dataDomain + '"]'),
            dataIndex = $(thisButton).closest('[data-input-index]').attr('data-input-index'),
            bpid = $(thisButton).closest('[name*="bpid"]').attr('name').substr(-5),
            series;

        id = $(thisButton).closest('[id*="content"]').attr('id').substr(-4);

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
            series;

        id = $(thisButton).closest('[id*="content"]').attr('id').substr(-4);

        delete globals.campaign.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid];

        delete globals.campaign.bannerObjects['banner_' + id].bpjson[bpid];

        $('[name="bpid_' + bpid + '"]').remove();

        $('[data-bp="bg_' + bpid + '"]').remove();

        $('[data-bp="height_' + bpid + '"]').remove();

        $('.render [id="banner_' + id + '"] [data-bp="bpid_' + bpid + '"]').remove();

        resetShowing([$('[data-domain="bpconfig"] .breakpoint-tab', seriesParent), $('[data-bp*="height_"]', seriesParent), $('[data-bp*="bg_"]', seriesParent)]);

        // Recheck qty of breakpoints
        series = $('[data-domain="bpconfig"]', seriesParent);

        if (series.length == 1) {
            $('[id="content_' + id + '"] .subtract-button').prop('hidden', true);
        }

    }

    updateStyles(id);
}

function edit(thisButton) {
    var bp = $(thisButton).closest('[data-bp]'),
        id = $(bp).closest('[id*="content_"]').attr('id').substr(-4),
        dataDomain = $(thisButton).closest('[data-domain]').data('domain');

    if (dataDomain == 'bpconfig') {
        msgBox1('<form id="bpForm" class="container-fluid">' + breakpointForm(id, $(bp)) + '</form>', 'Breakpoint Media Query Options');
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
        maxwidth = globals.campaign.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid].maxwidth;
    // height = globals.campaign.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid].height;

    $.each(seriesInputs, function () {
        var inputId = $(this).attr('id');
        switch (inputId) {
            case 'bpName':
                name = $('input#bpName', el1).val() == '' ? name : $('input#bpName', el1).val();
                break;
            case 'bpMinWidth':
                minwidth = $('input#bpMinWidth', el1).val() == '' ? 0 : $('input#bpMinWidth', el1).val();
                break;
            case 'bpMaxWidth':
                maxwidth = $('input#bpMaxWidth', el1).val() == '' ? 0 : $('input#bpMaxWidth', el1).val();
                break;
            // case 'bpHeight':
            //     height = $('input#bpHeight', el1).val() == '' ? height : $('input#bpHeight', el1).val();
            //     break;
            default:
                break;
        }
    });

    // For this breakpoint, populate the breakpoint drop down with HTML requiring 'name', 'bpid', 'maxwidth', 'minwidth' breakpoint props
    if (minwidth == 0 && maxwidth == 0) {
        $('button[name="copyTab"]', el2).html('<h5 style="margin-top:0;margin-bottom:0;">' +
            name +
            '</h5>'
            //+
            // '<span data-toggle="collapse" href="#dl_' + bpid + '" role="button" aria-expanded="false" aria-controls="collapseBpProps_' + bpid + '" class="glyphicon"></span>'
            //  +
            // '<dl id="dl_' + bpid + '" class="collapse">' +
            // '<dd><span style="font-weight:400;font-size:smaller;">height:</span> ' +
            // height + 'px</span></dd>' +
            // '</dl>'
        );
    } else if (minwidth == 0) {
        $('button[name="copyTab"]', el2).html('<h5 style="margin-top:0;margin-bottom:0;">' +
            name +
            '</h5>' +
            '<span data-toggle="collapse" href="#dl_' + bpid + '" role="button" aria-expanded="false" aria-controls="collapseBpProps_' + bpid + '" class="glyphicon"></span>' +
            '<dl id="dl_' + bpid + '" class="collapse">' +
            '<dd><span style="font-weight:400;font-size:smaller;">maxwidth:</span> ' +
            maxwidth + 'px</span></dd>' +
            // '<dd><span style="font-weight:400;font-size:smaller;">height:</span> ' +
            // height + 'px</span></dd>' +
            '</dl>'
        );
    } else if (maxwidth == 0) {
        $('button[name="copyTab"]', el2).html('<h5 style="margin-top:0;margin-bottom:0;">' +
            name +
            '</h5>' +
            '<span data-toggle="collapse" href="#dl_' + bpid + '" role="button" aria-expanded="false" aria-controls="collapseBpProps_' + bpid + '" class="glyphicon"></span>' +
            '<dl id="dl_' + bpid + '" class="collapse">' +
            '<dd><span style="font-weight:400;font-size:smaller;">minwidth:</span> ' +
            minwidth + 'px</span></dd>' +
            // '<dd><span style="font-weight:400;font-size:smaller;">height:</span> ' +
            // height + 'px</span></dd>' +
            '</dl>'
        );
    } else {
        $('button[name="copyTab"]', el2).html('<h5 style="margin-top:0;margin-bottom:0;">' +
            name +
            '</h5>' +
            '<span data-toggle="collapse" href="#dl_' + bpid + '" role="button" aria-expanded="false" aria-controls="collapseBpProps_' + bpid + '" class="glyphicon"></span>' +
            '<dl id="dl_' + bpid + '" class="collapse">' +
            '<dd><span style="font-weight:400;font-size:smaller;">minwidth:</span> ' +
            minwidth + 'px</span></dd>' +
            '<dd><span style="font-weight:400;font-size:smaller;">maxwidth:</span> ' +
            maxwidth + 'px</span></dd>' +
            // '<dd><span style="font-weight:400;font-size:smaller;">height:</span> ' +
            // height + 'px</span></dd>' +
            '</dl>'
        );
    }

    globals.campaign.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid].name = name;
    globals.campaign.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid].minwidth = minwidth;
    globals.campaign.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid].maxwidth = maxwidth;
    // globals.campaign.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid].height = height;



    $('[data-bp="bg_' + bpid + '"] b.bpName').html(globals.campaign.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid].name);

    $('label[for="bpHeight_' + bpid + '"] b.bpName').html(globals.campaign.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid].name);

    updateStyles(id);

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

function updateStyles(id) {

    var embedstyles = $('style#banners');

    if ($('.render [id="banner_' + id + '"] [data-bp]').hasClass('starter')) {
        $('.render [id="banner_' + id + '"] [data-bp]').removeAttr('class');
    }

    $(embedstyles).html('');
    $(embedstyles).append(globals.buildStyles(globals.campaign.bannerObjects));

    simulateCheck();
}

function sections() {
    var html = '<br>' +
        '<div class="row" style="position:sticky;top:0;z-index:999;border: solid #d1d1d1 1px;background-color:#efefef;box-shadow: 0px 12px 2px rgba(0,0,0,0.125);">' +
        '<div class="col-xs-12">' +
        '<div class="row">' +
        '<div id="simulateParent" class="col-xs-12" style="position:relative;">' +
        '<h2>Banner Simulation</h2>' +
        '<iframe id="ifr" scrolling="no" name="simulation" frameborder="0" style="width:768px;height:72px;display:block;margin:0 auto;box-shadow: 0px 0px 11px rgba(0,0,0,0.25);position:absolute;left: 50%;top: 65px;transform: translateX(-50%);" title="Banner Simulation"></iframe>' +
        '</div>' +
        '</div>' +
        '<br>' +
        '<div class="row">' +
        '<div class="col-xs-3">' +
        '<label for="simulateWidth">Preview responsiveness. Enter width:</label>' +
        '</div>' +
        '<div class="col-xs-2 field-unit">' +
        '<input id="simulateWidth" min="0" type="number" placeholder="768" style="width:100%;" /><span>px</span>' +
        '</div>' +
        '<div class="col-xs-2">' +
        '<label for="simulateHeight">Enter height:</label>' +
        '</div>' +
        '<div class="col-xs-2 field-unit">' +
        '<input id="simulateHeight" min="0" type="number" placeholder="72" style="width:100%;" /><span>px</span>' +
        '</div>' +
        '</div>' +
        '<div class="row-fluid" style="text-align:right;">' +
        '<div class="col-xs-12">' +
        '<button id="simulateWidthHeightSettings" name="update" type="button">Update Simulation</button>' +
        '</div>' +
        '</div>' +
        '<br>' +
        '<br>' +
        '</div>' +
        '</div>' +
        '<style id="banners"></style>' +
        '<div class="row" data-domain="production" style="height:0px;overflow:hidden;">' +

        '<div class="render">' +

        '</div>' +
        '</div>' +

        '<br>' +

        '<div class="row">' +
        '<div class="col-xs-12">' +
        '<p>' +
        '<span class="required">*</span> - Required.</p>' +
        '</div>' +
        '</div>' +

        '<div class="row">' +
        '<fieldset id="bannerTabs" class="col-xs-12">' +

        '<legend>' +
        '<h2>Banners</h2>' +
        '</legend>' +

        '<span class="dynamic">' +
        '<div class="row-fluid flex-it" data-domain="tabs"></div>' +
        '</span>' +

        '<hr>' +

        '<p>Click on the <b>[&nbsp;BANNER&nbsp;]</b> button(s) above to rename the banner.<span class="required">*</span><br>Hover over the <b>[&nbsp;BANNER&nbsp;]</b> button(s) above to view toolbar.<br>Click on the <b>[&nbsp;<span style="color:green;">+</span>&nbsp;]</b></b> button to add another banner.<br>Click on the <b>[&nbsp;<span style="color:red;">x</span>&nbsp;]</b> button to remove a banner.</p>' +

        '</fieldset>' +
        '</div>' +

        '<div id="globals" class="row">' +

        '<fieldset id="globalProperties" class="col-xs-12">' +
        '<legend>' +
        '<h2 data-toggle="collapse" data-target="#collapseGlobals" aria-expanded="false" aria-controls="collapseGlobals"><span class="globalTxtPlaceholder"></span>Global Attributes <span class="glyphicon glyphicon-chevron-down"></span><span class="glyphicon glyphicon-chevron-up"></span></h2>' +
        '</legend>' +

        '<div class="row-fluid collapse" id="collapseGlobals">' +

        '<div class="col-xs-12">' +

        '<div class="row-fluid">' +

        '<fieldset id="campaign" class="col-xs-12">' +
        '<legend>' +
        '<h3>Campaign</h3>' +
        '</legend>' +

        '<div class="row">' +
        '<div class="col-xs-2">' +
        '<label for="brand">Enter your campaign name:<span class="required">*</span></label>' +
        '</div>' +
        '<div class="col-xs-2">' +
        '<input id="campaignName" type="text" placeholder="' + globals.campaign.getname + '" value="' + globals.campaign.getname + '">' +
        '</div>' +
        '</div>' +

        '<div class="row">' +
        '<div class="col-xs-12" style="text-align:right;">' +
        '<button id="campaignNameUpdate" type="button" name="update">Update Campaign Name</button>' +
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
        '<p>Enter the max width whereby the banners will render as a column stack ' +
        '<span class="no-word-break">' +
        '(&nbsp;&nbsp;' +

        '<svg class="vertical" viewBox="0 0 10 10" width="10" height="10" fill="#000000">' +
        '<use xlink:href="svgs.svg#stackspan" href="svgs.svg#stackspan">' +
        '</use>' +
        '</svg>' +

        '&nbsp;&nbsp;vs&nbsp;&nbsp;' +


        '<svg class="horizontal" viewBox="0 0 10 10" width="10" height="10" fill="#000000">' +
        '<use xlink:href="svgs.svg#stackspan" href="svgs.svg#stackspan">' +
        '</use>' +
        '</svg>' +


        '&nbsp;&nbsp;). ' +
        '</span>' +
        'By default, banners will render as stacked in screenwidths of up to 575px when there is more than one banner.</p>' +
        '</div>' +
        '</div>' +
        '<div class="row">' +
        '<div class="col-xs-2">' +
        '<label for="stackingBp">Enter number:</label>' +
        '</div>' +
        '<div class="col-xs-3 field-unit">' +
        '<input id="stackingBp" name="stackingBp" type="number" min="0" placeholder="' + globals.campaign.stackbreakpoint + '" required> <span>px</span> </div>' +
        '</div>' +
        '<div class="row">' +
        '<div class="col-xs-12" style="text-align:right;">' +
        '<button id="stackingBpUpdate" type="button" name="update">Update Stacking Breakpoint</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</fieldset>' +
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
        '<button type="button" name="exportjs" disabled>Export Javascript</button>' +
        '<button id="form-reset" type="button" name="resetall">Reset</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>';

    return html;
}

function bannerCreatorForm(el1) {
    var id = el1.id,
        content = '<div class="row-fluid">' +

            '<fieldset id="content_' + id + '" class="col-xs-12">' +

            '<legend><h3><span class="txtPlaceholder"></span>Banner Breakpoint Settings</h3></legend>' +
            '<hr>' +
            '<div class="row-fluid content" data-domain="breakpoints">' +
            '<div class="col-xs-12">' +
            '<h4>Breakpoints</h4>' +
            '<div class="row flex-it tabs">' +
            '</div>' +

            '<div class="row">' +
            '<div class="col-xs-12">' +
            '<p>' +
            '<br>Hover over the <b>[&nbsp;BREAKPOINT&nbsp;]</b> button(s) above to view breakpoint toolbar.' +
            '<br>Click on the <b>[&nbsp;BREAKPOINT&nbsp;]</b> button(s) above to display the text group form.' +
            '<br>Click on the<b> [&nbsp;<span class="glyphicon glyphicon-cog" style="color:blue;"></span>&nbsp;]</b> button to set <b>Name</b> and <b>Min</b>/<b>Max Width</b> media query options of breakpoint.' +
            '<br>Click on the<b> [&nbsp;<span style="color:green;">+</span>&nbsp;]</b> button to add breakpoint.' +
            '<br>Click on the <b>[&nbsp;<span style="color:red;">x</span>&nbsp;]</b> button to remove breakpoint.' +
            '<span class="required">*</span>' +
            '</p>' +
            '</div>' +
            '</div>' +
            '<hr>' +

            // Height section
            '<div class="row height">' +
            '<div class="col-xs-12">' +
            '<div class="row">' +
            '<div class="col-xs-12">' +
            '<h4>Breakpoint <b class="bpName"></b> Height</h4>' +
            '</div>' +
            '</div>' +
            '<div class="row">' +
            '<div class="col-xs-12 forms">' +
            '</div>' +
            '</div>' +
            '<div class="row-fluid" style="text-align:right;"><div class="col-xs-12"><button id="bpHeight" name="update" type="submit">Update Breakpoint Height</button></div></div>' +
            '</div>' +
            '</div>' +
            '<hr>' +

            // Background image section
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

            // Text groups section
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
            '<br>Click on the <b>[&nbsp;<span style="color:green;">+</span>&nbsp;]</b></b> button to add another text group.' +
            '<br>Click on the <b>[&nbsp;<span style="color:red;">x</span>&nbsp;]</b> button to remove a text group.' +
            '</p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="row-fluid" style="text-align:right;">' +
            '<div class="col-xs-12">' +
            '<button id="textGroups_' + id + '" name="update" type="submit">Update Text Groups</button>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +

            '</fieldset>' +

            '</div>',

        background = '<div class="row-fluid">' +
            '<fieldset id="background_' + id + '" class="col-xs-12">' +
            '<legend> <h3><span class="txtPlaceholder"></span>Banner Background Settings</h3> </legend>' +

            '<hr>' +

            '<div class="row-fluid">' +
            '<div class="col-xs-12">' +
            '<h5>COLOR</h5>' +
            '</div>' +
            '</div>' +

            // RGB fields
            // '<div class="row">' +
            // '<div class="col-xs-3">' +
            // '<label for="rgb_bg' + id + '">Banner background RGB color <span class="help1 glyphicon glyphicon-question-sign" data-help="rgb" aria-hidden="true"></span>:</label>' +
            // '</div>' +
            // '<div class="col-xs-6 input-group1">' +
            // '<span class="input-group-addon1">R</span> <input id="r_bg' + id + '" name="r" class="bgcolor" placeholder="###" type="number" width="10" minlength="3" maxlength="3" min="0" max="250" required>' +
            // '<span class="input-group-addon1">G</span><input id="g_bg' + id + '" name="g" class="bgcolor" placeholder="###" type="number" width="10" maxlength="3" min="0" max="250" required>' +
            // '<span class="input-group-addon1">B</span><input id="b_bg' + id + '" name="b" class="bgcolor" placeholder="###" type="number" width="10" maxlength="3" min="0" max="250" required>' +
            // '</div>' +
            // '<div class="col-xs-3 error" hidden>' +
            // '</div>' +
            // '</div>' +
            // '<br>' +

            // Hex fields
            '<div class="row">' +
            '<div class="col-xs-3">' +
            '<label for="hex_bg' + id + '">Banner background Hex color <span class="help1 glyphicon glyphicon-question-sign" data-help="hex" aria-hidden="true"></span>:</label>' +
            '</div>' +
            '<div class="col-xs-6 input-group1">' +
            '<span class="input-group-addon1">Hex</span> <input id="hex_bg' + id + '" name="hex" class="bgcolor" placeholder="###" type="text" width="10" minlength="3" maxlength="6" min="0" max="250" required>' +
            '</div>' +
            '<div class="col-xs-3 error" hidden>' +
            '</div>' +
            '</div>' +

            '<br>' +
            '<div class="row" style="text-align:right;"><div class="col-xs-12"><button id="backgroundSettings_' + id + '" name="update" type="submit">Update Background Settings</button></div></div>' +
            '<br>' +
            '</fieldset>' +
            '</div>',

        clickbehavior = '<div class="row-fluid">' +
            '<fieldset id="clickbehavior_' + id + '" class="col-xs-12">' +
            '<legend><h3><span class="txtPlaceholder"></span>Banner Behavior Settings</h3></legend>' +
            '<div class="row-fluid">' +
            '<div class="col-xs-3">' +
            '<label for="onClickBehavior_' + id + '">Banner OnClick behavior:</label>' +
            '</div>' +
            '<div class="col-xs-2">' +
            '<select name="onClickBehavior" id="onClickBehavior_' + id + '" required>' +
            '<option value="">-- select --</option>' +
            '<option value="fireModal">Fire modal</option>' +
            '<option value="linkTo">Link to</option>' +
            // '<option value="linkToAnchor">Link to anchor</option>' +
            '<option value="doNothing">Do nothing </option>' +
            '</select>' +
            '</div>' +
            '</div>' +

            // Fire modal
            '<div class="row-fluid">' +
            '<div class="col-xs-12">' +
            '<div id="fireModal_' + id + '" class="row onclickbehavior" name="fireModal">' +
            '<div class="col-xs-12">' +
            '<div class="row-fluid">' +
            '<div class="col-xs-12">' +
            '<h4>Modal</h4>' +
            '</div>' +
            '</div>' +
            '<hr>' +
            '<div class="row">' +
            '<div class="col-xs-6">' +
            '<div class="row-fluid enter-text-modal flex-it">' +
            '<label for="modalTitle_' + id + '">Modal Title <small>(max characters: 45)</small></label>' +
            '<br>' +
            '<input id="modalTitle_' + id + '" name="modalTitle" placeholder="For free standard shipping on orders of $59 or more, &hellip;" type="text" size="50" maxlength="50">' +
            '</div>' +
            '<br>' +
            '<div class="row-fluid enter-text-modal flex-it">' +
            '<label for="modalBody_' + id + '">Modal Body</label>' +
            '<br>' +
            '<textarea id="modalBody_' + id + '" name="modalBody" class="editor"  cols="50" rows="10" placeholder="Free shipping offer excludes&hellip; Not valid in conjuction with any other offer." required></textarea>' +
            '</div>' +
            '<br>' +
            '<div class="row-fluid enter-text-modal flex-it">' +
            '<label for="modalFooter_' + id + '">Modal Footer <small>(max characters: 45)</small></label>' +
            '<br>' +
            '<input id="modalFooter_' + id + '" name="modalFooter" placeholder="*Offer expires 8/7/20 at 11:59 pm PDT." type="text" size="50" maxlength="50">' +
            '</div>' +
            '</div>' +
            '<div class="col-xs-6">' +
            '<div class="row">' +
            '<span class="example-modal">' +
            '<h5>Example Modal</h5>' +
            '<img class="img-responsive" src="img/test.png" alt="Example modal">' +
            '</span>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +

            // Link
            '<div id="linkTo_' + id + '" class="row onclickbehavior" name="linkTo">' +



            '<div class="col-xs-12">' +
            '<div class="row-fluid"><div class="col-xs-12"><h4>Link To</h4></div></div>' +
            '<hr>' +
            '<div class="row">' +

            //'<div class="row">' +
            '<div class="col-xs-6" style="border-right: 1px solid #d1d1d1;">' +
            '<div class="row">' +
            '<div class="col-xs-12">' +
            '<h5>Relative OR Absolute URI</h5>' +
            '</div>' +
            '</div>' +


            '<div class="row">' +
            '<div class="col-xs-2">' +
            '<label for="relativeLink_' + id + '" >Relative</label>' +
            '</div>' +
            '<div class="col-xs-4">' +
            '<input id="relativeLink_' + id + '" type="radio" name="relativeAbsolute_' + id + '" value="relative" />' +
            '</div>' +
            '<div class="col-xs-2">' +
            '<label for="absoluteLink_' + id + '" >Absolute</label>' +
            '</div>' +
            '<div class="col-xs-4">' +
            '<input id="absoluteLink_' + id + '" type="radio" name="relativeAbsolute_' + id + '" value="absolute" />' +
            '</div>' +
            '</div>' +
            '</div>' +


            //'<div class="row">' +
            '<div class="col-xs-6">' +
            '<div class="row">' +
            '<div class="col-xs-12">' +
            '<h5>Open link in same OR new tab</h5>' +
            '</div>' +
            '</div>' +


            '<div class="row">' +

            '<div class="col-xs-2">' +
            '<label for="sameTab_' + id + '" >Same</label>' +
            '</div>' +
            '<div class="col-xs-4">' +
            '<input id="sameTab_' + id + '" type="radio" name="sameNewTab_' + id + '" value="sameTab" />' +
            '</div>' +
            '<div class="col-xs-2">' +
            '<label for="newTab_' + id + '" >New</label>' +
            '</div>' +
            '<div class="col-xs-4">' +
            '<input id="newTab_' + id + '" type="radio" name="sameNewTab_' + id + '" value="newTab" />' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +

            '<br>' +









            '<div class="row">' +

            '<div class="col-xs-1">' +
            '<label for="offerLink_' + id + '">Enter link:</label>' +
            '</div>' +






            '<div class="col-xs-9 input-group1">' +
            '<span class="input-group-addon1" id="img2label">' + globals.selectBrandPath + '</span><input id="offerLink_' + id + '" class="form-control1" placeholder="Ex. /category/wigs/all-wigs.do" type="text" style="width:100%" required>' +
            '</div>' +

            '</div>' +
            '</div>' +
            '</div>' +

            // Static
            '<div id="doNothing_' + id + '" class="row onclickbehavior" name="doNothing">' +
            '<br>' +
            '<div class="col-xs-12">' +
            '<p>This will be a static banner.</p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="row-fluid">' +
            '<div class="col-xs-12" style="display: flex;justify-content: flex-end;">' +
            '<button id="updateOnClick_' + id + '" name="update" type="button" style="display:none;">Update onclick</button>' +
            '</div>' +
            '</div>' +
            '</fieldset>' +
            '</div>',

        html = '<fieldset id="props_' + id + '" class="col-xs-12 banner-properties">' +
            '<legend>' +
            '<h2 data-toggle="collapse" data-target="#collapseProps_' + id + '" aria-expanded="false" aria-controls="collapseProps_' + id + '">' +
            '<span class="txtPlaceholder"></span>Banner Properties ' +
            '<span class="glyphicon glyphicon-chevron-down"></span><span class="glyphicon glyphicon-chevron-up"></span></h2>' +
            '</legend>' +
            '<div class="row-fluid collapse" id="collapseProps_' + id + '">' +

            '<div class="col-xs-12">' +
            content +
            background +
            clickbehavior +
            '</div>' +
            '</div>' +
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
            '<button type="button" class="banner-tab" name="bannertab" onClick="show(this)" data-label="banner" style="box-shadow:3px 6px 10px rgb(100,100,100);"><span contenteditable>' + el1.txtPlaceholder + '<span></button>' +
            '</span>' +
            '<div>';

    return html;
}

function bannerPreview(banner) {
    var html = '<div id="banner_' + banner.id + '" class="banner trigger" role="presentation">' +
        '</div><span class="gutter"></span>';

    return html;
}

function bannerPreviewBreakpoint(id, breakpointId) {
    var html = '<div data-bp="bpid_' + breakpointId + '" class="starter"><span class="text-group" data-output-index="1"></span></div>';

    return html;
}

function breakpointTab(bpid, name) {

    var html = '<div name="bpid_' + bpid + '" class="col-xs-3" data-domain="bpconfig" data-bp="bpid_' + bpid + '">' +
        '<span class="controls-add-subtract">' +
        '<button type="button" class="subtract-button" onClick="removeThis(this)" style="color:red;" hidden>x</button>' +
        '<button type="button" class="edit-button glyphicon glyphicon-cog" onClick="edit(this)" style="color:blue;top:0px;"></button>' +
        '<button type="button" class="add-button" onClick="add(this)" style="color:green;">+</button>' +
        '</span>' +
        '<span><button type="button" class="breakpoint-tab showing" name="copyTab" onClick="show(this);" style="box-shadow:3px 6px 10px rgb(100,100,100);"><h5 style="margin-top:0;margin-bottom:0;"><span class="bpName">' + name + '</span></h5></button></span>' +
        '</div>';

    return html;
}

function breakpointInput(number, id) {
    var html = '<div name="bpid_' + id + '" data-domain="inputs" class="row input showing">' +
        '<span data-input-index="' + number + '">' +
        '<span class="max-width-input field-unit"><label for="maxWidthInput_' + number + '" style="display:inline-block;">max-width&nbsp;</label><input id="maxWidthInput_' + number + '" style="width:60px;" type="number" placeholder="---" min="0" />&nbsp;%</span>' +
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

function breakpointHeight(id, bp) {

    var bpid = bp,
        name = globals.campaign.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid].name,
        html = '<div class="row showing" data-bp="height_' + bpid + '">' +
            '<label for="bpHeight_' + bpid + '" class="col-xs-3">Breakpoint <b class="bpName">' + name + '</b> Height:' +
            '</label>' +
            '<input id="bpHeight_' + bpid + '" name="bpHeight" class="col-xs-1" min="0" type="number" placeholder="' + globals.campaign.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid].height + '">' +
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
            '<br><small style="font-weight:400;">Set to 0 to omit min-width</small>' +
            '<br><small style="font-weight:400;">Default is ' + globals.campaign.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid].minwidth + 'px</small>' +
            '</label>' +
            '<input id="bpMinWidth" name="bpMinWidth" class="col-xs-8" type="number" placeholder="' + globals.campaign.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid].minwidth + '">' +
            '</div>' +
            '<div class="row">' +
            '<label for="bpMaxWidth" class="col-xs-4">Max-width:' +
            '<br><small style="font-weight:400;">Set to 0 to omit max-width</small>' +
            '<br><small style="font-weight:400;">Default is ' + globals.campaign.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid].maxwidth + 'px</small>' +
            '</label>' +
            '<input id="bpMaxWidth" name="bpMaxWidth" class="col-xs-8" type="number" placeholder="' + globals.campaign.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid].maxwidth + '">' +
            '</div>' +
            // '<div class="row">' +
            // '<label for="bpHeight" class="col-xs-4">Height:<br><small style="font-weight:400;">Default is 56px</small></label><input id="bpHeight" name="bpHeight" class="col-xs-8" type="number" placeholder="' + globals.campaign.bannerObjects['banner_' + id].css.breakpoints['bpid_' + bpid].height + '">' +
            // '</div>' +
            '<div class="row">' +
            '<button id="bpUpdate" type="submit" name="bpUpdate">Update Breakpoint</button>' +
            '</div>';

    return html;
}

function breakpointBackgroundImg(bpid, bannerId) {
    var name = globals.campaign.bannerObjects['banner_' + bannerId].css.breakpoints['bpid_' + bpid].name,
        width = globals.campaign.bannerObjects['banner_' + bannerId].css.breakpoints['bpid_' + bpid].background.bgwidth,
        height = globals.campaign.bannerObjects['banner_' + bannerId].css.breakpoints['bpid_' + bpid].background.bgheight,
        horizontal = globals.campaign.bannerObjects['banner_' + bannerId].css.breakpoints['bpid_' + bpid].background.positionx,
        vertical = globals.campaign.bannerObjects['banner_' + bannerId].css.breakpoints['bpid_' + bpid].background.positiony,
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
            '<input id="width_' + bpid + '" name="width" type="number" placeholder="' + width + '" maxlength="3" size="3" style="width:100%;">' +
            '<span>%</span></div>' +

            '<div class="col-xs-3">' +
            '<label for="height_' + bpid + '">Height for <b class="bpName">' + name + '</b> image <span class="help1 glyphicon glyphicon-question-sign" data-help="height" aria-hidden="true"></span>:</label>' +
            '</div>' +

            '<div class="col-xs-2 field-unit">' +
            '<input id="height_' + bpid + '" name="height" type="number" placeholder="' + height + '" maxlength="3" size="3" style="width:100%;">' +
            '<span>%</span></div>' +
            '</div>' +


            '<div class="row" data-bp="bgpos">' +

            '<div class="col-xs-3">' +

            '<label for="x_' + bpid + '">Horizontal position for <b class="bpName">' + name + '</b> image <span class="help1 glyphicon glyphicon-question-sign" data-help="xpos" aria-hidden="true"></span>:</label>' +
            '</div>' +

            '<div class="col-xs-2 field-unit">' +
            '<input id="x_' + bpid + '" name="x" type="number" placeholder="' + horizontal + '" maxlength="3" size="3" style="width:100%;">' +
            '<span>%</span></div>' +

            '<div class="col-xs-3">' +
            '<label for="y_' + bpid + '">Vertical position for <b class="bpName">' + name + '</b> image <span class="help1 glyphicon glyphicon-question-sign" data-help="ypos" aria-hidden="true"></span>:</label>' +
            '</div>' +

            '<div class="col-xs-2 field-unit">' +
            '<input id="y_' + bpid + '" name="y" type="number" placeholder="' + vertical + '" maxlength="3" size="3" style="width:100%;">' +
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
            },
            fontSizeAdjustStyles: ''
        },
        bpjson: {},
        breakpointTabs: function (id, name) {
            return breakpointTab(id, name);
        },
        breakpointInputs: function (number, id) {
            return breakpointInput(number, id);
        },
        copyInput: function (number) {
            var html = '<span data-input-index="' + number + '">' +
                '<span class="max-width-input field-unit"><label for="maxWidthInput_' + number + '" style="display:inline-block;">max-width&nbsp;</label><input id="maxWidthInput_' + number + '" style="width:60px;" type="number" placeholder="---" min="0" />&nbsp;%</span>' +
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
            link: {
                relativeAbsolute: 'relative',
                sameNew: 'same',
                uri: '#'
            }
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
                minwidth: 0,
                maxwidth: 0,
                height: 56
            };
        },
        thisBannerBgSettingsExtended: function (id, bpid) {
            return bannerBgSettingsExtended(id, bpid);
        },
        thisBannerExtendedBehaviors: function (id, bpid) {
            return bannerExtendedBehaviors(id, bpid);
        },
        thisBannerBaseBehaviors: function (id, bpid) {
            return bannerBaseBehaviors(id, bpid);
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

            //coreBehaviors();
        }
    }

    return obj;
}