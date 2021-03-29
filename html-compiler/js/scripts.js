(function () {

});

jQuery(document).ready(function(){
    /**
     * Form fields label handler
     */
    // var jsInput = jQuery("input, select, textarea");

    // jsInput.on('click focus', function() {
    //     jQuery(this).parents('li, p').addClass('edit');
    // });

    // jsInput.each(function(){
    //     var $select = $(this);
    //     if($select.val()) {
    //         $select.closest('li, p').addClass('edit');
    //     }
    // });

    /**
     * Rating script
     * */
     let ratingStar = document.querySelectorAll('.rate-box input[type*="radio"]');
     if (ratingStar.length > 0) {
         ratingStar.forEach(star => {
             star.addEventListener('click', function (e) {
                 getSiblings(this.parentElement).forEach(item => {
                     item.classList.remove('selected');
                 });
                 this.parentElement.classList.add('selected');
             });
         });
     }

     let getSiblings = function (elem) {
        // Setup siblings array and get the first sibling
        let siblings = [];
        let sibling = elem.parentNode.firstChild;
        // Loop through each sibling and push to the array
        while (sibling) {
            if (sibling.nodeType === 1 && sibling !== elem) {
                siblings.push(sibling);
            }
            sibling = sibling.nextSibling
        }
        return siblings;
    };
});