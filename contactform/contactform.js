
$.fn.serializeObject = function() {
  var o = {};
  var a = this.serializeArray();
  $.each(a, function() {
    if (o[this.name]) {
      if (!o[this.name].push) {
        o[this.name] = [o[this.name]];
      }
      o[this.name].push(this.value || '');
    } else {
      o[this.name] = this.value || '';
    }
  });
  return o;
};

var $form = $('form#applicant-form'),
    url = 'https://script.google.com/macros/s/AKfycbzAghH-DcD5BNc5qbA4vi_2PGnEDc45Uid0mwer3MprwSOOPX_T/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(function(e){console.log(e);}
    // do something
  );
})



jQuery(document).ready(function ($) {
  $('#applicant-form').submit(function(e) {
  e.preventDefault();
  formSubmit();
  })

  function formSubmit() {
    var projectName = $('#project_name').val();
    var applicantName = $('#applicant_name').val();
    var rollNumber = $('#roll_number').val();
    var emailId = $('#email_id').val();
    var contactNumber = $('#contact_number').val();
    var teamDetails = $('#team_details').val();
    var problemSolve = $('#problem_solve').val();
    var briefSolution = $('#brief_solution').val();
    var backWork = $('#back_work').val();
    var resourceNeed = $('#resource_need').val();

    var $form = $('#applicant-form'),
        url = 'https://script.google.com/macros/s/AKfycbzAghH-DcD5BNc5qbA4vi_2PGnEDc45Uid0mwer3MprwSOOPX_T/exec'

        $.ajax({
          url: url,
          method: "GET",
          dataType: "json",
          data: $form.serialize(),
          success: function(response) {
            $('#applicant-form')[0].reset();
            alert('Successfully Registered');
            return true
          }
        })
  }

});