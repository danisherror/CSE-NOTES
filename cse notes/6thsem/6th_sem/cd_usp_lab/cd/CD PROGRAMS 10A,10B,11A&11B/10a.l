%option noyywrap
%{
#include<stdio.h>
#include"y.tab.h" 
%}
%%
[a] {return ID;}
[+*] {return yytext[0];}
. {return yytext[0];}
\n {return 0;}
%%
