" Edge Serene Vim color scheme
"
" Maintainer:  Bogdan Lazar
" License:    MIT

set background=light
hi clear
if exists("syntax_on")
  syntax reset
endif
let g:colors_name = "edgeserene"

if has("gui_running")
  hi Normal guibg=#FDF6E3 guifg=#805330 gui=NONE
  hi Cursor guibg=#805330
  hi CursorLine guibg=#D8CFB3
  hi LineNr guifg=#D8CFB3
  hi Directory guifg=#805330 gui=bold
  hi Search guifg=#805330 guibg=#DDC990 gui=NONE
  hi Pmenu guifg=#805330 guibg=#EAE1CB gui=NONE
  hi PmenuSel guifg=#805330 guibg=#D4474D gui=NONE
  hi PMenuSbar guibg=#805330 gui=NONE
  hi PMenuThumb guibg=#FDF6E3 gui=NONE

  
  hi Comment guifg=#849292 guibg=NONE gui=NONE
  
  hi Constant guifg=#562EC2 guibg=NONE gui=NONE
  
  hi Boolean guifg=#F78400 guibg=NONE gui=NONE
  
  hi Number guifg=#AE81FF guibg=NONE gui=NONE
  
  hi Float guifg=#AE81FF guibg=NONE gui=NONE
  
  hi Character guifg=#5A7CBE guibg=NONE gui=NONE
  
  hi Identifier guifg=#DC333C guibg=NONE gui=NONE
  
  hi Function guifg=#3A8F2B guibg=NONE gui=NONE
  
  hi String guifg=#5A7CBE guibg=NONE gui=NONE
  
  hi Statement guifg=#DC333C guibg=NONE gui=NONE
  
  hi PreProc guifg=#1FA1AD guibg=NONE gui=italic
  
  hi Type guifg=#1FA1AD guibg=NONE gui=NONE
  
  hi Underlined guifg=#5A7CBE guibg=NONE gui=NONE
  
  hi Error guifg=#F8F8F0 guibg=#DC333C gui=NONE
  
  hi Todo guifg=#FDF6E3 guibg=#F78400 gui=NONE
  
  hi Special guifg=#1B944D guibg=NONE gui=NONE
  
  hi xmlTag guifg=#C52830 guibg=NONE gui=NONE
  
  hi DiffAdd guifg=NONE guibg=#47A025 gui=NONE
  
  hi DiffChange guifg=NONE guibg=#F6A623 gui=NONE
  
  hi DiffDelete guifg=NONE guibg=#E84855 gui=NONE
  
  hi DiffText guifg=NONE guibg=#48BEFF gui=NONE
  
  hi ErrorMsg guifg=#DC333C guibg=NONE gui=NONE
  
  hi WarningMsg guifg=#F78400 guibg=NONE gui=NONE
  
else
  hi Normal ctermbg=230 ctermfg=95 cterm=NONE
  hi Cursor ctermbg=95
  hi CursorLine ctermbg=187
  hi LineNr ctermfg=187
  hi Directory ctermfg=95 cterm=bold
  hi Search ctermfg=95 ctermbg=186 cterm=NONE
  hi Pmenu ctermfg=95 ctermbg=253 cterm=NONE
  hi PmenuSel ctermfg=95 ctermbg=167 cterm=NONE
  hi PMenuSbar ctermbg=95 cterm=NONE
  hi PMenuThumb ctermbg=230 cterm=NONE

  
  hi Comment ctermfg=245 ctermbg=NONE cterm=NONE
  
  hi Constant ctermfg=55 ctermbg=NONE cterm=NONE
  
  hi Boolean ctermfg=208 ctermbg=NONE cterm=NONE
  
  hi Number ctermfg=141 ctermbg=NONE cterm=NONE
  
  hi Float ctermfg=141 ctermbg=NONE cterm=NONE
  
  hi Character ctermfg=67 ctermbg=NONE cterm=NONE
  
  hi Identifier ctermfg=167 ctermbg=NONE cterm=NONE
  
  hi Function ctermfg=64 ctermbg=NONE cterm=NONE
  
  hi String ctermfg=67 ctermbg=NONE cterm=NONE
  
  hi Statement ctermfg=167 ctermbg=NONE cterm=NONE
  
  hi PreProc ctermfg=37 ctermbg=NONE cterm=italic
  
  hi Type ctermfg=37 ctermbg=NONE cterm=NONE
  
  hi Underlined ctermfg=67 ctermbg=NONE cterm=NONE
  
  hi Error ctermfg=255 ctermbg=167 cterm=NONE
  
  hi Todo ctermfg=230 ctermbg=208 cterm=NONE
  
  hi Special ctermfg=29 ctermbg=NONE cterm=NONE
  
  hi xmlTag ctermfg=161 ctermbg=NONE cterm=NONE
  
  hi DiffAdd ctermfg=NONE ctermbg=70 cterm=NONE
  
  hi DiffChange ctermfg=NONE ctermbg=214 cterm=NONE
  
  hi DiffDelete ctermfg=NONE ctermbg=167 cterm=NONE
  
  hi DiffText ctermfg=NONE ctermbg=75 cterm=NONE
  
  hi ErrorMsg ctermfg=167 ctermbg=NONE cterm=NONE
  
  hi WarningMsg ctermfg=208 ctermbg=NONE cterm=NONE
  
endif

hi! link xmlTagName xmlTag
hi! link xmlEndTag xmlTag
hi! link xmlArg xmlTag
hi! link htmlTag xmlTag
hi! link htmlTagName xmlTagName
hi! link htmlEndTag xmlEndTag
hi! link htmlArg xmlArg
