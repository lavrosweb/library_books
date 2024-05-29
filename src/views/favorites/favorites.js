import onChange from 'on-change';
import { AbstractView } from '../../common/view';
import { Header } from '../../../components/header/header';
import { CardList } from '../../../components/card-list/card-list';

export class FavoritesView extends AbstractView {
  constructor(appState) {
    super();
    this.setTitle('Мои книги');
    this.appState = appState;
    this.appState = onChange(this.appState, this.appStateHook.bind(this));
  }

  destroy() {
    onChange.unsubscribe(this.appState);
    onChange.unsubscribe(this.state);
  }

  appStateHook(path) {
    if (path === 'favorites') {
      this.render();
    }
  }

  render() {
    const main = document.createElement('div');
    main.innerHTML = `<h1>Избранные книги</h1>`;
    main.append(
      new CardList(this.appState, { list: this.appState.favorites }).render()
    );
    this.app.innerHTML = '';
    this.renderHeader();
    this.app.append(main);
  }

  renderHeader() {
    const header = new Header(this.appState).render();
    this.app.prepend(header);
  }
}
