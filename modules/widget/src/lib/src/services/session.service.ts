import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { getActivePollId, WidgetState } from '../reducers/index';
import { Observable } from 'rxjs/Observable';
import { SetActivePollAction } from '../reducers/active-poll.reducer';

@Injectable()
export class SessionService {

  public readonly activePollId$: Observable<string>;

  constructor(private store: Store<WidgetState>) {
    this.activePollId$ = this.store.select(getActivePollId);

  }

  public setActivePoll(id: string) {
    this.store.dispatch(new SetActivePollAction(id));
  }

}