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

// Implements keyboard with phonetic characters for Otomanguean languages.
// https://en.wikipedia.org/wiki/Oto-Manguean_languages

var OMQ3_LAYOUT = {
  'id': 'omq3',
  'title': 'Chatino small alpha diacritics',
  'mappings': {
    '': {
      '': '{{\u0363}}{{\u1de8}}{{\u0368}}{{\u0369}}{{\u0364}}{{\u1deb}}{{\u1dda}}{{\u036a}}' +
           '{{\u0365}}{{\u0365}}{{\u1ddc}}{{\u1ddd}}{{\u036b}}' +
          'qwertyuiop[]\\' +
          'asdfghjkl;\'' +
          'zxcvbnm,./'
    },
    's': {
      '': '~!@#$%^&*()_+' +
          'QWERTYUIOP{}|' +
          'ASDFGHJKL:"' +
          'ZXCVBNM<>?'
    },
    'c': {
      '': '`1234567890-=' +
          'qwᵉrᵗᵞᵘiᵒᵖ[]\\' +
          'ᵃsᵈfᵍhjᵏl;\'' +
          'zxcᵛᵇnᵐ,./'
    },
    'sc': {
      '': '~!@#$%^&*()_+' +
          'QᵂᴱᴿᵀYᵁᴵᴼᴾ{}|' +
          'ᴬSᴰFᴳᴴᴶᴷᴸ:"' +
          'ZXCVᴮᴺᴹ<>?'
    },
    'l,cl': {
      '': '`1234567890-=' +
          'qwertyuiop[]\\' +
          'asdfghjkl;\'' +
          'zxcvbnm,./'
    },
    'sl,scl': {
      '': '~!@#$%^&*()_+' +
          'QWERTYUIOP{}|' +
          'ASDFGHJKL:"' +
          'ZXCVBNM<>?'
    }
  },

};

// Load the layout and inform the keyboard to switch layout if necessary.
google.elements.keyboard.loadme(OMQ3_LAYOUT);
omq3 = OMQ3_LAYOUT;