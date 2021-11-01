var CSV = {
    delimiter: ",",
    detectedDelimiter: ",",
    autodetect: !0,
    quote: '"',
    limit: "",
    isFirstRowHeader: !0,
    headerToUpper: !1,
    headerToLower: !1,
    skipEmptyRows: !0,
    relaxedMode: !0,
    ignoreQuote: !1,
    excelMode: !0,
    sortNeeded: !1,
    maxColumnsFound: 0,
    prevColumnsFound: 0,
    dataRowsFound: 0,
    arHeaderRow: [],
    table: [],
    statsCnt: [],
    displayPoss: "",
    sortPoss: "",
    sortIgnoreCase: !1,
    parse: function (e, t) {
      var n,
        r = "",
        a = "";
      (t =
        t ||
        function (e, t, n) {
          return n;
        }),
        (this.table = []),
        (this.statsCnt = []),
        (this.arHeaderRow = []),
        (this.maxColumnsFound = 0),
        (this.dataRowsFound = 0);
      var o,
        l,
        i,
        s,
        d = e.split(""),
        u = 0,
        c = d.length,
        p = 0;
      for (
        "" != this.limit && isNaN(this.limit) && (this.limit = ""),
          detect = { comma: 0, semi: 0, tab: 0, pipe: 0, colon: 0, space: 0 },
          n = 0;
        n < c && (!(n > 1) || ("\r" != d[n] && "\n" != d[n]));
        n++
      )
        "," == d[n] && detect.comma++,
          ";" == d[n] && detect.semi++,
          "\t" == d[n] && detect.tab++,
          "|" == d[n] && detect.pipe++,
          ":" == d[n] && detect.colon++,
          " " == d[n] && detect.space++;
      for (
        this.detectedDelimiter = this.delimiter,
          detect.tab >= detect.comma &&
          detect.tab >= detect.pipe &&
          detect.tab >= detect.semi &&
          detect.tab >= detect.colon
            ? (this.detectedDelimiter = "\t")
            : detect.semi > detect.comma &&
              detect.semi > detect.pipe &&
              detect.semi > detect.tab &&
              detect.semi > detect.colon
            ? (this.detectedDelimiter = ";")
            : detect.colon > detect.comma &&
              detect.colon > detect.pipe &&
              detect.colon > detect.tab &&
              detect.colon > detect.semi
            ? (this.detectedDelimiter = ":")
            : detect.pipe > detect.comma &&
              detect.pipe > detect.semi &&
              detect.pipe > detect.tab &&
              detect.pipe > detect.colon
            ? (this.detectedDelimiter = "|")
            : detect.comma > detect.tab &&
              detect.comma > detect.pipe &&
              detect.comma > detect.semi &&
              detect.comma > detect.colon &&
              (this.detectedDelimiter = ","),
          0 == detect.tab &&
            0 == detect.comma &&
            0 == detect.pipe &&
            0 == detect.colon &&
            0 == detect.semi &&
            detect.space > 0 &&
            (this.detectedDelimiter = " "),
          this.autodetect && (this.delimiter = this.detectedDelimiter);
        u < c;

      )
        if (!this.skipEmptyRows || ("\r" != d[u] && "\n" != d[u])) {
          for (
            this.table.push((i = []));
            u < c && "\r" !== d[u] && "\n" !== d[u];

          ) {
            if (((s = o = l = u), this.relaxedMode)) {
              for (; " " === d[u]; ) ++u;
              d[u] !== this.quote || this.ignoreQuote ? (u = s) : (o = u);
            }
            if (
              (this.excelMode &&
                "=" === d[u] &&
                u + 1 < c &&
                d[u + 1] === this.quote &&
                ((o = ++u), !0),
              this.quote !== d[u] || this.ignoreQuote)
            )
              for (
                ;
                u < c &&
                "\r" !== d[u] &&
                "\n" !== d[u] &&
                this.delimiter !== d[u];

              )
                l = ++u;
            else {
              for (o = l = ++u; u < c; ) {
                if (this.quote === d[u]) {
                  if (this.quote !== d[u + 1]) break;
                  d[++u] = "";
                }
                l = ++u;
              }
              for (
                this.quote === d[u] && ++u;
                u < c &&
                "\r" !== d[u] &&
                "\n" !== d[u] &&
                this.delimiter !== d[u];

              )
                ++u;
            }
            if (
              (i.push(
                t(this.table.length - 1, i.length, d.slice(o, l).join(""))
              ),
              " " == this.delimiter)
            )
              for (; u < c && d[u] == this.delimiter; ) ++u;
            this.delimiter === d[u] && ++u;
          }
          if (
            (d[u - 1] == this.delimiter &&
              " " != this.delimiter &&
              i.push(t(this.table.length - 1, i.length, "")),
            i.length > this.maxColumnsFound &&
              (this.maxColumnsFound = i.length),
            "\r" === d[u] && ++u,
            "\n" === d[u] && ++u,
            !this.isFirstRowHeader || p > 0)
          )
            for (n = 0; n < i.length; n++) {
              if (
                ((n >= this.statsCnt.length || 0 == p) &&
                  (this.statsCnt[n] = {
                    dateCnt: 0,
                    intCnt: 0,
                    realCnt: 0,
                    emptyCnt: 0,
                    bitCnt: 0,
                    equalUsed: !1,
                    fieldType: "",
                    fieldDecs: 0,
                    fieldPrec: 0,
                    fldMinLen: Number.MAX_VALUE,
                    fldMaxLen: 0,
                  }),
                (r = i[n].replace(/^\s+|\s+$/g, "")),
                this.excelMode &&
                  r.length > 2 &&
                  '="' === r.substr(0, 2) &&
                  '"' === r.substr(r.length - 1))
              ) {
                this.statsCnt[n].equalUsed = !0;
                var m = new RegExp(this.quote + this.quote, "gmi");
                r = i[n] = r.substr(2, r.length - 3).replace(m, this.quote);
              }
              if (
                ("" == r
                  ? this.statsCnt[n].emptyCnt++
                  : (r.length < this.statsCnt[n].fldMinLen &&
                      (this.statsCnt[n].fldMinLen = r.length),
                    r.length > this.statsCnt[n].fldMaxLen &&
                      (this.statsCnt[n].fldMaxLen = r.length)),
                "" != (a = r) && a.isNumeric())
              ) {
                this.statsCnt[n].realCnt++;
                var h = a.split(".");
                h[0].length > this.statsCnt[n].fieldPrec &&
                  (this.statsCnt[n].fieldPrec = h[0].length),
                  h.length > 1 &&
                    h[1].length > this.statsCnt[n].fieldDecs &&
                    (this.statsCnt[n].fieldDecs = h[1].length),
                  r.indexOf(".") < 0 && this.statsCnt[n].intCnt++,
                  ("0" !== r && "1" !== r) || this.statsCnt[n].bitCnt++;
              }
              r.isDateMaybe() && this.statsCnt[n].dateCnt++;
            }
          if (
            (p++,
            "" != this.limit &&
              p - (this.isFirstRowHeader ? 1 : 0) >= 1 * this.limit)
          )
            break;
        } else u++;
      if (
        ((this.dataRowsFound = p - (this.isFirstRowHeader ? 1 : 0)),
        this.isFirstRowHeader && this.table.length > 0)
      )
        for (
          this.arHeaderRow = this.table.shift(), n = 0;
          n < this.maxColumnsFound;
          n++
        )
          (this.arHeaderRow[n] && "" != this.arHeaderRow[n]) ||
            (this.arHeaderRow[n] = "FIELD" + (n + 1)),
            (this.arHeaderRow[n] = this.arHeaderRow[n].trim());
      if (this.arHeaderRow.length > 0)
        for (n = 0; n < this.arHeaderRow.length; n++)
          this.determineCsvColType(n);
      else if (this.table.length > 0)
        for (n = 0; n < this.maxColumnsFound; n++)
          (this.arHeaderRow[n] && "" != this.arHeaderRow[n]) ||
            (this.arHeaderRow[n] = "FIELD" + (n + 1)),
            this.determineCsvColType(n);
      for (n = 0; n < this.arHeaderRow.length; n++)
        this.headerToUpper &&
          (this.arHeaderRow[n] = this.arHeaderRow[n].toUpperCase()),
          this.headerToLower &&
            (this.arHeaderRow[n] = this.arHeaderRow[n].toLowerCase());
      return "" != this.sortPoss && this.table.sort(this.sortCsv), 0;
    },
    setSortFlds: function (e) {
      CSV.sortPoss = e.trim();
    },
    sortCsv: function (e, t) {
      if ("" == CSV.sortPoss) return 0;
      var n = [],
        r = [],
        a = [];
      for (n = CSV.sortPoss.split(","), j = 0; j < n.length; j++)
        switch (
          ((r[j] = 1),
          (a[j] = ""),
          "D" == n[j].right(1).toUpperCase() &&
            ((r[j] = -1), (n[j] = n[j].left(n[j].length - 1))),
          n[j].left(1).toUpperCase())
        ) {
          case "C":
            (a[j] = "C"), (n[j] = n[j].right(n[j].length - 1));
            break;
          case "N":
            (a[j] = "N"), (n[j] = n[j].right(n[j].length - 1));
        }
      for (j = 0; j < n.length; j++)
        isNaN(n[j]) ? (n[j] = -1) : (n[j] = 1 * n[j] - 1);
      for (j = 0; j < n.length; j++) n[j] >= e.length && (n[j] = -1);
      for (j = 0; j < n.length; j++)
        if (!(n[j] < 0))
          if (
            isNaN(e[n[j]].replace(/[\$,]/g, "")) ||
            isNaN(t[n[j]].replace(/[\$,]/g, "")) ||
            CSV.dataRowsFound !=
              CSV.statsCnt[n[j]].realCnt + CSV.statsCnt[n[j]].emptyCnt ||
            "C" == a[j]
          )
            if (CSV.sortIgnoreCase) {
              if (e[n[j]].toUpperCase() < t[n[j]].toUpperCase())
                return -1 * r[j];
              if (e[n[j]].toUpperCase() > t[n[j]].toUpperCase())
                return 1 * r[j];
            } else {
              if (e[n[j]] < t[n[j]]) return -1 * r[j];
              if (e[n[j]] > t[n[j]]) return 1 * r[j];
            }
          else {
            if (
              1 * e[n[j]].replace(/[\$,]/g, "") <
              1 * t[n[j]].replace(/[\$,]/g, "")
            )
              return -1 * r[j];
            if (
              1 * e[n[j]].replace(/[\$,]/g, "") >
              1 * t[n[j]].replace(/[\$,]/g, "")
            )
              return 1 * r[j];
          }
      return 0;
    },
    determineCsvColType: function (e) {
      return 0 == this.table.length
        ? ""
        : (e >= this.statsCnt.length &&
            (this.statsCnt[e] = {
              dateCnt: 0,
              intCnt: 0,
              realCnt: 0,
              emptyCnt: 0,
              bitCnt: 0,
              fieldType: "",
            }),
          this.table.length == this.statsCnt[e].bitCnt
            ? ((this.statsCnt[e].fieldType = "B"), "B")
            : this.table.length == this.statsCnt[e].dateCnt
            ? ((this.statsCnt[e].fieldType = "D"), "D")
            : this.table.length == this.statsCnt[e].intCnt
            ? ((this.statsCnt[e].fieldType = "I"), "I")
            : this.table.length == this.statsCnt[e].realCnt
            ? ((this.statsCnt[e].fieldType = "N"), "N")
            : this.statsCnt[e].bitCnt > 0 &&
              this.table.length ==
                this.statsCnt[e].bitCnt + this.statsCnt[e].emptyCnt
            ? ((this.statsCnt[e].fieldType = "B"), "B")
            : this.statsCnt[e].dateCnt > 0 &&
              this.table.length ==
                this.statsCnt[e].dateCnt + this.statsCnt[e].emptyCnt
            ? ((this.statsCnt[e].fieldType = "D"), "D")
            : this.statsCnt[e].intCnt > 0 &&
              this.table.length ==
                this.statsCnt[e].intCnt + this.statsCnt[e].emptyCnt
            ? ((this.statsCnt[e].fieldType = "I"), "I")
            : this.statsCnt[e].realCnt > 0 &&
              this.table.length ==
                this.statsCnt[e].realCnt + this.statsCnt[e].emptyCnt
            ? ((this.statsCnt[e].fieldType = "N"), "N")
            : ((this.statsCnt[e].fieldType = "VC"), "VC"));
    },
    stringify: function (e, t) {
      t =
        t ||
        function (e, t, n) {
          return n;
        };
      var n,
        r,
        a,
        o,
        l = "",
        i = e.length;
      for (a = 0; a < i; ++a)
        for (a && (l += "\r\n"), n = 0, r = e[a].length; n < r; ++n)
          n && (l += this.delimiter),
            (o = t(a, n, e[a][n])),
            /[,\r\n"]/.test(o) &&
              (o =
                this.quote +
                o.replace(/"/g, this.quote + this.quote) +
                this.quote),
            (l += o || 0 === o ? o : "");
      return l;
    },
  },
  csvRedQuery;
function SeqObj(e) {
  (this.n = e - 1 || 0),
    (this.nInit = this.n),
    (this.next = function () {
      return ++this.n;
    }),
    (this.curr = function () {
      return this.n;
    }),
    (this.reset = function () {
      this.n = this.nInit;
    });
}
function temGetVal(oCsv, s, rownum, seq) {
  var j, k;
  oCsv = oCsv || CSV;
  var rn = rownum + 1,
    nr = oCsv.table.length,
    nh = oCsv.arHeaderRow.length,
    nf = 0,
    br = "\n",
    lb = "{",
    rb = "}",
    tab = "    ";
  for (k = 0; k < oCsv.maxColumnsFound; k++)
    eval("var f" + (k + 1) + "=''"), eval("var h" + (k + 1) + "=''");
  for (k = 0; k < oCsv.arHeaderRow.length; k++)
    eval("var h" + (k + 1) + "=oCsv.arHeaderRow[k]");
  if (rownum >= 0)
    for (k = 0; k < oCsv.table[rownum].length; k++)
      eval("var f" + (k + 1) + "=oCsv.table[rownum][k]");
  nf = rownum >= 0 ? oCsv.table[rownum].length : 0;
  var a = s.split("."),
    b;
  for (j = 0; j < a.length; j++)
    (b = a[j].trim().split("(")),
      "csv" == b[0].trim().toLowerCase() &&
        b.length > 1 &&
        ")" === b[1].trim() &&
        (a[j] =
          "csv(" +
          oCsv.quote.enclose('"', "\\") +
          "," +
          oCsv.quote.enclose('"', "\\") +
          ")");
  try {
    return eval(a.join("."));
  } catch (e) {
    return "";
  }
}
function temHandler(e, t, n, r) {
  if (((e = e || CSV), "" == t.trim())) return t;
  var a = (t = t
      .replace(/\r\n|\r|\n/g, "{br}")
      .replace(/{\s/g, "{lb} ")
      .replace(/{$/g, "{lb}")
      .replace(/\s}/g, " {rb}")
      .replace(/^}/g, "{rb}"))
      .replace(/{/g, "{\n")
      .split(/{|}/)
      .join("\n"),
    o = 0,
    l = !1;
  lines = a.split("\n");
  for (var i = []; o < lines.length; )
    l && "" != lines[o]
      ? (i.push(temGetVal(e, lines[o], n, r)), (l = !1))
      : "" == lines[o]
      ? (l = !0)
      : i.push(lines[o]),
      o++;
  return i.join("");
}
function csvFromTem(e, t, n, r, a, o) {
  var l;
  e = e || CSV;
  var i = "",
    s = new SeqObj();
  for (i += temHandler(e, t, -1, 0), l = 0; l < e.table.length; l++)
    "false" != temHandler(e, o, l, l).toString().left(5) &&
      ((i += temHandler(e, n, l, s.next())),
      l != e.table.length - 1 && (i += temHandler(e, r, l, s.curr())));
  return (i += temHandler(e, a, -1, s.curr()));
}
function csvToTable(e, t, n, r) {
  var a,
    o,
    l,
    i =
      '<div class="row"><div class="col-md-12"><div class="panel panel-success"><div class="panel-heading "><h3 class="panel-title">CSV Preview</h3></div><table class="table table-striped table-bordered table-hover table-condensed">\n',
    s = 0,
    d = "",
    u = [];
  for (l = getFldPosArr((e = e || CSV)), o = 0; o < e.maxColumnsFound; o++)
    u.push(0);
  if (e.isFirstRowHeader || t) {
    for (i += "<thead><tr>", n && (i += "<th>#</th>"), s = 0; s < l.length; s++)
      i +=
        '<th title="Field #' +
        ((o = l[s] - 1) + 1) +
        '">' +
        (d = o > e.arHeaderRow.length ? "FIELD" + o : e.arHeaderRow[o])
          .toHtml()
          .replace(/\r\n|\r|\n/g, "<br/>") +
        "</th>\n";
    i += "</tr></thead>\n";
  }
  for (i += "<tbody>", a = 0; a < e.table.length; a++)
    if (
      !csvRedQuery ||
      "" == csvRedQuery.query ||
      "false" != (d = temHandler(e, csvRedQuery.query, a, a)).toString().left(5)
    ) {
      for (
        i += "<tr>", n && (i += "<td>" + (a + 1) + "</td>\n"), s = 0;
        s < l.length;
        s++
      )
        (d = (o = l[s] - 1) >= e.table[a].length ? " " : e.table[a][o]),
          !e.statsCnt[o] ||
          ("N" != e.statsCnt[o].fieldType && "I" != e.statsCnt[o].fieldType)
            ? ("" == d && (d = " "),
              (i +=
                "<td>" +
                d.toHtml().replace(/\r\n|\n|\r/g, "<br/>") +
                "</td>\n"))
            : ((i +=
                '<td align="right">' +
                d.toFixed(e.statsCnt[o].fieldDecs) +
                "</td>\n"),
              (u[o] += 1 * d));
      i += "</tr>\n";
    }
  if (((i += "</tbody>"), r)) {
    for (
      i += "<tfoot><tr>", n && (i += "<th>Sum</th>"), s = 0;
      s < l.length;
      s++
    )
      (o = l[s] - 1),
        !e.statsCnt[o] ||
        ("N" != e.statsCnt[o].fieldType && "I" != e.statsCnt[o].fieldType)
          ? (i += "<th>&nbsp;</th>")
          : (i +=
              '<th align="right">' +
              u[o].toFixed(e.statsCnt[o].fieldDecs) +
              "</th>\n");
    i += "</tr></tfoot>\n";
  }
  return (i += "</table></div></div></div>");
}
function csvToXml(e, t, n) {
  var r,
    a,
    o,
    l = 0,
    i = t || "ROWSET",
    s = n || "ROW",
    d = '<?xml version="1.0"?>\n<' + i + ">\n",
    u = 0,
    c = "",
    p = "";
  if (((o = getFldPosArr((e = e || CSV))), 0 === e.table.length))
    return d + "</" + i + ">";
  for (a = getCsvHeader(e), l = 0; l < e.table.length; l++)
    if (
      !csvRedQuery ||
      "" == csvRedQuery.query ||
      "false" != (c = temHandler(e, csvRedQuery.query, l, l)).toString().left(5)
    ) {
      for (d += "<" + s + ">\n", u = 0; u < o.length; u++)
        (c = (r = o[u] - 1) >= e.table[l].length ? "" : e.table[l][r] + ""),
          (d +=
            "<" +
            (p = r >= a.length ? "FIELD" + r : a[r]).replace(/\s+/g, "_") +
            ">" +
            c.toXml() +
            "</" +
            p.replace(/\s+/g, "_") +
            ">\n");
      d += "</" + s + ">\n";
    }
  return (d += "</" + i + ">");
}
function csvToXmlProperties(e, t, n) {
  var r,
    a,
    o,
    l = 0,
    i = t || "ROWSET",
    s = n || "ROW",
    d = '<?xml version="1.0"?>\n<' + i + ">\n",
    u = 0,
    c = "";
  if (((o = getFldPosArr((e = e || CSV))), 0 === e.table.length))
    return d + "</" + i + ">";
  for (a = getCsvHeader(e), l = 0; l < e.table.length; l++)
    if (
      !csvRedQuery ||
      "" == csvRedQuery.query ||
      "false" != (c = temHandler(e, csvRedQuery.query, l, l)).toString().left(5)
    ) {
      for (d += "<" + s, u = 0; u < o.length; u++)
        (c = (r = o[u] - 1) >= e.table[l].length ? "" : e.table[l][r]),
          (d +=
            " " +
            (r >= a.length ? "FIELD" + r : a[r]).replace(/\s+/g, "_") +
            '="' +
            (c + "").toXml() +
            '"');
      d += "></" + s + ">\n";
    }
  return (d += "</" + i + ">");
}
function csvToJSON(e, t) {
  var n,
    r,
    a,
    o = 0,
    l = "[\n",
    i = 0,
    s = "";
  if (((a = getFldPosArr((e = e || CSV))), 0 === e.table.length))
    return l + "]";
  for (r = getCsvHeader(e), o = 0; o < e.table.length; o++)
    if (
      !csvRedQuery ||
      "" == csvRedQuery.query ||
      "false" != (s = temHandler(e, csvRedQuery.query, o, o)).toString().left(5)
    ) {
      for (l += "  {\n", i = 0; i < a.length; i++)
        (s = (n = a[i] - 1) >= e.table[o].length ? "" : e.table[o][n]),
          (l +=
            '    "' +
            (n >= r.length || !r[n] || "" == r[n]
              ? "FIELD" + (i + 1)
              : r[n]
            ).toJson() +
            '":'),
          t ||
          !e.statsCnt[n] ||
          ("N" != e.statsCnt[n].fieldType && "I" != e.statsCnt[n].fieldType)
            ? (l += '"' + s.toJson() + '"')
            : "" != s
            ? ("." == (s = s.toNumber() + "").left(1) && (s = "0" + s),
              "-." == s.left(2) && (s = "-0" + s.substr(1)),
              (l += s))
            : (l += "null"),
          (l += (i < a.length - 1 ? "," : "") + "\n");
      (l += "  }"), o < e.table.length - 1 && (l += ","), (l += "\n");
    }
  return (l += "]");
}
function csvToJSONArray(e, t) {
  var n,
    r,
    a,
    o = 0,
    l = "[\n",
    i = 0,
    s = "";
  if (((a = getFldPosArr((e = e || CSV))), 0 === e.table.length))
    return l + "]";
  for (r = getCsvHeader(e), o = 0; o < e.table.length; o++)
    if (
      !csvRedQuery ||
      "" == csvRedQuery.query ||
      "false" != (s = temHandler(e, csvRedQuery.query, o, o)).toString().left(5)
    ) {
      for (a.length > 1 && (l += "  ["), i = 0; i < a.length; i++)
        (s = (n = a[i] - 1) >= e.table[o].length ? "" : e.table[o][n]),
          n >= r.length ? "FIELD" + n : r[n],
          t ||
          !e.statsCnt[n] ||
          ("N" != e.statsCnt[n].fieldType && "I" != e.statsCnt[n].fieldType)
            ? (l += '"' + s.toJson() + '"')
            : "" != s
            ? ("." == (s = s.toNumber() + "").left(1) && (s = "0" + s),
              "-." == s.left(2) && (s = "-0" + s.substr(1)),
              (l += s))
            : (l += "null"),
          (l += i < a.length - 1 ? "," : "");
      a.length > 1 && (l += "  ]"),
        o < e.table.length - 1 && (l += ","),
        (l += "\n");
    }
  return (l += "]");
}
function csvToJSONColumnArray(e, t) {
  var n,
    r,
    a,
    o = 0,
    l = "{\n",
    i = 0,
    s = "";
  if (((a = getFldPosArr((e = e || CSV))), 0 === e.table.length))
    return l + "]";
  for (r = getCsvHeader(e), i = 0; i < a.length; i++) {
    (n = a[i] - 1),
      (l += '    "' + (i >= r.length ? "FIELD" + n : r[n]) + '":[');
    var d = 0;
    for (o = 0; o < e.table.length; o++)
      (csvRedQuery &&
        "" != csvRedQuery.query &&
        "false" ==
          (s = temHandler(e, csvRedQuery.query, o, o)).toString().left(5)) ||
        ((l += ++d > 1 ? "," : ""),
        (s = i >= e.table[o].length ? "" : e.table[o][n]),
        t ||
        !e.statsCnt[n] ||
        ("N" != e.statsCnt[n].fieldType && "I" != e.statsCnt[n].fieldType)
          ? (l += '"' + s.toJson() + '"')
          : "" != s
          ? ("." == (s = s.toNumber() + "").left(1) && (s = "0" + s),
            "-." == s.left(2) && (s = "-0" + s.substr(1)),
            (l += s))
          : (l += "null"));
    (l += "]"), i < a.length - 1 && (l += ","), (l += "\n");
  }
  return (l += "}");
}
function jsonToCsv(
  objArray,
  delimiter,
  bIncludeHeaders,
  bQuotes,
  noMultiLines
) {
  var array,
    str = "",
    line = "",
    i,
    j,
    index,
    value,
    columns = [];
  try {
    array = "object" != typeof objArray ? JSON.parse(objArray) : objArray;
  } catch (e) {
    array = eval("array=" + objArray);
  }
  var depth = getJsonLevel(array);
  if (2 == depth && _.isArray(array)) {
    for (
      bIncludeHeaders &&
        ((value = "Field1"),
        (line += bQuotes
          ? '"' + value.replace(/"/g, '""') + '"' + delimiter
          : value.toCsv(delimiter, '"')),
        (str += line + "\n")),
        i = 0;
      i < array.length;
      i++
    ) {
      var line = "";
      (value = array[i]),
        null == value ? (value = "") : (value += ""),
        noMultiLines && (value = value.replace(/\r\n|\r|\n/g, " ")),
        (line +=
          (bQuotes ? '"' : "") +
          ("" + value).toCsv(delimiter, '"') +
          (bQuotes ? '"' : "")),
        (str += line + "\n");
    }
    return str;
  }
  if (3 == depth && _.isArray(array) && _.every(_.values(array), _.isArray)) {
    if (bIncludeHeaders) {
      var head = array[0];
      for (index in array[0])
        (value = "Field" + (1 * index + 1)),
          columns.push(value),
          (line += bQuotes
            ? '"' + value.replace(/"/g, '""') + '"' + delimiter
            : value.toCsv(delimiter, '"') + delimiter);
      (line = line.slice(0, -1)), (str += line + "\n");
    } else for (index in array[0]) columns.push(index);
    for (i = 0; i < array.length; i++) {
      var line = "";
      for (j = 0; j < columns.length; j++)
        (value = array[i][j]),
          null == value ? (value = "") : (value += ""),
          noMultiLines && (value = value.replace(/\r\n|\r|\n/g, " ")),
          (line +=
            (bQuotes ? '"' : "") +
            ("" + value).toCsv(delimiter, '"') +
            (bQuotes ? '"' : "") +
            delimiter);
      (line = line.slice(0, -1 * delimiter.length)), (str += line + "\n");
    }
    return str;
  }
  for (
    ;
    _.isObject(array) &&
    !_.isArray(array) &&
    1 == _.keys(array).length &&
    (_.isObject(_.values(array)[0]) ||
      (_.isArray(_.values(array)[0]) && _.isObject(_.values(array)[0][0])));

  )
    array = _.values(array)[0];
  for (
    0 == _.isArray(array) &&
      1 == _.isObject(array) &&
      ((array = JSON.flatten(array)),
      (array = JSON.parse("[" + JSON.stringify(array) + "]"))),
      i = 0;
    i < array.length;
    i++
  )
    (value = array[i][columns[j]]),
      0 == _.isArray(value) &&
        1 == _.isObject(value) &&
        (array[i][columns[j]] = JSON.flatten(value));
  if (bIncludeHeaders) {
    var head = array[0];
    if (bQuotes)
      for (index in array[0])
        (value = index + ""),
          columns.push(value),
          (line += '"' + value.replace(/"/g, '""') + '"' + delimiter);
    else
      for (index in array[0])
        (value = index + ""),
          columns.push(value),
          (line += value.toCsv(delimiter, '"') + delimiter);
    (line = line.slice(0, -1)), (str += line + "\n");
  } else for (index in array[0]) columns.push(index);
  for (i = 0; i < array.length; i++) {
    var line = "";
    if (bQuotes)
      for (j = 0; j < columns.length; j++)
        (value = array[i][columns[j]]),
          "[object Object]" == (value + "").substring(0, 15) &&
            (value = JSON.valueArray(array[i][columns[j]]).slice(0, -1)),
          null == value ? (value = "") : (value += ""),
          noMultiLines && (value = value.replace(/\r\n|\r|\n/g, " ")),
          (line += '"' + value.replace(/"/g, '""') + '"' + delimiter);
    else
      for (j = 0; j < columns.length; j++)
        (value = array[i][columns[j]]),
          "[object Object]" == (value + "").substring(0, 15) &&
            (value = JSON.valueArray(array[i][columns[j]]).slice(0, -1)),
          null == value ? (value = "") : (value += ""),
          noMultiLines && (value = value.replace(/\r\n|\r|\n/g, " ")),
          (line += ("" + value).toCsv(delimiter, '"') + delimiter);
    (line = line.slice(0, -1 * delimiter.length)), (str += line + "\n");
  }
  return str;
}
function csvToFixed(e, t, n, r, a, o) {
  var l,
    i,
    s = 0,
    d = "",
    u = 0,
    c = "",
    p = "",
    m = "";
  i = getFldPosArr(e);
  var h = !1,
    g = !1;
  if (
    ((void 0 !== t && null != t) || (t = " "),
    !n || ("" !== t && " " !== t) || (t = "|"),
    0 === (e = e || CSV).table.length)
  )
    return d;
  var f = getCsvHeader(e),
    y = getCsvColLength(e),
    v = 0,
    C = "";
  if (n) {
    for (u = 0; u < i.length; u++)
      (l = i[u] - 1),
        e.isFirstRowHeader &&
          f[l] &&
          f[l].length > y[l] &&
          (y[l] = f[l].length),
        (v += y[l] + 1);
    if (
      (r && (v += ("" + e.table.length).length + 1),
      (d += "+".rpad(v, "-") + "+\n"),
      e.isFirstRowHeader)
    ) {
      for (
        d += t, r && (d += "#".rpad(("" + e.table.length).length) + t), u = 0;
        u < i.length;
        u++
      )
        u > 0 && (d += t),
          (d += (c =
            (l = i[u] - 1) >= f.length
              ? ""
              : f[l].replace(/\r\n|\r|\n/g, " ")).rpad(y[l]));
      (d += t + "\n"), (d += "+".rpad(v, "-") + "+\n");
    }
  }
  var E = 0;
  for (s = 0; s < e.table.length; s++)
    if (
      !csvRedQuery ||
      "" == csvRedQuery.query ||
      "false" != (c = temHandler(e, csvRedQuery.query, s, s)).toString().left(5)
    ) {
      for (
        E++,
          n && (d += t),
          r && (d += ("" + E).rpad(("" + e.table.length).length) + t),
          u = 0;
        u < i.length;
        u++
      )
        u > 0 && (d += t),
          (c = (l = i[u] - 1) >= e.table[s].length ? "" : e.table[s][l]),
          (g = !1),
          (h = !1),
          document.getElementById("ftrim" + (l + 1)) &&
            document.getElementById("ftrim" + (l + 1)).checked &&
            (c = c.trim()),
          document.getElementById("chkupper" + (l + 1)) &&
            document.getElementById("chkupper" + (l + 1)).checked &&
            (c = c.toUpperCase()),
          document.getElementById("chklower" + (l + 1)) &&
            document.getElementById("chklower" + (l + 1)).checked &&
            (c = c.toLowerCase()),
          document.getElementById("chkrjust" + (l + 1)) &&
            document.getElementById("chkrjust" + (l + 1)).checked &&
            (g = !0),
          document.getElementById("chkcjust" + (l + 1)) &&
            document.getElementById("chkcjust" + (l + 1)).checked &&
            (h = !0),
          (d += h
            ? c.replace(/\r\n|\r|\n/g, " ").cjust(y[l])
            : g
            ? c.replace(/\r\n|\r|\n/g, " ").rjust(y[l])
            : c.replace(/\r\n|\r|\n/g, " ").rpad(y[l]));
      var b;
      if (!n && a && 1 == E) {
        for (b = 1; b <= d.length; b++) p += ("" + b).right(1);
        if (d.length >= 10) {
          for (b = 1, u = 10; u <= d.length; u += 10, b++)
            m += "         " + ("" + b).right(1);
          p = (m = m.rpad(p.length)) + "\n" + p;
        }
      }
      n && (d += t), (d += "\n"), n && o && (d += "+".rpad(v, "-") + "+\n");
    }
  return (
    n && !o && (d += "+".rpad(v, "-") + "+\n"),
    a &&
      !n &&
      ((C = p
        .split("\n")[1]
        .replace(/[12346789]/g, "-")
        .replace(/0/g, "|")
        .replace(/5/g, "+")),
      (d = p + "\n" + C + "\n" + d)),
    d
  );
}
function fixedToCsv(e, t, n, r, a) {
  var o,
    l,
    i = t.split("|") || [],
    s = "",
    d = "",
    u = [],
    c = "",
    p = e.split(/\n|\r|\r\n/gim);
  if (("" == p[p.length - 1] && p.pop(), r)) {
    for (o = 0; o < i.length; o++)
      (c = (u = i[o].split(",")).length > 2 ? u[2] : "F" + (o + 1)),
        (s += a ? '"' + c.replace(/"/g, '""') + '"' + n : c.toCsv(n, '"') + n);
    s = s.slice(0, -1 * n.length) + "\n";
  }
  var m = 0,
    h = 0;
  for (o = 0; o < p.length; o++)
    if (((d = ""), "" != p[o])) {
      for (l = 0; l < i.length; l++)
        (m = (u = i[l].split(",") || []).length > 0 ? u[0] - 1 : 0),
          (h = u.length > 1 ? u[1] : 0),
          u.length > 2 ? u[2] : "f" + (l + 1),
          (value = p[o].substr(m, h).trim()),
          null == value ? (value = "") : (value += ""),
          (d += a
            ? '"' + ("" + value).replace(/"/g, '""') + '"' + n
            : ("" + value).toCsv(n, '"') + n);
      s += (d = d.slice(0, -1 * n.length)) + "\n";
    }
  return s;
}
function csvToMulti(e, t, n, r, a, o) {
  var l,
    i,
    s = 0,
    d = "",
    u = 0,
    c = "",
    p = "";
  if (
    ((o = o || "0"),
    isNaN("0" + o) && (o = "0"),
    (i = getFldPosArr(e)),
    (r = r || ""),
    0 === (e = e || CSV).table.length)
  )
    return d;
  for (getCsvHeader(e), s = 0; s < e.table.length; s++)
    if (
      !csvRedQuery ||
      "" == csvRedQuery.query ||
      "false" != (c = temHandler(e, csvRedQuery.query, s, s)).toString().left(5)
    ) {
      for (u = 0; u < i.length; u++)
        (p = ""),
          (c =
            (l = i[u] - 1) >= e.table[s].length
              ? ""
              : e.table[s][l].replace(/\r\n|\r|\n/g, " ")),
          n &&
            (p =
              l >= e.arHeaderRow.length
                ? "".rpad(o) + "Field-" + (l + 1) + r
                : "".rpad(o) +
                  e.arHeaderRow[l].replace(/\r\n|\r|\n/g, " ") +
                  r),
          (d += p + c + "\n"),
          a && (d += "\n");
      d += t + "\n";
    }
  return d;
}
function csvToKml(e, t, n, r, a, o) {
  var l,
    i,
    s = 0,
    d = "",
    u = '<?xml version="1.0" encoding="UTF-8"?>\n';
  if (
    ((u += '<kml xmlns="http://earth.google.com/kml/2.0">\n'),
    (u += "<Document>\n"),
    0 === (e = e || CSV).table.length)
  )
    return u + "</Document></kml>";
  for (
    i = getCsvHeader(e),
      ("" == o.trim() || isNaN(o) || 1 * o < 1 || 1 * o > e.table[0].length) &&
        (o = ""),
      s = 0;
    s < e.table.length;
    s++
  )
    if (
      !csvRedQuery ||
      "" == csvRedQuery.query ||
      ((v = temHandler(e, csvRedQuery.query, s, s)),
      "false" != v.toString().left(5))
    ) {
      for (
        u += "<Placemark>\n", d = "", l = 0;
        l < e.table[s].length && !(l >= i.length);
        l++
      )
        if ((isNaN(r) || l != r - 1) && (isNaN(a) || l != a - 1)) {
          if (isNaN(t) || l != t - 1) {
            if (isNaN(n) || l != n - 1) continue;
            (i[l] = "description"), "" != o && (d = " " + e.table[s][o - 1]);
          } else i[l] = "name";
          u +=
            "<" +
            i[l] +
            ">" +
            e.table[s][l].toHtml() +
            d.toHtml() +
            "</" +
            i[l] +
            ">\n";
        }
      !isNaN(r) &&
        !isNaN(a) &&
        r.length > 0 &&
        a.length > 0 &&
        1 * r <= e.table[s].length &&
        1 * a <= e.table[s].length &&
        e.table[s][1 * r - 1] &&
        e.table[s][1 * a - 1] &&
        ((u += "<Point><coordinates>"),
        (u += e.table[s][1 * a - 1] + "," + e.table[s][1 * r - 1] + ",0"),
        (u += "</coordinates></Point>\n")),
        (u += "</Placemark>\n");
    }
  return (u += "</Document>\n</kml>");
}
function csvToCsv(e, t, n, r, a, o, l) {
  if (0 === (e = e || CSV).table.length) return "";
  var i,
    s,
    d,
    u,
    c = 0,
    p = "",
    m = 0;
  if (((d = getFldPosArr(e)), n || a)) {
    for (s = getCsvHeader(e), m = 0; m < d.length; m++)
      m > 0 && (p += t),
        (p += ((c = d[m] - 1) >= s.length ? "" : s[c]).toCsv(t, e.quote));
    "" != p && (p += "\n");
  }
  for (c = 0; c < e.table.length; c++)
    if (
      !csvRedQuery ||
      "" == csvRedQuery.query ||
      "false" != (u = temHandler(e, csvRedQuery.query, c, c)).toString().left(5)
    ) {
      for (m = 0; m < d.length; m++)
        (i = d[m] - 1),
          (u = e.table[c][i] ? e.table[c][i] : "") &&
            o &&
            (u = u.replace(/\r\n|\r|\n/g, " ")),
          r && "" != u
            ? u.indexOf(",") < 0
              ? (p += "=" + u.toCsv(t, e.quote, e.quote, r))
              : (p += '"="' + u.toCsv(t, e.quote, e.quote, r) + '""')
            : l ||
              !e.statsCnt[i] ||
              ("N" != e.statsCnt[i].fieldType && "I" != e.statsCnt[i].fieldType)
            ? (p += u.toCsv(t, e.quote, e.quote, l))
            : (p += u || ""),
          (p += m < d.length - 1 ? t : "");
      p += "\n";
    }
  return p;
}
function getCsvColLength(e) {
  var t = 0,
    n = 0,
    r = 0,
    a = new Array();
  if (0 === (e = e || CSV).table.length) return a;
  for (n = 0; n < e.maxColumnsFound; n++) a.push(0);
  for (t = 0; t < e.table.length; t++)
    for (n = 0; n < a.length; n++)
      n >= e.table[t].length ||
        (e.table[t][n].length > a[n] && (a[n] = e.table[t][n].length),
        document.getElementById("fpadsize" + (n + 1)) &&
          ((r = document.getElementById("fpadsize" + (n + 1)).value),
          isNaN(r) ? (r = 0) : (r *= 1),
          r > a[n] && (a[n] = r)));
  return a;
}
function isSqlKeywords() {
  return [
    "ACTION",
    "ADD",
    "AFTER",
    "ALL",
    "ALTER",
    "ANALYZE",
    "AND",
    "AS",
    "ASC",
    "ATTACH",
    "AUTOINCREMENT",
    "BEFORE",
    "BEGIN",
    "BETWEEN",
    "BY",
    "CASCADE",
    "CASE",
    "CAST",
    "CHECK",
    "COLLATE",
    "COLUMN",
    "COMMIT",
    "CONFLICT",
    "CONSTRAINT",
    "CREATE",
    "CROSS",
    "CURRENT_DATE",
    "CURRENT_TIME",
    "CURRENT_TIMESTAMP",
    "DATABASE",
    "DEFAULT",
    "DEFERRABLE",
    "DEFERRED",
    "DELETE",
    "DESC",
    "DETACH",
    "DISTINCT",
    "DROP",
    "EACH",
    "ELSE",
    "END",
    "ESCAPE",
    "EXCEPT",
    "EXCLUSIVE",
    "EXISTS",
    "EXPLAIN",
    "FAIL",
    "FOR",
    "FOREIGN",
    "FROM",
    "FULL",
    "GLOB",
    "GROUP",
    "HAVING",
    "IF",
    "IGNORE",
    "IMMEDIATE",
    "IN",
    "INDEX",
    "INDEXED",
    "INITIALLY",
    "INNER",
    "INSERT",
    "INSTEAD",
    "INTERSECT",
    "INTO",
    "IS",
    "ISNULL",
    "JOIN",
    "KEY",
    "LEFT",
    "LIKE",
    "LIMIT",
    "MATCH",
    "NATURAL",
    "NO",
    "NOT",
    "NOTNULL",
    "NULL",
    "OF",
    "OFFSET",
    "ON",
    "OR",
    "ORDER",
    "OUTER",
    "PLAN",
    "PRAGMA",
    "PRIMARY",
    "QUERY",
    "RAISE",
    "RECURSIVE",
    "REFERENCES",
    "REGEXP",
    "REINDEX",
    "RELEASE",
    "RENAME",
    "REPLACE",
    "RESTRICT",
    "RIGHT",
    "ROLLBACK",
    "ROW",
    "SAVEPOINT",
    "SELECT",
    "SET",
    "SUM",
    "SYSDATE",
    "TABLE",
    "TEMP",
    "TEMPORARY",
    "THEN",
    "TO",
    "TRANSACTION",
    "TRIGGER",
    "UNION",
    "UNIQUE",
    "UPDATE",
    "USING",
    "VACUUM",
    "VALUES",
    "VIEW",
    "VIRTUAL",
    "WHEN",
    "WHERE",
    "WITH",
    "WITHOUT",
  ];
}
function csvToSql(e, t, n, r, a, o, l, i, s, d, u, c) {
  var p,
    m,
    h,
    g,
    f,
    y = 0,
    v = "",
    C = "",
    E = "",
    b = "",
    S = [],
    I = [],
    N = [],
    R = [],
    k = [],
    T = "",
    B = [],
    A = 0;
  if (0 === (e = e || CSV).table.length) return v;
  for (
    n = n || "I", r = r || !1, f = getCsvHeader(e), m = p = 0;
    p < f.length;
    p++
  )
    (I[p] = f[p].replace(/\s+/g, "_")),
      (B[p] = !1),
      (N[p] = R[p] = ""),
      document.getElementById("fkey" + (p + 1)) &&
        document.getElementById("fkey" + (p + 1)).checked &&
        (A++, (B[p] = !0)),
      document.getElementById("fname" + (p + 1)) &&
        (I[p] = document
          .getElementById("fname" + (p + 1))
          .value.replace(/\s+/g, "_")),
      document.getElementById("freq" + (p + 1)) &&
        (k[p] = document.getElementById("freq" + (p + 1)).checked),
      document.getElementById("fsize" + (p + 1))
        ? ((N[p] = document.getElementById("fsize" + (p + 1)).value.trim()),
          isNaN(N[p]) ? (N[p] = 30) : (N[p] *= 1),
          N[p] < 1 && (N[p] = ""))
        : (N[p] = 30),
      document.getElementById("fdec" + (p + 1)) &&
        ((R[p] = document.getElementById("fdec" + (p + 1)).value.trim()),
        isNaN(R[p]) ? (R[p] = "") : ((R[p] *= 1), R[p] < 0 && (R[p] = ""))),
      document.getElementById("finc" + (p + 1))
        ? document.getElementById("finc" + (p + 1)).checked
          ? ((S[p] = !0), m++)
          : (S[p] = !1)
        : ((S[p] = !0), m++);
  if (0 == m) return "";
  if (
    (t.indexOf(" ") > 0 && (t = '"' + t + '"'),
    l && (v += "DROP TABLE " + (i ? "IF EXISTS " : "") + t + ";\n"),
    a)
  ) {
    var j = r;
    for (
      v += "CREATE TABLE " + (o ? "IF NOT EXISTS " : "") + t + "(",
        (r = !0) && (v += "\n"),
        m = p = 0;
      p < f.length;
      p++, m++
    ) {
      switch (
        (r && m > 0 && (v += "\n"),
        (v += m > 0 ? "," : " "),
        (v += " " + I[p]),
        (C = e.statsCnt[p].fieldType),
        document.getElementById("ftype" + (p + 1)) &&
          (C = document.getElementById("ftype" + (p + 1)).value),
        C)
      ) {
        case "B":
          v += " BIT ";
          break;
        case "NR":
        case "N":
          (v += "N" == C ? " NUMERIC" : " NUMBER"),
            (h = e.statsCnt[p].fieldPrec + e.statsCnt[p].fieldDecs),
            (g = e.statsCnt[p].fieldDecs),
            N[p] && N[p] > h && (h = N[p]),
            (v += "" != h ? "(" + h + "," + g + ")" : " ");
          break;
        case "IT":
          v += " INT ";
          break;
        case "I":
          (v += " INTEGER"), (v += "" != (h = N[p]) ? "(" + h + ")" : " ");
          break;
        case "S":
          v += " SERIAL ";
          break;
        case "D":
          v += " DATE ";
          break;
        case "DT":
          v += " DATETIME ";
          break;
        case "VC":
          v += " VARCHAR(" + N[p] + ")";
          break;
        default:
          v += " CHAR(" + N[p] + ")";
      }
      k[p] && (v += " NOT NULL"),
        B[p] &&
          1 == A &&
          ((v += " PRIMARY KEY"),
          ("N" != C && "NR" != C && "I" != C && "IT" != C) ||
            (document.getElementById("selAutoIncrement") &&
              (v += " " + document.getElementById("selAutoIncrement").value)));
    }
    if (A > 1) {
      for (r && (v += "\n"), v += ", PRIMARY KEY(", x = 0; x < B.length; x++)
        B[x] && (v += (x > 0 ? "," : "") + I[x]);
      v += ")";
    }
    r && (v += "\n"), (v += ");\n"), (r = j);
  }
  switch (n) {
    case "I":
      for (y = 0; y < e.table.length; y++)
        if (
          !csvRedQuery ||
          "" == csvRedQuery.query ||
          "false" !=
            (E = temHandler(e, csvRedQuery.query, y, y)).toString().left(5)
        ) {
          if (0 != y && u) v += ",(";
          else {
            for (
              v += s ? "REPLACE" : "INSERT",
                "" != d.trim() && (v += " " + d.trim()),
                v += " INTO " + t + "(",
                r && (v += "\n"),
                m = p = 0;
              p < f.length;
              p++
            )
              S[p] && (m > 0 && (v += ","), (v += I[p]), r && (v += "\n"), m++);
            v += ") VALUES" + (u ? "\n" : "") + " (";
          }
          for (r && (v += "\n"), m = p = 0; p < f.length; p++)
            if (S[p]) {
              if (
                ((C = e.statsCnt[p].fieldType),
                (E = p >= e.table[y].length ? "" : e.table[y][p]),
                document.getElementById("ftype" + (p + 1)) &&
                  (C = document.getElementById("ftype" + (p + 1)).value),
                document.getElementById("ftem" + (p + 1)) &&
                  (b = document.getElementById("ftem" + (p + 1)).value),
                document.getElementById("ftrim" + (p + 1)) &&
                  document.getElementById("ftrim" + (p + 1)).checked &&
                  (E = E.trim()),
                document.getElementById("chkupper" + (p + 1)) &&
                  document.getElementById("chkupper" + (p + 1)).checked &&
                  (E = E.toUpperCase()),
                document.getElementById("chklower" + (p + 1)) &&
                  document.getElementById("chklower" + (p + 1)).checked &&
                  (E = E.toLowerCase()),
                m > 0 && (v += ","),
                "" != b)
              )
                v +=
                  "N" == C ||
                  "NR" == C ||
                  "I" == C ||
                  "IT" == C ||
                  "S" == C ||
                  "D" == C ||
                  "DT" == C
                    ? "" == E
                      ? b.replace("{f}", "NULL")
                      : "D" == C || "DT" == C
                      ? b.replace("{f}", "'" + E.toSql() + "'")
                      : b.replace("{f}", E.toSql())
                    : b.replace("{f}", "'" + E.toSql() + "'");
              else
                switch (C) {
                  case "B":
                  case "NR":
                  case "S":
                  case "N":
                  case "IT":
                  case "I":
                    "" === E.trim() || ("NULL" == E.toUpperCase() && c)
                      ? (v += "NULL")
                      : (v += E.toSql());
                    break;
                  case "DT":
                  case "D":
                    "" === E || ("NULL" == E.toUpperCase() && c)
                      ? (v += "NULL")
                      : (v += "'" + E.toSql() + "'");
                    break;
                  default:
                    "NULL" == E.toUpperCase() && c
                      ? (v += "NULL")
                      : (v += "'" + E.toSql() + "'");
                }
              r && (v += "\n"), m++;
            }
          u && y != e.table.length - 1 ? (v += ")\n") : (v += ");\n");
        }
      break;
    case "U":
      for (y = 0; y < e.table.length; y++)
        if (
          !csvRedQuery ||
          "" == csvRedQuery.query ||
          "false" !=
            (E = temHandler(e, csvRedQuery.query, y, y)).toString().left(5)
        ) {
          for (
            T = "1=1",
              v += "UPDATE",
              "" != d.trim() && (v += " " + d.trim()),
              v += " " + t + " SET ",
              r && (v += "\n"),
              p = 0;
            p < f.length;
            p++
          )
            B[p] && (T += " AND " + I[p] + "= {f" + p + "}");
          for (
            "1=1" === T && (T += " AND " + I[0] + "= {f0}"), m = p = 0;
            p < f.length;
            p++
          ) {
            switch (
              (S[p] && (m > 0 && (v += ","), (v += I[p] + " = "), m++),
              (C = e.statsCnt[p].fieldType),
              (E = p >= e.table[y].length ? "" : e.table[y][p]),
              document.getElementById("ftype" + (p + 1)) &&
                (C = document.getElementById("ftype" + (p + 1)).value),
              document.getElementById("ftem" + (p + 1)) &&
                (b = document.getElementById("ftem" + (p + 1)).value),
              document.getElementById("ftrim" + (p + 1)) &&
                document.getElementById("ftrim" + (p + 1)).checked &&
                (E = E.trim()),
              document.getElementById("chkupper" + (p + 1)) &&
                document.getElementById("chkupper" + (p + 1)).checked &&
                (E = E.toUpperCase()),
              document.getElementById("chklower" + (p + 1)) &&
                document.getElementById("chklower" + (p + 1)).checked &&
                (E = E.toLowerCase()),
              "" != b &&
                (v +=
                  "" != E ||
                  ("N" != C && "NR" != C && "I" != C && "IT" != C && "D" != C)
                    ? b.replace("{f}", E.toSql())
                    : b.replace("{f}", "NULL")),
              C)
            ) {
              case "B":
                S[p] && (v += "'" + E.toSql() + "'"),
                  (T = T.replace("{f" + p + "}", "'" + E.toSql() + "'"));
                break;
              case "NR":
              case "N":
                S[p] &&
                  ("" === E || ("NULL" == E.toUpperCase() && c)
                    ? (v += "NULL")
                    : (v += E.toSql())),
                  (T = T.replace("{f" + p + "}", E.toSql()));
                break;
              case "IT":
              case "I":
                S[p] &&
                  ("" === E || ("NULL" == E.toUpperCase() && c)
                    ? (v += "NULL")
                    : (v += E.toSql())),
                  (T = T.replace("{f" + p + "}", E.toSql()));
                break;
              case "D":
                S[p] &&
                  (v +=
                    "" === E || ("NULL" == E && c)
                      ? "NULL"
                      : "'" + E.toSql() + "'"),
                  (T = T.replace("{f" + p + "}", "'" + E.toSql() + "'"));
                break;
              default:
                S[p] &&
                  ("NULL" == E.toUpperCase() && c
                    ? (v += "NULL")
                    : (v += "'" + E.toSql() + "'")),
                  (T = T.replace("{f" + p + "}", "'" + E.toSql() + "'"));
            }
            S[p] && (r && (v += "\n"), m++);
          }
          (v += " WHERE " + T), (v += ";\n");
        }
      break;
    case "D":
      for (y = 0; y < e.table.length; y++)
        if (
          !csvRedQuery ||
          "" == csvRedQuery.query ||
          "false" !=
            (E = temHandler(e, csvRedQuery.query, y, y)).toString().left(5)
        ) {
          for (
            T = "1=1", v += "DELETE FROM " + t, r && (v += "\n"), p = 0;
            p < I.length;
            p++
          )
            B[p] && (T += " AND " + I[p] + "= {f" + p + "}");
          for (
            "1=1" === T && (T += " AND " + I[0] + "= {f0}"), m = p = 0;
            p < f.length;
            p++
          ) {
            switch (
              (m++,
              (C = e.statsCnt[p].fieldType),
              (E = p >= e.table[y].length ? "" : e.table[y][p]),
              document.getElementById("ftype" + (p + 1)) &&
                (C = document.getElementById("ftype" + (p + 1)).value),
              document.getElementById("ftem" + (p + 1)) &&
                (b = document.getElementById("ftem" + (p + 1)).value),
              document.getElementById("ftrim" + (p + 1)) &&
                document.getElementById("ftrim" + (p + 1)).checked &&
                (E = E.trim()),
              document.getElementById("chkupper" + (p + 1)) &&
                document.getElementById("chkupper" + (p + 1)).checked &&
                (E = E.toUpperCase()),
              document.getElementById("chklower" + (p + 1)) &&
                document.getElementById("chklower" + (p + 1)).checked &&
                (E = E.toLowerCase()),
              C)
            ) {
              case "B":
              case "NR":
              case "N":
              case "IT":
              case "S":
              case "I":
                T = T.replace("{f" + p + "}", E.toSql());
                break;
              default:
                T = T.replace("{f" + p + "}", "'" + E.toSql() + "'");
            }
            r && (v += "\n"), m++;
          }
          (v += " WHERE " + T), (v += ";\n");
        }
  }
  return v;
}
function geoJsonToCsv(geo, delimiter, bIncludeHeaders, bQuotes, noMultiLines) {
  var j,
    s = "",
    value = "",
    cols = {},
    obj = {};
  if ("string" == typeof geo)
    try {
      geo = JSON.parse(geo);
    } catch (e) {
      geo = eval("geo=" + geo);
    }
  var colnum = 0;
  if (
    ("Feature" === geo.type &&
      (geo = { type: "FeatureCollection", features: [geo] }),
    "FeatureCollection" === geo.type)
  ) {
    for (j = 0; j < geo.features.length; j++)
      for (p in ("Point" === geo.features[j].geometry.type
        ? ("latitude" in cols || (cols.latitude = ++colnum),
          "longitude" in cols || (cols.longitude = ++colnum))
        : (cols.coordinates = ++colnum),
      geo.features[j].properties))
        p in cols || (cols[p] = ++colnum);
    for (j = 0; j < geo.features.length; j++) {
      for (p in ("latitude" in cols &&
        ("Point" === geo.features[j].geometry.type
          ? ((s +=
              (bQuotes ? '"' : "") +
              geo.features[j].geometry.coordinates[1] +
              (bQuotes ? '"' : "") +
              delimiter),
            (s +=
              (bQuotes ? '"' : "") +
              geo.features[j].geometry.coordinates[0] +
              (bQuotes ? '"' : "") +
              delimiter))
          : ((s += (bQuotes ? '""' : "") + delimiter),
            (s += (bQuotes ? '""' : "") + delimiter))),
      "coordinates" in cols &&
        ("Point" != geo.features[j].geometry.type
          ? ((value = geo.features[j].geometry.coordinates),
            "[object Object]" == (value + "").substring(0, 15) &&
              (value = JSON.valueArray(value).slice(0, -1)),
            (s += ("" + value).toCsv(delimiter, '"', '"', bQuotes) + delimiter))
          : (s += (bQuotes ? '""' : "") + delimiter)),
      cols))
        "latitude" != p &&
          "longitude" !== p &&
          "coordinates" !== p &&
          (p in geo.features[j].properties
            ? ((value = geo.features[j].properties[p]),
              null == value ? (value = "") : (value += ""),
              noMultiLines && (value = value.replace(/\r\n|\r|\n/g, " ")),
              (s += value.toCsv(delimiter, '"', '"', bQuotes) + delimiter))
            : (s += (bQuotes ? '""' : "") + delimiter));
      s = s.slice(0, -1 * delimiter.length) + "\n";
    }
  }
  var t = "";
  if (bIncludeHeaders) {
    for (p in ("latitude" in cols &&
      (t += "latitude".toCsv(delimiter, '"', '"', bQuotes) + delimiter),
    "longitude" in cols &&
      (t += "longitude".toCsv(delimiter, '"', '"', bQuotes) + delimiter),
    "coordinates" in cols &&
      (t += "coordinates".toCsv(delimiter, '"', '"', bQuotes) + delimiter),
    cols))
      "latitude" != p &&
        "longitude" !== p &&
        "coordinates" !== p &&
        (t += p.toCsv(delimiter, '"', '"', bQuotes) + delimiter);
    t = t.slice(0, -1 * delimiter.length) + "\n";
  }
  return t + s;
}
function htmlEscape(e) {
  return String(e)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
function getCsvHeader(e) {
  var t,
    n = new Array();
  (e = e || CSV) || alert("Missing oCsv"),
    e.arHeaderRow || alert("Missing arHeaderRow");
  var r = e.arHeaderRow.length;
  for (r < e.maxColumnsFound && (r = e.maxColumnsFound), t = 0; t < r; t++)
    e.arHeaderRow[t] || e.arHeaderRow.push("FIELD" + (t + 1)),
      n.push(e.arHeaderRow[t]),
      e.headerToUpper
        ? ((e.arHeaderRow[t] = e.arHeaderRow[t].toUpperCase()),
          (n[n.length - 1] = n[n.length - 1].toUpperCase()))
        : e.headerToLower &&
          ((e.arHeaderRow[t] = e.arHeaderRow[t].toLowerCase()),
          (n[n.length - 1] = n[n.length - 1].toLowerCase()));
  return n;
}
function sqlOptions(e) {
  var t = getCsvColLength((e = e || CSV)),
    n = getCsvHeader(e),
    r =
      "<table>\n<tr>\n<th>Col #</th><th>Field Name</th><th>Data Type</th><th>Max Size</th><th title='# of decimals'>#<br/>Dec</th>";
  r +=
    '<th>Key</th><th>Include</th><th>Required</th><th>Trim</th><th>Upper</th><th>Lower</th><th title="Modify output by using {f} for field value. Ex: {f}+100">Template ({f}=field)<br/>Ex: {f}+100</th></tr>';
  var a,
    o = "<tr><td>{#}</td>";
  for (
    o +=
      '<td><input type=text id="fname{#}" size="15" value="{FIELDNAME{#}}"></td>\n',
      o += '<td><select id="ftype{#}" title="Choose data type of column" >',
      o += '<option value="VC" {VC{#}}>VarChar</option>',
      o += '<option value="C" {C{#}}>Char</option>',
      o += '<option value="NR" {NR{#}}>Number</option>',
      o += '<option value="N" {N{#}}>Numeric</option>',
      o += '<option value="IT" {IT{#}}>Int</option>',
      o += '<option value="I" {I{#}}>Integer</option>',
      o += '<option value="D" {D{#}}>Date</option>',
      o += '<option value="DT" {DT{#}}>Date Time</option>',
      o += '<option value="B" {B{#}}>Bit(0,1)</option>',
      o += '<option value="S" {S{#}}>Serial</option>',
      o +=
        '</select>\n</td><td><input id="fsize{#}"size=4 maxlength=4 value="{FIELDSIZE{#}}"></td>\n',
      o +=
        '<td><input id="fdec{#}"size=2 maxlength=2 value="{DECSIZE{#}}" readonly></td>',
      o += '<td><input type=checkbox id="fkey{#}"  value="Y" ></td>\n',
      o += '<td><input type=checkbox id="finc{#}"  value="Y" checked></td>\n',
      o += '<td><input type=checkbox id="freq{#}"  value="Y" ></td>\n',
      o += '<td><input type=checkbox id="ftrim{#}" value="Y" checked></td>\n',
      o +=
        '<td><input type=checkbox id="chkupper{#}"  value="Y" onclick="if(this.checked)document.getElementById(\'chklower{#}\').checked=false"></td>\n',
      o +=
        '<td><input type=checkbox id="chklower{#}"  value="Y" onclick="if(this.checked)document.getElementById(\'chkupper{#}\').checked=false"></td>\n',
      o +=
        '<td><input type="text" id="ftem{#}" value="" size="15" maxlength="200"></td>',
      o += "</tr>",
      a = 0;
    a < n.length;
    a++
  )
    (r += o
      .replace(/{#}/g, "" + (a + 1))
      .replace(
        "{FIELDNAME" + (a + 1) + "}",
        n[a]
          .replace(/[@+<>"'?\.,-\/#!$%\^&\*;:{}=\-`~()\[\]\\\|]/g, "")
          .replace(/\s+/g, "_")
          .replace(/_+/g, "_")
      )
      .replace("{FIELDSIZE" + (a + 1) + "}", 0 == t[a] ? 1 : t[a])),
      (r = (r =
        "N" === e.statsCnt[a].fieldType
          ? r.replace("{DECSIZE" + (a + 1) + "}", e.statsCnt[a].fieldDecs)
          : r.replace("{DECSIZE" + (a + 1) + "}", "")).replace(
        "ftitle" + (a + 1) + "}",
        "Type:" +
          e.statsCnt[a].fieldType +
          ",Counts: Total: " +
          e.table.length +
          ",Int: " +
          e.statsCnt[a].intCnt +
          " ,Numeric:" +
          e.statsCnt[a].realCnt +
          ",Bit:" +
          e.statsCnt[a].bitCnt +
          ",Date:" +
          e.statsCnt[a].dateCnt +
          ",Empty:" +
          e.statsCnt[a].emptyCnt
      )),
      "VC" === e.statsCnt[a].fieldType &&
        (r = r.replace("{VC" + (a + 1) + "}", "selected")),
      "C" === e.statsCnt[a].fieldType &&
        (r = r.replace("{C" + (a + 1) + "}", "selected")),
      "N" === e.statsCnt[a].fieldType &&
        (r = r.replace("{N" + (a + 1) + "}", "selected")),
      "I" === e.statsCnt[a].fieldType &&
        (r = r.replace("{I" + (a + 1) + "}", "selected")),
      "B" === e.statsCnt[a].fieldType &&
        (r = r.replace("{B" + (a + 1) + "}", "selected")),
      "D" === e.statsCnt[a].fieldType &&
        (r = r.replace("{D" + (a + 1) + "}", "selected")),
      "S" === e.statsCnt[a].fieldType &&
        (r = r.replace("{S" + (a + 1) + "}", "selected"));
  return (r += "</table>");
}
function setOptions(e) {
  var t,
    n = getCsvHeader((e = e || CSV));
  for (
    document.getElementById("fkey1") &&
      (document.getElementById("fkey1").checked = !0),
      document.getElementById("freq1") &&
        (document.getElementById("freq1").checked = !0),
      t = 0;
    t < n.length;
    t++
  )
    document.getElementById("fname" + (t + 1)) &&
      ((document.getElementById("fname" + (t + 1)).value = n[t]
        .replace(/[@+<>"'?\.,-\/#!$%\^&\*;:{}=\-`~()\[\]\\\|]/g, "")
        .replace(/\s+/g, "_")
        .replace(/_+/g, "_")),
      document.getElementById("ftype" + (t + 1)) &&
        (e.statsCnt[t] ||
          ((document.getElementById("ftype" + (t + 1)).value =
            e.statsCnt[t].fieldType),
          (document.getElementById("ftype" + (t + 1)).title =
            "Type:" +
            e.statsCnt[t].fieldType +
            ",Counts: Total: " +
            e.table.length +
            ",Int: " +
            e.statsCnt[t].intCnt +
            " ,Numeric:" +
            e.statsCnt[t].realCnt +
            ",Bit:" +
            e.statsCnt[t].bitCnt +
            ",Date:" +
            e.statsCnt[t].dateCnt +
            ",Empty:" +
            e.statsCnt[t].emptyCnt))));
}
function flatOptions(e) {
  getCsvColLength((e = e || CSV));
  var t = getCsvHeader(e),
    n =
      "<table>\n<tr>\n<th>Col #</th><th>Field Name</th><th>Trim</th><th>Pad Size</th>";
  n +=
    "<th>Upper</th><th>Lower</th><th>Right<br/>Justify</th><th>Center<br/>Justify</th></tr>";
  var r,
    a = "<tr><td>{#}</td>";
  for (
    a += "<td>{FIELDNAME{#}}</td>\n",
      a += '<td><input type=checkbox id="ftrim{#}" value="Y" ></td>\n',
      a +=
        '<td><input type=text id="fpadsize{#}" size=3 maxlength=3 value="" ></td>\n',
      a +=
        '<td><input type=checkbox id="chkupper{#}"  value="Y" onclick="if(this.checked)document.getElementById(\'chklower{#}\').checked=false"></td>\n',
      a +=
        '<td><input type=checkbox id="chklower{#}"  value="Y" onclick="if(this.checked)document.getElementById(\'chkupper{#}\').checked=false"></td>\n',
      a +=
        '<td><input type=checkbox id="chkrjust{#}"  value="Y" onclick="if(this.checked)document.getElementById(\'chkcjust{#}\').checked=false"></td>\n',
      a +=
        '<td><input type=checkbox id="chkcjust{#}"  value="Y" onclick="if(this.checked)document.getElementById(\'chkrjust{#}\').checked=false"></td>\n',
      a += "</tr>",
      r = 0;
    r < t.length;
    r++
  )
    n += a
      .replace(/{#}/g, "" + (r + 1))
      .replace("{FIELDNAME" + (r + 1) + "}", t[r].replace(/\s+/g, "_"));
  return (n += "</table>");
}
function parseAndOptions(e, t) {
  (e = e || CSV),
    document.getElementById("txtRowLimit") &&
      (e.limit = document.getElementById("txtRowLimit").value),
    document.getElementById("chkHeader") &&
      (e.isFirstRowHeader = document.getElementById("chkHeader").checked),
    document.getElementById("chkHeaderUpper") &&
      (e.headerToUpper = document.getElementById("chkHeaderUpper").checked),
    document.getElementById("chkHeaderLower") &&
      (e.headerToLower = document.getElementById("chkHeaderLower").checked),
    document.getElementById("txt1") &&
      CSV.parse(document.getElementById("txt1").value),
    document.getElementById("divOptions") &&
      (CSV.prevColumnsFound != CSV.maxColumnsFound || t) &&
      ((document.getElementById("divOptions").innerHTML = sqlOptions(CSV)),
      setOptions(e),
      (CSV.prevColumnsFound = CSV.maxColumnsFound)),
    document.getElementById("divFlatOptions") &&
      (CSV.prevColumnsFound != CSV.maxColumnsFound || t) &&
      ((document.getElementById("divFlatOptions").innerHTML = flatOptions(CSV)),
      (CSV.prevColumnsFound = CSV.maxColumnsFound)),
    document.getElementById("divInputCounts") &&
      (document.getElementById("divInputCounts").innerHTML =
        "Input Records- Header: " +
        (0 == CSV.arHeaderRow.length && CSV.isFirstRowHeader
          ? "missing"
          : CSV.isFirstRowHeader) +
        " &nbsp; &nbsp;  Separator: " +
        ("\t" == CSV.delimiter
          ? "Tab"
          : " " == CSV.delimiter
          ? "Space"
          : CSV.delimiter) +
        " &nbsp; &nbsp;  Fields: " +
        CSV.maxColumnsFound +
        " &nbsp; &nbsp;  Data Records: " +
        (CSV.dataRowsFound <= 0 ? "0" : CSV.dataRowsFound));
}
function clearAll() {
  var e = !1;
  document.getElementById("chkAppend") &&
    (e = document.getElementById("chkAppend").checked),
    document.getElementById("sepAuto") &&
      (document.getElementById("sepAuto").checked = !0),
    CSV && ((CSV.delimiter = ","), (CSV.autodetect = !0)),
    document.getElementById("txt1") &&
      (document.getElementById("txt1").value = ""),
    e ||
      (document.getElementById("txta") &&
        (document.getElementById("txta").value = "")),
    document.getElementById("txtCols") &&
      (document.getElementById("txtCols").value = ""),
    document.getElementById("chkHeader") &&
      (document.getElementById("chkHeader").checked = !0),
    document.getElementById("chkHeaderUpper") &&
      (document.getElementById("chkHeaderUpper").checked = !1),
    document.getElementById("chkHeaderLower") &&
      (document.getElementById("chkHeaderLower").checked = !1),
    e ||
      (document.getElementById("diva") &&
        (document.getElementById("diva").innerHTML = "")),
    document.getElementById("divOptions") &&
      (document.getElementById("divOptions").innerHTML = ""),
    document.getElementById("divFlatOptions") &&
      (document.getElementById("divFlatOptions").innerHTML = ""),
    parseAndOptions(),
    setupSortDD();
}
function getUserOptions(e) {}
function radiovalue(e) {
  if (!e) return "";
  var t = e.length;
  if (null == t) return e.checked ? e.value : "";
  for (var n = 0; n < t; n++) if (e[n].checked) return e[n].value;
  return "";
}
function setRadioValue(e, t) {
  if (e) {
    var n = e.length;
    if (null != n) {
      "\t" === (t = (t || "") + "") && (t = "\\t");
      for (var r = 0; r < n; r++)
        (e[r].checked = !1), e[r].value == t && (e[r].checked = !0);
    } else e.checked = e.value == t.toString();
  }
}
function sortStr() {
  var e, t, n;
  for (n = "", t = 1; t <= 4; t++)
    document.getElementById("selSortFld" + t) &&
      "" != (e = document.getElementById("selSortFld" + t).value) &&
      (t > 1 && (n += ","),
      (n +=
        document.getElementById("selSortType" + t).value +
        e +
        document.getElementById("selSortAsc" + t).value));
  return CSV.setSortFlds(n), (CSV.mySortNeeded = !0), n;
}
function setupSortDD() {
  var e, t, n, r;
  for (t = 1; t <= 4; t++)
    if ((e = document.getElementById("selSortFld" + t))) {
      if (e.options.length - 1 == CSV.maxColumnsFound) break;
      for (
        e.options.length = 1, e.selectedIndex = 0, n = 1;
        n <= CSV.maxColumnsFound;
        n++
      )
        ((r = document.createElement("option")).text = r.value = "" + n),
          e.options.add(r);
    }
  sortStr(),
    typeof csvCreateQueryUI == typeof Function && csvCreateQueryUI(),
    document.getElementById("btnColsReset") &&
      document.getElementById("btnColsReset").click(),
    csvRedQuery && (csvRedQuery.query = "");
}
function getFldPosArr(e) {
  var t,
    n = [];
  if ("" != (e = e || CSV).displayPoss)
    for (t = (n = e.displayPoss.split(",")).length - 1; t >= 0; t--)
      (isNaN(n[t]) || n[t] < 1 || n[t] > e.maxColumnsFound) && n.splice(t, 1);
  if (0 == n.length)
    for (t = 0; t < e.maxColumnsFound; t++) n[n.length] = t + 1;
  if (0 == n.length)
    for (t = 0; t < e.arHeaderRow.length; t++) n[n.length] = t + 1;
  return n;
}
function flattenSqlJson(e) {
  var t,
    n = [];
  for (t = 0; t < e.length; t++) {
    var r = {};
    for (k = 0; k < e[t].length; k++) r[e[t][k].column] = e[t][k].value;
    n[t] = r;
  }
  return n;
}
function getExampleCsv() {
  return 'id,name,amount,Remark\n1,"Johnson, Smith, and Jones Co.",345.33,Pays on time\n2,"Sam ""Mad Dog"" Smith",993.44,\n3,"Barney & Company",0,"Great to work with\nand always pays with cash."\n4,Johnson\'s Automotive,2344,\n';
}
function getExampleXml(e) {
  e = (e || 1) - 1;
  return '<?xml version="1.0"?>\n<ROWSET>\n<ROW>\n<id>1</id>\n<name>Johnson, Smith, and Jones Co.</name>\n<amount>345.33</amount>\n<Remark>Pays on time</Remark>\n</ROW>\n<ROW>\n<id>2</id>\n<name>Sam &quot;Mad Dog&quot; Smith</name>\n<amount>993.44</amount>\n<Remark></Remark>\n</ROW>\n<ROW>\n<id>3</id>\n<name>Barney &amp; Company</name>\n<amount>0</amount>\n<Remark>Great to work with\nand always pays with cash.</Remark>\n</ROW>\n<ROW>\n<id>4</id>\n<name>Johnson&apos;s Automotive</name>\n<amount>2344</amount>\n<Remark></Remark>\n</ROW>\n</ROWSET>';
}
function getExampleJson(e) {
  return [
    '[\n  {\n    "id":1,    "name":"Johnson, Smith, and Jones Co.",\n    "amount":345.33,    "Remark":"Pays on time"\n  },\n  {\n    "id":2,    "name":"Sam \\"Mad Dog\\" Smith",\n    "amount":993.44,    "Remark":""\n  },\n  {\n    "id":3,    "name":"Barney & Company",\n    "amount":0,    "Remark":"Great to work with\\nand always pays with cash."\n  },\n  {\n    "id":4,    "name":"Johnson\'s Automotive",\n    "amount":2344,    "Remark":""\n  }\n]\n',
    '{ "data" : [\n  {    "id":1,    "name":"Johnson, Smith, and Jones Co."  },\n  {    "id":2,    "name":"Sam \\"Mad Dog\\" Smith"  },\n  {    "id":3,    "name":"Barney & Company"  },\n  {    "id":4,    "name":"Johnson\'s Automotive"  }\n] }\n',
    '{ "race" : \n { "entries" : [\n  {    "id":11,    "name":"Johnson, Smith, and Jones Co."  },\n  {    "id":22,    "name":"Sam \\"Mad Dog\\" Smith"  },\n  {    "id":33,    "name":"Barney & Company"  },\n  {    "id":44,    "name":"Johnson\'s Automotive"  }\n] }\n}\n',
    '{\n    "id":1,    "name":"Johnson, Smith, and Jones Co.",    "amount":345.33,    "Remark":"Pays on time"\n}\n',
    '[\n    [      1,      "Johnson, Smith, and Jones Co.",      345.33    ],\n    [      99,      "Acme Food Inc.",      2993.55    ]\n]',
  ][(e = (e || 1) - 1)];
}
function getExampleKml() {
  return 'National Park,$ Obligated,State,Latitude,Longitude\nAbraham Lincoln Birthplace NHS,"$34,584",KY,37.6116333423,-85.6442940021\nAcadia,"$102,631",ME,44.3593807753,-68.2397319808\nAndersonville,"$65,133",GA,32.197905290823,-84.1302615685733\nAndrew Johnson ,"$17,949",TN,36.1562449930463,-82.8370902853041\nAntietam,"$54,743",MD,39.462381614,-77.7359854016\nAppomattox Court House,"$12,651",VA,37.3826448073,-78.8027430409\nAssateague Island,"$51,921",MD,38.0556022623662,-75.2453836072023\nBig Bend,"$535,983",TX,29.0103562389,-103.311115521\nBig South Fork National River and Recreation Area,"$3,009","TN, KY",36.3837375235,-84.6743069824\n';
}
function getExampleFlat() {
  return '1     Johnson, Smith, and Jones Co.  345.33     Pays on time                  \n2     Sam "Mad Dog" Smith            993.44              \n3     Barney & Company               0          Great to work with and always pays with cash.      \n4     Johnson\'s Automotive           2344        \n';
}
function getExampleGeoJson(e) {
  return '{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-85.6442940021,37.6116333423]},"properties":{"National Park":"Abraham Lincoln Birthplace NHS","$ Obligated":"$34,584","State":"KY"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-68.2397319808,44.3593807753]},"properties":{"National Park":"Acadia","$ Obligated":"$102,631","State":"ME"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-84.1302615685733,32.197905290823]},"properties":{"National Park":"Andersonville","$ Obligated":"$65,133","State":"GA"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-82.8370902853041,36.1562449930463]},"properties":{"National Park":"Andrew Johnson ","$ Obligated":"$17,949","State":"TN"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-77.7359854016,39.462381614]},"properties":{"National Park":"Antietam","$ Obligated":"$54,743","State":"MD"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-78.8027430409,37.3826448073]},"properties":{"National Park":"Appomattox Court House","$ Obligated":"$12,651","State":"VA"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-75.2453836072023,38.0556022623662]},"properties":{"National Park":"Assateague Island","$ Obligated":"$51,921","State":"MD"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-103.311115521,29.0103562389]},"properties":{"National Park":"Big Bend","$ Obligated":"$535,983","State":"TX"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-84.6743069824,36.3837375235]},"properties":{"National Park":"Big South Fork National River and Recreation Area","$ Obligated":"$3,009","State":"TN, KY"}}]}';
}
function loadScript(e) {
  var t = document.createElement("script");
  (t.type = "text/javascript"),
    (t.id = "dynScriptTemp"),
    (t.src = e),
    document.getElementsByTagName("head")[0].appendChild(t);
}
function loadScriptAndRun(e) {
  e.startsWith("?") || (e = "?" + e),
    loadScript("http://www.ddginc-usa.com/cgi-bin/url-to-json.php" + e);
}
function loadDataAndRun(e) {
  (document.getElementById("txt1").value = e.html.join("\n")),
    document.getElementById("btnRun").click();
}
function loadURL(e) {
  if ("" == e.trim()) return alert("Missing URL"), !1;
  loadScriptAndRun("?callback=loadDataAndRun&url=" + encodeURIComponent(e));
}
function prettyJSON(e, t) {
  t = t || 3;
  if ("undefined" == typeof JSON) return e;
  try {
    if ("string" == typeof e) return JSON.stringify(JSON.parse(e), null, t);
    if ("object" == typeof e) return JSON.stringify(e, null, t);
  } catch (e) {}
  return e;
}
function getJsonLevel(e) {
  "string" == typeof e && (e = JSON.parse(e));
  var t,
    n,
    r = JSON.stringify(e, null, "\t").split(/\r\n|\n|\r/gm),
    a = 0;
  for (t = 0; t < r.length; t++)
    "\t" == r[t].charAt(0) &&
      (n = r[t].match(/\t+/gm))[0].length > a &&
      (a = n[0].length);
  return a + 1;
}
function saveOutput(e, t, n) {
  var r = new Blob([e], { type: "text/plain;charset=utf-8" });
  saveAs(r, t);
}
function saveFile(e, t) {
  var n = document.getElementById("fn").value.trim();
  "" == n && (n = document.getElementById("fn").value = "convertcsv"),
    saveOutput(e.replace(/\r\n|\r|\n/gm, "\r\n"), n + "." + t, null);
}
function loadCsv() {
  storageSup.has_html5_storage() &&
    (document.getElementById("txt1") &&
      "Y" != sessionStorage.getItem("clearPressed") &&
      (document.getElementById("chkHeader") &&
        ((document.getElementById("chkHeader").checked =
          "Y" == localStorage.getItem("csvChkHeader")),
        setRadioValue(
          document.forms.frm1.sep,
          localStorage.getItem("csvDelimiter")
        )),
      assignText(storageSup.getCsv())),
    sessionStorage.setItem("clearPressed", ""));
}
function saveCsv() {
  storageSup.has_html5_storage() &&
    document.getElementById("txt1") &&
    document.getElementById("txt1").value != getExampleCsv() &&
    document.getElementById("txt1").value.length > 0 &&
    storageSup.putCsv(
      document.getElementById("txt1").value,
      document.getElementById("chkHeader").checked ? "Y" : "N",
      radiovalue(document.forms.frm1.sep)
    );
}
function clearPage() {
  storageSup.has_html5_storage() && sessionStorage.setItem("clearPressed", "Y"),
    window.location.reload(!0);
}
"object" != typeof JSON && (JSON = {}),
  (function () {
    "use strict";
    function f(e) {
      return e < 10 ? "0" + e : e;
    }
    "function" != typeof Date.prototype.toJSON &&
      ((Date.prototype.toJSON = function () {
        return isFinite(this.valueOf())
          ? this.getUTCFullYear() +
              "-" +
              f(this.getUTCMonth() + 1) +
              "-" +
              f(this.getUTCDate()) +
              "T" +
              f(this.getUTCHours()) +
              ":" +
              f(this.getUTCMinutes()) +
              ":" +
              f(this.getUTCSeconds()) +
              "Z"
          : null;
      }),
      (String.prototype.toJSON =
        Number.prototype.toJSON =
        Boolean.prototype.toJSON =
          function () {
            return this.valueOf();
          }));
    var cx =
        /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      escapable =
        /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      gap,
      indent,
      meta = {
        "\b": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\",
      },
      rep;
    function quote(e) {
      return (
        (escapable.lastIndex = 0),
        escapable.test(e)
          ? '"' +
            e.replace(escapable, function (e) {
              var t = meta[e];
              return "string" == typeof t
                ? t
                : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
            }) +
            '"'
          : '"' + e + '"'
      );
    }
    function str(e, t) {
      var n,
        r,
        a,
        o,
        l,
        i = gap,
        s = t[e];
      switch (
        (s &&
          "object" == typeof s &&
          "function" == typeof s.toJSON &&
          (s = s.toJSON(e)),
        "function" == typeof rep && (s = rep.call(t, e, s)),
        typeof s)
      ) {
        case "string":
          return quote(s);
        case "number":
          return isFinite(s) ? String(s) : "null";
        case "boolean":
        case "null":
          return String(s);
        case "object":
          if (!s) return "null";
          if (
            ((gap += indent),
            (l = []),
            "[object Array]" === Object.prototype.toString.apply(s))
          ) {
            for (o = s.length, n = 0; n < o; n += 1) l[n] = str(n, s) || "null";
            return (
              (a =
                0 === l.length
                  ? "[]"
                  : gap
                  ? "[\n" + gap + l.join(",\n" + gap) + "\n" + i + "]"
                  : "[" + l.join(",") + "]"),
              (gap = i),
              a
            );
          }
          if (rep && "object" == typeof rep)
            for (o = rep.length, n = 0; n < o; n += 1)
              "string" == typeof rep[n] &&
                (a = str((r = rep[n]), s)) &&
                l.push(quote(r) + (gap ? ": " : ":") + a);
          else
            for (r in s)
              Object.prototype.hasOwnProperty.call(s, r) &&
                (a = str(r, s)) &&
                l.push(quote(r) + (gap ? ": " : ":") + a);
          return (
            (a =
              0 === l.length
                ? "{}"
                : gap
                ? "{\n" + gap + l.join(",\n" + gap) + "\n" + i + "}"
                : "{" + l.join(",") + "}"),
            (gap = i),
            a
          );
      }
    }
    "function" != typeof JSON.stringify &&
      (JSON.stringify = function (e, t, n) {
        var r;
        if (((gap = ""), (indent = ""), "number" == typeof n))
          for (r = 0; r < n; r += 1) indent += " ";
        else "string" == typeof n && (indent = n);
        if (
          ((rep = t),
          t &&
            "function" != typeof t &&
            ("object" != typeof t || "number" != typeof t.length))
        )
          throw new Error("JSON.stringify");
        return str("", { "": e });
      }),
      "function" != typeof JSON.parse &&
        (JSON.parse = function (text, reviver) {
          var j;
          function walk(e, t) {
            var n,
              r,
              a = e[t];
            if (a && "object" == typeof a)
              for (n in a)
                Object.prototype.hasOwnProperty.call(a, n) &&
                  (void 0 !== (r = walk(a, n)) ? (a[n] = r) : delete a[n]);
            return reviver.call(e, t, a);
          }
          if (
            ((text = String(text)),
            (cx.lastIndex = 0),
            cx.test(text) &&
              (text = text.replace(cx, function (e) {
                return (
                  "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                );
              })),
            /^[\],:{}\s]*$/.test(
              text
                .replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@")
                .replace(
                  /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                  "]"
                )
                .replace(/(?:^|:|,)(?:\s*\[)+/g, "")
            ))
          )
            return (
              (j = eval("(" + text + ")")),
              "function" == typeof reviver ? walk({ "": j }, "") : j
            );
          throw new SyntaxError("JSON.parse");
        });
  })(),
  (JSON.unflatten = function (e) {
    "use strict";
    if (Object(e) !== e || Array.isArray(e)) return e;
    var t,
      n,
      r,
      a,
      o,
      l = {};
    for (var i in e) {
      (t = l), (n = ""), (a = 0);
      do {
        (r = i.indexOf(".", a)),
          (o = i.substring(a, -1 !== r ? r : void 0)),
          (t = t[n] || (t[n] = isNaN(parseInt(o)) ? {} : [])),
          (n = o),
          (a = r + 1);
      } while (r >= 0);
      t[n] = e[i];
    }
    return l[""];
  }),
  (JSON.flatten = function (e) {
    var t = {};
    return (
      (function e(n, r) {
        if (Object(n) !== n) t[r] = n;
        else if (Array.isArray(n)) {
          for (var a = 0, o = n.length; a < o; a++)
            e(n[a], r ? r + "." + a : "" + a);
          0 == o && (t[r] = []);
        } else {
          var l = !0;
          for (var i in n) (l = !1), e(n[i], r ? r + "." + i : i);
          l && (t[r] = {});
        }
      })(e, ""),
      t
    );
  }),
  (JSON.valueArray = function (e) {
    var t = "";
    return (
      (function e(n, r) {
        if (Object(n) !== n) t += n + "|";
        else if (Array.isArray(n)) {
          for (var a = 0, o = n.length; a < o; a++)
            e(n[a], r ? r + "." + a : "" + a);
          0 == o && (t += "|");
        } else {
          var l = !0;
          for (var i in n) (l = !1), e(n[i], r ? r + "." + i : i);
          l && (t += "|");
        }
      })(e, ""),
      t
    );
  }),
  (String.prototype.lpad = function (e, t) {
    if (void 0 === t) t = " ";
    for (var n = this; n.length < e; ) n = t + n;
    return n;
  }),
  (String.prototype.zeroPad = function (e) {
    var t = this,
      n = !1;
    return isNaN(t)
      ? t
      : t.length > e
      ? t.toString()
      : (0 > t && (n = !0),
        n
          ? "0" == (t = t.substring(1).lpad(e, "0")).charAt(0) &&
            (t = "-" + t.substring(1))
          : (t = t.lpad(e, "0")),
        t);
  }),
  (String.prototype.rpad = function (e, t) {
    if (void 0 === t) t = " ";
    for (var n = this; n.length < e; ) n += t;
    return n;
  }),
  "function" != typeof String.prototype.trim &&
    (String.prototype.trim = function () {
      return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
    }),
  (String.prototype.ltrim = function () {
    return this.replace(/^\s+/, "");
  }),
  (String.prototype.rtrim = function () {
    return this.replace(/\s+$/g, "");
  }),
  "function" != typeof String.prototype.repeat &&
    (String.prototype.repeat = function (e) {
      return (e = e || 1), Array(e + 1).join(this);
    }),
  (String.prototype.ljust = function (e, t) {
    return (
      (t = (t = t || " ").substr(0, 1)),
      this.length < e ? this + t.repeat(e - this.length) : this
    );
  }),
  (String.prototype.rjust = function (e, t) {
    return (
      (t = (t = t || " ").substr(0, 1)),
      this.length < e ? t.repeat(e - this.length) + this : this
    );
  }),
  (String.prototype.cjust = function (e, t) {
    if (((t = (t = t || " ").substr(0, 1)), this.length < e - 1)) {
      var n = e - this.length,
        r = n % 2 == 0 ? "" : t,
        a = t.repeat(Math.floor(n / 2));
      return a + this + a + r;
    }
    return this.rpad(e);
  }),
  "function" != typeof String.prototype.left &&
    (String.prototype.left = function (e) {
      return this.substring(0, e);
    }),
  "function" != typeof String.prototype.right &&
    (String.prototype.right = function (e) {
      return this.substring(this.length - e);
    }),
  (String.prototype.removePunctuation = function () {
    return this.replace(/[@+<>"'?\.,-\/#!$%\^&\*;:{}=\-_`~()\[\]\\\|]/g, "");
  }),
  "function" != typeof String.prototype.enclose &&
    (String.prototype.enclose = function (e, t) {
      if ((void 0 === e && (e = ""), void 0 === t && (t = ""), "" != t)) {
        var n = new RegExp(e.regExpEscape(e), "gmi");
        return e + this.replace(n, t + e) + e;
      }
      return e + this + e;
    }),
  (String.prototype.toHtml = function () {
    return this.replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }),
  (String.prototype.toXml = function () {
    return this.replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }),
  (String.prototype.toCsv = function (e, t, n, r) {
    void 0 === e && (e = ","),
      void 0 === t && (t = '"'),
      void 0 === n && (n = t),
      void 0 === r && (r = !1);
    var a =
      this.indexOf(t) >= 0 ||
      this.indexOf(e) >= 0 ||
      this.indexOf("\r") >= 0 ||
      this.indexOf("\n") >= 0;
    return r && (a = !0), a ? this.enclose(t, n) : this;
  }),
  "function" != typeof String.prototype.isNumeric &&
    (String.prototype.isNumeric = function () {
      return !isNaN(parseFloat(this)) && isFinite(this);
    }),
  (String.prototype.toNumber = function () {
    var e = this.replace(/[^\d.\-\+eE]/g, "");
    return e.length > 0 && !isNaN(e) && (e *= 1), e;
  }),
  (String.prototype.toInteger = function () {
    return parseInt(this.toNumber().toString(), 10);
  }),
  (String.prototype.toFixed = function (e) {
    var t = this.toNumber().toString();
    return t.length > 0 && !isNaN(t) && (t = (1 * t).toFixed(e)), String(t);
  }),
  (String.prototype.toDollar = function (e, t) {
    var n = this.toNumber().toString();
    if (
      (void 0 === e && (e = 2),
      void 0 === t && (t = "$"),
      n.length > 0 && !isNaN(n))
    ) {
      var r, a, o;
      (a = (r = (1 * n).toFixed(e).split("."))[0]),
        (o = r.length > 1 ? "." + r[1] : "");
      for (var l = /(\d+)(\d{3})/; l.test(a); ) a = a.replace(l, "$1,$2");
      n = t + a + o;
    }
    return String(n);
  }),
  (String.prototype.toJson = function () {
    return this.replace(/\\/g, "\\\\")
      .replace(/\t/g, "\\t")
      .replace(/\"/g, '\\"')
      .replace(/\n/g, "\\n")
      .replace(/\r/g, "\\r");
  }),
  (String.prototype.toSql = function () {
    return this.replace(/'/g, "''");
  }),
  (String.prototype.toYaml = function () {
    return /[\r\n\f\v\t]/g.test(this)
      ? '"' +
          this.replace(/\t/g, "\\t")
            .replace(/\"/g, '\\"')
            .replace(/\n/g, "\\n")
            .replace(/\r/g, "\\r")
            .replace(/\f/g, "\\f")
            .replace(/\v/g, "\\v")
            .replace(/"/g, '\\"') +
          '"'
      : this.indexOf("'") >= 0
      ? "'" + this.replace(/'/g, "''") + "'"
      : this;
  }),
  (String.prototype.regExpEscape = function (e) {
    return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  }),
  (RegExp.prototype.escape = function (e) {
    return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  });
