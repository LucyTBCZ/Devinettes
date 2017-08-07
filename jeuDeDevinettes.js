var regle="Ne répondez QUE par un seul mot aux devinettes posées";
var chance=5;
var devinette="Qu'est ce qui est jaune et qui attends?"
var devinette2="De quelle couleur est Mickael Jackson?"
var devinette3= "blablabla"
var solution="jonathan"
var solution2= "gris"

//Affichage des règles du jeu.
console.log(regle);

//Affichage de la devinette, saisie de réponse en minuscule.
console.log(devinette);
var reponse= prompt("Alors? ").toLowerCase();

/*Tant que chance est supérieure à zéro et que la réponse est différente de la solution 
ou que la reponse est égale à la solution alors
si la reponse est différente de la solution alors on affiche "non, réessayer"
et on décrémente de 1 la chance.
	si la chance tombe à 0 on affiche "tu as perdu c'était" + la solution.
	sinon on affiche "alors?" et on saisit la réponse en minuscule.
sinon si la réponse est égale à la solution on affiche "ok suivante" + devinette2
et Tant que chance est supérieure à zéro et que la réponse est différente de la solution2 
	ou que la reponse est égale à la solution2 alors
	si la reponse est différente de la solution2 alors on affiche "non, réessayer"
	et on décrémente de 1 la chance.
		si la chance tombe à 0 on affiche "tu as perdu c'était" + la solution2.
		sinon on affiche "alors?" et on saisit la réponse en minuscule.
	sinon si la réponse est égale à la solution2 on affiche "ok suivante" + devinette3 
	sinon on affiche bug2
sinon on affiche bug*/

while ((chance>0 && reponse !== solution)|| reponse===solution){
	if (reponse !== solution) {
		console.log("Non, réessayez!");
		chance--;
		if (chance===0){
			console.log("Tu as perdu! C'était " +solution);
		}
		else{
			console.log(devinette);
			var reponse= prompt("Alors? ").toLowerCase();
		}
	}
	else if (reponse === solution) {
		console.log("Okay, suivante " + devinette2);
		while ((chance>0 && reponse !== solution2)|| reponse===solution2){
			if (reponse !== solution2) {
				console.log("Non, réessayez!");
				chance--;
				if (chance===0){
					console.log("Tu as perdu! C'était " + solution2);
				}
				else {
					console.log(devinette2);
					var reponse= prompt("Alors? ");
				}
			}
			else if (reponse === solution2) {
				console.log("Okay, suivante " + devinette3);
			}
			else {
				print("bug2");
			}
		}
	}
	else {
		print("bug");
	}
}