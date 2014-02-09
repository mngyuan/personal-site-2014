$( document ).ready( function() {
    $(window).resize(function() {
        resizeSideAndContent();
    });
    resizeSideAndContent();
});

function resizeSideAndContent() {
    var vpheight = $(window).height();
    $('#blog_sidebar, #blogcontent, #sidebar_vcenter').css('height', vpheight);
}