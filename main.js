/*
  Cesar Seijas: https://github.com/criptodev
*/

var quotes = ["El imitar es connatural al hombre.",
"En realidad vivir como hombre significa elegir un blanco -honor, gloria, riqueza, cultura- y apuntar hacia él con toda la conducta, pues no ordenar la vida a un fin es señal de gran necedad.",
"Todo acto forzoso se vuelve desagradable.",
"Todo hombre, por naturaleza, desea saber.",
"No hay que prestar atención a quienes nos aconsejan, so pretexto de que somos hombres, no pensar más que en las cosas humanas y, so pretexto de que somos mortales, renunciar a las cosas inmortales.",
"La virtud resplandece en las desgracias.",
"Pero algunos creen que, aparte de toda esta multitud de bienes, hay algún otro que es bueno por sí mismo y que es la causa de que todos aquellos sean bienes.",
"Cometer una injusticia es peor que sufrirla.",
"Si los ciudadanos practicasen entre sí la amistad, no tendrían necesidad de la justicia.",
"Los grandes conocimientos engendran las grandes dudas.",
"Cualquiera puede enfadarse, eso es algo muy sencillo. Pero enfadarse con la persona adecuada, en el grado exacto, en el momento oportuno, con el propósito justo y del modo correcto, eso, ciertamente, no resulta tan sencillo.;",
"La virtud está en el término medio.",
"Se piensa que lo justo es lo igual, y así es; pero no para todos, sino para los iguales. Se piensa por el contrario que lo justo es lo desigual, y así es, pero no para todos, sino para los desiguales.",
"Los discursos inspiran menos confianza que las acciones.",
"Sólo hay una fuerza motriz: el deseo.",
"Ir siempre de lo simple a lo compuesto.",
"Lo que tiene alma se distingue de lo que no la tiene por el hecho de vivir.",
"El amor sólo se da entre personas virtuosas.",
"La esperanza es el sueño del hombre despierto.",
"No conviene hablar del pudor como de una virtud. Se parece más bien a una emoción que a una disposición adquirida. Se define, pues, como un miedo de dar de sí una mala opinión.",
"Nuestro carácter es el resultado de nuestra conducta.",
"El que posee las nociones más exactas sobre las causas de las cosas y es capaz de dar perfecta cuenta de ellas en su enseñanza, es más sabio que todos los demás en cualquier otra ciencia.",
"Movimiento es el paso de la potencia al acto.",
"No admitir como verdad nada que no fuera evidente.",
"El amigo de todo el mundo no es un amigo.",
"El verdadero discípulo es el que supera al maestro.",
"A fuerza de construir bien, se llega a buen arquitecto.",
"La verdadera causa final reside en los seres inmóviles.",
"Es propio del filósofo poder especular sobre todas las cosas.",
"Lo que con mucho trabajo se adquiere, más se ama.",
"El mando de muchos no es bueno; basta un solo jefe.",
"El alma es aquello por lo que vivimos, sentimos y pensamos."]

function randomQuote(ourMin, ourMax) {
  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}
var rdyQuote = quotes[randomQuote(0,31)];

var quotesInto = document.getElementById("main-quote");
quotesInto.innerHTML = '"' + rdyQuote + '"';

var quotesChange = document.getElementById("btn-click-event");
