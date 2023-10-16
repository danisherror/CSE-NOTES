%{
#include<stdio.h> 
#include<stdlib.h>
int yylex();
void yyerror();
%}
%token type ID
%%

D: T ' ' L ';'
 ;
T: type
 ;
L: L ',' ID
 | ID
 ;
%% 
void main() 
{ 
	printf("Enter the Declaration \n"); 
        yyparse();
	printf("Valid Declaration\n");
} 
void yyerror()
{ 
	printf("Invalid Declaration\n");
	exit(0);
}
