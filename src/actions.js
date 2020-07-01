import { fetchRegions, fetchCategories } from './services/api';
import check from './utils';
import restaurantsFixture from './__fixtures__/restaurants';

const setRegions = (regions) => ({
  type: 'setRegions',
  payload: { regions },
});

const setCategories = (categories) => ({
  type: 'setCategories',
  payload: { categories },
});

const setRestaurants = (restaurants) => ({
  type: 'setRestaurants',
  payload: { restaurants },
});

const checkRegion = (id) => ({
  type: 'checkRegion',
  payload: { id },
});

const checkCategory = (id) => ({
  type: 'checkCategory',
  payload: { id },
});

const updateRegions = (id) => (dispatch, getState) => {
  const { regions } = getState();
  const checkedRegions = regions.map((region) => check(region, id));
  dispatch(setRegions(checkedRegions));
  dispatch(checkRegion(id));
  dispatch(setRestaurants([]));
};

const updateCategories = (id) => (dispatch, getState) => {
  const { categories } = getState();
  const checkedCategories = categories.map((category) => check(category, id));
  dispatch(setCategories(checkedCategories));
  dispatch(checkCategory(id));
  dispatch(setRestaurants(restaurantsFixture));
};

const getRegions = () => async (dispatch) => {
  const regions = await fetchRegions();
  dispatch(setRegions(regions));
};

const getCategories = () => async (dispatch) => {
  const categories = await fetchCategories();
  dispatch(setCategories(categories));
};

const getRestaurants = () => async (dispatch, getState) => {

};

export {
  setRegions, setCategories, setRestaurants, checkRegion, checkCategory,
  updateRegions, updateCategories, getRegions, getCategories, getRestaurants,
};
