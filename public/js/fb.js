window.fbAsyncInit = function() {
    FB.init({
        appId      : '1948118188815962',
        xfbml      : true,
        version    : 'v2.6'
    });

    FB.Event.subscribe('messenger_checkbox', function(e) {
        console.log("messenger_checkbox event");
        console.log(e);

        if (e.event == 'rendered') {
            console.log("Plugin was rendered");
        } else if (e.event == 'checkbox') {
            var checkboxState = e.state;
            console.log("Checkbox state: " + checkboxState);
        } else if (e.event == 'not_you') {
            console.log("User clicked 'not you'");
        } else if (e.event == 'hidden') {
            console.log("Plugin was hidden");
        }
    });
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk')
);

function get_ref_param() {
    var data = {
        order_number: 3065396,
        type: 'receipt',
        recipient_name: document.querySelector('#person').value,
        'currency': 'CAD',
        payment_method: 'VISA', //Payment method is enough (ex: Visa)
        tickets: [
            {
                from : document.querySelector('#from').value,
                to: document.querySelector('#to').value,
                departure: document.querySelector('#departure').value,
                arrival: document.querySelector('#arrival').value,
                type: 'Adulte',
                quantity: 1,
                price: 59.99,
                currency: 'CAD',
            }
        ],
        promo: [
            {
                promo_name: '10% off for new customer',
                promo_amount: 5.99
            }
        ],
        summary: {
            subtotal: 59.99,
            taxes: 9,
            total: 69.99,
        }
    }
    return JSON.stringify(data);
}

function confirmOptIn() {
    var userRef = document.getElementById('fb-div').getAttribute('user_ref');
    var ref = get_ref_param()
    FB.AppEvents.logEvent('MessengerCheckboxUserConfirmation', null, {
      'app_id':'1948118188815962',
      'page_id':'637828299945812',
      'ref': ref,
      'user_ref': userRef
    });
}

function confirmOptInReminder(){
    var now = moment();
    var userRef = document.getElementById('fb-div').getAttribute('user_ref');
    var data = {
        order_number: 3065396,
        type: 'receipt',
        recipient_name: 'Marie',
        'currency': 'CAD',
        payment_method: 'VISA', //Payment method is enough (ex: Visa)
        tickets: [
            {
                from : 'Montréal',
                to: 'Trois-Rivière',
                departure: now.add(24, 'hours').add(2, 'minutes').format(),
                arrival: now.add(26, 'hours').format(),
                type: 'Adulte',
                quantity: 1,
                price: 59.99,
                currency: 'CAD',
            }
        ],
        promo: [
            {
                promo_name: '10% off for new customer',
                promo_amount: 5.99
            }
        ],
        summary: {
            subtotal: 59.99,
            taxes: 9,
            total: 69.99,
        }
    }
    var ref = JSON.stringify(data);
    FB.AppEvents.logEvent('MessengerCheckboxUserConfirmation', null, {
      'app_id':'1948118188815962',
      'page_id':'637828299945812',
      'ref': ref,
      'user_ref': userRef
    });
}

function confirmOptInOnboard(){
    var now = moment();
    var userRef = document.getElementById('fb-div').getAttribute('user_ref');
    var data = {
        order_number: 3065396,
        type: 'receipt',
        recipient_name: 'Marie',
        'currency': 'CAD',
        payment_method: 'VISA', //Payment method is enough (ex: Visa)
        tickets: [
            {
                from : 'Montréal',
                to: 'Trois-Rivière',
                departure: now.add(15, 'minutes').format(),
                arrival: now.add(2, 'hours').format(),
                type: 'Adulte',
                quantity: 1,
                price: 59.99,
                currency: 'CAD',
            }
        ],
        promo: [
            {
                promo_name: '10% off for new customer',
                promo_amount: 5.99
            }
        ],
        summary: {
            subtotal: 59.99,
            taxes: 9,
            total: 69.99,
        }
    }
    var ref = JSON.stringify(data);
    FB.AppEvents.logEvent('MessengerCheckboxUserConfirmation', null, {
      'app_id':'1948118188815962',
      'page_id':'637828299945812',
      'ref': ref,
      'user_ref': userRef
    });
}