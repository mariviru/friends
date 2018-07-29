import React, { Component } from 'react';
import './Card.css';

//EJERCICIO 1 (3.4)
// class App extends Component {
//   render() {
//     return (
//       <div className="Card">
//         <header className="Card-header">
//           <img src={image} className="Card-img" alt="img" />
//           <div className="Card-header-text">
//             <h1 className="Card-name">Phoebe Buffay</h1>
//             <h2 className="Card-date">Miércoles 25 de Julio de 2018</h2>
//           </div>
//       </header>
//       <p className="Card-text">
//       Phoebe Buffay es una chica típica del estilo de Nueva York, ruda y fuerte tanto física como mentalmente. Es la menor de las gemelas de Phoebe Abbott (Teri Garr) y Frank Buffay (Bob Balaban) nacidas el 16 de febrero de 1967 como lo menciona en una ocasión. Frank en ese momento estaba casado con la mejor amiga de Phoebe Abbott, Lily, quien adoptó a las gemelas. Las hermanas no supieron hasta la edad adulta que Lily no era su madre biológica; Úrsula se enteró con una carta que dejó ella antes de suicidarse aunque no se lo contó a Phoebe. No se sabe gran cosa de los primeros años de la vida de Phoebe, salvo que era de Nueva York, que su padre abandonó a la familia cuando ella era muy joven, y que Lily se suicidó. Ocasionalmente Phoebe menciona la curiosa manera de ser de Lily y los métodos que utilizó para criar a sus hijas.
//       </p>
//       <footer className="Card-footer">
//         <a href="https://es.wikipedia.org/wiki/Phoebe_Buffay" className="Card-link">Leer más...</a>
//         <span className="Card-likes">
//           <p>37</p>
//           <i className="fas fa-heart Card-icon"></i>
//         </span>
//       </footer>
//       </div>
//     );
//   }
// }

//EJERCICIO 2 (3.4)
// class Card extends Component {
//   render() {
//     const cardFooter = (
//         <footer className="Card-footer">
//         <a href={this.props.link} className="Card-link">Leer más...</a>
//         <span className="Card-likes">
//           <p>{this.props.number}</p>
//           <i className={this.props.heart}></i>
//         </span>
//       </footer>
//     );
//     const cardMain = (
//         <p className="Card-text">
//         Phoebe Buffay es una chica típica del estilo de Nueva York, ruda y fuerte tanto física como mentalmente. Es la menor de las gemelas de Phoebe Abbott (Teri Garr) y Frank Buffay (Bob Balaban) nacidas el 16 de febrero de 1967 como lo menciona en una ocasión. Frank en ese momento estaba casado con la mejor amiga de Phoebe Abbott, Lily, quien adoptó a las gemelas. Las hermanas no supieron hasta la edad adulta que Lily no era su madre biológica; Úrsula se enteró con una carta que dejó ella antes de suicidarse aunque no se lo contó a Phoebe. No se sabe gran cosa de los primeros años de la vida de Phoebe, salvo que era de Nueva York, que su padre abandonó a la familia cuando ella era muy joven, y que Lily se suicidó. Ocasionalmente Phoebe menciona la curiosa manera de ser de Lily y los métodos que utilizó para criar a sus hijas.
//         </p>
//     );
//     const cardHeader = (
//       <header className="Card-header">
//         <img src={this.props.image} className="Card-img" alt="img" />
//           <div className="Card-header-text">
//             <h1 className="Card-name">{this.props.user}</h1>
//             <h2 className="Card-date">{this.props.date}</h2>
//           </div>
//       </header>
//     );
//     const cardRoot = (
//       <div className="Card">
//         {cardHeader}
//         {cardMain}
//         {cardFooter}
//       </div>
//     );
//     return cardRoot;
//   }
// }

//EJERCICIO 3 (3.5)
const Card = ({link, number, heart, text, image, user, date}) => {
      const cardFooter = (
          <footer className="Card-footer">
          <a href={link} className="Card-link">Leer más...</a>
          <span className="Card-likes">
            <p>{number}</p>
            <i className={heart}></i>
          </span>
        </footer>
      );
      const cardMain = (
          <p className="Card-text">
            {text}
          </p>
      );
      const cardHeader = (
        <header className="Card-header">
          <img src={image} className="Card-img" alt="img" />
            <div className="Card-header-text">
              <h1 className="Card-name">{user}</h1>
              <h2 className="Card-date">{date}</h2>
            </div>
        </header>
      );
      const cardRoot = (
        <div className="Card">
          {cardHeader}
          {cardMain}
          {cardFooter}
        </div>
      );
      return cardRoot;
    }


export default Card;
