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


var TA_PHONEMIC_B_LAYOUT = {
  'id': 'ta_phonemic_b',
  'title': 'தமிழ் phonemic B',
  'source': 'https://elangocheran.com/2021/02/11/d-pub-for-keyboards-for-agglutinative-languages-and-abugidas/',
  'mappings': {
    ',c': {
      '': '`1234567890-=' +
          '{{ண்}}{{ஞ்}}{{ங்}}{{எ}}{{ற்}}{{ய்}}{{உ}}{{ஐ}}{{ந்}}{{ம்}}[]\\' +
          '{{ட்}}{{ச்}}{{க்}}{{அ}}{{ன்}}{{வ்}}{{இ}}{{த்}}{{ப்}};\'' +
          '{{ஃ}}{{ஔ}}{{ஒ}}{{ர்}}{{ழ்}}{{ள்}}{{ல்}},./'
    },
    's,sc': {
      '': '~!@#$%^&*()_+' +
          '{{ஶ்ரீ}}{{ஸ்}}{{ஷ்}}{{ஏ}}TY{{ஊ}}IOP{}|' +
          '{{ஜ்}}{{ஹ்}}{{க்ஷ்}}{{ஆ}}GH{{ஈ}}KL:"' +
          'ZX{{ஓ}}VBNM<>?'
    },
    'l,cl': {
      '': '`{{௧}}{{௨}}{{௩}}{{௪}}{{௫}}{{௬}}{{௭}}{{௮}}{{௯}}{{௦}}-=' +
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

    // Consonant+Vowels
    'க்அ' : 'க',
    'க்ஆ' : 'கா',
    'க்இ' : 'கி',
    'க்ஈ' : 'கீ',
    'க்உ' : 'கு',
    'க்ஊ' : 'கூ',
    'க்எ' : 'கெ',
    'க்ஏ' : 'கே',
    'க்ஐ' : 'கை',
    'க்ஒ' : 'கொ',
    'க்ஓ' : 'கோ',
    'க்ஔ' : 'கௌ',
    'க\u001d?அ' : 'கா',
    'கி\u001d?இ' : 'கீ',
    'கு\u001d?உ' : 'கூ',
    'கெ\u001d?எ' : 'கே',
    'கொ\u001d?ஒ' : 'கோ',
    'க\u001d?ஆ' : 'கா',
    'க\u001d?இ' : 'கி',
    'க\u001d?ஈ' : 'கீ',
    'க\u001d?உ' : 'கு',
    'க\u001d?ஊ' : 'கூ',
    'க\u001d?எ' : 'கெ',
    'க\u001d?ஏ' : 'கே',
    'க\u001d?ஐ' : 'கை',
    'க\u001d?ஒ' : 'கொ',
    'க\u001d?ஓ' : 'கோ',
    'க\u001d?ஔ' : 'கௌ',
    'ங்அ' : 'ங',
    'ங்ஆ' : 'ஙா',
    'ங்இ' : 'ஙி',
    'ங்ஈ' : 'ஙீ',
    'ங்உ' : 'ஙு',
    'ங்ஊ' : 'ஙூ',
    'ங்எ' : 'ஙெ',
    'ங்ஏ' : 'ஙே',
    'ங்ஐ' : 'ஙை',
    'ங்ஒ' : 'ஙொ',
    'ங்ஓ' : 'ஙோ',
    'ங்ஔ' : 'ஙௌ',
    'ங\u001d?அ' : 'ஙா',
    'ஙி\u001d?இ' : 'ஙீ',
    'ஙு\u001d?உ' : 'ஙூ',
    'ஙெ\u001d?எ' : 'ஙே',
    'ஙொ\u001d?ஒ' : 'ஙோ',
    'ங\u001d?ஆ' : 'ஙா',
    'ங\u001d?இ' : 'ஙி',
    'ங\u001d?ஈ' : 'ஙீ',
    'ங\u001d?உ' : 'ஙு',
    'ங\u001d?ஊ' : 'ஙூ',
    'ங\u001d?எ' : 'ஙெ',
    'ங\u001d?ஏ' : 'ஙே',
    'ங\u001d?ஐ' : 'ஙை',
    'ங\u001d?ஒ' : 'ஙொ',
    'ங\u001d?ஓ' : 'ஙோ',
    'ங\u001d?ஔ' : 'ஙௌ',
    'ச்அ' : 'ச',
    'ச்ஆ' : 'சா',
    'ச்இ' : 'சி',
    'ச்ஈ' : 'சீ',
    'ச்உ' : 'சு',
    'ச்ஊ' : 'சூ',
    'ச்எ' : 'செ',
    'ச்ஏ' : 'சே',
    'ச்ஐ' : 'சை',
    'ச்ஒ' : 'சொ',
    'ச்ஓ' : 'சோ',
    'ச்ஔ' : 'சௌ',
    'ச\u001d?அ' : 'சா',
    'சி\u001d?இ' : 'சீ',
    'சு\u001d?உ' : 'சூ',
    'செ\u001d?எ' : 'சே',
    'சொ\u001d?ஒ' : 'சோ',
    'ச\u001d?ஆ' : 'சா',
    'ச\u001d?இ' : 'சி',
    'ச\u001d?ஈ' : 'சீ',
    'ச\u001d?உ' : 'சு',
    'ச\u001d?ஊ' : 'சூ',
    'ச\u001d?எ' : 'செ',
    'ச\u001d?ஏ' : 'சே',
    'ச\u001d?ஐ' : 'சை',
    'ச\u001d?ஒ' : 'சொ',
    'ச\u001d?ஓ' : 'சோ',
    'ச\u001d?ஔ' : 'சௌ',
    'ஞ்அ' : 'ஞ',
    'ஞ்ஆ' : 'ஞா',
    'ஞ்இ' : 'ஞி',
    'ஞ்ஈ' : 'ஞீ',
    'ஞ்உ' : 'ஞு',
    'ஞ்ஊ' : 'ஞூ',
    'ஞ்எ' : 'ஞெ',
    'ஞ்ஏ' : 'ஞே',
    'ஞ்ஐ' : 'ஞை',
    'ஞ்ஒ' : 'ஞொ',
    'ஞ்ஓ' : 'ஞோ',
    'ஞ்ஔ' : 'ஞௌ',
    'ஞ\u001d?அ' : 'ஞா',
    'ஞி\u001d?இ' : 'ஞீ',
    'ஞு\u001d?உ' : 'ஞூ',
    'ஞெ\u001d?எ' : 'ஞே',
    'ஞொ\u001d?ஒ' : 'ஞோ',
    'ஞ\u001d?ஆ' : 'ஞா',
    'ஞ\u001d?இ' : 'ஞி',
    'ஞ\u001d?ஈ' : 'ஞீ',
    'ஞ\u001d?உ' : 'ஞு',
    'ஞ\u001d?ஊ' : 'ஞூ',
    'ஞ\u001d?எ' : 'ஞெ',
    'ஞ\u001d?ஏ' : 'ஞே',
    'ஞ\u001d?ஐ' : 'ஞை',
    'ஞ\u001d?ஒ' : 'ஞொ',
    'ஞ\u001d?ஓ' : 'ஞோ',
    'ஞ\u001d?ஔ' : 'ஞௌ',
    'ட்அ' : 'ட',
    'ட்ஆ' : 'டா',
    'ட்இ' : 'டி',
    'ட்ஈ' : 'டீ',
    'ட்உ' : 'டு',
    'ட்ஊ' : 'டூ',
    'ட்எ' : 'டெ',
    'ட்ஏ' : 'டே',
    'ட்ஐ' : 'டை',
    'ட்ஒ' : 'டொ',
    'ட்ஓ' : 'டோ',
    'ட்ஔ' : 'டௌ',
    'ட\u001d?அ' : 'டா',
    'டி\u001d?இ' : 'டீ',
    'டு\u001d?உ' : 'டூ',
    'டெ\u001d?எ' : 'டே',
    'டொ\u001d?ஒ' : 'டோ',
    'ட\u001d?ஆ' : 'டா',
    'ட\u001d?இ' : 'டி',
    'ட\u001d?ஈ' : 'டீ',
    'ட\u001d?உ' : 'டு',
    'ட\u001d?ஊ' : 'டூ',
    'ட\u001d?எ' : 'டெ',
    'ட\u001d?ஏ' : 'டே',
    'ட\u001d?ஐ' : 'டை',
    'ட\u001d?ஒ' : 'டொ',
    'ட\u001d?ஓ' : 'டோ',
    'ட\u001d?ஔ' : 'டௌ',
    'ண்அ' : 'ண',
    'ண்ஆ' : 'ணா',
    'ண்இ' : 'ணி',
    'ண்ஈ' : 'ணீ',
    'ண்உ' : 'ணு',
    'ண்ஊ' : 'ணூ',
    'ண்எ' : 'ணெ',
    'ண்ஏ' : 'ணே',
    'ண்ஐ' : 'ணை',
    'ண்ஒ' : 'ணொ',
    'ண்ஓ' : 'ணோ',
    'ண்ஔ' : 'ணௌ',
    'ண\u001d?அ' : 'ணா',
    'ணி\u001d?இ' : 'ணீ',
    'ணு\u001d?உ' : 'ணூ',
    'ணெ\u001d?எ' : 'ணே',
    'ணொ\u001d?ஒ' : 'ணோ',
    'ண\u001d?ஆ' : 'ணா',
    'ண\u001d?இ' : 'ணி',
    'ண\u001d?ஈ' : 'ணீ',
    'ண\u001d?உ' : 'ணு',
    'ண\u001d?ஊ' : 'ணூ',
    'ண\u001d?எ' : 'ணெ',
    'ண\u001d?ஏ' : 'ணே',
    'ண\u001d?ஐ' : 'ணை',
    'ண\u001d?ஒ' : 'ணொ',
    'ண\u001d?ஓ' : 'ணோ',
    'ண\u001d?ஔ' : 'ணௌ',
    'த்அ' : 'த',
    'த்ஆ' : 'தா',
    'த்இ' : 'தி',
    'த்ஈ' : 'தீ',
    'த்உ' : 'து',
    'த்ஊ' : 'தூ',
    'த்எ' : 'தெ',
    'த்ஏ' : 'தே',
    'த்ஐ' : 'தை',
    'த்ஒ' : 'தொ',
    'த்ஓ' : 'தோ',
    'த்ஔ' : 'தௌ',
    'த\u001d?அ' : 'தா',
    'தி\u001d?இ' : 'தீ',
    'து\u001d?உ' : 'தூ',
    'தெ\u001d?எ' : 'தே',
    'தொ\u001d?ஒ' : 'தோ',
    'த\u001d?ஆ' : 'தா',
    'த\u001d?இ' : 'தி',
    'த\u001d?ஈ' : 'தீ',
    'த\u001d?உ' : 'து',
    'த\u001d?ஊ' : 'தூ',
    'த\u001d?எ' : 'தெ',
    'த\u001d?ஏ' : 'தே',
    'த\u001d?ஐ' : 'தை',
    'த\u001d?ஒ' : 'தொ',
    'த\u001d?ஓ' : 'தோ',
    'த\u001d?ஔ' : 'தௌ',
    'ந்அ' : 'ந',
    'ந்ஆ' : 'நா',
    'ந்இ' : 'நி',
    'ந்ஈ' : 'நீ',
    'ந்உ' : 'நு',
    'ந்ஊ' : 'நூ',
    'ந்எ' : 'நெ',
    'ந்ஏ' : 'நே',
    'ந்ஐ' : 'நை',
    'ந்ஒ' : 'நொ',
    'ந்ஓ' : 'நோ',
    'ந்ஔ' : 'நௌ',
    'ந\u001d?அ' : 'நா',
    'நி\u001d?இ' : 'நீ',
    'நு\u001d?உ' : 'நூ',
    'நெ\u001d?எ' : 'நே',
    'நொ\u001d?ஒ' : 'நோ',
    'ந\u001d?ஆ' : 'நா',
    'ந\u001d?இ' : 'நி',
    'ந\u001d?ஈ' : 'நீ',
    'ந\u001d?உ' : 'நு',
    'ந\u001d?ஊ' : 'நூ',
    'ந\u001d?எ' : 'நெ',
    'ந\u001d?ஏ' : 'நே',
    'ந\u001d?ஐ' : 'நை',
    'ந\u001d?ஒ' : 'நொ',
    'ந\u001d?ஓ' : 'நோ',
    'ந\u001d?ஔ' : 'நௌ',
    'ப்அ' : 'ப',
    'ப்ஆ' : 'பா',
    'ப்இ' : 'பி',
    'ப்ஈ' : 'பீ',
    'ப்உ' : 'பு',
    'ப்ஊ' : 'பூ',
    'ப்எ' : 'பெ',
    'ப்ஏ' : 'பே',
    'ப்ஐ' : 'பை',
    'ப்ஒ' : 'பொ',
    'ப்ஓ' : 'போ',
    'ப்ஔ' : 'பௌ',
    'ப\u001d?அ' : 'பா',
    'பி\u001d?இ' : 'பீ',
    'பு\u001d?உ' : 'பூ',
    'பெ\u001d?எ' : 'பே',
    'பொ\u001d?ஒ' : 'போ',
    'ப\u001d?ஆ' : 'பா',
    'ப\u001d?இ' : 'பி',
    'ப\u001d?ஈ' : 'பீ',
    'ப\u001d?உ' : 'பு',
    'ப\u001d?ஊ' : 'பூ',
    'ப\u001d?எ' : 'பெ',
    'ப\u001d?ஏ' : 'பே',
    'ப\u001d?ஐ' : 'பை',
    'ப\u001d?ஒ' : 'பொ',
    'ப\u001d?ஓ' : 'போ',
    'ப\u001d?ஔ' : 'பௌ',
    'ம்அ' : 'ம',
    'ம்ஆ' : 'மா',
    'ம்இ' : 'மி',
    'ம்ஈ' : 'மீ',
    'ம்உ' : 'மு',
    'ம்ஊ' : 'மூ',
    'ம்எ' : 'மெ',
    'ம்ஏ' : 'மே',
    'ம்ஐ' : 'மை',
    'ம்ஒ' : 'மொ',
    'ம்ஓ' : 'மோ',
    'ம்ஔ' : 'மௌ',
    'ம\u001d?அ' : 'மா',
    'மி\u001d?இ' : 'மீ',
    'மு\u001d?உ' : 'மூ',
    'மெ\u001d?எ' : 'மே',
    'மொ\u001d?ஒ' : 'மோ',
    'ம\u001d?ஆ' : 'மா',
    'ம\u001d?இ' : 'மி',
    'ம\u001d?ஈ' : 'மீ',
    'ம\u001d?உ' : 'மு',
    'ம\u001d?ஊ' : 'மூ',
    'ம\u001d?எ' : 'மெ',
    'ம\u001d?ஏ' : 'மே',
    'ம\u001d?ஐ' : 'மை',
    'ம\u001d?ஒ' : 'மொ',
    'ம\u001d?ஓ' : 'மோ',
    'ம\u001d?ஔ' : 'மௌ',
    'ய்அ' : 'ய',
    'ய்ஆ' : 'யா',
    'ய்இ' : 'யி',
    'ய்ஈ' : 'யீ',
    'ய்உ' : 'யு',
    'ய்ஊ' : 'யூ',
    'ய்எ' : 'யெ',
    'ய்ஏ' : 'யே',
    'ய்ஐ' : 'யை',
    'ய்ஒ' : 'யொ',
    'ய்ஓ' : 'யோ',
    'ய்ஔ' : 'யௌ',
    'ய\u001d?அ' : 'யா',
    'யி\u001d?இ' : 'யீ',
    'யு\u001d?உ' : 'யூ',
    'யெ\u001d?எ' : 'யே',
    'யொ\u001d?ஒ' : 'யோ',
    'ய\u001d?ஆ' : 'யா',
    'ய\u001d?இ' : 'யி',
    'ய\u001d?ஈ' : 'யீ',
    'ய\u001d?உ' : 'யு',
    'ய\u001d?ஊ' : 'யூ',
    'ய\u001d?எ' : 'யெ',
    'ய\u001d?ஏ' : 'யே',
    'ய\u001d?ஐ' : 'யை',
    'ய\u001d?ஒ' : 'யொ',
    'ய\u001d?ஓ' : 'யோ',
    'ய\u001d?ஔ' : 'யௌ',
    'ர்அ' : 'ர',
    'ர்ஆ' : 'ரா',
    'ர்இ' : 'ரி',
    'ர்ஈ' : 'ரீ',
    'ர்உ' : 'ரு',
    'ர்ஊ' : 'ரூ',
    'ர்எ' : 'ரெ',
    'ர்ஏ' : 'ரே',
    'ர்ஐ' : 'ரை',
    'ர்ஒ' : 'ரொ',
    'ர்ஓ' : 'ரோ',
    'ர்ஔ' : 'ரௌ',
    'ர\u001d?அ' : 'ரா',
    'ரி\u001d?இ' : 'ரீ',
    'ரு\u001d?உ' : 'ரூ',
    'ரெ\u001d?எ' : 'ரே',
    'ரொ\u001d?ஒ' : 'ரோ',
    'ர\u001d?ஆ' : 'ரா',
    'ர\u001d?இ' : 'ரி',
    'ர\u001d?ஈ' : 'ரீ',
    'ர\u001d?உ' : 'ரு',
    'ர\u001d?ஊ' : 'ரூ',
    'ர\u001d?எ' : 'ரெ',
    'ர\u001d?ஏ' : 'ரே',
    'ர\u001d?ஐ' : 'ரை',
    'ர\u001d?ஒ' : 'ரொ',
    'ர\u001d?ஓ' : 'ரோ',
    'ர\u001d?ஔ' : 'ரௌ',
    'ல்அ' : 'ல',
    'ல்ஆ' : 'லா',
    'ல்இ' : 'லி',
    'ல்ஈ' : 'லீ',
    'ல்உ' : 'லு',
    'ல்ஊ' : 'லூ',
    'ல்எ' : 'லெ',
    'ல்ஏ' : 'லே',
    'ல்ஐ' : 'லை',
    'ல்ஒ' : 'லொ',
    'ல்ஓ' : 'லோ',
    'ல்ஔ' : 'லௌ',
    'ல\u001d?அ' : 'லா',
    'லி\u001d?இ' : 'லீ',
    'லு\u001d?உ' : 'லூ',
    'லெ\u001d?எ' : 'லே',
    'லொ\u001d?ஒ' : 'லோ',
    'ல\u001d?ஆ' : 'லா',
    'ல\u001d?இ' : 'லி',
    'ல\u001d?ஈ' : 'லீ',
    'ல\u001d?உ' : 'லு',
    'ல\u001d?ஊ' : 'லூ',
    'ல\u001d?எ' : 'லெ',
    'ல\u001d?ஏ' : 'லே',
    'ல\u001d?ஐ' : 'லை',
    'ல\u001d?ஒ' : 'லொ',
    'ல\u001d?ஓ' : 'லோ',
    'ல\u001d?ஔ' : 'லௌ',
    'வ்அ' : 'வ',
    'வ்ஆ' : 'வா',
    'வ்இ' : 'வி',
    'வ்ஈ' : 'வீ',
    'வ்உ' : 'வு',
    'வ்ஊ' : 'வூ',
    'வ்எ' : 'வெ',
    'வ்ஏ' : 'வே',
    'வ்ஐ' : 'வை',
    'வ்ஒ' : 'வொ',
    'வ்ஓ' : 'வோ',
    'வ்ஔ' : 'வௌ',
    'வ\u001d?அ' : 'வா',
    'வி\u001d?இ' : 'வீ',
    'வு\u001d?உ' : 'வூ',
    'வெ\u001d?எ' : 'வே',
    'வொ\u001d?ஒ' : 'வோ',
    'வ\u001d?ஆ' : 'வா',
    'வ\u001d?இ' : 'வி',
    'வ\u001d?ஈ' : 'வீ',
    'வ\u001d?உ' : 'வு',
    'வ\u001d?ஊ' : 'வூ',
    'வ\u001d?எ' : 'வெ',
    'வ\u001d?ஏ' : 'வே',
    'வ\u001d?ஐ' : 'வை',
    'வ\u001d?ஒ' : 'வொ',
    'வ\u001d?ஓ' : 'வோ',
    'வ\u001d?ஔ' : 'வௌ',
    'ழ்அ' : 'ழ',
    'ழ்ஆ' : 'ழா',
    'ழ்இ' : 'ழி',
    'ழ்ஈ' : 'ழீ',
    'ழ்உ' : 'ழு',
    'ழ்ஊ' : 'ழூ',
    'ழ்எ' : 'ழெ',
    'ழ்ஏ' : 'ழே',
    'ழ்ஐ' : 'ழை',
    'ழ்ஒ' : 'ழொ',
    'ழ்ஓ' : 'ழோ',
    'ழ்ஔ' : 'ழௌ',
    'ழ\u001d?அ' : 'ழா',
    'ழி\u001d?இ' : 'ழீ',
    'ழு\u001d?உ' : 'ழூ',
    'ழெ\u001d?எ' : 'ழே',
    'ழொ\u001d?ஒ' : 'ழோ',
    'ழ\u001d?ஆ' : 'ழா',
    'ழ\u001d?இ' : 'ழி',
    'ழ\u001d?ஈ' : 'ழீ',
    'ழ\u001d?உ' : 'ழு',
    'ழ\u001d?ஊ' : 'ழூ',
    'ழ\u001d?எ' : 'ழெ',
    'ழ\u001d?ஏ' : 'ழே',
    'ழ\u001d?ஐ' : 'ழை',
    'ழ\u001d?ஒ' : 'ழொ',
    'ழ\u001d?ஓ' : 'ழோ',
    'ழ\u001d?ஔ' : 'ழௌ',
    'ள்அ' : 'ள',
    'ள்ஆ' : 'ளா',
    'ள்இ' : 'ளி',
    'ள்ஈ' : 'ளீ',
    'ள்உ' : 'ளு',
    'ள்ஊ' : 'ளூ',
    'ள்எ' : 'ளெ',
    'ள்ஏ' : 'ளே',
    'ள்ஐ' : 'ளை',
    'ள்ஒ' : 'ளொ',
    'ள்ஓ' : 'ளோ',
    'ள்ஔ' : 'ளௌ',
    'ள\u001d?அ' : 'ளா',
    'ளி\u001d?இ' : 'ளீ',
    'ளு\u001d?உ' : 'ளூ',
    'ளெ\u001d?எ' : 'ளே',
    'ளொ\u001d?ஒ' : 'ளோ',
    'ள\u001d?ஆ' : 'ளா',
    'ள\u001d?இ' : 'ளி',
    'ள\u001d?ஈ' : 'ளீ',
    'ள\u001d?உ' : 'ளு',
    'ள\u001d?ஊ' : 'ளூ',
    'ள\u001d?எ' : 'ளெ',
    'ள\u001d?ஏ' : 'ளே',
    'ள\u001d?ஐ' : 'ளை',
    'ள\u001d?ஒ' : 'ளொ',
    'ள\u001d?ஓ' : 'ளோ',
    'ள\u001d?ஔ' : 'ளௌ',
    'ற்அ' : 'ற',
    'ற்ஆ' : 'றா',
    'ற்இ' : 'றி',
    'ற்ஈ' : 'றீ',
    'ற்உ' : 'று',
    'ற்ஊ' : 'றூ',
    'ற்எ' : 'றெ',
    'ற்ஏ' : 'றே',
    'ற்ஐ' : 'றை',
    'ற்ஒ' : 'றொ',
    'ற்ஓ' : 'றோ',
    'ற்ஔ' : 'றௌ',
    'ற\u001d?அ' : 'றா',
    'றி\u001d?இ' : 'றீ',
    'று\u001d?உ' : 'றூ',
    'றெ\u001d?எ' : 'றே',
    'றொ\u001d?ஒ' : 'றோ',
    'ற\u001d?ஆ' : 'றா',
    'ற\u001d?இ' : 'றி',
    'ற\u001d?ஈ' : 'றீ',
    'ற\u001d?உ' : 'று',
    'ற\u001d?ஊ' : 'றூ',
    'ற\u001d?எ' : 'றெ',
    'ற\u001d?ஏ' : 'றே',
    'ற\u001d?ஐ' : 'றை',
    'ற\u001d?ஒ' : 'றொ',
    'ற\u001d?ஓ' : 'றோ',
    'ற\u001d?ஔ' : 'றௌ',
    'ன்அ' : 'ன',
    'ன்ஆ' : 'னா',
    'ன்இ' : 'னி',
    'ன்ஈ' : 'னீ',
    'ன்உ' : 'னு',
    'ன்ஊ' : 'னூ',
    'ன்எ' : 'னெ',
    'ன்ஏ' : 'னே',
    'ன்ஐ' : 'னை',
    'ன்ஒ' : 'னொ',
    'ன்ஓ' : 'னோ',
    'ன்ஔ' : 'னௌ',
    'ன\u001d?அ' : 'னா',
    'னி\u001d?இ' : 'னீ',
    'னு\u001d?உ' : 'னூ',
    'னெ\u001d?எ' : 'னே',
    'னொ\u001d?ஒ' : 'னோ',
    'ன\u001d?ஆ' : 'னா',
    'ன\u001d?இ' : 'னி',
    'ன\u001d?ஈ' : 'னீ',
    'ன\u001d?உ' : 'னு',
    'ன\u001d?ஊ' : 'னூ',
    'ன\u001d?எ' : 'னெ',
    'ன\u001d?ஏ' : 'னே',
    'ன\u001d?ஐ' : 'னை',
    'ன\u001d?ஒ' : 'னொ',
    'ன\u001d?ஓ' : 'னோ',
    'ன\u001d?ஔ' : 'னௌ',

    // Vowels
    'அஅ': 'ஆ',
    'இஇ': 'ஈ',
    'உஉ': 'ஊ',
    'எஎ': 'ஏ',
    'ஒஒ': 'ஓ',

    // Grantha
    'ஷ்அ' : 'ஷ',
    'ஷ்ஆ' : 'ஷா',
    'ஷ்இ' : 'ஷி',
    'ஷ்ஈ' : 'ஷீ',
    'ஷ்உ' : 'ஷு',
    'ஷ்ஊ' : 'ஷூ',
    'ஷ்எ' : 'ஷெ',
    'ஷ்ஏ' : 'ஷே',
    'ஷ்ஐ' : 'ஷை',
    'ஷ்ஒ' : 'ஷொ',
    'ஷ்ஓ' : 'ஷோ',
    'ஷ்ஔ' : 'ஷௌ',
    'ஷ\u001d?அ' : 'ஷா',
    'ஷி\u001d?இ' : 'ஷீ',
    'ஷு\u001d?உ' : 'ஷூ',
    'ஷெ\u001d?எ' : 'ஷே',
    'ஷொ\u001d?ஒ' : 'ஷோ',
    'ஷ\u001d?ஆ' : 'ஷா',
    'ஷ\u001d?இ' : 'ஷி',
    'ஷ\u001d?ஈ' : 'ஷீ',
    'ஷ\u001d?உ' : 'ஷு',
    'ஷ\u001d?ஊ' : 'ஷூ',
    'ஷ\u001d?எ' : 'ஷெ',
    'ஷ\u001d?ஏ' : 'ஷே',
    'ஷ\u001d?ஐ' : 'ஷை',
    'ஷ\u001d?ஒ' : 'ஷொ',
    'ஷ\u001d?ஓ' : 'ஷோ',
    'ஷ\u001d?ஔ' : 'ஷௌ',
    'ஜ்அ' : 'ஜ',
    'ஜ்ஆ' : 'ஜா',
    'ஜ்இ' : 'ஜி',
    'ஜ்ஈ' : 'ஜீ',
    'ஜ்உ' : 'ஜு',
    'ஜ்ஊ' : 'ஜூ',
    'ஜ்எ' : 'ஜெ',
    'ஜ்ஏ' : 'ஜே',
    'ஜ்ஐ' : 'ஜை',
    'ஜ்ஒ' : 'ஜொ',
    'ஜ்ஓ' : 'ஜோ',
    'ஜ்ஔ' : 'ஜௌ',
    'ஜ\u001d?அ' : 'ஜா',
    'ஜி\u001d?இ' : 'ஜீ',
    'ஜு\u001d?உ' : 'ஜூ',
    'ஜெ\u001d?எ' : 'ஜே',
    'ஜொ\u001d?ஒ' : 'ஜோ',
    'ஜ\u001d?அ' : 'ஜா',
    'ஜ\u001d?ஆ' : 'ஜ',
    'ஜ\u001d?இ' : 'ஜி',
    'ஜ\u001d?ஈ' : 'ஜீ',
    'ஜ\u001d?உ' : 'ஜு',
    'ஜ\u001d?ஊ' : 'ஜூ',
    'ஜ\u001d?எ' : 'ஜெ',
    'ஜ\u001d?ஏ' : 'ஜே',
    'ஜ\u001d?ஐ' : 'ஜை',
    'ஜ\u001d?ஒ' : 'ஜொ',
    'ஜ\u001d?ஓ' : 'ஜோ',
    'ஜ\u001d?ஔ' : 'ஜௌ',
    'ஸ்அ' : 'ஸ',
    'ஸ்ஆ' : 'ஸா',
    'ஸ்இ' : 'ஸி',
    'ஸ்ஈ' : 'ஸீ',
    'ஸ்உ' : 'ஸு',
    'ஸ்ஊ' : 'ஸூ',
    'ஸ்எ' : 'ஸெ',
    'ஸ்ஏ' : 'ஸே',
    'ஸ்ஐ' : 'ஸை',
    'ஸ்ஒ' : 'ஸொ',
    'ஸ்ஓ' : 'ஸோ',
    'ஸ்ஔ' : 'ஸௌ',
    'ஸ\u001d?அ' : 'ஸா',
    'ஸி\u001d?இ' : 'ஸீ',
    'ஸு\u001d?உ' : 'ஸூ',
    'ஸெ\u001d?எ' : 'ஸே',
    'ஸொ\u001d?ஒ' : 'ஸோ',
    'ஸ\u001d?ஆ' : 'ஸா',
    'ஸ\u001d?இ' : 'ஸி',
    'ஸ\u001d?ஈ' : 'ஸீ',
    'ஸ\u001d?உ' : 'ஸு',
    'ஸ\u001d?ஊ' : 'ஸூ',
    'ஸ\u001d?எ' : 'ஸெ',
    'ஸ\u001d?ஏ' : 'ஸே',
    'ஸ\u001d?ஐ' : 'ஸை',
    'ஸ\u001d?ஒ' : 'ஸொ',
    'ஸ\u001d?ஓ' : 'ஸோ',
    'ஸ\u001d?ஔ' : 'ஸௌ',
    'ஹ்அ' : 'ஹ',
    'ஹ்ஆ' : 'ஹா',
    'ஹ்இ' : 'ஹி',
    'ஹ்ஈ' : 'ஹீ',
    'ஹ்உ' : 'ஹு',
    'ஹ்ஊ' : 'ஹூ',
    'ஹ்எ' : 'ஹெ',
    'ஹ்ஏ' : 'ஹே',
    'ஹ்ஐ' : 'ஹை',
    'ஹ்ஒ' : 'ஹொ',
    'ஹ்ஓ' : 'ஹோ',
    'ஹ்ஔ' : 'ஹௌ',
    'ஹ\u001d?அ' : 'ஹா',
    'ஹி\u001d?இ' : 'ஹீ',
    'ஹு\u001d?உ' : 'ஹூ',
    'ஹெ\u001d?எ' : 'ஹே',
    'ஹொ\u001d?ஒ' : 'ஹோ',
    'ஹ\u001d?ஆ' : 'ஹா',
    'ஹ\u001d?இ' : 'ஹி',
    'ஹ\u001d?ஈ' : 'ஹீ',
    'ஹ\u001d?உ' : 'ஹு',
    'ஹ\u001d?ஊ' : 'ஹூ',
    'ஹ\u001d?எ' : 'ஹெ',
    'ஹ\u001d?ஏ' : 'ஹே',
    'ஹ\u001d?ஐ' : 'ஹை',
    'ஹ\u001d?ஒ' : 'ஹொ',
    'ஹ\u001d?ஓ' : 'ஹோ',
    'ஹ\u001d?ஔ' : 'ஹௌ',

    },
//  'historyPruneRegex': '[ptkcmnsywlrš]?w?[ioaIOA]?'
};

// Load the layout and inform the keyboard to switch layout if necessary.
google.elements.keyboard.loadme(TA_PHONEMIC_B_LAYOUT);
let ta_phonemic_b = TA_PHONEMIC_B_LAYOUT;
