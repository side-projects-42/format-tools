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
    var s = ["\n"];
    for (ix = 0; ix < 100; ix++) s.push(s[ix] + t);
    return s;
  }
  function t() {
    (this.step = "\t"), (this.shift = e(this.step));
  }
  function s(e, t) {
    return t - (e.replace(/\(/g, "").length - e.replace(/\)/g, "").length);
  }
  function o(e, t) {
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
  (t.prototype.xml = function (t, s) {
    var o = t
        .replace(/>\s{0,}</g, "><")
        .replace(/</g, "~::~<")
        .replace(/\s*xmlns\:/g, "~::~xmlns:")
        .replace(/\s*xmlns\=/g, "~::~xmlns=")
        .split("~::~"),
      r = o.length,
      l = !1,
      a = 0,
      i = "",
      n = 0,
      c = s ? e(s) : this.shift;
    for (n = 0; n < r; n++)
      o[n].search(/<!/) > -1
        ? ((i += c[a] + o[n]),
          (l = !0),
          (o[n].search(/-->/) > -1 ||
            o[n].search(/\]>/) > -1 ||
            o[n].search(/!DOCTYPE/) > -1) &&
            (l = !1))
        : o[n].search(/-->/) > -1 || o[n].search(/\]>/) > -1
        ? ((i += o[n]), (l = !1))
        : /^<\w/.exec(o[n - 1]) &&
          /^<\/\w/.exec(o[n]) &&
          /^<[\w:\-\.\,]+/.exec(o[n - 1]) ==
            /^<\/[\w:\-\.\,]+/.exec(o[n])[0].replace("/", "")
        ? ((i += o[n]), l || a--)
        : o[n].search(/<\w/) > -1 &&
          -1 == o[n].search(/<\//) &&
          -1 == o[n].search(/\/>/)
        ? (i = i += l ? o[n] : c[a++] + o[n])
        : o[n].search(/<\w/) > -1 && o[n].search(/<\//) > -1
        ? (i = i += l ? o[n] : c[a] + o[n])
        : o[n].search(/<\//) > -1
        ? (i = i += l ? o[n] : c[--a] + o[n])
        : o[n].search(/\/>/) > -1
        ? (i = i += l ? o[n] : c[a] + o[n])
        : o[n].search(/<\?/) > -1 ||
          o[n].search(/xmlns\:/) > -1 ||
          o[n].search(/xmlns\=/) > -1
        ? (i += c[a] + o[n])
        : (i += o[n]);
    return "\n" == i[0] ? i.slice(1) : i;
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
    (t.prototype.css = function (t, s) {
      var o = t
          .replace(/\s{1,}/g, " ")
          .replace(/\{/g, "{~::~")
          .replace(/\}/g, "~::~}~::~")
          .replace(/\;/g, ";~::~")
          .replace(/\/\*/g, "~::~/*")
          .replace(/\*\//g, "*/~::~")
          .replace(/~::~\s{0,}~::~/g, "~::~")
          .split("~::~"),
        r = o.length,
        l = 0,
        a = "",
        i = 0,
        n = s ? e(s) : this.shift;
      for (i = 0; i < r; i++)
        /\{/.exec(o[i])
          ? (a += n[l++] + o[i])
          : /\}/.exec(o[i])
          ? (a += n[--l] + o[i])
          : (/\*\\/.exec(o[i]), (a += n[l] + o[i]));
      return a.replace(/^\n{1,}/, "");
    }),
    (t.prototype.sql = function (t, r) {
      var l = t
          .replace(/\s{1,}/g, " ")
          .replace(/\'/gi, "~::~'")
          .split("~::~"),
        a = l.length,
        i = [],
        n = 0,
        c = this.step,
        u = 0,
        p = "",
        d = 0,
        g = r ? e(r) : this.shift;
      for (d = 0; d < a; d++) i = d % 2 ? i.concat(l[d]) : i.concat(o(l[d], c));
      for (a = i.length, d = 0; d < a; d++) {
        (u = s(i[d], u)),
          /\s{0,}\s{0,}SELECT\s{0,}/.exec(i[d]) &&
            (i[d] = i[d].replace(/\,/g, ",\n" + c + c)),
          /\s{0,}\s{0,}SET\s{0,}/.exec(i[d]) &&
            (i[d] = i[d].replace(/\,/g, ",\n" + c + c)),
          /\s{0,}\(\s{0,}SELECT\s{0,}/.exec(i[d])
            ? (p += g[++n] + i[d])
            : /\'/.exec(i[d])
            ? (u < 1 && n && n--, (p += i[d]))
            : ((p += g[n] + i[d]), u < 1 && n && n--);
      }
      return (p = p.replace(/^\n{1,}/, "").replace(/\n{1,}/g, "\n"));
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
  $(document).ajaxSend(function (e, t, s) {
    $("#pluswrap").removeClass("hide");
  }),
    $(document).ajaxComplete(function (e, t, s) {
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
    var t = e + "=", s = document.cookie.split(";"), o = 0;
    o < s.length;
    o++
  ) {
    for (var r = s[o]; " " == r.charAt(0); ) r = r.substring(1);
    if (0 == r.indexOf(t))
      return (t = r.substring(t.length, r.length)).replace(/\+/g, " ");
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
    var t = e + "=", s = document.cookie.split(";"), o = 0;
    o < s.length;
    o++
  ) {
    for (var r = s[o]; " " == r.charAt(0); ) r = r.substring(1);
    if (0 == r.indexOf(t))
      return (t = r.substring(t.length, r.length)).replace(/\+/g, " ");
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
function setMessage(e, t, s) {
  void 0 === s && (s = !0), $("#msgDiv").html("");
  var o = "";
  (o =
    "success" == e
      ? "/" == window.location.pathname
        ? '<div class="alert alert-info" style="margin-top: 0px;margin-bottom: 5px;">'
        : '<div class="alert alert-info" >'
      : '<div class="alert alert-danger" >'),
    (o +=
      '<a href="#" class="close" data-dismiss="alert" aria-label="close" id="errorClose">&times;</a>'),
    (o += "<label>" + t + "</label></div>"),
    $("#msgDiv").html(o),
    s &&
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
    error: function (e, t, s) {
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
    error: function (e, t, s) {
      setMessage("error", "Failed to load data=" + s),
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
    var s = $.parseJSON(e);
    inputEditor.setText(JSON.stringify(s, null, 2)),
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
      var s = $.parseJSON(e);
      e = JSON.stringify(s, null, 2);
    }
    var o = new Blob(["" + e], { type: "text/plain;charset=utf-8" });
    (filename = "jsonformatter.txt"),
      "jsonToxml" == last_action && (filename = "jsonformatter.xml"),
      saveAs(o, filename);
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
    s = $("#title").val();
  null != s && 0 != s.length
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
            var s = null;
            setMessage(
              "success",
              "Data saved successfully - <a class='white' href ='" +
                (s =
                  "index" == $("#viewname").val().trim()
                    ? "https://" + location.host + "/" + t
                    : "https://" +
                      location.host +
                      "/" +
                      $("#viewname").val().trim() +
                      "/" +
                      t) +
                "'>" +
                s +
                "</a>",
              !1
            ),
              null != e && shareLink(s);
          } else alert("Please validate the input and try again.");
        },
        error: function (e, t, s) {
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
      error: function (e, t, s) {
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
var old,
  online = function (e) {
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
    var s = document.getElementById("result1").contentWindow.document;
    old != t && ((old = t), s.open(), s.write(old), s.close()),
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
      s = t.data,
      o = s.slice(1, s.length);
    o.sort(function (e, t) {
      return t.length - e.length;
    }),
      0 == o.length && (o = t.data);
    var r = 0;
    for (r = 0; r < o[0].length; r++)
      r < s[0].length
        ? (thead += "<th>" + s[0][r] + "</th>")
        : (thead += "<th>COLUMN" + (r + 1) + "</th>");
    thead += "</tr>";
    for (var l = 1; l < s.length; l++) {
      for (rows += "<tr>", r = 0; r < o[0].length; r++)
        r < s[l].length
          ? (rows += "<td>" + s[l][r] + "</td>")
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
var cssInputeditor,
  cssOutputEditor,
  editorOutput,
  last_action = "beautify",
  fullscreenEditor = "";
function createCSSEditor() {
  if (0 != $("#inputeditor").length) {
    var e = $("#viewname").val(),
      t = e.split("-");
    ("minify-css" != e && "css-beautifier" != e && "css-pretty-print" != e) ||
      ((t[0] = "css"), (t[1] = "-"), (t[2] = "css")),
      (cssInputeditor = ace.edit("inputeditor"))
        .getSession()
        .setMode("ace/mode/" + t[0]),
      cssInputeditor.getSession().setUseWrapMode(!0),
      cssInputeditor.setOptions({ fontSize: "10pt" }),
      addCSSInputIconstoEditor(),
      cssInputeditor.on("change", function () {
        saveToLocalStorage(cssInputeditor.getValue());
      }),
      cssInputeditor.setValue(getFromLocalStorage(), 1),
      (cssOutputEditor = ace.edit("outputeditor"))
        .getSession()
        .setMode("ace/mode/" + t[2]),
      cssOutputEditor.getSession().setUseWrapMode(!0),
      cssOutputEditor.setOptions({ fontSize: "10pt" }),
      addCSSOutputIconstoEditor();
  }
}
function setDataInInputEditor(e) {
  cssInputeditor.setValue(e, 1);
}
function addCSSInputIconstoEditor() {
  var e = $(".rightmenu");
  $(e).replaceWith(
    '<div class="btn-group btn-group-sm right"><div id="fileopen" class="cursor-pointer btn-sm fa fa-folder-open" title="Open File" ></div><div class="cursor-pointer btn-sm fa fa-floppy-o" title="Save online" onclick="Action_Save();"></div><div class="cursor-pointer btn-sm fa fa-print" title="Print CSS" onclick="printCSS();"></div><div class="cursor-pointer btn-sm fa fa-times" title="Clear" onclick="clearCSSEditor(\'inputcsseditor\')"></div><div id="inputcopy" title="Copy to Clipboard" class="cursor-pointer btn-sm btn-shrink fa fa-files-o"></div><div id="inputFullScreen" title="fullscreen" onclick="addOverlay(\'input\');" class="cursor-pointer btn-sm btn-fullscreen fa fa-arrows-alt"></div><div id="inputCloseScreen" title="Close" onclick="removeOverlay(\'input\');" style="display:none" class="cursor-pointer btn-sm btn-fullscreen fa fa-window-close"></div></div>'
  ),
    $(e).show(),
    $("#inputcopy").click(function () {
      copyToClipboard(cssInputeditor.getValue());
    }),
    cssInputeditor.focus();
}
function addCSSOutputIconstoEditor(e) {
  var t = $(".outputrightmenu");
  $(t).after(
    '<div id="outputToolBar" class="btn-group btn-group-sm right"><div class="cursor-pointer btn-sm fa fa-times" title="Clear" onclick="clearCSSEditor()"></div><div class="cursor-pointer btn-sm fa fa-download" title="Download" onclick="downloadingCSSTool();"></div><div id="outputcopy" title="Copy to Clipboard" class="cursor-pointer btn-sm btn-shrink fa fa-files-o"></div><div id="outputFullScreen" title="fullscreen" onclick="addOverlay(\'output\');" class="cursor-pointer btn-sm btn-fullscreen fa fa-arrows-alt"></div><div id="outputCloseScreen" title="Close" onclick="removeOverlay(\'output\');" style="display:none" class="cursor-pointer btn-sm btn-fullscreen fa fa-window-close"></div></div>'
  ),
    e ? $(t).show() : $(t).hide(),
    $("#outputcopy").click(function () {
      copyToClipboard(cssOutputEditor.getValue());
    });
}
function downloadingCSSTool() {
  var e = cssOutputEditor.getValue();
  if (0 != e.trim().length) {
    if ("function" != typeof saveAs)
      return void $.loadScript(
        "dist/js/vendor/FileSaver.min.js",
        downloadingCSSTool
      );
    var t = new Blob(["" + e], { type: "text/plain;charset=utf-8" });
    (filename = "data.css"), saveAs(t, filename);
  } else setMessage("error", "Sorry Result is Empty");
}
function clearCSSEditor(e) {
  "inputcsseditor" == e
    ? cssInputeditor.setValue("")
    : "all" == e
    ? (cssInputeditor.setValue(""), cssOutputEditor.setValue(""))
    : cssOutputEditor.setValue("");
}
function printCSS() {
  hideMessage();
  var e = $("<div>").text(cssInputeditor.getValue()).html();
  localStorage.setItem("data", e),
    $("<iframe>").attr("src", "/cssprint").appendTo("body");
}
function plainCSS() {
  hideMessage(),
    localStorage.setItem("data", cssOutputEditor.getValue()),
    window.open("/cssview", "_blank").focus();
}
function lessTocss(e = !1, t = "") {
  var s = cssInputeditor.getValue();
  $.ajax({
    type: "post",
    url: "/service/lessTocss",
    dataType: "text",
    data: { css: s },
    success: function (s) {
      null != s &&
        null != s &&
        0 != s.trim().length &&
        (e
          ? convertCssTo(t, s)
          : cssOutputEditor.setValue(vkbeautify.css(s), 1));
    },
    error: function (e, t, s) {
      setMessage("error", t);
    },
  });
}
function lesstoStylus() {
  return lessTocss(!0, "stylus");
}
function lesstoSASS() {
  return lessTocss(!0, "sass");
}
function lesstoSCSS() {
  return lessTocss(!0, "scss");
}
function scssTocss(e = !1, t = "") {
  var s = cssInputeditor.getValue();
  $.ajax({
    type: "post",
    url: "/service/scssTocss",
    dataType: "text",
    data: { css: s },
    success: function (s) {
      null != s &&
        null != s &&
        0 != s.trim().length &&
        (e ? convertCssTo(t, s) : cssOutputEditor.setValue(vkbeautify.css(s)));
    },
    error: function (e, t, s) {
      setMessage("error", t);
    },
  });
}
function cssToless(e = null) {
  if (null == e) var t = cssInputeditor.getValue();
  else t = e;
  $.ajax({
    type: "post",
    url: "/service/cssToless",
    dataType: "text",
    data: { css: t },
    success: function (e) {
      null != e &&
        null != e &&
        0 != e.trim().length &&
        cssOutputEditor.setValue(e, 1);
    },
    error: function (e, t, s) {
      setMessage("error", t);
    },
  });
}
function stylusToless() {
  var e = cssInputeditor.getValue();
  stylus(e).render(function (e, t) {
    null != e
      ? cssOutputEditor.setValue("Stylus parsing error!")
      : cssToless(t);
  });
}
function stylusToSASS() {
  var e = cssInputeditor.getValue();
  stylus(e).render(function (e, t) {
    null != e
      ? cssOutputEditor.setValue("Stylus parsing error!")
      : convertCssTo("sass", t);
  });
}
function stylusToSCSS() {
  var e = cssInputeditor.getValue();
  stylus(e).render(function (e, t) {
    null != e
      ? cssOutputEditor.setValue("Stylus parsing error!")
      : convertCssTo("scss", t);
  });
}
function stylusTocss() {
  var e = cssInputeditor.getValue();
  stylus(e).render(function (e, t) {
    null != e
      ? cssOutputEditor.setValue("Stylus parsing error!")
      : cssOutputEditor.setValue(vkbeautify.css(t), 1);
  });
}
function scssToless() {
  var e = cssInputeditor.getValue();
  $.ajax({
    type: "post",
    url: "/service/scssToless",
    dataType: "text",
    data: { css: e },
    success: function (e) {
      null != e &&
        null != e &&
        0 != e.trim().length &&
        cssOutputEditor.setValue(e, 1);
    },
    error: function (e, t, s) {
      setMessage("error", t);
    },
  });
}
function scssToStylus() {
  scssTocss(!0, "stylus");
}
function sassToCSS() {
  scssTocss();
}
function sassToLess() {
  scssToless();
}
function sassToSCSS() {
  cssOutputEditor.setValue(cssInputeditor.getValue(), 1);
}
function sassToStylus() {
  scssToStylus();
}
var demoCSS,
  getOptions = function () {
    var e = {};
    return (e.linefeed = { "\\n": "\n", "\\r\\n": "\r\n" }[e.linefeed]), e;
  };
function minifyCSS() {
  var e = cssInputeditor.getValue();
  $.ajax({
    type: "post",
    url: "/service/minifycss",
    dataType: "text",
    data: { css: e },
    success: function (e) {
      null != e &&
        null != e &&
        0 != e.trim().length &&
        cssOutputEditor.setValue(e, 1);
    },
    error: function (e, t, s) {
      setMessage("error", t);
    },
  });
}
function cssBeautifier() {
  var e = cssInputeditor.getValue();
  cssOutputEditor.setValue(vkbeautify.css(e), 1);
}
function cssPrettyPrint() {
  var e = cssInputeditor.getValue();
  cssOutputEditor.setValue(vkbeautify.css(e), 1);
}
function log(e) {
  console && console.log(e);
}
function tr(e) {
  return $.trim(e.replace(/\t+/, " "));
}
var openingBracket,
  closingBracket,
  semiColumn,
  eol,
  indentS = "\t";
function convertCssTo(e, t = null) {
  "scss" == e
    ? ((eol = ";"),
      (openingBracket = "{"),
      (closingBracket = "}"),
      (semiColumn = ":"))
    : "sass" == e
    ? ((eol = " "),
      (openingBracket = ""),
      (closingBracket = ""),
      (semiColumn = ":"))
    : "stylus" == e &&
      ((eol = ""),
      (openingBracket = ""),
      (closingBracket = ""),
      (semiColumn = "")),
    null == t
      ? cssOutputEditor.setValue(parseCSS(cssInputeditor.getValue()), 1)
      : cssOutputEditor.setValue(parseCSS(t), 1);
}
function parseCSS(e) {
  var t = { children: {} };
  return (
    (e = e.replace(/\/\*[\s\S]*?\*\//gm, "")).replace(
      /([^{]+)\{([^}]+)\}/g,
      function (e, s, o) {
        var r = {};
        (r.source = e), (r.selector = tr(s));
        var l = t;
        if (r.selector.indexOf(",") > -1) {
          var a = r.selector;
          l.children[a] || (l.children[a] = { children: {}, declarations: [] }),
            (l = l.children[a]);
        } else {
          (r.selector = r.selector.replace(/\s*([>\+~])\s*/g, " &$1")),
            (r.selector = r.selector.replace(/(\w)([:\.])/g, "$1 &$2")),
            (r.selectorParts = r.selector.split(/[\s]+/));
          for (var i = 0; i < r.selectorParts.length; i++) {
            (a = (a = (a = r.selectorParts[i]).replace(
              /&(.)/g,
              "& $1 "
            )).replace(/& ([:\.]) /g, "&$1")),
              l.children[a] ||
                (l.children[a] = { children: {}, declarations: [] }),
              (l = l.children[a]);
          }
        }
        o.replace(/([^:;]+):([^;]+)/g, function (e, t, s) {
          var o = { source: e, property: tr(t), value: tr(s) };
          l.declarations.push(o);
        });
      }
    ),
    exportObject(t)
  );
}
var depth = 0,
  s = "";
function exportObject(e) {
  var t = "";
  return (
    $.each(e.children, function (e, s) {
      (t += getIndent() + e + " " + openingBracket + "\n"), depth++;
      for (var o = 0; o < s.declarations.length; o++) {
        var r = s.declarations[o];
        t += getIndent() + r.property + semiColumn + " " + r.value + eol + "\n";
      }
      (t += exportObject(s)),
        depth--,
        (t += getIndent() + closingBracket + "\n");
    }),
    (t = t.replace(/^\s*$[\n\r]{1,}/gm, ""))
  );
}
function getIndent() {
  for (var e = "", t = 0; t < depth; t++) e += indentS;
  return e;
}
function loadCSSSampleData() {
  var e = $("#viewname").val(),
    t = $("#viewname").val().split("-");
  t = t[0];
  var s = "";
  if ("css-beautifier" == e || "css-pretty-print" == e)
    return (
      (s =
        ".menu_simple{width: 100%;background-color: #005555}.menu_simple ul{margin: 0;padding: 0;float: left}.menu_simple ul li{display: inline}.menu_simple ul li a{float: left;text-decoration: none;color: white;padding: 10.5px 11px;background-color: #005555}.menu_simple ul li a:visited{color: white}.menu_simple ul li a:hover, .menu_simple ul li .current{color: white;background-color: #5FD367}"),
      cssInputeditor.setValue(s, 1),
      void defaultAction()
    );
  "css" == t || "minify" == t
    ? (s =
        ".menu_simple {     width: 100%;background-color: #005555;}     .menu_simple ul {margin: 0;padding: 0;float: left;}     .menu_simple ul li {     display: inline;     }     .menu_simple ul li a {float: left;text-decoration: none;color: white;padding: 10.5px 11px;background-color: #005555;}     .menu_simple ul li a:visited {color: white;}    .menu_simple ul li a:hover, .menu_simple ul li .current {color: white;background-color: #5FD367;}  ")
    : "less" == t
    ? (s =
        "   @color-base: #2d5e8b;     .class1 {         background-color: @color-base;         .class2 {             background-color: #fff;             color: @color-base;         }    }  ")
    : "scss" == t || "sass" == t
    ? (s =
        "$font-stack: Helvetica, sans-serif;$primary-color: #333;body {       font: 100% $font-stack;       color: $primary-color;    }  ")
    : "stylus" == t &&
      (s =
        "body {       font: 14px/1.5 Helvetica, arial, sans-serif;       #logo {         border-radius: 5px;       }    }  "),
    cssInputeditor.setValue(vkbeautify.css(s), 1),
    defaultAction();
}
