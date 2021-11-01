/**
 * vkBeautify - javascript plugin to pretty-print or minify text in XML, JSON, CSS and SQL formats.
 *
 * Version - 0.99.00.beta
 * Copyright (c) 2012 Vadim Kiryukhin
 * vkiryukhin @ gmail.com
 * http://www.eslinstructor.net/vkbeautify/
 *
 * MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 *   Pretty print
 *
 *        vkbeautify.xml(text [,indent_pattern]);
 *        vkbeautify.json(text [,indent_pattern]);
 *        vkbeautify.css(text [,indent_pattern]);
 *        vkbeautify.sql(text [,indent_pattern]);
 *
 *        @text - String; text to beatufy;
 *        @indent_pattern - Integer | String;
 *                Integer:  number of white spaces;
 *                String:   character string to visualize indentation ( can also be a set of white spaces )
 *   Minify
 *
 *        vkbeautify.xmlmin(text [,preserve_comments]);
 *        vkbeautify.jsonmin(text);
 *        vkbeautify.cssmin(text [,preserve_comments]);
 *        vkbeautify.sqlmin(text);
 *
 *        @text - String; text to minify;
 *        @preserve_comments - Bool; [optional];
 *                Set this flag to true to prevent removing comments from @text ( minxml and mincss functions only. )
 *
 *   Examples:
 *        vkbeautify.xml(text); // pretty print XML
 *        vkbeautify.json(text, 4 ); // pretty print JSON
 *        vkbeautify.css(text, '. . . .'); // pretty print CSS
 *        vkbeautify.sql(text, '----'); // pretty print SQL
 *
 *        vkbeautify.xmlmin(text, true);// minify XML, preserve comments
 *        vkbeautify.jsonmin(text);// minify JSON
 *        vkbeautify.cssmin(text);// minify CSS, remove comments ( default )
 *        vkbeautify.sqlmin(text);// minify SQL
 *
 */
!(function () {
  function e(e) {
    var t = "    ";
    if (isNaN(parseInt(e))) t = e;
    else
      switch (e) {
        case 1:
          t = " ";
          break;
        case 2:
          t = "  ";
          break;
        case 3:
          t = "   ";
          break;
        case 4:
          t = "    ";
          break;
        case 5:
          t = "     ";
          break;
        case 6:
          t = "      ";
          break;
        case 7:
          t = "       ";
          break;
        case 8:
          t = "        ";
          break;
        case 9:
          t = "         ";
          break;
        case 10:
          t = "          ";
          break;
        case 11:
          t = "           ";
          break;
        case 12:
          t = "            ";
      }
    var o = ["\n"];
    for (ix = 0; ix < 100; ix++) o.push(o[ix] + t);
    return o;
  }
  function t() {
    (this.step = "\t"), (this.shift = e(this.step));
  }
  function o(e, t) {
    return t - (e.replace(/\(/g, "").length - e.replace(/\)/g, "").length);
  }
  function a(e, t) {
    return e
      .replace(/\s{1,}/g, " ")
      .replace(/ AND /gi, "~::~" + t + t + "AND ")
      .replace(/ BETWEEN /gi, "~::~" + t + "BETWEEN ")
      .replace(/ CASE /gi, "~::~" + t + "CASE ")
      .replace(/ ELSE /gi, "~::~" + t + "ELSE ")
      .replace(/ END /gi, "~::~" + t + "END ")
      .replace(/ FROM /gi, "~::~FROM ")
      .replace(/ GROUP\s{1,}BY/gi, "~::~GROUP BY ")
      .replace(/ HAVING /gi, "~::~HAVING ")
      .replace(/ IN /gi, " IN ")
      .replace(/ JOIN /gi, "~::~JOIN ")
      .replace(/ CROSS~::~{1,}JOIN /gi, "~::~CROSS JOIN ")
      .replace(/ INNER~::~{1,}JOIN /gi, "~::~INNER JOIN ")
      .replace(/ LEFT~::~{1,}JOIN /gi, "~::~LEFT JOIN ")
      .replace(/ RIGHT~::~{1,}JOIN /gi, "~::~RIGHT JOIN ")
      .replace(/ ON /gi, "~::~" + t + "ON ")
      .replace(/ OR /gi, "~::~" + t + t + "OR ")
      .replace(/ ORDER\s{1,}BY/gi, "~::~ORDER BY ")
      .replace(/ OVER /gi, "~::~" + t + "OVER ")
      .replace(/\(\s{0,}SELECT /gi, "~::~(SELECT ")
      .replace(/\)\s{0,}SELECT /gi, ")~::~SELECT ")
      .replace(/ THEN /gi, " THEN~::~" + t)
      .replace(/ UNION /gi, "~::~UNION~::~")
      .replace(/ USING /gi, "~::~USING ")
      .replace(/ WHEN /gi, "~::~" + t + "WHEN ")
      .replace(/ WHERE /gi, "~::~WHERE ")
      .replace(/ WITH /gi, "~::~WITH ")
      .replace(/ ALL /gi, " ALL ")
      .replace(/ AS /gi, " AS ")
      .replace(/ ASC /gi, " ASC ")
      .replace(/ DESC /gi, " DESC ")
      .replace(/ DISTINCT /gi, " DISTINCT ")
      .replace(/ EXISTS /gi, " EXISTS ")
      .replace(/ NOT /gi, " NOT ")
      .replace(/ NULL /gi, " NULL ")
      .replace(/ LIKE /gi, " LIKE ")
      .replace(/\s{0,}SELECT /gi, "SELECT ")
      .replace(/\s{0,}UPDATE /gi, "UPDATE ")
      .replace(/ SET /gi, " SET ")
      .replace(/~::~{1,}/g, "~::~")
      .split("~::~");
  }
  (t.prototype.xml = function (t, o) {
    var a = t
        .replace(/>\s{0,}</g, "><")
        .replace(/</g, "~::~<")
        .replace(/\s*xmlns\:/g, "~::~xmlns:")
        .replace(/\s*xmlns\=/g, "~::~xmlns=")
        .split("~::~"),
      n = a.length,
      i = !1,
      r = 0,
      l = "",
      s = 0,
      c = o ? e(o) : this.shift;
    for (s = 0; s < n; s++)
      a[s].search(/<!/) > -1
        ? ((l += c[r] + a[s]),
          (i = !0),
          (a[s].search(/-->/) > -1 ||
            a[s].search(/\]>/) > -1 ||
            a[s].search(/!DOCTYPE/) > -1) &&
            (i = !1))
        : a[s].search(/-->/) > -1 || a[s].search(/\]>/) > -1
        ? ((l += a[s]), (i = !1))
        : /^<\w/.exec(a[s - 1]) &&
          /^<\/\w/.exec(a[s]) &&
          /^<[\w:\-\.\,]+/.exec(a[s - 1]) ==
            /^<\/[\w:\-\.\,]+/.exec(a[s])[0].replace("/", "")
        ? ((l += a[s]), i || r--)
        : a[s].search(/<\w/) > -1 &&
          -1 == a[s].search(/<\//) &&
          -1 == a[s].search(/\/>/)
        ? (l = l += i ? a[s] : c[r++] + a[s])
        : a[s].search(/<\w/) > -1 && a[s].search(/<\//) > -1
        ? (l = l += i ? a[s] : c[r] + a[s])
        : a[s].search(/<\//) > -1
        ? (l = l += i ? a[s] : c[--r] + a[s])
        : a[s].search(/\/>/) > -1
        ? (l = l += i ? a[s] : c[r] + a[s])
        : a[s].search(/<\?/) > -1 ||
          a[s].search(/xmlns\:/) > -1 ||
          a[s].search(/xmlns\=/) > -1
        ? (l += c[r] + a[s])
        : (l += a[s]);
    return "\n" == l[0] ? l.slice(1) : l;
  }),
    (t.prototype.json = function (e, t) {
      t = t || this.step;
      return "undefined" == typeof JSON
        ? e
        : "string" == typeof e
        ? JSON.stringify(JSON.parse(e), null, t)
        : "object" == typeof e
        ? JSON.stringify(e, null, t)
        : e;
    }),
    (t.prototype.css = function (t, o) {
      var a = t
          .replace(/\s{1,}/g, " ")
          .replace(/\{/g, "{~::~")
          .replace(/\}/g, "~::~}~::~")
          .replace(/\;/g, ";~::~")
          .replace(/\/\*/g, "~::~/*")
          .replace(/\*\//g, "*/~::~")
          .replace(/~::~\s{0,}~::~/g, "~::~")
          .split("~::~"),
        n = a.length,
        i = 0,
        r = "",
        l = 0,
        s = o ? e(o) : this.shift;
      for (l = 0; l < n; l++)
        /\{/.exec(a[l])
          ? (r += s[i++] + a[l])
          : /\}/.exec(a[l])
          ? (r += s[--i] + a[l])
          : (/\*\\/.exec(a[l]), (r += s[i] + a[l]));
      return r.replace(/^\n{1,}/, "");
    }),
    (t.prototype.sql = function (t, n) {
      var i = t
          .replace(/\s{1,}/g, " ")
          .replace(/\'/gi, "~::~'")
          .split("~::~"),
        r = i.length,
        l = [],
        s = 0,
        c = this.step,
        u = 0,
        d = "",
        p = 0,
        f = n ? e(n) : this.shift;
      for (p = 0; p < r; p++) l = p % 2 ? l.concat(i[p]) : l.concat(a(i[p], c));
      for (r = l.length, p = 0; p < r; p++) {
        (u = o(l[p], u)),
          /\s{0,}\s{0,}SELECT\s{0,}/.exec(l[p]) &&
            (l[p] = l[p].replace(/\,/g, ",\n" + c + c)),
          /\s{0,}\s{0,}SET\s{0,}/.exec(l[p]) &&
            (l[p] = l[p].replace(/\,/g, ",\n" + c + c)),
          /\s{0,}\(\s{0,}SELECT\s{0,}/.exec(l[p])
            ? (d += f[++s] + l[p])
            : /\'/.exec(l[p])
            ? (u < 1 && s && s--, (d += l[p]))
            : ((d += f[s] + l[p]), u < 1 && s && s--);
      }
      return (d = d.replace(/^\n{1,}/, "").replace(/\n{1,}/g, "\n"));
    }),
    (t.prototype.xmlmin = function (e, t) {
      return (
        t
          ? e
          : e
              .replace(
                /\<![ \r\n\t]*(--([^\-]|[\r\n]|-[^\-])*--[ \r\n\t]*)\>/g,
                ""
              )
              .replace(/[ \r\n\t]{1,}xmlns/g, " xmlns")
      ).replace(/>\s{0,}</g, "><");
    }),
    (t.prototype.jsonmin = function (e) {
      return "undefined" == typeof JSON
        ? e
        : JSON.stringify(JSON.parse(e), null, 0);
    }),
    (t.prototype.cssmin = function (e, t) {
      return (
        t ? e : e.replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\//g, "")
      )
        .replace(/\s{1,}/g, " ")
        .replace(/\{\s{1,}/g, "{")
        .replace(/\}\s{1,}/g, "}")
        .replace(/\;\s{1,}/g, ";")
        .replace(/\/\*\s{1,}/g, "/*")
        .replace(/\*\/\s{1,}/g, "*/");
    }),
    (t.prototype.sqlmin = function (e) {
      return e
        .replace(/\s{1,}/g, " ")
        .replace(/\s{1,}\(/, "(")
        .replace(/\s{1,}\)/, ")");
    }),
    (window.vkbeautify = new t());
})();
var previouskey,
  toolstype = "json",
  isFullScreen = !1,
  userId = 0;
function preInitEditors() {
  if ("json" == toolstype)
    createJsonEditor(),
      cleanJSONEditor("all"),
      setDataInInputEditor(getFromLocalStorage());
  else if ("xml" == toolstype || "xml-viewer" == toolstype) createXMLEditor();
  else if ("yaml" == toolstype) createYAMLEditor();
  else if ("html" == toolstype) createHTMLEditor();
  else if ("escaper" == toolstype) createEscaperEditor();
  else if ("encoder" == toolstype) createEncoderEditor();
  else if ("jsontree" == toolstype) createJsonTreeEditor();
  else if ("excel" == toolstype) createExcelOutputEditor();
  else if ("css" == toolstype) createCSSEditor();
  else if ("langconvert" == toolstype) createDatatoLangEditor();
  else if ("json5" == toolstype) createJSON5Editor();
  else if ("prettier" == toolstype) createPrettierEditor();
  else if ("csv" == toolstype) createCSVEditor();
  else {
    if ("samples" != toolstype) return;
    createSampleEditor();
  }
}
function postInitEditors() {
  $(document).ajaxSend(function (e, t, o) {
    $("#pluswrap").removeClass("hide");
  }),
    $(document).ajaxComplete(function (e, t, o) {
      $("#pluswrap").addClass("hide");
    }),
    isDataUrlAvailable(),
    handleCtrlV(),
    checkIfUserLoggedinlogin(),
    $("#fileopen").click(function () {
      openFile();
    }),
    $("#default_file").change(function () {
      (formdata = new FormData()),
        $(this).prop("files").length > 0 &&
          ((file = $(this).prop("files")[0]),
          formdata.append("userfile", file),
          readSelectedFile());
    });
}
function checkIfUserLoggedinlogin() {
  var e = getCookie("loggedinuser");
  "" != e
    ? ((userId = getCookie("loggedinuserid")),
      $("#loggedUserName").text(e),
      $("#loginDropdown").show(),
      $("#loginDiv").hide())
    : ($("#loginDropdown").hide(), $("#loginDiv").show(), (userId = 0));
}
function getCookie(e) {
  for (
    var t = e + "=", o = document.cookie.split(";"), a = 0;
    a < o.length;
    a++
  ) {
    for (var n = o[a]; " " == n.charAt(0); ) n = n.substring(1);
    if (0 == n.indexOf(t))
      return (t = n.substring(t.length, n.length)).replace(/\+/g, " ");
  }
  return "";
}
function defaultAction() {
  $("#defaultaction").click();
}
function preLogin() {
  storePreviousPageURL(), window.open("/login", "_self");
}
function storePreviousPageURL() {
  localStorage &&
    localStorage.setItem("urlBeforeLogin", window.location.pathname);
}
function preLogout() {
  storePreviousPageURL(), window.open("/logout", "_self");
}
function postLoginLogout() {
  var e = window.location.pathname;
  if (localStorage) {
    var t = localStorage.getItem("urlBeforeLogin");
    t && e !== t && window.open(t, "_self");
  }
}
function isAceEditor(e) {
  return $(e.container).hasClass("ace_editor");
}
function getOverlayClass(e) {
  return isAceEditor(e)
    ? "overlayaceeditor"
    : void 0 !== e && e instanceof JSONEditor
    ? "overlayjsoneditor"
    : void 0;
}
function addOverlay(e) {
  if ("input" == e) {
    $("#inputdiv").addClass("overlay"),
      $("#inputFullScreen").hide(),
      $("#inputCloseScreen").show(),
      (fullscreenEditor = "input"),
      $("#inputeditor").addClass(getOverlayClass(inputEditor));
    try {
      inputEditor.resize();
    } catch (e) {}
  } else if ("output" == e) {
    $("#outputdiv").addClass("overlay"),
      $("#outputFullScreen").hide(),
      $("#outputCloseScreen").show(),
      (fullscreenEditor = "output"),
      $("#outputeditor").addClass(getOverlayClass(outputEditor));
    try {
      outputEditor.resize();
    } catch (e) {}
  }
  (isFullScreen = !0), $("body").css("overflow", "hidden");
}
function removeOverlay(e) {
  if ("input" == e) {
    $("#inputdiv").removeClass("overlay"),
      $("#inputFullScreen").show(),
      $("#inputCloseScreen").hide(),
      $("#inputeditor").removeClass(getOverlayClass(inputEditor));
    try {
      inputEditor.resize();
    } catch (e) {}
  } else if ("output" == e) {
    $("#outputdiv").removeClass("overlay"),
      $("#outputFullScreen").show(),
      $("#outputCloseScreen").hide(),
      $("#outputeditor").removeClass(getOverlayClass(outputEditor));
    try {
      outputEditor.resize();
    } catch (e) {}
  }
  $("body").css("overflow", ""), (isFullScreen = !1);
}
function updateFullScreenIcons(e) {
  isFullScreen
    ? "input" == e
      ? ($("#inputFullScreen").hide(),
        $("#inputCloseScreen").show(),
        (fullscreenEditor = "input"))
      : "output" == e &&
        ($("#outputFullScreen").hide(),
        $("#outputCloseScreen").show(),
        (fullscreenEditor = "output"))
    : "input" == e
    ? ($("#inputFullScreen").show(), $("#inputCloseScreen").hide())
    : "output" == e &&
      ($("#outputFullScreen").show(), $("#outputCloseScreen").hide());
}
function getCookie(e) {
  for (
    var t = e + "=", o = document.cookie.split(";"), a = 0;
    a < o.length;
    a++
  ) {
    for (var n = o[a]; " " == n.charAt(0); ) n = n.substring(1);
    if (0 == n.indexOf(t))
      return (t = n.substring(t.length, n.length)).replace(/\+/g, " ");
  }
  return "";
}
function copyToClipboard(e) {
  var t = $("<textarea>");
  $("body").append(t),
    t.val(e).select(),
    document.execCommand("copy"),
    t.remove(),
    $("#flymessage").toggleClass("in"),
    setTimeout(function () {
      $("#flymessage").removeClass("in");
    }, 2e3);
}
function setMessage(e, t, o) {
  void 0 === o && (o = !0), $("#msgDiv").html("");
  var a = "";
  (a =
    "success" == e
      ? "/" == window.location.pathname
        ? '<div class="alert alert-info" style="margin-top: 0px;margin-bottom: 5px;">'
        : '<div class="alert alert-info" >'
      : '<div class="alert alert-danger" >'),
    (a +=
      '<a href="#" class="close" data-dismiss="alert" aria-label="close" id="errorClose">&times;</a>'),
    (a += "<label>" + t + "</label></div>"),
    $("#msgDiv").html(a),
    o &&
      setTimeout(function () {
        $("#errorClose").click();
      }, 3e3);
}
function decodeSpecialCharacter(e) {
  return e
    .replace(/\&amp;/g, "&")
    .replace(/\&gt;/g, ">")
    .replace(/\&lt;/g, "<")
    .replace(/\&quot;/g, '"');
}
function setModelTitle(e) {
  "Formatted JSON" == e ? addOutputIconstoEditor(!0) : addOutputIconstoEditor();
}
function hideMessage() {
  $("#msgDiv").html(""), $("#outputeditor .menu").show();
}
function loadUrl() {
  var e = $("#path").val();
  e.trim().length > 5 && ($("#loadFileClose").click(), load(e));
}
function load(e) {
  $.ajax({
    type: "post",
    url: "//codebeautify.com/URLService",
    dataType: "text",
    data: { path: e },
    success: function (e) {
      null != e && null != e && 0 != e.trim().length && setExternalURLData(e);
    },
    error: function (e, t, o) {
      setMessage("error", "Failed to load data=" + t), cleanJSONEditor("all");
    },
  });
}
function getDataFromUrlId(e) {
  $.ajax({
    type: "post",
    url: "/service/getDataFromID",
    dataType: "json",
    data: { urlid: e, toolstype: toolstype },
    success: function (e) {
      null != e && null != e && 0 != e.length
        ? setDataView(e)
        : alert("This URL does not Exist.");
    },
    error: function (e, t, o) {
      setMessage("error", "Failed to load data=" + o),
        cleanJSONEditor("editor"),
        cleanJSONEditor();
    },
  });
}
function setExternalURLData(e) {
  "json" == toolstype
    ? setJSONDataFromResponse(e)
    : "xml" == toolstype
    ? setXMLDataFromResponse(e)
    : "yaml" == toolstype
    ? yamlInputeditor.setValue(e)
    : inputEditor.setValue(e);
}
function setDataView(e) {
  $("#title").val(e.title),
    $("#tags").val(e.tags),
    $("#desc").val(e.desc),
    "json" == toolstype
      ? setJSONDataFromResponse(e.content, e.lastaction)
      : "xml" == toolstype
      ? setXMLDataFromResponse(e.content, e.lastaction)
      : "yaml" == toolstype
      ? yamlInputeditor.setValue(e.content)
      : inputEditor.setValue(e.content),
    (userId = e.user_id),
    $("#id").val(e.id);
}
function setJSONDataFromResponse(e, t) {
  try {
    var o = $.parseJSON(e);
    inputEditor.setText(JSON.stringify(o, null, 2)),
      null != t ? updateJSONOutput(t) : defaultAction();
  } catch (t) {
    setMessage("error", "Invalid JSON Data: " + t), inputEditor.setText(e);
  }
}
function setXMLDataFromResponse(e, t) {
  try {
    inputEditor.setValue(e), null != t ? updateXMLOutput(t) : defaultAction();
  } catch (e) {
    setMessage("error", "Invalid XML Data: " + e);
  }
}
function openFile() {
  $("input[type=file]").click();
}
function readSelectedFile() {
  $("#loadFileClose").click();
  $("#viewname").val();
  var e = "/service/uploadFile";
  "excel-to-html" == $("#viewname").val() && (e = "SheetReader/uploadFile"),
    $.ajax({
      url: e,
      type: "POST",
      data: formdata,
      processData: !1,
      contentType: !1,
      success: function (e) {
        "error" != e
          ? "excel-to-html" == $("#viewname").val()
            ? converExcelToHtml(e)
            : (setDataInInputEditor(e), defaultAction())
          : setMessage("error", "Error in Loading File.");
      },
    });
}
function download() {
  var e = outputEditor.getText();
  if (0 != e.trim().length) {
    if ("function" != typeof saveAs)
      return void $.loadScript("dist/js/vendor/FileSaver.min.js", download);
    var t = outputEditor.getMode();
    if ("tree" === t || "form" === t || "view" === t) {
      var o = $.parseJSON(e);
      e = JSON.stringify(o, null, 2);
    }
    var a = new Blob(["" + e], { type: "text/plain;charset=utf-8" });
    (filename = "jsonformatter.txt"),
      "jsonToxml" == last_action && (filename = "jsonformatter.xml"),
      saveAs(a, filename);
  } else setMessage("error", "Sorry Result is Empty");
}
function clearInput(e) {
  "saveDialog" == e
    ? ($("#desc").val(""), $("#title").val(""), $("#tags").val(""))
    : $("#path").val("");
}
function handleCtrlV() {
  $(document).keyup(function (e) {
    (e.ctrlKey && 86 == e.keyCode) || (17 == previouskey && 86 == e.keyCode)
      ? (defaultAction(), (previouskey = -1))
      : (previouskey = e.keyCode);
  });
}
function Action_Save() {
  if (
    0 ==
    ("xml" == toolstype
      ? inputEditor.getValue()
      : "yaml" == toolstype
      ? yamlInputeditor.getValue()
      : "html" == toolstype
      ? inputEditor.getValue()
      : inputEditor.getText()
    ).trim().length
  )
    showErrorDialog("Sorry,Input is Empty");
  else {
    var e = $("#dataUrl").val();
    0 != userId && 0 != e.trim().length
      ? $("#btnUpdate").show()
      : ($("#btnUpdate").hide(), clearInput("saveDialog")),
      $("#openSave").click();
  }
}
function save(e) {
  var t,
    o = $("#title").val();
  null != o && 0 != o.length
    ? ($("#loadSaveClose").click(),
      (t =
        "xml" == toolstype
          ? inputEditor.getValue()
          : "yaml" == toolstype
          ? yamlInputeditor.getValue()
          : "html" == toolstype
          ? inputEditor.getValue()
          : inputEditor.getText()),
      $.ajax({
        url: "/service/save",
        dataType: "text",
        type: "post",
        async: !1,
        data: {
          content: t,
          title: $("#title").val(),
          id: $("#id").val(),
          user_id: userId,
          desc: $("#desc").val(),
          tags: $("#tags").val().trim(),
          viewname: $("#viewname").val().trim(),
          expirytime: $("#expiryTime").val().trim(),
          lastaction: last_action,
          toolstype: toolstype,
        },
        success: function (t) {
          if ("error" != t) {
            var o = null;
            setMessage(
              "success",
              "Data saved successfully - <a class='white' href ='" +
                (o =
                  "index" == $("#viewname").val().trim()
                    ? "https://" + location.host + "/" + t
                    : "https://" +
                      location.host +
                      "/" +
                      $("#viewname").val().trim() +
                      "/" +
                      t) +
                "'>" +
                o +
                "</a>",
              !1
            ),
              null != e && shareLink(o);
          } else alert("Please validate the input and try again.");
        },
        error: function (e, t, o) {
          setMessage("error", "Error in data saving");
        },
      }))
    : alert("Title is required");
}
function update() {
  var e;
  $("#loadSaveClose").click(),
    (e =
      "xml" == toolstype
        ? inputEditor.getValue()
        : "yaml" == toolstype
        ? yamlInputeditor.getValue()
        : "html" == toolstype
        ? inputEditor.getValue()
        : inputEditor.getText()),
    $.ajax({
      url: "/service/update",
      dataType: "text",
      type: "post",
      data: {
        id: $("#id").val(),
        content: e,
        title: $("#title").val(),
        desc: $("#desc").val(),
        tags: $("#tags").val().trim(),
      },
      success: function (e) {
        setMessage("success", "Data updatd successfully");
      },
      error: function (e, t, o) {
        setMessage("error", "Error in data updating");
      },
    });
}
function shareLink(e) {
  "google" == getProvider()
    ? window.open("https://plus.google.com/share?url=" + e, "_blank")
    : window.open("https://www.facebook.com/share.php?u=" + e, "_blank");
}
$(function () {
  if (
    ($(window).scrollTop(0),
    "recentLinks" == (toolstype = $("#type").val().trim()))
  ) {
    var e = $("#clickedLink").val() + "Link";
    $("#linkDiv a.disabled").removeClass("disabled").addClass("active"),
      $("#linkDiv a#" + e)
        .removeClass("active")
        .addClass("disabled");
  }
  0 != $("#inputeditor").length && preInitEditors();
}),
  (jQuery.loadScript = function (e, t) {
    $.ajaxSetup({ cache: !0 }),
      jQuery.ajax({ url: e, dataType: "script", success: t, async: !0 }),
      $.ajaxSetup({ cache: !1 });
  }),
  $(document).keyup(function (e) {
    27 == e.keyCode && removeOverlay(fullscreenEditor);
  }),
  $(".navbar-collapse ul li a").click(function () {
    $(".navbar-toggle:visible").click();
  });
var online = function (e) {
  var t = new Date().getTime() / 1e3;
  return e && e.access_token && e.expires > t;
};
function isDataUrlAvailable() {
  if (0 != $("#dataUrl").length) {
    var e = $("#dataUrl").val();
    0 != e.trim().length &&
      (6 == e.trim().length ? getDataFromUrlId(e) : load(e));
  }
}
function saveToLocalStorage(e) {
  localStorage &&
    (localStorage.setItem($("#viewname").val(), ""),
    localStorage.setItem($("#viewname").val(), e));
}
function getFromLocalStorage() {
  if (localStorage) {
    var e = localStorage.getItem($("#viewname").val());
    if (null != e && "URL is not valid." != e) return e;
  }
  return "";
}
function showErrorDialog(e) {
  $("#errorMsg").text(e), $("#openError").click();
}
function htmlOutput(e) {
  var t = e;
  if (
    (void 0 === e &&
      (t =
        "html-editor" == $("#viewname").val()
          ? $("#summernote").summernote("code")
          : inputEditor.getValue()),
    t.trim().length > 0)
  ) {
    var o = document.getElementById("result1").contentWindow.document;
    old != t && ((old = t), o.open(), o.write(old), o.close()),
      $("html, body").animate({ scrollTop: 0 }, 10);
  }
}
function getCSVTOTSV(e) {
  return e.split(",").join("\t");
}
function toHTML(e) {
  if (0 != e.trim().length) {
    (rows = ""), (thead = "<tr>");
    var t = Papa.parse(e),
      o = t.data,
      a = o.slice(1, o.length);
    a.sort(function (e, t) {
      return t.length - e.length;
    }),
      0 == a.length && (a = t.data);
    var n = 0;
    for (n = 0; n < a[0].length; n++)
      n < o[0].length
        ? (thead += "<th>" + o[0][n] + "</th>")
        : (thead += "<th>COLUMN" + (n + 1) + "</th>");
    thead += "</tr>";
    for (var i = 1; i < o.length; i++) {
      for (rows += "<tr>", n = 0; n < a[0].length; n++)
        n < o[i].length
          ? (rows += "<td>" + o[i][n] + "</td>")
          : (rows += "<td>&nbsp</td>");
      rows += "</tr>";
    }
    return (
      htmlOutput(
        "<table border=1><thead>\n" +
          thead +
          "</thead><tbody>\n" +
          rows +
          "</tbody></table>",
        ext
      ),
      old
    );
  }
  openErrorDialog("Sorry Input is Empty");
}
function init() {
  adsBlocked(function (e) {
    e ? $("#ablocker-big").show() : $("#ablocker-big").hide();
  });
}
function adsBlocked(e) {
  var t = new Request(
    "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
    { method: "HEAD", mode: "no-cors" }
  );
  fetch(t)
    .then(function (e) {
      return e;
    })
    .then(function (t) {
      console.log(t), e(!1);
    })
    .catch(function (t) {
      console.log(t), e(!0);
    });
}
$(function () {
  postInitEditors(), init();
});
var inputEditor,
  outputEditor,
  old,
  last_action = "validate";
function createHTMLEditor() {
  if (0 != $("#inputeditor").length) {
    inputEditor = ace.edit("inputeditor");
    var e = $("#viewname").val();
    "jade-to-html" == e
      ? inputEditor.getSession().setMode("ace/mode/jade")
      : "jsbeautifier" == e ||
        "javascript-pretty-print" == e ||
        "javascript-validator" == e
      ? inputEditor.getSession().setMode("ace/mode/javascript")
      : inputEditor.getSession().setMode("ace/mode/html"),
      inputEditor.getSession().setUseWrapMode(!0),
      inputEditor.setOptions({ fontSize: "12pt" }),
      addHTMLInputIconstoEditor(),
      inputEditor.on("change", function () {
        saveToLocalStorage(inputEditor.getValue());
      }),
      inputEditor.setValue(getFromLocalStorage()),
      "html-editor" == e && createSummerNote(),
      (outputEditor = ace.edit("outputeditor"))
        .getSession()
        .setMode("ace/mode/html"),
      outputEditor.getSession().setUseWrapMode(!0),
      outputEditor.setOptions({ fontSize: "12pt" }),
      ("jsbeautifier" != e &&
        "javascript-pretty-print" != e &&
        "javascript-validator" != e) ||
        outputEditor.getSession().setMode("ace/mode/javascript"),
      addHTMLOutputIconstoEditor(),
      "javascript-validator" == e && loadJSHint();
  }
}
function loadJSHint() {
  $.loadScript(
    "https://cdnjs.cloudflare.com/ajax/libs/jshint/2.11.1/jshint.min.js"
  );
}
function createSummerNote() {
  $("#summernote").summernote({
    height: $(window).height() - 250,
    focus: !1,
    toolbar: [
      ["style", ["bold", "italic", "underline", "clear"]],
      ["font", ["strikethrough"]],
      ["fontsize", ["fontsize"]],
      ["para", ["ul", "ol", "paragraph"]],
      ["height", ["height"]],
      ["view", ["fullscreen", "codeview"]],
    ],
    oninit: function () {
      $(
        '<div class="note-file btn-group"><button id="makeSnote" type="button" class="btn btn-default btn-sm btn-small" title="Identify a music note" data-event="something" tabindex="-1"><i class="fa fa-music"></i></button></div>'
      ).appendTo($(".note-toolbar")),
        $("#makeSnote").tooltip({ container: "body", placement: "bottom" }),
        $("#makeSnote").click(function (e) {
          var t = window.getSelection(),
            o = document.createElement("span"),
            a = t.getRangeAt(0);
          (o.innerHTML = t),
            (o.className = "snote"),
            (o.style.color = "blue"),
            a.deleteContents(),
            a.insertNode(o);
        });
    },
  });
}
function setDataInInputEditor(e) {
  inputEditor.setValue(e);
}
function loadHTMLSampleData() {
  0 != $("#inputeditor").length && inputEditor.setValue(getHtmlSample()),
    defaultAction();
}
function loadHTMLSampleDataForHtmlEditor() {
  0 != $("#outputeditor").length &&
    $("#summernote").summernote("code", getHtmlSample()),
    defaultAction();
}
function htmlEditorToHTML() {
  outputEditor.setValue($("#summernote").summernote("code"));
}
function loadJSSampleData() {
  0 != $("#inputeditor").length && inputEditor.setValue(getJSSample()),
    defaultAction();
}
function loadJadeSampleData() {
  0 != $("#inputeditor").length && inputEditor.setValue(getJadeSample()),
    defaultAction();
}
function getJadeSample() {
  return "doctype html\nhtml\n  head\n  body\n    h1 My First Heading\n    p My first paragraph.";
}
function getHtmlSample() {
  return vkbeautify.xml(
    '<!DOCTYPE html>   <html>     <head>     <style>body{background-color:#d0e4fe;}p{font-family:"Times New Roman";font-size:20px;}</style>     </head>     <body>     <h1>CSS example!</h1>     <p>This is a paragraph.</p>     <table>     <tr>     <td>100</td>     <td>200</td>     <td>300</td>     </tr>     </table>     <hr>     <h3>3 Rows and 3 Columns:</h3>     <table>     <tr>     <td>100</td>     <td>200</td>     <td>300</td>     </tr>     <tr>     <td>400</td>     <td>500</td>     <td>600</td>     </tr>     <tr>     <td>700</td>     <td>800</td>     <td>900</td>     </tr>     </table>     </body>    </html>  '
  );
}
function addHTMLInputIconstoEditor() {
  var e = $(".rightmenu");
  $(e).replaceWith(
    '<div class="btn-group btn-group-sm right"><div id="fileopen" class="cursor-pointer btn-sm fa fa-folder-open" title="Open File"></div><div class="cursor-pointer btn-sm fa fa-floppy-o" title="Save online" onclick="Action_Save();"></div><div class="cursor-pointer btn-sm fa fa-check" title="JS Validator" onclick="validateJS();"></div><div class="cursor-pointer btn-sm fa fa-print" title="Print HTML" onclick="printHTML();"></div><div class="cursor-pointer btn-sm fa fa-times" title="Clear" onclick="clearHTMLEditor(\'inputeditor\')"></div><div id="inputcopy" title="Copy to Clipboard" class="cursor-pointer btn-sm btn-shrink fa fa-files-o"></div><div id="inputFullScreen" title="fullscreen" onclick="addOverlay(\'input\');" class="cursor-pointer btn-sm btn-fullscreen fa fa-arrows-alt"></div><div id="inputCloseScreen" title="Close" onclick="removeOverlay(\'input\');" style="display:none" class="cursor-pointer btn-sm btn-fullscreen fa fa-window-close"></div></div>'
  ),
    $(e).show(),
    $("#inputcopy").click(function () {
      copyToClipboard(inputEditor.getValue());
    }),
    inputEditor.focus();
}
function jadetohtml() {
  var e = require("pug"),
    t = inputEditor.getValue(),
    o = e.render(t, { pretty: !0 });
  (o = o.replace(/^\n/, "")), outputEditor.setValue(o);
}
function htmltojade() {
  var e = inputEditor.getValue();
  Html2Jade.convertHtml(e, null, function (e, t) {
    if (e) throw new Error(e.toString());
    outputEditor.setValue(t);
  });
}
function validateHTML() {
  var e = inputEditor.getValue();
  if (null != e && "" != e && e.trim().length > 0)
    try {
      $.ajax({
        type: "post",
        url: "/service/validateHTML",
        dataType: "json",
        data: { data: e, toolstype: toolstype },
        success: function (e) {
          if (0 == e.length)
            setMessage("success", "Valid HTML"),
              outputEditor.setValue("Valid HTML");
          else {
            var t = "";
            $.each(e, function (e, o) {
              var a = "";
              (a =
                (a =
                  (a = (a += "Error on-> ") + " Line :" + o.line) +
                  " Column :" +
                  o.column +
                  "\n") +
                "Message :" +
                o.message +
                "\n"),
                (t += a);
            }),
              setMessage("success", "Invalid HTML"),
              outputEditor.setValue(t.trim());
          }
        },
      });
    } catch (e) {
      setMessage("error", e);
    }
}
function minifyHTML() {
  var e = inputEditor.getValue();
  if (null != e && "" != e && e.trim().length > 0) {
    var t = require("html-minifier").minify;
    outputEditor.setValue(
      t(e, {
        caseSensitive: !1,
        collapseBooleanAttributes: !0,
        collapseInlineTagWhitespace: !1,
        collapseWhitespace: !0,
        conservativeCollapse: !1,
        decodeEntities: !0,
        html5: !0,
        includeAutoGeneratedTags: !1,
        keepClosingSlash: !1,
        minifyCSS: !0,
        minifyJS: !0,
        preserveLineBreaks: !1,
        preventAttributesEscaping: !1,
        processConditionalComments: !0,
        processScripts: ["text/html"],
        removeAttributeQuotes: !0,
        removeComments: !0,
        removeEmptyAttributes: !0,
        removeEmptyElements: !1,
        removeOptionalTags: !0,
        removeRedundantAttributes: !0,
        removeScriptTypeAttributes: !0,
        removeStyleLinkTypeAttributes: !0,
        removeTagWhitespace: !0,
        sortAttributes: !0,
        sortClassName: !0,
        trimCustomFragments: !0,
        useShortDoctype: !0,
      })
    );
  }
}
function printHTML() {
  hideMessage();
  var e = $("<div>").text(inputEditor.getValue()).html();
  localStorage.setItem("data", e),
    $("<iframe>").attr("src", "/htmlprint").appendTo("body");
}
function plainHTML() {
  hideMessage(),
    formatHTML(),
    localStorage.setItem("data", outputEditor.getValue()),
    window.open("/htmlview", "_blank").focus();
}
function formatHTML() {
  $("#errorClose").click(),
    outputEditor.setValue(vkbeautify.xml(inputEditor.getValue()));
}
function formatJS() {
  var e = $("#sel1").val();
  outputEditor.setValue(
    js_beautify(inputEditor.getValue(), { indent_size: e, indent_char: "\t" })
  );
}
function plainJS() {
  hideMessage(),
    formatJS(),
    localStorage.setItem("jsdata", outputEditor.getValue()),
    window.open("/jsview", "_blank").focus();
}
function printJS() {
  hideMessage();
  var e = $("<div>").text(outputEditor.getValue()).html();
  localStorage.setItem("jsdata", e),
    $("<iframe>").attr("src", "/jsprint").appendTo("body");
}
function getJSSample() {
  return ' // Create an object: \nvar company = {  name: "GEICO",type: "Insurance company",founded: 1936,website: "GEICO.com"}; \n\n// Display some data from the object: \nconsole.log(company.name +" is an " + company.type + " Founded in " \n+ company.founded);\nconsole.log("Know more about "+ company.name + " visit "+ company.website);';
}
function clearHTMLEditor(e) {
  "inputeditor" == e
    ? inputEditor.setValue("")
    : "all" == e
    ? (inputEditor.setValue(""), outputEditor.setValue(""))
    : outputEditor.setValue("");
}
function downloadinHTMLTool() {
  var e = outputEditor.getValue();
  if (0 != e.trim().length) {
    if ("function" != typeof saveAs)
      return void $.loadScript(
        "dist/js/vendor/FileSaver.min.js",
        downloadinHTMLTool
      );
    var t = new Blob(["" + e], { type: "text/plain;charset=utf-8" });
    (filename = "data.htm"), saveAs(t, filename);
  } else setMessage("error", "Sorry Result is Empty");
}
function addHTMLOutputIconstoEditor(e) {
  var t = $(".outputrightmenu");
  $(t).after(
    '<div id="outputToolBar" class="btn-group btn-group-sm right"><div class="cursor-pointer btn-sm fa fa-times" title="Clear" onclick="clearHTMLEditor()"></div><div class="cursor-pointer btn-sm fa fa-download" title="Download" onclick="downloadinHTMLTool();"></div><div id="outputcopy" title="Copy to Clipboard" class="cursor-pointer btn-sm btn-shrink fa fa-files-o"></div><div id="outputFullScreen" title="fullscreen" onclick="addOverlay(\'output\');" class="cursor-pointer btn-sm btn-fullscreen fa fa-arrows-alt"></div><div id="outputCloseScreen" title="Close" onclick="removeOverlay(\'output\');" style="display:none" class="cursor-pointer btn-sm btn-fullscreen fa fa-window-close"></div></div>'
  ),
    e ? $(t).show() : $(t).hide(),
    $("#outputcopy").click(function () {
      copyToClipboard(outputEditor.getValue());
    });
}
$(document).ready(function () {
  $("#outputeditorDiv1").hide(),
    $("button").click(function () {
      void 0 !== $(this).attr("button-role") &&
      "run" == $(this).attr("button-role").toLowerCase()
        ? ($("#outputeditorDiv1").show(), $("#outputeditor").hide())
        : ($("#outputeditorDiv1").hide(), $("#outputeditor").show());
    });
});
var outPutDataForJS = "";
function validateJS() {
  var e = inputEditor.getValue();
  if (null != e && "" != e && e.trim().length > 0) {
    var t = {};
    each(prefs.opts, function (e, o) {
      t[o] = e;
    }),
      each(prefs.rev, function (e, o) {
        t[o] = !e;
      }),
      JSHINT(e, t),
      display(JSHINT.data()),
      $(".report tr").each(function () {
        var e = "";
        $($(this).html() + " td").each(function () {
          e = e + " " + $(this).html();
        }),
          console.log("hi:-> " + e);
      });
  }
}
function display(e) {
  showUndef(e.implieds),
    showUnused(e.unused),
    showErrors(e.errors),
    showMetrics(e.functions);
}
function showErrors(e) {
  var t = el("[data-type=errors]"),
    o = "";
  if (((t.innerHTML = ""), !e)) return !1;
  (o =
    1 === e.length
      ? "One warning"
      : e.length < 11
      ? NUM_TEXTS[e.length] + " warnings"
      : e.length + " warnings"),
    t.appendChild(makeRow(null, o)),
    e.forEach(function (e) {
      null !== e && t.appendChild(makeRow(e.line, e.reason));
    });
}
function showUndef(e) {
  var t = el("[data-type=undef]"),
    o = (t.innerHTML = "");
  return (
    !(!prefs.meta.undef || !e) &&
    ((o =
      1 === e.length
        ? "One undefined variable"
        : e.length < 11
        ? NUM_TEXTS[e.length] + " undefined variables"
        : e.length + " undefined variables"),
    t.appendChild(makeRow(null, o)),
    e.forEach(function (e) {
      e.line.forEach(function (o) {
        t.appendChild(makeRow(o, e.name));
      });
    }),
    e.length > 0)
  );
}
function showUnused(e) {
  var t = el("[data-type=unused]"),
    o = (t.innerHTML = "");
  return (
    !(!prefs.meta.unused || !e) &&
    ((o =
      1 === e.length
        ? "One unused variable"
        : e.length < 11
        ? NUM_TEXTS[e.length] + " unused variables"
        : e.length + " unused variables"),
    t.appendChild(makeRow(null, o)),
    e.forEach(function (e) {
      t.appendChild(makeRow(e.line, e.name));
    }),
    e.length > 0)
  );
}
function showMetrics(e) {
  var t = el("[data-type=metrics]"),
    o = el("[data-type=metrics] > div");
  function a(e) {
    var t = document.createElement("p");
    (t.innerHTML = e), o.appendChild(t);
  }
  function n(e) {
    var t,
      o = e.length;
    return (
      e.sort(function (e, t) {
        return e - t;
      }),
      (t = Math.floor(o / 2)),
      console.log(e),
      { max: e[o - 1], med: o % 2 ? e[t] : (e[t - 1] + e[t]) / 2 }
    );
  }
  if (((o.innerHTML = ""), !prefs.meta.complex || !e.length))
    return (t.style.display = "none"), !1;
  if (((t.style.display = "block"), 1 !== e.length)) {
    var i = e.length,
      r = n(
        e.map(function (e) {
          return e.metrics.parameters;
        })
      ),
      l = n(
        e.map(function (e) {
          return e.metrics.statements;
        })
      ),
      s = n(
        e.map(function (e) {
          return e.metrics.complexity;
        })
      );
    a("There are <b>" + i + "</b> functions in this file."),
      a(
        "Function with the largest signature take <b>" +
          r.max +
          "</b> arguments, while the median is <b>" +
          r.med +
          "</b>."
      ),
      a(
        "Largest function has <b>" +
          l.max +
          "</b> statements in it, while the median is <b>" +
          l.med +
          "</b>."
      ),
      a(
        "The most complex function has a cyclomatic complexity value of <b>" +
          s.max +
          "</b> while the median is <b>" +
          s.med +
          "</b>."
      );
  } else {
    switch (
      (a("There is only <b>one</b> function in this file."),
      e[0].metrics.parameters)
    ) {
      case 0:
        a("It takes <b>no</b> arguments.");
        break;
      case 1:
        a("It takes <b>one</b> argument.");
        break;
      default:
        a("It takes <b>" + e[0].metrics.parameters + "</b> arguments.");
    }
    switch (e[0].metrics.statements) {
      case 0:
        a("This function is <b>empty</b>.");
        break;
      case 1:
        a("This function contains only <b>one</b> statement.");
        break;
      default:
        a(
          "This function contains <b>" +
            e[0].metrics.statements +
            "</b> statements."
        );
    }
    a(
      "Cyclomatic complexity number for this function is <b>" +
        e[0].metrics.complexity +
        "</b>."
    );
  }
}
function restore(e) {
  try {
    return JSON.parse(localStorage.getItem(e));
  } catch (t) {
    return localStorage.removeItem(e), null;
  }
}
function el(e) {
  return document.querySelector(e);
}
function on(e, t, o) {
  el(e).addEventListener(t, o, !1);
}
function show(e) {
  el(e).style.display = "block";
}
function hide(e) {
  el(e).style.display = "none";
}
function each(e, t) {
  Object.keys(e).forEach(function (o) {
    t(e[o], o);
  });
}
var prefs = restore("prefs") || {
  opts: {
    forin: !0,
    noarg: !0,
    bitwise: !0,
    nonew: !0,
    strict: !1,
    browser: !0,
    devel: !0,
    node: !1,
    jquery: !1,
    esnext: !1,
    moz: !1,
    es3: !1,
  },
  rev: {
    eqnull: !0,
    debug: !0,
    boss: !0,
    evil: !0,
    loopfunc: !0,
    laxbreak: !0,
  },
  meta: { unused: !0, undef: !0, complex: !0 },
};
function pref(e, t) {
  var o = null;
  return (
    each(prefs, function (t, a) {
      void 0 !== t[e] && (o = a);
    }),
    o ? (void 0 !== t && (prefs[o][e] = t), prefs[o][e] || null) : null
  );
}
function setup() {
  each(prefs, function (e, t) {
    each(e, function (e, t) {
      el("#" + t).className = e ? "active" : "";
    });
  }),
    on("body", "click", function (e) {
      if ("toggle" === e.target.getAttribute("data-type")) {
        var t = e.target;
        t.getAttribute("data-target")
          .split(",")
          .forEach(function (e, o) {
            var a = el("#" + e),
              n = cache.toggled[e];
            (cache.toggled[e] = n = !n),
              (a.style.display = n ? "block" : "none"),
              n || save("prefs", prefs),
              0 === o && (t.className = n ? "active" : "");
          });
      }
    }),
    on("body", "click", function (e) {
      if ("pref" === e.target.getAttribute("data-type")) {
        var t = e.target,
          o = t.getAttribute("id");
        pref(o, !pref(o)), (t.className = pref(o) ? "active" : ""), lint();
      }
    });
}
var NUM_TEXTS = [
  null,
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
];
function makeRow(e, t) {
  var o = document.createElement("tr"),
    a = document.createElement("td");
  if (((a.innerHTML = t), null !== e)) {
    var n = document.createElement("td");
    (n.className = "lineno"),
      (n.innerHTML = e),
      o.appendChild(n),
      o.addEventListener("mouseover", function () {}),
      o.addEventListener("mouseout", function () {});
  } else (a.className = "header"), a.setAttribute("colspan", 2);
  return o.appendChild(a), o;
}
function openJSValidateOptions() {
  setup();
}
