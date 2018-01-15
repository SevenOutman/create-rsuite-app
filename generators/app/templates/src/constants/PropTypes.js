import PropTypes from 'prop-types';
import { routerShape, locationShape } from 'react-router';
import { intlShape } from 'react-intl';

export const IntlShape = intlShape;
export const RouterShape = routerShape;

export const ArrayOfObjects = PropTypes.arrayOf(PropTypes.object);

export const TablePagingShape = PropTypes.shape({
  page: PropTypes.number,
  pagesize: PropTypes.number,
  total: PropTypes.number
});
export const OneOfRequestStatus = PropTypes.oneOf([
  'request', 'success', 'error'
]);


export const routerProps = {
  location: locationShape,
  params: PropTypes.object,
  route: PropTypes.object,
  routeParams: PropTypes.object,
  router: RouterShape,
  routes: ArrayOfObjects,
};
