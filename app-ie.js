//UTILS
var confirmation_email_js = function(email, subject, content, header) {
  $.ajax({
    type: 'POST',
    url: 'https://mandrillapp.com/api/1.0/messages/send-template.json',
    data: {
      "key": "09BuEv7HxD9K4M-ROGIpiw",
      "template_name": "default-template",
      "template_content": [
        {
          "name": "",
          "content": ""
        }
      ],
      "message": {
        "subject": subject,
        "from_email": "websales@tufenkian.com",
        "to": [
          {
            "email": email,
            "type": "to"
          }
        ],
        "merge_language": "handlebars",
        "global_merge_vars": [
          {
            "name": "user",
            "content": header
          },
          {
            "name": "subject",
            "content": subject
          },
          {
            "name": "content",
            "content": content
          },
        ]
      }
    }
  })
}

$(document).ready(function() {
  var setupWishlButton = function() {
    document.getElementById("wishl-loading").innerHTML = 
    "<p>No items in your list.</p><br />" + 
    "<a href='/collections/closeout-sale' style='text-decoration: none;'><div class='hover-button-two black'>Continue Shopping</div><div class='button-underline-container'><div class='button-underline black'></div></div></a>"
    $(".collection-description").append("<p>Here you can manage your wishlists and create lists for different projects or for different rooms in your home. When you add a rug to your wishlist by clicking on the heart icon, it will show up here. You can create as may lists as you’d like and sort items to whatever list you choose. The share function lets you share any list with friends and clients, even if they don’t have a Tufenkian.com account.</p>")
  }
  if (window.location.href.indexOf("wishl-wishlist") !== -1) {
    var getWishlHookIn = setInterval(function() {
      if(document.getElementById("wishl-loading")) {
        setupWishlButton()
        clearInterval(getWishlHookIn)
      }
    }, 0)
  }

})

var maximizer_api_js = function(request) {
  var form_data = {
      "LastName": request["LastName"],
      "FirstName": request["FirstName"],
      "Email": request["Email"],
      "Phone": request["Phone"],
      "AddressLine1": request["AddressLine1"],
      "AddressLine2": request["AddressLine2"],
      "ZipCode": request["ZipCode"],
      "City": request["City"],
      "StateProvince": request["StateProvince"],
      "CompanyName": request["CompanyName"],
      "ContactInvoicing": request["ContactInvoicing"],
      "ContactReceiving": request["ContactReceiving"],
      "SocialMedia": request["SocialMedia"],
      "TypeEntity": request["TypeEntity"],
      "StateResale": request["StateResale"],
      "ResaleTax": request["ResaleTax"],
      "YearsBusiness": request["YearsBusiness"],
      "Affiliations": request["Affiliations"],
      "Showroom": request["Showroom"],
      "MarketingChannel": request["Website"],
      "SalesRep": request["SalesRep"],
      "SearchTerm": request["SearchTerm"],
      "ProductURL": request["ProductURL"],
      "ProductID": request["ProductID"]
    }
    console.log("pre-server NEW.")
    console.log(form_data["ResaleTax"], form_data["StateResale"])
  $.ajax({
    type: "POST",
    url: "https://test-server-maximizer.herokuapp.com/",
    contentType: "application/json",
    dataType: "json",
    data: JSON.stringify(form_data)
  })
}

var valid_email_js = function(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email)
}

//FORM HEADERS
$(document).ready(function() {
  var displayFormNotification = function(text) {
    $("#notification-text").text(text)
    $("#notification").addClass("active")
    setTimeout(function() {
      $("#notification").removeClass("active")
    }, 2000) 
  }
  if(window.location.href.indexOf("errorcode") !== -1) { //errorcode=4
    if(window.location.href.indexOf("errorcode=4") !== -1) {
      displayFormNotification("Please provide a valid email address.")
    } else {
      displayFormNotification("Email already in subscriber list.")
    }
    
  }
  if(window.location.href.indexOf("formsuccess") !== -1) {
    displayFormNotification("Thank you for your interest. A support representative will be in touch.")
  }
  if(window.location.href.indexOf("subscribesuccess") !== -1) {
    displayFormNotification("Subscribed!")
  }
  if(window.location.href.indexOf("recover") !== -1) { //not working for success redirects.
    if(!$($($($(".forgot-hook-in").children()[0]).children()[0]).children()[0]).text()) {
      displayFormNotification("Password reset link sent!")
    } else {
      displayFormNotification($($($($(".forgot-hook-in").children()[0]).children()[0]).children()[0]).text())
    }
    
  }
})

//MAPS
$(document).ready(function() {
  var displayFormNotification = function(text) {
    $("#notification-text").text(text)
    $("#notification").addClass("active")
    setTimeout(function() {
      $("#notification").removeClass("active")
    }, 2000) 
  }
  if(window.location.href.indexOf("errorcode") !== -1) { //errorcode=4
    if(window.location.href.indexOf("errorcode=4") !== -1) {
      displayFormNotification("Please provide a valid email address.")
    } else {
      displayFormNotification("Email already in subscriber list.")
    }
    
  }
  if(window.location.href.indexOf("formsuccess") !== -1) {
    displayFormNotification("Thank you for your interest. A support representative will be in touch.")
  }
  if(window.location.href.indexOf("subscribesuccess") !== -1) {
    displayFormNotification("Subscribed!")
  }
  if(window.location.href.indexOf("recover") !== -1) { //not working for success redirects.
    if(!$($($($(".forgot-hook-in").children()[0]).children()[0]).children()[0]).text()) {
      displayFormNotification("Password reset link sent!")
    } else {
      displayFormNotification($($($($(".forgot-hook-in").children()[0]).children()[0]).children()[0]).text())
    }
    
  }
})

//CONTACT FORM
$(document).ready(function() {
  var sendToMaximizer = maximizer_api_js
  var sendConfirmation = confirmation_email_js

  var createMTI_contact = function(input) {
    return (
      '"MTI: Web Inquiry" \n'
      +
      '"BUSINESS_PEOPLE","1","147","E-mail Address" \n'
      +
      '"IDV_FIRM","Leads\\Lead status","Sales_lead","First_Name","Last_Name","E-mail Address","P_Phone_1","Address_Line_1","City","StateProvince","ZipPostal_Code","NOTE","Leads\\GetNewsletter","Leads\\ReferringURL","Leads\\Browser","Leads\\SearchTerm","Leads\\TrackingCodeFormsLT","Leads\\FormName","Leads\\IP","Leads\\MarketingChannel","Leads\\ProductURL","Leads\\ProductID","Leads\\Showroom","Leads\\Facebook","Leads\\CallMe","Leads\\TimeFrame","Leads\\Designer","Leads\\EntrancePage","Leads\\2x3Number" \n'
      +
      '"ALPHA-1","Table-5","Table-5","ALPHA-59","ALPHA-59","ALPHA-255","ALPHA-21","ALPHA-59","ALPHA-59","ALPHA-59","ALPHA-59","ALPHA-9000","Table-5","ALPHA-59","ALPHA-59","ALPHA-59","ALPHA-59","ALPHA-59","ALPHA-59","ALPHA-59","ALPHA-59","ALPHA-59","ALPHA-59","Table-5","Table-5","ALPHA-59","Table-5","ALPHA-59","ALPHA-59" \n'
      + 
      '"1","Suspended","Yes","'+ input.firstname +'","'+ input.lastname +'","'+ input.email +'","'+ input.phone +'","NA","NA","NA","NA","'+ input.comments +'","'+ input.subscribe +'","NA","AppleMAC-Safari","NA","NA","ContactUs","74.95.35.228","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA"'
    )
  }

  var createEmail_contact = function(input) {
    return (
      {
        subject: "Contact Us / "+ input.firstname + " "+ input.lastname +" /" + Date.now(),
        content: "1. First Name: " + input.firstname + "<br />"  +
                  "2. Last Name: " + input.lastname + "<br />"  +
                  "3. Email: " + input.email + "<br />"  +
                  "4. Phone: " + input.phone + "<br />"  +
                  "5. Question: " + input.comments + "<br />"  +
                  "6. Subscribe: " + input.subscribe + "<br />"
      }
    )
  }

  var submitForm_contact = function(firstname, lastname, email, phone, comments, subscribe) {

    var form_inputs = {
      firstname: firstname.split(" ")[0], lastname: lastname.split(" ")[1], email: email, phone: phone, comments: comments, subscribe: subscribe
    }

    if(!firstname || !lastname || !email || !phone ) {
      alert('Please fill out all required fields.')
    } else {
      //Maximizer
      sendToMaximizer({
        "FirstName": form_inputs.firstname,
        "LastName": form_inputs.lastname,
        "Email": form_inputs.email,
        "Phone": form_inputs.phone,
        //TODO- comments in API
        "SearchTerm": form_inputs.comments
      })
      
      //Email
      $.ajax({
        type: 'POST',
        url: 'https://mandrillapp.com/api/1.0/messages/send.json',
        data: {
          'key': '09BuEv7HxD9K4M-ROGIpiw',
          'message': {
            'from_email': 'websales@tufenkian.com', //has to be verified email.
            'to': [
                {
                  'email': 'websales@tufenkian.com',
                  'type': 'to'
                }
              ],
            'subject': createEmail_contact(form_inputs).subject,
            'html': createEmail_contact(form_inputs).content,
            "attachments": [
              {
                "type": "text/plain",
                "name": "MTIFile.mti",
                "content": btoa(createMTI_contact(form_inputs)) //need btoa for Base64 encoding.
              }
            ],
          }
        }
      }).done(function() {
        
          sendConfirmation(email,
          "Thank you for contacting Tufenkian",
          "We appreciate your interest in our handmade carpets.  One of our customer service reps will be in touch with you within one business day. If you’d like assistance by phone, please call 1.800.928.6671 between 8AM and 5PM PST Monday through Friday.") //send confirmation to client
          
          if($("#subscribe_contact_form").prop("checked")) { //salesforce subscribe
            $("#contact-email-input").val(email)
            $("#contact-fullname").val(firstname)
            $("#contact-firstname").val(form_inputs.firstname)
            $("#contact-lastname").val(form_inputs.lastname)
            $("#contact-phone").val(phone)
            $("#contact-salesforce-form").submit()
          } else {
            $("#notification-text").text("Thank you for your interest. A support representative will be in touch.")
            $("#notification").addClass("active")
            setTimeout(function() {
              $("#notification").removeClass("active")
            }, 2000)
          }
      })
    }
  }
	var validEmail = valid_email_js

  $("#contact_submit_button").on("click", function() {
    if(!$("#name_contact_form").val() || !$("#email_contact_form").val() || !$("#phone_contact_form").val()){
      $("#notification-text").text("Please fill out all required fields.")
      $("#notification").addClass("active")
      setTimeout(function() {
        $("#notification").removeClass("active")
      }, 2000)
      return
    }

    if(validEmail($("#email_contact_form").val())){
      submitForm_contact(
        $("#name_contact_form").val(), //first name
        $("#name_contact_form").val(), //last name
        $("#email_contact_form").val(), //email
        $("#phone_contact_form").val(), //phone
        $("#comments_contact_form").val(), //comments
        $("#subscribe_contact_form").prop("checked") //subscribe checkbox
      )
    } else {
      $("#notification-text").text("Please provide a valid email address.")
      $("#notification").addClass("active")
      setTimeout(function() {
        $("#notification").removeClass("active")
      }, 2000)
    }

  })

})

//QUOTES
$(document).ready(function() {
  var sendToMaximizer = maximizer_api_js
  var sendConfirmation = confirmation_email_js

  var createMTI = function(input) {
    return (
      '"MTI: Web Inquiry" \n'
      +
      '"BUSINESS_PEOPLE","1","147","E-mail Address" \n'
      +
      '"IDV_FIRM","Leads\\Lead status","Sales_lead","First_Name","Last_Name","E-mail Address","P_Phone_1","Address_Line_1","City","StateProvince","ZipPostal_Code","NOTE","Leads\\GetNewsletter","Leads\\ReferringURL","Leads\\Browser","Leads\\SearchTerm","Leads\\TrackingCodeFormsLT","Leads\\FormName","Leads\\IP","Leads\\MarketingChannel","Leads\\ProductURL","Leads\\ProductID","Leads\\Showroom","Leads\\Facebook","Leads\\CallMe","Leads\\TimeFrame","Leads\\Designer","Leads\\EntrancePage","Leads\\2x3Number" \n'
      +
      '"ALPHA-1","Table-5","Table-5","ALPHA-59","ALPHA-59","ALPHA-255","ALPHA-21","ALPHA-59","ALPHA-59","ALPHA-59","ALPHA-59","ALPHA-9000","Table-5","ALPHA-59","ALPHA-59","ALPHA-59","ALPHA-59","ALPHA-59","ALPHA-59","ALPHA-59","ALPHA-59","ALPHA-59","ALPHA-59","Table-5","Table-5","ALPHA-59","Table-5","ALPHA-59","ALPHA-59" \n'
      + 
      '"1","Suspended","Yes","'+ input.firstname +'","'+ input.lastname +'","'+ input.email +'","'+ input.phone +'","NA","NA","NA","'+ input.zipcode +'","'+ input.comments +'","'+ input.subscribe +'","NA","AppleMAC-Safari","NA","NA","AskQuestion","74.95.35.228","NA","'+ input.product_url +'","'+ input.product_title +'","'+ input.showroom +'","NA","NA","ASAP","'+ input.designer +'","NA","NA"'
    )
  }

  var createEmail = function(input) {
    var title;
    if (input.form_title.indexOf("Quote") !== -1) {
      title = "Request a Quote"
    } else {
      title = "Ask a Question"
    }

    return (
      {
        subject: title + " / "+ input.firstname + " "+ input.lastname +" /" + Date.now(),
        content: "1. Product Name: " + input.product_title + "<br />" +
                  "2. First Name: " + input.firstname + "<br />"  +
                  "3. Last Name: " + input.lastname + "<br />"  +
                  "4. Email: " + input.email + "<br />"  +
                  "5. Phone: " + input.phone + "<br />"  +
                  "6. Zipcode: " + input.zipcode + "<br />"  +
                  "7. Time Frame: ASAP" + "<br />"  +
                  "8. Question: " + input.comments + "<br />"  +
                  "9. Subscribe: " + input.subscribe + "<br />"  +
                  "10. Designer: " + input.designer
      }
    )
  }

  var submitForm = function(firstname, lastname, email, phone, zipcode, comments, subscribe, product_url, product_title, showroom, designer, form_title) {

    var form_inputs = {
      firstname: firstname.split(" ")[0], lastname: lastname.split(" ")[1], email, phone, zipcode, comments, subscribe, product_url, product_title, showroom, designer, form_title
    }

    if(!firstname || !lastname || !email || !phone ) {
      alert('Please fill out all required fields.')
    } else {
      //Maximizer
      sendToMaximizer({
        "FirstName": form_inputs.firstname,
        "LastName": form_inputs.lastname,
        "Email": form_inputs.email,
        "Phone": form_inputs.phone,
        "ZipCode": form_inputs.zipcode,
        "ProductURL": form_inputs.product_url,
        "ProductID": form_inputs.product_title,
        "SearchTerm": form_inputs.comments
      })

      //Emails
      $.ajax({
        type: 'POST',
        url: 'https://mandrillapp.com/api/1.0/messages/send.json',
        data: {
          'key': '09BuEv7HxD9K4M-ROGIpiw',
          'message': {
            'from_email': 'websales@tufenkian.com', //has to be verified email.
            'to': [
                {
                  'email': 'websales@tufenkian.com',
                  'type': 'to'
                }
              ],
            'subject': createEmail(form_inputs).subject,
            'html': createEmail(form_inputs).content,
            // "attachments": [
            //   {
            //     "type": "text/plain",
            //     "name": "MTIFile.mti",
            //     "content": btoa(createMTI(form_inputs)) //need btoa for Base64 encoding.
            //   }
            // ],
          }
        }
      }).done(function() {
        sendConfirmation(email,
        "Thank you for contacting Tufenkian",
        "We appreciate your interest in our handmade carpets.  One of our customer service reps will be in touch with you within one business day. If you’d like assistance by phone, please call 1.800.928.6671 between 8AM and 5PM PST Monday through Friday.") //send confirmation to client
        
        if($("#subscribe_quotes_form").prop("checked") || $("#subscribe_quotes_form_mobile").prop("checked")) {
          $("#quotes-fullname").val(firstname)
          $("#quotes-firstname").val(form_inputs.firstname)
          $("#quotes-lastname").val(form_inputs.lastname)
          $("#quotes-phone").val(phone)
          $("#quotes-email-input").val(email)
          $("#quotes-salesforce-form").submit()
        } else {
          $("#notification-text").text("Thank you for your interest. A support representative will be in touch.")
          $("#notification").addClass("active")
          setTimeout(function() {
            $("#notification").removeClass("active")
          }, 2000)
        }
        $("#name_quotes_form").val("")
        $("#email_quotes_form").val("")
        $("#phone_quotes_form").val("")
        $("#zipcode_quotes_form").val("")
        $("#comments_quotes_form").val("")
        $("#name_quotes_form_mobile").val("")
        $("#email_quotes_form_mobile").val("")
        $("#phone_quotes_form_mobile").val("")
        $("#zipcode_quotes_form_mobile").val("")
        $("#comments_quotes_form_mobile").val("")
      })
    }
  }

  var validEmail = valid_email_js

  $("#quote_submit_button").on("click", function() {
    if(!$("#name_quotes_form").val() || !$("#email_quotes_form").val() || !$("#phone_quotes_form").val()){
      $("#notification-text").text("Please fill out all required fields.")
      $("#notification").addClass("active")
      setTimeout(function() {
        $("#notification").removeClass("active")
      }, 2000)
      return
    }
    if(validEmail($("#email_quotes_form").val())){
      submitForm(
        $("#name_quotes_form").val(), //first name
        $("#name_quotes_form").val(), //last name
        $("#email_quotes_form").val(), //email
        $("#phone_quotes_form").val(), //phone
        $("#zipcode_quotes_form").val(), //zipcode
        $("#comments_quotes_form").val(), //comments
        $("#subscribe_quotes_form").prop("checked"), //subscribe checkbox
        $("#product_url_quotes_form").text(), //product URL.
        $("#product_title_quotes_form").text() + " - " + $("#selected-variant-quotes").text(), //product title + size dropdown.
        $("#selected-variant-showrooms").text(), //nearest showroom dropdown
        $("#designer_quotes_form").prop("checked"), //are you a designer? checkbox
        $("#quote_submit_button").text() //title of form
      )
    } else {
      $("#notification-text").text("Please provide a valid email address.")
      $("#notification").addClass("active")
      setTimeout(function() {
        $("#notification").removeClass("active")
      }, 2000)
    }
  })

  //duplicate the click handler for mobile. everything else can stay.
  $("#quote_submit_button_mobile").on("click", function() {
    if(validEmail($("#email_quotes_form_mobile").val())){
      submitForm(
        $("#name_quotes_form_mobile").val(), //first name
        $("#name_quotes_form_mobile").val(), //last name
        $("#email_quotes_form_mobile").val(), //email
        $("#phone_quotes_form_mobile").val(), //phone
        $("#zipcode_quotes_form_mobile").val(), //zipcode
        $("#comments_quotes_form_mobile").val(), //comments
        $("#subscribe_quotes_form_mobile").prop("checked"), //subscribe checkbox
        $("#product_url_quotes_form_mobile").text(), //product URL.
        $("#product_title_quotes_form_mobile").text() + " - " + $("#selected-variant-quotes_mobile").text(), //product title + size dropdown.
        $("#selected-variant-showrooms_mobile").text(), //nearest showroom dropdown
        $("#designer_quotes_form_mobile").prop("checked"), //are you a designer? checkbox
        $("#quote_submit_button_mobile").text() //title of form
      )
    } else {
      $("#notification-text").text("Please provide a valid email address.")
      $("#notification").addClass("active")
      setTimeout(function() {
        $("#notification").removeClass("active")
      }, 2000)
    }
  })

})

//REGISTER
$(document).ready(function() {
  var sendToMaximizer = maximizer_api_js
  var sendConfirmation = confirmation_email_js

  var createMTI = function(input) {
    return (
      '"MTI: Web Inquiry" \n'
      +
      '"BUSINESS_PEOPLE","1","147","E-mail Address" \n'
      +
      '"IDV_FIRM","Leads\\Lead status","Sales_lead","First_Name","Last_Name","E-mail Address","P_Phone_1","Address_Line_1","City","StateProvince","ZipPostal_Code","NOTE","Leads\\GetNewsletter","Leads\\ReferringURL","Leads\\Browser","Leads\\SearchTerm","Leads\\TrackingCodeFormsLT","Leads\\FormName","Leads\\IP","Leads\\MarketingChannel","Leads\\ProductURL","Leads\\ProductID","Leads\\Showroom","Leads\\Facebook","Leads\\CallMe","Leads\\TimeFrame","Leads\\Designer","Leads\\EntrancePage","Leads\\2x3Number" \n'
      +
      '"ALPHA-1","Table-5","Table-5","ALPHA-59","ALPHA-59","ALPHA-255","ALPHA-21","ALPHA-59","ALPHA-59","ALPHA-59","ALPHA-59","ALPHA-9000","Table-5","ALPHA-59","ALPHA-59","ALPHA-59","ALPHA-59","ALPHA-59","ALPHA-59","ALPHA-59","ALPHA-59","ALPHA-59","ALPHA-59","Table-5","Table-5","ALPHA-59","Table-5","ALPHA-59","ALPHA-59" \n'
      + 
      '"1","Suspended","Yes","'+ input.firstname +'","'+ input.lastname +'","'+ input.email +'","'+ input.phone +'","NA","NA","NA","'+ input.zipcode +'","'+ input.comments +'","'+ input.subscribe +'","NA","AppleMAC-Safari","NA","NA","AskQuestion","74.95.35.228","NA","'+ input.product_url +'","'+ input.product_title +'","'+ input.showroom +'","NA","NA","ASAP","'+ input.designer +'","NA","NA"'
    )
  }

  var createEmail = function(input) {
    var title;
    if (input.form_title.indexOf("Quote") !== -1) {
      title = "Request a Quote"
    } else {
      title = "Ask a Question"
    }

    return (
      {
        subject: title + " / "+ input.firstname + " "+ input.lastname +" /" + Date.now(),
        content: "1. Product Name: " + input.product_title + "<br />" +
                  "2. First Name: " + input.firstname + "<br />"  +
                  "3. Last Name: " + input.lastname + "<br />"  +
                  "4. Email: " + input.email + "<br />"  +
                  "5. Phone: " + input.phone + "<br />"  +
                  "6. Zipcode: " + input.zipcode + "<br />"  +
                  "7. Time Frame: ASAP" + "<br />"  +
                  "8. Question: " + input.comments + "<br />"  +
                  "9. Subscribe: " + input.subscribe + "<br />"  +
                  "10. Designer: " + input.designer
      }
    )
  }

  var submitForm = function(firstname, lastname, email, phone, zipcode, comments, subscribe, product_url, product_title, showroom, designer, form_title) {

    var form_inputs = {
      firstname: firstname.split(" ")[0], lastname: lastname.split(" ")[1], email, phone, zipcode, comments, subscribe, product_url, product_title, showroom, designer, form_title
    }

    if(!firstname || !lastname || !email || !phone ) {
      alert('Please fill out all required fields.')
    } else {
      //Maximizer
      sendToMaximizer({
        "FirstName": form_inputs.firstname,
        "LastName": form_inputs.lastname,
        "Email": form_inputs.email,
        "Phone": form_inputs.phone,
        "ZipCode": form_inputs.zipcode,
        "ProductURL": form_inputs.product_url,
        "ProductID": form_inputs.product_title,
        "SearchTerm": form_inputs.comments
      })

      //Emails
      $.ajax({
        type: 'POST',
        url: 'https://mandrillapp.com/api/1.0/messages/send.json',
        data: {
          'key': '09BuEv7HxD9K4M-ROGIpiw',
          'message': {
            'from_email': 'websales@tufenkian.com', //has to be verified email.
            'to': [
                {
                  'email': 'websales@tufenkian.com',
                  'type': 'to'
                }
              ],
            'subject': createEmail(form_inputs).subject,
            'html': createEmail(form_inputs).content,
            // "attachments": [
            //   {
            //     "type": "text/plain",
            //     "name": "MTIFile.mti",
            //     "content": btoa(createMTI(form_inputs)) //need btoa for Base64 encoding.
            //   }
            // ],
          }
        }
      }).done(function() {
        sendConfirmation(email,
        "Thank you for contacting Tufenkian",
        "We appreciate your interest in our handmade carpets.  One of our customer service reps will be in touch with you within one business day. If you’d like assistance by phone, please call 1.800.928.6671 between 8AM and 5PM PST Monday through Friday.") //send confirmation to client
        
        if($("#subscribe_quotes_form").prop("checked") || $("#subscribe_quotes_form_mobile").prop("checked")) {
          $("#quotes-fullname").val(firstname)
          $("#quotes-firstname").val(form_inputs.firstname)
          $("#quotes-lastname").val(form_inputs.lastname)
          $("#quotes-phone").val(phone)
          $("#quotes-email-input").val(email)
          $("#quotes-salesforce-form").submit()
        } else {
          $("#notification-text").text("Thank you for your interest. A support representative will be in touch.")
          $("#notification").addClass("active")
          setTimeout(function() {
            $("#notification").removeClass("active")
          }, 2000)
        }
        $("#name_quotes_form").val("")
        $("#email_quotes_form").val("")
        $("#phone_quotes_form").val("")
        $("#zipcode_quotes_form").val("")
        $("#comments_quotes_form").val("")
        $("#name_quotes_form_mobile").val("")
        $("#email_quotes_form_mobile").val("")
        $("#phone_quotes_form_mobile").val("")
        $("#zipcode_quotes_form_mobile").val("")
        $("#comments_quotes_form_mobile").val("")
      })
    }
  }

  var validEmail = valid_email_js

  $("#quote_submit_button").on("click", function() {
    if(!$("#name_quotes_form").val() || !$("#email_quotes_form").val() || !$("#phone_quotes_form").val()){
      $("#notification-text").text("Please fill out all required fields.")
      $("#notification").addClass("active")
      setTimeout(function() {
        $("#notification").removeClass("active")
      }, 2000)
      return
    }
    if(validEmail($("#email_quotes_form").val())){
      submitForm(
        $("#name_quotes_form").val(), //first name
        $("#name_quotes_form").val(), //last name
        $("#email_quotes_form").val(), //email
        $("#phone_quotes_form").val(), //phone
        $("#zipcode_quotes_form").val(), //zipcode
        $("#comments_quotes_form").val(), //comments
        $("#subscribe_quotes_form").prop("checked"), //subscribe checkbox
        $("#product_url_quotes_form").text(), //product URL.
        $("#product_title_quotes_form").text() + " - " + $("#selected-variant-quotes").text(), //product title + size dropdown.
        $("#selected-variant-showrooms").text(), //nearest showroom dropdown
        $("#designer_quotes_form").prop("checked"), //are you a designer? checkbox
        $("#quote_submit_button").text() //title of form
      )
    } else {
      $("#notification-text").text("Please provide a valid email address.")
      $("#notification").addClass("active")
      setTimeout(function() {
        $("#notification").removeClass("active")
      }, 2000)
    }
  })

  //duplicate the click handler for mobile. everything else can stay.
  $("#quote_submit_button_mobile").on("click", function() {
    if(validEmail($("#email_quotes_form_mobile").val())){
      submitForm(
        $("#name_quotes_form_mobile").val(), //first name
        $("#name_quotes_form_mobile").val(), //last name
        $("#email_quotes_form_mobile").val(), //email
        $("#phone_quotes_form_mobile").val(), //phone
        $("#zipcode_quotes_form_mobile").val(), //zipcode
        $("#comments_quotes_form_mobile").val(), //comments
        $("#subscribe_quotes_form_mobile").prop("checked"), //subscribe checkbox
        $("#product_url_quotes_form_mobile").text(), //product URL.
        $("#product_title_quotes_form_mobile").text() + " - " + $("#selected-variant-quotes_mobile").text(), //product title + size dropdown.
        $("#selected-variant-showrooms_mobile").text(), //nearest showroom dropdown
        $("#designer_quotes_form_mobile").prop("checked"), //are you a designer? checkbox
        $("#quote_submit_button_mobile").text() //title of form
      )
    } else {
      $("#notification-text").text("Please provide a valid email address.")
      $("#notification").addClass("active")
      setTimeout(function() {
        $("#notification").removeClass("active")
      }, 2000)
    }
  })

})