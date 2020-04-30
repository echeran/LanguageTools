// By: Riley Wanakamik, Christyn Koostachin, Gene Mendowegan
// Completed January 19/19

var OJS_LAYOUT = {
  "id":"ojs",
  "dir": "ltr",
  "title":"Fort Severn Cree",

  "mappings":{
    ",c":{
      "":"`1234567890-=qwertyuiop[]\\asdfghjkl;'zxcvbnm,./"
    },
    "s,sc":{"":'~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?'
	   },
    "l,cl":{"":"`1234567890-=QWERTYUIOP[]|ASDFGHJKL;'ZXCVBNM,./"
	   },
    "sl,scl":{"":'~!@#$%^&*()_+qwertyuiop{}|asdfghjkl:"zxcvbnm<>?'
	     }
  },

transform:{

"e":"\u1401",
"i":"\u1403",
"o":"\u1405",
"a":"\u140A",
"ii":"\u1404",
"oo":"\u1406",
"aa":"\u140B",
"we":"\u140D",
"wi":"\u140F",
"wo":"\u1413",
"wa":"\u1418",
"wii":"\u1411",
"woo":"\u1415",
"waa":"\u141A",
"w":"\u1424",
"be":"\u142F",
"bi":"\u1431",
"bo":"\u1433",
"ba":"\u1438",
"bii":"\u1432",
"boo":"\u1434",
"baa":"\u1439",
"b":"\u144A",
"pe":"\u142F",
"pi":"\u1431",
"po":"\u1443",
"pa":"\u1438",
"pii":"\u1432",
"poo":"\u1434",
"paa":"\u1439",
"p":"\u144A",
"bwe":"\u143B",
"bwi":"\u143D",
"bwo":"\u1441",
"bwa":"\u1445",
"bwii":"\u143F",
"bwoo":"\u1443",
"bwaa":"\u1447",
"pwe":"\u143B",
"pwi":"\u143D",
"pwo":"\u1441",
"pwa":"\u1445",
"pwii":"\u143F",
"pwoo":"\u1443",
"pwaa":"\u1447",
"de":"\u144C",
"di":"\u144E",
"do":"\u1450",
"da":"\u1455",
"dii":"\u144F",
"doo":"\u1451",
"daa":"\u1456",
"d":"\u141F",
"te":"\u144C",
"ti":"\u144E",
"to":"\u1450",
"ta":"\u1455",
"tii":"\u144F",
"too":"\u1451",
"taa":"\u1456",
"t":"\u141F",
"dwe":"\u1458",
"dwi":"\u145A",
"dwo":"\u145E",
"dwa":"\u1462",
"dwii":"\u145C",
"dwoo":"\u1460",
"dwaa":"\u1464",
"twe":"\u1458",
"twi":"\u145A",
"two":"\u145E",
"twa":"\u1462",
"twii":"\u145C",
"twoo":"\u1460",
"twaa":"\u1464",
"ge":"\u146B",
"gi":"\u146D",
"go":"\u146F",
"ga":"\u1472",
"gii":"\u146E",
"goo":"\u1470",
"gaa":"\u1473",
"g":"\u1420",
"ke":"\u146B",
"ki":"\u146D",
"ko":"\u146F",
"ka":"\u1472",
"kii":"\u146E",
"koo":"\u1470",
"kaa":"\u1473",
"k":"\u1420",
"gwe":"\u1475",
"gwi":"\u1477",
"gwo":"\u147B",
"gwa":"\u147F",
"gwii":"\u1479",
"gwoo":"\u147D",
"gwaa":"\u1481",
"kwe":"\u1475",
"kwi":"\u1477",
"kwo":"\u147B",
"kwa":"\u147F",
"kwii":"\u1479",
"kwoo":"\u147D",
"kwaa":"\u1481",
"je":"\u1489",
"ji":"\u148B",
"jo":"\u148D",
"ja":"\u1490",
"jii":"\u148C",
"joo":"\u148E",
"jaa":"\u1491",
"j":"\u1428",
"ce":"\u1489",
"ci":"\u148B",
"co":"\u148D",
"ca":"\u1490",
"cii":"\u148C",
"coo":"\u148E",
"caa":"\u1491",
"c":"\u1428",
  "jwe":"\u1493",
"cwe":"\u1493",
"jwi":"\u1495",
"cwi":"\u1495",
"jwo":"\u1499",
"cwo":"\u1499",
"jwa":"\u149D",
"cwa":"\u149D",
"jwii":"\u1497",
"cwii":"\u1497",
"jwoo":"\u149B",
"cwoo":"\u149B",
"jwaa":"\u149F",
"cwaa":"\u149F",
"ne":"\u14C0",
"ni":"\u14C2",
"no":"\u14C4",
"na":"\u14C7",
"nii":"\u14C3",
"noo":"\u14C5",
"naa":"\u14C8",
"n":"\u1423",
"nwe":"\u14CA",
"nwi":"\u14C2\u1427",
"nwo":"\u14C4\u1427",
"nwa":"\u14CC",
"nwii":"\u14C3\u1427",
"nwoo":"\u14C5\u1427",
"nwaa":"\u14C8\u1427",
"me":"\u14A3",
"mi":"\u14A5",
"mo":"\u14A7",
"ma":"\u14AA",
"mii":"\u14A6",
"moo":"\u14A8",
"maa":"\u14AB",
"m":"\u14BC",
"mwe":"\u14AD",
"mwi":"\u14AF",
"mwo":"\u14B3",
"mwa":"\u14B7",
"mwii":"\u14B1",
"mwoo":"\u14B5",
"mwaa":"\u14B9",
"se":"\u14ED",
"si":"\u14EF",
"so":"\u14F1",
"sa":"\u14F4",
"sii":"\u14F0",
"soo":"\u14F2",
"saa":"\u14F5",
"s":"\u1422",
"ze":"\u14ED",
"zi":"\u14EF",
"zo":"\u14F1",
"za":"\u14F4",
"zii":"\u14F0",
"zoo":"\u14F2",
"zaa":"\u14F5",
"z":"\u1422",
"swe":"\u14F7",
"swi":"\u14F9",
"swo":"\u14FD",
"swa":"\u1501",
"swii":"\u14FB",
"swoo":"\u14FF",
"swaa":"\u1503",
"zwe":"\u14F7",
"zwi":"\u14F9",
"zwo":"\u14FD",
"zwa":"\u1501",
"zwii":"\u14FB",
"zwoo":"\u14FF",
"zwaa":"\u1503",
"she":"\u1510",
"shi":"\u1511",
"sho":"\u1513",
"sha":"\u1515",
"shii":"\u1512",
"shoo":"\u1514",
"shaa":"\u1516",
"sh":"\u1421",
"zhe":"\u1510",
"zhi":"\u1511",
"zho":"\u1513",
"zha":"\u1515",
"zhii":"\u1512",
"zhoo":"\u1514",
"zhaa":"\u1516",
"zh":"\u1421",
"shwe":"\u1518",
"shwi":"\u151A",
"shwo":"\u151E",
"shwa":"\u1522",
"shwii":"\u151C",
"shwoo":"\u1520",
"shwaa":"\u1524",
"zhwe":"\u1518",
"zhwi":"\u151A",
"zhwo":"\u151E",
"zhwa":"\u1522",
"zhwii":"\u151C",
"zhwoo":"\u1520",
"zhwaa":"\u1524",
"ye":"\u1526",
"yi":"\u1528",
"yo":"\u152A",
"ya":"\u152D",
"y":"\u153E",
"le":"\u14D3",
"li":"\u14D5",
"lo":"\u14D7",
"la":"\u14DA",
"lii":"\u14D6",
"loo":"\u14D8",
"laa":"\u14DB",
"l":"\u14EA",
"lwe":"\u14EC\u1401",
"lwi":"\u14EC\u1403",
"lwo":"\u14EC\u1405",
"lwa":"\u14EC\u140A",
"lwii":"\u14EC\u1404",
"lwoo":"\u14EC\u1406",
"lwaa":"\u14EC\u140B",
"lw":"\u14EB",
"r":"\u1551",
"re":"\u1552\u1401",
"ri":"\u1552\u1403",
"ro":"\u1552\u1405",
"ra":"\u1552\u140A",
"rii":"\u1552\u1404",
"roo":"\u1552\u1406",
"raa":"\u1552\u140B",
"h":"\u1426",
"x":"\u166E",
"X":"\u166D",
//----------------------------
  " ":" "},
  historyPruneRegex:" | |a|b|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|ii|oo|aa|be|bi|bo|ba|bii|boo|baa|pe|pi|po|pa|pii|poo|paa|bwe|bwi|bwo|bwa|bwii|bwoo|bwaa|pwe|pwi|pwo|pwa|pwii|pwoo|pwaa|de|di|do|da|dii|doo|daa|te|ti|to|ta|tii|too|taa|dwe|dwi|dwo|dwa|dwii|dwoo|dwaa|twe|twi|two|twa|twii|twoo|twaa|ge|gi|go|ga|gii|goo|gaa|ke|ki|ko|ka|kii|koo|kaa|gwe|gwi|gwo|gwa|gwii|gwoo|gwaa|kwe|kwi|kwo|kwa|kwii|kwoo|kwaa|je|ji|jo|ja|jii|joo|jaa|ce|ci|co|ca|cii|coo|caa|jwe|jwi|jwo|jwa|jwii|jwoo|jwaa|cwe|cwi|cwo|cwa|cwii|cwoo|cwaa|ne|ni|no|na|nii|noo|naa|nwe|nwi|nwo|nwa|nwii|nwoo|nwaa|me|mi|mo|ma|mii|moo|maa|mwe|mwi|mwo|mwa|mwii|mwoo|mwaa|se|si|so|sa|sii|soo|saa|swe|swi|swo|swa|swii|swoo|swaa|ze|zi|zo|za|zwe|zwi|zwo|zwa|zwii|zwoo|zwaa|re|ri|ro|ra|rii|roo|raa|X|she|shi|sho|sha|shii|shoo|shaa|sh|zhe|zhi|zho|zha|zhii|zhoo|zhaa|zh|shwe|shwi|shwo|shwa|shwii|shwoo|shwaa|zhwe|zhwi|zhwo|zhwa|zhwii|zhwoo|zhwaa|ye|yi|yo|ya|le|li|lo|la|lii|loo|laa|lwe|lwi|lwo|lwa|lwii|lwoo|lwaa|we|wi|wo|wa|wii|woo|waa"
}

// Load the layout and inform the keyboard to switch layout if necessary.
google.elements.keyboard.loadme(OJS_LAYOUT);
ojs = OJS_LAYOUT;