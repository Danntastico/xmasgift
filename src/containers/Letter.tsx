import { Paragraph } from "components/paragraph/Paragraph";
import React from "react";
import Image01 from "img/image01.jpg";
import Image02 from "img/Image02.jpg";
import Image03 from "img/image03.jpg";
import Image04 from "img/image04.jpg";
import Image05 from "img/image05.jpg";
import Image06 from "img/image06.jpg";
import Image07 from "img/image07.jpg";
import Image08 from "img/image08.jpg";
import Image09 from "img/image09.jpg";

const parrafo1 = `Estoy tirado en el césped, mirando al cielo, midiendo mis palabras.`;
const parrafo2 = `Podría hablarte de lo linda que eres, de tu sonrisa habitual, de tu sonrisa más auténtica, de esas expresiones que tienes cuando te enojas o te disgustas. Sí, encima de éstas palabras también hay otros tantos párrafos describiendo lo que ha sido compartir contigo hasta ahora. Sí, ya describí también cómo me siento cuando me doy cuenta que realmente estoy aportándote un rato alegre, un rato sin esos silencios incómodos que tanto odias. `;
const parrafo3 = `Ya te pensé y te escribí una y tantas veces.`;
const parrafo4 = `Sin embargo, entre más te pienso y más te plasmo unas palabras, llego al punto de quedarme corto y me siento poco auténtico. ¿Por qué? No lo sé. No quiero pensar tanto, darle tantas vueltas. Al final termino dándome cuenta que hace mucho que no hacía esto, y que es bonito, hacer el intento de expresar algo, escribir algo, tal como la guitarra, me sacaste los acordes, ahora me sacas unas cuantas frases.`;
const parrafo5 = `Al final veo la hora, ya ha pasado una hora, se me acabó mi hora de almuerzo, “debo leer más libros”, pienso.`;
const parrafo6 = `Ya llego a mi casa, y antes de encender nuevamente el computador, pienso, y decido sacar provecho de una sola cosa:`;
const parrafo7 = `Vas a leer esto cuando el 2020 haya terminado.`;
const parrafo8 = `No sé que estás haciendo, sé que estás con tu familia, hace un rato te di el abrazo más importante que te he dado hasta ahora y siento que me quedé corto, no porque no lo haya sentido, sino porque necesito una eternidad para darte un abrazo así de significativo.`;
const parrafo9 = `No existe un mejor momento en el mundo que una hora cero y un comienzo de año para recordarle a una persona lo increíble que es tenerla cerca. En mi caso eres tú, eres insólita. Estás tan llena de tantas cosas y tantas cualidades que el hecho de irte conociendo y darme cuenta de lo abismalmente diferentes que somos me ha ido llenando el pecho de razones para querer seguir compartiendo contigo. Haberme dado cuenta que existe todo un universo de cualidades y detalles detrás de la chica que ocasionalmente me encontraba en el bar ha sido de lo más bonito que descubrí en éste 2020. Y créeme que pensé que iba a cerrar mi año de la manera más monótona y poco interesante, encerrado en mi cuarto, mirando al techo infinitas veces y refugiándome sólo en esa faceta profesional con la que he venido rellenando huecos. `;
const parrafo10 = `Pero llegas tú, invitándome a irme de viaje, a tirarme en el césped del pueblo del que eres oriunda. No me hizo falta ningún lujo, ningún trago caro ni ninguna otra cosa más que un riachuelo de agua pura para darme cuenta que me hacía falta alguien como tú. Una persona que me saque del molde y que quiera compartirme su vida, sus historias, sus alegrías y todas esas vivencias pesadas que ha aprendido a llevar consigo para ser la mujer y el solemne ser humano que hoy eres. 
Siento que es poco lo que he podido ofrecerte hasta ahora, pero ahí estoy recordando nuevamente que no debo darle tantas vueltas a algo que de facto no puedo cambiar. Y está bien, y ésta noche sonrío con todo el mundo a mi alrededor, escribiendo éste repertorio de palabras desordenadas y enviando el  mensaje más importante de mi noche. 
`;
const parrafo11 = `Faltan unas pocas horas para las doce y ni el Frontend con React ni el CSS que monté para darle presentación a esta carta se me han hecho tan difíciles como su contenido. No obstante qué mejor manera de acabar mi año que pensando y llenándome la memoria de la mujer que más me ha hecho caer en cuenta de lo importante que es vivir siempre más allá, de lo necesario que es sentir emoción hasta por los detalles más insignificantes que me brinda mi día a día. `;
const parrafo12 = `Me haz hecho tocar guitarra otra vez, viajar otra vez, replantearme y darme cuenta de mis fallos otra vez, leer otra vez y ahora escribir otra vez. `;
const parrafo13 = `El mundo necesita más superheroínas como tú.`;
const parrafo14 = `Ten un feliz año, éste 2021 está listo para que des todo lo que tienes para ofrecer, y me llena el pecho saber que tuve en el 2020 la posibilidad de darme cuenta que Zolangie va a llegar muy lejos.`;
const parrafo15 = `Cierro el año escribiéndote, inicia tu año leyéndome.`;
const parrafo16 = `Atentamente, Danilo.
Te quiero intensamente, (masa/volumen)mente
`;
export const Letter = () => {
  return (
    <>
      <Paragraph content={parrafo1} image={""} />
      <Paragraph content={""} image={Image04} contentPosition="left" />
      <Paragraph content={parrafo2} image={""} />
      <Paragraph content={parrafo3} image={Image02} />
      <Paragraph content={parrafo4} image={""} />
      <Paragraph content={""} image={Image01} contentPosition="left" />
      <Paragraph content={parrafo5} image={""} />
      <Paragraph content={parrafo6} image={""} />
      <Paragraph content={parrafo7} image={Image03} />
      <Paragraph content={parrafo8} image={""} />
      <Paragraph content={""} image={Image05} contentPosition="left" />
      <Paragraph content={parrafo9} image={""} />
      <Paragraph content={parrafo10} image={""} />
      <Paragraph content={parrafo11} image={""} />
      <Paragraph content={parrafo12} image={Image08} contentPosition="left" />
      <Paragraph content={""} image={Image04} contentPosition="left" />
      <Paragraph content={parrafo13} image={""} />
      <Paragraph content={parrafo14} image={""} />
      <Paragraph content={""} image={Image07} contentPosition="left" />
      <Paragraph content={parrafo15} image={""} />
      <Paragraph content={""} image={Image09} contentPosition="left" />
      <Paragraph content={parrafo16} image={""} />
    </>
  );
};
