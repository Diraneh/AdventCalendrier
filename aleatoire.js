 function aleatoire(){


var UniqueRandom = {
            NumHistory: new Array(),
            generate: function (maxNum) {
                var current = Math.ceil(Math.random() * (maxNum));
                if (maxNum > 1 && this.NumHistory.length > 0) {
                    if (this.NumHistory.length != maxNum) {
                        while ($.inArray(current, this.NumHistory) != -1) {
                            current = Math.ceil(Math.random() * (maxNum));
                        }
                        this.NumHistory.push(current);
                        return current;
                    } else {
                        //unique numbers done, continue outputting random numbers
                     //  alert('done outputting unique numbers, now just returning random number');
                        return current;
                    }
                } else {
                    //first time only
                    this.NumHistory.push(current);
                    return current;
                }
            }
            
        };
        
        let app = new Vue({
            el: '#app',
            data: {
                modal: '',
                messages: [{
                        'number': 1,
                        'image': 'img/'+ UniqueRandom.generate(24)+ '.jpg ',
                         
                        'content': "L'australopithèque Lucy tire son nom d'une chanson des Beattles.",
                        'reponse' : 'On s éclate !',
                    },
                    {
                        'number': 2,
                        'image': 'img/'+ UniqueRandom.generate(24)+ '.jpg ',
                        'content': "Quel est le muscle le plus puissant du corps humain ?",
                         'reponse': "Mettre des mauvaises notes"
                    },
                    {
                        'number': 3,
                        'image': 'img/'+ UniqueRandom.generate(24)+ '.jpg ',
                        'content': "Quel acte de vie courante occupe environ 6 mois de notre vie ?",
                        "reponse" : "Je suis tombé sur un os"
                    },
                    {
                        'number': 4,
                        'image': 'img/'+ UniqueRandom.generate(24)+ '.jpg ',
                        'content': "La 1ère société distributrice de jouets en France est ... ",
                        "reponse" : "Speed heure man ! ( spider man )"
                    },
                    {   
                        'number': 5,
                        'image': 'img/'+ UniqueRandom.generate(24)+ '.jpg ',
                        'content': "La fonction getpageheaders() ?",
                        "reponse" : "FAC ( effacer )"
                    },
                    {
                        'number': 6,
                        'image': 'img/'+ UniqueRandom.generate(24)+ '.jpg ',
                        'content': "Comment récupérer toutes les sous-balises d'une balise xml livre ?",
                        "reponse" : "AJT ( agiter )"
                    },
                    {
                        'number': 7,
                        'image': 'img/'+ UniqueRandom.generate(24)+ '.jpg ',
                        'content': "Un fermier a 17 vaches. Elles meurent toutes sauf 9. Combien reste-t-il de vaches à notre fermier?",
                        "reponse" : "le marin car il a jeté l'ancre !"
                    },
                    {
                        'number': 8,
                        'image': 'img/'+ UniqueRandom.generate(24)+ '.jpg ',
                        'content': "Je suis un homme. Si le fils de Alain est le père de mon fils, quel est le lien de parenté entre Alain et moi ?",
                        "reponse" : "Un bleu !"
                    },
                    {
                        'number': 9,
                        'image': 'img/'+ UniqueRandom.generate(24)+ '.jpg ',
                        'content': "Comment afficher la version de php utilisée par le serveur ?",
                        "reponse" : "Parce que Jack sonne. ( Jackson )"
                    },
                    {
                        'number': 10,
                        'image': 'img/'+ UniqueRandom.generate(24)+ '.jpg ',
                        'content': "Un gardien de nuit meurt le jour. Touche-t-il une pension ?",
                        "reponse" : "Et qui dit au secours j'ai pas pieds ! ( Papier )."
                    },
                    {
                        'number': 11,
                        'image': 'img/'+ UniqueRandom.generate(24)+ '.jpg ',
                        'content': "En js quelle propriété permet d'identifier l'OS de l'utilisateur ?",
                        "reponse" : "De perdre le fil de la conversation."
                    },
                    {
                        'number': 12,
                        'image': 'img/'+ UniqueRandom.generate(24)+ '.jpg ',
                        'content': "Quel objet permet au JavaScript de dialoguer avec un serveur web ?",
                        "reponse" : "Parcequ'il surveille leur lignes."
                    },
                    {  
                        'number': 13,
                        'image': 'img/'+ UniqueRandom.generate(24)+ '.jpg ',
                        'content': "stringify s'utilise pour ?",
                        "reponse" : "Le criquet"
                    },
                    {
                        'number': 14,
                        'image': 'img/'+ UniqueRandom.generate(24)+ '.jpg ',
                        'content': " Quel élément sépare la propriété de sa valeur ?   ",
                        "reponse" : "Je crois que l'on est suivi."
                    },
                    {
                        'number': 15,
                        'image': 'img/'+ UniqueRandom.generate(24)+ '.jpg ',
                        'content': "Une relation en SGBD est...",
                        "reponse" : "Au Super Marché !"
                    },
                    {
                        'number': 16,
                        'image': 'img/'+ UniqueRandom.generate(24)+ '.jpg ',
                        'content': "Qu'est-ce que la cardinalité ?",
                        "reponse" : "Aïe"
                    },
                    {
                        'number': 17,
                        'image': 'img/'+ UniqueRandom.generate(24)+ '.jpg ',
                        'content': "Dans quel fichier doit-on insérer les fonctions personnalisées ?",
                        "reponse" : "La grue porte des caisses et toi tu en lâches !"
                    },
                    {
                        'number': 18,
                        'image': 'img/'+ UniqueRandom.generate(24)+ '.jpg ',
                        'content': "A la naissance, le corps humain comporte plus d'os qu'à l'âge adulte ...",
                        "reponse" : "L'ananas !"
                    },
                    {
                        'number': 19,
                        'image': 'img/'+ UniqueRandom.generate(24)+ '.jpg ',
                        'content': "Un capitaine a été décapité, deux moines ont la tête tranchée. Combien de personnes sont mortes ?"
                      
                    },
                    {
                        'number': 20,
                        'image': 'img/'+ UniqueRandom.generate(24)+ '.jpg ',
                        'content': "Combient de fois trouve-t-on le chiffre 9 entre 1 et 100 ?",
                        "reponse" : "Manger des avocats."
                    },
                    {
                        'number': 21,
                        'image': 'img/'+ UniqueRandom.generate(24)+ '.jpg ',
                        'content': "Quel mot est représenté par ce nombre: 713705 ?",
                        "reponse" : "D'avoir un anti-vol."
                    },
                    {
                        'number': 22,
                        'image': 'img/'+ UniqueRandom.generate(24)+ '.jpg ',
                        'content': "Dans une pièce, il y a un enfant, sa mère, la soeur de son oncle, la fille de son grand-père et la tante de son cousin. Combien il y a de personnes au minimum dans cette pièce ?",
                        "reponse" : "L'étoile d'araignée !"
                    },  
                    {
                        'number': 23,
                        'image': 'img/'+ UniqueRandom.generate(24)+ '.jpg ',
                        'content': "Que jette-t-on lorsqu'on en a besoin et que l'on ramasse lorsqu'on en a plus besoin ?",
                        "reponse" : "La nuit !"
                    },
                    {
                        'number': 24,
                        'image': 'img/'+ UniqueRandom.generate(24)+ '.jpg ',
                        'content':"Touche pas ça touche, et touche ne touche pas. Qu'est-ce qui touche ?",
                        "reponse" : "Pan Pan !"
                    },
                ],
            },

            
            methods: {

                
                
                setModal(message) {
      
                    let today = new Date();
                    let calDate = new Date('2020-12-' + message.number);
                    calDate.setDate(calDate.getDate() - 1);
                    if (calDate = today) {
                        this.modal = message.content;
                    } else {
                        this.modal = message.content;
                    }
                    function getSelectedCheckboxValues(name) {
    const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    return values;
}
if (id='#1a'&& message.number==1) {
    const btn = document.getElementById('1a')
   
document.getElementById("2a").style.display="none";
document.getElementById("2b").style.display="none" ;  
document.getElementById("3a").style.display="none";
document.getElementById("3b").style.display="none" ; 
document.getElementById("4a").style.display="none";
document.getElementById("4b").style.display="none" ;
document.getElementById("5a").style.display="none";
document.getElementById("5b").style.display="none" ;
document.getElementById("6a").style.display="none";
document.getElementById("6b").style.display="none" ;
document.getElementById("7a").style.display="none";
document.getElementById("7b").style.display="none" ;
document.getElementById("8a").style.display="none";
document.getElementById("8b").style.display="none" ;
document.getElementById("9a").style.display="none";
document.getElementById("9b").style.display="none" ;
document.getElementById("10a").style.display="none";
document.getElementById("10b").style.display="none";
document.getElementById("11a").style.display="none";
document.getElementById("11b").style.display="none" ;
document.getElementById("12a").style.display="none";
document.getElementById("12b").style.display="none" ;
document.getElementById("13a").style.display="none";
document.getElementById("13b").style.display="none" ;
document.getElementById("14a").style.display="none";
document.getElementById("14b").style.display="none" ;
document.getElementById("15a").style.display="none";
document.getElementById("15b").style.display="none" ;
document.getElementById("16a").style.display="none";
document.getElementById("16b").style.display="none" ;
document.getElementById("17a").style.display="none";
document.getElementById("17b").style.display="none" ;
document.getElementById("18a").style.display="none";
document.getElementById("18b").style.display="none" ;
document.getElementById("19a").style.display="none";
document.getElementById("19b").style.display="none" ;
document.getElementById("20a").style.display="none";
document.getElementById("20b").style.display="none" ;
document.getElementById("21a").style.display="none";
document.getElementById("21b").style.display="none" ;
document.getElementById("22a").style.display="none";
document.getElementById("22b").style.display="none" ;
document.getElementById("23a").style.display="none";
document.getElementById("23b").style.display="none" ;
document.getElementById("24a").style.display="none";
document.getElementById("24b").style.display="none" ;
btn.addEventListener('click', (event) => {
    swal("Bravo!", "Tu as gagné ta vie", "success");
}
);
                }

                
                 if (id='#1b'&& message.number==1) {
const btnn = document.getElementById('1b')
document.getElementById("2a").style.display="none";
document.getElementById("2b").style.display="none" ;  
document.getElementById("3a").style.display="none";
document.getElementById("3b").style.display="none" ; 
document.getElementById("4a").style.display="none";
document.getElementById("4b").style.display="none" ;
document.getElementById("5a").style.display="none";
document.getElementById("5b").style.display="none" ;
document.getElementById("6a").style.display="none";
document.getElementById("6b").style.display="none" ;
document.getElementById("7a").style.display="none";
document.getElementById("7b").style.display="none" ;
document.getElementById("8a").style.display="none";
document.getElementById("8b").style.display="none" ;
document.getElementById("9a").style.display="none";
document.getElementById("9b").style.display="none" ;
document.getElementById("10a").style.display="none";
document.getElementById("10b").style.display="none";
document.getElementById("11a").style.display="none";
document.getElementById("11b").style.display="none" ;
document.getElementById("12a").style.display="none";
document.getElementById("12b").style.display="none" ;
document.getElementById("13a").style.display="none";
document.getElementById("13b").style.display="none" ;
document.getElementById("14a").style.display="none";
document.getElementById("14b").style.display="none" ;
document.getElementById("15a").style.display="none";
document.getElementById("15b").style.display="none" ;
document.getElementById("16a").style.display="none";
document.getElementById("16b").style.display="none" ;
document.getElementById("17a").style.display="none";
document.getElementById("17b").style.display="none" ;
document.getElementById("18a").style.display="none";
document.getElementById("18b").style.display="none" ;
document.getElementById("19a").style.display="none";
document.getElementById("19b").style.display="none" ;
document.getElementById("20a").style.display="none";
document.getElementById("20b").style.display="none" ;
document.getElementById("21a").style.display="none";
document.getElementById("21b").style.display="none" ;
document.getElementById("22a").style.display="none";
document.getElementById("22b").style.display="none" ;
document.getElementById("23a").style.display="none";
document.getElementById("23b").style.display="none" ;
document.getElementById("24a").style.display="none";
document.getElementById("24b").style.display="none" ;
     
btnn.addEventListener('click', (event) => {
    swal("Dommage!", "Tu as raté ta vie", "error");
}


);
                }

 if (id='#2a'&& message.number==2) {
const btn2 = document.getElementById('2a');

document.getElementById("1a").style.display="none";
document.getElementById("1b").style.display="none" ;  
document.getElementById("3a").style.display="none";
document.getElementById("3b").style.display="none" ; 
document.getElementById("4a").style.display="none";
document.getElementById("4b").style.display="none" ;
document.getElementById("5a").style.display="none";
document.getElementById("5b").style.display="none" ;
document.getElementById("6a").style.display="none";
document.getElementById("6b").style.display="none" ;
document.getElementById("7a").style.display="none";
document.getElementById("7b").style.display="none" ;
document.getElementById("8a").style.display="none";
document.getElementById("8b").style.display="none" ;
document.getElementById("9a").style.display="none";
document.getElementById("9b").style.display="none" ;
document.getElementById("10a").style.display="none";
document.getElementById("10b").style.display="none";
document.getElementById("11a").style.display="none";
document.getElementById("11b").style.display="none" ;
document.getElementById("12a").style.display="none";
document.getElementById("12b").style.display="none" ;
document.getElementById("13a").style.display="none";
document.getElementById("13b").style.display="none" ;
document.getElementById("14a").style.display="none";
document.getElementById("14b").style.display="none" ;
document.getElementById("15a").style.display="none";
document.getElementById("15b").style.display="none" ;
document.getElementById("16a").style.display="none";
document.getElementById("16b").style.display="none" ;
document.getElementById("17a").style.display="none";
document.getElementById("17b").style.display="none" ;
document.getElementById("18a").style.display="none";
document.getElementById("18b").style.display="none" ;
document.getElementById("19a").style.display="none";
document.getElementById("19b").style.display="none" ;
document.getElementById("20a").style.display="none";
document.getElementById("20b").style.display="none" ;
document.getElementById("21a").style.display="none";
document.getElementById("21b").style.display="none" ;
document.getElementById("22a").style.display="none";
document.getElementById("22b").style.display="none" ;
document.getElementById("23a").style.display="none";
document.getElementById("23b").style.display="none" ;
document.getElementById("24a").style.display="none";
document.getElementById("24b").style.display="none" ;   
btn2.addEventListener('click', (event) => {
    swal("Bravo!", "Tu as gagné ta vie", "success");
}
);
                }


                if (id='#2b'&& message.number==2) {
const btn2b = document.getElementById('2b')
document.getElementById("1a").style.display="none";
document.getElementById("1b").style.display="none" ;  
document.getElementById("3a").style.display="none";
document.getElementById("3b").style.display="none" ; 
document.getElementById("4a").style.display="none";
document.getElementById("4b").style.display="none" ;
document.getElementById("5a").style.display="none";
document.getElementById("5b").style.display="none" ;
document.getElementById("6a").style.display="none";
document.getElementById("6b").style.display="none" ;
document.getElementById("7a").style.display="none";
document.getElementById("7b").style.display="none" ;
document.getElementById("8a").style.display="none";
document.getElementById("8b").style.display="none" ;
document.getElementById("9a").style.display="none";
document.getElementById("9b").style.display="none" ;
document.getElementById("10a").style.display="none";
document.getElementById("10b").style.display="none";
document.getElementById("11a").style.display="none";
document.getElementById("11b").style.display="none" ;
document.getElementById("12a").style.display="none";
document.getElementById("12b").style.display="none" ;
document.getElementById("13a").style.display="none";
document.getElementById("13b").style.display="none" ;
document.getElementById("14a").style.display="none";
document.getElementById("14b").style.display="none" ;
document.getElementById("15a").style.display="none";
document.getElementById("15b").style.display="none" ;
document.getElementById("16a").style.display="none";
document.getElementById("16b").style.display="none" ;
document.getElementById("17a").style.display="none";
document.getElementById("17b").style.display="none" ;
document.getElementById("18a").style.display="none";
document.getElementById("18b").style.display="none" ;
document.getElementById("19a").style.display="none";
document.getElementById("19b").style.display="none" ;
document.getElementById("20a").style.display="none";
document.getElementById("20b").style.display="none" ;
document.getElementById("21a").style.display="none";
document.getElementById("21b").style.display="none" ;
document.getElementById("22a").style.display="none";
document.getElementById("22b").style.display="none" ;
document.getElementById("23a").style.display="none";
document.getElementById("23b").style.display="none" ;
document.getElementById("24a").style.display="none";
document.getElementById("24b").style.display="none" ; 
     
btn2b.addEventListener('click', (event) => {
    swal("Dommage!", "Tu as raté ta vie", "error");
}


);
                }

                if (id='#3a'&& message.number==3) {
const btn3 = document.getElementById('3a');

document.getElementById("1a").style.display="none";
document.getElementById("1b").style.display="none" ;  
document.getElementById("2a").style.display="none";
document.getElementById("2b").style.display="none" ; 
document.getElementById("4a").style.display="none";
document.getElementById("4b").style.display="none" ;
document.getElementById("5a").style.display="none";
document.getElementById("5b").style.display="none" ;
document.getElementById("6a").style.display="none";
document.getElementById("6b").style.display="none" ;
document.getElementById("7a").style.display="none";
document.getElementById("7b").style.display="none" ;
document.getElementById("8a").style.display="none";
document.getElementById("8b").style.display="none" ;
document.getElementById("9a").style.display="none";
document.getElementById("9b").style.display="none" ;
document.getElementById("10a").style.display="none";
document.getElementById("10b").style.display="none";
document.getElementById("11a").style.display="none";
document.getElementById("11b").style.display="none" ;
document.getElementById("12a").style.display="none";
document.getElementById("12b").style.display="none" ;
document.getElementById("13a").style.display="none";
document.getElementById("13b").style.display="none" ;
document.getElementById("14a").style.display="none";
document.getElementById("14b").style.display="none" ;
document.getElementById("15a").style.display="none";
document.getElementById("15b").style.display="none" ;
document.getElementById("16a").style.display="none";
document.getElementById("16b").style.display="none" ;
document.getElementById("17a").style.display="none";
document.getElementById("17b").style.display="none" ;
document.getElementById("18a").style.display="none";
document.getElementById("18b").style.display="none" ;
document.getElementById("19a").style.display="none";
document.getElementById("19b").style.display="none" ;
document.getElementById("20a").style.display="none";
document.getElementById("20b").style.display="none" ;
document.getElementById("21a").style.display="none";
document.getElementById("21b").style.display="none" ;
document.getElementById("22a").style.display="none";
document.getElementById("22b").style.display="none" ;
document.getElementById("23a").style.display="none";
document.getElementById("23b").style.display="none" ;
document.getElementById("24a").style.display="none";
document.getElementById("24b").style.display="none" ;   
btn3.addEventListener('click', (event) => {
    swal("Bravo!", "Tu as gagné ta vie", "success");
}
);
                }


                if (id='#3b'&& message.number==3) {
const btn3b = document.getElementById('3b')
document.getElementById("1a").style.display="none";
document.getElementById("1b").style.display="none" ;  
document.getElementById("2a").style.display="none";
document.getElementById("2b").style.display="none" ; 
document.getElementById("4a").style.display="none";
document.getElementById("4b").style.display="none" ;
document.getElementById("5a").style.display="none";
document.getElementById("5b").style.display="none" ;
document.getElementById("6a").style.display="none";
document.getElementById("6b").style.display="none" ;
document.getElementById("7a").style.display="none";
document.getElementById("7b").style.display="none" ;
document.getElementById("8a").style.display="none";
document.getElementById("8b").style.display="none" ;
document.getElementById("9a").style.display="none";
document.getElementById("9b").style.display="none" ;
document.getElementById("10a").style.display="none";
document.getElementById("10b").style.display="none";
document.getElementById("11a").style.display="none";
document.getElementById("11b").style.display="none" ;
document.getElementById("12a").style.display="none";
document.getElementById("12b").style.display="none" ;
document.getElementById("13a").style.display="none";
document.getElementById("13b").style.display="none" ;
document.getElementById("14a").style.display="none";
document.getElementById("14b").style.display="none" ;
document.getElementById("15a").style.display="none";
document.getElementById("15b").style.display="none" ;
document.getElementById("16a").style.display="none";
document.getElementById("16b").style.display="none" ;
document.getElementById("17a").style.display="none";
document.getElementById("17b").style.display="none" ;
document.getElementById("18a").style.display="none";
document.getElementById("18b").style.display="none" ;
document.getElementById("19a").style.display="none";
document.getElementById("19b").style.display="none" ;
document.getElementById("20a").style.display="none";
document.getElementById("20b").style.display="none" ;
document.getElementById("21a").style.display="none";
document.getElementById("21b").style.display="none" ;
document.getElementById("22a").style.display="none";
document.getElementById("22b").style.display="none" ;
document.getElementById("23a").style.display="none";
document.getElementById("23b").style.display="none" ;
document.getElementById("24a").style.display="none";
document.getElementById("24b").style.display="none" ; 
     
btn3b.addEventListener('click', (event) => {
    swal("Dommage!", "Tu as raté ta vie", "error");
}


);
                }
                if (id='#4a'&& message.number==4) {
const btn4 = document.getElementById('4a');

document.getElementById("1a").style.display="none";
document.getElementById("1b").style.display="none" ;  
document.getElementById("2a").style.display="none";
document.getElementById("2b").style.display="none" ; 
document.getElementById("3a").style.display="none";
document.getElementById("3b").style.display="none" ;
document.getElementById("5a").style.display="none";
document.getElementById("5b").style.display="none" ;
document.getElementById("6a").style.display="none";
document.getElementById("6b").style.display="none" ;
document.getElementById("7a").style.display="none";
document.getElementById("7b").style.display="none" ;
document.getElementById("8a").style.display="none";
document.getElementById("8b").style.display="none" ;
document.getElementById("9a").style.display="none";
document.getElementById("9b").style.display="none" ;
document.getElementById("10a").style.display="none";
document.getElementById("10b").style.display="none";
document.getElementById("11a").style.display="none";
document.getElementById("11b").style.display="none" ;
document.getElementById("12a").style.display="none";
document.getElementById("12b").style.display="none" ;
document.getElementById("13a").style.display="none";
document.getElementById("13b").style.display="none" ;
document.getElementById("14a").style.display="none";
document.getElementById("14b").style.display="none" ;
document.getElementById("15a").style.display="none";
document.getElementById("15b").style.display="none" ;
document.getElementById("16a").style.display="none";
document.getElementById("16b").style.display="none" ;
document.getElementById("17a").style.display="none";
document.getElementById("17b").style.display="none" ;
document.getElementById("18a").style.display="none";
document.getElementById("18b").style.display="none" ;
document.getElementById("19a").style.display="none";
document.getElementById("19b").style.display="none" ;
document.getElementById("20a").style.display="none";
document.getElementById("20b").style.display="none" ;
document.getElementById("21a").style.display="none";
document.getElementById("21b").style.display="none" ;
document.getElementById("22a").style.display="none";
document.getElementById("22b").style.display="none" ;
document.getElementById("23a").style.display="none";
document.getElementById("23b").style.display="none" ;
document.getElementById("24a").style.display="none";
document.getElementById("24b").style.display="none" ;   
btn4.addEventListener('click', (event) => {
    swal("Bravo!", "Tu as gagné ta vie", "success");
}
);
                }


                if (id='#4b'&& message.number==4) {
const btn4b = document.getElementById('4b')
document.getElementById("1a").style.display="none";
document.getElementById("1b").style.display="none" ;  
document.getElementById("2a").style.display="none";
document.getElementById("2b").style.display="none" ; 
document.getElementById("3a").style.display="none";
document.getElementById("3b").style.display="none" ;
document.getElementById("5a").style.display="none";
document.getElementById("5b").style.display="none" ;
document.getElementById("6a").style.display="none";
document.getElementById("6b").style.display="none" ;
document.getElementById("7a").style.display="none";
document.getElementById("7b").style.display="none" ;
document.getElementById("8a").style.display="none";
document.getElementById("8b").style.display="none" ;
document.getElementById("9a").style.display="none";
document.getElementById("9b").style.display="none" ;
document.getElementById("10a").style.display="none";
document.getElementById("10b").style.display="none";
document.getElementById("11a").style.display="none";
document.getElementById("11b").style.display="none" ;
document.getElementById("12a").style.display="none";
document.getElementById("12b").style.display="none" ;
document.getElementById("13a").style.display="none";
document.getElementById("13b").style.display="none" ;
document.getElementById("14a").style.display="none";
document.getElementById("14b").style.display="none" ;
document.getElementById("15a").style.display="none";
document.getElementById("15b").style.display="none" ;
document.getElementById("16a").style.display="none";
document.getElementById("16b").style.display="none" ;
document.getElementById("17a").style.display="none";
document.getElementById("17b").style.display="none" ;
document.getElementById("18a").style.display="none";
document.getElementById("18b").style.display="none" ;
document.getElementById("19a").style.display="none";
document.getElementById("19b").style.display="none" ;
document.getElementById("20a").style.display="none";
document.getElementById("20b").style.display="none" ;
document.getElementById("21a").style.display="none";
document.getElementById("21b").style.display="none" ;
document.getElementById("22a").style.display="none";
document.getElementById("22b").style.display="none" ;
document.getElementById("23a").style.display="none";
document.getElementById("23b").style.display="none" ;
document.getElementById("24a").style.display="none";
document.getElementById("24b").style.display="none" ; 
     
btn4b.addEventListener('click', (event) => {
    swal("Dommage!", "Tu as raté ta vie", "error");
}


);
                }
                if (id='#5a'&& message.number==5) {
const btn5 = document.getElementById('5a');

document.getElementById("1a").style.display="none";
document.getElementById("1b").style.display="none" ;  
document.getElementById("2a").style.display="none";
document.getElementById("2b").style.display="none" ; 
document.getElementById("3a").style.display="none";
document.getElementById("3b").style.display="none" ;
document.getElementById("4a").style.display="none";
document.getElementById("4b").style.display="none" ;
document.getElementById("6a").style.display="none";
document.getElementById("6b").style.display="none" ;
document.getElementById("7a").style.display="none";
document.getElementById("7b").style.display="none" ;
document.getElementById("8a").style.display="none";
document.getElementById("8b").style.display="none" ;
document.getElementById("9a").style.display="none";
document.getElementById("9b").style.display="none" ;
document.getElementById("10a").style.display="none";
document.getElementById("10b").style.display="none";
document.getElementById("11a").style.display="none";
document.getElementById("11b").style.display="none" ;
document.getElementById("12a").style.display="none";
document.getElementById("12b").style.display="none" ;
document.getElementById("13a").style.display="none";
document.getElementById("13b").style.display="none" ;
document.getElementById("14a").style.display="none";
document.getElementById("14b").style.display="none" ;
document.getElementById("15a").style.display="none";
document.getElementById("15b").style.display="none" ;
document.getElementById("16a").style.display="none";
document.getElementById("16b").style.display="none" ;
document.getElementById("17a").style.display="none";
document.getElementById("17b").style.display="none" ;
document.getElementById("18a").style.display="none";
document.getElementById("18b").style.display="none" ;
document.getElementById("19a").style.display="none";
document.getElementById("19b").style.display="none" ;
document.getElementById("20a").style.display="none";
document.getElementById("20b").style.display="none" ;
document.getElementById("21a").style.display="none";
document.getElementById("21b").style.display="none" ;
document.getElementById("22a").style.display="none";
document.getElementById("22b").style.display="none" ;
document.getElementById("23a").style.display="none";
document.getElementById("23b").style.display="none" ;
document.getElementById("24a").style.display="none";
document.getElementById("24b").style.display="none" ;   
btn5.addEventListener('click', (event) => {
    swal("Bravo!", "Tu as gagné ta vie", "success");
}
);
                }


                if (id='#5b'&& message.number==5) {
const btn5b = document.getElementById('5b')
document.getElementById("1a").style.display="none";
document.getElementById("1b").style.display="none" ;  
document.getElementById("2a").style.display="none";
document.getElementById("2b").style.display="none" ; 
document.getElementById("3a").style.display="none";
document.getElementById("3b").style.display="none" ;
document.getElementById("4a").style.display="none";
document.getElementById("4b").style.display="none" ;
document.getElementById("6a").style.display="none";
document.getElementById("6b").style.display="none" ;
document.getElementById("7a").style.display="none";
document.getElementById("7b").style.display="none" ;
document.getElementById("8a").style.display="none";
document.getElementById("8b").style.display="none" ;
document.getElementById("9a").style.display="none";
document.getElementById("9b").style.display="none" ;
document.getElementById("10a").style.display="none";
document.getElementById("10b").style.display="none";
document.getElementById("11a").style.display="none";
document.getElementById("11b").style.display="none" ;
document.getElementById("12a").style.display="none";
document.getElementById("12b").style.display="none" ;
document.getElementById("13a").style.display="none";
document.getElementById("13b").style.display="none" ;
document.getElementById("14a").style.display="none";
document.getElementById("14b").style.display="none" ;
document.getElementById("15a").style.display="none";
document.getElementById("15b").style.display="none" ;
document.getElementById("16a").style.display="none";
document.getElementById("16b").style.display="none" ;
document.getElementById("17a").style.display="none";
document.getElementById("17b").style.display="none" ;
document.getElementById("18a").style.display="none";
document.getElementById("18b").style.display="none" ;
document.getElementById("19a").style.display="none";
document.getElementById("19b").style.display="none" ;
document.getElementById("20a").style.display="none";
document.getElementById("20b").style.display="none" ;
document.getElementById("21a").style.display="none";
document.getElementById("21b").style.display="none" ;
document.getElementById("22a").style.display="none";
document.getElementById("22b").style.display="none" ;
document.getElementById("23a").style.display="none";
document.getElementById("23b").style.display="none" ;
document.getElementById("24a").style.display="none";
document.getElementById("24b").style.display="none" ; 
     
btn5b.addEventListener('click', (event) => {
    swal("Dommage!", "Tu as raté ta vie", "error");
}


);
                }
                    
                if (id='#5a'&& message.number==5) {
const btn5 = document.getElementById('5a');

document.getElementById("1a").style.display="none";
document.getElementById("1b").style.display="none" ;  
document.getElementById("2a").style.display="none";
document.getElementById("2b").style.display="none" ; 
document.getElementById("3a").style.display="none";
document.getElementById("3b").style.display="none" ;
document.getElementById("4a").style.display="none";
document.getElementById("4b").style.display="none" ;
document.getElementById("6a").style.display="none";
document.getElementById("6b").style.display="none" ;
document.getElementById("7a").style.display="none";
document.getElementById("7b").style.display="none" ;
document.getElementById("8a").style.display="none";
document.getElementById("8b").style.display="none" ;
document.getElementById("9a").style.display="none";
document.getElementById("9b").style.display="none" ;
document.getElementById("10a").style.display="none";
document.getElementById("10b").style.display="none";
document.getElementById("11a").style.display="none";
document.getElementById("11b").style.display="none" ;
document.getElementById("12a").style.display="none";
document.getElementById("12b").style.display="none" ;
document.getElementById("13a").style.display="none";
document.getElementById("13b").style.display="none" ;
document.getElementById("14a").style.display="none";
document.getElementById("14b").style.display="none" ;
document.getElementById("15a").style.display="none";
document.getElementById("15b").style.display="none" ;
document.getElementById("16a").style.display="none";
document.getElementById("16b").style.display="none" ;
document.getElementById("17a").style.display="none";
document.getElementById("17b").style.display="none" ;
document.getElementById("18a").style.display="none";
document.getElementById("18b").style.display="none" ;
document.getElementById("19a").style.display="none";
document.getElementById("19b").style.display="none" ;
document.getElementById("20a").style.display="none";
document.getElementById("20b").style.display="none" ;
document.getElementById("21a").style.display="none";
document.getElementById("21b").style.display="none" ;
document.getElementById("22a").style.display="none";
document.getElementById("22b").style.display="none" ;
document.getElementById("23a").style.display="none";
document.getElementById("23b").style.display="none" ;
document.getElementById("24a").style.display="none";
document.getElementById("24b").style.display="none" ;   
btn5.addEventListener('click', (event) => {
    swal("Bravo!", "Tu as gagné ta vie", "success");
}
);
                }


                if (id='#5b'&& message.number==5) {
const btn5b = document.getElementById('5b')
document.getElementById("1a").style.display="none";
document.getElementById("1b").style.display="none" ;  
document.getElementById("2a").style.display="none";
document.getElementById("2b").style.display="none" ; 
document.getElementById("3a").style.display="none";
document.getElementById("3b").style.display="none" ;
document.getElementById("4a").style.display="none";
document.getElementById("4b").style.display="none" ;
document.getElementById("6a").style.display="none";
document.getElementById("6b").style.display="none" ;
document.getElementById("7a").style.display="none";
document.getElementById("7b").style.display="none" ;
document.getElementById("8a").style.display="none";
document.getElementById("8b").style.display="none" ;
document.getElementById("9a").style.display="none";
document.getElementById("9b").style.display="none" ;
document.getElementById("10a").style.display="none";
document.getElementById("10b").style.display="none";
document.getElementById("11a").style.display="none";
document.getElementById("11b").style.display="none" ;
document.getElementById("12a").style.display="none";
document.getElementById("12b").style.display="none" ;
document.getElementById("13a").style.display="none";
document.getElementById("13b").style.display="none" ;
document.getElementById("14a").style.display="none";
document.getElementById("14b").style.display="none" ;
document.getElementById("15a").style.display="none";
document.getElementById("15b").style.display="none" ;
document.getElementById("16a").style.display="none";
document.getElementById("16b").style.display="none" ;
document.getElementById("17a").style.display="none";
document.getElementById("17b").style.display="none" ;
document.getElementById("18a").style.display="none";
document.getElementById("18b").style.display="none" ;
document.getElementById("19a").style.display="none";
document.getElementById("19b").style.display="none" ;
document.getElementById("20a").style.display="none";
document.getElementById("20b").style.display="none" ;
document.getElementById("21a").style.display="none";
document.getElementById("21b").style.display="none" ;
document.getElementById("22a").style.display="none";
document.getElementById("22b").style.display="none" ;
document.getElementById("23a").style.display="none";
document.getElementById("23b").style.display="none" ;
document.getElementById("24a").style.display="none";
document.getElementById("24b").style.display="none" ; 
     
btn5b.addEventListener('click', (event) => {
    swal("Dommage!", "Tu as raté ta vie", "error");
}


);
                }
                if (id='#6a'&& message.number==6) {
const btn6 = document.getElementById('6a');

document.getElementById("1a").style.display="none";
document.getElementById("1b").style.display="none" ;  
document.getElementById("2a").style.display="none";
document.getElementById("2b").style.display="none" ; 
document.getElementById("3a").style.display="none";
document.getElementById("3b").style.display="none" ;
document.getElementById("4a").style.display="none";
document.getElementById("4b").style.display="none" ;
document.getElementById("5a").style.display="none";
document.getElementById("5b").style.display="none" ;
document.getElementById("7a").style.display="none";
document.getElementById("7b").style.display="none" ;
document.getElementById("8a").style.display="none";
document.getElementById("8b").style.display="none" ;
document.getElementById("9a").style.display="none";
document.getElementById("9b").style.display="none" ;
document.getElementById("10a").style.display="none";
document.getElementById("10b").style.display="none";
document.getElementById("11a").style.display="none";
document.getElementById("11b").style.display="none" ;
document.getElementById("12a").style.display="none";
document.getElementById("12b").style.display="none" ;
document.getElementById("13a").style.display="none";
document.getElementById("13b").style.display="none" ;
document.getElementById("14a").style.display="none";
document.getElementById("14b").style.display="none" ;
document.getElementById("15a").style.display="none";
document.getElementById("15b").style.display="none" ;
document.getElementById("16a").style.display="none";
document.getElementById("16b").style.display="none" ;
document.getElementById("17a").style.display="none";
document.getElementById("17b").style.display="none" ;
document.getElementById("18a").style.display="none";
document.getElementById("18b").style.display="none" ;
document.getElementById("19a").style.display="none";
document.getElementById("19b").style.display="none" ;
document.getElementById("20a").style.display="none";
document.getElementById("20b").style.display="none" ;
document.getElementById("21a").style.display="none";
document.getElementById("21b").style.display="none" ;
document.getElementById("22a").style.display="none";
document.getElementById("22b").style.display="none" ;
document.getElementById("23a").style.display="none";
document.getElementById("23b").style.display="none" ;
document.getElementById("24a").style.display="none";
document.getElementById("24b").style.display="none" ;   
btn6.addEventListener('click', (event) => {
    swal("Bravo!", "Tu as gagné ta vie", "success");
}
);
                }


                if (id='#6b'&& message.number==6) {
const btn6b = document.getElementById('6b')
document.getElementById("1a").style.display="none";
document.getElementById("1b").style.display="none" ;  
document.getElementById("2a").style.display="none";
document.getElementById("2b").style.display="none" ; 
document.getElementById("3a").style.display="none";
document.getElementById("3b").style.display="none" ;
document.getElementById("4a").style.display="none";
document.getElementById("4b").style.display="none" ;
document.getElementById("5a").style.display="none";
document.getElementById("5b").style.display="none" ;
document.getElementById("7a").style.display="none";
document.getElementById("7b").style.display="none" ;
document.getElementById("8a").style.display="none";
document.getElementById("8b").style.display="none" ;
document.getElementById("9a").style.display="none";
document.getElementById("9b").style.display="none" ;
document.getElementById("10a").style.display="none";
document.getElementById("10b").style.display="none";
document.getElementById("11a").style.display="none";
document.getElementById("11b").style.display="none" ;
document.getElementById("12a").style.display="none";
document.getElementById("12b").style.display="none" ;
document.getElementById("13a").style.display="none";
document.getElementById("13b").style.display="none" ;
document.getElementById("14a").style.display="none";
document.getElementById("14b").style.display="none" ;
document.getElementById("15a").style.display="none";
document.getElementById("15b").style.display="none" ;
document.getElementById("16a").style.display="none";
document.getElementById("16b").style.display="none" ;
document.getElementById("17a").style.display="none";
document.getElementById("17b").style.display="none" ;
document.getElementById("18a").style.display="none";
document.getElementById("18b").style.display="none" ;
document.getElementById("19a").style.display="none";
document.getElementById("19b").style.display="none" ;
document.getElementById("20a").style.display="none";
document.getElementById("20b").style.display="none" ;
document.getElementById("21a").style.display="none";
document.getElementById("21b").style.display="none" ;
document.getElementById("22a").style.display="none";
document.getElementById("22b").style.display="none" ;
document.getElementById("23a").style.display="none";
document.getElementById("23b").style.display="none" ;
document.getElementById("24a").style.display="none";
document.getElementById("24b").style.display="none" ; 
     
btn6b.addEventListener('click', (event) => {
    swal("Dommage!", "Tu as raté ta vie", "error");
}


);
                }
      
                if (id='#7a'&& message.number==7) {
const btn7 = document.getElementById('7a');

document.getElementById("1a").style.display="none";
document.getElementById("1b").style.display="none" ;  
document.getElementById("2a").style.display="none";
document.getElementById("2b").style.display="none" ; 
document.getElementById("3a").style.display="none";
document.getElementById("3b").style.display="none" ;
document.getElementById("4a").style.display="none";
document.getElementById("4b").style.display="none" ;
document.getElementById("5a").style.display="none";
document.getElementById("5b").style.display="none" ;
document.getElementById("6a").style.display="none";
document.getElementById("6b").style.display="none" ;
document.getElementById("8a").style.display="none";
document.getElementById("8b").style.display="none" ;
document.getElementById("9a").style.display="none";
document.getElementById("9b").style.display="none" ;
document.getElementById("10a").style.display="none";
document.getElementById("10b").style.display="none";
document.getElementById("11a").style.display="none";
document.getElementById("11b").style.display="none" ;
document.getElementById("12a").style.display="none";
document.getElementById("12b").style.display="none" ;
document.getElementById("13a").style.display="none";
document.getElementById("13b").style.display="none" ;
document.getElementById("14a").style.display="none";
document.getElementById("14b").style.display="none" ;
document.getElementById("15a").style.display="none";
document.getElementById("15b").style.display="none" ;
document.getElementById("16a").style.display="none";
document.getElementById("16b").style.display="none" ;
document.getElementById("17a").style.display="none";
document.getElementById("17b").style.display="none" ;
document.getElementById("18a").style.display="none";
document.getElementById("18b").style.display="none" ;
document.getElementById("19a").style.display="none";
document.getElementById("19b").style.display="none" ;
document.getElementById("20a").style.display="none";
document.getElementById("20b").style.display="none" ;
document.getElementById("21a").style.display="none";
document.getElementById("21b").style.display="none" ;
document.getElementById("22a").style.display="none";
document.getElementById("22b").style.display="none" ;
document.getElementById("23a").style.display="none";
document.getElementById("23b").style.display="none" ;
document.getElementById("24a").style.display="none";
document.getElementById("24b").style.display="none" ;   
btn7.addEventListener('click', (event) => {
    swal("Bravo!", "Tu as gagné ta vie", "success");
}
);
                }


                if (id='#7b'&& message.number==7) {
const btn7b = document.getElementById('7b')
document.getElementById("1a").style.display="none";
document.getElementById("1b").style.display="none" ;  
document.getElementById("2a").style.display="none";
document.getElementById("2b").style.display="none" ; 
document.getElementById("3a").style.display="none";
document.getElementById("3b").style.display="none" ;
document.getElementById("4a").style.display="none";
document.getElementById("4b").style.display="none" ;
document.getElementById("5a").style.display="none";
document.getElementById("5b").style.display="none" ;
document.getElementById("6a").style.display="none";
document.getElementById("6b").style.display="none" ;
document.getElementById("8a").style.display="none";
document.getElementById("8b").style.display="none" ;
document.getElementById("9a").style.display="none";
document.getElementById("9b").style.display="none" ;
document.getElementById("10a").style.display="none";
document.getElementById("10b").style.display="none";
document.getElementById("11a").style.display="none";
document.getElementById("11b").style.display="none" ;
document.getElementById("12a").style.display="none";
document.getElementById("12b").style.display="none" ;
document.getElementById("13a").style.display="none";
document.getElementById("13b").style.display="none" ;
document.getElementById("14a").style.display="none";
document.getElementById("14b").style.display="none" ;
document.getElementById("15a").style.display="none";
document.getElementById("15b").style.display="none" ;
document.getElementById("16a").style.display="none";
document.getElementById("16b").style.display="none" ;
document.getElementById("17a").style.display="none";
document.getElementById("17b").style.display="none" ;
document.getElementById("18a").style.display="none";
document.getElementById("18b").style.display="none" ;
document.getElementById("19a").style.display="none";
document.getElementById("19b").style.display="none" ;
document.getElementById("20a").style.display="none";
document.getElementById("20b").style.display="none" ;
document.getElementById("21a").style.display="none";
document.getElementById("21b").style.display="none" ;
document.getElementById("22a").style.display="none";
document.getElementById("22b").style.display="none" ;
document.getElementById("23a").style.display="none";
document.getElementById("23b").style.display="none" ;
document.getElementById("24a").style.display="none";
document.getElementById("24b").style.display="none" ; 
     
btn7b.addEventListener('click', (event) => {
    swal("Dommage!", "Tu as raté ta vie", "error");
}


);
                }
                if (id='#8a'&& message.number==8) {
const btn8 = document.getElementById('8a');

document.getElementById("1a").style.display="none";
document.getElementById("1b").style.display="none" ;  
document.getElementById("2a").style.display="none";
document.getElementById("2b").style.display="none" ; 
document.getElementById("3a").style.display="none";
document.getElementById("3b").style.display="none" ;
document.getElementById("4a").style.display="none";
document.getElementById("4b").style.display="none" ;
document.getElementById("5a").style.display="none";
document.getElementById("5b").style.display="none" ;
document.getElementById("6a").style.display="none";
document.getElementById("6b").style.display="none" ;
document.getElementById("7a").style.display="none";
document.getElementById("7b").style.display="none" ;
document.getElementById("9a").style.display="none";
document.getElementById("9b").style.display="none" ;
document.getElementById("10a").style.display="none";
document.getElementById("10b").style.display="none";
document.getElementById("11a").style.display="none";
document.getElementById("11b").style.display="none" ;
document.getElementById("12a").style.display="none";
document.getElementById("12b").style.display="none" ;
document.getElementById("13a").style.display="none";
document.getElementById("13b").style.display="none" ;
document.getElementById("14a").style.display="none";
document.getElementById("14b").style.display="none" ;
document.getElementById("15a").style.display="none";
document.getElementById("15b").style.display="none" ;
document.getElementById("16a").style.display="none";
document.getElementById("16b").style.display="none" ;
document.getElementById("17a").style.display="none";
document.getElementById("17b").style.display="none" ;
document.getElementById("18a").style.display="none";
document.getElementById("18b").style.display="none" ;
document.getElementById("19a").style.display="none";
document.getElementById("19b").style.display="none" ;
document.getElementById("20a").style.display="none";
document.getElementById("20b").style.display="none" ;
document.getElementById("21a").style.display="none";
document.getElementById("21b").style.display="none" ;
document.getElementById("22a").style.display="none";
document.getElementById("22b").style.display="none" ;
document.getElementById("23a").style.display="none";
document.getElementById("23b").style.display="none" ;
document.getElementById("24a").style.display="none";
document.getElementById("24b").style.display="none" ;   
btn8.addEventListener('click', (event) => {
    swal("Bravo!", "Tu as gagné ta vie", "success");
}
);
                }


                if (id='#8b'&& message.number==8) {
const btn8b = document.getElementById('8b')
document.getElementById("1a").style.display="none";
document.getElementById("1b").style.display="none" ;  
document.getElementById("2a").style.display="none";
document.getElementById("2b").style.display="none" ; 
document.getElementById("3a").style.display="none";
document.getElementById("3b").style.display="none" ;
document.getElementById("4a").style.display="none";
document.getElementById("4b").style.display="none" ;
document.getElementById("5a").style.display="none";
document.getElementById("5b").style.display="none" ;
document.getElementById("6a").style.display="none";
document.getElementById("6b").style.display="none" ;
document.getElementById("7a").style.display="none";
document.getElementById("7b").style.display="none" ;
document.getElementById("9a").style.display="none";
document.getElementById("9b").style.display="none" ;
document.getElementById("10a").style.display="none";
document.getElementById("10b").style.display="none";
document.getElementById("11a").style.display="none";
document.getElementById("11b").style.display="none" ;
document.getElementById("12a").style.display="none";
document.getElementById("12b").style.display="none" ;
document.getElementById("13a").style.display="none";
document.getElementById("13b").style.display="none" ;
document.getElementById("14a").style.display="none";
document.getElementById("14b").style.display="none" ;
document.getElementById("15a").style.display="none";
document.getElementById("15b").style.display="none" ;
document.getElementById("16a").style.display="none";
document.getElementById("16b").style.display="none" ;
document.getElementById("17a").style.display="none";
document.getElementById("17b").style.display="none" ;
document.getElementById("18a").style.display="none";
document.getElementById("18b").style.display="none" ;
document.getElementById("19a").style.display="none";
document.getElementById("19b").style.display="none" ;
document.getElementById("20a").style.display="none";
document.getElementById("20b").style.display="none" ;
document.getElementById("21a").style.display="none";
document.getElementById("21b").style.display="none" ;
document.getElementById("22a").style.display="none";
document.getElementById("22b").style.display="none" ;
document.getElementById("23a").style.display="none";
document.getElementById("23b").style.display="none" ;
document.getElementById("24a").style.display="none";
document.getElementById("24b").style.display="none" ; 
     
btn8b.addEventListener('click', (event) => {
    swal("Dommage!", "Tu as raté ta vie", "error");
}


);
                }
                if (id='#9a'&& message.number==9) {
const btn9 = document.getElementById('9a');

document.getElementById("1a").style.display="none";
document.getElementById("1b").style.display="none" ;  
document.getElementById("2a").style.display="none";
document.getElementById("2b").style.display="none" ; 
document.getElementById("3a").style.display="none";
document.getElementById("3b").style.display="none" ;
document.getElementById("4a").style.display="none";
document.getElementById("4b").style.display="none" ;
document.getElementById("5a").style.display="none";
document.getElementById("5b").style.display="none" ;
document.getElementById("6a").style.display="none";
document.getElementById("6b").style.display="none" ;
document.getElementById("7a").style.display="none";
document.getElementById("7b").style.display="none" ;
document.getElementById("8a").style.display="none";
document.getElementById("8b").style.display="none" ;
document.getElementById("10a").style.display="none";
document.getElementById("10b").style.display="none";
document.getElementById("11a").style.display="none";
document.getElementById("11b").style.display="none" ;
document.getElementById("12a").style.display="none";
document.getElementById("12b").style.display="none" ;
document.getElementById("13a").style.display="none";
document.getElementById("13b").style.display="none" ;
document.getElementById("14a").style.display="none";
document.getElementById("14b").style.display="none" ;
document.getElementById("15a").style.display="none";
document.getElementById("15b").style.display="none" ;
document.getElementById("16a").style.display="none";
document.getElementById("16b").style.display="none" ;
document.getElementById("17a").style.display="none";
document.getElementById("17b").style.display="none" ;
document.getElementById("18a").style.display="none";
document.getElementById("18b").style.display="none" ;
document.getElementById("19a").style.display="none";
document.getElementById("19b").style.display="none" ;
document.getElementById("20a").style.display="none";
document.getElementById("20b").style.display="none" ;
document.getElementById("21a").style.display="none";
document.getElementById("21b").style.display="none" ;
document.getElementById("22a").style.display="none";
document.getElementById("22b").style.display="none" ;
document.getElementById("23a").style.display="none";
document.getElementById("23b").style.display="none" ;
document.getElementById("24a").style.display="none";
document.getElementById("24b").style.display="none" ;   
btn9.addEventListener('click', (event) => {
    swal("Bravo!", "Tu as gagné ta vie", "success");
}
);
                }


                if (id='#9b'&& message.number==9) {
const btn9b = document.getElementById('9b')
document.getElementById("1a").style.display="none";
document.getElementById("1b").style.display="none" ;  
document.getElementById("2a").style.display="none";
document.getElementById("2b").style.display="none" ; 
document.getElementById("3a").style.display="none";
document.getElementById("3b").style.display="none" ;
document.getElementById("4a").style.display="none";
document.getElementById("4b").style.display="none" ;
document.getElementById("5a").style.display="none";
document.getElementById("5b").style.display="none" ;
document.getElementById("6a").style.display="none";
document.getElementById("6b").style.display="none" ;
document.getElementById("7a").style.display="none";
document.getElementById("7b").style.display="none" ;
document.getElementById("8a").style.display="none";
document.getElementById("8b").style.display="none" ;
document.getElementById("10a").style.display="none";
document.getElementById("10b").style.display="none";
document.getElementById("11a").style.display="none";
document.getElementById("11b").style.display="none" ;
document.getElementById("12a").style.display="none";
document.getElementById("12b").style.display="none" ;
document.getElementById("13a").style.display="none";
document.getElementById("13b").style.display="none" ;
document.getElementById("14a").style.display="none";
document.getElementById("14b").style.display="none" ;
document.getElementById("15a").style.display="none";
document.getElementById("15b").style.display="none" ;
document.getElementById("16a").style.display="none";
document.getElementById("16b").style.display="none" ;
document.getElementById("17a").style.display="none";
document.getElementById("17b").style.display="none" ;
document.getElementById("18a").style.display="none";
document.getElementById("18b").style.display="none" ;
document.getElementById("19a").style.display="none";
document.getElementById("19b").style.display="none" ;
document.getElementById("20a").style.display="none";
document.getElementById("20b").style.display="none" ;
document.getElementById("21a").style.display="none";
document.getElementById("21b").style.display="none" ;
document.getElementById("22a").style.display="none";
document.getElementById("22b").style.display="none" ;
document.getElementById("23a").style.display="none";
document.getElementById("23b").style.display="none" ;
document.getElementById("24a").style.display="none";
document.getElementById("24b").style.display="none" ; 
     
btn9b.addEventListener('click', (event) => {
    swal("Dommage!", "Tu as raté ta vie", "error");
}


);
                }
                if (id='#10a'&& message.number==10) {
const btn10 = document.getElementById('10a');

document.getElementById("1a").style.display="none";
document.getElementById("1b").style.display="none" ;  
document.getElementById("2a").style.display="none";
document.getElementById("2b").style.display="none" ; 
document.getElementById("3a").style.display="none";
document.getElementById("3b").style.display="none" ;
document.getElementById("4a").style.display="none";
document.getElementById("4b").style.display="none" ;
document.getElementById("5a").style.display="none";
document.getElementById("5b").style.display="none" ;
document.getElementById("6a").style.display="none";
document.getElementById("6b").style.display="none" ;
document.getElementById("7a").style.display="none";
document.getElementById("7b").style.display="none" ;
document.getElementById("8a").style.display="none";
document.getElementById("8b").style.display="none" ;
document.getElementById("9a").style.display="none";
document.getElementById("9b").style.display="none";
document.getElementById("11a").style.display="none";
document.getElementById("11b").style.display="none" ;
document.getElementById("12a").style.display="none";
document.getElementById("12b").style.display="none" ;
document.getElementById("13a").style.display="none";
document.getElementById("13b").style.display="none" ;
document.getElementById("14a").style.display="none";
document.getElementById("14b").style.display="none" ;
document.getElementById("15a").style.display="none";
document.getElementById("15b").style.display="none" ;
document.getElementById("16a").style.display="none";
document.getElementById("16b").style.display="none" ;
document.getElementById("17a").style.display="none";
document.getElementById("17b").style.display="none" ;
document.getElementById("18a").style.display="none";
document.getElementById("18b").style.display="none" ;
document.getElementById("19a").style.display="none";
document.getElementById("19b").style.display="none" ;
document.getElementById("20a").style.display="none";
document.getElementById("20b").style.display="none" ;
document.getElementById("21a").style.display="none";
document.getElementById("21b").style.display="none" ;
document.getElementById("22a").style.display="none";
document.getElementById("22b").style.display="none" ;
document.getElementById("23a").style.display="none";
document.getElementById("23b").style.display="none" ;
document.getElementById("24a").style.display="none";
document.getElementById("24b").style.display="none" ;   
btn10.addEventListener('click', (event) => {
    swal("Bravo!", "Tu as gagné ta vie", "success");
}
);
                }


                if (id='#10b'&& message.number==10) {
const btn10b = document.getElementById('10b')
document.getElementById("1a").style.display="none";
document.getElementById("1b").style.display="none" ;  
document.getElementById("2a").style.display="none";
document.getElementById("2b").style.display="none" ; 
document.getElementById("3a").style.display="none";
document.getElementById("3b").style.display="none" ;
document.getElementById("4a").style.display="none";
document.getElementById("4b").style.display="none" ;
document.getElementById("5a").style.display="none";
document.getElementById("5b").style.display="none" ;
document.getElementById("6a").style.display="none";
document.getElementById("6b").style.display="none" ;
document.getElementById("7a").style.display="none";
document.getElementById("7b").style.display="none" ;
document.getElementById("8a").style.display="none";
document.getElementById("8b").style.display="none" ;
document.getElementById("9a").style.display="none";
document.getElementById("9b").style.display="none";
document.getElementById("11a").style.display="none";
document.getElementById("11b").style.display="none" ;
document.getElementById("12a").style.display="none";
document.getElementById("12b").style.display="none" ;
document.getElementById("13a").style.display="none";
document.getElementById("13b").style.display="none" ;
document.getElementById("14a").style.display="none";
document.getElementById("14b").style.display="none" ;
document.getElementById("15a").style.display="none";
document.getElementById("15b").style.display="none" ;
document.getElementById("16a").style.display="none";
document.getElementById("16b").style.display="none" ;
document.getElementById("17a").style.display="none";
document.getElementById("17b").style.display="none" ;
document.getElementById("18a").style.display="none";
document.getElementById("18b").style.display="none" ;
document.getElementById("19a").style.display="none";
document.getElementById("19b").style.display="none" ;
document.getElementById("20a").style.display="none";
document.getElementById("20b").style.display="none" ;
document.getElementById("21a").style.display="none";
document.getElementById("21b").style.display="none" ;
document.getElementById("22a").style.display="none";
document.getElementById("22b").style.display="none" ;
document.getElementById("23a").style.display="none";
document.getElementById("23b").style.display="none" ;
document.getElementById("24a").style.display="none";
document.getElementById("24b").style.display="none" ; 
     
btn10b.addEventListener('click', (event) => {
    swal("Dommage!", "Tu as raté ta vie", "error");
}


);
                }
                if (id='#11a'&& message.number==11) {
const btn11 = document.getElementById('11a');

document.getElementById("1a").style.display="none";
document.getElementById("1b").style.display="none" ;  
document.getElementById("2a").style.display="none";
document.getElementById("2b").style.display="none" ; 
document.getElementById("3a").style.display="none";
document.getElementById("3b").style.display="none" ;
document.getElementById("4a").style.display="none";
document.getElementById("4b").style.display="none" ;
document.getElementById("5a").style.display="none";
document.getElementById("5b").style.display="none" ;
document.getElementById("6a").style.display="none";
document.getElementById("6b").style.display="none" ;
document.getElementById("7a").style.display="none";
document.getElementById("7b").style.display="none" ;
document.getElementById("8a").style.display="none";
document.getElementById("8b").style.display="none" ;
document.getElementById("9a").style.display="none";
document.getElementById("9b").style.display="none";
document.getElementById("10a").style.display="none";
document.getElementById("10b").style.display="none" ;
document.getElementById("12a").style.display="none";
document.getElementById("12b").style.display="none" ;
document.getElementById("13a").style.display="none";
document.getElementById("13b").style.display="none" ;
document.getElementById("14a").style.display="none";
document.getElementById("14b").style.display="none" ;
document.getElementById("15a").style.display="none";
document.getElementById("15b").style.display="none" ;
document.getElementById("16a").style.display="none";
document.getElementById("16b").style.display="none" ;
document.getElementById("17a").style.display="none";
document.getElementById("17b").style.display="none" ;
document.getElementById("18a").style.display="none";
document.getElementById("18b").style.display="none" ;
document.getElementById("19a").style.display="none";
document.getElementById("19b").style.display="none" ;
document.getElementById("20a").style.display="none";
document.getElementById("20b").style.display="none" ;
document.getElementById("21a").style.display="none";
document.getElementById("21b").style.display="none" ;
document.getElementById("22a").style.display="none";
document.getElementById("22b").style.display="none" ;
document.getElementById("23a").style.display="none";
document.getElementById("23b").style.display="none" ;
document.getElementById("24a").style.display="none";
document.getElementById("24b").style.display="none" ;   
btn11.addEventListener('click', (event) => {
    swal("Bravo!", "Tu as gagné ta vie", "success");
}
);
                }


                if (id='#11b'&& message.number==11) {
const btn11b = document.getElementById('11b')
document.getElementById("1a").style.display="none";
document.getElementById("1b").style.display="none" ;  
document.getElementById("2a").style.display="none";
document.getElementById("2b").style.display="none" ; 
document.getElementById("3a").style.display="none";
document.getElementById("3b").style.display="none" ;
document.getElementById("4a").style.display="none";
document.getElementById("4b").style.display="none" ;
document.getElementById("5a").style.display="none";
document.getElementById("5b").style.display="none" ;
document.getElementById("6a").style.display="none";
document.getElementById("6b").style.display="none" ;
document.getElementById("7a").style.display="none";
document.getElementById("7b").style.display="none" ;
document.getElementById("8a").style.display="none";
document.getElementById("8b").style.display="none" ;
document.getElementById("9a").style.display="none";
document.getElementById("9b").style.display="none";
document.getElementById("10a").style.display="none";
document.getElementById("10b").style.display="none" ;
document.getElementById("12a").style.display="none";
document.getElementById("12b").style.display="none" ;
document.getElementById("13a").style.display="none";
document.getElementById("13b").style.display="none" ;
document.getElementById("14a").style.display="none";
document.getElementById("14b").style.display="none" ;
document.getElementById("15a").style.display="none";
document.getElementById("15b").style.display="none" ;
document.getElementById("16a").style.display="none";
document.getElementById("16b").style.display="none" ;
document.getElementById("17a").style.display="none";
document.getElementById("17b").style.display="none" ;
document.getElementById("18a").style.display="none";
document.getElementById("18b").style.display="none" ;
document.getElementById("19a").style.display="none";
document.getElementById("19b").style.display="none" ;
document.getElementById("20a").style.display="none";
document.getElementById("20b").style.display="none" ;
document.getElementById("21a").style.display="none";
document.getElementById("21b").style.display="none" ;
document.getElementById("22a").style.display="none";
document.getElementById("22b").style.display="none" ;
document.getElementById("23a").style.display="none";
document.getElementById("23b").style.display="none" ;
document.getElementById("24a").style.display="none";
document.getElementById("24b").style.display="none" ; 
     
btn11b.addEventListener('click', (event) => {
    swal("Dommage!", "Tu as raté ta vie", "error");
}


);
                }
                if (id='#12a'&& message.number==12) {
const btn12 = document.getElementById('12a');

document.getElementById("1a").style.display="none";
document.getElementById("1b").style.display="none" ;  
document.getElementById("2a").style.display="none";
document.getElementById("2b").style.display="none" ; 
document.getElementById("3a").style.display="none";
document.getElementById("3b").style.display="none" ;
document.getElementById("4a").style.display="none";
document.getElementById("4b").style.display="none" ;
document.getElementById("5a").style.display="none";
document.getElementById("5b").style.display="none" ;
document.getElementById("6a").style.display="none";
document.getElementById("6b").style.display="none" ;
document.getElementById("7a").style.display="none";
document.getElementById("7b").style.display="none" ;
document.getElementById("8a").style.display="none";
document.getElementById("8b").style.display="none" ;
document.getElementById("9a").style.display="none";
document.getElementById("9b").style.display="none";
document.getElementById("10a").style.display="none";
document.getElementById("10b").style.display="none" ;
document.getElementById("11a").style.display="none";
document.getElementById("11b").style.display="none" ;
document.getElementById("13a").style.display="none";
document.getElementById("13b").style.display="none" ;
document.getElementById("14a").style.display="none";
document.getElementById("14b").style.display="none" ;
document.getElementById("15a").style.display="none";
document.getElementById("15b").style.display="none" ;
document.getElementById("16a").style.display="none";
document.getElementById("16b").style.display="none" ;
document.getElementById("17a").style.display="none";
document.getElementById("17b").style.display="none" ;
document.getElementById("18a").style.display="none";
document.getElementById("18b").style.display="none" ;
document.getElementById("19a").style.display="none";
document.getElementById("19b").style.display="none" ;
document.getElementById("20a").style.display="none";
document.getElementById("20b").style.display="none" ;
document.getElementById("21a").style.display="none";
document.getElementById("21b").style.display="none" ;
document.getElementById("22a").style.display="none";
document.getElementById("22b").style.display="none" ;
document.getElementById("23a").style.display="none";
document.getElementById("23b").style.display="none" ;
document.getElementById("24a").style.display="none";
document.getElementById("24b").style.display="none" ;   
btn12.addEventListener('click', (event) => {
    swal("Bravo!", "Tu as gagné ta vie", "success");
}
);
                }


                if (id='#12b'&& message.number==12) {
const btn12b = document.getElementById('12b')
document.getElementById("1a").style.display="none";
document.getElementById("1b").style.display="none" ;  
document.getElementById("2a").style.display="none";
document.getElementById("2b").style.display="none" ; 
document.getElementById("3a").style.display="none";
document.getElementById("3b").style.display="none" ;
document.getElementById("4a").style.display="none";
document.getElementById("4b").style.display="none" ;
document.getElementById("5a").style.display="none";
document.getElementById("5b").style.display="none" ;
document.getElementById("6a").style.display="none";
document.getElementById("6b").style.display="none" ;
document.getElementById("7a").style.display="none";
document.getElementById("7b").style.display="none" ;
document.getElementById("8a").style.display="none";
document.getElementById("8b").style.display="none" ;
document.getElementById("9a").style.display="none";
document.getElementById("9b").style.display="none";
document.getElementById("10a").style.display="none";
document.getElementById("10b").style.display="none" ;
document.getElementById("11a").style.display="none";
document.getElementById("11b").style.display="none" ;
document.getElementById("13a").style.display="none";
document.getElementById("13b").style.display="none" ;
document.getElementById("14a").style.display="none";
document.getElementById("14b").style.display="none" ;
document.getElementById("15a").style.display="none";
document.getElementById("15b").style.display="none" ;
document.getElementById("16a").style.display="none";
document.getElementById("16b").style.display="none" ;
document.getElementById("17a").style.display="none";
document.getElementById("17b").style.display="none" ;
document.getElementById("18a").style.display="none";
document.getElementById("18b").style.display="none" ;
document.getElementById("19a").style.display="none";
document.getElementById("19b").style.display="none" ;
document.getElementById("20a").style.display="none";
document.getElementById("20b").style.display="none" ;
document.getElementById("21a").style.display="none";
document.getElementById("21b").style.display="none" ;
document.getElementById("22a").style.display="none";
document.getElementById("22b").style.display="none" ;
document.getElementById("23a").style.display="none";
document.getElementById("23b").style.display="none" ;
document.getElementById("24a").style.display="none";
document.getElementById("24b").style.display="none" ; 
     
btn12b.addEventListener('click', (event) => {
    swal("Dommage!", "Tu as raté ta vie", "error");
}


);
                }
                if (id='#13a'&& message.number==13) {
const btn13 = document.getElementById('13a');

document.getElementById("1a").style.display="none";
document.getElementById("1b").style.display="none" ;  
document.getElementById("2a").style.display="none";
document.getElementById("2b").style.display="none" ; 
document.getElementById("3a").style.display="none";
document.getElementById("3b").style.display="none" ;
document.getElementById("4a").style.display="none";
document.getElementById("4b").style.display="none" ;
document.getElementById("5a").style.display="none";
document.getElementById("5b").style.display="none" ;
document.getElementById("6a").style.display="none";
document.getElementById("6b").style.display="none" ;
document.getElementById("7a").style.display="none";
document.getElementById("7b").style.display="none" ;
document.getElementById("8a").style.display="none";
document.getElementById("8b").style.display="none" ;
document.getElementById("9a").style.display="none";
document.getElementById("9b").style.display="none";
document.getElementById("10a").style.display="none";
document.getElementById("10b").style.display="none" ;
document.getElementById("11a").style.display="none";
document.getElementById("11b").style.display="none" ;
document.getElementById("12a").style.display="none";
document.getElementById("12b").style.display="none" ;
document.getElementById("14a").style.display="none";
document.getElementById("14b").style.display="none" ;
document.getElementById("15a").style.display="none";
document.getElementById("15b").style.display="none" ;
document.getElementById("16a").style.display="none";
document.getElementById("16b").style.display="none" ;
document.getElementById("17a").style.display="none";
document.getElementById("17b").style.display="none" ;
document.getElementById("18a").style.display="none";
document.getElementById("18b").style.display="none" ;
document.getElementById("19a").style.display="none";
document.getElementById("19b").style.display="none" ;
document.getElementById("20a").style.display="none";
document.getElementById("20b").style.display="none" ;
document.getElementById("21a").style.display="none";
document.getElementById("21b").style.display="none" ;
document.getElementById("22a").style.display="none";
document.getElementById("22b").style.display="none" ;
document.getElementById("23a").style.display="none";
document.getElementById("23b").style.display="none" ;
document.getElementById("24a").style.display="none";
document.getElementById("24b").style.display="none" ;   
btn13.addEventListener('click', (event) => {
    swal("Bravo!", "Tu as gagné ta vie", "success");
}
);
                }


                if (id='#13b'&& message.number==13) {
const btn13b = document.getElementById('13b')
document.getElementById("1a").style.display="none";
document.getElementById("1b").style.display="none" ;  
document.getElementById("2a").style.display="none";
document.getElementById("2b").style.display="none" ; 
document.getElementById("3a").style.display="none";
document.getElementById("3b").style.display="none" ;
document.getElementById("4a").style.display="none";
document.getElementById("4b").style.display="none" ;
document.getElementById("5a").style.display="none";
document.getElementById("5b").style.display="none" ;
document.getElementById("6a").style.display="none";
document.getElementById("6b").style.display="none" ;
document.getElementById("7a").style.display="none";
document.getElementById("7b").style.display="none" ;
document.getElementById("8a").style.display="none";
document.getElementById("8b").style.display="none" ;
document.getElementById("9a").style.display="none";
document.getElementById("9b").style.display="none";
document.getElementById("10a").style.display="none";
document.getElementById("10b").style.display="none" ;
document.getElementById("11a").style.display="none";
document.getElementById("11b").style.display="none" ;
document.getElementById("12a").style.display="none";
document.getElementById("12b").style.display="none" ;
document.getElementById("14a").style.display="none";
document.getElementById("14b").style.display="none" ;
document.getElementById("15a").style.display="none";
document.getElementById("15b").style.display="none" ;
document.getElementById("16a").style.display="none";
document.getElementById("16b").style.display="none" ;
document.getElementById("17a").style.display="none";
document.getElementById("17b").style.display="none" ;
document.getElementById("18a").style.display="none";
document.getElementById("18b").style.display="none" ;
document.getElementById("19a").style.display="none";
document.getElementById("19b").style.display="none" ;
document.getElementById("20a").style.display="none";
document.getElementById("20b").style.display="none" ;
document.getElementById("21a").style.display="none";
document.getElementById("21b").style.display="none" ;
document.getElementById("22a").style.display="none";
document.getElementById("22b").style.display="none" ;
document.getElementById("23a").style.display="none";
document.getElementById("23b").style.display="none" ;
document.getElementById("24a").style.display="none";
document.getElementById("24b").style.display="none" ; 
     
btn13b.addEventListener('click', (event) => {
    swal("Dommage!", "Tu as raté ta vie", "error");
}


);
                }
                if (id='#14a'&& message.number==14) {
const btn14 = document.getElementById('14a');

document.getElementById("1a").style.display="none";
document.getElementById("1b").style.display="none" ;  
document.getElementById("2a").style.display="none";
document.getElementById("2b").style.display="none" ; 
document.getElementById("3a").style.display="none";
document.getElementById("3b").style.display="none" ;
document.getElementById("4a").style.display="none";
document.getElementById("4b").style.display="none" ;
document.getElementById("5a").style.display="none";
document.getElementById("5b").style.display="none" ;
document.getElementById("6a").style.display="none";
document.getElementById("6b").style.display="none" ;
document.getElementById("7a").style.display="none";
document.getElementById("7b").style.display="none" ;
document.getElementById("8a").style.display="none";
document.getElementById("8b").style.display="none" ;
document.getElementById("9a").style.display="none";
document.getElementById("9b").style.display="none";
document.getElementById("10a").style.display="none";
document.getElementById("10b").style.display="none" ;
document.getElementById("11a").style.display="none";
document.getElementById("11b").style.display="none" ;
document.getElementById("12a").style.display="none";
document.getElementById("12b").style.display="none" ;
document.getElementById("13a").style.display="none";
document.getElementById("13b").style.display="none" ;
document.getElementById("15a").style.display="none";
document.getElementById("15b").style.display="none" ;
document.getElementById("16a").style.display="none";
document.getElementById("16b").style.display="none" ;
document.getElementById("17a").style.display="none";
document.getElementById("17b").style.display="none" ;
document.getElementById("18a").style.display="none";
document.getElementById("18b").style.display="none" ;
document.getElementById("19a").style.display="none";
document.getElementById("19b").style.display="none" ;
document.getElementById("20a").style.display="none";
document.getElementById("20b").style.display="none" ;
document.getElementById("21a").style.display="none";
document.getElementById("21b").style.display="none" ;
document.getElementById("22a").style.display="none";
document.getElementById("22b").style.display="none" ;
document.getElementById("23a").style.display="none";
document.getElementById("23b").style.display="none" ;
document.getElementById("24a").style.display="none";
document.getElementById("24b").style.display="none" ;   
btn14.addEventListener('click', (event) => {
    swal("Bravo!", "Tu as gagné ta vie", "success");
}
);
                }


                if (id='#14b'&& message.number==14) {
const btn14b = document.getElementById('14b')
document.getElementById("1a").style.display="none";
document.getElementById("1b").style.display="none" ;  
document.getElementById("2a").style.display="none";
document.getElementById("2b").style.display="none" ; 
document.getElementById("3a").style.display="none";
document.getElementById("3b").style.display="none" ;
document.getElementById("4a").style.display="none";
document.getElementById("4b").style.display="none" ;
document.getElementById("5a").style.display="none";
document.getElementById("5b").style.display="none" ;
document.getElementById("6a").style.display="none";
document.getElementById("6b").style.display="none" ;
document.getElementById("7a").style.display="none";
document.getElementById("7b").style.display="none" ;
document.getElementById("8a").style.display="none";
document.getElementById("8b").style.display="none" ;
document.getElementById("9a").style.display="none";
document.getElementById("9b").style.display="none";
document.getElementById("10a").style.display="none";
document.getElementById("10b").style.display="none" ;
document.getElementById("11a").style.display="none";
document.getElementById("11b").style.display="none" ;
document.getElementById("12a").style.display="none";
document.getElementById("12b").style.display="none" ;
document.getElementById("13a").style.display="none";
document.getElementById("13b").style.display="none" ;
document.getElementById("15a").style.display="none";
document.getElementById("15b").style.display="none" ;
document.getElementById("16a").style.display="none";
document.getElementById("16b").style.display="none" ;
document.getElementById("17a").style.display="none";
document.getElementById("17b").style.display="none" ;
document.getElementById("18a").style.display="none";
document.getElementById("18b").style.display="none" ;
document.getElementById("19a").style.display="none";
document.getElementById("19b").style.display="none" ;
document.getElementById("20a").style.display="none";
document.getElementById("20b").style.display="none" ;
document.getElementById("21a").style.display="none";
document.getElementById("21b").style.display="none" ;
document.getElementById("22a").style.display="none";
document.getElementById("22b").style.display="none" ;
document.getElementById("23a").style.display="none";
document.getElementById("23b").style.display="none" ;
document.getElementById("24a").style.display="none";
document.getElementById("24b").style.display="none" ; 
     
btn14b.addEventListener('click', (event) => {
    swal("Dommage!", "Tu as raté ta vie", "error");
}


);
                }
                if (id='#15a'&& message.number==15) {
const btn15 = document.getElementById('15a');

document.getElementById("1a").style.display="none";
document.getElementById("1b").style.display="none" ;  
document.getElementById("2a").style.display="none";
document.getElementById("2b").style.display="none" ; 
document.getElementById("3a").style.display="none";
document.getElementById("3b").style.display="none" ;
document.getElementById("4a").style.display="none";
document.getElementById("4b").style.display="none" ;
document.getElementById("5a").style.display="none";
document.getElementById("5b").style.display="none" ;
document.getElementById("6a").style.display="none";
document.getElementById("6b").style.display="none" ;
document.getElementById("7a").style.display="none";
document.getElementById("7b").style.display="none" ;
document.getElementById("8a").style.display="none";
document.getElementById("8b").style.display="none" ;
document.getElementById("9a").style.display="none";
document.getElementById("9b").style.display="none";
document.getElementById("10a").style.display="none";
document.getElementById("10b").style.display="none" ;
document.getElementById("11a").style.display="none";
document.getElementById("11b").style.display="none" ;
document.getElementById("12a").style.display="none";
document.getElementById("12b").style.display="none" ;
document.getElementById("13a").style.display="none";
document.getElementById("13b").style.display="none" ;
document.getElementById("14a").style.display="none";
document.getElementById("14b").style.display="none" ;
document.getElementById("16a").style.display="none";
document.getElementById("16b").style.display="none" ;
document.getElementById("17a").style.display="none";
document.getElementById("17b").style.display="none" ;
document.getElementById("18a").style.display="none";
document.getElementById("18b").style.display="none" ;
document.getElementById("19a").style.display="none";
document.getElementById("19b").style.display="none" ;
document.getElementById("20a").style.display="none";
document.getElementById("20b").style.display="none" ;
document.getElementById("21a").style.display="none";
document.getElementById("21b").style.display="none" ;
document.getElementById("22a").style.display="none";
document.getElementById("22b").style.display="none" ;
document.getElementById("23a").style.display="none";
document.getElementById("23b").style.display="none" ;
document.getElementById("24a").style.display="none";
document.getElementById("24b").style.display="none" ;   
btn15.addEventListener('click', (event) => {
    swal("Bravo!", "Tu as gagné ta vie", "success");
}
);
                }


                if (id='#15b'&& message.number==15) {
const btn15b = document.getElementById('15b')
document.getElementById("1a").style.display="none";
document.getElementById("1b").style.display="none" ;  
document.getElementById("2a").style.display="none";
document.getElementById("2b").style.display="none" ; 
document.getElementById("3a").style.display="none";
document.getElementById("3b").style.display="none" ;
document.getElementById("4a").style.display="none";
document.getElementById("4b").style.display="none" ;
document.getElementById("5a").style.display="none";
document.getElementById("5b").style.display="none" ;
document.getElementById("6a").style.display="none";
document.getElementById("6b").style.display="none" ;
document.getElementById("7a").style.display="none";
document.getElementById("7b").style.display="none" ;
document.getElementById("8a").style.display="none";
document.getElementById("8b").style.display="none" ;
document.getElementById("9a").style.display="none";
document.getElementById("9b").style.display="none";
document.getElementById("10a").style.display="none";
document.getElementById("10b").style.display="none" ;
document.getElementById("11a").style.display="none";
document.getElementById("11b").style.display="none" ;
document.getElementById("12a").style.display="none";
document.getElementById("12b").style.display="none" ;
document.getElementById("13a").style.display="none";
document.getElementById("13b").style.display="none" ;
document.getElementById("14a").style.display="none";
document.getElementById("14b").style.display="none" ;
document.getElementById("16a").style.display="none";
document.getElementById("16b").style.display="none" ;
document.getElementById("17a").style.display="none";
document.getElementById("17b").style.display="none" ;
document.getElementById("18a").style.display="none";
document.getElementById("18b").style.display="none" ;
document.getElementById("19a").style.display="none";
document.getElementById("19b").style.display="none" ;
document.getElementById("20a").style.display="none";
document.getElementById("20b").style.display="none" ;
document.getElementById("21a").style.display="none";
document.getElementById("21b").style.display="none" ;
document.getElementById("22a").style.display="none";
document.getElementById("22b").style.display="none" ;
document.getElementById("23a").style.display="none";
document.getElementById("23b").style.display="none" ;
document.getElementById("24a").style.display="none";
document.getElementById("24b").style.display="none" ; 
     
btn15b.addEventListener('click', (event) => {
    swal("Dommage!", "Tu as raté ta vie", "error");
}


);
                }
                if (id='#16a'&& message.number==16) {
const btn16 = document.getElementById('16a');

document.getElementById("1a").style.display="none";
document.getElementById("1b").style.display="none" ;  
document.getElementById("2a").style.display="none";
document.getElementById("2b").style.display="none" ; 
document.getElementById("3a").style.display="none";
document.getElementById("3b").style.display="none" ;
document.getElementById("4a").style.display="none";
document.getElementById("4b").style.display="none" ;
document.getElementById("5a").style.display="none";
document.getElementById("5b").style.display="none" ;
document.getElementById("6a").style.display="none";
document.getElementById("6b").style.display="none" ;
document.getElementById("7a").style.display="none";
document.getElementById("7b").style.display="none" ;
document.getElementById("8a").style.display="none";
document.getElementById("8b").style.display="none" ;
document.getElementById("9a").style.display="none";
document.getElementById("9b").style.display="none";
document.getElementById("10a").style.display="none";
document.getElementById("10b").style.display="none" ;
document.getElementById("11a").style.display="none";
document.getElementById("11b").style.display="none" ;
document.getElementById("12a").style.display="none";
document.getElementById("12b").style.display="none" ;
document.getElementById("13a").style.display="none";
document.getElementById("13b").style.display="none" ;
document.getElementById("14a").style.display="none";
document.getElementById("14b").style.display="none" ;
document.getElementById("15a").style.display="none";
document.getElementById("15b").style.display="none" ;
document.getElementById("17a").style.display="none";
document.getElementById("17b").style.display="none" ;
document.getElementById("18a").style.display="none";
document.getElementById("18b").style.display="none" ;
document.getElementById("19a").style.display="none";
document.getElementById("19b").style.display="none" ;
document.getElementById("20a").style.display="none";
document.getElementById("20b").style.display="none" ;
document.getElementById("21a").style.display="none";
document.getElementById("21b").style.display="none" ;
document.getElementById("22a").style.display="none";
document.getElementById("22b").style.display="none" ;
document.getElementById("23a").style.display="none";
document.getElementById("23b").style.display="none" ;
document.getElementById("24a").style.display="none";
document.getElementById("24b").style.display="none" ;   
btn16.addEventListener('click', (event) => {
    swal("Bravo!", "Tu as gagné ta vie", "success");
}
);
                }


                if (id='#16b'&& message.number==16) {
const btn16b = document.getElementById('16b')
document.getElementById("1a").style.display="none";
document.getElementById("1b").style.display="none" ;  
document.getElementById("2a").style.display="none";
document.getElementById("2b").style.display="none" ; 
document.getElementById("3a").style.display="none";
document.getElementById("3b").style.display="none" ;
document.getElementById("4a").style.display="none";
document.getElementById("4b").style.display="none" ;
document.getElementById("5a").style.display="none";
document.getElementById("5b").style.display="none" ;
document.getElementById("6a").style.display="none";
document.getElementById("6b").style.display="none" ;
document.getElementById("7a").style.display="none";
document.getElementById("7b").style.display="none" ;
document.getElementById("8a").style.display="none";
document.getElementById("8b").style.display="none" ;
document.getElementById("9a").style.display="none";
document.getElementById("9b").style.display="none";
document.getElementById("10a").style.display="none";
document.getElementById("10b").style.display="none" ;
document.getElementById("11a").style.display="none";
document.getElementById("11b").style.display="none" ;
document.getElementById("12a").style.display="none";
document.getElementById("12b").style.display="none" ;
document.getElementById("13a").style.display="none";
document.getElementById("13b").style.display="none" ;
document.getElementById("14a").style.display="none";
document.getElementById("14b").style.display="none" ;
document.getElementById("15a").style.display="none";
document.getElementById("15b").style.display="none" ;
document.getElementById("17a").style.display="none";
document.getElementById("17b").style.display="none" ;
document.getElementById("18a").style.display="none";
document.getElementById("18b").style.display="none" ;
document.getElementById("19a").style.display="none";
document.getElementById("19b").style.display="none" ;
document.getElementById("20a").style.display="none";
document.getElementById("20b").style.display="none" ;
document.getElementById("21a").style.display="none";
document.getElementById("21b").style.display="none" ;
document.getElementById("22a").style.display="none";
document.getElementById("22b").style.display="none" ;
document.getElementById("23a").style.display="none";
document.getElementById("23b").style.display="none" ;
document.getElementById("24a").style.display="none";
document.getElementById("24b").style.display="none" ; 
     
btn16b.addEventListener('click', (event) => {
    swal("Dommage!", "Tu as raté ta vie", "error");
}


);
                }
                if (id='#17a'&& message.number==17) {
const btn17 = document.getElementById('17a');

document.getElementById("1a").style.display="none";
document.getElementById("1b").style.display="none" ;  
document.getElementById("2a").style.display="none";
document.getElementById("2b").style.display="none" ; 
document.getElementById("3a").style.display="none";
document.getElementById("3b").style.display="none" ;
document.getElementById("4a").style.display="none";
document.getElementById("4b").style.display="none" ;
document.getElementById("5a").style.display="none";
document.getElementById("5b").style.display="none" ;
document.getElementById("6a").style.display="none";
document.getElementById("6b").style.display="none" ;
document.getElementById("7a").style.display="none";
document.getElementById("7b").style.display="none" ;
document.getElementById("8a").style.display="none";
document.getElementById("8b").style.display="none" ;
document.getElementById("9a").style.display="none";
document.getElementById("9b").style.display="none";
document.getElementById("10a").style.display="none";
document.getElementById("10b").style.display="none" ;
document.getElementById("11a").style.display="none";
document.getElementById("11b").style.display="none" ;
document.getElementById("12a").style.display="none";
document.getElementById("12b").style.display="none" ;
document.getElementById("13a").style.display="none";
document.getElementById("13b").style.display="none" ;
document.getElementById("14a").style.display="none";
document.getElementById("14b").style.display="none" ;
document.getElementById("15a").style.display="none";
document.getElementById("15b").style.display="none" ;
document.getElementById("16a").style.display="none";
document.getElementById("16b").style.display="none" ;
document.getElementById("18a").style.display="none";
document.getElementById("18b").style.display="none" ;
document.getElementById("19a").style.display="none";
document.getElementById("19b").style.display="none" ;
document.getElementById("20a").style.display="none";
document.getElementById("20b").style.display="none" ;
document.getElementById("21a").style.display="none";
document.getElementById("21b").style.display="none" ;
document.getElementById("22a").style.display="none";
document.getElementById("22b").style.display="none" ;
document.getElementById("23a").style.display="none";
document.getElementById("23b").style.display="none" ;
document.getElementById("24a").style.display="none";
document.getElementById("24b").style.display="none" ;   
btn17.addEventListener('click', (event) => {
    swal("Bravo!", "Tu as gagné ta vie", "success");
}
);
                }


                if (id='#17b'&& message.number==17) {
const btn17b = document.getElementById('17b')
document.getElementById("1a").style.display="none";
document.getElementById("1b").style.display="none" ;  
document.getElementById("2a").style.display="none";
document.getElementById("2b").style.display="none" ; 
document.getElementById("3a").style.display="none";
document.getElementById("3b").style.display="none" ;
document.getElementById("4a").style.display="none";
document.getElementById("4b").style.display="none" ;
document.getElementById("5a").style.display="none";
document.getElementById("5b").style.display="none" ;
document.getElementById("6a").style.display="none";
document.getElementById("6b").style.display="none" ;
document.getElementById("7a").style.display="none";
document.getElementById("7b").style.display="none" ;
document.getElementById("8a").style.display="none";
document.getElementById("8b").style.display="none" ;
document.getElementById("9a").style.display="none";
document.getElementById("9b").style.display="none";
document.getElementById("10a").style.display="none";
document.getElementById("10b").style.display="none" ;
document.getElementById("11a").style.display="none";
document.getElementById("11b").style.display="none" ;
document.getElementById("12a").style.display="none";
document.getElementById("12b").style.display="none" ;
document.getElementById("13a").style.display="none";
document.getElementById("13b").style.display="none" ;
document.getElementById("14a").style.display="none";
document.getElementById("14b").style.display="none" ;
document.getElementById("15a").style.display="none";
document.getElementById("15b").style.display="none" ;
document.getElementById("16a").style.display="none";
document.getElementById("16b").style.display="none" ;
document.getElementById("18a").style.display="none";
document.getElementById("18b").style.display="none" ;
document.getElementById("19a").style.display="none";
document.getElementById("19b").style.display="none" ;
document.getElementById("20a").style.display="none";
document.getElementById("20b").style.display="none" ;
document.getElementById("21a").style.display="none";
document.getElementById("21b").style.display="none" ;
document.getElementById("22a").style.display="none";
document.getElementById("22b").style.display="none" ;
document.getElementById("23a").style.display="none";
document.getElementById("23b").style.display="none" ;
document.getElementById("24a").style.display="none";
document.getElementById("24b").style.display="none" ; 
     
btn17b.addEventListener('click', (event) => {
    swal("Dommage!", "Tu as raté ta vie", "error");
}


);
                }
                if (id='#18a'&& message.number==18) {
const btn18 = document.getElementById('18a');

document.getElementById("1a").style.display="none";
document.getElementById("1b").style.display="none" ;  
document.getElementById("2a").style.display="none";
document.getElementById("2b").style.display="none" ; 
document.getElementById("3a").style.display="none";
document.getElementById("3b").style.display="none" ;
document.getElementById("4a").style.display="none";
document.getElementById("4b").style.display="none" ;
document.getElementById("5a").style.display="none";
document.getElementById("5b").style.display="none" ;
document.getElementById("6a").style.display="none";
document.getElementById("6b").style.display="none" ;
document.getElementById("7a").style.display="none";
document.getElementById("7b").style.display="none" ;
document.getElementById("8a").style.display="none";
document.getElementById("8b").style.display="none" ;
document.getElementById("9a").style.display="none";
document.getElementById("9b").style.display="none";
document.getElementById("10a").style.display="none";
document.getElementById("10b").style.display="none" ;
document.getElementById("11a").style.display="none";
document.getElementById("11b").style.display="none" ;
document.getElementById("12a").style.display="none";
document.getElementById("12b").style.display="none" ;
document.getElementById("13a").style.display="none";
document.getElementById("13b").style.display="none" ;
document.getElementById("14a").style.display="none";
document.getElementById("14b").style.display="none" ;
document.getElementById("15a").style.display="none";
document.getElementById("15b").style.display="none" ;
document.getElementById("16a").style.display="none";
document.getElementById("16b").style.display="none" ;
document.getElementById("17a").style.display="none";
document.getElementById("17b").style.display="none" ;
document.getElementById("19a").style.display="none";
document.getElementById("19b").style.display="none" ;
document.getElementById("20a").style.display="none";
document.getElementById("20b").style.display="none" ;
document.getElementById("21a").style.display="none";
document.getElementById("21b").style.display="none" ;
document.getElementById("22a").style.display="none";
document.getElementById("22b").style.display="none" ;
document.getElementById("23a").style.display="none";
document.getElementById("23b").style.display="none" ;
document.getElementById("24a").style.display="none";
document.getElementById("24b").style.display="none" ;   
btn18.addEventListener('click', (event) => {
    swal("Bravo!", "Tu as gagné ta vie", "success");
}
);
                }


                if (id='#18b'&& message.number==18) {
const btn18b = document.getElementById('19b')
document.getElementById("1a").style.display="none";
document.getElementById("1b").style.display="none" ;  
document.getElementById("2a").style.display="none";
document.getElementById("2b").style.display="none" ; 
document.getElementById("3a").style.display="none";
document.getElementById("3b").style.display="none" ;
document.getElementById("4a").style.display="none";
document.getElementById("4b").style.display="none" ;
document.getElementById("5a").style.display="none";
document.getElementById("5b").style.display="none" ;
document.getElementById("6a").style.display="none";
document.getElementById("6b").style.display="none" ;
document.getElementById("7a").style.display="none";
document.getElementById("7b").style.display="none" ;
document.getElementById("8a").style.display="none";
document.getElementById("8b").style.display="none" ;
document.getElementById("9a").style.display="none";
document.getElementById("9b").style.display="none";
document.getElementById("10a").style.display="none";
document.getElementById("10b").style.display="none" ;
document.getElementById("11a").style.display="none";
document.getElementById("11b").style.display="none" ;
document.getElementById("12a").style.display="none";
document.getElementById("12b").style.display="none" ;
document.getElementById("13a").style.display="none";
document.getElementById("13b").style.display="none" ;
document.getElementById("14a").style.display="none";
document.getElementById("14b").style.display="none" ;
document.getElementById("15a").style.display="none";
document.getElementById("15b").style.display="none" ;
document.getElementById("16a").style.display="none";
document.getElementById("16b").style.display="none" ;
document.getElementById("17a").style.display="none";
document.getElementById("17b").style.display="none" ;
document.getElementById("19a").style.display="none";
document.getElementById("19b").style.display="none" ;
document.getElementById("20a").style.display="none";
document.getElementById("20b").style.display="none" ;
document.getElementById("21a").style.display="none";
document.getElementById("21b").style.display="none" ;
document.getElementById("22a").style.display="none";
document.getElementById("22b").style.display="none" ;
document.getElementById("23a").style.display="none";
document.getElementById("23b").style.display="none" ;
document.getElementById("24a").style.display="none";
document.getElementById("24b").style.display="none" ; 
     
btn18b.addEventListener('click', (event) => {
    swal("Dommage!", "Tu as raté ta vie", "error");
}


);
                }
                if (id='#19a'&& message.number==19) {
const btn19 = document.getElementById('19a');

document.getElementById("1a").style.display="none";
document.getElementById("1b").style.display="none" ;  
document.getElementById("2a").style.display="none";
document.getElementById("2b").style.display="none" ; 
document.getElementById("3a").style.display="none";
document.getElementById("3b").style.display="none" ;
document.getElementById("4a").style.display="none";
document.getElementById("4b").style.display="none" ;
document.getElementById("5a").style.display="none";
document.getElementById("5b").style.display="none" ;
document.getElementById("6a").style.display="none";
document.getElementById("6b").style.display="none" ;
document.getElementById("7a").style.display="none";
document.getElementById("7b").style.display="none" ;
document.getElementById("8a").style.display="none";
document.getElementById("8b").style.display="none" ;
document.getElementById("9a").style.display="none";
document.getElementById("9b").style.display="none";
document.getElementById("10a").style.display="none";
document.getElementById("10b").style.display="none" ;
document.getElementById("11a").style.display="none";
document.getElementById("11b").style.display="none" ;
document.getElementById("12a").style.display="none";
document.getElementById("12b").style.display="none" ;
document.getElementById("13a").style.display="none";
document.getElementById("13b").style.display="none" ;
document.getElementById("14a").style.display="none";
document.getElementById("14b").style.display="none" ;
document.getElementById("15a").style.display="none";
document.getElementById("15b").style.display="none" ;
document.getElementById("16a").style.display="none";
document.getElementById("16b").style.display="none" ;
document.getElementById("17a").style.display="none";
document.getElementById("17b").style.display="none" ;
document.getElementById("18a").style.display="none";
document.getElementById("18b").style.display="none" ;
document.getElementById("20a").style.display="none";
document.getElementById("20b").style.display="none" ;
document.getElementById("21a").style.display="none";
document.getElementById("21b").style.display="none" ;
document.getElementById("22a").style.display="none";
document.getElementById("22b").style.display="none" ;
document.getElementById("23a").style.display="none";
document.getElementById("23b").style.display="none" ;
document.getElementById("24a").style.display="none";
document.getElementById("24b").style.display="none" ;   
btn19.addEventListener('click', (event) => {
    swal("Bravo!", "Tu as gagné ta vie", "success");
}
);
                }


                if (id='#19b'&& message.number==19) {
const btn19b = document.getElementById('19b')
document.getElementById("1a").style.display="none";
document.getElementById("1b").style.display="none" ;  
document.getElementById("2a").style.display="none";
document.getElementById("2b").style.display="none" ; 
document.getElementById("3a").style.display="none";
document.getElementById("3b").style.display="none" ;
document.getElementById("4a").style.display="none";
document.getElementById("4b").style.display="none" ;
document.getElementById("5a").style.display="none";
document.getElementById("5b").style.display="none" ;
document.getElementById("6a").style.display="none";
document.getElementById("6b").style.display="none" ;
document.getElementById("7a").style.display="none";
document.getElementById("7b").style.display="none" ;
document.getElementById("8a").style.display="none";
document.getElementById("8b").style.display="none" ;
document.getElementById("9a").style.display="none";
document.getElementById("9b").style.display="none";
document.getElementById("10a").style.display="none";
document.getElementById("10b").style.display="none" ;
document.getElementById("11a").style.display="none";
document.getElementById("11b").style.display="none" ;
document.getElementById("12a").style.display="none";
document.getElementById("12b").style.display="none" ;
document.getElementById("13a").style.display="none";
document.getElementById("13b").style.display="none" ;
document.getElementById("14a").style.display="none";
document.getElementById("14b").style.display="none" ;
document.getElementById("15a").style.display="none";
document.getElementById("15b").style.display="none" ;
document.getElementById("16a").style.display="none";
document.getElementById("16b").style.display="none" ;
document.getElementById("17a").style.display="none";
document.getElementById("17b").style.display="none" ;
document.getElementById("18a").style.display="none";
document.getElementById("18b").style.display="none" ;
document.getElementById("20a").style.display="none";
document.getElementById("20b").style.display="none" ;
document.getElementById("21a").style.display="none";
document.getElementById("21b").style.display="none" ;
document.getElementById("22a").style.display="none";
document.getElementById("22b").style.display="none" ;
document.getElementById("23a").style.display="none";
document.getElementById("23b").style.display="none" ;
document.getElementById("24a").style.display="none";
document.getElementById("24b").style.display="none" ; 
     
btn19b.addEventListener('click', (event) => {
    swal("Dommage!", "Tu as raté ta vie", "error");
}


);
                }              if (id='#20a'&& message.number==20) {
const btn20 = document.getElementById('20a');

document.getElementById("1a").style.display="none";
document.getElementById("1b").style.display="none" ;  
document.getElementById("2a").style.display="none";
document.getElementById("2b").style.display="none" ; 
document.getElementById("3a").style.display="none";
document.getElementById("3b").style.display="none" ;
document.getElementById("4a").style.display="none";
document.getElementById("4b").style.display="none" ;
document.getElementById("5a").style.display="none";
document.getElementById("5b").style.display="none" ;
document.getElementById("6a").style.display="none";
document.getElementById("6b").style.display="none" ;
document.getElementById("7a").style.display="none";
document.getElementById("7b").style.display="none" ;
document.getElementById("8a").style.display="none";
document.getElementById("8b").style.display="none" ;
document.getElementById("9a").style.display="none";
document.getElementById("9b").style.display="none";
document.getElementById("10a").style.display="none";
document.getElementById("10b").style.display="none" ;
document.getElementById("11a").style.display="none";
document.getElementById("11b").style.display="none" ;
document.getElementById("12a").style.display="none";
document.getElementById("12b").style.display="none" ;
document.getElementById("13a").style.display="none";
document.getElementById("13b").style.display="none" ;
document.getElementById("14a").style.display="none";
document.getElementById("14b").style.display="none" ;
document.getElementById("15a").style.display="none";
document.getElementById("15b").style.display="none" ;
document.getElementById("16a").style.display="none";
document.getElementById("16b").style.display="none" ;
document.getElementById("17a").style.display="none";
document.getElementById("17b").style.display="none" ;
document.getElementById("19a").style.display="none";
document.getElementById("18b").style.display="none" ;
document.getElementById("19a").style.display="none";
document.getElementById("19b").style.display="none" ;
document.getElementById("21a").style.display="none";
document.getElementById("21b").style.display="none" ;
document.getElementById("22a").style.display="none";
document.getElementById("22b").style.display="none" ;
document.getElementById("23a").style.display="none";
document.getElementById("23b").style.display="none" ;
document.getElementById("24a").style.display="none";
document.getElementById("24b").style.display="none" ;   
btn20.addEventListener('click', (event) => {
    swal("Bravo!", "Tu as gagné ta vie", "success");
}
);
                }


                if (id='#20b'&& message.number==20) {
const btn20b = document.getElementById('20b')
document.getElementById("1a").style.display="none";
document.getElementById("1b").style.display="none" ;  
document.getElementById("2a").style.display="none";
document.getElementById("2b").style.display="none" ; 
document.getElementById("3a").style.display="none";
document.getElementById("3b").style.display="none" ;
document.getElementById("4a").style.display="none";
document.getElementById("4b").style.display="none" ;
document.getElementById("5a").style.display="none";
document.getElementById("5b").style.display="none" ;
document.getElementById("6a").style.display="none";
document.getElementById("6b").style.display="none" ;
document.getElementById("7a").style.display="none";
document.getElementById("7b").style.display="none" ;
document.getElementById("8a").style.display="none";
document.getElementById("8b").style.display="none" ;
document.getElementById("9a").style.display="none";
document.getElementById("9b").style.display="none";
document.getElementById("10a").style.display="none";
document.getElementById("10b").style.display="none" ;
document.getElementById("11a").style.display="none";
document.getElementById("11b").style.display="none" ;
document.getElementById("12a").style.display="none";
document.getElementById("12b").style.display="none" ;
document.getElementById("13a").style.display="none";
document.getElementById("13b").style.display="none" ;
document.getElementById("14a").style.display="none";
document.getElementById("14b").style.display="none" ;
document.getElementById("15a").style.display="none";
document.getElementById("15b").style.display="none" ;
document.getElementById("16a").style.display="none";
document.getElementById("16b").style.display="none" ;
document.getElementById("17a").style.display="none";
document.getElementById("17b").style.display="none" ;
document.getElementById("18a").style.display="none";
document.getElementById("18b").style.display="none" ;
document.getElementById("19a").style.display="none";
document.getElementById("19b").style.display="none" ;
document.getElementById("21a").style.display="none";
document.getElementById("21b").style.display="none" ;
document.getElementById("22a").style.display="none";
document.getElementById("22b").style.display="none" ;
document.getElementById("23a").style.display="none";
document.getElementById("23b").style.display="none" ;
document.getElementById("24a").style.display="none";
document.getElementById("24b").style.display="none" ; 
     
btn20b.addEventListener('click', (event) => {
    swal("Dommage!", "Tu as raté ta vie", "error");
}


);
                }
                if (id='#21a'&& message.number==21) {
const btn21 = document.getElementById('21a');

document.getElementById("1a").style.display="none";
document.getElementById("1b").style.display="none" ;  
document.getElementById("2a").style.display="none";
document.getElementById("2b").style.display="none" ; 
document.getElementById("3a").style.display="none";
document.getElementById("3b").style.display="none" ;
document.getElementById("4a").style.display="none";
document.getElementById("4b").style.display="none" ;
document.getElementById("5a").style.display="none";
document.getElementById("5b").style.display="none" ;
document.getElementById("6a").style.display="none";
document.getElementById("6b").style.display="none" ;
document.getElementById("7a").style.display="none";
document.getElementById("7b").style.display="none" ;
document.getElementById("8a").style.display="none";
document.getElementById("8b").style.display="none" ;
document.getElementById("9a").style.display="none";
document.getElementById("9b").style.display="none";
document.getElementById("10a").style.display="none";
document.getElementById("10b").style.display="none" ;
document.getElementById("11a").style.display="none";
document.getElementById("11b").style.display="none" ;
document.getElementById("12a").style.display="none";
document.getElementById("12b").style.display="none" ;
document.getElementById("13a").style.display="none";
document.getElementById("13b").style.display="none" ;
document.getElementById("14a").style.display="none";
document.getElementById("14b").style.display="none" ;
document.getElementById("15a").style.display="none";
document.getElementById("15b").style.display="none" ;
document.getElementById("16a").style.display="none";
document.getElementById("16b").style.display="none" ;
document.getElementById("17a").style.display="none";
document.getElementById("17b").style.display="none" ;
document.getElementById("18a").style.display="none";
document.getElementById("18b").style.display="none" ;
document.getElementById("19a").style.display="none";
document.getElementById("19b").style.display="none" ;
document.getElementById("20a").style.display="none";
document.getElementById("20b").style.display="none" ;
document.getElementById("22a").style.display="none";
document.getElementById("22b").style.display="none" ;
document.getElementById("23a").style.display="none";
document.getElementById("23b").style.display="none" ;
document.getElementById("24a").style.display="none";
document.getElementById("24b").style.display="none" ;   
btn21.addEventListener('click', (event) => {
    swal("Bravo!", "Tu as gagné ta vie", "success");
}
);
                }


                if (id='#21b'&& message.number==21) {
const btn21b = document.getElementById('21b')
document.getElementById("1a").style.display="none";
document.getElementById("1b").style.display="none" ;  
document.getElementById("2a").style.display="none";
document.getElementById("2b").style.display="none" ; 
document.getElementById("3a").style.display="none";
document.getElementById("3b").style.display="none" ;
document.getElementById("4a").style.display="none";
document.getElementById("4b").style.display="none" ;
document.getElementById("5a").style.display="none";
document.getElementById("5b").style.display="none" ;
document.getElementById("6a").style.display="none";
document.getElementById("6b").style.display="none" ;
document.getElementById("7a").style.display="none";
document.getElementById("7b").style.display="none" ;
document.getElementById("8a").style.display="none";
document.getElementById("8b").style.display="none" ;
document.getElementById("9a").style.display="none";
document.getElementById("9b").style.display="none";
document.getElementById("10a").style.display="none";
document.getElementById("10b").style.display="none" ;
document.getElementById("11a").style.display="none";
document.getElementById("11b").style.display="none" ;
document.getElementById("12a").style.display="none";
document.getElementById("12b").style.display="none" ;
document.getElementById("13a").style.display="none";
document.getElementById("13b").style.display="none" ;
document.getElementById("14a").style.display="none";
document.getElementById("14b").style.display="none" ;
document.getElementById("15a").style.display="none";
document.getElementById("15b").style.display="none" ;
document.getElementById("16a").style.display="none";
document.getElementById("16b").style.display="none" ;
document.getElementById("17a").style.display="none";
document.getElementById("17b").style.display="none" ;
document.getElementById("18a").style.display="none";
document.getElementById("18b").style.display="none" ;
document.getElementById("19a").style.display="none";
document.getElementById("19b").style.display="none" ;
document.getElementById("20a").style.display="none";
document.getElementById("20b").style.display="none" ;
document.getElementById("22a").style.display="none";
document.getElementById("22b").style.display="none" ;
document.getElementById("23a").style.display="none";
document.getElementById("23b").style.display="none" ;
document.getElementById("24a").style.display="none";
document.getElementById("24b").style.display="none" ; 
     
btn21b.addEventListener('click', (event) => {
    swal("Dommage!", "Tu as raté ta vie", "error");
}


);
                }
                if (id='#22a'&& message.number==22) {
const btn22 = document.getElementById('22a');

document.getElementById("1a").style.display="none";
document.getElementById("1b").style.display="none" ;  
document.getElementById("2a").style.display="none";
document.getElementById("2b").style.display="none" ; 
document.getElementById("3a").style.display="none";
document.getElementById("3b").style.display="none" ;
document.getElementById("4a").style.display="none";
document.getElementById("4b").style.display="none" ;
document.getElementById("5a").style.display="none";
document.getElementById("5b").style.display="none" ;
document.getElementById("6a").style.display="none";
document.getElementById("6b").style.display="none" ;
document.getElementById("7a").style.display="none";
document.getElementById("7b").style.display="none" ;
document.getElementById("8a").style.display="none";
document.getElementById("8b").style.display="none" ;
document.getElementById("9a").style.display="none";
document.getElementById("9b").style.display="none";
document.getElementById("10a").style.display="none";
document.getElementById("10b").style.display="none" ;
document.getElementById("11a").style.display="none";
document.getElementById("11b").style.display="none" ;
document.getElementById("12a").style.display="none";
document.getElementById("12b").style.display="none" ;
document.getElementById("13a").style.display="none";
document.getElementById("13b").style.display="none" ;
document.getElementById("14a").style.display="none";
document.getElementById("14b").style.display="none" ;
document.getElementById("15a").style.display="none";
document.getElementById("15b").style.display="none" ;
document.getElementById("16a").style.display="none";
document.getElementById("16b").style.display="none" ;
document.getElementById("17a").style.display="none";
document.getElementById("17b").style.display="none" ;
document.getElementById("18a").style.display="none";
document.getElementById("18b").style.display="none" ;
document.getElementById("19a").style.display="none";
document.getElementById("19b").style.display="none" ;
document.getElementById("20a").style.display="none";
document.getElementById("20b").style.display="none" ;
document.getElementById("21a").style.display="none";
document.getElementById("21b").style.display="none" ;
document.getElementById("23a").style.display="none";
document.getElementById("23b").style.display="none" ;
document.getElementById("24a").style.display="none";
document.getElementById("24b").style.display="none" ;   
btn22.addEventListener('click', (event) => {
    swal("Bravo!", "Tu as gagné ta vie", "success");
}
);
                }


                if (id='#22b'&& message.number==22) {
const btn22b = document.getElementById('22b')
document.getElementById("1a").style.display="none";
document.getElementById("1b").style.display="none" ;  
document.getElementById("2a").style.display="none";
document.getElementById("2b").style.display="none" ; 
document.getElementById("3a").style.display="none";
document.getElementById("3b").style.display="none" ;
document.getElementById("4a").style.display="none";
document.getElementById("4b").style.display="none" ;
document.getElementById("5a").style.display="none";
document.getElementById("5b").style.display="none" ;
document.getElementById("6a").style.display="none";
document.getElementById("6b").style.display="none" ;
document.getElementById("7a").style.display="none";
document.getElementById("7b").style.display="none" ;
document.getElementById("8a").style.display="none";
document.getElementById("8b").style.display="none" ;
document.getElementById("9a").style.display="none";
document.getElementById("9b").style.display="none";
document.getElementById("10a").style.display="none";
document.getElementById("10b").style.display="none" ;
document.getElementById("11a").style.display="none";
document.getElementById("11b").style.display="none" ;
document.getElementById("12a").style.display="none";
document.getElementById("12b").style.display="none" ;
document.getElementById("13a").style.display="none";
document.getElementById("13b").style.display="none" ;
document.getElementById("14a").style.display="none";
document.getElementById("14b").style.display="none" ;
document.getElementById("15a").style.display="none";
document.getElementById("15b").style.display="none" ;
document.getElementById("16a").style.display="none";
document.getElementById("16b").style.display="none" ;
document.getElementById("17a").style.display="none";
document.getElementById("17b").style.display="none" ;
document.getElementById("18a").style.display="none";
document.getElementById("18b").style.display="none" ;
document.getElementById("19a").style.display="none";
document.getElementById("19b").style.display="none" ;
document.getElementById("20a").style.display="none";
document.getElementById("20b").style.display="none" ;
document.getElementById("21a").style.display="none";
document.getElementById("21b").style.display="none" ;
document.getElementById("23a").style.display="none";
document.getElementById("23b").style.display="none" ;
document.getElementById("24a").style.display="none";
document.getElementById("24b").style.display="none" ; 
     
btn22b.addEventListener('click', (event) => {
    swal("Dommage!", "Tu as raté ta vie", "error");
}


);
                }
                if (id='#23a'&& message.number==23) {
const btn23 = document.getElementById('23a');

document.getElementById("1a").style.display="none";
document.getElementById("1b").style.display="none" ;  
document.getElementById("2a").style.display="none";
document.getElementById("2b").style.display="none" ; 
document.getElementById("3a").style.display="none";
document.getElementById("3b").style.display="none" ;
document.getElementById("4a").style.display="none";
document.getElementById("4b").style.display="none" ;
document.getElementById("5a").style.display="none";
document.getElementById("5b").style.display="none" ;
document.getElementById("6a").style.display="none";
document.getElementById("6b").style.display="none" ;
document.getElementById("7a").style.display="none";
document.getElementById("7b").style.display="none" ;
document.getElementById("8a").style.display="none";
document.getElementById("8b").style.display="none" ;
document.getElementById("9a").style.display="none";
document.getElementById("9b").style.display="none";
document.getElementById("10a").style.display="none";
document.getElementById("10b").style.display="none" ;
document.getElementById("11a").style.display="none";
document.getElementById("11b").style.display="none" ;
document.getElementById("12a").style.display="none";
document.getElementById("12b").style.display="none" ;
document.getElementById("13a").style.display="none";
document.getElementById("13b").style.display="none" ;
document.getElementById("14a").style.display="none";
document.getElementById("14b").style.display="none" ;
document.getElementById("15a").style.display="none";
document.getElementById("15b").style.display="none" ;
document.getElementById("16a").style.display="none";
document.getElementById("16b").style.display="none" ;
document.getElementById("17a").style.display="none";
document.getElementById("17b").style.display="none" ;
document.getElementById("18a").style.display="none";
document.getElementById("18b").style.display="none" ;
document.getElementById("19a").style.display="none";
document.getElementById("19b").style.display="none" ;
document.getElementById("20a").style.display="none";
document.getElementById("20b").style.display="none" ;
document.getElementById("21a").style.display="none";
document.getElementById("21b").style.display="none" ;
document.getElementById("22a").style.display="none";
document.getElementById("22b").style.display="none" ;
document.getElementById("24a").style.display="none";
document.getElementById("24b").style.display="none" ;   
btn23.addEventListener('click', (event) => {
    swal("Bravo!", "Tu as gagné ta vie", "success");
}
);
                }


                if (id='#23b'&& message.number==23) {
const btn23b = document.getElementById('23b')
document.getElementById("1a").style.display="none";
document.getElementById("1b").style.display="none" ;  
document.getElementById("2a").style.display="none";
document.getElementById("2b").style.display="none" ; 
document.getElementById("3a").style.display="none";
document.getElementById("3b").style.display="none" ;
document.getElementById("4a").style.display="none";
document.getElementById("4b").style.display="none" ;
document.getElementById("5a").style.display="none";
document.getElementById("5b").style.display="none" ;
document.getElementById("6a").style.display="none";
document.getElementById("6b").style.display="none" ;
document.getElementById("7a").style.display="none";
document.getElementById("7b").style.display="none" ;
document.getElementById("8a").style.display="none";
document.getElementById("8b").style.display="none" ;
document.getElementById("9a").style.display="none";
document.getElementById("9b").style.display="none";
document.getElementById("10a").style.display="none";
document.getElementById("10b").style.display="none" ;
document.getElementById("11a").style.display="none";
document.getElementById("11b").style.display="none" ;
document.getElementById("12a").style.display="none";
document.getElementById("12b").style.display="none" ;
document.getElementById("13a").style.display="none";
document.getElementById("13b").style.display="none" ;
document.getElementById("14a").style.display="none";
document.getElementById("14b").style.display="none" ;
document.getElementById("15a").style.display="none";
document.getElementById("15b").style.display="none" ;
document.getElementById("16a").style.display="none";
document.getElementById("16b").style.display="none" ;
document.getElementById("17a").style.display="none";
document.getElementById("17b").style.display="none" ;
document.getElementById("18a").style.display="none";
document.getElementById("18b").style.display="none" ;
document.getElementById("19a").style.display="none";
document.getElementById("19b").style.display="none" ;
document.getElementById("20a").style.display="none";
document.getElementById("20b").style.display="none" ;
document.getElementById("21a").style.display="none";
document.getElementById("21b").style.display="none" ;
document.getElementById("22a").style.display="none";
document.getElementById("22b").style.display="none" ;
document.getElementById("24a").style.display="none";
document.getElementById("24b").style.display="none" ; 
     
btn23b.addEventListener('click', (event) => {
    swal("Dommage!", "Tu as raté ta vie", "error");
}


);
                }
                if (id='#24a'&& message.number==24) {
const btn24 = document.getElementById('24a');

document.getElementById("1a").style.display="none";
document.getElementById("1b").style.display="none" ;  
document.getElementById("2a").style.display="none";
document.getElementById("2b").style.display="none" ; 
document.getElementById("3a").style.display="none";
document.getElementById("3b").style.display="none" ;
document.getElementById("4a").style.display="none";
document.getElementById("4b").style.display="none" ;
document.getElementById("5a").style.display="none";
document.getElementById("5b").style.display="none" ;
document.getElementById("6a").style.display="none";
document.getElementById("6b").style.display="none" ;
document.getElementById("7a").style.display="none";
document.getElementById("7b").style.display="none" ;
document.getElementById("8a").style.display="none";
document.getElementById("8b").style.display="none" ;
document.getElementById("9a").style.display="none";
document.getElementById("9b").style.display="none";
document.getElementById("10a").style.display="none";
document.getElementById("10b").style.display="none" ;
document.getElementById("11a").style.display="none";
document.getElementById("11b").style.display="none" ;
document.getElementById("12a").style.display="none";
document.getElementById("12b").style.display="none" ;
document.getElementById("13a").style.display="none";
document.getElementById("13b").style.display="none" ;
document.getElementById("14a").style.display="none";
document.getElementById("14b").style.display="none" ;
document.getElementById("15a").style.display="none";
document.getElementById("15b").style.display="none" ;
document.getElementById("16a").style.display="none";
document.getElementById("16b").style.display="none" ;
document.getElementById("17a").style.display="none";
document.getElementById("17b").style.display="none" ;
document.getElementById("18a").style.display="none";
document.getElementById("18b").style.display="none" ;
document.getElementById("19a").style.display="none";
document.getElementById("19b").style.display="none" ;
document.getElementById("20a").style.display="none";
document.getElementById("20b").style.display="none" ;
document.getElementById("21a").style.display="none";
document.getElementById("21b").style.display="none" ;
document.getElementById("22a").style.display="none";
document.getElementById("22b").style.display="none" ;
document.getElementById("23a").style.display="none";
document.getElementById("23b").style.display="none" ;   
btn24.addEventListener('click', (event) => {
    swal("Bravo!", "Tu as gagné ta vie", "success");
}
);
                }


                if (id='#24b'&& message.number==24) {
const btn24b = document.getElementById('24b')
document.getElementById("1a").style.display="none";
document.getElementById("1b").style.display="none" ;  
document.getElementById("2a").style.display="none";
document.getElementById("2b").style.display="none" ; 
document.getElementById("3a").style.display="none";
document.getElementById("3b").style.display="none" ;
document.getElementById("4a").style.display="none";
document.getElementById("4b").style.display="none" ;
document.getElementById("5a").style.display="none";
document.getElementById("5b").style.display="none" ;
document.getElementById("6a").style.display="none";
document.getElementById("6b").style.display="none" ;
document.getElementById("7a").style.display="none";
document.getElementById("7b").style.display="none" ;
document.getElementById("8a").style.display="none";
document.getElementById("8b").style.display="none" ;
document.getElementById("9a").style.display="none";
document.getElementById("9b").style.display="none";
document.getElementById("10a").style.display="none";
document.getElementById("10b").style.display="none" ;
document.getElementById("11a").style.display="none";
document.getElementById("11b").style.display="none" ;
document.getElementById("12a").style.display="none";
document.getElementById("12b").style.display="none" ;
document.getElementById("13a").style.display="none";
document.getElementById("13b").style.display="none" ;
document.getElementById("14a").style.display="none";
document.getElementById("14b").style.display="none" ;
document.getElementById("15a").style.display="none";
document.getElementById("15b").style.display="none" ;
document.getElementById("16a").style.display="none";
document.getElementById("16b").style.display="none" ;
document.getElementById("17a").style.display="none";
document.getElementById("17b").style.display="none" ;
document.getElementById("18a").style.display="none";
document.getElementById("18b").style.display="none" ;
document.getElementById("19a").style.display="none";
document.getElementById("19b").style.display="none" ;
document.getElementById("20a").style.display="none";
document.getElementById("20b").style.display="none" ;
document.getElementById("21a").style.display="none";
document.getElementById("21b").style.display="none" ;
document.getElementById("22a").style.display="none";
document.getElementById("22b").style.display="none" ;
document.getElementById("23a").style.display="none";
document.getElementById("23b").style.display="none" ; 
     
btn24b.addEventListener('click', (event) => {
    swal("Dommage!", "Tu as raté ta vie", "error");
}


);
                }
                }

                
                
            }
            
        })

        

        

        // Generates a unique number from a range
        // keeps track of generated numbers in a history array
        // if all numbers in the range have been returned once, keep outputting random numbers within the range
        var UniqueRandom = {
            NumHistory: new Array(),
            generate: function (maxNum) {
                var current = Math.ceil(Math.random() * (maxNum));
                if (maxNum > 1 && this.NumHistory.length > 0) {
                    if (this.NumHistory.length != maxNum) {
                        while ($.inArray(current, this.NumHistory) != -1) {
                            current = Math.ceil(Math.random() * (maxNum));
                        }
                        this.NumHistory.push(current);
                        return current;
                    } else {
                        //unique numbers done, continue outputting random numbers
                     //  alert('done outputting unique numbers, now just returning random number');
                        return current;
                    }
                } else {
                    //first time only
                    this.NumHistory.push(current);
                    return current;
                }
            }
            
        };




            document.getElementById("alea").innerHTML=  "<span class='color-red'>"+UniqueRandom.generate(24)+"</span>";
             document.getElementById("ale").innerHTML = "<span class='color-red'>"+UniqueRandom.generate(24)+"</span>";
             document.getElementById("alee").innerHTML ="<span class='color-red'>"+UniqueRandom.generate(24)+"</span>";
             document.getElementById("aleea").innerHTML = "<span class='color-red'>"+UniqueRandom.generate(24)+"</span>";

             document.getElementById("aleeb").innerHTML ="<span class='color-red'>"+UniqueRandom.generate(24)+"</span>";
             document.getElementById("aleec").innerHTML = "<span class='color-red'>"+UniqueRandom.generate(24)+"</span>";
             document.getElementById("aleed").innerHTML = "<span class='color-red'>"+UniqueRandom.generate(24)+"</span>";
             document.getElementById("aleef").innerHTML = "<span class='color-red'>"+UniqueRandom.generate(24)+"</span>";
            document.getElementById("aleeg").innerHTML = "<span class='color-red'>"+UniqueRandom.generate(24)+"</span>";
             document.getElementById("aleeh").innerHTML ="<span class='color-red'>"+UniqueRandom.generate(24)+"</span>";
             document.getElementById("aleei").innerHTML = "<span class='color-red'>"+UniqueRandom.generate(24)+"</span>";
             document.getElementById("aleej").innerHTML = "<span class='color-red'>"+UniqueRandom.generate(24)+"</span>";

                
          
           document.getElementById("aleea11").innerHTML ="<span class='color-red'>"+UniqueRandom.generate(24)+"</span>";
             document.getElementById("ale22").innerHTML ="<span class='color-red'>"+UniqueRandom.generate(24)+"</span>";
             document.getElementById("alee33").innerHTML ="<span class='color-red'>"+UniqueRandom.generate(24)+"</span>";
           document.getElementById("aleee44").innerHTML = "<span class='color-red'>"+UniqueRandom.generate(24)+"</span>";
          document.getElementById("aleea55").innerHTML = "<span class='color-red'>"+UniqueRandom.generate(24)+"</span>";
            document.getElementById("aleeb66").innerHTML ="<span class='color-red'>"+UniqueRandom.generate(24)+"</span>";
           
             document.getElementById("aleec77").innerHTML = "<span class='color-red'>"+UniqueRandom.generate(24)+"</span>";
          
document.getElementById("aleea111").innerHTML = "<span class='color-red'>"+UniqueRandom.generate(24)+"</span>";
  document.getElementById("ale222").innerHTML = "<span class='color-red'>"+UniqueRandom.generate(24)+"</span>";
  document.getElementById("alee333").innerHTML = "<span class='color-red'>"+UniqueRandom.generate(24)+"</span>";
document.getElementById("aleee444").innerHTML = "<span class='color-red'>"+UniqueRandom.generate(24)+"</span>";
document.getElementById("aleea555").innerHTML ="<span class='color-red'>"+UniqueRandom.generate(24)+"</span>";
 document.getElementById("aleeb666").innerHTML = "<span class='color-red'>"+UniqueRandom.generate(24)+"</span>";
            
}