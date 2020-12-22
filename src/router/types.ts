export enum RouteTypes {
  HOME = '/',
  LOGIN = '/login',
  MANAGER = '/manager',
  INVESTOR = '/investor',
}

const manager = {
  HOME: RouteTypes.MANAGER,
  POSTS: `${RouteTypes.MANAGER}/posts`,
  POST: `${RouteTypes.MANAGER}/posts/:pid`,
  USERS: `${RouteTypes.MANAGER}/users`,
  USER: `${RouteTypes.MANAGER}/users/:uid`,
};

const investor = {
  HOME: RouteTypes.INVESTOR,
  POSTS: `${RouteTypes.INVESTOR}/posts`,
  POST: `${RouteTypes.INVESTOR}/posts/:pid`,
};

export const routes = {
  LOGIN: RouteTypes.LOGIN,
  HOME: RouteTypes.HOME,
  manager,
  investor,
};
