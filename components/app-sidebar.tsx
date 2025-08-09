"use client"

import * as React from "react"
import {
  IconHeart,
  IconRecordMail,
  IconTimeline,
  IconMoonStars,
  IconUserOff,
  IconRosette,
  IconEyeOff,
  IconLock,
  IconMoodSmile,
  IconBrandWhatsapp,
  IconInfinity,
  IconArchive,
  IconLeaf,
  IconLetterZ,
  IconInnerShadowTop,
} from "@tabler/icons-react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// ✅ Sidebar data structure
const data = {
  user: {
    name: "Forever Yours ❤️",
    email: "In Silence, Loving Radha",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Still Loving You",
      url: "#",
      icon: IconHeart,
    },
    {
      title: "Echoes of Us",
      url: "#",
      icon: IconRecordMail,
    },
    {
      title: "When You Were Here",
      url: "#",
      icon: IconTimeline,
    },
    {
      title: "Dreams That Waited",
      url: "#",
      icon: IconMoonStars,
    },
    {
      title: "You & I (But Never Us)",
      url: "#",
      icon: IconUserOff,
    },
  ],
  navClouds: [
    {
      title: "Silent Prayers",
      icon: IconRosette,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Whispers to Krishna",
          url: "#",
        },
        {
          title: "Surrendered Hopes",
          url: "#",
        },
      ],
    },
    {
      title: "Unseen Corners",
      icon: IconEyeOff,
      url: "#",
      items: [
        {
          title: "Hidden Letters",
          url: "#",
        },
        {
          title: "Secret Glimpses",
          url: "#",
        },
      ],
    },
    {
      title: "The Promise I Kept",
      icon: IconLock,
      url: "#",
      items: [
        {
          title: "To Love Silently",
          url: "#",
        },
        {
          title: "To Wait Without Asking",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Your Smile Was Enough",
      url: "#",
      icon: IconMoodSmile,
    },
    {
      title: "Krishna Knows",
      url: "#",
      icon: IconBrandWhatsapp,
    },
    {
      title: "Forever Mine (In Heart)",
      url: "#",
      icon: IconInfinity,
    },
  ],
  documents: [
    {
      name: "Sacred Keepsakes",
      url: "#",
      icon: IconArchive,
    },
    {
      name: "Love That Grew Alone",
      url: "#",
      icon: IconLeaf,
    },
    {
      name: "Letters You'll Never Read",
      url: "#",
      icon: IconLetterZ,
    },
  ],
}

// ✅ Main Sidebar Component
export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      {/* Header Section */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#" className="flex items-center gap-2">
                <IconInnerShadowTop className="size-5 text-pink-500" />
                <span className="text-base font-semibold text-rose-600">
                  Radha Universe
                </span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* Main Content: Main + Docs + Secondary */}
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>

      {/* Footer: User Info */}
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
