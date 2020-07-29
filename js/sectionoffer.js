$(document).ready(function () {
    offerTester();

    // Attach behaviour to inputs/selects/buttons to clear any alerts on click/change
    buttonBehave();

    $(document).on("hidden.bs.modal", ".modal", function () {
        $(this).remove();
    });
    $(document).on("click", "button.copy", function () {
        $(".modal textarea").select();
        document.execCommand('copy');
        $(".modal textarea").blur();
        var type = $(".modal:visible .modal-title").text().split(" ")[0];
        var alertM = `
		<div class="alert alert-success" role="alert">
			<a href="#" class="alert-link">${type} Copied!</a>
		</div>`;
        $(".modal-body:visible").prepend(alertM);
        setTimeout(function () { $(".modal-body .alert").remove(); }, 3000);
    });
});

/* Local and Remote image testing
 * Input fields for the required information
 * Selectable to whether they are required
 */

function offerTester() {
    // Add Title and instructions to the head of the page
    // Add input fields for brand, 962px image, 575px and buttons to toggle between local and external images
    var html = `
	<div class="instrCont container">
		<h1>Offer Creation Tool <strong><i>v2</i></strong></h1>
		<div class="optCont col-md-6 col-sm-12 col-xs-12 clearfix">
			<div class="opt-row">
				<div class="opt-cell"><h4>Offer Text Details</h4></div>
				<div class="opt-cell"></div>
				<div class="opt-cell rightAlign"><span class="showhide glyphicon glyphicon-plus-sign" aria-hidden="true"></span></div>
			</div>
			<div class="opt-row chide">
				<div class="opt-cell cheading">Section</div>
				<div class="opt-cell cheading cntr"><span>Required?</span><span data-help="req" class="help glyphicon glyphicon-question-sign" aria-hidden="true"></span>
				</div>
				<div class="opt-cell cheading">Value</div>
			</div>
			<div class="opt-row chide">
				<div class="opt-cell clabel">Heading</div>
				<div class="opt-cell cntr">
					<input type="checkbox" name="heading" class="required" checked disabled>
				</div>
				<div class="opt-cell">
					<input class="wide" type="text" name="heading" placeholder="Test Offer!...">
				</div>
			</div>
			<div class="opt-row chide">
				<div class="opt-cell clabel">Body Text</div>
				<div class="opt-cell cntr">
					<input type="checkbox" name="body" class="required" checked>
				</div>
				<div class="opt-cell">
					<textarea row="1" class="wide" name="body" placeholder="The offer description..."></textarea>
				</div>
			</div>
			<div class="opt-row chide">
				<div class="opt-cell clabel">Coupon Text</div>
				<div class="opt-cell cntr">
					<input type="checkbox" name="coupon" class="required" checked>
				</div>
				<div class="opt-cell">
					<input class="wide" type="text" name="coupon" placeholder="Coupon Code: 123456...">
				</div>
			</div>
			<div class="opt-row chide">
				<div class="opt-cell clabel">Link HREF</div>
				<div class="opt-cell cntr">
					<input type="checkbox" name="href" class="required" checked disabled>
				</div>
				<div class="opt-cell">
					<input class="wide" type="text" name="href" placeholder="/category/sale/sale+casual+wear.do...">
				</div>
			</div>
			<div class="opt-row chide">
				<div class="opt-cell clabel">Enable Link Testing Below</div>
				<div class="opt-cell">
				</div>
				<div class="opt-cell">
					<input type="checkbox" name="linktest" checked>
				</div>
			</div>
		</div>
		<div class="optCont col-md-6 col-sm-12 col-xs-12 clearfix">
			<div class="opt-row">
				<div class="opt-cell"><h4>Image Location</h4></div>
				<div class="opt-cell rightAlign"><span class="showhide glyphicon glyphicon-plus-sign" data-help="img1" aria-hidden="true"></span></div>
			</div>
			<div class="opt-row chide">
				<div class="opt-cell">
					<input type="radio" id="local" name="lorr" value="local" checked />&nbsp;
					<label for="local">Local</label>
				</div>
				<div class="opt-cell">
					<input type="radio" id="remote" name="lorr" value="remote" />&nbsp;
					<label for="Remote">Remote</label>
				</div>
			</div>
			<!-- Option Box 1: Brand -->
			<div class="opt-row brand chide">
				<div class="opt-cell disabled clabel">Brand:</div>
				<div class="opt-cell">
					<select disabled class="wide" name="brandSel">
						<option value="">Select a Brand...</option>
						<option value="PY">Paula Young</option>
						<option value="EY">Especially Yours</option>
						<option value="WIG">Wig.com</option>
						<option value="look">The Look</option>
					</select>
				</div>
			</div>
			<!-- Option Box 2: Breakpoint Image 1 -->
			<div class="opt-row chide">
				<div class="opt-cell clabel"><span>Image 1:</span><span class="help glyphicon glyphicon-question-sign" data-help="img1" aria-hidden="true"></span>
				</div>
				<div class="opt-cell">
					<div class="input-group">
						<span class="input-group-addon" id="img2label">Local</span>
						<input type="text" class="form-control imgaddress" id="img1" name="img1" aria-describedby="img1label" placeholder="Demo-image-962.png">
					</div>
				</div>
			</div>
			<!-- Option Box 3: Breakpoint Image 2 -->
			<div class="opt-row chide">
				<div class="opt-cell clabel"><span>Image 2:</span><span class="help glyphicon glyphicon-question-sign" data-help="img2" aria-hidden="true"></span>
				</div>
				<div class="opt-cell">
					<div class="input-group">
						<span class="input-group-addon" id="img2label">Local</span>
						<input type="text" class="form-control imgaddress" id="img2" name="img2" aria-describedby="img2label" placeholder="Demo-image-575.png">
					</div>
				</div>
			</div>
			<div class="opt-row export chide">
				<div class="opt-cell clabel disabled">Export:</div>
				<div class="opt-cell">
					<button disabled class="btn btn-default cbutton" name="html">HTML</button>&nbsp;
					<button disabled class="btn btn-default cbutton" name="css">CSS</button>
				</div>
			</div>
			<div class="opt-row">
				<div class="opt-cell"><h4>Styling</h4></div>
				<div class="opt-cell rightAlign"><span class="showhide glyphicon glyphicon-plus-sign" aria-hidden="true"></span></div>
			</div>
			<div class="opt-row chide">
				<div class="opt-cell clabel">Show Drop Shadow</div>
				<div class="opt-cell">
					<select class="wide" name="dShadow">
						<option value="0">On Desktop and Mobile</option>
						<option value="1">Only on Desktop</option>
						<option value="2">Only on Mobile</option>
						<option value="3">On NEITHER</option>
					</select>
				</div>
			</div>
		</div>
	</div>`;
    $("body").prepend(html);
}

function buttonBehave() {
    // On radio button change
    $("input[name='lorr']").on("change", function () {
        var state = $(this).val();
        if (state == "local") {
            // Disable 'Brand'/'Export'
            $(".opt-row.brand .clabel").addClass("disabled");
            $(".opt-row.brand select").attr("disabled", "disabled");

            $("input[name='img1'], input[name='img2']").each(function () {
                var curr = $(this).val();
                if (curr !== "")
                    $(this).attr("data-remote", curr);

                if ($(this).data("local"))
                    $(this).val($(this).data("local"));

                $(this).siblings("span.input-group-addon").text("Local");
                if ($(this).attr("name") == "img1")
                    var size = 962;
                else
                    var size = 575;
                $(this).val("").attr("placeholder", "Demo-image-" + size + ".png");
            });
        }
        else if (state == "remote") {
            // Enable 'Brand'/'Export'
            $(".opt-row.brand .clabel").removeClass("disabled");
            $(".opt-row.brand select").removeAttr("disabled");

            $("input[name='img1'], input[name='img2']").each(function () {
                var curr = $(this).val();
                if (curr !== "")
                    $(this).attr("data-local", curr);

                if ($(this).data("remote"))
                    $(this).val($(this).data("remote"));

                if ($("select[name='brandSel']").val() == "") {
                    $(this).val("").attr("placeholder", "Select a brand below...");
                    $(this).siblings("span.input-group-addon").text("Remote");
                }
                else {
                    //					$( this ).siblings( "span.input-group-addon" ).text( "/images/1AB1/" + $( "select[name='brandSel']" ).val() + "/HomePage/" );
                    $(this).siblings("span.input-group-addon").text("/images/evergage/global/");
                    $(this).val("").attr("placeholder", "Enter Filename...");
                }
            });
        }
        $(".input-group").removeClass("found notfound");
    });

    $("select[name='brandSel']").on("change", function () {
        $("input[name='lorr']").trigger("change");
        $(".input-group").removeClass("found notfound");
    });

    $("button").on("click", function () {
        var type = $(this).attr("name");
        exportCode(type);
    });

    $("span.help").on("click", function () {
        var helpMsg = "";
        switch ($(this).data("help")) {
            case "img1": helpMsg = "For local testing, place a 962x430px image in the same directory as this HTML file and enter the filename here.<br>For remote testing, place a 962x430px image on the 'Production' FTP for the brand you are working on and enter the relative path, for example: 'E88/test-image.jpg'";
                break;
            case "img2": helpMsg = "For local testing, place a 575x683px image in the same directory as this HTML file and enter the filename here.<br>For remote testing, place a 575x683px image on the 'Production' FTP for the brand you are working on and enter the relative path, for example: 'E88/test-image.jpg'";
                break;
            case "req": helpMsg = "Whether this text is required for this offer. Certain text cannot be omitted.";
            default: break;
        }

        msgBox(helpMsg, "Help");
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
        if ($("input[name='lorr']:checked").val() == "remote") {
            if ($("input#img1").val() !== "" && $("input#img2").val() !== "" && $("select[name='brandSel']").val() !== "")
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
        if ($("input[type='text'][name='href']").val() !== "" && $("select[name='brandSel']").val() !== "") {
            if ($("input[type='checkbox'][name='linktest']").is(":checked")) {
                $("section.section-offer a").attr({
                    "href": websiteURL() + $("input[type='text'][name='href']").val(),
                    "target": "_blank"
                });
            }
            else {
                $("section.section-offer a").attr("href", "#").removeAttr("target");
            }
        }
    });

    // imgaddress
    $(".imgaddress").on("change", function () {
        checkImageExists(this, $(this).val());
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

function websiteURL() {
    var brand = $("select[name='brandSel']").val();
    var url = "";

    switch (brand) {
        case "PY": url = "https://www.paulayoung.com";
            break;
        case "EY": url = "https://www.especiallyyours.com";
            break;
        case "WIG": url = "https://www.wig.com";
            break;
        case "look": url = "https://www.thelook.fashion";
            break;
        default: break;
    }

    return url;
}

function imgURL(el, flag) {
    var domain = websiteURL();
    var fpath = $(el).siblings(".input-group-addon").text();
    if (fpath == "Local")
        fpath = "";
    var fname = $(el).val();
    if (flag)
        return domain + fpath + fname;
    else
        return fpath + fname;
}

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

function exportCode(type) {
    switch (type) {
        case "html": htmlExport();
            break;
        case "css": styleExport();
            break;
        default: break;
    }
}

function styleExport() {
    // Form the CSS
    var css = `section.section-offer { position: relative; width: 100%; } section.section-offer h2 { margin: 0; } section.section-offer img { height: auto; width: 100%; } @media screen and (min-width:576px) { section.py-shadow-b-lrg { box-shadow: 0 12px 9px -9px #aaa; } } @media screen and (max-width:575px) { section.py-shadow-b-sml { box-shadow: 0 12px 9px -9px #aaa; } }`;
    var html = "<textarea>" + css + "</textarea>";
    html += '<div class="faux-footer"><button class="copy btn btn-default">Copy To Clipboard</button></div>';
    msgBox(html, "CSS Export");
}

function htmlExport() {
    // Clone the html to a non visible area
    $("body").append("<div class='noSeeCode'></div>");
    $(".faux-website-container .container section").clone().appendTo(".noSeeCode");

    // Change out all the dummy sections for user input
    // Heading
    $(".noSeeCode img#section-offer-img").attr("alt", $("input[type='text'][name='heading']").val().replace(/'/g, "").replace(/"/g, ""));

    // Img
    var img1src = imgURL($(".imgaddress[name='img1']"), false);
    var img2src = imgURL($(".imgaddress[name='img2']"), false);
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

function msgBox(msg, title) {
    if (!title) title = "";
    var html = `
	<div id="msgBox" class="modal fade" tabindex="-1" role="dialog">
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

function reDraw() {
    // Update the background-image URLs
    var img1src = imgURL($(".imgaddress[name='img1']"), true);
    var img2src = imgURL($(".imgaddress[name='img2']"), true);

    // source 962
    $("picture source[media*='576']").attr("srcset", img1src);
    // source 575
    $("picture source[media*='575']").attr("srcset", img2src);
    // default src and data-srcset
    $("img#section-offer-img").attr("src", img1src).attr("data-srcset", img2src);
}

function escapeHTML(text) {
    var map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, function (m) { return map[m]; });
}