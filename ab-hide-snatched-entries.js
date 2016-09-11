// ==UserScript==
// @name         AB-hide-snatched-entries
// @namespace    AB-hide-snatched-entries
// @version      0.1
// @description  animebytes: hide info row (image/description/etc) for snatched torrent entries. toggle visibility by clicking "expand all".
// @author       glhfdd
// @match        https://animebytes.tv/torrents.php*
// @grant        none
// ==/UserScript==


$('a[href*="browse_nav_right"]').click(function() {
    href = $(this);
    txt = href.text();
    if (txt == 'Expand all' && !href.hasClass('pressed')) {
        href.addClass('pressed');
        $("[id*='group_']").each(function() {
            if ($(this).find('.snatched-torrent').text()) {
            $(this).hide();
            }
        });
    }
    else (txt == 'Expand all') {
        href.removeClass('pressed');
        $("[id*='group_']").show();
    }
});
