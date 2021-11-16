import React from 'react'

const ListCategories = React.lazy(() => import('./views/components/category/ListCategories'))
const ListCategoriesSub = React.lazy(() => import('./views/components/category/ListCategoriesSub'))
const CreateCategories = React.lazy(() => import('./views/components/category/CreateCategories'))
const UpdateCategories = React.lazy(() => import('./views/components/category/UpdateCategories'))

const ListProducts = React.lazy(() => import('./views/components/product/ListProducts'))
const CreateProducts = React.lazy(() => import('./views/components/product/CreateProducts'))
const UpdateProducts = React.lazy(() => import('./views/components/product/UpdateProducts'))

const page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const pageWelcome = React.lazy(() => import('./views/pages/pageWelcome/PageWelcome'))

const routes = [
  { path: '/', exact: true, name: 'Home', component: pageWelcome },

  { path: '/category', name: 'Categories', component: ListCategories, exact: true },
  { path: '/category/list-categories', exact: true, name: 'List Categories', component: ListCategories },
  { path: '/category/list-categories/:parentId/sub', name: 'List Categories Sub', component: ListCategoriesSub },
  { path: '/category/create-categories', name: 'Create Categories', component: CreateCategories },
  { path: '/category/update-categories/:id', name: 'Update Categories', component: UpdateCategories },

  { path: '/product', name: 'Products', component: ListProducts, exact: true },
  { path: '/product/list-products', name: 'List Products', component: ListProducts },
  { path: '/product/create-products', name: 'Create Product', component: CreateProducts },
  { path: '/product/update-products/:id', name: 'Update Products', component: UpdateProducts },

  //404
  { path: '*', name: '404', component: page404 },

]

export default routes
