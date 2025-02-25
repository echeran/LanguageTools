# -*- coding: utf-8 -*-
#!/usr/bin/env python
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#

import os
import webapp2

import base

Language = 'Wolof'
Language_native = '???ᰶ'
LanguageCode = 'wo'
ScriptCode = 'Gara'

encoding_font_list = [
  {
    'font_path': '/fonts/African_font_encodings/CaytuBasic.ttf',
    'font_name': 'Caytu Basic OTF',
    'display_name': 'Caytu Basic OTF',
  },
  {
    'font_path': '/fonts/African_font_encodings/WOLOF.TTF',
    'font_name': 'Garay ASCII',
    'display_name': 'Garay ASCII',
  },
]

unicode_font_list = [
  {
    'source': '/fonts/African_font_encodings/CaytuBasic.otf',
    'family': 'Caytu Basic OTF',
    'longName': 'Caytu Basic OTF',
  },
  {
    'source': '/fonts/African_font_encodings/CaytuBasic.ttf',
    'family': 'Caytu Basic',
    'longName': 'Caytu Basic',
  },
  {
    'family': 'GarayAscii',
    'longName': 'Garay ASCII',
    'source': '/fonts/African_font_encodings/WOLOF.TTF',
  },
]

links = [
    {'linkText': 'Keyboard',
     'ref': '/' + LanguageCode + '/'
    },
    # {'linkText': 'Converter',
    #  'ref': '/' + LanguageCode + '/convertUI/'},
    # {'linkText': 'Font conversion summary',
    #   'ref': '/' + LanguageCode + '/encodingRules/'
    # },
    # {'linkText': 'Resources',
    #   'ref': '/' + LanguageCode + '/downloads/'
    # },
    # {'linkText': 'Unicode page',
    #  'ref': 'https://www.unicode.org/charts/PDF/U1C00.pdf'
    # },
    # {'linkText': 'Lepcha script',
    #  'ref': 'https://en.wikipedia.org/wiki/Lepcha_alphabet'
    # },
    # {'linkText': 'Wikipedi page',
    #  'ref': 'https://en.wikipedia.org/wiki/Lepcha_language'
    # },
    # {'linkText': 'Ethnolog',
    #  'ref': 'https://www.ethnologue.com/language/lep'
    # },
    # {'linkText': 'Combiners',
    #  'ref': '/lep/diacritic/'
    #  },
]

class langInfo():
  def __init__(self):

    diacritic_list = [unichr(x) for x in range(0xa926, 0xa92d)]

    default_base_consonant = u'\u1c00'

    encodedRanges = [
      (0x20, 0x7b),
    ]

    self.LanguageCode = LanguageCode
    self.Language = Language
    self.Language_native = Language_native
    self.test_data = u''
    self.unicode_font_list = unicode_font_list
    self.encoding_font_list = encoding_font_list

    self.lang_list = [LanguageCode]  # This may be extended

    kb_list = [
      {'shortName': 'wo_Caty',
       'longName': "Wolof Caytu",
       'font': ['Caytu Basic', 'Caytu Basic OTF'],
       'instructions': 'Uses ASCII range for letters and digits, U+218c - U+2093 for numeric symbols. ' +
          'Use ";" before digits 1-8 for the numeric symbols for 100 up to 10^15. '+
          'Shift-space gives narrow non-breaking space (NNBS)' +
          'Doubled consonants replaces second on with lengthener U+030A.'
       },
      {'shortName': LanguageCode + '_' + ScriptCode,
       'longName': Language + ' ' + ScriptCode,
       'font': ['GarayAscii'],
       },
    ]
    self.kb_list = kb_list
    self.links = links

    # For additional resources for download
    self.text_file_list = []

    # TODO: Fill in the rest of the common data.

langInstance = langInfo()

app = webapp2.WSGIApplication([
  ('/' + LanguageCode + '/', base.LanguagesHomeHandler),
  ('/' + LanguageCode + '/keyboard/', base.LanguagesHomeHandler),
  ('/' + LanguageCode + '/downloads/', base.Downloads),
  ('/' + LanguageCode + '/encodingRules/', base.EncodingRules),
  ('/' + LanguageCode + '/diacritic/', base.DiacriticHandler),
], debug=True,
                              config={'langInfo': langInstance}
)
