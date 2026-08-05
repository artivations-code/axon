/**
 * IndiATA form logger — Google Apps Script Web App
 *
 * Receives every form on the IndiATA site and writes it to the right tab of
 * this spreadsheet. Adding a new form later means adding one entry to ROUTES.
 *
 * Columns are matched by HEADER NAME, not position. If a tab already exists
 * with an older set of columns, the script appends the new columns to the
 * header row and keeps writing — existing rows and data are left alone.
 */

var ROUTES = [
  {
    match: 'representative',
    tab: 'Rep applications',
    cols: [
      ['Time',            '__time'],
      ['Name',            'NAME'],
      ['Preferred name',  'PREFERRED_NAME'],
      ['Pronouns',        'PRONOUNS'],
      ['Email',           'EMAIL'],
      ['Phone',           'PHONE'],
      ['Program',         'PROGRAM'],
      ['Grad year',       'GRADYEAR'],
      ['AATA status',     'AATA_STATUS'],
      ['IndiATA status',  'INDIATA_STATUS'],
      ['Why',             'WHY'],
      ['What they need',  'NEEDS'],
      ['Can contribute',  'CONTRIBUTE'],
      ['Contribute other','CONTRIBUTE_OTHER'],
      ['Time available',  'TIME'],
      ['Meeting windows', 'WINDOWS'],
      ['Window notes',    'WINDOWS_NOTES'],
      ['Access needs',    'ACCESS'],
      ['Anything else',   'ANYTHING_ELSE'],
      ['Consent',         'CONSENT']
    ]
  },
  {
    match: 'pulse',
    tab: 'Pulse',
    cols: [
      ['Time',            '__time'],
      ['Poll',            'POLL'],
      ['Answer',          'ANSWER'],
      ['Name',            'NAME'],
      ['Reply requested', 'ROUTE'],
      ['OK to summarize', 'SUMMARY_OK'],
      ['Email',           'EMAIL']
    ]
  },
  {
    match: 'newsletter',
    tab: 'Newsletter',
    cols: [
      ['Time',            '__time'],
      ['First name',      'FNAME'],
      ['Last name',       'LNAME'],
      ['Email',           'EMAIL'],
      ['Program',         'PROGRAM'],
      ['Membership',      'MEMBERSHIP'],
      ['Interests',       'INTERESTS'],
      ['Consent',         'CONSENT']
    ]
  },
  {
    match: 'submission',
    tab: 'Submissions',
    cols: [
      ['Time',            '__time'],
      ['Type',            'TYPE'],
      ['Message',         'MESSAGE'],
      ['Name',            'NAME'],
      ['Email',           'EMAIL']
    ]
  },
  {
    match: 'advocacy',
    tab: 'Advocacy',
    cols: [
      ['Time',            '__time'],
      ['Name',            'NAME'],
      ['Email',           'EMAIL'],
      ['Interest',        'TYPE'],
      ['Notes',           'MESSAGE']
    ]
  }
];

/* ------------------------------------------------------------------ */

function doPost(e) {
  try {
    // Honeypot: bots fill the hidden field, people never see it.
    if (readParam(e, '_honey')) return ok('skipped');

    var subject = String(readParam(e, '_subject')).toLowerCase();
    var route = null;
    for (var i = 0; i < ROUTES.length; i++) {
      if (subject.indexOf(ROUTES[i].match) > -1) { route = ROUTES[i]; break; }
    }

    // Anything unrecognised still gets kept, with whatever fields it sent.
    if (!route) route = { tab: 'Other', cols: dynamicCols(e) };

    writeRow(getSheet(route.tab), route.cols, e);
    return ok('logged');

  } catch (err) {
    logError(err, e);
    return ok('error');
  }
}

function doGet() {
  return ContentService
    .createTextOutput('IndiATA form logger is deployed and running.')
    .setMimeType(ContentService.MimeType.TEXT);
}

/* ------------------------------------------------------------------ */

function getSheet(name) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  return ss.getSheetByName(name) || ss.insertSheet(name);
}

/**
 * Writes one row, matching values to columns by header name.
 * Any header the sheet does not have yet is appended to the header row.
 */
function writeRow(sheet, cols, e) {
  var headers = [];
  if (sheet.getLastRow() > 0 && sheet.getLastColumn() > 0) {
    headers = sheet.getRange(1, 1, 1, sheet.getLastColumn())
                   .getValues()[0]
                   .map(function (h) { return String(h).trim(); });
  }

  var values = {};
  var wanted = [];
  for (var i = 0; i < cols.length; i++) {
    var label = cols[i][0], key = cols[i][1];
    values[label] = (key === '__time') ? new Date() : readParam(e, key);
    wanted.push(label);
  }

  var added = false;
  for (var j = 0; j < wanted.length; j++) {
    if (headers.indexOf(wanted[j]) === -1) { headers.push(wanted[j]); added = true; }
  }
  if (added || sheet.getLastRow() === 0) {
    sheet.getRange(1, 1, 1, headers.length)
         .setValues([headers])
         .setFontWeight('bold');
    sheet.setFrozenRows(1);
  }

  var row = [];
  for (var k = 0; k < headers.length; k++) {
    row.push(values.hasOwnProperty(headers[k]) ? values[headers[k]] : '');
  }
  sheet.appendRow(row);
}

/** Builds columns from whatever an unrecognised form actually sent. */
function dynamicCols(e) {
  var cols = [['Time', '__time'], ['Subject', '_subject']];
  var params = (e && e.parameters) ? e.parameters : {};
  for (var key in params) {
    if (key.charAt(0) === '_') continue;
    cols.push([key, key]);
  }
  return cols;
}

/** Checkbox groups send the same name more than once — join those with commas. */
function readParam(e, key) {
  if (!e || !e.parameters || !e.parameters[key]) return '';
  return e.parameters[key]
    .filter(function (v) { return String(v).length > 0; })
    .join(', ');
}

function logError(err, e) {
  try {
    var sheet = getSheet('Errors');
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, 3)
           .setValues([['Time', 'Error', 'Payload']])
           .setFontWeight('bold');
      sheet.setFrozenRows(1);
    }
    var payload = '';
    try { payload = JSON.stringify((e && e.parameters) || {}).slice(0, 4000); } catch (_) {}
    sheet.appendRow([new Date(), String(err), payload]);
  } catch (_) {}
}

function ok(status) {
  return ContentService
    .createTextOutput(JSON.stringify({ result: status }))
    .setMimeType(ContentService.MimeType.JSON);
}
