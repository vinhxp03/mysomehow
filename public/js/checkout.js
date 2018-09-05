window.onpageshow = function(event) {
    if (event.persisted) {
        var currentUrl = '';
        currentUrl = '/checkouts/7e4981d245d94b1ab0bfa41f6276dadd?step=1';
        if (currentUrl)
            window.location = currentUrl;
    }
};
var isInit = false;

function funcFormOnSubmit(e) {
    if (!isInit) {
        isInit = true;

        $.fn.tagName = function() {
            return this.prop("tagName").toLowerCase();
        };
    }

    if (typeof(e) == 'string') {
        var element = $(e);
        var formData = e;
    } else {
        var element = this;
        var formData = this;
        e.preventDefault();
    }

    $(element).find('button:submit').addClass('btn-loading');

    var formId = $(element).attr('id'),
        replaceElement = [],
        funcCallback;

    if (formId == undefined || formId == null || formId == '')
        return;



    if (formId == 'form_next_step') {
        formData = '.step-sections';
        replaceElement.push('.step-sections');
    } else if (
        formId == 'form_discount_add' ||
        formId == 'form_discount_remove' ||
        formId == 'form_update_location'

        ||
        formId == 'form_update_shipping_method'


        ||
        formId == 'section-shipping-rate'

    ) {
        replaceElement.push('#form_update_location');
        replaceElement.push('#change_pick_location_or_shipping');
        replaceElement.push('.inventory_location_data');
        replaceElement.push('.order-summary-toggle-inner .order-summary-toggle-total-recap');
        replaceElement.push('.order-summary-sections');

        replaceElement.push('#section-shipping-rate');

    }



    if (formId == 'form_update_location_customer_shipping') {
        formId = 'form_update_location';
        replaceElement.push('#form_update_location_customer_shipping');
        replaceElement.push('#change_pick_location_or_shipping');
        replaceElement.push('.inventory_location_data');
        replaceElement.push('.order-summary-toggle-inner .order-summary-toggle-total-recap');
        replaceElement.push('.order-summary-sections');
    }
    if (formId == 'form_update_location_customer_pick_at_location') {
        formId = 'form_update_location';
        replaceElement.push('#form_update_location_customer_pick_at_location');
        replaceElement.push('#change_pick_location_or_shipping');
        replaceElement.push('.inventory_location_data');
        replaceElement.push('.order-summary-toggle-inner .order-summary-toggle-total-recap');
        replaceElement.push('.order-summary-sections');
    }




    if (!$(formData) || $(formData).length == 0) {
        window.location.reload();
        return false;
    }

    if ($(formData).tagName() != 'form')
        formData += ' :input';

    /*$.ajax({
        type: 'GET',
        url: window.location.origin + window.location.pathname + '?' + $(formData).serialize() + encodeURI('&form_name=' + formId),
        success: function(html) {
            if ($(html).attr('id') == 'redirect-url') {
                window.location = $(html).val();
            } else {
                if (replaceElement.length > 0) {
                    for (var i = 0; i < replaceElement.length; i++) {
                        var tempElement = replaceElement[i];
                        var newElement = $(html).find(tempElement);

                        if (newElement.length > 0) {
                            if (tempElement == '.step-sections')
                                $(tempElement).attr('step', $(newElement).attr('step'));

                            var listTempElement = $(tempElement);

                            for (var j = 0; j < newElement.length; j++)
                                if (j < listTempElement.length)
                                    $(listTempElement[j]).html($(newElement[j]).html());
                        }
                    }
                }

                $('body').attr('src', $(html).attr('src'));
                $(element).find('button:submit').removeClass('btn-loading');

                if (($('body').find('.field-error') && $('body').find('.field-error').length > 0) ||
                    ($('body').find('.has-error') && $('body').find('.has-error').length > 0)) {
                    $("html, body").animate({
                        scrollTop: 0
                    }, "slow");
                }
                if (funcCallback)
                    funcCallback();
            }
        }
    }).fail(function() {
        $(element).find('button:submit').removeClass('btn-loading');
    });*/

    return false;
};

function funcSetEvent() {
    var effectControlFieldClass = '.field input, .field select, .field textarea';

    $('body')
        .on('focus', effectControlFieldClass, function() {
            funcFieldFocus($(this), true);
        })
        .on('blur', effectControlFieldClass, function() {
            funcFieldFocus($(this), false);
            funcFieldHasValue($(this), true);
        })
        .on('keyup input paste', effectControlFieldClass, function() {
            funcFieldHasValue($(this), false);
        })
        .on('submit', 'form', funcFormOnSubmit);




    $("#div_country_not_vietnam").hide();
    $("#is_vietnam_location").val("true");
    $("#div_location_country_not_vietnam").hide();



    $('body')
        .on('change', '#form_update_location_customer_shipping input[id=billing_address_city]', function() {
            $('#form_update_location_customer_shipping input[id=billing_address_city]').val($(this).val());
            return false;
        })
        .on('change', '#form_update_location_customer_shipping input[id=billing_address_zip]', function() {
            $('#form_update_location_customer_shipping input[id=billing_address_zip]').val($(this).val());
            return false;
        })
        .on('change', '#form_update_location_customer_shipping', function() {
            funcFormOnSubmit('#form_update_location_customer_shipping');
        })
        .on('change', '#form_update_location_customer_pick_at_location', function() {
            funcFormOnSubmit('#form_update_location_customer_pick_at_location');
        });


    $('body')

        .on('change', '#form_update_location select[name=customer_shipping_district]', function() {
            $('.section-customer-information input:hidden[name=customer_shipping_district]').val($(this).val());
        })
        .on('change', '#form_update_location select[name=customer_shipping_ward]', function() {
            $('.section-customer-information input:hidden[name=customer_shipping_ward]').val($(this).val());
        });



    $('body')
        .on('change', '#form_update_shipping_method input:radio', function() {
            $('#form_update_shipping_method .content-box-row.content-box-row-secondary').addClass('hidden');

            var id = $(this).attr('id');

            if (id) {
                var sub = $('body').find('.content-box-row.content-box-row-secondary[for=' + id + ']')

                if (sub && sub.length > 0) {
                    $(sub).removeClass('hidden');
                }
            }
        });




    $('body')
        .on('change', '#section-payment-method input:radio', function() {
            $('#section-payment-method .content-box-row.content-box-row-secondary').addClass('hidden');

            var id = $(this).attr('id');

            if (id) {
                var sub = $('body').find('.content-box-row.content-box-row-secondary[for=' + id + ']')

                if (sub && sub.length > 0) {
                    $(sub).removeClass('hidden');
                }
            }
        });
    $('body')
        .on('change', '#section-shipping-rate input:radio[name=shipping_rate_id]', function() {
            funcFormOnSubmit('#section-shipping-rate');
        });

    $('body')
        .on('change', '#form_update_shipping_method select[name=customer_shipping_country]', function() {
            var currentCountry = $(this).val();
            if (currentCountry && currentCountry != "null" && currentCountry != 241) {
                $("#is_vietnam_location").val("false");
                $("#div_location_country_not_vietnam").show();
            } else {
                $("#is_vietnam_location").val("true");
                $("#div_location_country_not_vietnam").hide();
            }
        })
        .on('change', '#form_update_shipping_method input:radio[name=customer_pick_at_location]', function() {
            var methodValue = $(this).val();

            if (methodValue && methodValue == 'false')
                $('.inventory_location').hide();
            else
                $('.inventory_location').show();

            $('#form_update_shipping_method').submit();
        })
        .on('change', '.inventory_location input:radio[name=inventory_location_id]', function() {
            $('.section-customer-information input:hidden[name=inventory_location_id]').val($(this).val());
        });


};

function funcFieldFocus(fieldInputElement, isFocus) {
    if (fieldInputElement == undefined)
        return;

    var fieldElement = $(fieldInputElement).closest('.field');

    if (fieldElement == undefined)
        return;

    if (isFocus)
        $(fieldElement).addClass('field-active');
    else
        $(fieldElement).removeClass('field-active');
};

function funcFieldHasValue(fieldInputElement, isCheckRemove) {
    if (fieldInputElement == undefined)
        return;

    var fieldElement = $(fieldInputElement).closest('.field');

    if (fieldElement == undefined)
        return;

    if ($(fieldElement).find('.field-input-wrapper-select').length > 0) {
        var value = $(fieldInputElement).find(':selected').val();

        if (value == 'null')
            value = undefined;
    } else {
        var value = $(fieldInputElement).val();
    }

    if (!isCheckRemove) {
        if (value != $(fieldInputElement).attr('value'))
            $(fieldElement).removeClass('field-error');
    }

    var fieldInputBtnWrapperElement = $(fieldInputElement).closest('.field-input-btn-wrapper');

    if (value && value.trim() != '') {
        $(fieldElement).addClass('field-show-floating-label');
        $(fieldInputBtnWrapperElement).find('button:submit').removeClass('btn-disabled');
    } else if (isCheckRemove) {
        $(fieldElement).removeClass('field-show-floating-label');
        $(fieldInputBtnWrapperElement).find('button:submit').addClass('btn-disabled');
    } else {
        $(fieldInputBtnWrapperElement).find('button:submit').addClass('btn-disabled');
    }
};

function funcInit() {
    funcSetEvent();


}
$(document).ready(function() {
    funcInit();
}); 