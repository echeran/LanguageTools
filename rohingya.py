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
      'font_path':'/fonts/Rohingya Guanya Leyka.ttf',
      'font_name':'GuynaLeykaNoories',
      'display_name': 'Guanya Leyka Noories',
      'Source location': 'https://sellfy.com/p/OXDH/',
    },
    {
      'font_path':'/fonts/Rohingya Kuna Leyka Noories.ttf',
      'font_name':'KunaLeykaNoories',
      'display_name': 'Kuna Leyka Noories',
      'Source location':' http://fontlibrary.org/en/font/rohingya-kuna-leyka-noories',
    },
    # {  # This font does not seem to have usable code points.
    #   'font_path':'/fonts/Rohingya Gonya Leyka Noories.ttf',
    #   'font_name':'RohingyaGonyaLeykaNoories',
    #   'display_name': 'Gonya Leyka Noories',
    #   'Source location': 'http://fontlibrary.org/en/font/rohingya-gonya-leyka-noories',
    # },
]

unicode_font_list = [
  {
      'family': 'RohingyaNooriesOne',
      'longName': 'Rohingya Noories One',
      'source': '/fonts/Rohingya Noories One.ttf',
      'attribution': 'From MD Noor 25-Feb-2019',
  },

 #{
 #     'family': 'MNitaRohingyaTraced',
 #     'longName': 'MNita Rohingya Traced',
 #     'source': '/fonts/RohingyaTraced.ttf',
 #     'attribution': 'Created by Mihai Nita 2018-08-29',
 # },
  {
    'family': 'NotoSansRohingya',
    'longName': 'Noto Sans Rohingya regular',
    'source': '/fonts/Rohingya/NotoSansHanifiRohingya-Regular.ttf',
    'attribution': 'https://github.com/googlefonts/noto-fonts/tree/master/hinted/ttf/NotoSansHanifiRohingya',
  },
  {
    'family': 'NotoSansRohingyaBold',
    'longName': 'Noto Sans Rohingya bold',
    'source': '/fonts/Rohingya/NotoSansHanifiRohingya-Bold.ttf',
    'attribution': 'https://github.com/googlefonts/noto-fonts/tree/master/hinted/ttf/NotoSansHanifiRohingya',
  },
  {
    'family': 'NotoSansRohingyaSemiBold',
    'longName': 'Noto Sans Rohingya semibold',
    'source': '/fonts/Rohingya/NotoSansHanifiRohingya-SemiBold.ttf',
    'attribution': 'https://github.com/googlefonts/noto-fonts/tree/master/hinted/ttf/NotoSansHanifiRohingya',
  },
  {
    'family': 'NotoSansRohingyaMedium',
    'longName': 'Noto Sans Rohingya medium',
    'source': '/fonts/Rohingya/NotoSansHanifiRohingya-Medium.ttf',
    'attribution': 'https://github.com/googlefonts/noto-fonts/tree/master/hinted/ttf/NotoSansHanifiRohingya',
  },
  {
    'family': 'UniFoundaryUpper',
    'longName': 'Unifont (unifoundry.com)',
    'source': '/fonts/unifont_upper-11.0.02.ttf',
  },
  {
    'family': 'ScheherazadeRohingya',
    'longName': 'ScheherazadeRohingya',
    'source': '/fonts/ScheherazadeRohingya-R.ttf',
    'attribution': 'https://sites.google.com/site/rohingyafonna/',
  },
]

resource_list = [
  {
    'name': 'KeyMan Rohingya Installer',
    'source': '/resources/rhg/RohingyaInstaller.kmp',
    'description': '(.kmp) for Rohingya Unicode'
  },
  {
    'name': 'KeyMan Layout',
    'source': '/resources/rhg/RohingyaKeyboardLayout.kmn',
    'description': '(.kmn) for Rohingya Unicode'
  },
]

links = [
    {'linkText': 'Keyboard',
     'ref': '/rhg/'
    },
    {'linkText': 'Converter',
     'ref': '/rhg/convertUI/'},
    {'linkText': 'Font conversion summary',
      'ref': '/rhg/encodingRules/'
    },
    {'linkText': 'Resources / Downloads',
      'ref': '/rhg/downloads/'
    },
    {'linkText': 'Rohingya-English dictionary builder',
     'ref': '/' + 'rhg' + '/dictionaryN/'
     },
    {'linkText': 'Unicode Page',
    'ref': 'https://www.unicode.org/charts/PDF/U10D00.pdf'
    },
    {'linkText': 'Language Wikipedia',
     'ref': 'https://en.wikipedia.org/wiki/Rohingya_language'
    },

    {'linkText': 'Combiners',
     'ref': '/rhg/diacritic/'
     },
    {'linkText': 'Keyboard layout suggestion',
     'ref': 'https://rohingyaciki.wordpress.com/2018/03/08/rohingya-zuban-hanifi-fonts/amp/'},
]

class langInfo():
  def __init__(self):
    self.LanguageCode = 'rhg'
    self.Language = 'Rohingya'
    self.Language_native = '𐴀𐴁𐴂𐴃'
    self.direction = 'rtl'

    if sys.maxunicode >= 0x10000:
      logging.info('WIDE SYSTEM BUILD!!!')
      self.diacritic_list = [unichr(x) for x in range(0x10D22, 0x10D27)]
    else:
      logging.info('NARROW SYSTEM BUILD!!!')
      self.diacritic_list = [unichr(0xd803) + unichr(0xdd00 + x) for x in range(0x22, 0x27)]

    self.base_consonant = u'\ud803\udd01'
    self.baseHexUTF16 = u'\ud803\udd01'

    self.lang_list = [
      { 'shortName': self.LanguageCode,
        'longName': self.Language,
        }
    ]
    self.encoding_font_list = encoding_font_list
    self.kb_list = [
      {
        'shortName': self.LanguageCode + '3',
        'longName': 'Rohigya doubled chars',
        'jsName': self.LanguageCode,
        'font': 'RohingyaNooriesOne',
        'instructions': ('Special instructions: ss -> tassi; '
                         +  'nn-> tana; '
                         + 'hh -> harabhay; '
                         + 'tt -> tahala; '
                         + 'shift-space -> sakin'
                         + 'doubled consonant -> tassi'
        ),
      },
      {
        'shortName': self.LanguageCode + '2',
        'longName': 'Rohigya 2 layout',
        'jsName': self.LanguageCode,
        'instructions': None,
        'font': 'RohingyaNooriesOne',
      },
      {
        'shortName': self.LanguageCode,
        'longName': 'Hanifi Rohigya Unicode',
        'jsName': self.LanguageCode,
        'instructions': None,
        'font': 'RohingyaNooriesOne',
      },
      {
        'shortName': self.LanguageCode + '_arab',
        'longName': 'Hanifi Arabic Unicode',
        'jsName': self.LanguageCode + '_arab',
        'instructions': None,
        'font': 'ScheherazadeRohingya',
      }
    ]
    self.links = links
    self.text_file_list = []
    self.unicode_font_list = unicode_font_list
    self.text_file_list = resource_list

    # Lists of test characters for the various encodings
    self.test_chars = [' '.join([unichr(x) for x in range(0x620, 0x6f9)])]

    self.dictionaryLang1 = 'rhg'
    self.dictionaryLang2 = 'en'
    self.kb1 = ''
    self.kb2 = ''

    self.dictionaryNData = [
      {'langName': self.Language, 'langNative': '',
       'languageCode': self.LanguageCode,
        'kbShortName': self.kb_list[0]['shortName'], 'kbLongName': self.Language,
        'font': { 'family': self.unicode_font_list[0]['family'],
          'longName': self.unicode_font_list[0]['longName'],
          'source':self.unicode_font_list[0]['source'],
                  },
       'direction': 'rtl',
      },
      {'langName': 'English', 'langNative': 'English',
       'languageCode': 'en',
       'kbShortName': 'en', 'kbLongName': 'English',
       'font': {'family': 'Latin',
                'longName': 'Noto Sans',
                'source': '/fonts/NotoSans-Regular.ttf'
                },
       'direction': 'ltr',
       'helptext': 'Instructions'
       },
    ]

# Trying input without explicit keyboard.
class NewKBHandler(webapp2.RequestHandler):
  def get(self):
    langInfo = self.app.config.get('langInfo')
    lang_list = [
        {'shortName':  'tst',
         'longName': 'Testing'
        },
    ]

    try:
      text_direction = langInfo.direction
    except AttributeError:
      text_direction = 'ltr'

    template_values = {
        'direction': text_direction,
        'language': langInfo.Language,
        'font_list': langInfo.unicode_font_list,
        'lang_list': langInfo.lang_list,
        'kb_list': langInfo.kb_list,
        'links': langInfo.links,
    }
    path = os.path.join(os.path.dirname(__file__), 'HTML/rhg_keyboard.html')
    self.response.out.write(template.render(path, template_values))


# Global in this file.
langInstance = langInfo()

app = webapp2.WSGIApplication(
    [('/rhg/', base.LanguagesHomeHandler),
     ('/rhg/convertUI/', base.ConvertUIHandler),
     ('/rhg/downloads/', base.Downloads),
     ('/rhg/converter/', base.ConvertHandler),
     ('/rhg/encodingRules/', base.EncodingRules),
     ('/rhg/diacritic/', base.DiacriticHandler),

     # TESTING
     ('/rhg/newkb/', NewKBHandler),

     ('/' + langInstance.LanguageCode + '/dictionaryN/', base.DictionaryN),

     ], debug=True,
    config={'langInfo': langInstance}
)
