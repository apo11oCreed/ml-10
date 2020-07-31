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
        "baseUrl": "https://www.paulayoung.com"
    }],
    "especiallyyours": [{
        "baseUrl": "https://www.especiallyyours.com"
    }],
    "thelook": [{
        "baseUrl": "https://www.thelook.fashion"
    }],
    "wig": [{
        "baseUrl": "https://www.wig.com"
    }],
    "beyondextensions": [{
        "baseUrl": "https://www.beyondextensions.com"
    }]
}

var patternOptionsHTML,
    selectOnClickBehavior,
    selectBrand,
    selectLayoutType,
    selectedPattern,
    selectDesktopImg,
    selectMobileImg,
    selectBgColor;

$(document).ready(function () {

    $('fieldset#patterns > span.dynamic').html('<a href="#layouts" style="color:blue;text-decoration:underline;">*Select Layout first.</a>');

    $('select#brand').on('change', function () {
        brand = $('#brand :selected').val();
    });

    $('input[name="bpDesktop"],input[name="bpMobile"]').on('click', function () {
        var namespace = $(this).attr('name').substr(2);
        if ($(this).val() == 'no') {
            $('input#bg' + namespace).prop('disabled', true);
        } else {
            $('input#bg' + namespace).prop('disabled', false);
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

    $('button#form-reset').on('click', function () {
        $('span.dynamic').html('');
        selectOnClickBehavior = '';
        selectBrand = '';
        selectLayoutType = '';
        selectedPattern = '';
        selectDesktopImg = '';
        selectMobileImg = '';
        selectBgColor = '';
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

    // imgaddress
    $(".imgaddress").on("change", function () {
        checkImageExists(this, $(this).val());
    });


    function checkImageExists(el, url) {
        var img = new Image();
        $(el).parent().removeClass("found notfound");

        img.onload = function () {
            $(el).parent().addClass("found");
            reDraw();
        };
        img.onerror = function () {
            $(el).parent().addClass("notfound");
        };

        img.src = imgURL(el, true);
    }
});