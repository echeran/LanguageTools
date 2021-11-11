# -*- coding: utf-8 -*-
# !/usr/bin/env python
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

from google.appengine.ext.webapp import template

Language = 'Blackfoot'
Language_native = 'ᓱᖽᐧᖿ (Siksiká)'
LanguageCode = 'bla'
ScriptCode = 'Cans'

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
  {'linkText': 'Blackfoot Wikipedi',
   'ref': 'https://en.wikipedia.org/wiki/Blackfoot_language'
  },
  # {'linkText': 'Ethnolog',
  #  'ref': 'https://www.ethnologue.com/language/lep'
  # },
  # {'linkText': 'Combiners',
  #  'ref': '/lep/diacritic/'
  #  },
]


class langInfo:
    def __init__(self):
        self.LanguageCode = LanguageCode
        self.Language = Language
        self.Language_native = Language_native
        self.test_data = u''
        self.unicode_font_list = [
          { 'source': '/fonts/cree/NotoSansCanadianAboriginal-Regular.ttf',
            'family': 'NotoSansCanadianAboriginal',
            'longName': 'Noto Sans Canadian Aboriginal',
            },

          { 'family': 'bjcrus',
            'longName': 'BJ Cree',
            'source': '/fonts/cree/bjcrus.ttf'
            },
          {'family': 'oskiblackfoot5',
           'longName': 'Oski Blackfoot',
           'source': '/fonts/cree/oskiblackfoot5.ttf'
           },
          { 'family': 'kisiska',
            'longName': 'Kisiska',
            'source': '/fonts/cree/kisiska.otf'
            },
          { 'family': 'aboriginalSans',
            'longName': 'Aboriginal Sans',
            'source': '/fonts/cree/AboriginalSansREGULAR.ttf'
            },
          {'family': 'aboriginalSerif',
           'longName': 'Aboriginal Serif',
           'source': '/fonts/cree/Aboriginal Serif REGULAR 939.ttf'
           },
          {'family': 'Euphemia',
           'longName': 'Euphemia regular',
           'source': '/fonts/cree/Euphemia UCAS Regular 2.6.6.ttf',
           'origin': 'http://tiro.com/syllabics/resources/'
           },
          {'family': 'Uqammaq',
           'longName': 'Uqammaq regular',
           'source': '/fonts/cree/Uqammaq_Regular.ttf',
           'origin': 'http://tiro.com/syllabics/resources/'
           },
          {'family': 'Pigiarniq',
           'longName': 'Pigiarniq regular',
           'source': '/fonts/cree/Pigiarniq_Regular.ttf',
           'origin': 'http://tiro.com/syllabics/resources/'
           },
          {'family': 'Masinahikan_h',
           'longName': 'Masinahikan',
           'source': '/fonts/cree/Masinahikan_h.ttf',
           'origin': 'languagegeek.com'
           },
        ]

        self.encoding_font_list = [
          {
            'font_path': '/fonts/xyz.ttf',
            'font_name': 'xyz',
            'display_name': 'xyz',
          },
        ]

        self.lang_list = [LanguageCode]  # This may be extended

        self.kb_list = [
          {'shortName': LanguageCode,
           'longName': LanguageCode,
           },
        ]

        self.links = links

        # TODO: Fill in with diacritics
        self.diacritic_list = [unichr(x) for x in range(0x300, 0x330)]
        # TODO: Fill in base consonant
        self.default_base_consonant = u'\0x61'

        self.encodedRanges = [
            (0x20, 0xff),
        ]

        # For additional resources for download
        self.text_file_list = []

        # TODO: Fill in the rest of the common data.


langInstance = langInfo()

app = webapp2.WSGIApplication([
  ('/' + LanguageCode + '/', base.LanguagesHomeHandler),
  ('/' + LanguageCode + '/convertUI/', base.ConvertUIHandler),
  ('/' + LanguageCode + '/downloads/', base.Downloads),
  ('/' + LanguageCode + '/encodingRules/', base.EncodingRules),
  ('/' + LanguageCode + '/diacritic/', base.DiacriticHandler),
], debug=True,
  config={'langInfo': langInstance}
)
