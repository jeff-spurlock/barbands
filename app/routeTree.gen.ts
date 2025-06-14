/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as BandsImport } from './routes/bands'
import { Route as IndexImport } from './routes/index'
import { Route as BandsCreateImport } from './routes/bands/create'

// Create/Update Routes

const BandsRoute = BandsImport.update({
  id: '/bands',
  path: '/bands',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const BandsCreateRoute = BandsCreateImport.update({
  id: '/create',
  path: '/create',
  getParentRoute: () => BandsRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/bands': {
      id: '/bands'
      path: '/bands'
      fullPath: '/bands'
      preLoaderRoute: typeof BandsImport
      parentRoute: typeof rootRoute
    }
    '/bands/create': {
      id: '/bands/create'
      path: '/create'
      fullPath: '/bands/create'
      preLoaderRoute: typeof BandsCreateImport
      parentRoute: typeof BandsImport
    }
  }
}

// Create and export the route tree

interface BandsRouteChildren {
  BandsCreateRoute: typeof BandsCreateRoute
}

const BandsRouteChildren: BandsRouteChildren = {
  BandsCreateRoute: BandsCreateRoute,
}

const BandsRouteWithChildren = BandsRoute._addFileChildren(BandsRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/bands': typeof BandsRouteWithChildren
  '/bands/create': typeof BandsCreateRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/bands': typeof BandsRouteWithChildren
  '/bands/create': typeof BandsCreateRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/bands': typeof BandsRouteWithChildren
  '/bands/create': typeof BandsCreateRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/bands' | '/bands/create'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/bands' | '/bands/create'
  id: '__root__' | '/' | '/bands' | '/bands/create'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  BandsRoute: typeof BandsRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  BandsRoute: BandsRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/bands"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/bands": {
      "filePath": "bands.tsx",
      "children": [
        "/bands/create"
      ]
    },
    "/bands/create": {
      "filePath": "bands/create.tsx",
      "parent": "/bands"
    }
  }
}
ROUTE_MANIFEST_END */
