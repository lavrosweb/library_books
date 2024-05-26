import { DivComponent } from '../../src/common/div-component';
import './header.css';

export class Header extends DivComponent {
  constructor(appState) {
    super();
    this.appState = appState;
  }

  render() {
    this.el.innerHTML = '';
    this.el.classList.add('header');
    this.el.innerHTML = `
		<div>
			<img src="../../static/logo.svg" alt="Logo" />
		</div>
		<div class="menu">
			<div class="menu">
				<a href="#" class="menu__item">
					<img src="../../static/search.svg" alt="search" />
					Поиск книг
				</a>
				<a href="favorites" class="menu__item">
					<img src="../../static/favorites.svg" alt="search" />
					Избранное
					<div class="menu__counter">
						${this.appState.favorites.length}
					</div>
				</a>
			</div>
		</div>
	`;
    return this.el;
  }
}
