(function () {

});

jQuery(document).ready(function(){
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

    /**
     * Toggle scripting
     */
     let toggleClicker = document.querySelectorAll('[class*="toggle-clicker-"]');
     if (toggleClicker.length > 0) {
        toggleClicker.forEach((toggle, index) => {
            var countToggle = index + 1,
                toggleClickerClass = ".toggle-clicker-" + countToggle,
                toggleDataClass = ".toggle-data-" + countToggle,
                toggleDataSiblingClass = ".toggle-data-" + countToggle + "__sibling",
                toggleHolderClass = ".toggle-data-box-" + countToggle;
                
            jQuery(toggleClickerClass).on('change', function (e) {
                getSiblings(this.parentElement).forEach(item => {
                    item.classList.remove('selected');
                });
                this.parentElement.classList.add('selected');
                if(jQuery(toggleClickerClass).val() == "gaunpalika") {
                    jQuery(toggleDataSiblingClass).addClass("visible");
                    jQuery(toggleDataClass).removeClass("visible");
                    jQuery(toggleHolderClass).addClass('visible');
                } else if(jQuery(toggleClickerClass).val() == "12-15") {
                    jQuery(toggleDataClass).addClass("visible");
                } else if(jQuery(toggleClickerClass).val() == "mc-smc") {
                    jQuery(toggleDataClass).addClass("visible");
                    jQuery(toggleDataSiblingClass).removeClass("visible");
                    jQuery(toggleHolderClass).addClass('visible');
                } else {
                    jQuery(toggleDataClass).removeClass("visible");
                    jQuery(toggleDataSiblingClass).removeClass("visible");
                    jQuery(toggleHolderClass).removeClass('visible');
                }
            });
        });
     }

     /**
      * @MC_SMC Manipulate Cities
      */
        $.getJSON("../js-lib/mc-smc.json", function(json) {
            let districtBox = jQuery("#district"),
                mcSmcBox = jQuery("#mc-smc");
            districtBox.on("change", function(e) {
                // console.log(this.value);
                var cityParent = this.value;                
                var arr = $.map(json, function(item, key){
                    if(key == cityParent) {
                        mcSmcBox.html('');
                        item.forEach((city, index) => {
                            mcSmcBox.append('<li class="radio-field">'+
                            '<input type="radio" id="mc_msc_' + key + (index + 1) + '" name="mc_msc_' + key + (index + 1) + '" value="' + city + '">'+
                            '<label for="mc_msc_' + key + (index + 1) + '">' + city + '</label>'+
                            '</li>');
                        });
                    }

                    // item.set = json[item.set];
                    // console.log(key);
                    // return item;
                });
            });
        });

        /**
      * @MC_SMC Manipulate Cities
      */
         var occupation = jQuery('[name="occupation"]'),
         education = jQuery('[name="education"]'),
         secquota = jQuery('[name="sec_quota"] option');
         
         occupation.each(function(index, item) {
            console.log(`input${index}: ${this.id}`);
            itemId = `${this.id}`;
            jQuery("#" + itemId).on('click', function(e){
                sessionStorage.setItem("occupationData", this.value);
                $.ajax({url: "../js-lib/sec.json", success: function(result){

                    $.map(result, function(item, key){
                        item.sec.forEach((data, index) => {
                            console.log(sessionStorage.educationData);
                            console.log(sessionStorage.occupationData);
                            if((data.data[0] == sessionStorage.occupationData) && (data.data[1] == sessionStorage.educationData)) {
                                secquota.each(function(index, secItem) {
                                    if(secItem.value == data.data[2]) {
                                        secItem.setAttribute("selected","selected");

                                        getSiblings(secItem).forEach(item => {
                                            item.removeAttribute('selected');
                                        });
                                    }
                                })
                            }
                        });
                    }); 
                }});
             });
         })

         education.each(function(index, item) {
            console.log(`input${index}: ${this.id}`);
            itemId = `${this.id}`;
            jQuery("#" + itemId).on('click', function(e){
                sessionStorage.setItem("educationData", this.value);
                $.ajax({url: "../js-lib/sec.json", success: function(result){

                    $.map(result, function(item, key){
                        item.sec.forEach((data, index) => {
                            console.log(sessionStorage.occupationData);
                            console.log(sessionStorage.educationData);
                            if((data.data[0] == sessionStorage.occupationData) && (data.data[1] == sessionStorage.educationData)) {
                                secquota.each(function(index, secItem) {
                                    if(secItem.value == data.data[2]) {
                                        secItem.setAttribute("selected","selected");
                                        
                                        getSiblings(secItem).forEach(item => {
                                            item.removeAttribute('selected');
                                        });
                                    }
                                })
                            }
                        });
                    }); 
                }});
            });
        });
});