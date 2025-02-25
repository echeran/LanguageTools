# -*- coding: utf-8 -*-
#!/usr/bin/env python

from __future__ import print_function
from __future__ import print_function
from __future__ import print_function
import decimal
import numbers
import re

import transliterate
import translit_zawgyi

# Convert Zawgyi encoded text to Unicode.

debug = True  # False


class myConvert():
  description = 'Converts Zawgyi font encoding to Unicode'

  converter = transliterate.Transliterate(
    translit_zawgyi.ZAWGYI_UNICODE_TRANSLITERATE,
    translit_zawgyi.ZAWGYI_description)

  oldFonts = ['Zawgyi', 'ZawgyiOne', 'Zawgyi2008']  # Maybe some others?

  def __init__(self, newFont=None):
      if newFont:
        self.unicodeFont = newFont
      else:
        self.unicodeFont = 'NotoSansMyanmar'
      return

  def convertText(self, textIn, fontIndex=0):
    self.convertText(textIn, False, None)

  def toLower(self, inText):
    return inText

  # Consider the font information if relevant, e.g., underlining.
  # fontInfo: a list of font data for this code, including formatting for each piece.
  def convertText(self, textIn, fontTextInfo, fontIndex=0):

    if not isinstance(textIn, basestring):
      return textIn

    if not fontTextInfo:
      return self.convertString(textIn, None, convertToLower=None)

    # Take the data from the fontTextInfo field.
    # TODO: Apply style as needed.
    convertList = []
    for item in fontTextInfo:
      if debug:
        print('++ text = %s' % item[0])

      tags = []
      for fmt in item[1]:
        loc = fmt.tag.find('}')
        tags.append(fmt.tag[loc + 1:])
        if debug:
          print(' %s ' % fmt.tag[loc+1:])

      # Convert this one, and return the result
      convertList.append(self.convertString(item[0], tags))

    print('***** CONVERT LIST = %s' % u''.join(convertList).encode('utf-8'))

    return u''.join(convertList)

  def convertString(self, textIn, fontInfo, convertToLower=False):
    transliterator = self.converter
    convertResult = transliterator.transliterate(textIn)
    return convertResult


# TODO: fix these tests to do Zawgyi!
def testConvertOld():
  # Debug!
  converter = myConvert()
  print('Texting Zawgyi convert')
  oldText = [[u'ျမန္မာ့ပညာေရးရဲ႕ ႏွစ္ ၃၀ ေလာက္ မွားယြင္းခဲ့တဲ့အမွား', []]]
  expected = u'မြန်မာ့ပညာရေးရဲ့ နှစ် ၃၀ လောက် မှားယွင်းခဲ့တဲ့အမှား'

  result = converter.oldEncodingToUnicode(oldText[0][0], fontTextInfo=None)

  if result != expected:
    print(('result = %s' % result))
    print('Zawgyi = %s' % oldText.encode('utf-8'))
    print('** Not converting Zawgyi: expected(%d) >%s<. Result(%d) = >%s<' %
          (len(expected), expected, len(result), result))
  else:
    print('  * PASSES *')


def testConvert():
  return


def main():
  testConvert()
  testConvertOld()

if __name__ == '__main__':
  main()
