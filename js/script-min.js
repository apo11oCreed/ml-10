var patterns={1:[{pattern:"One Banner Layout",img:"img/fullwidth-1.png",copy:[{field:"Bold 24px",styles:"font-weight:bold;font-size:24px;"},{field:"Reg 24px",styles:"font-weight:regular;font-size:24px;"},{field:"Bold 24px",styles:"font-weight:bold;font-size:24px;"},{field:"Reg 12px",styles:"font-weight:regular;font-size:12px;"}]},{pattern:"One Banner Layout",img:"img/fullwidth-2.png",copy:[{field:"Reg 24px",styles:"font-weight:bold;font-size:24px;"},{field:"Bold 24px",styles:"font-weight:regular;font-size:24px;"},{field:"Reg 24px",styles:"font-weight:bold;font-size:24px;"},{field:"Reg 12px",styles:"font-weight:regular;font-size:12px;"},{field:"Reg 12px",styles:"font-weight:regular;font-size:12px;"}]}],2:[{pattern:"Two Banner Layout",img:"img/fullwidth-1.png",copy:[{field:"Bold 24px",styles:"font-weight:bold;font-size:24px;"},{field:"Reg 24px",styles:"font-weight:regular;font-size:24px;"},{field:"Bold 24px",styles:"font-weight:bold;font-size:24px;"},{field:"Reg 12px",styles:"font-weight:regular;font-size:12px;"}]},{pattern:"Two Banner Layout",img:"img/fullwidth-2.png",copy:[{field:"Reg 24px",styles:"font-weight:bold;font-size:24px;"},{field:"Bold 24px",styles:"font-weight:regular;font-size:24px;"},{field:"Reg 24px",styles:"font-weight:bold;font-size:24px;"},{field:"Reg 12px",styles:"font-weight:regular;font-size:12px;"},{field:"Reg 12px",styles:"font-weight:regular;font-size:12px;"}]}],3:[{pattern:"Three Banner Layout",img:"img/fullwidth-1.png",copy:[{field:"Bold 24px",styles:"font-weight:bold;font-size:24px;"},{field:"Reg 24px",styles:"font-weight:regular;font-size:24px;"},{field:"Bold 24px",styles:"font-weight:bold;font-size:24px;"},{field:"Reg 12px",styles:"font-weight:regular;font-size:12px;"}]},{pattern:"Three Banner Layout",img:"img/fullwidth-2.png",copy:[{field:"Reg 24px",styles:"font-weight:bold;font-size:24px;"},{field:"Bold 24px",styles:"font-weight:regular;font-size:24px;"},{field:"Reg 24px",styles:"font-weight:bold;font-size:24px;"},{field:"Reg 12px",styles:"font-weight:regular;font-size:12px;"},{field:"Reg 12px",styles:"font-weight:regular;font-size:12px;"}]}],4:[{pattern:"Four Banners Layout",img:"img/22boldcaps-22regcaps-22boldcaps_12regcaps.png",copy:[{field:"Bold 24px",styles:"font-weight:bold;font-size:24px;"},{field:"Reg 24px",styles:"font-weight:regular;font-size:24px;"},{field:"Bold 24px",styles:"font-weight:bold;font-size:24px;"},{field:"Reg 12px",styles:"font-weight:regular;font-size:12px;"}]},{pattern:"Four Banners Layout",img:"img/22boldcaps-22regcaps-22boldcaps_12regcaps_12regcaps.png",copy:[{field:"Bold 24px",styles:"font-weight:bold;font-size:24px;"},{field:"Reg 24px",styles:"font-weight:regular;font-size:24px;"},{field:"Bold 24px",styles:"font-weight:bold;font-size:24px;"},{field:"Reg 12px",styles:"font-weight:regular;font-size:12px;"},{field:"Reg 12px",styles:"font-weight:regular;font-size:12px;"}]},{pattern:"Four Banners Layout",img:"img/22boldcaps-22regcaps-22boldcaps_12regcaps.png",copy:[{field:"Bold 24px",styles:"font-weight:bold;font-size:24px;"},{field:"Reg 24px",styles:"font-weight:regular;font-size:24px;"},{field:"Bold 24px",styles:"font-weight:bold;font-size:24px;"},{field:"Reg 12px",styles:"font-weight:regular;font-size:12px;"}]},{pattern:"Four Banners Layout",img:"img/22boldcaps-22regcaps-22boldcaps_12regcaps_12regcaps.png",copy:[{field:"Bold 24px",styles:"font-weight:bold;font-size:24px;"},{field:"Reg 24px",styles:"font-weight:regular;font-size:24px;"},{field:"Bold 24px",styles:"font-weight:bold;font-size:24px;"},{field:"Reg 12px",styles:"font-weight:regular;font-size:12px;"},{field:"Reg 12px",styles:"font-weight:regular;font-size:12px;"}]},{pattern:"Four Banners Layout",img:"img/22boldcaps-22regcaps-22boldcaps_12regcaps.png",copy:[{field:"Bold 24px",styles:"font-weight:bold;font-size:24px;"},{field:"Reg 24px",styles:"font-weight:bold;font-size:24px;"},{field:"Bold 24px",styles:"font-weight:bold;font-size:24px;"},{field:"Reg 12px",styles:"font-weight:bold;font-size:24px;"}]},{pattern:"Four Banners Layout",img:"img/22boldcaps-22regcaps-22boldcaps_12regcaps_12regcaps.png",copy:[{field:"Bold 24px",styles:"font-weight:bold;font-size:24px;"},{field:"Reg 24px",styles:"font-weight:bold;font-size:24px;"},{field:"Bold 24px",styles:"font-weight:bold;font-size:24px;"},{field:"Reg 12px",styles:"font-weight:bold;font-size:24px;"},{field:"Reg 12px",styles:"font-weight:bold;font-size:24px;"}]}]},brands={paulayoung:[{baseUrl:"https://www.paulayoung.com",evergagePath:"py"}],especiallyyours:[{baseUrl:"https://www.especiallyyours.com",evergagePath:"ey"}],thelook:[{baseUrl:"https://www.thelook.fashion",evergagePath:"tl"}],wig:[{baseUrl:"https://www.wig.com",evergagePath:"wg"}],beyondextensions:[{baseUrl:"https://www.beyondextensions.com",evergagePath:"be"}]},globalSettings={selectBrand:"py",breakPoints:{desktop:"yes",mobile:"yes"},layoutMenu:1,bgDesktopPlaceholder:"Demo-image-962.png",bgMobilePlaceholder:"Demo-image-575.png",maxBannerNumber:function(e){var t=0;for(items in patterns)t++;return t},minBannerNumber:1,ordinals:[]},bannerTabsLegend="<legend><h3>Banners (max "+globalSettings.maxBannerNumber(patterns)+')</h3></legend><p>Click on the [ <span style="font-weight:700;">Banner ####</span> ] button to display the form. Hover over [ <span style="font-weight:700;">Banner ####</span> ] button(s) to view all controls. Click on the [ <span style="color:green;font-weight:700;">+</span> ] button to add another banner. Click on the [ <span style="color:red;font-weight:700;">x</span> ] button to remove a banner. <span style="text-transform:uppercase;">Note</span>: Changes to number of banners will require new selections of layout patterns for all previously assigned.</p></div></div><hr>';function buttonBehave1(e){$("select#brands,fieldset#props"+e.id+" select#onClickBehavior").on("change",(function(){"brands"==$(this).attr("name")?(globalSettings.selectBrand=$(":selected",this).val(),"remote"==e.resourceOrigin&&$("fieldset#props"+e.id+' input[name="lorr1_'+e.id+'"]').trigger("change")):displayOnClickBehavior($(":selected",this).val(),e)})),$('input[name="bpDesktop"],input[name="bpMobile"],fieldset#props'+e.id+' input[name="lorr1_'+e.id+'"]').on("change",(function(){var t=$(this).attr("name");if("bpDesktop"==t||"bpMobile"==t){var o=[],a=$(this).attr("name").substr(2);for(x in e.breakPoints.desktop=$('fieldset#breakpoints input[name="bpDesktop"]:checked').val(),e.breakPoints.mobile=$('fieldset#breakpoints input[name="bpMobile"]:checked').val(),Object.values(e.breakPoints))"no"==Object.values(e.breakPoints)[x]&&o.push(Object.values(e.breakPoints)[x]);o.length>1?($("fieldset#props"+e.id+' input[name="lorr1"]').closest(".row").addClass("disabled"),$("fieldset#props"+e.id+" input#bgDesktop,fieldset#props"+e.id+" input#bgMobile").closest(".row").addClass("disabled"),$("fieldset#props"+e.id+" input#bgDesktop,fieldset#props"+e.id+" input#bgMobile").prop({disabled:!0,required:!1})):"no"==$(this).val()?($("fieldset#props"+e.id+" input#bg"+a).prop({disabled:!0,required:!1}),$("fieldset#props"+e.id+" input#bg"+a).closest(".row").addClass("disabled"),$("fieldset#props"+e.id+' input[name="lorr1"]').closest(".row").removeClass("disabled")):($("fieldset#props"+e.id+" input#bg"+a).prop({disabled:!1,required:!0}),$("fieldset#props"+e.id+" input#bg"+a).closest(".row").removeClass("disabled"),$("fieldset#props"+e.id+' input[name="lorr1"]').closest(".row").removeClass("disabled"))}else e.resourceOrigin=$(this).val(),"local"==e.resourceOrigin?$("fieldset#props"+e.id+" input[name='bgDesktop'],fieldset#props"+e.id+" input[name='bgMobile']").each((function(){var t=$(this).val();if(""!==t&&$(this).attr("data-remote",t),$(this).data("local")&&$(this).val($(this).data("local")),$(this).siblings("fieldset#props"+e.id+" span.input-group-addon1").text("Enter local filename"),"bgDesktop"==$(this).attr("name"))var o=globalSettings.bgDesktopPlaceholder;else o=globalSettings.bgMobilePlaceholder;$(this).val("").attr("placeholder",o)})):"remote"==e.resourceOrigin&&$("fieldset#props"+e.id+" input[name='bgDesktop'],fieldset#props"+e.id+" input[name='bgMobile']").each((function(){var t=$(this).val();""!==t&&$(this).attr("data-local",t),$(this).data("remote")&&$(this).val($(this).data("remote")),""==$("select[name='brands']").val()?($(this).val("").attr("placeholder","Select a brand"),$(this).siblings("fieldset#props"+e.id+" span.input-group-addon1").text("Enter remote filename")):($(this).siblings("fieldset#props"+e.id+" span.input-group-addon1").text("/images/evergage/"+globalSettings.selectBrand+"/"),$(this).val("").attr("placeholder","Enter Filename..."))})),$(".input-group1").removeClass("found notfound"),$(".input-group1").next(".error").attr("hidden",!0)})),$("input#r,input#g,input#b").on("input",(function(){var t=$(this).val();Number(t)>250?($(this).addClass("error"),$(this).parent().next(".error").html("Max value is 250"),$(this).parent().next(".error").attr("hidden",!1)):Number(t)<0?($(this).addClass("error"),$(this).parent().next(".error").html("Min value is 0"),$(this).parent().next(".error").attr("hidden",!1)):($(this).removeClass("error"),$(this).parent().next(".error").html(""),$(this).parent().next(".error").attr("hidden",!0),e.bgColor.r=$("input#r").val(),e.bgColor.g=$("input#g").val(),e.bgColor.b=$("input#b").val())})),$("button[name='exporthtml'],button[name='exportcss'],fieldset[id*='props'] button[name='chooseLayout']").on("click",(function(){var t=$(this).attr("name");"chooseLayout"==t?1==globalSettings.layoutMenu?msgBox1('<div class="container">'+chooseLayoutMenuBuilder(["1","2","3","4"])+"</div>","Choose a Layout Type",e):2==globalSettings.layoutMenu?msgBox1('<div class="container">'+chooseLayoutMenuBuilder(["2"])+"</div>","Choose a Layout Type",e):3==globalSettings.layoutMenu?msgBox1('<div class="container">'+chooseLayoutMenuBuilder(["3"])+"</div>","Choose a Layout Type",e):4==globalSettings.layoutMenu?msgBox1('<div class="container">'+chooseLayoutMenuBuilder(["4"])+"</div>","Choose a Layout Type",e):alert("Layout patterns not available for this number of banners."):exportCode1(t)})),$("span.help1").on("click",(function(){var e="";switch($(this).data("help")){case"desktop":e='For local testing, place a 962x430px image in the same directory as this HTML file and enter the filename here <i style="font-style:serif;color:#a1a1a1; ">(png,gif,jpg)</i>.<br>For remote testing, place a 962x430px image on the "Production" FTP for the brand you are working on and enter the relative path, for example: "E88/test-image.jpg"';break;case"mobile":e='For local testing, place a 575x683px image in the same directory as this HTML file and enter the filename here <i style="font-style:serif;color:#a1a1a1; ">(png,gif,jpg)</i>.<br>For remote testing, place a 575x683px image on the "Production" FTP for the brand you are working on and enter the relative path, for example: "E88/test-image.jpg"';break;case"rgb":e="Enter a number value between the range of 0-250 for each of the RGB fields.";break;case"required":e="Whether this text is required for this offer. Certain text cannot be omitted."}console.log(e),msgBox1(e,"Help")})),$("input, select, textarea").on("change",(function(){confirmAllRequiredMet()})),$(".bgimgaddress").on({focus:function(){$(this).parent().removeClass("found notfound"),$(this).parent().next().attr("hidden",!1)&&$(this).parent().next().attr("hidden",!0)},focusout:function(){0!=$(this).val()&&checkImageExists1(this,$(this).val())}})}function chooseLayoutMenuBuilder(e){for(var t="",o=0;o<e.length;o++){t+="<h2>"+patterns[e[o]][0].pattern+"</h2>";for(var a=0;a<patterns[e[o]].length;a++)a!==patterns.length-1?t+='<div class="row"><div class="col-xs-12"><label for="'+a+'">Pattern '+Number(a+1)+'</label>&nbsp;&nbsp;<input data-family-pattern="'+patterns[e[o]][0].pattern+'" data-family-code="'+e[o]+'" id="'+a+'" name="pattern" type="radio" value="'+a+'">&nbsp;&nbsp;<img src="'+patterns[e[o]][a].img+'"></div></div><br>':t+='<div class="row"><div class="col-xs-12"><label for="'+a+'">Pattern '+Number(a+1)+'</label>&nbsp;&nbsp;<input data-family-pattern="'+patterns[e[o]][0].pattern+'" data-family-code="'+e[o]+'" id="'+a+'" name="pattern" type="radio" value="'+a+'">&nbsp;&nbsp;<img src="'+patterns[e[o]][a].img+'"></div></div>'}return t}function websiteURL1(){var e="";switch($("select[name='brands']").val()){case"py":e="https://www.paulayoung.com";break;case"ey":e="https://www.especiallyyours.com";break;case"wg":e="https://www.wig.com";break;case"tl":e="https://www.thelook.fashion"}return e}function imgURL1(e,t){var o=websiteURL1(),a=$(e).siblings(".input-group-addon1").text();"Enter local filename"==a&&(a="");var n=$(e).val();return t?o+a+n:a+n}function checkImageExists1(e,t){var o=new Image;o.onload=function(){$(e).parent().addClass("found"),$(e).parent().next().prop("hidden",!0),reDraw1()},o.onerror=function(){$(e).parent().addClass("notfound"),$(e).parent().next().prop("hidden",!1)},o.src=imgURL1(e,!0)}function exportCode1(e){switch(e){case"exporthtml":htmlExport1();break;case"exportcss":styleExport1()}}function styleExport1(){msgBox('<textarea>section.section-offer { position: relative; width: 100%; } section.section-offer h2 { margin: 0; } section.section-offer img { height: auto; width: 100%; } @media screen and (min-width:576px) { section.py-shadow-b-lrg { box-shadow: 0 12px 9px -9px #aaa; } } @media screen and (max-width:575px) { section.py-shadow-b-sml { box-shadow: 0 12px 9px -9px #aaa; } }</textarea><div class="faux-footer"><button class="copy btn btn-default">Copy To Clipboard</button></div>',"CSS Export")}function htmlExport1(){$("body").append("<div class='noSeeCode'></div>"),$(".faux-website-container .container section").clone().appendTo(".noSeeCode"),$(".noSeeCode img#section-offer-img").attr("alt",$("input[type='text'][name='heading']").val().replace(/'/g,"").replace(/"/g,""));var e=imgURL1($(".imgaddress[name='bgDesktop']"),!1),t=imgURL1($(".imgaddress[name='bgMobile']"),!1);$(".noSeeCode picture source[media*='576']").attr("srcset",e),$(".noSeeCode picture source[media*='575']").attr("srcset",t),$(".noSeeCode img#section-offer-img").attr("src",e).attr("data-srcset",t),1==$("input[type='checkbox'][name='body']:checked").length?$(".noSeeCode .body").text($("textarea[name='body']").val()):$(".noSeeCode .body").remove(),1==$("input[type='checkbox'][name='coupon']:checked").length?$(".noSeeCode .coupon").text($("input[type='text'][name='coupon']").val()):$(".noSeeCode .coupon").remove(),0==$("input[type='checkbox'][name='body']:checked").length&&0==$("input[type='checkbox'][name='coupon']:checked").length&&($(".noSeeCode #offer-description").remove(),$(".noSeeCode img#section-offer-img").removeAttr("aria-describedby")),$(".noSeeCode a").attr("href",$("input[type='text'][name='href']").val()),$(".noSeeCode a").removeAttr("target");var o="<textarea>"+escapeHTML($(".noSeeCode")[0].innerHTML)+"</textarea>";msgBox(o+='<div class="faux-footer"><button class="copy btn btn-default">Copy To Clipboard</button></div>',"HTML Export");var a=$(".modal textarea").val();a=a.replace(/(?:(?:\r\n|\r|\n)\s*){2}/gm,""),$(".modal textarea").val(a),console.log($(".noSeeCode")),$(".noSeeCode").remove()}function msgBox1(e,t,o){"undefined"!=typeof id&&id,t||(t="");var a=`<div id="msgBox" class="modal fade" tabindex="-1" role="dialog">\n\t\t<div class="modal-dialog" role="document">\n\t\t\t<div class="modal-content">\n\t\t\t\t<div class="modal-header">\n\t\t\t\t\t<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n\t\t\t\t\t<h4 class="modal-title">${t}</h4>\n\t\t\t\t</div>\n\t\t\t\t<div class="modal-body">\n\t\t\t\t\t${e}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>`;$("body").append(a),$("#msgBox").modal("show"),"0000"!=o.id?($("#msgBox").addClass("full-width"),$('input[name="pattern"]').first().prop("checked",!0),$("#msgBox").on("hide.bs.modal",(function(e){displayContentForm($('input[name="pattern"]:checked'),o.id,o.ordinal)}))):$("#msgBox").removeClass("full-width")}function reDraw1(){var e=imgURL1($(".bgimgaddress[name='bgDesktop']"),!0),t=imgURL1($(".bgimgaddress[name='bgMobile']"),!0);$("picture source[media*='576']").attr("srcset",e),$("picture source[media*='575']").attr("srcset",t),$("img#section-offer-img").attr("src",e).attr("data-srcset",t)}function escapeHTML1(e){var t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"};return e.replace(/[&<>"']/g,(function(e){return t[e]}))}function randomId(e,t){return Math.floor(Math.random()*(t-e)+e)}function displayContentForm(e,t,o){$("fieldset#props"+t+" div#samples > span.dynamic").html(""),$("fieldset#props"+t+" div#content > span.dynamic").html(""),$(".row.text-render span.dynamic").html("");for(var a=patterns[e.data("family-code")][e.attr("id")],n=Number(e.attr("id"))+1,i="<h4>Pattern "+n+" of "+e.data("family-pattern")+'</h4><div class="row"> <div class="col-xs-12"> <img src="'+a.img+'" alt=""></div>',s=a.copy,l="",r=0;r<s.length;r++)l+=' <div><label for="copy'+(r+1)+'"></label> <br><input id="copy'+(r+1)+'" name="copy'+(r+1)+'" placeholder="text '+(r+1)+'" type="text"></div>';$("fieldset#props"+t+" div#samples > span.dynamic").append(i),$("fieldset#props"+t+" div#content > span.dynamic").append('<hr><h4>Copy</h4><div class="row"><h5 class="col-xs-12">Enter your copy for Pattern '+n+" of "+e.data("family-pattern")+'</h5><p class="col-xs-12">If this banner does not require copy, then leave these fields blank.</p></div><div class="row-fluid enter-text-banner flex-it">'+l+"</div><br>"),$(".row.text-render span.dynamic").append('<div id="'+t+'" data-ordinal="'+o+'"></div>'),renderedTextInputs=document.querySelectorAll("fieldset#props"+t+" div#content > span.dynamic input"),renderedTextInputs.forEach((function(e,t){$(".row.text-render span.dynamic div").append('<span id="text-render-'+t+'" style="'+s[t].styles+'"></span>&nbsp;'),renderCopyFields(e,t)}))}function renderCopyFields(e,t){$(e).on("input",(function(o){var a=$(e).val();a!=$(".row.text-render span.dynamic span#text-render-"+t).text()?$(".row.text-render span.dynamic span#text-render-"+t).text(a):$(".row.text-render span.dynamic span#text-render-"+t).append(String.fromCharCode(o.which))}))}function displayOnClickBehavior(e,t){$(".row.onclickbehavior span.dynamic").html("");switch(e){case"fireModal":t.onClickBehavior='<fieldset id="modalDefs" class="row"> <legend> <h3>Modal</h3> </legend> <div class="col-xs-6"> <div class="row enter-text-modal flex-it"> <div> <label for="modalHeader">Modal Header</label> <br><input id="modalHeader" name="modalHeader" placeholder="For free standard shipping on orders of $59 or more, &hellip;" type="text" size="50" maxlength="50"></div><br><div> <label for="modalBody">Modal Body<span class="required">*</span></label> <br><textarea name="modalBody" id="modalBody" cols="50" rows="10" placeholder="Free shipping offer excludes&hellip; Not valid in conjuction with any other offer." required></textarea> </div><br><div> <label for="modalExpires">Modal Expires</label> <br><input id="modalExpires" name="modalExpires" placeholder="*Offer expires 8/7/20 at 11:59 pm PDT." type="text" size="50" maxlength="50"></div></div></div><div class="col-xs-6"> <span class="example-modal"> <h4>Example Modal</h4> <img src="https://www.paulayoung.com/images/evergage/py/lightbox/sitewide-c07.gif" alt="Example modal"> </span> </div></fieldset>';break;case"linkToPage":t.onClickBehavior='<br><div class="row"> <div class="col-xs-3"><label for="offerLink">Link to another page:<span class="required">*</span></label></div><div class="col-xs-6"> <input id="offerLink" placeholder="/category/wigs/all-wigs.do" type="text" style="width:100%" required></div></div>';break;case"linkToAnchor":t.onClickBehavior='<br><div class="row"> <div class="col-xs-3"><label for="anchorLink">Link to point on same page:<span class="required">*</span></label></div><div class="col-xs-6"> <input id="anchorLink" placeholder="#anchor" type="text" required></div></div>';break;case"doNothing":t.onClickBehavior="<br><p>This will be a static banner.</p>"}$("fieldset#props"+t.id+" .row.onclickbehavior span.dynamic").append(t.onClickBehavior),$("fieldset#props"+t.id+" .row.onclickbehavior span.dynamic input,fieldset#props"+t.id+" .row.onclickbehavior span.dynamic textarea").on("change",confirmAllRequiredMet)}function confirmAllRequiredMet(){for(var e=[],t=[],o=$(":required"),a=0;a<o.length;a++)""==o[a].value?e.push(Number(a)+":"+o[a].getAttribute("id")):t.push(Number(a)+":"+o[a].getAttribute("id"));e.length<1?$("button[name='exporthtml'],button[name='exportcss']").prop("disabled",!1):$("button[name='exporthtml'],button[name='exportcss']").prop("disabled",!0)}function showBanner(e){var t=$(e).closest("[data-ordinal]").attr("id").substr(5);$('fieldset[id*="props"],button.banner-tabs').removeClass("show"),$("fieldset#props"+t).addClass("show"),$(e).addClass("show"),buttonBehave1(bannerObj(t,$(e).closest("span").data("ordinal")))}function addBanner(e){for(var t,o=$(".banner-tabs"),a=randomId(1e3,9999),n=0;n<o.length;n++)t=a==$(o[n]).closest("span").attr("id")?new bannerObj(a=randomId(1e3,9999),o.length):new bannerObj(a,o.length);$("div#samples > span.dynamic").html('<a href="#layouts" style="color:blue;text-decoration:underline;">*Select Layout first.</a>'),$("div#content > span.dynamic").html(""),t.render(),o=$(".banner-tabs"),globalSettings.layoutMenu=Number(o.length),t.visibleIndex($(".banner-tabs"))==globalSettings.maxBannerNumber(patterns)&&$("button.add-button").attr("hidden",!0),globalSettings.ordinals=[],$("[data-ordinal]").each((function(){globalSettings.ordinals.push($(this).data("ordinal"))}))}function removeBanner(e){var t,o=$(e).closest('[id*="tabbs"]').attr("id").substr(5);$("#tabbs"+o).remove(),$("fieldset#props"+o).remove(),$("div#samples > span.dynamic").html('<a href="#layouts" style="color:blue;text-decoration:underline;">*Select Layout first.</a>'),$("div#content > span.dynamic").html(""),$("button.add-button").attr("hidden",!1),t=$(".banner-tabs"),globalSettings.layoutMenu=Number(t.length),t.length==globalSettings.minBannerNumber&&$("button.subtract-button").attr("hidden",!0),globalSettings.ordinals=[],$("[data-ordinal]").each((function(){globalSettings.ordinals.push($(this).data("ordinal"))}))}function bannerObj(e,t){return{id:e,breakPoints:{desktop:"yes",mobile:"yes"},visibleIndex:function(e){return e.length},ordinal:t,resourceOrigin:"local",remoteBuild:!1,localBuild:!0,bgImageDesktop:"",bgImageMobile:"",bgColor:{r:184,g:117,b:174},onClickBehavior:"doNothing",render:function(){$('input[name="lorr1_'+this.id+'"]').first().prop("checked",!0),$("form > span.dynamic").append(bannerFormHTML(this)),$("fieldset#bannerTabs span.dynamic .row-fluid.flex-it").append(bannerTabsHTML(this)),$("button.subtract-button").attr("hidden",!1)}}}function bannerFormHTML(e){return'<fieldset id="props'+e.id+'" class="row banner-properties"> <legend> <h2>Banner '+e.id+' Properties</h2> </legend> <div class="col-xs-12"> <span class="dynamic"></span> <div class="row"> <div class="col-xs-12"> <div class="row-fluid"> <fieldset id="layouts"> <legend> <h3>Layout</h3> </legend> <button type="button" id="chooseLayout_'+e.id+'" name="chooseLayout">Choose a layout</button> </fieldset> <fieldset id="patterns"> <legend> <h3>Content</h3> </legend> <div id="samples"> <span class="dynamic"><a href="#layouts" style="color:blue;text-decoration:underline;">*Select Layout first.</a></span> </div><div id="content"> <span class="dynamic"></span> </div></fieldset> </div></div></div><div class="row"> <div class="col-xs-12"> <fieldset id="content"> <legend> <h3>Background</h3> </legend> <div class="row"> <div class="col-xs-12"> <h5>Enter the background details.</h5> </div></div><div class="row"> <div class="col-xs-3"><label for="local1">Local</label> <input id="local1" name="lorr1_'+e.id+'" type="radio" value="local" checked></div><div class="col-xs-3"><label for="remote1">Remote</label> <input id="remote1" name="lorr1_'+e.id+'" type="radio" value="remote"></div></div><div class="row"> <div class="col-xs-12"> <div class="row"> <div class="col-xs-3"><label for="bgDesktop">Image for desktop breakpoint <span class="help1 glyphicon glyphicon-question-sign" data-help="desktop" aria-hidden="true"></span>:<span class="required">*</span></label> </div><div class="col-xs-6 input-group1"> <span class="input-group-addon1" id="img2label">Enter local filename</span> <input id="bgDesktop" class="bgimgaddress form-control1" type="text" name="bgDesktop" placeholder="'+globalSettings.bgDesktopPlaceholder+'" required></div><div class="col-xs-3 error" hidden>Image not found</div></div><div class="row"> <div class="col-xs-3"><label for="bgMobile">Image for mobile breakpoint <span class="help1 glyphicon glyphicon-question-sign" data-help="mobile" aria-hidden="true"></span>:<span class="required">*</span></label> </div><div class="col-xs-6 input-group1"> <span class="input-group-addon1" id="img2label">Enter local filename</span> <input id="bgMobile" class="bgimgaddress form-control1" type="text" name="bgMobile" placeholder="'+globalSettings.bgMobilePlaceholder+'" required></div><div class="col-xs-3 error" hidden>Image not found</div></div></div></div><div class="row"> <div class="col-xs-3"><label for="bgColor">Background color <span class="help1 glyphicon glyphicon-question-sign" data-help="rgb" aria-hidden="true"></span>:</label><span class="required">*</span></div><div class="col-xs-6 input-group1"><span class="input-group-addon1" id="img2label">R</span> <input id="r" class="bgcolor" placeholder="###" type="number" width="10" minlength="3" maxlength="3" required><span class="input-group-addon1" id="img2label">G</span><input id="g" class="bgcolor" placeholder="###" type="number" width="10" maxlength="3" required><span class="input-group-addon1" id="img2label">B</span><input id="b" class="bgcolor" placeholder="###" type="number" width="10" maxlength="3" required></div><div class="col-xs-3 error" hidden></div></div><hr> <div class="row"> <div class="col-xs-3"> <label for="onClickBehavior">OnClick behavior:<span class="required">*</span></label></div><div class="col-xs-2"> <select name="onClickBehavior" id="onClickBehavior" required> <option value="">-- select --</option> <option value="fireModal">Fire modal</option> <option value="linkToPage">Link to page</option> <option value="linkToAnchor">Link to anchor</option> <option value="doNothing">Do nothing </option> </select></div></div><div class="row onclickbehavior"> <div class="col-xs-12"> <span class="dynamic"></span> </div></div></fieldset> </div></div></div></fieldset>'}function bannerTabsHTML(e){return'<div id="tabbs'+e.id+'" class="col-xs-3" data-ordinal="'+e.ordinal+'"><span class="controls-add-subtract"><button type="button" class="subtract-button" onClick="removeBanner(this)" style="color:red;">x</button><button type="button" class="add-button" onClick="addBanner(this)"style="color:green;">+</button></span><span class="controls-ordinals"><button type="button" class="controls-ordinals left"><</button><button type="button" class="banner-tabs" name="bannertab" onClick="showBanner(this)">Banner '+e.id+'</button><button type="button" class="controls-ordinals right">></button></span><div>'}$(document).ready((function(){var e=randomId(1e3,9999);$(document).on("hidden.bs.modal",".modal",(function(){$(this).remove()})),$("#bannerTabs").prepend(bannerTabsLegend),$("#bannerTabs span.dynamic").append('<div class="row-fluid flex-it"></div>');var t=new bannerObj(e,0);t.render(),$("button.subtract-button").attr("hidden",!0),$("button#form-reset").on("click",(function(){$("fieldset#bannerTabs span.dynamic .row-fluid.flex-it,form > span.dynamic").html(""),(t=new bannerObj(randomId(1e3,9999),0)).render(),$("button.subtract-button").attr("hidden",!0)}))}));