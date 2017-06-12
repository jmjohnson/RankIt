import { Inject, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BallotModule } from './ballot/ballot.module';
import { DATASOURCE } from './infrastructure/tokens';
import { Datasource } from './infrastructure/interfaces';
import { SessionService } from './services/session.service';

@NgModule({
  imports: [
    CommonModule,
    BallotModule

  ],
  providers: [ SessionService ]
})
export class RankitWidgetModule {

  constructor(@Optional() @SkipSelf() extantWidgetModule: RankitWidgetModule, @Optional() @Inject(DATASOURCE) datasource: Datasource) {

    if (!!extantWidgetModule) {
      throw new Error(`RankitWidgetModule instantiated multiple times: Please import it ONLY in your root module`);
    }


    if (!datasource) {
      throw new Error(`RankitWidgetModule instantiated without a datasource in the DI container, please provide one.`)
    }

  }
}