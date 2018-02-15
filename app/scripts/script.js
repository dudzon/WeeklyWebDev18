// https://github.com/sitepoint-editors/smooth-scrolling

initSmoothScrolling();

function initSmoothScrolling() {
    
    var duration = 200;
    
    var pageUrl = location.hash
        ? stripHash(location.href)
        : location.href;
    
    delegatedLinkHijacking();
    
    function delegatedLinkHijacking() {
        document.body.addEventListener('click', onClick, false);
        
        function onClick(e) {
            if (!isInPageLink(e.target))
                return;
            
            e.stopPropagation();
            e.preventDefault();
            
            jump(e.target.hash, {
                duration: duration,
            });
        }
    }

    function isInPageLink(n) {
        return n.tagName.toLowerCase() === 'a' 
            && n.hash.length > 0
            && stripHash(n.href) === pageUrl
        ;
    }
        
    function stripHash(url) {
        return url.slice(0, url.lastIndexOf('#'));
    }

}
