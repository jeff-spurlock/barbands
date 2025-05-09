interface NavigationItem {
  title: string
  label?: string
  href: string
  children?: NavigationItem[]
  disabled: boolean
}

export const navigationConfig: NavigationItem[] = [
  {
    title: "Home",
    href: "/",
    disabled: false,  
  },
  {
    title: "Bands",
    href: "/bands",
    children: [
      {
        title: "Create",
        href: "/bands/create",
        disabled: false,
      },
      {
        title: "Manage",
        href: "/bands/manage",
        disabled: false,
      },
    ],
    disabled: false,
  },
  {
    title: "Venues",
    href: "/venues",
    children: [
      {
        title: "Create",
        label: "New!",
        href: "/venues/create",
        disabled: false,
      },
      {
        title: "Manage",
        href: "/venues/manage",
        disabled: false,
      },
    ],
    disabled: false,
  },
]
