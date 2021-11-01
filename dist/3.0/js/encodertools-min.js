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
  function i(e, t) {
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
    var i = t
        .replace(/>\s{0,}</g, "><")
        .replace(/</g, "~::~<")
        .replace(/\s*xmlns\:/g, "~::~xmlns:")
        .replace(/\s*xmlns\=/g, "~::~xmlns=")
        .split("~::~"),
      r = i.length,
      a = !1,
      l = 0,
      n = "",
      s = 0,
      c = o ? e(o) : this.shift;
    for (s = 0; s < r; s++)
      i[s].search(/<!/) > -1
        ? ((n += c[l] + i[s]),
          (a = !0),
          (i[s].search(/-->/) > -1 ||
            i[s].search(/\]>/) > -1 ||
            i[s].search(/!DOCTYPE/) > -1) &&
            (a = !1))
        : i[s].search(/-->/) > -1 || i[s].search(/\]>/) > -1
        ? ((n += i[s]), (a = !1))
        : /^<\w/.exec(i[s - 1]) &&
          /^<\/\w/.exec(i[s]) &&
          /^<[\w:\-\.\,]+/.exec(i[s - 1]) ==
            /^<\/[\w:\-\.\,]+/.exec(i[s])[0].replace("/", "")
        ? ((n += i[s]), a || l--)
        : i[s].search(/<\w/) > -1 &&
          -1 == i[s].search(/<\//) &&
          -1 == i[s].search(/\/>/)
        ? (n = n += a ? i[s] : c[l++] + i[s])
        : i[s].search(/<\w/) > -1 && i[s].search(/<\//) > -1
        ? (n = n += a ? i[s] : c[l] + i[s])
        : i[s].search(/<\//) > -1
        ? (n = n += a ? i[s] : c[--l] + i[s])
        : i[s].search(/\/>/) > -1
        ? (n = n += a ? i[s] : c[l] + i[s])
        : i[s].search(/<\?/) > -1 ||
          i[s].search(/xmlns\:/) > -1 ||
          i[s].search(/xmlns\=/) > -1
        ? (n += c[l] + i[s])
        : (n += i[s]);
    return "\n" == n[0] ? n.slice(1) : n;
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
      var i = t
          .replace(/\s{1,}/g, " ")
          .replace(/\{/g, "{~::~")
          .replace(/\}/g, "~::~}~::~")
          .replace(/\;/g, ";~::~")
          .replace(/\/\*/g, "~::~/*")
          .replace(/\*\//g, "*/~::~")
          .replace(/~::~\s{0,}~::~/g, "~::~")
          .split("~::~"),
        r = i.length,
        a = 0,
        l = "",
        n = 0,
        s = o ? e(o) : this.shift;
      for (n = 0; n < r; n++)
        /\{/.exec(i[n])
          ? (l += s[a++] + i[n])
          : /\}/.exec(i[n])
          ? (l += s[--a] + i[n])
          : (/\*\\/.exec(i[n]), (l += s[a] + i[n]));
      return l.replace(/^\n{1,}/, "");
    }),
    (t.prototype.sql = function (t, r) {
      var a = t
          .replace(/\s{1,}/g, " ")
          .replace(/\'/gi, "~::~'")
          .split("~::~"),
        l = a.length,
        n = [],
        s = 0,
        c = this.step,
        u = 0,
        d = "",
        p = 0,
        g = r ? e(r) : this.shift;
      for (p = 0; p < l; p++) n = p % 2 ? n.concat(a[p]) : n.concat(i(a[p], c));
      for (l = n.length, p = 0; p < l; p++) {
        (u = o(n[p], u)),
          /\s{0,}\s{0,}SELECT\s{0,}/.exec(n[p]) &&
            (n[p] = n[p].replace(/\,/g, ",\n" + c + c)),
          /\s{0,}\s{0,}SET\s{0,}/.exec(n[p]) &&
            (n[p] = n[p].replace(/\,/g, ",\n" + c + c)),
          /\s{0,}\(\s{0,}SELECT\s{0,}/.exec(n[p])
            ? (d += g[++s] + n[p])
            : /\'/.exec(n[p])
            ? (u < 1 && s && s--, (d += n[p]))
            : ((d += g[s] + n[p]), u < 1 && s && s--);
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
  var e = null;
  if ("json" == toolstype)
    createJsonEditor(),
      cleanJSONEditor("all"),
      (e = getFromLocalStorage()),
      setDataInInputEditor(e);
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
    var t = e + "=", o = document.cookie.split(";"), i = 0;
    i < o.length;
    i++
  ) {
    for (var r = o[i]; " " == r.charAt(0); ) r = r.substring(1);
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
    var t = e + "=", o = document.cookie.split(";"), i = 0;
    i < o.length;
    i++
  ) {
    for (var r = o[i]; " " == r.charAt(0); ) r = r.substring(1);
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
function setMessage(e, t, o) {
  void 0 === o && (o = !0), $("#msgDiv").html("");
  var i = "";
  (i =
    "success" == e
      ? "/" == window.location.pathname
        ? '<div class="alert alert-info" style="margin-top: 0px;margin-bottom: 5px;">'
        : '<div class="alert alert-info" >'
      : '<div class="alert alert-danger" >'),
    (i +=
      '<a href="#" class="close" data-dismiss="alert" aria-label="close" id="errorClose">&times;</a>'),
    (i += "<label>" + t + "</label></div>"),
    $("#msgDiv").html(i),
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
    var i = new Blob(["" + e], { type: "text/plain;charset=utf-8" });
    (filename = "jsonformatter.txt"),
      "jsonToxml" == last_action && (filename = "jsonformatter.xml"),
      saveAs(i, filename);
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
      i = o.slice(1, o.length);
    i.sort(function (e, t) {
      return t.length - e.length;
    }),
      0 == i.length && (i = t.data);
    var r = 0;
    for (r = 0; r < i[0].length; r++)
      r < o[0].length
        ? (thead += "<th>" + o[0][r] + "</th>")
        : (thead += "<th>COLUMN" + (r + 1) + "</th>");
    thead += "</tr>";
    for (var a = 1; a < o.length; a++) {
      for (rows += "<tr>", r = 0; r < i[0].length; r++)
        r < o[a].length
          ? (rows += "<td>" + o[a][r] + "</td>")
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
  last_action = "validate";
function createEncoderEditor() {
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
  var e = $(".rightmenu");
  $(e).replaceWith(
    '<div class="btn-group btn-group-sm right"><div id="fileopen" class="cursor-pointer btn-sm fa fa-folder-open" title="Open File" onclick="openFile();" ></div><div class="cursor-pointer btn-sm fa fa-times" title="Clear" onclick="clearEditor(\'inputeditor\')"></div><div id="inputcopy" title="Copy to Clipboard" class="cursor-pointer btn-sm btn-shrink fa fa-files-o"></div><div id="inputFullScreen" title="fullscreen" onclick="addOverlay(\'input\');" class="cursor-pointer btn-sm btn-fullscreen fa fa-arrows-alt"></div><div id="inputCloseScreen" title="Close" onclick="removeOverlay(\'input\');" style="display:none" class="cursor-pointer btn-sm btn-fullscreen fa fa-window-close"></div></div>'
  ),
    $(e).show(),
    $("#inputcopy").click(function () {
      copyToClipboard(inputEditor.getValue());
    }),
    inputEditor.focus();
}
function addOutputIconstoEditor(e) {
  var t = $(".outputrightmenu");
  $(t).after(
    '<div id="outputToolBar" class="btn-group btn-group-sm right"><div class="cursor-pointer btn-sm fa fa-times" title="Clear" onclick="clearEditor()"></div><div id="outputcopy" title="Copy to Clipboard" class="cursor-pointer btn-sm btn-shrink fa fa-files-o"></div><div id="outputFullScreen" title="fullscreen" onclick="addOverlay(\'output\');" class="cursor-pointer btn-sm btn-fullscreen fa fa-arrows-alt"></div><div id="outputCloseScreen" title="Close" onclick="removeOverlay(\'output\');" style="display:none" class="cursor-pointer btn-sm btn-fullscreen fa fa-window-close"></div></div>'
  ),
    e ? $(t).show() : $(t).hide(),
    $("#outputcopy").click(function () {
      copyToClipboard(outputEditor.getValue());
    });
}
function clearEditor(e) {
  "inputeditor" == e
    ? inputEditor.setValue("")
    : "all" == e
    ? (inputEditor.setValue(""), outputEditor.setValue(""))
    : outputEditor.setValue("");
}
function performEncodingUtility(e) {
  var t = inputEditor.getValue();
  null != t &&
    "" != t &&
    t.trim().length > 0 &&
    outputEditor.setValue(encodeURIComponent(t));
}
function performDecodingUtility(e) {
  var t = inputEditor.getValue();
  null != t &&
    "" != t &&
    t.trim().length > 0 &&
    outputEditor.setValue(decodeURIComponent(t));
}
function performBase64EncodingUtility(e) {
  var t = inputEditor.getValue();
  null != t &&
    "" != t &&
    t.trim().length > 0 &&
    outputEditor.setValue(Base64.encode(t));
}
function performBase64DecodingUtility(e) {
  var t = inputEditor.getValue();
  null != t &&
    "" != t &&
    t.trim().length > 0 &&
    outputEditor.setValue(Base64.decode(t));
}
function getEncoderSample() {
  var e = $("#viewname").val(),
    t = "";
  "url-encode" == e
    ? (t =
        "https://jsonformatter.org/?url=https://gist.githubusercontent.com/jimmibond/9205480889e19c0de347/raw/sample.json")
    : "url-decode" == e
    ? (t =
        "https%3A%2F%2Fjsonformatter.org%2F%3Furl%3Dhttps%3A%2F%2Fgist.githubusercontent.com%2Fjimmibond%2F9205480889e19c0de347%2Fraw%2Fsample.json")
    : "base64-to-xml" == e
    ? (t =
        "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiID8+CjxlbXBsb3llZXM+Cgk8ZW1wbG95ZWU+CgkJPGlkPjE8L2lkPgoJCTxmaXJzdE5hbWU+TGVvbmFyZG88L2ZpcnN0TmFtZT4KCQk8bGFzdE5hbWU+RGlDYXByaW88L2xhc3ROYW1lPgoJCTxwaG90bz5odHRwOi8vMS5icC5ibG9nc3BvdC5jb20vLXp2U182UTFJelI4L1Q1bDZxdm5SbWNJL0FBQUFBQUFBQmNjL0hYTzdIREVKS28wL3MyMDAvTGVvbmFyZG8rRGljYXByaW83LmpwZzwvcGhvdG8+Cgk8L2VtcGxveWVlPgo8L2VtcGxveWVlcz4gIA==")
    : "xml-url-encode" == e || "xml-to-base64" == e
    ? ((t =
        '<?xml version="1.0" encoding="UTF-8" ?>     <employees>         <employee>             <id>1</id>             <firstName>Leonardo</firstName>             <lastName>DiCaprio</lastName>             <photo>http://1.bp.blogspot.com/-zvS_6Q1IzR8/T5l6qvnRmcI/AAAAAAAABcc/HXO7HDEJKo0/s200/Leonardo+Dicaprio7.jpg</photo>         </employee>    </employees>  '),
      (t = vkbeautify.xml(t)))
    : "xml-url-decode" == e
    ? (t =
        "%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%20%3F%3E%3Cemployee%3E%3Cid%3E1%3C%2Fid%3E%3CfirstName%3ETom%3C%2FfirstName%3E%3ClastName%3ECruise%3C%2FlastName%3E%3Cphoto%3Ehttps%3A%2F%2Fjsonformatter.org%2Fimg%2Ftom-cruise.jpg%3C%2Fphoto%3E%3C%2Femployee%3E")
    : "base64-to-yaml" == e
    ? (t =
        "RGlyZWN0b3I6CiAgICBuYW1lOiBTcGllbGJlcmcKICAgIE1vdmllczoKICAgIC0gTW92aWU6IHt0aXRsZTogRS5ULiwgeWVhcjogMTk3NX0KICAgIC0gTW92aWU6IHt0aXRsZTogSmF3cywgeWVhcjogMTk4Mn0KICA=")
    : "yaml-url-encode" == e || "yaml-to-base64" == e
    ? (t =
        "Director:\n    name: Spielberg\n    Movies:\n    - Movie: {title: E.T., year: 1975}\n    - Movie: {title: Jaws, year: 1982}\n  ")
    : "yaml-url-decode" == e
    ? (t =
        "Director%3A%0A%20%20%20%20name%3A%20Spielberg%0A%20%20%20%20Movies%3A%0A%20%20%20%20-%20Movie%3A%20%7Btitle%3A%20E.T.%2C%20year%3A%201975%7D%0A%20%20%20%20-%20Movie%3A%20%7Btitle%3A%20Jaws%2C%20year%3A%201982%7D")
    : "base64-to-json" == e
    ? (t =
        "ewogICJlbXBsb3llZXMiOiB7CiAgICAiZW1wbG95ZWUiOiBbCiAgICAgIHsKICAgICAgICAiaWQiOiAiMSIsCiAgICAgICAgImZpcnN0TmFtZSI6ICJUb20iLAogICAgICAgICJsYXN0TmFtZSI6ICJDcnVpc2UiLAogICAgICAgICJwaG90byI6ICJodHRwczovL2pzb25mb3JtYXR0ZXIub3JnL2ltZy90b20tY3J1aXNlLmpwZyIKICAgICAgfSwKICAgICAgewogICAgICAgICJpZCI6ICIyIiwKICAgICAgICAiZmlyc3ROYW1lIjogIk1hcmlhIiwKICAgICAgICAibGFzdE5hbWUiOiAiU2hhcmFwb3ZhIiwKICAgICAgICAicGhvdG8iOiAiaHR0cHM6Ly9qc29uZm9ybWF0dGVyLm9yZy9pbWcvTWFyaWEtU2hhcmFwb3ZhLmpwZyIKICAgICAgfSwKICAgICAgewogICAgICAgICJpZCI6ICIzIiwKICAgICAgICAiZmlyc3ROYW1lIjogIlJvYmVydCIsCiAgICAgICAgImxhc3ROYW1lIjogIkRvd25leSBKci4iLAogICAgICAgICJwaG90byI6ICJodHRwczovL2pzb25mb3JtYXR0ZXIub3JnL2ltZy9Sb2JlcnQtRG93bmV5LUpyLmpwZyIKICAgICAgfQogICAgXQogIH0KfQ==")
    : "json-url-decode" == e
    ? (t =
        "%5B%7B%22id%22%3A%221%22%2C%22firstName%22%3A%22Tom%22%2C%22lastName%22%3A%22Cruise%22%7D%5D")
    : "json-url-encode" == e || "json-to-base64" == e
    ? ((t =
        '   {              "employees": {                  "employee": [                      {                          "id": "1",                          "firstName": "Tom",                          "lastName": "Cruise",                          "photo": "https://jsonformatter.org/img/tom-cruise.jpg"                      },                      {                          "id": "2",                          "firstName": "Maria",                          "lastName": "Sharapova",                          "photo": "https://jsonformatter.org/img/Maria-Sharapova.jpg"                      },                      {                          "id": "3",                          "firstName": "Robert",                          "lastName": "Downey Jr.",                          "photo": "https://jsonformatter.org/img/Robert-Downey-Jr.jpg"                      }                  ]              }        }  '),
      (t = JSON.stringify($.parseJSON(t), null, 2)))
    : "csv-escape" == e
    ? (t =
        "   phone,os,size_inch,size_cm,ppi     Nokia Lumiya 1020,windows,4.5,11.0,332     Nokia Lumiya 520,windows,4.0,10.0,233     Nokia Lumiya 620,windows,3.8,9.7,247     Nokia Lumiya 720,windows,4.3,10.9,217    Nokia Lumiya 900,windows,4.3,11.0,217  ")
    : "csv-unescape" == e
    ? (t =
        '   "phone,os,size_inch,size_cm,ppi     Nokia Lumiya 1020,windows,4.5,11.0,332     Nokia Lumiya 520,windows,4.0,10.0,233     Nokia Lumiya 620,windows,3.8,9.7,247     Nokia Lumiya 720,windows,4.3,10.9,217    Nokia Lumiya 900,windows,4.3,11.0,217"  ')
    : "sql-escape" == e
    ? (t = "select * from table where value = 'in single quote '' is offensive")
    : "sql-unescape" == e
    ? (t =
        '  select * from table where value = "in single quote "" is offensive"  ')
    : "string-utility" == e &&
      (t =
        "Let us sacrifice our today so that our children can have a better tomorrow. A. P. J. Abdul Kalam"),
    inputEditor.setValue(t),
    defaultAction();
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
var Base64 = {
  _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  encode: function (e) {
    var t,
      o,
      i,
      r,
      a,
      l,
      n,
      s = "",
      c = 0;
    for (e = Base64._utf8_encode(e); c < e.length; )
      (r = (t = e.charCodeAt(c++)) >> 2),
        (a = ((3 & t) << 4) | ((o = e.charCodeAt(c++)) >> 4)),
        (l = ((15 & o) << 2) | ((i = e.charCodeAt(c++)) >> 6)),
        (n = 63 & i),
        isNaN(o) ? (l = n = 64) : isNaN(i) && (n = 64),
        (s =
          s +
          this._keyStr.charAt(r) +
          this._keyStr.charAt(a) +
          this._keyStr.charAt(l) +
          this._keyStr.charAt(n));
    return s;
  },
  decode: function (e) {
    var t,
      o,
      i,
      r,
      a,
      l,
      n = "",
      s = 0;
    for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); s < e.length; )
      (t =
        (this._keyStr.indexOf(e.charAt(s++)) << 2) |
        ((r = this._keyStr.indexOf(e.charAt(s++))) >> 4)),
        (o =
          ((15 & r) << 4) | ((a = this._keyStr.indexOf(e.charAt(s++))) >> 2)),
        (i = ((3 & a) << 6) | (l = this._keyStr.indexOf(e.charAt(s++)))),
        (n += String.fromCharCode(t)),
        64 != a && (n += String.fromCharCode(o)),
        64 != l && (n += String.fromCharCode(i));
    return (n = Base64._utf8_decode(n));
  },
  _utf8_encode: function (e) {
    e = e.replace(/\r\n/g, "\n");
    for (var t = "", o = 0; o < e.length; o++) {
      var i = e.charCodeAt(o);
      i < 128
        ? (t += String.fromCharCode(i))
        : i > 127 && i < 2048
        ? ((t += String.fromCharCode((i >> 6) | 192)),
          (t += String.fromCharCode((63 & i) | 128)))
        : ((t += String.fromCharCode((i >> 12) | 224)),
          (t += String.fromCharCode(((i >> 6) & 63) | 128)),
          (t += String.fromCharCode((63 & i) | 128)));
    }
    return t;
  },
  _utf8_decode: function (e) {
    for (var t = "", o = 0, i = (c1 = c2 = 0); o < e.length; )
      (i = e.charCodeAt(o)) < 128
        ? ((t += String.fromCharCode(i)), o++)
        : i > 191 && i < 224
        ? ((c2 = e.charCodeAt(o + 1)),
          (t += String.fromCharCode(((31 & i) << 6) | (63 & c2))),
          (o += 2))
        : ((c2 = e.charCodeAt(o + 1)),
          (c3 = e.charCodeAt(o + 2)),
          (t += String.fromCharCode(
            ((15 & i) << 12) | ((63 & c2) << 6) | (63 & c3)
          )),
          (o += 3));
    return t;
  },
};
