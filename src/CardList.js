import React, { Component, Fragment } from 'react';
import fontAwesome from '@fortawesome/fontawesome-free/css/all.css'
import image1 from './images/phoebe-buffay.jpg';
import image2 from './images/joey-tribbiani.jpg';
import image3 from './images/monica-geller.png';
import './CardList.css';
import Card from './Card';

class CardList extends Component {
    render() {
        return (
            <Fragment>
                <h1 className="Title">FRIENDS</h1>

        <Card user="Phoebe Buffay" date="Miércoles 25 de Julio de 2018" image={image1}
        text="Phoebe Buffay es una chica típica del estilo de Nueva York, ruda y fuerte tanto física como mentalmente. Es la menor de las gemelas de Phoebe Abbott (Teri Garr) y Frank Buffay (Bob Balaban) nacidas el 16 de febrero de 1967 como lo menciona en una ocasión. Frank en ese momento estaba casado con la mejor amiga de Phoebe Abbott, Lily, quien adoptó a las gemelas. Las hermanas no supieron hasta la edad adulta que Lily no era su madre biológica; Úrsula se enteró con una carta que dejó ella antes de suicidarse aunque no se lo contó a Phoebe. No se sabe gran cosa de los primeros años de la vida de Phoebe, salvo que era de Nueva York, que su padre abandonó a la familia cuando ella era muy joven, y que Lily se suicidó. Ocasionalmente Phoebe menciona la curiosa manera de ser de Lily y los métodos que utilizó para criar a sus hijas." number="37" heart="fas fa-heart" link="https://es.wikipedia.org/wiki/Phoebe_Buffay"/>

        <Card user="Joey Tribbiani" date="Miércoles 30 de Julio de 2014" image={image2} text="Nacido el 9 de enero de 1968, Joey viene de una familia italo-americana de 8 hijos, en la cual él es el único varón. Él es en parte portugués,2​ un 1/16, pero no se sabe de qué lado de la familia viene esa ascendencia. Tiene 7 hermanas: Mary Therese, Mary Angela (con quien Chandler salió en la fiesta de cumpleaños de Joey), Dina, Gina, Tina, Veronica y Cookie. Joey nació en Queens, Nueva York. Cuando era niño, era muy propenso a los accidentes.3​ Tuvo un amigo imaginario llamado Maurice, el cual era un vaquero del espacio.4​" number="84" heart="far fa-heart"
        link="https://es.wikipedia.org/wiki/Joey_Tribbiani" />

         <Card user="Monica Geller" date="Martes 31 de Julio de 2018" image={image3}
        text="Monica es la hermana menor de Ross Geller, conoció a Rachel Green en la secundaria, fue compañera de piso de Phoebe Buffay, y se casó con el amigo de universidad de Ross, Chandler Bing.
        Durante la serie, flashbacks de algunos episodios revelaron que Monica había sido obesa, con un peso de 255 libras (115 kg), en la escuela secundaria.
        Monica conoció al amigo de Ross, Chandler, cuando él y Ross estaban en la universidad. Después de que Chandler la llamara gorda, Monica perdió peso y, en un episodio con flashback, trató de tener venganza seduciéndolo pero accidentalmente le cortó un dedo del pie. Fue la sugerencia de Chandler lo que le hizo convertirse en Chef. Monica y Chandler estuvieron juntos en Londres durante el final de la Temporada 4 y se casaron al final de la Temporada 7. Adoptaron dos niños gemelos llamados Jack y Erica." number="56" heart="fas fa-heart" link="https://es.wikipedia.org/wiki/Monica_Geller"/>

      </Fragment>
        )
    }
};

export default CardList;