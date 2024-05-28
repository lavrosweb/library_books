import { DivComponent } from '../../src/common/div-component';
import { Card } from '../card/card';
import './card-list.css';

export class CardList extends DivComponent {
  constructor(appState, parentState) {
    super();
    this.appState = appState;
    this.parentState = parentState;
  }

  render() {
    if (this.parentState.loading) {
      this.el.innerHTML = '<div class="car-list__loaded">Загрузка...</div>';
      return this.el;
    }
    this.el.classList.add('card-list');
    this.el.innerHTML = `<h1>Найдено книг - ${this.parentState.numFound}</h1>`;
    for (const card of this.parentState.list) {
      this.el.append(new Card(this.appState, card).render());
    }
    return this.el;
  }
}
