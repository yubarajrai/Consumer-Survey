(function () {

});

jQuery(document).ready(function(){
    /**
     * 
     * @param {getSiblings} elem 
     * @returns 
     */
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

    /**
     * @toggle_steps scripting
     */
     let togglePreviousClicker = document.querySelectorAll('[class*="toggle-previous-clicker-"]'),
        toggleNextClicker = document.querySelectorAll('[class*="toggle-next-clicker-"]');
     if (toggleNextClicker.length > 0) {
        toggleNextClicker.forEach((toggleNext, index) => {
            var countToggleNext = index,
                togglePreviousClickerClass = ".toggle-previous-clicker-" + countToggleNext,
                toggleNextClickerClass = ".toggle-next-clicker-" + countToggleNext,
                toggleStepBoxClass = ".toggle-step-box-" + countToggleNext,
                toggleStepBoxPreviousClass = ".toggle-step-box-" + (countToggleNext - 1),
                toggleStepBoxNextClass = ".toggle-step-box-" + (countToggleNext + 1),
                toggleStepBoxHolderClass = ".toggle-step-box-holder";
                
            jQuery(toggleNextClickerClass).on('click', function (e) {
                e.preventDefault();
                jQuery(toggleStepBoxNextClass).parents(toggleStepBoxHolderClass).addClass('visible').siblings().removeClass('visible');
                jQuery(toggleStepBoxNextClass).addClass('visible').siblings().removeClass('visible');
            });

            jQuery(togglePreviousClickerClass).on('click', function (e) {
                e.preventDefault();
                jQuery(toggleStepBoxPreviousClass).parents(toggleStepBoxHolderClass).addClass('visible').siblings().removeClass('visible');
                jQuery(toggleStepBoxPreviousClass).addClass('visible').siblings().removeClass('visible');
            });
        });
     }
});