# -*- coding: utf-8 -*-

columns = ['GamWin', 'Lakhum Unicode', 'Lakhum PUA']

gamWin_convert_test_data = [
    ['ac', '𖩵', ''],
    ['ak', '𖩴𖪠', ''],
    ['alc', '𖩵𖪮', ''],
    ['alx', '𖩷𖪮', ''],
    ['alz', '𖩴𖪮', ''],
    ['amc', '𖩵𖪫', ''],
    ['amx', '𖩷𖪫', ''],
    ['amz', '𖩴𖪫', ''],
    ['anc', '𖩵𖪬', ''],
    ['angc', '𖩵𖪐', ''],
    ['angx', '𖩷𖪐', ''],
    ['angz', '𖩴𖪐', ''],
    ['anx', '𖩷𖪬', ''],
    ['anz', '𖩴𖪬', ''],
    ['ap', '𖩴𖪧', ''],
    ['aq', '𖩶', ''],
    ['arc', '𖩵𖪲', ''],
    ['arx', '𖩷𖪲', ''],
    ['arz', '𖩴𖪲', ''],
    ['at', '𖩴𖪰', ''],
    ['auc', '𖩵𖪅', ''],
    ['auk', '𖩴𖪄𖪠', ''],
    ['aungc', '𖩵𖪅𖪐', ''],
    ['aungx', '𖩷𖪇𖪐', ''],
    ['aungz', '𖩴𖪄𖪐', ''],
    ['auq', '𖩴𖪆', ''],
    ['aux', '𖩷𖪇', ''],
    ['auz', '𖩴𖪄', ''],
    ['awc', '𖪉', ''],
    ['awk', '𖪈𖪠', ''],
    ['awlc', '𖪉𖪮', ''],
    ['awlx', '𖪋𖪮', ''],
    ['awlz', '𖩼𖪮', ''],
    ['awmc', '𖪉𖪫', ''],
    ['awmx', '𖪋𖪫', ''],
    ['awmz', '𖩼𖪫', ''],
    ['awnc', '𖪉𖪬', ''],
    ['awngc', '𖪉𖪐', ''],
    ['awngx', '𖪋𖪐', ''],
    ['awngz', '𖩼𖪐', ''],
    ['awnx', '𖪋𖪬', ''],
    ['awnz', '𖩼𖪬', ''],
    ['awp', '𖪈𖪧', ''],
    ['awq', '𖪊', ''],
    ['awrc', '𖪉𖪲', ''],
    ['awrx', '𖪋𖪲', ''],
    ['awrz', '𖩼𖪲', ''],
    ['awt', '𖪈𖪰', ''],
    ['awx', '𖪋', ''],
    ['awz', '𖩼', ''],
    ['ax', '𖩷', ''],
    ['ayc', '𖩵𖪁', ''],
    ['ayx', '𖩷𖪃', ''],
    ['ayz', '𖩴𖪀', ''],
    ['az', '𖩴', ''],
    ['b', '𖪪', ''],
    ['ch', '𖪼', ''],
    ['d', '𖪱', ''],
    ['ec', '𖩽', ''],
    ['ek', '𖩼𖪠', ''],
    ['elc', '𖩽𖪮', ''],
    ['elx', '𖩿𖪮', ''],
    ['elz', '𖩼𖪮', ''],
    ['emc', '𖩽𖪫', ''],
    ['emx', '𖩿𖪫', ''],
    ['emz', '𖩼𖪫', ''],
    ['enc', '𖩽𖪬', ''],
    ['engc', '𖩽𖪐', ''],
    ['engx', '𖩿𖪐', ''],
    ['engz', '𖩼𖪐', ''],
    ['enx', '𖩿𖪬', ''],
    ['enz', '𖩼𖪬', ''],
    ['ep', '𖩼𖪧', ''],
    ['eq', '𖩾', ''],
    ['erc', '𖩽𖪲', ''],
    ['erx', '𖩿𖪲', ''],
    ['erz', '𖩼𖪲', ''],
    ['et', '𖩼𖪰', ''],
    ['ex', '𖩿', ''],
    ['ez', '𖩼', ''],
    ['f', '𖪺', ''],
    ['g', '𖪢', ''],
    ['gh', '𖪷', ''],
    ['h', '𖪭', ''],
    ['ht', '𖪯', ''],
    ['htt', '𖪸', ''],
    ['ic', '𖪁', ''],
    ['ik', '𖪀𖪠', ''],
    ['ilc', '𖪁𖪮', ''],
    ['ilx', '𖪃𖪮', ''],
    ['ilz', '𖪀𖪮', ''],
    ['imc', '𖪁𖪫', ''],
    ['imx', '𖪃𖪫', ''],
    ['imz', '𖪀𖪫', ''],
    ['inc', '𖪁𖪬', ''],
    ['ingc', '𖪁𖪐', ''],
    ['ingx', '𖪃𖪐', ''],
    ['ingz', '𖪀𖪐', ''],
    ['inx', '𖪃𖪬', ''],
    ['inz', '𖪀𖪬', ''],
    ['ip', '𖪀𖪧', ''],
    ['iq', '𖪂', ''],
    ['irc', '𖪁𖪲', ''],
    ['irx', '𖪃𖪲', ''],
    ['irz', '𖪀𖪲', ''],
    ['it', '𖪀𖪰', ''],
    ['ix', '𖪃', ''],
    ['iz', '𖪀', ''],
    ['j', '𖪵', ''],
    ['k', '𖪠', ''],
    ['kh', '𖪡', ''],
    ['l', '𖪮', ''],
    ['m', '𖪫', ''],
    ['mnaungz', '𖪜𖪬𖩴𖪄𖪐', ''],
    ['mnvungz', '𖪜𖪬𖩸𖪄𖪐', ''],
    ['mrvkueq', '𖪜𖪲𖩸𖪠𖪖', ''],
    ['mznaungz', '𖪜𖪬𖩴𖪄𖪐', ''],
    ['mznvungz', '𖪜𖪬𖩸𖪄𖪐', ''],
    ['n', '𖪬', ''],
    ['ng', '𖪣', ''],
    ['nh', '𖪳', ''],
    ['ny', '𖪨', ''],
    ['oalc', '𖩱𖪮', ''],
    ['oalx', '𖩳𖪮', ''],
    ['oalz', '𖩰𖪮', ''],
    ['oamc', '𖩱𖪫', ''],
    ['oamx', '𖩳𖪫', ''],
    ['oamz', '𖩰𖪫', ''],
    ['oanc', '𖩱𖪬', ''],
    ['oanx', '𖩳𖪬', ''],
    ['oanz', '𖩰𖪬', ''],
    ['oap ~ op', '𖩰𖪧', ''],
    ['oarc', '𖩱𖪲', ''],
    ['oarx', '𖩳𖪲', ''],
    ['oarz', '𖩰𖪲', ''],
    ['oat', '𖩰𖪰', ''],
    ['oayc', '𖩱𖪁', ''],
    ['oayx', '𖩳𖪃', ''],
    ['oayz', '𖩰𖪀', ''],
    ['oc', '𖩱', ''],
    ['ok', '𖩰𖪠', ''],
    ['omc', '𖩱𖪫', ''],
    ['omx', '𖩳𖪫', ''],
    ['omz', '𖩰𖪫', ''],
    ['ongc', '𖩱𖪐', ''],
    ['ongx', '𖩳𖪐', ''],
    ['ongz', '𖩰𖪐', ''],
    ['op', '𖩰𖪧', ''],
    ['oq', '𖩲', ''],
    ['ovlc', '𖩱𖩹𖪮', ''],
    ['ovlx', '𖩳𖩻𖪮', ''],
    ['ovlz', '𖩰𖩸𖪮', ''],
    ['ovmc', '𖩱𖩹𖪫', ''],
    ['ovmx', '𖩳𖩻𖪫', ''],
    ['ovmz', '𖩰𖩸𖪫', ''],
    ['ovnc', '𖩱𖩹𖪬', ''],
    ['ovnx', '𖩳𖩻𖪬', ''],
    ['ovnz', '𖩰𖩸𖪬', ''],
    ['ovp', '𖩰𖩸𖪧', ''],
    ['ovrc', '𖩱𖪲', ''],
    ['ovrx', '𖩳𖪲', ''],
    ['ovrz', '𖩰𖪲', ''],
    ['ovt', '𖩰𖩸𖪰', ''],
    ['ovyc', '𖩱𖩹𖪁', ''],
    ['ovyx', '𖩳𖩻𖪃', ''],
    ['ovyz', '𖩰𖩸𖪀', ''],
    ['ox', '𖩳', ''],
    ['oz', '𖩰', ''],
    ['p', '𖪧', ''],
    ['ph', '𖪩', ''],
    ['r', '𖪲', ''],
    ['s', '𖪤', ''],
    ['sh', '𖪴', ''],
    ['t', '𖪰', ''],
    ['th', '𖪹', ''],
    ['ts', '𖪶', ''],
    ['uc', '𖪅', ''],
    ['uec', '𖪔', ''],
    ['uek', '𖪒𖪠', ''],
    ['uelc', '𖪔𖪮', ''],
    ['uelx', '𖪗𖪮', ''],
    ['uelz', '𖪕𖪮', ''],
    ['uemc', '𖪔𖪫', ''],
    ['uemx', '𖪗𖪫', ''],
    ['uemz', '𖪕𖪫', ''],
    ['uenc', '𖪔𖪬', ''],
    ['uengc', '𖪔𖪐', ''],
    ['uengx', '𖪗𖪐', ''],
    ['uengz', '𖪕𖪐', ''],
    ['uenx', '𖪗𖪬', ''],
    ['uenz', '𖪕𖪬', ''],
    ['uep', '𖪒𖪧', ''],
    ['ueq', '𖪖', ''],
    ['uerc', '𖪔𖪲', ''],
    ['uerx', '𖪗𖪲', ''],
    ['uerz', '𖪕𖪲', ''],
    ['uet', '𖪒𖪰', ''],
    ['uex', '𖪗', ''],
    ['ueyc', '𖪔𖪁', ''],
    ['ueyx', '𖪗𖪃', ''],
    ['ueyz', '𖪕𖪀', ''],
    ['uez', '𖪕', ''],
    ['uic', '𖪍', ''],
    ['uik', '𖪌𖪠', ''],
    ['uilc', '𖪍𖪮', ''],
    ['uilx', '𖪏𖪮', ''],
    ['uilz', '𖪌𖪮', ''],
    ['uimc', '𖪍𖪫', ''],
    ['uimx', '𖪏𖪫', ''],
    ['uimz', '𖪌𖪫', ''],
    ['uinc', '𖪍𖪬', ''],
    ['uingc', '𖪍𖪐', ''],
    ['uingx', '𖪏𖪐', ''],
    ['uingz', '𖪌𖪐', ''],
    ['uinx', '𖪏𖪬', ''],
    ['uinz', '𖪌𖪬', ''],
    ['uip', '𖪌𖪧', ''],
    ['uiq', '𖪎', ''],
    ['uirc', '𖪍𖪲', ''],
    ['uirx', '𖪏𖪲', ''],
    ['uirz', '𖪌𖪲', ''],
    ['uit', '𖪌𖪰', ''],
    ['uiuc', '𖪙', ''],
    ['uiuk', '𖪘𖪠', ''],
    ['uiulc', '𖪙𖪮', ''],
    ['uiulx', '𖪛𖪮', ''],
    ['uiulz', '𖪘𖪮', ''],
    ['uiumc', '𖪙𖪫', ''],
    ['uiumx', '𖪛𖪫', ''],
    ['uiumz', '𖪘𖪫', ''],
    ['uiunc', '𖪙𖪬', ''],
    ['uiungc', '𖪙𖪐', ''],
    ['uiungx', '𖪛𖪐', ''],
    ['uiungz', '𖪘𖪐', ''],
    ['uiunx', '𖪛𖪬', ''],
    ['uiunz', '𖪘𖪬', ''],
    ['uiup', '𖪘𖪧', ''],
    ['uiuq', '𖪎𖪆', ''],
    ['uiurc', '𖪙𖪲', ''],
    ['uiurx', '𖪛𖪲', ''],
    ['uiurz', '𖪘𖪲', ''],
    ['uiut', '𖪘𖪰', ''],
    ['uiux', '𖪛', ''],
    ['uiuz', '𖪘', ''],
    ['uix', '𖪏', ''],
    ['uiyc', '𖪍𖪁', ''],
    ['uiyq', '𖪌𖪂', ''],
    ['uiyx', '𖪏𖪇', ''],
    ['uiyz', '𖪌𖪀', ''],
    ['uiz', '𖪌', ''],
    ['uk', '𖪄𖪠', ''],
    ['ulc', '𖪅𖪮', ''],
    ['ulx', '𖪇𖪮', ''],
    ['ulz', '𖪄𖪮', ''],
    ['umc', '𖪅𖪫', ''],
    ['umx', '𖪇𖪫', ''],
    ['umz', '𖪄𖪫', ''],
    ['unc', '𖪅𖪬', ''],
    ['ungc', '𖪅𖪐', ''],
    ['ungx', '𖪇𖪐', ''],
    ['ungz', '𖪄𖪐', ''],
    ['unx', '𖪇𖪬', ''],
    ['unz', '𖪄𖪬', ''],
    ['up', '𖪄𖪧', ''],
    ['uq', '𖪆', ''],
    ['urc', '𖪅𖪲', ''],
    ['urx', '𖪇𖪲', ''],
    ['urz', '𖪄𖪲', ''],
    ['ut', '𖪄𖪰', ''],
    ['ux', '𖪇', ''],
    ['uyc', '𖪅𖪁', ''],
    ['uyx', '𖪇𖪃', ''],
    ['uyz', '𖪄𖪀', ''],
    ['uz', '𖪄', ''],
    ['v', '𖩸', ''],
    ['vc', '𖩹', ''],
    ['vk', '𖩸𖪠', ''],
    ['vlc', '𖩹𖪮', ''],
    ['vlx', '𖩻𖪮', ''],
    ['vlz', '𖩸𖪮', ''],
    ['vmc', '𖩹𖪫', ''],
    ['vmx', '𖩻𖪫', ''],
    ['vmz', '𖩸𖪫', ''],
    ['vnc', '𖩹𖪬', ''],
    ['vngc', '𖩹𖪐', ''],
    ['vngx', '𖩻𖪐', ''],
    ['vngz', '𖩸𖪐', ''],
    ['vnx', '𖩻𖪬', ''],
    ['vnz', '𖩸𖪬', ''],
    ['vp', '𖩸𖪧', ''],
    ['vq', '𖩺', ''],
    ['vrc', '𖩹𖪲', ''],
    ['vrx', '𖩻𖪲', ''],
    ['vrz', '𖩸𖪲', ''],
    ['vt', '𖩸𖪰', ''],
    ['vuk', '𖩸𖪄𖪠', ''],
    ['vungc', '𖩹𖪅𖪐', ''],
    ['vungx', '𖩻𖪇𖪐', ''],
    ['vungz', '𖩸𖪄𖪐', ''],
    ['vuq', '𖩸𖪆', ''],
    ['vx', '𖩻', ''],
    ['vyc', '𖩹𖪁', ''],
    ['vyq', '𖩸𖪂', ''],
    ['vyx', '𖩻𖪃', ''],
    ['vyz', '𖩸𖪀', ''],
    ['vz', '𖩸', ''],
    ['w', '𖪦', ''],
    ['y', '𖪥', '']
]
