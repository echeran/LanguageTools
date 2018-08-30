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

//http://www.languagegeek.com/algon/keyboards/keymap_menominee.html
var MEZ_LAYOUT = {
  'id': 'mez',
  'title': 'Oma͞eqnomenew Touch-type',
  'mappings': {
    ',c': {
      '': '`1234567890-=' +
          'qwertyuiop{}|' +
          'as{{ae}}\u0304ghjkl:"' +
          'zxcvbnm<>?'
    },
    's,sc': {
      '': '~!@#$%^&*()_+' +
          'QWERTYUIOP[]\\' +
          'AS{{AE}}FGHJKL;\'' +
          'ZXCVBNM,./'
    },
    'l,cl': {
      '': '`1234567890-=' +
          'qwertyuiop{}|' +
          'asdfghjkl:"' +
          'zxcvbnm<>?'
    },
    'sl,scl': {
      '': '~!@#$%^&*()_+' +
          'QWERTYUIOP[]\\' +
          'ASDFGHJKL;\'' +
          'ZXCVBNM,./'
    }
  },
  'transform': {
    '([aA])([eE])\u0304': '$1\u035e$2\u035e',  // For ae with macron
  }
};

// Load the layout and inform the keyboard to switch layout if necessary.
google.elements.keyboard.loadme(MEZ_LAYOUT);
