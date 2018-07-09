# -*- coding: utf-8 -*-

#
# Convert list of Office files (.docx, .xslx, .pptx) files from
# old text encoding to Unicode.

import os
import re
import sys

import convertOffice
import myConversion

import convertUtil


def main(argv):

  args = convertUtil.parseArgs()
  newUnicodeFont = args.font  # "NotoSans-Regular"
  print '** args = %s' % args

  paths_to_doc = args.filenames

  print('Args = %s'% args)

  FONTS_TO_CONVERT = ['Oneida', ]

  converter = myConversion.myConvert()  # An object

  for input in paths_to_doc:
    convertOffice.convertOffice(input, args.output_dir,
                                converter,
                                FONTS_TO_CONVERT, newUnicodeFont)

if __name__ == "__main__":
  main(sys.argv)
