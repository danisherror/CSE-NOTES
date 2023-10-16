%{
#include<stdio.h>
#include<stdlib.h>
int yylex();
void yyerror();
%}
%token ID

%%

exp:exp exp '*'
   |exp exp '+' 
   |ID
   ;
%% 

void main() 
{
	printf("enter the String for the grammar \n S-->SS+ | SS* | a   \n"); 
	yyparse(); 
	printf("valid String\n"); 
} 
void yyerror() 
{ 
	printf("Invalid Sting\n"); 
	exit(1);
} 
