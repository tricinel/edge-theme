" Edge Night Sky Vim color scheme
"
" Maintainer:  Bogdan Lazar
" License:    MIT

set background=dark
hi clear
if exists("syntax_on")
  syntax reset
endif
let g:colors_name = "edgenightsky"

if has("gui_running")
  hi Normal guibg=#081A20 guifg=#A9BCD0 gui=NONE
  hi Cursor guibg=#F3D3BD
  hi CursorLine guibg=#172A3A
  hi LineNr guifg=#172A3A
  hi Directory guifg=#A9BCD0 gui=bold
  hi Search guifg=#A9BCD0 guibg=#172A3A gui=NONE
  hi Pmenu guifg=#BBBFC8 guibg=#172A3A gui=NONE
  hi PmenuSel guifg=#BBBFC8 guibg=#F3D3BD gui=NONE
  hi PMenuSbar guibg=#A9BCD0 gui=NONE
  hi PMenuThumb guibg=#081A20 gui=NONE

  
  hi Comment guifg=#27667D guibg=NONE gui=NONE
  
  hi Constant guifg=#FF8141 guibg=NONE gui=NONE
  
  hi Boolean guifg=#FF8141 guibg=NONE gui=NONE
  
  hi Number guifg=#AE81FF guibg=NONE gui=NONE
  
  hi Float guifg=#AE81FF guibg=NONE gui=NONE
  
  hi Character guifg=#ECC6B8 guibg=NONE gui=NONE
  
  hi Identifier guifg=#FB3640 guibg=NONE gui=NONE
  
  hi Function guifg=#5DD39E guibg=NONE gui=NONE
  
  hi String guifg=#ECC6B8 guibg=NONE gui=NONE
  
  hi Statement guifg=#FB3640 guibg=NONE gui=NONE
  
  hi PreProc guifg=#AD83D9 guibg=NONE gui=italic
  
  hi Type guifg=#FF8141 guibg=NONE gui=NONE
  
  hi Underlined guifg=#5DD39E guibg=NONE gui=NONE
  
  hi Error guifg=#ECC6B8 guibg=#FB3640 gui=NONE
  
  hi Todo guifg=#27667D guibg=#ECC6B8 gui=NONE
  
  hi Special guifg=#AD83D9 guibg=NONE gui=NONE
  
  hi xmlTag guifg=#FB3640 guibg=NONE gui=NONE
  
  hi DiffAdd guifg=#081A20 guibg=#47A025 gui=NONE
  
  hi DiffChange guifg=#081A20 guibg=#F9DC5C gui=NONE
  
  hi DiffDelete guifg=#081A20 guibg=#E84855 gui=NONE
  
  hi DiffText guifg=#081A20 guibg=#48BEFF gui=NONE
  
  hi ErrorMsg guifg=#FB3640 guibg=NONE gui=NONE
  
  hi WarningMsg guifg=#FF8141 guibg=NONE gui=NONE
  
else
  hi Normal ctermbg=233 ctermfg=146 cterm=NONE
  hi Cursor ctermbg=223
  hi CursorLine ctermbg=235
  hi LineNr ctermfg=235
  hi Directory ctermfg=146 cterm=bold
  hi Search ctermfg=146 ctermbg=235 cterm=NONE
  hi Pmenu ctermfg=7 ctermbg=235 cterm=NONE
  hi PmenuSel ctermfg=7 ctermbg=223 cterm=NONE
  hi PMenuSbar ctermbg=146 cterm=NONE
  hi PMenuThumb ctermbg=233 cterm=NONE

  
  hi Comment ctermfg=24 ctermbg=NONE cterm=NONE
  
  hi Constant ctermfg=209 ctermbg=NONE cterm=NONE
  
  hi Boolean ctermfg=209 ctermbg=NONE cterm=NONE
  
  hi Number ctermfg=141 ctermbg=NONE cterm=NONE
  
  hi Float ctermfg=141 ctermbg=NONE cterm=NONE
  
  hi Character ctermfg=223 ctermbg=NONE cterm=NONE
  
  hi Identifier ctermfg=203 ctermbg=NONE cterm=NONE
  
  hi Function ctermfg=79 ctermbg=NONE cterm=NONE
  
  hi String ctermfg=223 ctermbg=NONE cterm=NONE
  
  hi Statement ctermfg=203 ctermbg=NONE cterm=NONE
  
  hi PreProc ctermfg=140 ctermbg=NONE cterm=italic
  
  hi Type ctermfg=209 ctermbg=NONE cterm=NONE
  
  hi Underlined ctermfg=79 ctermbg=NONE cterm=NONE
  
  hi Error ctermfg=223 ctermbg=203 cterm=NONE
  
  hi Todo ctermfg=24 ctermbg=223 cterm=NONE
  
  hi Special ctermfg=140 ctermbg=NONE cterm=NONE
  
  hi xmlTag ctermfg=203 ctermbg=NONE cterm=NONE
  
  hi DiffAdd ctermfg=233 ctermbg=70 cterm=NONE
  
  hi DiffChange ctermfg=233 ctermbg=221 cterm=NONE
  
  hi DiffDelete ctermfg=233 ctermbg=167 cterm=NONE
  
  hi DiffText ctermfg=233 ctermbg=75 cterm=NONE
  
  hi ErrorMsg ctermfg=203 ctermbg=NONE cterm=NONE
  
  hi WarningMsg ctermfg=209 ctermbg=NONE cterm=NONE
  
endif

hi! link xmlTagName xmlTag
hi! link xmlEndTag xmlTag
hi! link xmlArg xmlTag
hi! link htmlTag xmlTag
hi! link htmlTagName xmlTagName
hi! link htmlEndTag xmlEndTag
hi! link htmlArg xmlArg
