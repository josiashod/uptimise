import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./tailwind.css";
import Index from "./pages/NotesDeFrais/NoteDeFrais";
import Ajout from "./pages/NotesDeFrais/Ajout";
import Valide from "./pages/NotesDeFrais/Valide";
import Attentes from "./pages/NotesDeFrais/Attentes";
import Absences from "./pages/Absences/Absences";
import AbsencesEnAttentes from "./pages/Absences/AbsencesEnAttentes";
import AbsencesValide from "./pages/Absences/AbsencesValide";
import DemandeAbsence from "./pages/Absences/DemandeAbsence";
import NaissanceAdoption from "./pages/Absences/NaissanceAdoption";
import MariageOuPacs from "./pages/Absences/MariageOuPacs";
import Maladie from "./pages/Absences/Maladie";
import TempsDeTravail from "./pages/TempsDeTravail/TempsDeTravail";
import VueGlobalTout from "./pages/TempsDeTravail/VueGlobalTout";
import BulletinDePaie from "./pages/BulletinDePaie/BulletinDePaie";
import TableauDeBord from "./pages/TableauDeBord/TableauDeBord";
import LoginCollabo from "./pages/Login/LoginCollabo";
import LoginPage from "./pages/Login/LoginPage";
import LoginPage2 from "./pages/Login/LoginPage2";
import MyApp from "./MyApp";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/calendar' component={MyApp} />
        <Route exact path='/login/collabo' component={LoginCollabo} />
        <Route exact path='/login/2' component={LoginPage} />
        <Route exact path='/login/1' component={LoginPage2} />

        <Route exact path='/notes-de-frais' component={Index} />
        <Route exact path='/notes-de-frais/ajout' component={Ajout} />
        <Route exact path='/notes-de-frais/valide' component={Valide} />
        <Route exact path='/notes-de-frais/attentes' component={Attentes} />
        <Route exact path='/absences' component={Absences} />
        <Route
          exact
          path='/absences/demande-absence'
          component={DemandeAbsence}
        />
        <Route
          exact
          path='/absences/naissance-adoption'
          component={NaissanceAdoption}
        />
        <Route exact path='/absences/mariage-pacs' component={MariageOuPacs} />
        <Route exact path='/absences/maladie' component={Maladie} />
        <Route exact path='/temps-de-travail' component={TempsDeTravail} />
        <Route
          exact
          path='/temps-de-travail/vue-global-tout'
          component={VueGlobalTout}
        />
        <Route exact path='/bulletin-de-paie' component={BulletinDePaie} />
        <Route
          exact
          path={["/", "/tableau-de-bord"]}
          component={TableauDeBord}
        />
      </Switch>
      {/* <Index /> */}
      {/* <Ajout /> */}
      {/* <Valide /> */}
    </Router>
  );
}

export default App;
