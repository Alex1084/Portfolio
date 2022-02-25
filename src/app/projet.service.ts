import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { provideRoutes } from "@angular/router";
import { Observable } from "rxjs";
import { IProjet } from "./Projet"

@Injectable({
  providedIn: "root"
})
export class ProjetService {
  private _url: string = "/assets/data/projet.json";

  constructor(private http: HttpClient) { }

  getProjet(): Observable<IProjet[]> {
    return this.http.get<IProjet[]>(this._url);
  }

}