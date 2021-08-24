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

// Mingrelian in Latin script

var XMF_LATN_LAYOUT = {
  'id': 'xmf_Latn',
  'title': 'margaluri nina',
  'mappings': {
    ',c': {
      '': '`1234567890-=' +
          '{{ç̌}}ʤertyuiop{{p̌}}{{t̆}}ƨ' +
          'asd{{ǩ}}ghjklɣꞇ' +
          '{{ž}}x{{ç}}vbnm,.{{ş}}'
    },
    's,sc': {
      '': '~!@#$%^&*()_+' +
          '{{Ç̌}}ʤERTYUIOP{{P̌}}{{T̆}}Ƨ' +
          'ASD{{Ǩ}}GHJKLƔꞆ' +
          '{{Ž}}X{{Ç}}VBNM,.{{Ş}}'
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
    '^': '^',  // Placeholder
  }
};

// Load the layout and inform the keyboard to switch layout if necessary.
google.elements.keyboard.loadme(XMF_LATN_LAYOUT);
xmf_Latn = XMF_LATN_LAYOUT;
