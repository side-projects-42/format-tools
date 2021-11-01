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
  function t(t) {
    var e = "    ";
    if (isNaN(parseInt(t))) e = t;
    else
      switch (t) {
        case 1:
          e = " ";
          break;
        case 2:
          e = "  ";
          break;
        case 3:
          e = "   ";
          break;
        case 4:
          e = "    ";
          break;
        case 5:
          e = "     ";
          break;
        case 6:
          e = "      ";
          break;
        case 7:
          e = "       ";
          break;
        case 8:
          e = "        ";
          break;
        case 9:
          e = "         ";
          break;
        case 10:
          e = "          ";
          break;
        case 11:
          e = "           ";
          break;
        case 12:
          e = "            ";
      }
    var a = ["\n"];
    for (ix = 0; ix < 100; ix++) a.push(a[ix] + e);
    return a;
  }
  function e() {
    (this.step = "\t"), (this.shift = t(this.step));
  }
  function a(t, e) {
    return e - (t.replace(/\(/g, "").length - t.replace(/\)/g, "").length);
  }
  function o(t, e) {
    return t
      .replace(/\s{1,}/g, " ")
      .replace(/ AND /gi, "~::~" + e + e + "AND ")
      .replace(/ BETWEEN /gi, "~::~" + e + "BETWEEN ")
      .replace(/ CASE /gi, "~::~" + e + "CASE ")
      .replace(/ ELSE /gi, "~::~" + e + "ELSE ")
      .replace(/ END /gi, "~::~" + e + "END ")
      .replace(/ FROM /gi, "~::~FROM ")
      .replace(/ GROUP\s{1,}BY/gi, "~::~GROUP BY ")
      .replace(/ HAVING /gi, "~::~HAVING ")
      .replace(/ IN /gi, " IN ")
      .replace(/ JOIN /gi, "~::~JOIN ")
      .replace(/ CROSS~::~{1,}JOIN /gi, "~::~CROSS JOIN ")
      .replace(/ INNER~::~{1,}JOIN /gi, "~::~INNER JOIN ")
      .replace(/ LEFT~::~{1,}JOIN /gi, "~::~LEFT JOIN ")
      .replace(/ RIGHT~::~{1,}JOIN /gi, "~::~RIGHT JOIN ")
      .replace(/ ON /gi, "~::~" + e + "ON ")
      .replace(/ OR /gi, "~::~" + e + e + "OR ")
      .replace(/ ORDER\s{1,}BY/gi, "~::~ORDER BY ")
      .replace(/ OVER /gi, "~::~" + e + "OVER ")
      .replace(/\(\s{0,}SELECT /gi, "~::~(SELECT ")
      .replace(/\)\s{0,}SELECT /gi, ")~::~SELECT ")
      .replace(/ THEN /gi, " THEN~::~" + e)
      .replace(/ UNION /gi, "~::~UNION~::~")
      .replace(/ USING /gi, "~::~USING ")
      .replace(/ WHEN /gi, "~::~" + e + "WHEN ")
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
  (e.prototype.xml = function (e, a) {
    var o = e
        .replace(/>\s{0,}</g, "><")
        .replace(/</g, "~::~<")
        .replace(/\s*xmlns\:/g, "~::~xmlns:")
        .replace(/\s*xmlns\=/g, "~::~xmlns=")
        .split("~::~"),
      r = o.length,
      n = !1,
      i = 0,
      l = "",
      s = 0,
      c = a ? t(a) : this.shift;
    for (s = 0; s < r; s++)
      o[s].search(/<!/) > -1
        ? ((l += c[i] + o[s]),
          (n = !0),
          (o[s].search(/-->/) > -1 ||
            o[s].search(/\]>/) > -1 ||
            o[s].search(/!DOCTYPE/) > -1) &&
            (n = !1))
        : o[s].search(/-->/) > -1 || o[s].search(/\]>/) > -1
        ? ((l += o[s]), (n = !1))
        : /^<\w/.exec(o[s - 1]) &&
          /^<\/\w/.exec(o[s]) &&
          /^<[\w:\-\.\,]+/.exec(o[s - 1]) ==
            /^<\/[\w:\-\.\,]+/.exec(o[s])[0].replace("/", "")
        ? ((l += o[s]), n || i--)
        : o[s].search(/<\w/) > -1 &&
          -1 == o[s].search(/<\//) &&
          -1 == o[s].search(/\/>/)
        ? (l = l += n ? o[s] : c[i++] + o[s])
        : o[s].search(/<\w/) > -1 && o[s].search(/<\//) > -1
        ? (l = l += n ? o[s] : c[i] + o[s])
        : o[s].search(/<\//) > -1
        ? (l = l += n ? o[s] : c[--i] + o[s])
        : o[s].search(/\/>/) > -1
        ? (l = l += n ? o[s] : c[i] + o[s])
        : o[s].search(/<\?/) > -1 ||
          o[s].search(/xmlns\:/) > -1 ||
          o[s].search(/xmlns\=/) > -1
        ? (l += c[i] + o[s])
        : (l += o[s]);
    return "\n" == l[0] ? l.slice(1) : l;
  }),
    (e.prototype.json = function (t, e) {
      e = e || this.step;
      return "undefined" == typeof JSON
        ? t
        : "string" == typeof t
        ? JSON.stringify(JSON.parse(t), null, e)
        : "object" == typeof t
        ? JSON.stringify(t, null, e)
        : t;
    }),
    (e.prototype.css = function (e, a) {
      var o = e
          .replace(/\s{1,}/g, " ")
          .replace(/\{/g, "{~::~")
          .replace(/\}/g, "~::~}~::~")
          .replace(/\;/g, ";~::~")
          .replace(/\/\*/g, "~::~/*")
          .replace(/\*\//g, "*/~::~")
          .replace(/~::~\s{0,}~::~/g, "~::~")
          .split("~::~"),
        r = o.length,
        n = 0,
        i = "",
        l = 0,
        s = a ? t(a) : this.shift;
      for (l = 0; l < r; l++)
        /\{/.exec(o[l])
          ? (i += s[n++] + o[l])
          : /\}/.exec(o[l])
          ? (i += s[--n] + o[l])
          : (/\*\\/.exec(o[l]), (i += s[n] + o[l]));
      return i.replace(/^\n{1,}/, "");
    }),
    (e.prototype.sql = function (e, r) {
      var n = e
          .replace(/\s{1,}/g, " ")
          .replace(/\'/gi, "~::~'")
          .split("~::~"),
        i = n.length,
        l = [],
        s = 0,
        c = this.step,
        p = 0,
        u = "",
        d = 0,
        g = r ? t(r) : this.shift;
      for (d = 0; d < i; d++) l = d % 2 ? l.concat(n[d]) : l.concat(o(n[d], c));
      for (i = l.length, d = 0; d < i; d++) {
        (p = a(l[d], p)),
          /\s{0,}\s{0,}SELECT\s{0,}/.exec(l[d]) &&
            (l[d] = l[d].replace(/\,/g, ",\n" + c + c)),
          /\s{0,}\s{0,}SET\s{0,}/.exec(l[d]) &&
            (l[d] = l[d].replace(/\,/g, ",\n" + c + c)),
          /\s{0,}\(\s{0,}SELECT\s{0,}/.exec(l[d])
            ? (u += g[++s] + l[d])
            : /\'/.exec(l[d])
            ? (p < 1 && s && s--, (u += l[d]))
            : ((u += g[s] + l[d]), p < 1 && s && s--);
      }
      return (u = u.replace(/^\n{1,}/, "").replace(/\n{1,}/g, "\n"));
    }),
    (e.prototype.xmlmin = function (t, e) {
      return (
        e
          ? t
          : t
              .replace(
                /\<![ \r\n\t]*(--([^\-]|[\r\n]|-[^\-])*--[ \r\n\t]*)\>/g,
                ""
              )
              .replace(/[ \r\n\t]{1,}xmlns/g, " xmlns")
      ).replace(/>\s{0,}</g, "><");
    }),
    (e.prototype.jsonmin = function (t) {
      return "undefined" == typeof JSON
        ? t
        : JSON.stringify(JSON.parse(t), null, 0);
    }),
    (e.prototype.cssmin = function (t, e) {
      return (
        e ? t : t.replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\//g, "")
      )
        .replace(/\s{1,}/g, " ")
        .replace(/\{\s{1,}/g, "{")
        .replace(/\}\s{1,}/g, "}")
        .replace(/\;\s{1,}/g, ";")
        .replace(/\/\*\s{1,}/g, "/*")
        .replace(/\*\/\s{1,}/g, "*/");
    }),
    (e.prototype.sqlmin = function (t) {
      return t
        .replace(/\s{1,}/g, " ")
        .replace(/\s{1,}\(/, "(")
        .replace(/\s{1,}\)/, ")");
    }),
    (window.vkbeautify = new e());
})();
var previouskey,
  toolstype = "json",
  isFullScreen = !1,
  userId = 0;
function preInitEditors() {
  var t = null;
  if ("json" == toolstype)
    createJsonEditor(),
      cleanJSONEditor("all"),
      (t = getFromLocalStorage()),
      setDataInInputEditor(t);
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
  $(document).ajaxSend(function (t, e, a) {
    $("#pluswrap").removeClass("hide");
  }),
    $(document).ajaxComplete(function (t, e, a) {
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
  var t = getCookie("loggedinuser");
  "" != t
    ? ((userId = getCookie("loggedinuserid")),
      $("#loggedUserName").text(t),
      $("#loginDropdown").show(),
      $("#loginDiv").hide())
    : ($("#loginDropdown").hide(), $("#loginDiv").show(), (userId = 0));
}
function getCookie(t) {
  for (
    var e = t + "=", a = document.cookie.split(";"), o = 0;
    o < a.length;
    o++
  ) {
    for (var r = a[o]; " " == r.charAt(0); ) r = r.substring(1);
    if (0 == r.indexOf(e))
      return (e = r.substring(e.length, r.length)).replace(/\+/g, " ");
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
  var t = window.location.pathname;
  if (localStorage) {
    var e = localStorage.getItem("urlBeforeLogin");
    e && t !== e && window.open(e, "_self");
  }
}
function isAceEditor(t) {
  return $(t.container).hasClass("ace_editor");
}
function getOverlayClass(t) {
  return isAceEditor(t)
    ? "overlayaceeditor"
    : void 0 !== t && t instanceof JSONEditor
    ? "overlayjsoneditor"
    : void 0;
}
function addOverlay(t) {
  if ("input" == t) {
    $("#inputdiv").addClass("overlay"),
      $("#inputFullScreen").hide(),
      $("#inputCloseScreen").show(),
      (fullscreenEditor = "input"),
      $("#inputeditor").addClass(getOverlayClass(inputEditor));
    try {
      inputEditor.resize();
    } catch (t) {}
  } else if ("output" == t) {
    $("#outputdiv").addClass("overlay"),
      $("#outputFullScreen").hide(),
      $("#outputCloseScreen").show(),
      (fullscreenEditor = "output"),
      $("#outputeditor").addClass(getOverlayClass(outputEditor));
    try {
      outputEditor.resize();
    } catch (t) {}
  }
  (isFullScreen = !0), $("body").css("overflow", "hidden");
}
function removeOverlay(t) {
  if ("input" == t) {
    $("#inputdiv").removeClass("overlay"),
      $("#inputFullScreen").show(),
      $("#inputCloseScreen").hide(),
      $("#inputeditor").removeClass(getOverlayClass(inputEditor));
    try {
      inputEditor.resize();
    } catch (t) {}
  } else if ("output" == t) {
    $("#outputdiv").removeClass("overlay"),
      $("#outputFullScreen").show(),
      $("#outputCloseScreen").hide(),
      $("#outputeditor").removeClass(getOverlayClass(outputEditor));
    try {
      outputEditor.resize();
    } catch (t) {}
  }
  $("body").css("overflow", ""), (isFullScreen = !1);
}
function updateFullScreenIcons(t) {
  isFullScreen
    ? "input" == t
      ? ($("#inputFullScreen").hide(),
        $("#inputCloseScreen").show(),
        (fullscreenEditor = "input"))
      : "output" == t &&
        ($("#outputFullScreen").hide(),
        $("#outputCloseScreen").show(),
        (fullscreenEditor = "output"))
    : "input" == t
    ? ($("#inputFullScreen").show(), $("#inputCloseScreen").hide())
    : "output" == t &&
      ($("#outputFullScreen").show(), $("#outputCloseScreen").hide());
}
function getCookie(t) {
  for (
    var e = t + "=", a = document.cookie.split(";"), o = 0;
    o < a.length;
    o++
  ) {
    for (var r = a[o]; " " == r.charAt(0); ) r = r.substring(1);
    if (0 == r.indexOf(e))
      return (e = r.substring(e.length, r.length)).replace(/\+/g, " ");
  }
  return "";
}
function copyToClipboard(t) {
  var e = $("<textarea>");
  $("body").append(e),
    e.val(t).select(),
    document.execCommand("copy"),
    e.remove(),
    $("#flymessage").toggleClass("in"),
    setTimeout(function () {
      $("#flymessage").removeClass("in");
    }, 2e3);
}
function setMessage(t, e, a) {
  void 0 === a && (a = !0), $("#msgDiv").html("");
  var o = "";
  (o =
    "success" == t
      ? "/" == window.location.pathname
        ? '<div class="alert alert-info" style="margin-top: 0px;margin-bottom: 5px;">'
        : '<div class="alert alert-info" >'
      : '<div class="alert alert-danger" >'),
    (o +=
      '<a href="#" class="close" data-dismiss="alert" aria-label="close" id="errorClose">&times;</a>'),
    (o += "<label>" + e + "</label></div>"),
    $("#msgDiv").html(o),
    a &&
      setTimeout(function () {
        $("#errorClose").click();
      }, 3e3);
}
function decodeSpecialCharacter(t) {
  return t
    .replace(/\&amp;/g, "&")
    .replace(/\&gt;/g, ">")
    .replace(/\&lt;/g, "<")
    .replace(/\&quot;/g, '"');
}
function setModelTitle(t) {
  "Formatted JSON" == t ? addOutputIconstoEditor(!0) : addOutputIconstoEditor();
}
function hideMessage() {
  $("#msgDiv").html(""), $("#outputeditor .menu").show();
}
function loadUrl() {
  var t = $("#path").val();
  t.trim().length > 5 && ($("#loadFileClose").click(), load(t));
}
function load(t) {
  $.ajax({
    type: "post",
    url: "//codebeautify.com/URLService",
    dataType: "text",
    data: { path: t },
    success: function (t) {
      null != t && null != t && 0 != t.trim().length && setExternalURLData(t);
    },
    error: function (t, e, a) {
      setMessage("error", "Failed to load data=" + e), cleanJSONEditor("all");
    },
  });
}
function getDataFromUrlId(t) {
  $.ajax({
    type: "post",
    url: "/service/getDataFromID",
    dataType: "json",
    data: { urlid: t, toolstype: toolstype },
    success: function (t) {
      null != t && null != t && 0 != t.length
        ? setDataView(t)
        : alert("This URL does not Exist.");
    },
    error: function (t, e, a) {
      setMessage("error", "Failed to load data=" + a),
        cleanJSONEditor("editor"),
        cleanJSONEditor();
    },
  });
}
function setExternalURLData(t) {
  "json" == toolstype
    ? setJSONDataFromResponse(t)
    : "xml" == toolstype
    ? setXMLDataFromResponse(t)
    : "yaml" == toolstype
    ? yamlInputeditor.setValue(t)
    : inputEditor.setValue(t);
}
function setDataView(t) {
  $("#title").val(t.title),
    $("#tags").val(t.tags),
    $("#desc").val(t.desc),
    "json" == toolstype
      ? setJSONDataFromResponse(t.content, t.lastaction)
      : "xml" == toolstype
      ? setXMLDataFromResponse(t.content, t.lastaction)
      : "yaml" == toolstype
      ? yamlInputeditor.setValue(t.content)
      : inputEditor.setValue(t.content),
    (userId = t.user_id),
    $("#id").val(t.id);
}
function setJSONDataFromResponse(t, e) {
  try {
    var a = $.parseJSON(t);
    inputEditor.setText(JSON.stringify(a, null, 2)),
      null != e ? updateJSONOutput(e) : defaultAction();
  } catch (e) {
    setMessage("error", "Invalid JSON Data: " + e), inputEditor.setText(t);
  }
}
function setXMLDataFromResponse(t, e) {
  try {
    inputEditor.setValue(t), null != e ? updateXMLOutput(e) : defaultAction();
  } catch (t) {
    setMessage("error", "Invalid XML Data: " + t);
  }
}
function openFile() {
  $("input[type=file]").click();
}
function readSelectedFile() {
  $("#loadFileClose").click();
  $("#viewname").val();
  var t = "/service/uploadFile";
  "excel-to-html" == $("#viewname").val() && (t = "SheetReader/uploadFile"),
    $.ajax({
      url: t,
      type: "POST",
      data: formdata,
      processData: !1,
      contentType: !1,
      success: function (t) {
        "error" != t
          ? "excel-to-html" == $("#viewname").val()
            ? converExcelToHtml(t)
            : (setDataInInputEditor(t), defaultAction())
          : setMessage("error", "Error in Loading File.");
      },
    });
}
function download() {
  var t = outputEditor.getText();
  if (0 != t.trim().length) {
    if ("function" != typeof saveAs)
      return void $.loadScript("dist/js/vendor/FileSaver.min.js", download);
    var e = outputEditor.getMode();
    if ("tree" === e || "form" === e || "view" === e) {
      var a = $.parseJSON(t);
      t = JSON.stringify(a, null, 2);
    }
    var o = new Blob(["" + t], { type: "text/plain;charset=utf-8" });
    (filename = "jsonformatter.txt"),
      "jsonToxml" == last_action && (filename = "jsonformatter.xml"),
      saveAs(o, filename);
  } else setMessage("error", "Sorry Result is Empty");
}
function clearInput(t) {
  "saveDialog" == t
    ? ($("#desc").val(""), $("#title").val(""), $("#tags").val(""))
    : $("#path").val("");
}
function handleCtrlV() {
  $(document).keyup(function (t) {
    (t.ctrlKey && 86 == t.keyCode) || (17 == previouskey && 86 == t.keyCode)
      ? (defaultAction(), (previouskey = -1))
      : (previouskey = t.keyCode);
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
    var t = $("#dataUrl").val();
    0 != userId && 0 != t.trim().length
      ? $("#btnUpdate").show()
      : ($("#btnUpdate").hide(), clearInput("saveDialog")),
      $("#openSave").click();
  }
}
function save(t) {
  var e,
    a = $("#title").val();
  null != a && 0 != a.length
    ? ($("#loadSaveClose").click(),
      (e =
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
          content: e,
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
        success: function (e) {
          if ("error" != e) {
            var a = null;
            setMessage(
              "success",
              "Data saved successfully - <a class='white' href ='" +
                (a =
                  "index" == $("#viewname").val().trim()
                    ? "https://" + location.host + "/" + e
                    : "https://" +
                      location.host +
                      "/" +
                      $("#viewname").val().trim() +
                      "/" +
                      e) +
                "'>" +
                a +
                "</a>",
              !1
            ),
              null != t && shareLink(a);
          } else alert("Please validate the input and try again.");
        },
        error: function (t, e, a) {
          setMessage("error", "Error in data saving");
        },
      }))
    : alert("Title is required");
}
function update() {
  var t;
  $("#loadSaveClose").click(),
    (t =
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
        content: t,
        title: $("#title").val(),
        desc: $("#desc").val(),
        tags: $("#tags").val().trim(),
      },
      success: function (t) {
        setMessage("success", "Data updatd successfully");
      },
      error: function (t, e, a) {
        setMessage("error", "Error in data updating");
      },
    });
}
function shareLink(t) {
  "google" == getProvider()
    ? window.open("https://plus.google.com/share?url=" + t, "_blank")
    : window.open("https://www.facebook.com/share.php?u=" + t, "_blank");
}
$(function () {
  if (
    ($(window).scrollTop(0),
    "recentLinks" == (toolstype = $("#type").val().trim()))
  ) {
    var t = $("#clickedLink").val() + "Link";
    $("#linkDiv a.disabled").removeClass("disabled").addClass("active"),
      $("#linkDiv a#" + t)
        .removeClass("active")
        .addClass("disabled");
  }
  0 != $("#inputeditor").length && preInitEditors();
}),
  (jQuery.loadScript = function (t, e) {
    $.ajaxSetup({ cache: !0 }),
      jQuery.ajax({ url: t, dataType: "script", success: e, async: !0 }),
      $.ajaxSetup({ cache: !1 });
  }),
  $(document).keyup(function (t) {
    27 == t.keyCode && removeOverlay(fullscreenEditor);
  }),
  $(".navbar-collapse ul li a").click(function () {
    $(".navbar-toggle:visible").click();
  });
var old,
  online = function (t) {
    var e = new Date().getTime() / 1e3;
    return t && t.access_token && t.expires > e;
  };
function isDataUrlAvailable() {
  if (0 != $("#dataUrl").length) {
    var t = $("#dataUrl").val();
    0 != t.trim().length &&
      (6 == t.trim().length ? getDataFromUrlId(t) : load(t));
  }
}
function saveToLocalStorage(t) {
  localStorage &&
    (localStorage.setItem($("#viewname").val(), ""),
    localStorage.setItem($("#viewname").val(), t));
}
function getFromLocalStorage() {
  if (localStorage) {
    var t = localStorage.getItem($("#viewname").val());
    if (null != t && "URL is not valid." != t) return t;
  }
  return "";
}
function showErrorDialog(t) {
  $("#errorMsg").text(t), $("#openError").click();
}
function htmlOutput(t) {
  var e = t;
  if (
    (void 0 === t &&
      (e =
        "html-editor" == $("#viewname").val()
          ? $("#summernote").summernote("code")
          : inputEditor.getValue()),
    e.trim().length > 0)
  ) {
    var a = document.getElementById("result1").contentWindow.document;
    old != e && ((old = e), a.open(), a.write(old), a.close()),
      $("html, body").animate({ scrollTop: 0 }, 10);
  }
}
function getCSVTOTSV(t) {
  return t.split(",").join("\t");
}
function toHTML(t) {
  if (0 != t.trim().length) {
    (rows = ""), (thead = "<tr>");
    var e = Papa.parse(t),
      a = e.data,
      o = a.slice(1, a.length);
    o.sort(function (t, e) {
      return e.length - t.length;
    }),
      0 == o.length && (o = e.data);
    var r = 0;
    for (r = 0; r < o[0].length; r++)
      r < a[0].length
        ? (thead += "<th>" + a[0][r] + "</th>")
        : (thead += "<th>COLUMN" + (r + 1) + "</th>");
    thead += "</tr>";
    for (var n = 1; n < a.length; n++) {
      for (rows += "<tr>", r = 0; r < o[0].length; r++)
        r < a[n].length
          ? (rows += "<td>" + a[n][r] + "</td>")
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
  adsBlocked(function (t) {
    t ? $("#ablocker-big").show() : $("#ablocker-big").hide();
  });
}
function adsBlocked(t) {
  var e = new Request(
    "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
    { method: "HEAD", mode: "no-cors" }
  );
  fetch(e)
    .then(function (t) {
      return t;
    })
    .then(function (e) {
      console.log(e), t(!1);
    })
    .catch(function (e) {
      console.log(e), t(!0);
    });
}
$(function () {
  postInitEditors(), init();
});
var inputEditor,
  outputEditor,
  last_action = "validate";
function createEscaperEditor() {
  if (($("#savelink").hide(), 0 != $("#inputeditor").length)) {
    (inputEditor = ace.edit("inputeditor"))
      .getSession()
      .setMode("ace/mode/text"),
      inputEditor.getSession().setUseWrapMode(!0),
      inputEditor.setOptions({ fontSize: "10pt" }),
      addInputIconstoEditor(),
      inputEditor.on("change", function () {
        saveToLocalStorage(inputEditor.getValue());
      }),
      inputEditor.setValue(getFromLocalStorage()),
      (outputEditor = ace.edit("outputeditor"))
        .getSession()
        .setMode("ace/mode/text"),
      outputEditor.getSession().setUseWrapMode(!0),
      outputEditor.setOptions({ fontSize: "10pt" }),
      addOutputIconstoEditor();
  }
}
function addInputIconstoEditor() {
  var t = $(".rightmenu");
  $(t).replaceWith(
    '<div class="btn-group btn-group-sm right"><div id="fileopen" class="cursor-pointer btn-sm fa fa-folder-open" title="Open File" onclick="openFile();" ></div><div class="cursor-pointer btn-sm fa fa-times" title="Clear" onclick="clearEditor(\'inputeditor\')"></div><div id="inputcopy" title="Copy to Clipboard" class="cursor-pointer btn-sm btn-shrink fa fa-files-o"></div><div id="inputFullScreen" title="fullscreen" onclick="addOverlay(\'input\');" class="cursor-pointer btn-sm btn-fullscreen fa fa-arrows-alt"></div><div id="inputCloseScreen" title="Close" onclick="removeOverlay(\'input\');" style="display:none" class="cursor-pointer btn-sm btn-fullscreen fa fa-window-close"></div></div>'
  ),
    $(t).show(),
    $("#inputcopy").click(function () {
      copyToClipboard(inputEditor.getValue());
    }),
    inputEditor.focus();
}
function addOutputIconstoEditor(t) {
  var e = $(".outputrightmenu");
  $(e).after(
    '<div id="outputToolBar" class="btn-group btn-group-sm right"><div class="cursor-pointer btn-sm fa fa-times" title="Clear" onclick="clearEditor()"></div><div id="outputcopy" title="Copy to Clipboard" class="cursor-pointer btn-sm btn-shrink fa fa-files-o"></div><div id="outputFullScreen" title="fullscreen" onclick="addOverlay(\'output\');" class="cursor-pointer btn-sm btn-fullscreen fa fa-arrows-alt"></div><div id="outputCloseScreen" title="Close" onclick="removeOverlay(\'output\');" style="display:none" class="cursor-pointer btn-sm btn-fullscreen fa fa-window-close"></div></div>'
  ),
    t ? $(e).show() : $(e).hide(),
    $("#outputcopy").click(function () {
      copyToClipboard(outputEditor.getValue());
    });
}
function clearEditor(t) {
  "inputeditor" == t
    ? inputEditor.setValue("")
    : "all" == t
    ? (inputEditor.setValue(""), outputEditor.setValue(""))
    : outputEditor.setValue("");
}
function performUtility(t) {
  var e = inputEditor.getValue();
  if (null != e && "" != e && e.trim().length > 0) {
    var a = "";
    "lc" == t
      ? (a = e.toLowerCase())
      : "uc" == t
      ? (a = e.toUpperCase())
      : "r" == t
      ? (a = e.split("").reverse().join(""))
      : "cc" == t
      ? (a = "Number of Characters : " + e.length)
      : "wc" == t
      ? (a = "Number of Words : " + e.trim().split(/\s+/).length)
      : "HEscape" == t || "XEscape" == t
      ? (a = escapeHtml(e))
      : "HUnescape" == t || "XUnescape" == t
      ? (a = unEscapeHtml(e))
      : "JSEscape" == t || "JsonEscape" == t
      ? (a = escapeJavascript(e))
      : "JSUnescape" == t || "JsonUnescape" == t
      ? (a = unEscapeJavaScript(e))
      : "JavaEscape" == t || "NetEscape" == t
      ? (a = escapeJava(e))
      : "JavaUnescape" == t || "NetUnescape" == t
      ? (a = unEscapeJava(e))
      : "csvEscape" == t
      ? (a = escapeCSV(e))
      : "csvUnescape" == t
      ? (a = unEscapeCSV(e))
      : "sqlEscape" == t
      ? (a = escapeSQL(e))
      : "sqlUnescape" == t && (a = unEscapeSQL(e)),
      outputEditor.setValue(a);
  }
}
var escapeHtmlArray = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;",
};
function escapeHtml(t) {
  return String(t).replace(/[&<>"']/g, function (t) {
    return escapeHtmlArray[t];
  });
}
function escapeJavascript(t) {
  var e = "",
    a = 0;
  for (a = 0; a < t.length; a++) e += javascriptEscapeCode(t.charAt(a), !1);
  return e;
}
function javascriptEscapeCode(t) {
  switch (t.charAt(0)) {
    case "\r":
      return "\\r";
    case "\n":
      return "\\n";
    case "\v":
      return "\\v";
    case "'":
      return "\\'";
    case '"':
      return '\\"';
    case "&":
      return "\\&";
    case "\\":
      return "\\\\";
    case "\t":
      return "\\t";
    case "\b":
      return "\\b";
    case "\f":
      return "\\f";
    default:
      return t;
  }
}
function unEscapeJavaScript(t) {
  return t
    .replace(/\\r/g, "\r")
    .replace(/\\n/g, "\n")
    .replace(/\\'/g, "'")
    .replace(/\\\"/g, '"')
    .replace(/\\&/g, "&")
    .replace(/\\\\/g, "\\")
    .replace(/\\t/g, "\t")
    .replace(/\\b/g, "\b")
    .replace(/\\f/g, "\f")
    .replace(/\\x2F/g, "/")
    .replace(/\\x3C/g, "<")
    .replace(/\\x3E/g, ">");
}
function unEscapeHtml(t) {
  return String(t)
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}
function escapeJava(t) {
  var e = "",
    a = 0;
  for (a = 0; a < t.length; a++) e += javaEscapeCode(t.charAt(a), !1);
  return e;
}
function unEscapeJava(t) {
  return t
    .replace(/\\r/g, "\r")
    .replace(/\\n/g, "\n")
    .replace(/\\'/g, "'")
    .replace(/\\\"/g, '"')
    .replace(/\\\\/g, "\\")
    .replace(/\\t/g, "\t")
    .replace(/\\b/g, "\b")
    .replace(/\\f/g, "\f");
}
function javaEscapeCode(t, e) {
  if (!e || "\n" != t)
    switch (t.charAt(0)) {
      case "\n":
        return "\\n";
      case "\r":
        return "\\r";
      case "'":
        return "\\'";
      case '"':
        return '\\"';
      case "\\":
        return "\\\\";
      case "\t":
        return "\\t";
      case "\b":
        return "\\b";
      case "\f":
        return "\\f";
      default:
        return t;
    }
}
function unEscapeJava(t) {
  return t
    .replace(/\\r/g, "\r")
    .replace(/\\n/g, "\n")
    .replace(/\\'/g, "'")
    .replace(/\\\"/g, '"')
    .replace(/\\\\/g, "\\")
    .replace(/\\t/g, "\t")
    .replace(/\\b/g, "\b")
    .replace(/\\f/g, "\f");
}
function escapeSQL(t) {
  return String(t).replace(/'/g, '"');
}
function unEscapeSQL(t) {
  return String(t).replace(/"/g, "'");
}
function escapeCSV(t) {
  var e = String(t).replace(/"/g, '""');
  return (
    '"' != e.charAt(0) && (e = '"' + e),
    '"' != e.charAt(e.length - 1) && (e += '"'),
    e
  );
}
function unEscapeCSV(t) {
  return (
    '"' == t.charAt(0) && (t = t.substring(1, t.length - 1)),
    '"' == t.charAt(t.length - 1) && (t = t.substring(0, t.length - 2)),
    String(t).replace(/""/g, '"')
  );
}
function getEscaperSample() {
  var t = $("#viewname").val(),
    e = "";
  "html-escape" == t
    ? ((e =
        '<!DOCTYPE html>     <html>     <head>     <style>body{background-color:#d0e4fe;}h1{color:orange;text-align:center;}p{font-family:"Times New Roman";font-size:20px;}</style>     </head>     <body>     <h1>CSS example!</h1>     <p>This is a paragraph.</p>     <table>     <tr>     <td>100</td>     <td>200</td>     <td>300</td>     </tr>     </table>     <hr>     <h3>3 Rows and 3 Columns:</h3>     <table>     <tr>     <td>100</td>     <td>200</td>     <td>300</td>     </tr>     <tr>     <td>400</td>     <td>500</td>     <td>600</td>     </tr>     <tr>     <td>700</td>     <td>800</td>     <td>900</td>     </tr>     </table>     </body>    </html>  '),
      (e = vkbeautify.xml(e)))
    : "html-unescape" == t
    ? (e =
        "&lt;!DOCTYPE html&gt;     &lt;html&gt;     &lt;head&gt;     &lt;style&gt;body{background-color:#d0e4fe;}h1{color:orange;text-align:center;}p{font-family:&quot;Times New Roman&quot;;font-size:20px;}&lt;/style&gt;     &lt;/head&gt;     &lt;body&gt;     &lt;h1&gt;CSS example!&lt;/h1&gt;     &lt;p&gt;This is a paragraph.&lt;/p&gt;     &lt;table&gt;     &lt;tr&gt;     &lt;td&gt;100&lt;/td&gt;     &lt;td&gt;200&lt;/td&gt;     &lt;td&gt;300&lt;/td&gt;     &lt;/tr&gt;     &lt;/table&gt;     &lt;hr&gt;     &lt;h3&gt;3 Rows and 3 Columns:&lt;/h3&gt;     &lt;table&gt;     &lt;tr&gt;     &lt;td&gt;100&lt;/td&gt;     &lt;td&gt;200&lt;/td&gt;     &lt;td&gt;300&lt;/td&gt;     &lt;/tr&gt;     &lt;tr&gt;     &lt;td&gt;400&lt;/td&gt;     &lt;td&gt;500&lt;/td&gt;     &lt;td&gt;600&lt;/td&gt;     &lt;/tr&gt;     &lt;tr&gt;     &lt;td&gt;700&lt;/td&gt;     &lt;td&gt;800&lt;/td&gt;     &lt;td&gt;900&lt;/td&gt;     &lt;/tr&gt;     &lt;/table&gt;     &lt;/body&gt;    &lt;/html&gt;  ")
    : "xml-escape" == t
    ? ((e =
        '   <?xml version="1.0" encoding="UTF-8" ?>     <employees>         <employee>             <id>1</id>             <firstName>Leonardo</firstName>             <lastName>DiCaprio</lastName>             <photo>http://1.bp.blogspot.com/-zvS_6Q1IzR8/T5l6qvnRmcI/AAAAAAAABcc/HXO7HDEJKo0/s200/Leonardo+Dicaprio7.jpg</photo>         </employee>         <employee>             <id>2</id>             <firstName>Johnny</firstName>             <lastName>Depp</lastName>             <photo>http://4.bp.blogspot.com/_xR71w9-qx9E/SrAz--pu0MI/AAAAAAAAC38/2ZP28rVEFKc/s200/johnny-depp-pirates.jpg</photo>         </employee>         <employee>             <id>3</id>             <firstName>Hritik</firstName>             <lastName>Roshan</lastName>             <photo>http://thewallmachine.com/files/1411921557.jpg</photo>         </employee>    </employees>  '),
      (e = vkbeautify.xml(e)))
    : "xml-unescape" == t
    ? (e =
        "   &lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;     &lt;employees&gt;         &lt;employee&gt;             &lt;id&gt;1&lt;/id&gt;             &lt;firstName&gt;Leonardo&lt;/firstName&gt;             &lt;lastName&gt;DiCaprio&lt;/lastName&gt;             &lt;photo&gt;http://1.bp.blogspot.com/-zvS_6Q1IzR8/T5l6qvnRmcI/AAAAAAAABcc/HXO7HDEJKo0/s200/Leonardo+Dicaprio7.jpg&lt;/photo&gt;         &lt;/employee&gt;         &lt;employee&gt;             &lt;id&gt;2&lt;/id&gt;             &lt;firstName&gt;Johnny&lt;/firstName&gt;             &lt;lastName&gt;Depp&lt;/lastName&gt;             &lt;photo&gt;http://4.bp.blogspot.com/_xR71w9-qx9E/SrAz--pu0MI/AAAAAAAAC38/2ZP28rVEFKc/s200/johnny-depp-pirates.jpg&lt;/photo&gt;         &lt;/employee&gt;         &lt;employee&gt;             &lt;id&gt;3&lt;/id&gt;             &lt;firstName&gt;Hritik&lt;/firstName&gt;             &lt;lastName&gt;Roshan&lt;/lastName&gt;             &lt;photo&gt;http://thewallmachine.com/files/1411921557.jpg&lt;/photo&gt;         &lt;/employee&gt;    &lt;/employees&gt;  ")
    : "javascript-escape" == t
    ? (e =
        '   <script>     for (var line=1; line<30; line++) {       for(var i=1;i<29;i++) {         var s = (Math.floor((Math.random()*2)%2)) ? "╱" : "╲";         document.write(s);       }       document.writeln("<br>");     }    </script>  ')
    : "javascript-unescape" == t
    ? (e =
        '  <script>\nfor (var line=1; line<30; line++) {\n  for(var i=1;i<29;i++) {\n    var s = (Math.floor((Math.random()*2)%2)) ? "╱" : "╲";\n    document.write(s);\n  }\n  document.writeln("<br>");\n}\n</script>  ')
    : "json-unescape" == t
    ? (e =
        '  {\n         "employees": {\n             "employee": [\n                 {\n                     "id": "1", \n                    "firstName": "Tom", \n                    "lastName": "Cruise",\n                     "photo": "https://pbs.twimg.com/profile_images/735509975649378305/B81JwLT7.jpg"  \n               },\n                 { \n                    "id": "2",\n                     "firstName": "Maria", \n                    "lastName": "Sharapova",  \n                   "photo": "https://pbs.twimg.com/profile_images/3424509849/bfa1b9121afc39d1dcdb53cfc423bf12.jpeg" \n                }, \n                { \n                    "id": "3", \n                    "firstName": "James", \n                    "lastName": "Bond", \n                    "photo": "https://pbs.twimg.com/profile_images/664886718559076352/M00cOLrh.jpg" \n                } \n            ] \n        }  \n  }  ')
    : "json-escape" == t
    ? ((e =
        '   {              "employees": {                  "employee": [                      {                          "id": "1",                          "firstName": "Tom",                          "lastName": "Cruise",                          "photo": "https://jsonformatter.org/img/tom-cruise.jpg"                      },                      {                          "id": "2",                          "firstName": "Maria",                          "lastName": "Sharapova",                          "photo": "https://jsonformatter.org/img/Maria-Sharapova.jpg"                      },                      {                          "id": "3",                          "firstName": "Robert",                          "lastName": "Downey Jr.",                          "photo": "https://jsonformatter.org/img/Robert-Downey-Jr.jpg"                      }                  ]              }        }  '),
      (e = JSON.stringify($.parseJSON(e), null, 2)))
    : "java-escape" == t
    ? (e =
        '   import java.io.*;     class MyFirstProgram {     \t/** Print a hello message */     \tpublic static void main(String[] args) {     \t\tBufferedReader in = new BufferedReader(new InputStreamReader(System. in ));     \t\tString name = "Instructor";     \t\tSystem.out.print("Give your name: ");     \t\ttry {     \t\t\tname = in .readLine();     \t\t} catch (Exception e) {     \t\t\tSystem.out.println("Caught an exception!");     \t\t}     \t\tSystem.out.println("Hello " + name + "!");     \t}    }  ')
    : "java-unescape" == t
    ? (e =
        '  import java.io.*;\nclass MyFirstProgram {\n\t/** Print a hello message */\n\tpublic static void main(String[] args) {\n\t\tBufferedReader in = new BufferedReader(new InputStreamReader(System. in ));\n\t\tString name = "Instructor";\n\t\tSystem.out.print("Give your name: ");\n\t\ttry {\n\t\t\tname = in .readLine();\n\t\t} catch (Exception e) {\n\t\t\tSystem.out.println("Caught an exception!");\n\t\t}\n\t\tSystem.out.println("Hello " + name + "!");\n\t}\n}  ')
    : "dotnet-escape" == t
    ? (e =
        '   using System;     namespace Example1 {     \tclass Program {     \t\tpublic static void value(int num) {     \t\t\tnum++;     \t\t}     \t\tpublic static void reference(ref int num) {     \t\t\tnum++;     \t\t}     \t\tstatic void Main(string[] args) {     \t\t\tint num;     \t\t\tConsole.Write("Enter a number:\t");     \t\t\tnum = Convert.ToInt32(Console.ReadLine());     \t\t\tConsole.WriteLine("\n\n\tValue Type");     \t\t\tConsole.WriteLine("----------------");     \t\t\tConsole.Write("\nPrevious Value:\t{0}", num);     \t\t\tProgram.value(num);     \t\t\tConsole.Write("\nCurrent Value:\t{0}", num);     \t\t\tConsole.WriteLine("\n\n\n----------------");     \t\t\tConsole.WriteLine("\tReference Type");     \t\t\tConsole.WriteLine("--------------------");     \t\t\tConsole.Write("\nPrevious Value:\t{0}", num);     \t\t\tProgram.reference(ref num);     \t\t\tConsole.Write("\nCurrent Value:\t{0}", num);     \t\t\tConsole.ReadLine();     \t\t}     \t}    }  ')
    : "dotnet-unescape" == t
    ? (e =
        '  using System;\nnamespace Example1 {\n\tclass Program {\n\t\tpublic static void value(int num) {\n\t\t\tnum++;\n\t\t}\n\t\tpublic static void reference(ref int num) {\n\t\t\tnum++;\n\t\t}\n\t\tstatic void Main(string[] args) {\n\t\t\tint num;\n\t\t\tConsole.Write("Enter a number:\\t");\n\t\t\tnum = Convert.ToInt32(Console.ReadLine());\n\t\t\tConsole.WriteLine("\\n\\n\\tValue Type");\n\t\t\tConsole.WriteLine("----------------");\n\t\t\tConsole.Write("\\nPrevious Value:\\t{0}", num);\n\t\t\tProgram.value(num);\n\t\t\tConsole.Write("\\nCurrent Value:\\t{0}", num);\n\t\t\tConsole.WriteLine("\\n\\n\\n----------------");\n\t\t\tConsole.WriteLine("\\tReference Type");\n\t\t\tConsole.WriteLine("--------------------");\n\t\t\tConsole.Write("\\nPrevious Value:\\t{0}", num);\n\t\t\tProgram.reference(ref num);\n\t\t\tConsole.Write("\\nCurrent Value:\\t{0}", num);\n\t\t\tConsole.ReadLine();\n\t\t}\n\t}\n}  ')
    : "csv-escape" == t
    ? (e =
        "   phone,os,size_inch,size_cm,ppi     Nokia Lumiya 1020,windows,4.5,11.0,332     Nokia Lumiya 520,windows,4.0,10.0,233     Nokia Lumiya 620,windows,3.8,9.7,247     Nokia Lumiya 720,windows,4.3,10.9,217    Nokia Lumiya 900,windows,4.3,11.0,217  ")
    : "csv-unescape" == t
    ? (e =
        '   "phone,os,size_inch,size_cm,ppi     Nokia Lumiya 1020,windows,4.5,11.0,332     Nokia Lumiya 520,windows,4.0,10.0,233     Nokia Lumiya 620,windows,3.8,9.7,247     Nokia Lumiya 720,windows,4.3,10.9,217    Nokia Lumiya 900,windows,4.3,11.0,217"  ')
    : "sql-escape" == t
    ? (e = "select * from table where value = 'in single quote '' is offensive")
    : "sql-unescape" == t
    ? (e =
        '  select * from table where value = "in single quote "" is offensive"  ')
    : "string-utility" == t &&
      (e =
        "Let us sacrifice our today so that our children can have a better tomorrow. A. P. J. Abdul Kalam"),
    inputEditor.setValue(e);
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
