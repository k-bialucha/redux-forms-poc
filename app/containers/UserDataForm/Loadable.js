/**
 *
 * Asynchronously loads the component for UserDataForm
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
