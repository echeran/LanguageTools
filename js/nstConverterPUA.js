// Convert from Latin form of Tangsa to Lakhum Private Use Area (PUA) forms:
const langConverter = new langConverterClass('nst', 'Tangsa');

// Mappings for Tangsa Lakhum
langConverter.map_encoding_names = map_encoding_names = [
  'Gam Win PUA',
  'Gam Win Unicode',
];

langConverter.one2oneMap =  private_use_map_combined = {
    'mnvungz': ['', '𖪜𖪬𖩸𖪄𖪐'],
    'mznvungz': ['', '𖪜𖪬𖩸𖪄𖪐'],
    'mnaungz': ['', '𖪜𖪬𖩴𖪄𖪐'],
    'mznaungz': ['', '𖪜𖪬𖩴𖪄𖪐'],
    'mrvkueq': ['', '𖪜𖪲𖩸𖪠𖪖'],
    'vungz': ['', '𖩸𖪄𖪐'],
    'vungc': ['', '𖩹𖪅𖪐'],
    'vungx': ['', '𖩻𖪇𖪐'],
    'vuk': ['', '𖩸𖪄𖪠'],
    'aungz': ['', '𖩴𖪄𖪐'],
    'aungc': ['', '𖩵𖪅𖪐'],
    'aungx': ['', '𖩷𖪇𖪐'],
    'auk': ['', '𖩴𖪄𖪠'],
    'auz': ['', '𖩴𖪄'],
    'auc': ['', '𖩵𖪅'],
    'aux': ['', '𖩷𖪇'],
    'vuq': ['', '𖩸𖪆'],
    'auq': ['', '𖩴𖪆'],
    'ovrz': ['', '𖩰𖩸𖪲'],
    'ovrc': ['', '𖩱𖩹𖪲'],
    'ovrx': ['', '𖩳𖩻𖪲'],
    'uiyq': ['', '𖪌𖪂'],
    'vyq': ['', '𖩸𖪂'],
    'oq': ['', '𖩲'],
    'aq': ['', '𖩶'],
    'vq': ['', '𖩺'],
    'eq': ['', '𖩾'],
    'iq': ['', '𖪂'],
    'uq': ['', '𖪆'],
    'awq': ['', '𖪊'],
    'uiq': ['', '𖪎'],
    'ueq': ['', '𖪖'],
    'uiuq': ['', '𖪘'],
    'uiuq': ['', '𖪌𖪆'],
    'uiuq': ['', '𖪎𖪆'],
    'ovyz': ['', '𖩰𖩸𖪀'],
    'ovyc': ['', '𖩱𖩹𖪁'],
    'ovyx': ['', '𖩳𖩻𖪃'],
    'oayz': ['', '𖩰𖪀'],
    'oayc': ['', '𖩱𖪁'],
    'oayx': ['', '𖩳𖪃'],
    'ayz': ['', '𖩴𖪀'],
    'ayc': ['', '𖩵𖪁'],
    'ayx': ['', '𖩷𖪃'],
    'vyz': ['', '𖩸𖪀'],
    'vyc': ['', '𖩹𖪁'],
    'vyx': ['', '𖩻𖪃'],
    'uyz': ['', '𖪄𖪀'],
    'uyc': ['', '𖪅𖪁'],
    'uyx': ['', '𖪇𖪃'],
    'uiyz': ['', '𖪌𖪀'],
    'uiyc': ['', '𖪍𖪁'],
    'uiyx': ['', '𖪏𖪇'],
    'ueyz': ['', '𖪕𖪀'],
    'ueyc': ['', '𖪔𖪁'],
    'ueyx': ['', '𖪗𖪃'],
    'ongz': ['', '𖩰𖪐'],
    'ongc': ['', '𖩱𖪐'],
    'ongx': ['', '𖩳𖪐'],
    'angz': ['', '𖩴𖪐'],
    'angc': ['', '𖩵𖪐'],
    'angx': ['', '𖩷𖪐'],
    'vngz': ['', '𖩸𖪐'],
    'vngc': ['', '𖩹𖪐'],
    'vngx': ['', '𖩻𖪐'],
    'engz': ['', '𖩼𖪐'],
    'engc': ['', '𖩽𖪐'],
    'engx': ['', '𖩿𖪐'],
    'ingz': ['', '𖪀𖪐'],
    'ingc': ['', '𖪁𖪐'],
    'ingx': ['', '𖪃𖪐'],
    'ungz': ['', '𖪄𖪐'],
    'ungc': ['', '𖪅𖪐'],
    'ungx': ['', '𖪇𖪐'],
    'awngz': ['', '𖩼𖪐'],
    'awngc': ['', '𖪉𖪐'],
    'awngx': ['', '𖪋𖪐'],
    'uingz': ['', '𖪌𖪐'],
    'uingc': ['', '𖪍𖪐'],
    'uingx': ['', '𖪏𖪐'],
    'uengz': ['', '𖪕𖪐'],
    'uengc': ['', '𖪔𖪐'],
    'uengx': ['', '𖪗𖪐'],
    'uiungz': ['', '𖪘𖪐'],
    'uiungc': ['', '𖪙𖪐'],
    'uiungx': ['', '𖪛𖪐'],
    'ovmz': ['', '𖩰𖩸𖪫'],
    'ovmc': ['', '𖩱𖩹𖪫'],
    'ovmx': ['', '𖩳𖩻𖪫'],
    'omz': ['', '𖩰𖪫'],
    'omc': ['', '𖩱𖪫'],
    'omx': ['', '𖩳𖪫'],
    'oamz': ['', '𖩰𖪫'],
    'oamc': ['', '𖩱𖪫'],
    'oamx': ['', '𖩳𖪫'],
    'amz': ['', '𖩴𖪫'],
    'amc': ['', '𖩵𖪫'],
    'amx': ['', '𖩷𖪫'],
    'vmz': ['', '𖩸𖪫'],
    'vmc': ['', '𖩹𖪫'],
    'vmx': ['', '𖩻𖪫'],
    'emz': ['', '𖩼𖪫'],
    'emc': ['', '𖩽𖪫'],
    'emx': ['', '𖩿𖪫'],
    'imz': ['', '𖪀𖪫'],
    'imc': ['', '𖪁𖪫'],
    'imx': ['', '𖪃𖪫'],
    'umz': ['', '𖪄𖪫'],
    'umc': ['', '𖪅𖪫'],
    'umx': ['', '𖪇𖪫'],
    'awmz': ['', '𖩼𖪫'],
    'awmc': ['', '𖪉𖪫'],
    'awmx': ['', '𖪋𖪫'],
    'uimz': ['', '𖪌𖪫'],
    'uimc': ['', '𖪍𖪫'],
    'uimx': ['', '𖪏𖪫'],
    'uemz': ['', '𖪕𖪫'],
    'uemc': ['', '𖪔𖪫'],
    'uemx': ['', '𖪗𖪫'],
    'uiumz': ['', '𖪘𖪫'],
    'uiumc': ['', '𖪙𖪫'],
    'uiumx': ['', '𖪛𖪫'],
    'ovnz': ['', '𖩰𖩸𖪬'],
    'ovnc': ['', '𖩱𖩹𖪬'],
    'ovnx': ['', '𖩳𖩻𖪬'],
    'oanz': ['', '𖩰𖪬'],
    'oanc': ['', '𖩱𖪬'],
    'oanx': ['', '𖩳𖪬'],
    'anz': ['', '𖩴𖪬'],
    'anc': ['', '𖩵𖪬'],
    'anx': ['', '𖩷𖪬'],
    'vnz': ['', '𖩸𖪬'],
    'vnc': ['', '𖩹𖪬'],
    'vnx': ['', '𖩻𖪬'],
    'enz': ['', '𖩼𖪬'],
    'enc': ['', '𖩽𖪬'],
    'enx': ['', '𖩿𖪬'],
    'inz': ['', '𖪀𖪬'],
    'inc': ['', '𖪁𖪬'],
    'inx': ['', '𖪃𖪬'],
    'unz': ['', '𖪄𖪬'],
    'unc': ['', '𖪅𖪬'],
    'unx': ['', '𖪇𖪬'],
    'awnz': ['', '𖩼𖪬'],
    'awnc': ['', '𖪉𖪬'],
    'awnx': ['', '𖪋𖪬'],
    'uinz': ['', '𖪌𖪬'],
    'uinc': ['', '𖪍𖪬'],
    'uinx': ['', '𖪏𖪬'],
    'uenz': ['', '𖪕𖪬'],
    'uenc': ['', '𖪔𖪬'],
    'uenx': ['', '𖪗𖪬'],
    'uiunz': ['', '𖪘𖪬'],
    'uiunc': ['', '𖪙𖪬'],
    'uiunx': ['', '𖪛𖪬'],
    'ovlz': ['', '𖩰𖩸𖪮'],
    'ovlc': ['', '𖩱𖩹𖪮'],
    'ovlx': ['', '𖩳𖩻𖪮'],
    'oalz': ['', '𖩰𖪮'],
    'oalc': ['', '𖩱𖪮'],
    'oalx': ['', '𖩳𖪮'],
    'alz': ['', '𖩴𖪮'],
    'alc': ['', '𖩵𖪮'],
    'alx': ['', '𖩷𖪮'],
    'vlz': ['', '𖩸𖪮'],
    'vlc': ['', '𖩹𖪮'],
    'vlx': ['', '𖩻𖪮'],
    'elz': ['', '𖩼𖪮'],
    'elc': ['', '𖩽𖪮'],
    'elx': ['', '𖩿𖪮'],
    'ilz': ['', '𖪀𖪮'],
    'ilc': ['', '𖪁𖪮'],
    'ilx': ['', '𖪃𖪮'],
    'ulz': ['', '𖪄𖪮'],
    'ulc': ['', '𖪅𖪮'],
    'ulx': ['', '𖪇𖪮'],
    'awlz': ['', '𖩼𖪮'],
    'awlc': ['', '𖪉𖪮'],
    'awlx': ['', '𖪋𖪮'],
    'uilz': ['', '𖪌𖪮'],
    'uilc': ['', '𖪍𖪮'],
    'uilx': ['', '𖪏𖪮'],
    'uelz': ['', '𖪕𖪮'],
    'uelc': ['', '𖪔𖪮'],
    'uelx': ['', '𖪗𖪮'],
    'uiulz': ['', '𖪘𖪮'],
    'uiulc': ['', '𖪙𖪮'],
    'uiulx': ['', '𖪛𖪮'],
    'ovrz': ['', '𖩰𖪲'],
    'ovrc': ['', '𖩱𖪲'],
    'ovrx': ['', '𖩳𖪲'],
    'oarz': ['', '𖩰𖪲'],
    'oarc': ['', '𖩱𖪲'],
    'oarx': ['', '𖩳𖪲'],
    'arz': ['', '𖩴𖪲'],
    'arc': ['', '𖩵𖪲'],
    'arx': ['', '𖩷𖪲'],
    'vrz': ['', '𖩸𖪲'],
    'vrc': ['', '𖩹𖪲'],
    'vrx': ['', '𖩻𖪲'],
    'erz': ['', '𖩼𖪲'],
    'erc': ['', '𖩽𖪲'],
    'erx': ['', '𖩿𖪲'],
    'irz': ['', '𖪀𖪲'],
    'irc': ['', '𖪁𖪲'],
    'irx': ['', '𖪃𖪲'],
    'urz': ['', '𖪄𖪲'],
    'urc': ['', '𖪅𖪲'],
    'urx': ['', '𖪇𖪲'],
    'awrz': ['', '𖩼𖪲'],
    'awrc': ['', '𖪉𖪲'],
    'awrx': ['', '𖪋𖪲'],
    'uirz': ['', '𖪌𖪲'],
    'uirc': ['', '𖪍𖪲'],
    'uirx': ['', '𖪏𖪲'],
    'uerz': ['', '𖪕𖪲'],
    'uerc': ['', '𖪔𖪲'],
    'uerx': ['', '𖪗𖪲'],
    'uiurz': ['', '𖪘𖪲'],
    'uiurc': ['', '𖪙𖪲'],
    'uiurx': ['', '𖪛𖪲'],
    'ok': ['', '𖩰𖪠'],
    'ak': ['', '𖩴𖪠'],
    'vk': ['', '𖩸𖪠'],
    'ek': ['', '𖩼𖪠'],
    'ik': ['', '𖪀𖪠'],
    'uk': ['', '𖪄𖪠'],
    'awk': ['', '𖪈𖪠'],
    'uik': ['', '𖪌𖪠'],
    'uek': ['', '𖪒𖪠'],
    'uiuk': ['', '𖪘𖪠'],
    'ovp': ['', '𖩰𖩸𖪧'],
    'oap ~ op': ['', '𖩰𖪧'],
    'op': ['', '𖩰𖪧'],
    'ap': ['', '𖩴𖪧'],
    'vp': ['', '𖩸𖪧'],
    'ep': ['', '𖩼𖪧'],
    'ip': ['', '𖪀𖪧'],
    'up': ['', '𖪄𖪧'],
    'awp': ['', '𖪈𖪧'],
    'uip': ['', '𖪌𖪧'],
    'uep': ['', '𖪒𖪧'],
    'uiup': ['', '𖪘𖪧'],
    'ovt': ['', '𖩰𖩸𖪰'],
    'oat': ['', '𖩰𖪰'],
    'at': ['', '𖩴𖪰'],
    'vt': ['', '𖩸𖪰'],
    'et': ['', '𖩼𖪰'],
    'it': ['', '𖪀𖪰'],
    'ut': ['', '𖪄𖪰'],
    'awt': ['', '𖪈𖪰'],
    'uit': ['', '𖪌𖪰'],
    'uet': ['', '𖪒𖪰'],
    'uiut': ['', '𖪘𖪰'],
    'oz': ['', '𖩰'],
    'oc': ['', '𖩱'],
    'ox': ['', '𖩳'],
    'az': ['', '𖩴'],
    'ac': ['', '𖩵'],
    'ax': ['', '𖩷'],
    'vz': ['', '𖩸'],
    'vc': ['', '𖩹'],
    'vx': ['', '𖩻'],
    'ez': ['', '𖩼'],
    'ec': ['', '𖩽'],
    'ex': ['', '𖩿'],
    'iz': ['', '𖪀'],
    'ic': ['', '𖪁'],
    'ix': ['', '𖪃'],
    'uz': ['', '𖪄'],
    'uc': ['', '𖪅'],
    'ux': ['', '𖪇'],
    'awz': ['', '𖩼'],
    'awc': ['', '𖪉'],
    'awx': ['', '𖪋'],
    'uiz': ['', '𖪌'],
    'uic': ['', '𖪍'],
    'uix': ['', '𖪏'],
    'uez': ['', '𖪕'],
    'uec': ['', '𖪔'],
    'uex': ['', '𖪗'],
    'uiuz': ['', '𖪘'],
    'uiuc': ['', '𖪙'],
    'uiux': ['', '𖪛'],
    'htt': ['', '𖪸'],
    'th': ['', '𖪹'],
    'ht': ['', '𖪯'],
    'ch': ['', '𖪼'],
    'kh': ['', '𖪡'],
    'ng': ['', '𖪣'],
    'ny': ['', '𖪨'],
    'ph': ['', '𖪩'],
    'nh': ['', '𖪳'],
    'sh': ['', '𖪴'],
    'ts': ['', '𖪶'],
    'gh': ['', '𖪷'],
    'f': ['', '𖪺'],
    'k': ['', '𖪠'],
    'g': ['', '𖪢'],
    's': ['', '𖪤'],
    'y': ['', '𖪥'],
    'w': ['', '𖪦'],
    'p': ['', '𖪧'],
    'b': ['', '𖪪'],
    'm': ['', '𖪫'],
    'n': ['', '𖪬'],
    'h': ['', '𖪭'],
    'l': ['', '𖪮'],
    't': ['', '𖪰'],
    'd': ['', '𖪱'],
    'r': ['', '𖪲'],
    'j': ['', '𖪵'],
    'v': ['', '𖩸'],
    ' ': [' '],
  };

var gamwin_latin_chars =
    "|Gam Win|mnvungz|mznvungz|mnaungz|mznaungz|mrvkueq|vungz|vungc|vungx|vuk|aungz|aungc|aungx|auk|auz|auc|aux|"+
    "vuq|auq|ovrz|ovrc|ovrx|uiyq|vyq|oq|aq|vq|eq|iq|uq|awq|uiq|ueq|uiuq|uiuq|uiuq|ovyz|ovyc|ovyx|oayz|oayc|oayx|" +
    "ayz|ayc|ayx|vyz|vyc|vyx|uyz|uyc|uyx|uiyz|uiyc|uiyx|ueyz|ueyc|ueyx|ongz|ongc|ongx|angz|angc|angx|vngz|vngc|" +
    "vngx|engz|engc|engx|ingz|ingc|ingx|ungz|ungc|ungx|awngz|awngc|awngx|uingz|uingc|uingx|uengz|uengc|uengx|uiungz" +
    ""|uiungc|uiungx|ovmz|ovmc|ovmx|omz|omc|omx|oamz|oamc|oamx|amz|amc|amx|vmz|vmc|vmx|emz|emc|emx|imz|imc|imx|umz|" +
    "umc|umx|awmz|awmc|awmx|uimz|uimc|uimx|uemz|uemc|uemx|uiumz|uiumc|uiumx|ovnz|ovnc|ovnx|oanz|oanc|oanx|anz|anc|" +
    "anx|vnz|vnc|vnx|enz|enc|enx|inz|inc|inx|unz|unc|unx|awnz|awnc|awnx|uinz|uinc|uinx|uenz|uenc|uenx|uiunz|uiunc|" +
    "uiunx|ovlz|ovlc|ovlx|oalz|oalc|oalx|alz|alc|alx|vlz|vlc|vlx|elz|elc|elx|ilz|ilc|ilx|ulz|ulc|ulx|awlz|awlc|awlx|" +
    "uilz|uilc|uilx|uelz|uelc|uelx|uiulz|uiulc|uiulx|ovrz|ovrc|ovrx|oarz|oarc|oarx|arz|arc|arx|vrz|vrc|vrx|erz|erc|" +
    "erx|irz|irc|irx|urz|urc|urx|awrz|awrc|awrx|uirz|uirc|uirx|uerz|uerc|uerx|uiurz|uiurc|uiurx|ok|ak|vk|ek|ik|uk|" +
    "awk|uik|uek|uiuk|ovp|oap ~ op|op|ap|vp|ep|ip|up|awp|uip|uep|uiup|ovt|oat|at|vt|et|it|ut|awt|uit|uet|uiut|oz|" +
    "oc|ox|az|ac|ax|vz|vc|vx|ez|ec|ex|iz|ic|ix|uz|uc|ux|awz|awc|awx|uiz|uic|uix|uez|uec|uex|uiuz|uiuc|uiux|htt|th|" +
    "ht|ch|kh|ng|ny|ph|nh|sh|ts|gh|f|k|g|s|y|w|p|b|m|n|h|l|t|d|r|j|v| |,|.|\u0020|,|\.|\u000a"

function preParseLatin(instring) {
  //  var regex1 = new RegExp(tangsa_latin_chars, "gi");
  var regex1 = new RegExp(gamwin_latin_chars, "gi");
  var outList = instring.match(regex1);
  return outList;
}

function convertEncodingToUnicode(inbox, outbox, encodingIndex) {
  var inarea = document.getElementById(inbox);
  var outarea = document.getElementById(outbox);

  // First, replace all single characters with their Unicode equivalents.
  var intext = inarea.value;
  var outtext = "";
  var out;
  var parsedText = preParseLatin(intext.toLowerCase());
  for (var index = 0; index < parsedText.length; index ++) {
    var c = parsedText[index];
    out = c;
    if (c in private_use_map_combined) {
      var result = private_use_map_combined[c][encodingIndex];
      if (result) {
        out = result;
      }
    }
    outtext += out;
  }

  var newText = outtext;
  // Insert more complex replacements here.

  //  ePattern = /([\u1031\u103c]\ufe00?)([\u1000-\u1029\u1075-\u1081\uaa60-\uaa76]\uf300?)/gi;
  //  eReplace = "$2$1";
  //  newText = outtext.replace(ePattern, eReplace);


  // Consider doubled combiners, e.g., 103a twice.
  if (outarea) {
    outarea.innerHTML = outarea.value = newText;
  }
  return newText;
}
