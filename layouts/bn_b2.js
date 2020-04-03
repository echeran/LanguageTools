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


var BN2_LAYOUT = {
  'id': 'bn_b2',
  'title': 'Bangali',
  'mappings': {
    ',c': {
      '': '`১২৩৪৫৬৭৮৯০-=' +
          'ঙযডপটচজহগড়[]ৎ' +
          'ৃু{{ি\u200C}}া্বকতদ;\'' +
          '{{্র}}ও{{ে\u200C}}রনসম,./'
    },
    's,sc': {
      '': '~!@#৳%^ঁ*()_+' +
          'ংয়ঢফঠছঝঞঘঢ়{}ঃ' +
          '{{র্}}ূীঅ।ভখথধ:\"' +
          '{{্}}{{ৗ}}{{ৈ\u200C}}লণষশ<>?' +
          '\u200c'
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
    '([\u09c7\u09c8\u09bf\u09c8\u09cb\u09cc])\u200C([\u0993-\u09b9\u09ce\u09dc-\u09df])([\u09cd]?)': '$2$1$3',
    '\u09c7\u001d\u09d7': '\u09cc',
    '\u0981\u09c3': '\u09c3\u0981',
    '\u09c7\u09cb': '\u09cb',
    '\u09C8\u09CD\u001d\u09AF': '\u200c\u09CD\u09AF\u09C8'  // Unsure of this one
  }
};

// Load the layout and inform the keyboard to switch layout if necessary.
google.elements.keyboard.loadme(BN2_LAYOUT);
