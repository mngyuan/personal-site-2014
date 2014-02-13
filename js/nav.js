$( document ).ready( function() {
    $(window).resize(function() {
        resizeSideAndContent();
    });
    resizeSideAndContent();
});

function resizeSideAndContent() {
    var vpheight = $(window).height();
    $('#blog_sidebar, #blogcontent').css('height', vpheight);
    $('#sidebar_vcenter').css('height', vpheight - 2*parseInt($('#sidebar_vcenter').css('padding-top'), 10));
}