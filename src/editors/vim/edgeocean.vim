" Edge Ocean Vim color scheme
"
" Maintainer:  Bogdan Lazar
" License:    MIT

set background=dark
hi clear
if exists("syntax_on")
  syntax reset
endif
let g:colors_name = "edgeocean"

if has("gui_running")
  hi Normal guibg=#012A40 guifg=#52A6F0 gui=NONE
  hi Cursor guibg=#52A6F0
  hi CursorLine guibg=#0F4F68
  hi LineNr guifg=#0F4F68
  hi Directory guifg=#52A6F0 gui=bold
  hi Search guifg=#52A6F0 guibg=#265A63 gui=NONE
  hi Pmenu guifg=#52A6F0 guibg=#0F4F68 gui=NONE
  hi PmenuSel guifg=#52A6F0 guibg=#70DCEF gui=NONE
  hi PMenuSbar guibg=#52A6F0 gui=NONE
  hi PMenuThumb guibg=#012A40 gui=NONE

  
  hi Comment guifg=#679BBC guibg=NONE gui=NONE
  
  hi Constant guifg=#FF8141 guibg=NONE gui=NONE
  
  hi Boolean guifg=#41EAD4 guibg=NONE gui=NONE
  
  hi Number guifg=#F5D2AC guibg=NONE gui=NONE
  
  hi Float guifg=#F5D2AC guibg=NONE gui=NONE
  
  hi Character guifg=#69C0FA guibg=NONE gui=NONE
  
  hi Identifier guifg=#FF947F guibg=NONE gui=NONE
  
  hi Function guifg=#12D3E5 guibg=NONE gui=NONE
  
  hi String guifg=#69C0FA guibg=NONE gui=NONE
  
  hi Statement guifg=#FFC642 guibg=NONE gui=NONE
  
  hi PreProc guifg=#12D3E5 guibg=NONE gui=italic
  
  hi Type guifg=#41EAD4 guibg=NONE gui=NONE
  
  hi Underlined guifg=#1FA1AD guibg=NONE gui=NONE
  
  hi Error guifg=#DC333C guibg=#F8F8F0 gui=NONE
  
  hi Todo guifg=#F8F8F0 guibg=#AE81FF gui=NONE
  
  hi Special guifg=#12D3E5 guibg=NONE gui=NONE
  
  hi xmlTag guifg=#E75E6D guibg=NONE gui=NONE
  
  hi DiffAdd guifg=#47A025 guibg=#F8F8F0 gui=NONE
  
  hi DiffChange guifg=#F6A623 guibg=#F8F8F0 gui=NONE
  
  hi DiffDelete guifg=#E84855 guibg=#F8F8F0 gui=NONE
  
  hi DiffText guifg=#48BEFF guibg=#F8F8F0 gui=NONE
  
  hi ErrorMsg guifg=#E75E6D guibg=NONE gui=NONE
  
  hi WarningMsg guifg=#F78400 guibg=NONE gui=NONE
  
else
  hi Normal ctermbg=235 ctermfg=75 cterm=NONE
  hi Cursor ctermbg=75
  hi CursorLine ctermbg=23
  hi LineNr ctermfg=23
  hi Directory ctermfg=75 cterm=bold
  hi Search ctermfg=75 ctermbg=23 cterm=NONE
  hi Pmenu ctermfg=75 ctermbg=23 cterm=NONE
  hi PmenuSel ctermfg=75 ctermbg=81 cterm=NONE
  hi PMenuSbar ctermbg=75 cterm=NONE
  hi PMenuThumb ctermbg=235 cterm=NONE

  
  hi Comment ctermfg=73 ctermbg=NONE cterm=NONE
  
  hi Constant ctermfg=209 ctermbg=NONE cterm=NONE
  
  hi Boolean ctermfg=80 ctermbg=NONE cterm=NONE
  
  hi Number ctermfg=223 ctermbg=NONE cterm=NONE
  
  hi Float ctermfg=223 ctermbg=NONE cterm=NONE
  
  hi Character ctermfg=75 ctermbg=NONE cterm=NONE
  
  hi Identifier ctermfg=210 ctermbg=NONE cterm=NONE
  
  hi Function ctermfg=44 ctermbg=NONE cterm=NONE
  
  hi String ctermfg=75 ctermbg=NONE cterm=NONE
  
  hi Statement ctermfg=221 ctermbg=NONE cterm=NONE
  
  hi PreProc ctermfg=44 ctermbg=NONE cterm=italic
  
  hi Type ctermfg=80 ctermbg=NONE cterm=NONE
  
  hi Underlined ctermfg=37 ctermbg=NONE cterm=NONE
  
  hi Error ctermfg=167 ctermbg=255 cterm=NONE
  
  hi Todo ctermfg=255 ctermbg=141 cterm=NONE
  
  hi Special ctermfg=44 ctermbg=NONE cterm=NONE
  
  hi xmlTag ctermfg=167 ctermbg=NONE cterm=NONE
  
  hi DiffAdd ctermfg=70 ctermbg=255 cterm=NONE
  
  hi DiffChange ctermfg=214 ctermbg=255 cterm=NONE
  
  hi DiffDelete ctermfg=167 ctermbg=255 cterm=NONE
  
  hi DiffText ctermfg=75 ctermbg=255 cterm=NONE
  
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
