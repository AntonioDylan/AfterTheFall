$(document).on("click", ".btnClick", function() {

    let numPop = $(this).attr("data-numpop");
    let texte = $(this).attr("data-texte");
    $("." + numPop).show();
    $(".fondOpaque").show();
    $(".textNarrateur").text(texte);
    $(".blockNarrateur").show();

});

$(document).on("click", ".closeTextNarrateur", function() {
    $(".close").hide();
    $(".blockNarrateur").hide();
});