import Route from './components/app/route'

import JunctionAbilitiesPage from './components/junctionAbilitiesPage'


export const routes = []

export default {
  path: '/',
  component: Route,
  indexRoute: { component: JunctionAbilitiesPage },
  childRoutes: routes
}

