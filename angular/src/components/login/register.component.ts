import { Component, OnInit } from "@angular/core";
import { Employee } from "../../classes/employee";
import { FileUpload } from "../../classes/fileUpload";
import { Regex } from "../../classes/regex";
import { Admin } from "../../classes/admin";
import { EmployeeService } from "../../services/employee.service";
import { GoogleMapService } from "../../services/googleMap.service";
import { IMyDpOptions, IMyDateModel } from "mydatepicker";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "../../views/login/register.html",
  styles: [
    `
      #registerDetail .row {
        margin: 0 0 5px 0;
      }
    `
  ]
})
export class RegisterComponent implements OnInit {
  public employee = new Employee();
  public admin = new Admin();
  public fileToUpload = new FileUpload();
  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: "yyyy-mm-dd",
    editableDateField: false
  };
  public paysOpt: Array<object> = [];
  public villesOpt: Array<object> = [];
  public regionsOpt: Array<object> = [];
  public decimalPattern: string = Regex.DecimalPattern();
  public digitPattern: string = Regex.DigitPattern();
  public noDigitPattern: string = Regex.NoDigitPattern();
  public phoneNumPattern: string = Regex.PhoneNumberPattern();
  public passwordPattern: string = Regex.PasswordPattern();
  public emailPattern: string = Regex.EmailPattern();
  public DateNaissance: string;
  public DateEmbauche: string;

  constructor(
    private _googleMapService: GoogleMapService,
    private _employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit() {
    this._googleMapService.getPays().subscribe(res => (this.paysOpt = res));
  }

  selectedPays() {
    if (!this.employee.pays) return;
    this._googleMapService
      .getVilles(this.employee.pays)
      .subscribe(res => (this.villesOpt = res));
    this._googleMapService
      .getRegions(this.employee.pays)
      .subscribe(res => (this.regionsOpt = res));
  }

  onSubmit() {
    this.admin.employee.nom = this.employee.nom;
    this.admin.employee.prenom = this.employee.prenom;
    this._employeeService
      .saveEmployee(this.employee, this.admin)
      .subscribe(res => this.callback(res));
  }

  callback(res) {
    if (res) {
      alert("Félicitation! Vos informations ont été sauvegardées avec succès");
      this.router.navigateByUrl("/login");
      return;
    }
    alert("Désolé! Vos informations ont été sauvegardées avec sans succès");
  }

  selectedDateNaisance(event: IMyDateModel) {
    this.employee.dateNaissance = event.formatted;
  }

  selectedDateEmbauche(event: IMyDateModel) {
    this.employee.dateEmbauche = event.formatted;
  }
}
