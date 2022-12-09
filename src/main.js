import TripPresenter from './presenter/trip-presenter.js';

const headerElement = document.querySelector('.trip-controls');
const tripEventsElement = document.querySelector('.trip-events');
const tripPresenter = new TripPresenter({
  boardContainer: tripEventsElement,
  filterContainer: headerElement,
});

tripPresenter.init();

// import { render } from './render.js';
// import TripFilterView from './view/trip-filter-view.js';
// import TripSortView from './view/trip-sort-view.js';
// import TripEventListView from './view/trip-event-list-view.js';
// import TripEventItemView from './view/trip-event-item-view.js';

// const siteMainElement = document.querySelector('.trip-main');
// const siteHeaderElement = siteMainElement.querySelector('.trip-controls');

// const sitePageMainElement = document.querySelector('.page-main');
// const siteTripEventsElement = sitePageMainElement.querySelector('.trip-events');
// const siteEventListElement = document.querySelector('.trip-events__list');

// render(new TripFilterView(), siteHeaderElement);
// render(new TripSortView(), siteTripEventsElement);
// render(new TripEventListView(), siteTripEventsElement);
// render(new TripEventItemView(), siteEventListElement);
