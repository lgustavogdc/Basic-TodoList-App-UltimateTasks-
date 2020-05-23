import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  taskList = [];
  taskName: any;

  constructor(public alertController: AlertController) { }

  capitalize(s) {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }
  async completeTask(index) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Did you finish your task?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yes',
          handler: () => {
            this.taskList.splice(index, 1);
          }
        }
      ]
    });
    await alert.present();
  }


  addTask() {
    if (this.taskName.length > 0) {
      let task = this.capitalize(this.taskName);
      this.taskList.push(task);
      this.taskName = "";
    }
  }
  async updateTask(index) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Edit:',
      inputs: [
        {
          name: 'editTask',
          type: 'text',
          placeholder: this.taskList[index]
        }],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'Confirm',
          handler: data => {
            this.taskList[index] = this.capitalize(data.editTask);
          }
        }
      ]
    });
    await alert.present();
  }
  async deleteTask(index) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Are you sure?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Confirm',
          handler: () => {
            this.taskList.splice(index, 1);
          }
        }
      ]
    });
    await alert.present();

  }
}
