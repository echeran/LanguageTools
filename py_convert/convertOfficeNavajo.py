# -*- coding: utf-8 -*-

#
# Convert list of Office files (.docx, .xslx, .pptx) files from
# old text encoding to Unicode.

import os
import re
import sys

import convertOffice
import nvConversion

import convertUtil


def main(argv):

  args = convertUtil.parseArgs()
  newUnicodeFont = args.font  # "NotoSans-Regular"
  print '** args = %s' % args

  paths_to_doc = args.filenames

  FONTS_TO_CONVERT = [
      'Times New Roman Navajo',
      'Verdana Navajo',
      'Century Gothic Navajo',
  ]

  converter = nvConversion.converter(FONTS_TO_CONVERT, newUnicodeFont)

  for input in paths_to_doc:
    convertOffice.convertOffice(input, args.output_dir, converter)


if __name__ == "__main__":
  main(sys.argv)
