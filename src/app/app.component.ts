import { Component,ViewEncapsulation,SimpleChanges } from '@angular/core';
import {TranslateService,LangChangeEvent} from '@ngx-translate/core';
import { Constants } from 'src/app/constants';
import* as _ from 'lodash'

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: [ '../../node_modules/font-awesome/css/font-awesome.min.css',
  '../../node_modules/npm-font-open-sans/open-sans.css',
  '../../node_modules/primeng/resources/primeng.min.css',
  '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  title = 'users-app';
  language = Constants.DEFAULT_LANGUAGE;
  private translate : TranslateService;

  constructor (translate:TranslateService){
    this.translate = translate;
    translate.use(this.language);
  }

  public changeLanguage(lang: string){
    this.language = lang;
    this.translate.use(this.language);
  }


//  ngOnChanges(changes:SimpleChanges){
//     console.log("in ng on change", this.language)
//   if (!_.isUndefined(changes.language)){
//     console.log("changes.language.currentValue", changes.language.currentValue)
//     this.translate.use(changes.language.currentValue);
//   }
// }

// private initI18n():void{
//   this.translate.use(this.language);
//   this.translate.onLangChange.subscribe((event: LangChangeEvent)=>{
//     console.log("in initI18n", this.language)

//   this.translate.setTranslation(this.language,);})
// }

}
