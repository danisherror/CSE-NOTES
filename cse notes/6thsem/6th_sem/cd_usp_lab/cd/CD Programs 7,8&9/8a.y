%{
#include<stdio.h> 
#include<stdlib.h>
void yyerror();
int yylex();
%}
%token id num

%%

stmt: expression { printf("\n valid relational exprn");}
      ;
expression : '(' expression ')' {$$=$2;}
	   | expression '<' expression {printf("\nless than recog!");($$=$1<$3);printf("\n %d",$$);}
| expression '<' { printf ("\n Syntax error: Right operand is missing ");exit(0);}
| expression '>' expression {printf("\ngreater than recog!");($$=$1>$3);printf("\n %d",$$);}
| expression '>' { printf ("\n Syntax error: Right operand is missing ");exit(0);}
| expression '<''=' expression {printf("\nless than or equal recog!");$$=($1<=$4);printf("\n %d",$$);}
| expression '<''=' { printf ("\n Syntax error: Right operand is missing ");exit(0);}
| expression '>''=' expression {printf("\ngreater than or equal!");$$=($1>=$4);printf("\n %d",$$);}
| expression '>''=' { printf ("\n Syntax error: Right operand is missing ");exit(0);}
| expression '!''=' expression {printf("\nNot equal recog!");$$=($1!=$4);printf("\n %d",$$);}
| expression '!''=' { printf ("\n Syntax error: Right operand is missing ");exit(0);}
| expression '=''=' expression {printf("\ndouble equal recog!");$$=($1==$4);printf("\n %d",$$);}
| expression '=''=' { printf ("\n Syntax error: Right operand is missing");exit(0);} 
| id {$$=$1;}
| num {$$=$1;}
;

%%

void main() 
{ 
printf(" Enter relational expression\n"); 
yyparse(); 
}
void yyerror() 
{ 
printf(" Invalid relational expression\n"); exit(1);
} 
