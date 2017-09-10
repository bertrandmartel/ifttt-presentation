import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Import Spectacle Core tags
import {
    BlockQuote,
    Cite,
    Deck,
    Heading,
    ListItem,
    List,
    Quote,
    Slide,
    Text,
    Appear,
    Markdown
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import bg from "./assets/bg.png";
import banner from "./assets/banner.png";
import bbox from "./assets/bbox.png";
import bbox2 from "./assets/bbox2.png";
import iftttStart from "./assets/iftt-start.png";
import twitterGmail from "./assets/twitter-gmail.png";
import actionsTrigger from "./assets/ifttt-actions-trigger.png";
import partner from "./assets/partner.png";
import box from "./assets/box.png";
import server from "./assets/server.png";
import globalConfig from "./assets/global.png";
import screenshot1 from "./assets/screenshot1.png";
import screenshot2 from "./assets/screenshot2.png";
import screenshot3 from "./assets/screenshot3.png";
import screenshot4 from "./assets/screenshot4.png";
import screenshot5 from "./assets/screenshot5.png";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

//preloader(images);

const theme = createTheme({
    primary: "#474747",
    secondary: "white",
    tertiary: "#03A9FC",
    quartenary: "#CECECE"
}, {
    primary: "Roboto",
    secondary: "Helvetica"
});

class Presentation extends React.Component {
    render() {
        return (
            <Deck transition={["zoom", "slide"]} transitionDuration={500} contentWidth={1300} theme={theme} progress={'number'}>
         <Slide transition={["slide"]} bgImage={bg}>
            <img src={banner} alt="banner"/>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgImage={bg} >
          <Heading size={2} textColor="secondary" >moins de 0.5%</Heading>
          <Text size={7} textColor="secondary" style={{'marginTop':100}}>des données sont analysées et utilisées</Text>
          <Markdown>
          {`
_source : MIT Technology Review_
          `}
          </Markdown>
        </Slide>
        <Slide transition={["slide"]} bgImage={bg}>
            <Heading size={2} textColor="secondary" style={{lineHeight: '120%'}}>Comment permettre l'accès à ces données ?</Heading>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgImage={bg}>
          <Heading size={2} textColor="secondary" >Thème</Heading>
          <Text size={3} textColor="secondary" style={{'marginTop':40}}>Accessibilité aux données et exécutions d'actions à distance sur la box Miami</Text>
          <img src={bbox} alt="banner" style={{'marginTop':40}}/>
        </Slide>
        <Slide transition={["slide"]} bgImage={bg}>
          <Heading size={2} textColor="secondary" >Objectif</Heading>
          <Text size={3} textColor="secondary" style={{'marginTop':40}}>Permettre aux utilisateurs de définir des règles via IFTTT</Text>
          <img src={bbox2} alt="banner" style={{'marginTop':40}}/>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgImage={bg}>
          <Heading size={2} textColor="secondary">Plan</Heading>
          <List style={{'marginTop':40}} textColor="secondary">
            <ListItem style={{lineHeight: '120%'}}>IFTTT: qu'est ce que c'est ?</ListItem>
            <ListItem style={{lineHeight: '120%'}}>Fonctionnement de bout en bout</ListItem>
            <ListItem style={{lineHeight: '120%'}}>Parcours client</ListItem>
            <ListItem style={{lineHeight: '120%'}}>Exemples</ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgImage={bg}>
          <Heading size={2} textColor="secondary" >IFTTT : présentation</Heading>
          <Text size={3} textColor="secondary" style={{'marginTop':40}}>"If This Then That" : Si ceci alors cela</Text>
          <Text size={3} textColor="secondary" style={{'marginTop':40}}>automatiser des tâches en créant des scénarios entre différents webservices (Gmail, Facebook, Twitter, Ebay etc...)</Text>
          <img src={twitterGmail} alt="banner" style={{'marginTop':60}}/>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgImage={bg}>
          <Heading size={2} textColor="secondary" >IFTTT : Actions et Triggers</Heading>
          <Text size={3} textColor="secondary" style={{'marginTop':40}}>Actions : exécution d'actions</Text>
          <Text size={3} textColor="secondary" style={{'marginTop':40}}>Triggers : évènements déclenchés</Text>
          <img src={actionsTrigger} alt="banner" style={{'marginTop':40}}/>
        </Slide>
        <Slide transition={["slide"]} bgImage={bg}>
          <Heading size={2} textColor="secondary" >IFTTT : Pourquoi ?</Heading>
          <Text size={3} textColor="secondary" style={{'marginTop':40}}>+ de 360 services disponibles</Text>
          <Text size={3} textColor="secondary" style={{'marginTop':40}}>possibilité d'intégrer son propre service sur IFTTT platform</Text>
          <img src={partner} alt="banner" style={{'marginTop':40}}/>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgImage={bg}>
          <Heading size={2} textColor="secondary" >Fonctionnement : box</Heading> 
          <img src={box} alt="banner" style={{'marginTop':60}}/>
        </Slide>
        <Slide transition={["slide"]} bgImage={bg}>
          <Heading size={2} textColor="secondary" >Fonctionnement : serveur</Heading>
          <img src={server} alt="banner" style={{'marginTop':60}}/>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgImage={bg}>
          <Heading size={2} textColor="secondary" >Fonctionnement : global</Heading>
          <img src={globalConfig} alt="banner" style={{'marginTop':40}}/>
        </Slide>

        <Slide transition={["slide"]} bgImage={bg}>
          <Heading size={2} textColor="secondary" >Parcours client : étapes</Heading>
          <List style={{'marginTop':40}} textColor="secondary">
            <ListItem style={{lineHeight: '120%'}}>Téléchargement de l'application sur le playstore Android TV</ListItem>
            <ListItem style={{lineHeight: '120%'}}>Activation du service sur la box</ListItem>
            <ListItem style={{lineHeight: '120%'}}>Réception du mail avec le lien vers le service IFTTT</ListItem>
            <ListItem style={{lineHeight: '120%'}}>Connexion à IFTTT (créer un compte si besoin)</ListItem>
            <ListItem style={{lineHeight: '120%'}}>Activer le service Bbox Miami sur IFTTT avec le même compte Google que sur la box</ListItem>
          </List>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgImage={bg}>
          <Heading size={2} textColor="secondary" >Parcours client : appli box 1/5</Heading>
          <img src={screenshot1} alt="banner" style={{'marginTop':40}}/>
        </Slide>
        <Slide transition={["slide"]} bgImage={bg}>
          <Heading size={2} textColor="secondary" >Parcours client : appli box 2/5</Heading>
          <img src={screenshot2} alt="banner" style={{'marginTop':40}}/>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgImage={bg}>
          <Heading size={2} textColor="secondary" >Parcours client : appli box 3/5</Heading>
          <img src={screenshot3} alt="banner" style={{'marginTop':40}}/>
        </Slide>
        <Slide transition={["slide"]} bgImage={bg}>
          <Heading size={2} textColor="secondary" >Parcours client : appli box 4/5</Heading>
          <img src={screenshot4} alt="banner" style={{'marginTop':40}}/>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgImage={bg}>
          <Heading size={2} textColor="secondary" >Parcours client : appli box 5/5</Heading>
          <img src={screenshot5} alt="banner" style={{'marginTop':40}}/>
        </Slide>
        <Slide transition={["slide"]} bgImage={bg}>
          <Heading size={2} textColor="secondary" >Conclusion</Heading>
          <List style={{'marginTop':40}} textColor="secondary">
            <ListItem style={{lineHeight: '120%'}} fit>de nombreuses fonctionnalités et combinaisons possibles</ListItem>
            <ListItem style={{lineHeight: '120%'}} fit>une valeur ajoutée pour la Bbox Miami avec les API gateway</ListItem>
            <ListItem style={{lineHeight: '120%'}} fit>une compatibilité avec les autres box Android TV</ListItem>
            <ListItem style={{lineHeight: '120%'}} fit>réutilisation des composants cloud pour d'autres services</ListItem>
          </List>
        </Slide>

      </Deck>
        );
    }
}

class App extends Component {
    render() {
        return (
            <Presentation/>
        );
    }
}

export default App;