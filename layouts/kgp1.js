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


var KGP1_LAYOUT = {
  'id': 'kgp1',
  'title': 'Kaingang 1',
  'mappings': {
    '': {
      '': '`1234567890-=' +
          'ãỹertyuiop[]\u0307' +
          'asẽfghjkó\'\u0303' +
          'áũévĩnm,./'
    },
    'c': {
      '': '{{}}¡²³£{{}}{{}}{{}}{{}}{{}}{{}}{{}}÷' +
          'qw{{}}{{}}{{}}{{}}{{}}{{}}{{}}{{}}{{}}{{}}{{}}' +
          'a{{}}d{{}}{{}}{{}}{{}}{{}}lç{{}}' +
          'zxc{{}}b{{}}{{}}{{}}{{}}¿'
    },
    's': {
      '': '\u0301!@#$%^&*()_+' +
          'ÃỸERTYUIOP{}|' +
          'ASẼFGHJKÓ\"\u0301' +
          'ÁŨÉVĨNM<>?'
    },
    'sc': {
      '': '{{}}{{}}{{}}{{}}€{{}}{{}}{{}}{{}}{{}}{{}}{{}}{{}}' +
          'QW{{}}{{}}{{}}{{}}{{}}{{}}{{}}{{}}{{}}{{}}{{}}' +
          'A{{}}D{{}}{{}}{{}}{{}}{{}}LÇ{{}}' +
          'ZXC{{}}B{{}}{{}}{{}}{{}}{{}}{{}}'
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
  'transform': {
  '\'c': 'ç',
  '\'C': 'Ç',
  }
};

// Load the layout and inform the keyboard to switch layout if necessary.
google.elements.keyboard.loadme(KGP1_LAYOUT);
kgp1 = KGP1_LAYOUT;