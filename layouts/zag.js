// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Implements Ahom keyboard based on ...
// TODO: Add reference

var ZAG_LAYOUT = {
  'id': 'zag',
  'title': "Zaghawa Beria encoded",
  'mappings': {
    '': {
      '': '{{\u0300}}1234567890-=' +
          '{{\u0301}}wertyuiop[]\\' +
          'asdfghjkl;\'' +
          'zxcvbnm,./'
    },
    's, sc': {
      '': '`1234567890{{\u0304}}=' +
          '{{\u0307}}WERTYUIOP[]\\' +
          'ASDFGHJKL;\'' +
          'ZXCVBNM,./'
    },
    'c': {
      '': '`1234567890-=' +
          'qwertyuiop[]\\' +
          'asdfghjkl;\'' +
          'zxcvbnm,./'
    },
    'l,cl': {
      '': '`1234567890-=' +
          'QWERTYUIOP[]\\' +
          'ASDFGHJKL;\'' +
          'ZXCVBNM,./'
    },
    'sl,scl': {
      '': '~!@#$%^&*()_+' +
          'qwertyuiop{}|' +
          'asdfghjkl:"' +
          'zxcvbnm<>?'
    }
  },

  // Deal with the encoded characters and diacritics
  'transform' : {
    // Macron
    '(A\u0304)': '\u00c2',
    '(a\u0304)': '\u00e2',
    '(E\u0304)': '\u00ca',
    '(e\u0304)': '\u00ea',
    '(I\u0304)': '\u00ce',
    '(i\u0304)': '\u00ee',
    '(O\u0304)': '\u00d4',
    '(o\u0304)': '\u00f4',
    '(U\u0304)': '\u00db',
    '(u\u0304)': '\u00fb',

    // Dot above
    '(E\u0307)': '\u0116',
    '(e\u0307)': '\u0117',
    '(I\u0307)': '\u0130',
  }
};

// Load the layout and inform the keyboard to switch layout if necessary.
google.elements.keyboard.loadme(ZAG_LAYOUT);
