//javascript/keyboard/api/layouts/cpp.js
// Copyright 2017 Google Inc.
// All Rights Reserved.

// Prototype for Mende Kikakui, 6-Nov-2018
var MEN_PHONE_LAYOUT = {
  'id': 'menPhone',
  'dir': 'rtl',
  'title': 'Mende Kikakui Phonetic',
  'mappings': {
    ',c': {
      '':  '!{{\uD83A\uDCC7}}{{\uD83A\uDCC8}}{{\uD83A\uDCC9}}{{\uD83A\uDCCa}}' +
	  '{{\uD83A\uDCCb}}{{\uD83A\uDCcc}}{{\uD83A\uDCCd}}{{\uD83A\uDCCe}}' +
	   '{{\uD83A\uDCCf}}0-=' +
          '{{}}wertyuiop[]\\' +
          'asdfghjkl;\'' +
          '{{}}{{}}cvbnm,./'
    },
    's,sc': {
      '': '~!@#$%^&*()_+' +
          'QWERTYUIOP{}|' +
          'ASDFGHJKL:"' +
          'ZXCVBNM<>?'
    },
    'l': { // ZWNB Space before signals to not transform
      '': '`1234567890-=' +
          '{{\ufeffq}}{{\ufeffw}}{{\ufeffe}}{{\ufeffr}}{{\ufefft}}{{\ufeffy}}{{\ufeffu}}{{\ufeffi}}{{\ufeffo}}{{\ufeffp}}[]\\' +
          '{{\ufeffa}}{{\ufeffs}}{{\ufeffd}}{{\ufefff}}{{\ufeffg}}{{\ufeffh}}{{\ufeffj}}{{\ufeffk}}{{\ufeffl}};\'' +
          '{{\ufeffz}}{{\ufeffx}}{{\ufeffc}}{{\ufeffv}}{{\ufeffb}}{{\ufeffn}}{{\ufeffm}},./'
    },
    'sl': {
      '': '~!@#$%^&*()_+' +
          '{{\ufeffQ}}{{\ufeffW}}{{\ufeffE}}{{\ufeffR}}{{\ufeffT}}{{\ufeffY}}{{\ufeffU}}{{\ufeffI}}{{\ufeffO}}{{\ufeffP}}{}|' +
          '{{\ufeffA}}{{\ufeffS}}{{\ufeffD}}{{\ufeffF}}{{\ufeffG}}{{\ufeffH}}{{\ufeffJ}}{{\ufeffK}}{{\ufeffL}}:"' +
          '{{\ufeffZ}}{{\ufeffX}}{{\ufeffC}}{{\ufeffV}}{{\ufeffB}}{{\ufeffN}}{{\ufeffM}}<>?'
    },
  },
  'transform' : {
    // Based on transliteration of Cherokee to English.
    'i' : '\ud83a\udc22',
    'a' : '\ud83a\udc23',
    'u' : '\ud83a\udc24',
    'e' : '\ud83a\udc26',
    'E' : '\ud83a\udc25',  // E -> ee
    '\ud83a\udc26\u001De' : '\ud83a\udc25',  // ee
    'o' : '\ud83a\udc28',
    'O' : '\ud83a\udc27',  // oo
    '\ud83a\udc28\u001Do' : '\ud83a\udc27',  // oo
    '\ud83a\udc26\u001Di' : '\ud83a\udc29',  // ei
    '\ud83a\udc22\u001Dn' : '\ud83a\udc2a',  // in
    '\ud83a\udc2a\u001Dn' : '\ud83a\udc2b',  // inn
    '\ud83a\udc23\u001Dn' : '\ud83a\udc2c',  // an
    '\ud83a\udc26\u001Dn' : '\ud83a\udc2d',  // en

    // Many more for the consonants and syllables.
    'k':  '\ud83a\udc00',
    '\ud83a\udc00\u001Di':  '\ud83a\udc00',  // ki
    '\ud83a\udc00\u001Da':  '\ud83a\udc01',  // ka
    '\ud83a\udc00\u001Du':  '\ud83a\udc02',  // ku
    '\ud83a\udc00\u001De':  '\ud83a\udc04',  // ke
    '\ud83a\udc00\u001Do':  '\ud83a\udc06',  // ko
    '\ud83a\udc04\u001De':  '\ud83a\udc03',  // ke + e -> kee
    '\ud83a\udc00\u001DE':  '\ud83a\udc03',  // kE -> kee
    '\ud83a\udc00\u001DO':  '\ud83a\udc05',  // kO -> koo
    '\ud83a\udc06\u001Do':  '\ud83a\udc05',  // ko + o -> koo
    '\ud83a\udc02\u001Da':  '\ud83a\udc07',  // kua

    'w':  '\ud83a\udc08',  // w
    'wi':  '\ud83a\udc08',  // w
    'wa':  '\ud83a\udc09',  // wa
    'wu':  '\ud83a\udc0a',
    'wE':  '\ud83a\udc0b',
    'we':  '\ud83a\udc0c',
    'wee':  '\ud83a\udc0b',
    'wO':  '\ud83a\udc0d',
    'woo':  '\ud83a\udc0d',
    'wo':  '\ud83a\udc0e',
    'wui':  '\ud83a\udc0f',
    'wei':  '\ud83a\udc10',

    'wv':  '\ud83a\udc11',  // wv
    'wvi':  '\ud83a\udc11',  // wv
    'wva':  '\ud83a\udc12',  // wva
    'wve':  '\ud83a\udc13',  // wve

    'm':  '\ud83a\udc14',
    'mi':  '\ud83a\udc14',
    'ma':  '\ud83a\udc15',
    'mu':  '\ud83a\udc16',
    'me':  '\ud83a\udc17',
    'mo':  '\ud83a\udc18',
    'mua':  '\ud83a\udc19',
    'mue':  '\ud83a\udc1a',

    'b':  '\ud83a\udc1b',
    'bi':  '\ud83a\udc1b',
    'ba':  '\ud83a\udc1c',
    'bu':  '\ud83a\udc1d',
    'bE':  '\ud83a\udc1e',
    'bee':  '\ud83a\udc1e',
    'be':  '\ud83a\udc1f',
    'bO':  '\ud83a\udc20',
    'boo':  '\ud83a\udc20',
    'bo':  '\ud83a\udc21',

    's':  '\ud83a\udc2e',
    'si':  '\ud83a\udc2e',
    'sa':  '\ud83a\udc2f',
    'su':  '\ud83a\udc30',
    'sE':  '\ud83a\udc31',
    'see':  '\ud83a\udc31',
    'se':  '\ud83a\udc32',
    'sO':  '\ud83a\udc33',
    'soo':  '\ud83a\udc33',
    'so':  '\ud83a\udc34',
    'sia':  '\ud83a\udc35',

    'l':  '\ud83a\udc36',
    'li':  '\ud83a\udc36',
    'la':  '\ud83a\udc37',
    'lu':  '\ud83a\udc38',
    'lE':  '\ud83a\udc39',
    'lee':  '\ud83a\udc39',
    'le':  '\ud83a\udc3a',
    'lO':  '\ud83a\udc3b',
    'loo':  '\ud83a\udc3b',
    'lo':  '\ud83a\udc3c',
    'lle':  '\ud83a\udc3d',  // Long Le
    'Le':  '\ud83a\udc3d',  // Long Le
    'LE':  '\ud83a\udc3d',  // Long Le

    'd':  '\ud83a\udc3e',
    'di':  '\ud83a\udc3e',
    'da':  '\ud83a\udc3f',
    'du':  '\ud83a\udc40',
    'dE':  '\ud83a\udc41',
    'dee':  '\ud83a\udc41',
    'dO':  '\ud83a\udc42',
    'doo':  '\ud83a\udc42',
    'do':  '\ud83a\udc43',

    't':  '\ud83a\udc44',
    'ti':  '\ud83a\udc44',
    'ta':  '\ud83a\udc45',
    'tu':  '\ud83a\udc46',
    'tE':  '\ud83a\udc47',
    'tee':  '\ud83a\udc47',
    'te':  '\ud83a\udc48',
    'tO':  '\ud83a\udc49',
    'too':  '\ud83a\udc49',
    'to':  '\ud83a\udc4a',

    'j':  '\ud83a\udc4b',
    'ji':  '\ud83a\udc4b',
    'ja':  '\ud83a\udc4c',
    'ju':  '\ud83a\udc4d',
    'jE':  '\ud83a\udc4e',
    'jee':  '\ud83a\udc4e',
    'je':  '\ud83a\udc4f',
    'jO':  '\ud83a\udc50',
    'joo':  '\ud83a\udc50',
    'jo':  '\ud83a\udc51',
    'jjo':  '\ud83a\udc52',
    'jol':  '\ud83a\udc52',
    'Jo':  '\ud83a\udc52',
    'JO':  '\ud83a\udc52',

    'y':  '\ud83a\udc53',
    'yi':  '\ud83a\udc53',
    'ya':  '\ud83a\udc54',
    'yu':  '\ud83a\udc55',
    'yE':  '\ud83a\udc56',
    'yee':  '\ud83a\udc56',
    'ye':  '\ud83a\udc57',
    'yO':  '\ud83a\udc58',
    'yoo':  '\ud83a\udc58',
    'yo':  '\ud83a\udc59',

    'f':  '\ud83a\udc5a',
    'fi':  '\ud83a\udc5a',
    'fa':  '\ud83a\udc5b',
    'fu':  '\ud83a\udc5c',
    'fE':  '\ud83a\udc5d',
    'fee':  '\ud83a\udc5d',
    'fe':  '\ud83a\udc5e',
    'fO':  '\ud83a\udc5f',
    'foo':  '\ud83a\udc5f',
    'fo':  '\ud83a\udc60',
    'fua':  '\ud83a\udc61',
    'fan':  '\ud83a\udc62',

    'n':  '\ud83a\udc63',
    'ni':  '\ud83a\udc63',
    'na':  '\ud83a\udc64',
    'nu':  '\ud83a\udc65',
    'ne':  '\ud83a\udc66',
    'no':  '\ud83a\udc67',

    'h':  '\ud83a\udc68',   // HI
    'hi':  '\ud83a\udc68',  // HI
    'ha':  '\ud83a\udc69',  // HA
    'hu':  '\ud83a\udc6a',  // HU
    'hE':  '\ud83a\udc6b',  // HEE
    'hee':  '\ud83a\udc6b', // HEE
    'he':  '\ud83a\udc6c',  // He
    'hO':  '\ud83a\udc6d',  // HOO
    'hoo':  '\ud83a\udc6d', // HOO
    'ho':  '\ud83a\udc6e',  // HO
    'hei':  '\ud83a\udc6f', // HEI
    'hEi':  '\ud83a\udc6f', // HEEI
    'heei':  '\ud83a\udc6f',// HEEI
    'hOu':  '\ud83a\udc70', // HOOU
    'hoou':  '\ud83a\udc70',// HOOU
    'hin':  '\ud83a\udc71', // HIN
    'han':  '\ud83a\udc72', // HAN
    'hun':  '\ud83a\udc73', // HUN
    'hen':  '\ud83a\udc74', // HEN
    'hon':  '\ud83a\udc75', // HON
    'hua':  '\ud83a\udc76', // HUAN

    'ngg':  '\ud83a\udc77',
    'nggi':  '\ud83a\udc77',
    'ngga':  '\ud83a\udc78',
    'nggu':  '\ud83a\udc79',
    'nggE':  '\ud83a\udc7a',
    'nggee':  '\ud83a\udc7a',
    'ngge':  '\ud83a\udc7b',
    'nggO':  '\ud83a\udc7c',
    'nggoo':  '\ud83a\udc7c',
    'nggo':  '\ud83a\udc7d',
    'nggA':  '\ud83a\udc7e',
    'nggaa':  '\ud83a\udc7e',
    'nggua':  '\ud83a\udc7f',
    'nggEE':  '\ud83a\udc80',
    'nggEl':  '\ud83a\udc80',
    'nggel':  '\ud83a\udc80',
    'nggOO':  '\ud83a\udc81',
    'nggOl':  '\ud83a\udc81',
    'nggol':  '\ud83a\udc82',
    'N[gG][gG]e':  '\ud83a\udc80',
    'N[gG][gG]O':  '\ud83a\udc81',
    'N[gG][gG]oo':  '\ud83a\udc81',
    'N[gG][gG]o':  '\ud83a\udc82',

    'g':  '\ud83a\udc83',
    'gi':  '\ud83a\udc83',
    'ga':  '\ud83a\udc84',
    'gu':  '\ud83a\udc85',
    'gE':  '\ud83a\udc86',
    'gee':  '\ud83a\udc86',
    'gue':  '\ud83a\udc87',
    'gua':  '\ud83a\udc88',

    'ng':  '\ud83a\udc89',
    'nge':  '\ud83a\udc89',
    'ngo':  '\ud83a\udc8a',
    'ngu':  '\ud83a\udc8b',

    'p':  '\ud83a\udc8c',
    'pi':  '\ud83a\udc8c',
    'pa':  '\ud83a\udc8d',
    'pu':  '\ud83a\udc8e',
    'pE':  '\ud83a\udc8f',
    'pee':  '\ud83a\udc8f',
    'pe':  '\ud83a\udc90',
    'pO':  '\ud83a\udc91',
    'poo':  '\ud83a\udc91',
    'po':  '\ud83a\udc92',

    'mb':  '\ud83a\udc93',
    'mbi':  '\ud83a\udc93',
    'mba':  '\ud83a\udc94',
    'mbu':  '\ud83a\udc95',
    'mbE':  '\ud83a\udc96',
    'mbee':  '\ud83a\udc96',
    'mbEE':  '\ud83a\udc97',
    'mbe':  '\ud83a\udc98',
    'mbO':  '\ud83a\udc99',
    'mboo':  '\ud83a\udc99',
    'mbo':  '\ud83a\udc9a',
    'mbU':  '\ud83a\udc9b',
    'mbuu':  '\ud83a\udc9b',
    'mbel':  '\ud83a\udc9c',  // Long MBE
    'mbOO':  '\ud83a\udc9d',  // Long MBOO
    'mbOl':  '\ud83a\udc9d',  // Long MBOO
    'mbol':  '\ud83a\udc9e',  // Long MBO
    'M[bB]e':  '\ud83a\udc9c',  // Long MBE
    'M[bB]O':  '\ud83a\udc9d',  // Long MBOO
    'M[bB]oo':  '\ud83a\udc9d',  // Long MBOO
    'M[bB]o':  '\ud83a\udc9e',  // Long MBO

    'kp':  '\ud83a\udc9f',
    'kpi':  '\ud83a\udc9f',
    'kpa':  '\ud83a\udca0',
    'kpu':  '\ud83a\udca1',
    'kpE':  '\ud83a\udca2',
    'kpee':  '\ud83a\udca2',
    'kpe':  '\ud83a\udca3',
    'kpO':  '\ud83a\udca4',
    'kpoo':  '\ud83a\udca4',
    'kpo':  '\ud83a\udca5',

    'gb':  '\ud83a\udca6',
    'gbi':  '\ud83a\udca6',
    'gba':  '\ud83a\udca7',
    'gbu':  '\ud83a\udca8',
    'gbE':  '\ud83a\udca9',
    'gbee':  '\ud83a\udca9',
    'gbe':  '\ud83a\udcaa',
    'gbO':  '\ud83a\udcab',
    'gboo':  '\ud83a\udcab',
    'gbo':  '\ud83a\udcac',

    'r':  '\ud83a\udcad',

    'nd':  '\ud83a\udcae',
    'ndi':  '\ud83a\udcae',
    'nda':  '\ud83a\udcaf',
    'ndu':  '\ud83a\udcb0',
    'ndE':  '\ud83a\udcb1',
    'ndee':  '\ud83a\udcb1',
    'nde':  '\ud83a\udcb2',
    'ndO':  '\ud83a\udcb3',
    'ndoo':  '\ud83a\udcb3',
    'ndo':  '\ud83a\udcb4',

    'nj':  '\ud83a\udcb5',
    'nja':  '\ud83a\udcb5',
    'nju':  '\ud83a\udcb6',
    'njE':  '\ud83a\udcb7',
    'njee':  '\ud83a\udcb7',
    'njO':  '\ud83a\udcb8',
    'njoo':  '\ud83a\udcb8',

    'v':  '\ud83a\udcb9',
    'vi':  '\ud83a\udcb9',
    'va':  '\ud83a\udcba',
    'vu':  '\ud83a\udcbb',
    'vE':  '\ud83a\udcbc',
    'vee':  '\ud83a\udcbc',
    've':  '\ud83a\udcbd',
    'vO':  '\ud83a\udcbe',
    'voo':  '\ud83a\udcbe',
    'vo':  '\ud83a\udcbf',

    'ny':  '\ud83a\udcc0',
    'nyi':  '\ud83a\udcc0',
    'nya':  '\ud83a\udcc1',
    'nyu':  '\ud83a\udcc2',
    'nye':  '\ud83a\udcc3',
    'nyo':  '\ud83a\udcc4',

    // Something for combining numbers?
    '0t':  '\ud83a\udcd0',  // Combining teens
    '0d':  '\ud83a\udcd1',  // Combining tens
    '0c':  '\ud83a\udcd2',  // Combining hundreds
    '0m':  '\ud83a\udcd3',  // Combining thousands
    '0D':  '\ud83a\udcd4',  // Combining ten thousands
    '0C':  '\ud83a\udcd5',  // Combining hundred thousands
    '0M':  '\ud83a\udcd6',  // Combining millions

    // Remove ZWNB Space
    '\ufeff([a-zA-Z0-9])': '$1',
  },
  'historyPruneRegex': 'k|w|we|wo|wu|wv|m|mu|b|be|bo|s|se|so|si|l|le|lo|ll|L|d|de|do|t|te|to|j|je|jj|jo|J|y|ye|yo|f|fa|fe|fo|fu|n|h|he|hE|hi|ho|hoo|hO|hee|ha|hu|ngg|ngga|ngge|nggE|nggo|nggO|Ngg|NGg|nggu|g|ge|gu|ng|p|pe|po|mb|mbe|mbo|mbE|mbO|mbu|kp|kpe|kpo|gb|gbe|gbo|nd|nde|ndo|nj|nje|njo|v|ve|vo|ny'
}

// Load the layout and inform the keyboard to switch layout if necessary.
google.elements.keyboard.loadme(MEN_PHONE_LAYOUT);
menPhone = MEN_PHONE_LAYOUT;