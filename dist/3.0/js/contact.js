function sendMail() {
  var e = $("#email").val(),
    s = $("#subject").val(),
    a = $("#message").val(),
    t = $("#name").val();
  s.trim().length > 0 &&
  a.trim().length > 0 &&
  t.trim().length > 0 &&
  e.trim().length > 0
    ? isValidEmailAddress(e)
      ? $.ajax({
          url: "/service/sendMail",
          type: "post",
          data: { email: e, subject: s, message: a, name: t },
          success: function (e) {
            e.toLowerCase().indexOf("success") >= 0
              ? ($("#success").html("<div class='alert alert-success'>"),
                $("#success > .alert-success")
                  .html(
                    "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
                  )
                  .append("</button>"),
                $("#success > .alert-success").append(
                  "<strong>Your message has been sent. </strong>"
                ),
                $("#success > .alert-success").append("</div>"),
                clearInput("contactForm"))
              : ($("#success").html("<div class='alert alert-danger'>"),
                $("#success > .alert-danger")
                  .html(
                    "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
                  )
                  .append("</button>"),
                $("#success > .alert-danger").append(
                  "<strong>Sorry " +
                    t +
                    ", it seems that my mail server is not responding. Please try again later!"
                ),
                $("#success > .alert-danger").append("</div>"),
                clearInput("contactForm"));
          },
          error: function (e, s, a) {
            $("#success").html("<div class='alert alert-danger'>"),
              $("#success > .alert-danger")
                .html(
                  "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
                )
                .append("</button>"),
              $("#success > .alert-danger").append(
                "<strong>Sorry " +
                  t +
                  ", it seems that my mail server is not responding. Please try again later!"
              ),
              $("#success > .alert-danger").append("</div>"),
              clearInput("contactForm");
          },
        })
      : showErrorDialog("Enter valid email address")
    : showErrorDialog("Fill required data");
}
function isValidEmailAddress(e) {
  return new RegExp(
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
  ).test(e);
}
