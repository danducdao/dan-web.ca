import { Component, OnInit } from "@angular/core";
import { EmailService } from "../../services/email.service";
import { Regex } from "../../classes/regex";

@Component({
  selector: "app-contact-index",
  templateUrl: "../../views/contact/index.html",
  styles: [
    `
      #contact .row {
        margin: 0 0 5px 0;
      }
      #contact .label-control {
        font-weight: normal;
      }
    `
  ]
})
export class ContactComponent implements OnInit {
  public email = { nom: "", courriel: "", sujet: "", message: "" };
  public nodigitPattern = Regex.NoDigitPattern();
  public emailPattern = Regex.EmailPattern();

  constructor(private _emailService: EmailService) {}

  ngOnInit() {}

  onSubmit() {
    this._emailService
      .send(this.email)
      .subscribe(
        data =>
          data
            ? alert("Votre message a été envoyé avec succès")
            : alert("Votre message a été envoyé avec sans succès")
      );
  }
}
