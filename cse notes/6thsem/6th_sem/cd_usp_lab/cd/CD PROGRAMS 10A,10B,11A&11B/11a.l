%{
#include<stdio.h>
#include"y.tab.h" 
%}
%%
"int"|"float" {return type;}
[a-zA-Z][a-zA-Z0-9]* {return ID;}
. {return yytext[0];}
\n {return 0;}
%% 
