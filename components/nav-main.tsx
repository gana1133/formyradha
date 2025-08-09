"use client"

import { IconMoodSmile, IconFlower, type Icon } from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: Icon
  }[]
}) {
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        {/* Custom Row of Buttons */}
        <div className="flex items-center gap-2 px-2">
          {/* 😊 plz Smile */}
          <SidebarMenuButton
            tooltip="Radha's Smile"
            className="bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground flex items-center gap-2 px-3 py-2 rounded-md"
          >
            <IconMoodSmile className="w-4 h-4" />
            <span className="text-sm">Please Smile</span>
          </SidebarMenuButton>

          {/* 🌸 For Her Smile */}
          <Button
            size="icon"
            variant="outline"
            title="For Her Smile"
            className="size-8 p-2"
          >
            <IconFlower className="w-4 h-4" />
            <span className="sr-only">For Her Smile</span>
          </Button>
        </div>

        {/* Main Navigation Items */}
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton tooltip={item.title}>
                {item.icon && <item.icon className="w-4 h-4" />}
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
