%{
#include<stdio.h>
#include<stdlib.h>
int yylex(); 
void yyerror();
%}

%token id num

%left '+' '-'
%left '/' '*' '%'


%% 

stmt : expression { printf("\n valid exprn");}
       ; 
expression : '(' expression ')'  { $$=$2;}
	   | expression '+' expression {printf("\nplus recog!"); $$=$1+$3;printf("\n %d",$$);}
| expression '+' { printf ("\n Syntax error: Right operand is missing ");}
| expression '-' expression {printf("\nminus recog!");$$=$1-$3;printf("\n %d",$$);}
| expression '-' { printf ("\n Syntax error: Right operand is missing ");}
| expression '*' expression {printf("\nMul recog!");$$=$1*$3;printf("\n %d",$$);}
| expression '*' { printf ("\n Syntax error: Right operand is missing ");}
| expression '/' expression {printf("\ndivision recog!");if($3==0) printf("\ndivision cant be done, as divisor is zero."); 
							else {$$=$1/$3;printf("\n
 %d",$$);}}
| expression '/' { printf ("\n Syntax error: Right operand is missing ");} 
| expression '%' expression {printf("\n Modulos recog!"); $$=$1%$3;printf("\n %d",$$);}
| expression '%' { printf ("\n Syntax error: Right operand is missing ");}
| id { $$=$1;}
| num { $$=$1;}
;
%% 

void main() 
{ 
	printf(" Enter an arithmetic expression\n");
	yyparse(); 
} 
void yyerror() 
{ 
	printf(" Invalid arithmetic Expression\n"); exit(1);
}
