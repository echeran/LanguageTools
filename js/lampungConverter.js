// Convert from old font-encoding Anangu/Yolngu text to Unicode forms:

var private_use_map = {
    '\u0030': ['\ue8b0'],
    '\u0031': ['\ue8b1'],
    '\u0032': ['\ue8b2'],
    '\u0033': ['\ue8b3'],
    '\u0034': ['\ue8b4'],
    '\u0035': ['\ue8b5'],
    '\u0036': ['\ue8b6'],
    '\u0037': ['\ue8b7'],
    '\u0038': ['\ue8b8'],
    '\u0039': ['\ue8b9'],

    '\u0041': ['\ue8ad'],
    '\u0042': ['\ue894'],
    '\u0043': ['\ue899'],
    '\u0044': ['\ua804'],
    '\u0045': ['\ue8a8'],
    '\u0046': ['\ue893'],
    '\u0047': ['\ue892'],
    '\u0048': ['\ue8a3'],
    '\u0049': ['\ua80a'],
    '\u004a': ['\ue89a'],
    '\u004b': ['\ue890'],
    '\u004c': ['\ue89e'],
    '\u004d': ['\ue8af'],
    '\u004e': ['\ue89b'],
    '\u004f': [''],

    '\u0050': ['\ue893'],
    '\u0051': ['\ue890'],
    '\u0052': ['\ue8ab'],
    '\u0053': ['\ue8a0'],
    '\u0054': ['\ue896'],
    '\u0055': ['\ua816'],
    '\u0056': ['\ua817'],
    '\u0057': ['\ue8aa'],
    '\u0058': ['\ua819'],
    '\u0059': ['\ua81a'],
    '\u005a': ['\ua81b'],

    '\u0060': ['\ua826'],
    '\u0061': ['\ua81c'],
    '\u0062': ['\ua81d'],
    '\u0063': ['\ua81e'],
    '\u0064': ['\ua81f'],
    '\u0065': ['\ua820'],
    '\u0066': ['\ua821'],
    '\u0067': ['\ua822'],
    '\u0068': ['\ua823'],
    '\u0069': ['\ua824'],
    '\u006a': ['\ua825'],
    '\u006b': ['\ua825'],
    '\u006c': ['\ua825'],
    '\u006d': ['\ua826'],
    '\u006e': ['\ua826'],
    '\u006f': ['\ua826'],

    '\u0070': ['\ua802'],
    '\u0071': ['\ua80b'],
    '\u0072': ['\ua81e'],
    '\u0073': ['\ua821'],
    '\u0074': ['\ua814'],
    '\u0075': ['\ua80d'],
    '\u0076': ['*'],
    '\u0077': ['\ua828'],
    '\u0078': ['\ua829'],
    '\u0079': ['\ue89c'],
    '\u007a': ['\ue89a'],
    '\u007e': ['\u09f8'],

};

function convertEncodingToUnicode(inbox, outbox, encodingIndex) {
  var inarea = document.getElementById(inbox);
  var outarea = document.getElementById(outbox);

  // First, replace all single characters with their Unicode equivalents.
  var intext = inarea.value;
  var outtext = "";
  var out;
  for (var index = 0; index < intext.length; index ++) {
    var c = intext[index];
    out = c;
    if (c in private_use_map) {
      var result = private_use_map[c];
      if (result) {
	out = result;
      }
    }
    outtext += out;
  }
  // Any more complicated stuff?
  var newText = outtext;

  if (outarea) {
    outarea.innerHTML = outarea.value = newText;
  }
  return newText;
}
