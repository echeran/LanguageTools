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


var HNJ_LAYOUT = {
  'id': 'hnj',
  'title': 'Green Hmong',
  'mappings': {
    ',c': {
      '': '`{{\ud838\udd41}}{{\ud838\udd42}}{{\ud838\udd43}}{{\ud838\udd44}}{{\ud838\udd45}}{{\ud838\udd46}}{{\ud838\udd47}}{{\ud838\udd48}}{{\ud838\udd49}}{{\ud838\udd40}}-=' +
          'qwertyuiop{}\\' +
          '{{\ud838\udd24}}{{\ud838\udd26}}{{\ud838\udd0f}}{{-}}{' +
	    '{\ud838\udd01}}{{\ud838\udd04}}{{\ud838\udd14}}{{\ud838\udd0e}}{{\ud838\udd09}};{{\ud838\udd39}}' +
          '{{\ud838\udd6b}}x{{\ud838\udd08}}{{\ud838\udd12}}{{\ud838\udd1c}}n{{\ud838\udd00}},./'
    },
    's,sc': {
      '': '~!{{\ud838\udd4f}}#{{\ud838\udd4e}}%^&*()_+' +
          'QWERTYUIOP{{\ud838\udd3a}}{{\ud838\udd3b}}\\' +
          '{{\ud838\udd25}}{{\ud838\uddba}}{{\ud838\udd1d}}{{\ud838\udd35}}{{\ud838\udd13}}{{\ud838\udd1f}}{{\ud838\udd0d}}{{\ud838\udd07}}{{\ud838\udd23}};\"' +
          '{{\ud838\udd38}}XC{{\ud838\udd15}}{{\ud838\udd1e}}{{\ud838\udd22}}{{\ud838\udd20}}{{\ud838\udd37}}{{\ud838\udd3c}}?'
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
    '^': '^',  // Placeholder
  }
};

// Load the layout and inform the keyboard to switch layout if necessary.
google.elements.keyboard.loadme(HNJ_LAYOUT);
