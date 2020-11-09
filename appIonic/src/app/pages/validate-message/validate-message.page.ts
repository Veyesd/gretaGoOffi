import { Component, OnInit, Output } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-validate-message",
  templateUrl: "./validate-message.page.html",
  styleUrls: ["./validate-message.page.scss"],
})
export class ValidateMessagePage implements OnInit {
  @Output() public header = false;
  message: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    console.log("Voici l'Id qui définit le type de message", id);
    switch (id) {
      case "1":
        // Création d'un compte utilisateur
        this.message = "Votre compte a bien été créé";
        break;
      case "2":
        // Mot de passe modifié
        this.message = "Votre mot de passe a été modifié, veuillez vous reconnecter"
        break;
      case "3":
        // Création d'un trajet
        this.message = "Le trajet a bien été créé"
        break;
      case "4":
        // Inscription a un trajet
        this.message = "Votre inscription a bien été prise en compte"
        break;
      case "5":
        // Modification d'un trajet
        this.message = "Votre trajet a bien été modifié. Un message sera envoyé aux passagers inscrits"
        break;
      case "6":
        // Suppression d'un trajet
        this.message = "Votre trajet a bien été supprimé. Un message sera envoyé aux passagers inscrits"
        break;
    }
  }
}
