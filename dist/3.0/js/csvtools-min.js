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
  $(document).ajaxSend(function (t, e, o) {
    $("#pluswrap").removeClass("hide");
  }),
    $(document).ajaxComplete(function (t, e, o) {
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
    var e = t + "=", o = document.cookie.split(";"), i = 0;
    i < o.length;
    i++
  ) {
    for (var a = o[i]; " " == a.charAt(0); ) a = a.substring(1);
    if (0 == a.indexOf(e))
      return (e = a.substring(e.length, a.length)).replace(/\+/g, " ");
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
    var e = t + "=", o = document.cookie.split(";"), i = 0;
    i < o.length;
    i++
  ) {
    for (var a = o[i]; " " == a.charAt(0); ) a = a.substring(1);
    if (0 == a.indexOf(e))
      return (e = a.substring(e.length, a.length)).replace(/\+/g, " ");
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
function setMessage(t, e, o) {
  void 0 === o && (o = !0), $("#msgDiv").html("");
  var i = "";
  (i =
    "success" == t
      ? "/" == window.location.pathname
        ? '<div class="alert alert-info" style="margin-top: 0px;margin-bottom: 5px;">'
        : '<div class="alert alert-info" >'
      : '<div class="alert alert-danger" >'),
    (i +=
      '<a href="#" class="close" data-dismiss="alert" aria-label="close" id="errorClose">&times;</a>'),
    (i += "<label>" + e + "</label></div>"),
    $("#msgDiv").html(i),
    o &&
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
    error: function (t, e, o) {
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
    error: function (t, e, o) {
      setMessage("error", "Failed to load data=" + o),
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
    var o = $.parseJSON(t);
    inputEditor.setText(JSON.stringify(o, null, 2)),
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
      var o = $.parseJSON(t);
      t = JSON.stringify(o, null, 2);
    }
    var i = new Blob(["" + t], { type: "text/plain;charset=utf-8" });
    (filename = "jsonformatter.txt"),
      "jsonToxml" == last_action && (filename = "jsonformatter.xml"),
      saveAs(i, filename);
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
    o = $("#title").val();
  null != o && 0 != o.length
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
            var o = null;
            setMessage(
              "success",
              "Data saved successfully - <a class='white' href ='" +
                (o =
                  "index" == $("#viewname").val().trim()
                    ? "https://" + location.host + "/" + e
                    : "https://" +
                      location.host +
                      "/" +
                      $("#viewname").val().trim() +
                      "/" +
                      e) +
                "'>" +
                o +
                "</a>",
              !1
            ),
              null != t && shareLink(o);
          } else alert("Please validate the input and try again.");
        },
        error: function (t, e, o) {
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
      error: function (t, e, o) {
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
    var o = document.getElementById("result1").contentWindow.document;
    old != e && ((old = e), o.open(), o.write(old), o.close()),
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
      o = e.data,
      i = o.slice(1, o.length);
    i.sort(function (t, e) {
      return e.length - t.length;
    }),
      0 == i.length && (i = e.data);
    var a = 0;
    for (a = 0; a < i[0].length; a++)
      a < o[0].length
        ? (thead += "<th>" + o[0][a] + "</th>")
        : (thead += "<th>COLUMN" + (a + 1) + "</th>");
    thead += "</tr>";
    for (var r = 1; r < o.length; r++) {
      for (rows += "<tr>", a = 0; a < i[0].length; a++)
        a < o[r].length
          ? (rows += "<td>" + o[r][a] + "</td>")
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
  editorOutput,
  last_action = "beautify",
  fullscreenEditor = "";
function createCSVEditor() {
  0 != $("#inputeditor").length &&
    ((inputEditor = ace.edit("inputeditor"))
      .getSession()
      .setMode("ace/mode/text"),
    inputEditor.getSession().setUseWrapMode(!0),
    inputEditor.setOptions({ fontSize: "14pt" }),
    addInputIconstoEditor(),
    inputEditor.on("change", function () {
      saveToLocalStorage(inputEditor.getValue());
    }),
    inputEditor.setValue(getFromLocalStorage()),
    (outputEditor = ace.edit("outputeditor")).getSession().setUseWrapMode(!0),
    outputEditor.setOptions({ fontSize: "14pt" }),
    outputEditor.setValue(""),
    addOutputIconstoEditor());
}
function setDataInInputEditor(t) {
  inputEditor.setValue(t);
}
function addInputIconstoEditor() {
  var t = $(".rightmenu");
  $(t).replaceWith(
    '<div class="btn-group btn-group-sm right"><div id="fileopen" class="cursor-pointer btn-sm fa fa-folder-open" title="Open File" ></div><div class="cursor-pointer btn-sm fa fa-floppy-o" title="Save online" onclick="Action_Save();"></div><div class="cursor-pointer btn-sm fa fa-print" title="Print CSS" onclick="printCSS();"></div><div class="cursor-pointer btn-sm fa fa-times" title="Clear" onclick="clearEditor(\'inputcsseditor\')"></div><div id="inputcopy" title="Copy to Clipboard" class="cursor-pointer btn-sm btn-shrink fa fa-files-o"></div><div id="inputFullScreen" title="fullscreen" onclick="addOverlay(\'input\');" class="cursor-pointer btn-sm btn-fullscreen fa fa-arrows-alt"></div><div id="inputCloseScreen" title="Close" onclick="removeOverlay(\'input\');" style="display:none" class="cursor-pointer btn-sm btn-fullscreen fa fa-window-close"></div></div>'
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
    '<div id="outputToolBar" class="btn-group btn-group-sm right"><div class="cursor-pointer btn-sm fa fa-times" title="Clear" onclick="clearEditor()"></div><div class="cursor-pointer btn-sm fa fa-download" title="Download" onclick="downloadinCSSTool();"></div><div id="outputcopy" title="Copy to Clipboard" class="cursor-pointer btn-sm btn-shrink fa fa-files-o"></div><div id="outputFullScreen" title="fullscreen" onclick="addOverlay(\'output\');" class="cursor-pointer btn-sm btn-fullscreen fa fa-arrows-alt"></div><div id="outputCloseScreen" title="Close" onclick="removeOverlay(\'output\');" style="display:none" class="cursor-pointer btn-sm btn-fullscreen fa fa-window-close"></div></div>'
  ),
    t ? $(e).show() : $(e).hide(),
    $("#outputcopy").click(function () {
      copyToClipboard(outputEditor.getValue());
    });
}
function downloadinCSSTool() {
  var t = outputEditor.getValue();
  if (0 != t.trim().length) {
    if ("function" != typeof saveAs)
      return void $.loadScript(
        "dist/js/vendor/FileSaver.min.js",
        downloadinCSSTool
      );
    var e = new Blob(["" + t], { type: "text/plain;charset=utf-8" });
    (filename = "data.txt"), saveAs(e, filename);
  } else setMessage("error", "Sorry Result is Empty");
}
function clearEditor(t) {
  "inputcsseditor" == t
    ? inputEditor.setValue("")
    : "all" == t
    ? (inputEditor.setValue(""), outputEditor.setValue(""))
    : outputEditor.setValue("");
}
function csvtohtml() {
  if ("object" != typeof Papa)
    return (
      $.loadScript("dist/js/vendor/vkbeautify.js"),
      void $.loadScript("dist/js/vendor/papaparse.min.js", csvtohtml)
    );
  var t = inputEditor.getValue();
  if (((ext = "csv"), 0 != t.trim().length)) {
    var e = "",
      o = "<tr>",
      i = Papa.parse(t),
      a = i.data,
      r = a.slice(1, a.length);
    r.sort(function (t, e) {
      return e.length - t.length;
    }),
      0 == r.length && (r = i.data);
    for (var l = 0; l < r[0].length; l++)
      l < a[0].length
        ? (o += "<th>" + a[0][l] + "</th>")
        : (o += "<th>COLUMN" + (l + 1) + "</th>");
    o += "</tr>";
    for (var n = 1; n < a.length; n++) {
      e += "<tr>";
      for (l = 0; l < r[0].length; l++)
        l < a[n].length
          ? (e += "<td>" + a[n][l] + "</td>")
          : (e += "<td>&nbsp</td>");
      e += "</tr>";
    }
    var s =
      "<table border=1><thead>\n" +
      o +
      "</thead><tbody>\n" +
      e +
      "</tbody></table>";
    outputEditor.getSession().setMode("ace/mode/html"),
      outputEditor.setValue(vkbeautify.xml(s));
  } else openErrorDialog("Sorry Input is Empty");
}
function csvtojson() {
  var t = inputEditor.getValue();
  outputEditor.getSession().setMode("ace/mode/json"),
    outputEditor.setValue(getJSONFromCSV(t));
}
function getJSONFromCSV(t) {
  var e = $("#rootname").val(),
    o = $("#rowname").val();
  (void 0 !== e && 0 !== e.length) || (e = "Root"),
    (void 0 !== o && 0 !== o.length) || (o = "Row");
  var i = t.split("\n"),
    a = {};
  (a[e] = {}), (a[e][o] = {});
  for (var r = [], l = i[0].split(","), n = 1; n < i.length; n++) {
    for (var s = {}, u = i[n].split(","), d = 0; d < l.length; d++)
      s[l[d]] = u[d];
    r.push(s);
  }
  return (a[e][o] = r), JSON.stringify(a, null, 2);
}
function loadJSRelatedToCSVtoXML() {
  $.loadScript("dist/js/vendor/ObjTree.js"),
    $.loadScript("dist/js/vendor/jsonlint.min.js"),
    $.loadScript("dist/js/vendor/vkbeautify.js", csvtoxml);
}
function loadJSRelatedToCSVtoYAML() {
  $.loadScript("dist/js/vendor/jsonlint.min.js"),
    $.loadScript("dist/js/vendor/yaml.min.js", csvtoyaml);
}
function csvtoxml() {
  if ("function" == typeof XML) {
    var t = inputEditor.getValue();
    try {
      var e = getJSONFromCSV(t).replace(/([ :$&]+)(?=[(\w* *]*":)/g, "_"),
        o = jsonlint.parse(e),
        i = new XML.ObjTree().writeXML(o);
      (i = decodeSpecialCharacter(i)),
        outputEditor.getSession().setMode("ace/mode/xml"),
        outputEditor.setValue(vkbeautify.xml(i)),
        setModelTitle("CSV TO XML");
    } catch (t) {
      console.log(t);
    }
  } else loadJSRelatedToCSVtoXML();
}
function csvtoyaml() {
  if ("object" == typeof YAML) {
    var t = inputEditor.getValue();
    try {
      var e = getJSONFromCSV(t).replace(/([ :$&]+)(?=[(\w* *]*":)/g, "_"),
        o = jsonlint.parse(e),
        i = YAML.stringify(o);
      outputEditor.getSession().setMode("ace/mode/yaml"),
        outputEditor.setValue(i),
        setModelTitle("CSV TO YAML");
    } catch (t) {
      console.log(t);
    }
  } else loadJSRelatedToCSVtoYAML();
}
function loadCSVSampleData() {
  0 != $("#inputeditor").length &&
    (inputEditor.setValue(getCSVSample()), defaultAction());
}
function getCSVSample() {
  return "id,firstName,lastName,photo \n1,Tom,Cruise,https://jsonformatter.org/img/tom-cruise.jpg \n2,Maria,Sharapova,https://jsonformatter.org/img/Maria-Sharapova.jpg \n3,Robert,Downey Jr.,https://jsonformatter.org/img/Robert-Downey-Jr.jpg";
}
