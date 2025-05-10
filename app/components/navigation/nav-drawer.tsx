"use client"

import * as React from "react"
import { Link, LinkProps } from "@tanstack/react-router"
import { useRouter } from "@tanstack/react-router"

import { navigationConfig } from "@/config/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Menu } from "lucide-react"

export function NavDrawer() {
  const [open, setOpen] = React.useState(false)

  const onOpenChange = React.useCallback(
    (open: boolean) => {
      setOpen(open)
      /* setMetaColor(open ? "#09090b" : metaColor) */
    },
    [/* setMetaColor, metaColor */]
  )

  return (
    <Drawer direction="left" open={open} onOpenChange={onOpenChange}>
      <DrawerTrigger asChild>
        <Button
          variant="ghost"
          className="gap-4 p-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
        >
           <Menu className="size-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-full p-0">
        <div className="overflow-auto p-6">
          <div className="flex flex-col space-y-2">
            {navigationConfig.map((item, index) => (
              <div key={index} className="flex flex-col gap-4 pt-6">
                <h4 className="text-xl font-medium">{item.title}</h4>
                {item?.children?.length &&
                  item.children.map((item) => (
                    <React.Fragment key={item.href}>
                      {!item.disabled &&
                        (item.href ? (
                          <MobileLink
                            href={item.href}
                            onOpenChange={setOpen}
                            className="opacity-80"
                          >
                            {item.title}
                            {item.label && (
                              <span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                                {item.label}
                              </span>
                            )}
                          </MobileLink>
                        ) : (
                          item.title
                        ))}
                    </React.Fragment>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter()
  return (
    <Link
      href={href}
      onClick={() => {
        if (href) {
          router.navigate({ to: href.toString() })
          onOpenChange?.(false)
        }
      }}  
      className={cn("text-[1.15rem]", className)}
      {...props}
    >
      {children}
    </Link>
  )
}