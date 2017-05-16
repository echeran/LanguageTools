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

// Implements S'gaw Karen keyboard based on Ryan Foster's 2012 work 
// in KarenStandard.kmn
// TODO: Add reference

var KSW_LAYOUT = {
  'id': 'ksw',
  'title': "S'gaw Karen ** NEEDS WORK!",
  'mappings': {
    '': {
      '': '`\u1041\u1042\u1043\u1044\u1045\u1046\u1047\u1048\u1049\u1040-=' +
          '\u1006\u1010\u1014\u1019\u1021\u101a' +
          '\u101b\u101E\u1005\u101F{\\' +
          '\u1037\u1036\u1062\u102e\u102d\u1032\u1015\u1063\u1064\u1062\u1038\u1012' +
          '\u1004\u1011\u1001\u1018\u1003\u1016\u102c,.\u2013' +
           '\u200b'
    },
    's, sc': {
      '': '~!@#$%^&*()_+' +
          '\u25CC\u00A3\u20AC\u0E3F' +
          '{}\u1000\u101c\u101D\u1061\u1027}|' +
          '\u103c\u103e\u103b\u1060\u103d\u103a\u102f\u1030\u102b:"' +
          '\u1007:/<>\u100a\u2014\'\u2022?' + '\u0020'
    },
    'c': {
      '': '`1234567890-=' +
          'qwertyuiop[]\\' +
          'asdfghjkl;\'' +
          'zxcvbnm,./'
    },    'l,cl': {
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
  'transform': {
    '\u200b\u200b' : '\u200b',
  },
};

// Load the layout and inform the keyboard to switch layout if necessary.
google.elements.keyboard.loadme(KSW_LAYOUT);
