import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
    providedIn: 'root'
})
export class NotificationService {

    constructor(
        private _matSnackBar: MatSnackBar
    ) { }

    public message(message: string, duration: number = 3000): void {
      this._matSnackBar.open(message, 'Ok', { duration });
    }
}
