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

import base

# import transliterate
# import transrule_ccp

import json
import logging
import os
import sys
import urllib
import webapp2

from google.appengine.ext.webapp import template

encoding_font_list = [
    {
        'display_name': 'Wancho Dipangkar',
        'font_name': 'WanchoDipangkar',
        'font_path':'/fonts/Wancho/Wancho Dipangkar.ttf',
    },
]

unicode_font_list = [
  {
    'family': 'NotoSansWancho',
    'longName': 'NotoSansWancho',
    'source': '/fonts/Wancho/NotoSansWancho-Regular.ttf',
  },
  {
      'family': 'WanchoDipangkar',
      'longName': 'Wancho Dipangkar',
      'source': '/fonts/Wancho/WanchoDipangkar.ttf'
  },
  {
      'family': 'WanchoAnupama',
      'longName': 'Wancho Anupama',
      'source': '/fonts/Wancho/WanchoAnupama.ttf'
  },
  {
      'family': 'WanchoAnurag',
      'longName': 'Wancho Anurag',
      'source': '/fonts/Wancho/WanchoAnurag.ttf'
  },
  {
      'family': 'WanchoBanwang',
      'longName': 'Wancho Banwang',
      'source': '/fonts/Wancho/WanchoBanwang.ttf'
  },
  {
      'family': 'WanchoDipangkarBlack',
      'longName': 'Wancho DipangkarBlack',
      'source': '/fonts/Wancho/WanchoDipangkarBlack.ttf'
  },
  {
      'family': 'WanchoDipangkarBoldItalic',
      'longName': 'Wancho DipangkarBoldItalic',
      'source': '/fonts/Wancho/WanchoDipangkarBoldItalic.ttf'
  },
  {
      'family': 'WanchoDipangkarBold',
      'longName': 'Wancho DipangkarBold',
      'source': '/fonts/Wancho/WanchoDipangkarBold.ttf'
  },
  {
      'family': 'WanchoDipangkarCondensed',
      'longName': 'Wancho DipangkarCondensed',
      'source': '/fonts/Wancho/WanchoDipangkarCondensed.ttf'
  },
  {
      'family': 'WanchoDipangkarEngravedBlack',
      'longName': 'Wancho DipangkarEngravedBlack',
      'source': '/fonts/Wancho/WanchoDipangkarEngravedBlack.ttf'
  },
  {
      'family': 'WanchoDipangkarEngravedWhite',
      'longName': 'Wancho DipangkarEngravedWhite',
      'source': '/fonts/Wancho/WanchoDipangkarEngravedWhite.ttf'
  },
  {
      'family': 'WanchoDipangkarItalic',
      'longName': 'Wancho DipangkarItalic',
      'source': '/fonts/Wancho/WanchoDipangkarItalic.ttf'
  },
  {
      'family': 'WanchoGautam.ttf',
      'longName': 'Wancho Gautam-Bold',
      'source': '/fonts/Wancho/WanchoGautam-Bold.ttf'
  },
  {
      'family': 'WanchoGautam.ttf',
      'longName': 'Wancho Gautam-Light',
      'source': '/fonts/Wancho/WanchoGautam-Light.ttf'
  },
  {
      'family': 'WanchoGautam.ttf',
      'longName': 'Wancho Gautam-Medium',
      'source': '/fonts/Wancho/WanchoGautam-Medium.ttf'
  },
  {
      'family': 'WanchoGautam.ttf',
      'longName': 'Wancho Gautam-Regular',
      'source': '/fonts/Wancho/WanchoGautam-Regular.ttf'
  },
  {
      'family': 'WanchoGautam.ttf',
      'longName': 'Wancho Gautam-SemiBold',
      'source': '/fonts/Wancho/WanchoGautam-SemiBold.ttf'
  },
  {
      'family': 'WanchoLaizi',
      'longName': 'Wancho Laizi',
      'source': '/fonts/Wancho/WanchoLaizi.ttf'
  },
  {
      'family': 'WanchoOldSchool',
      'longName': 'Wancho OldSchool',
      'source': '/fonts/Wancho/WanchoOldSchool.ttf'
  },
  {
      'family': 'WanchoSenmai',
      'longName': 'Wancho Senmai',
      'source': '/fonts/Wancho/WanchoSenmai.ttf'
  },
  {
      'family': 'WanchoDipangkarUnicode',
      'longName': 'Wancho Dipangkar Unicode cc',
      'source':'/fonts/Wancho/WanchoDipangkar_Unicode.ttf',
  },
]

links = [
    {'linkText': 'Keyboard',
     'ref': '/nnp/'
    },
    {'linkText': 'Converter',
     'ref': '/nnp/convertUI/'},
    {'linkText': 'Font conversion summary',
      'ref': '/nnp/encodingRules/'
    },
    {'linkText': 'Resources / Downloads',
      'ref': '/nnp/downloads/'
    },
    {'linkText': 'Unicode Page',
    'ref': 'https://www.unicode.org/charts/PDF/U1E2C0.pdf'
    },
    {'linkText': 'Wancho Wikipedia',
     'ref': 'https://en.wikipedia.org/wiki/Wancho_language'
    },
    {'linkText': 'Combiners',
     'ref': '/nnp/diacritic/'
     },
]

class langInfo():
  def __init__(self):
    self.LanguageCode = 'nnp'  #
    self.Language = 'Wancho'
    self.Language_native = ''
    self.direction = 'ltr'

    if sys.maxunicode >= 0x10000:
      logging.info('WIDE SYSTEM BUILD!!!')
      self.diacritic_list = [unichr(x) for x in range(0x1e2c0, 0x1e2fa)]
    else:
      logging.info('NARROW SYSTEM BUILD!!!')
      self.diacritic_list = [unichr(0xd838) + unichr(0xde00 + x) for x in range(0xc0, 0xfa)]

    self.base_consonant = u'\ud838\udd00'
    self.baseHexUTF16 = u'\ud838\udd01'

    self.lang_list = [
      { 'shortName': self.LanguageCode,
        'longName': self.Language,
        }
    ]
    self.encoding_font_list = encoding_font_list
    self.kb_list = [
      {
        'shortName': 'nnp',
        'longName': 'Wancho keyboard',
        'jsName': 'nnp',
        'font': 'NotoSansWancho',
      },
    ]
    self.links = links
    self.text_file_list = []
    self.unicode_font_list = unicode_font_list

    # Lists of test characters for the various encodings
    self.test_chars = [' '.join([unichr(x) for x in range(0x20, 0x7f)])]


# Global in this file.
langInstance = langInfo()

app = webapp2.WSGIApplication(
    [('/nnp/', base.LanguagesHomeHandler),
     ('/nnp/convertUI/', base.ConvertUIHandler),
     ('/nnp/downloads/', base.Downloads),
     ('/nnp/converter/', base.ConvertHandler),
     ('/nnp/encodingRules/', base.EncodingRules),
     ('/nnp/diacritic/', base.DiacriticHandler),
     ], debug=True,
    config={'langInfo': langInstance}
)
