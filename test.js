/*var a;
var b;
var resultat;
var operation;


a = window.prompt("entrer le premier numero");
a = parseFloat(a);

operation =  window.prompt("operation");
b = window.prompt("entrer le deuxiéme numero");
b = parseFloat(b);
switch(operation){

case "+":

	resultat = a+b ;
	
	break;

case "-":
	resultat = a-b ;
	
	break;


case "*":
	resultat = a*b ;
		
	break;

case "/":
if(b==0){
	alert('tu ne peut pas deviser sur 0');
	b = window.prompt("entrer le deuxiéme numero une autre fois");

}
	resultat = a/b ;
		
	break;

	default:
	alert("respecter les regles mathématique");

}
if(isNaN(resultat)){
	alert("repeter loperation");
}
else{
	document.write( a + operation + b + "=" + resultat);
}*/
var personne
var ordinateur
var resultat
var pierre

 personne = window.prompt("choisi entre  pierre, feuille , ciseau");

 ordinateur=Math.floor(Math.random()*3);


 alert(ordinateur);

 switch(ordinateur){
 	case 0:
 	ordinateur = "pierre";
 	break;

 	case 1:
 	ordinateur ="feuille";
 	break;

 	default:
 	ordinateur = "ciseau";

 }

 document.write("Choix Personne :" +personne+"<br>");

 document.write("Choix ordinateur :" +ordinateur+"<br>");



if(personne==ordinateur)
{

	document.write("sont egaux");
}

  else
 {





 

  if ((personne == "pierre")&&(ordinateur=="feuille"))
 {
 	document.write("ordinateur gagne")
 }
 else if ((personne == "pierre")&&(ordinateur=="ciseau"))
 {
 	document.write("personne gagne")
 }




 if ((personne == "feuille")&&(ordinateur=="pierre"))
 {
 	document.write("personne gagne")
 }

 
 else if ((personne == "feuille")&&(ordinateur=="ciseau"))
 {
 	document.write("ordinateur gagne")
 }




 if ((personne == "ciseau")&&(ordinateur=="pierre"))
 {
 	document.write("ordinateur gagne")
 }

 else if ((personne == "ciseau")&&(ordinateur=="feuille"))
 {
 	document.write("personne gagne")
 }
 



}

