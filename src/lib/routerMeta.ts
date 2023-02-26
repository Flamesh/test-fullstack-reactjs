export interface IRouterMeta {
  name?: string;
  path: string;
}

export type RouterMetaType = {
  [key: string]: IRouterMeta;
};

const routerMeta: RouterMetaType = {
  HomePage: {
    name: 'Home',
    path: '/',
  },
  SignInPage: {
    name: 'Sign in',
    path: '/login',
  },
  SignUpPage: {
    name: 'Sign up',
    path: '/register',
  },
  NewBookPage: {
    name: 'New book',
    path: '/new-book',
  },
  EditBookPage: {
    name: 'Edit book',
    path: '/edit-book/:slug',
  },
  NotFoundPage: {
    path: '/*',
  },
};

export default routerMeta;
