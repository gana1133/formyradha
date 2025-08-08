import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Heart, BookOpen, Sparkles } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b border-pink-100 bg-gradient-to-r from-pink-50 to-purple-50 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height) dark:border-pink-900/50 dark:from-pink-900/20 dark:to-purple-900/20">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1 text-pink-600 dark:text-pink-400" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4 bg-pink-200 dark:bg-pink-700"
        />
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-pink-600 dark:text-pink-400" />
          <h1 className="text-base font-medium text-pink-800 dark:text-pink-200">
            Sacred Memories
          </h1>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="hidden sm:flex items-center gap-2 bg-pink-100 text-pink-700 hover:bg-pink-200 hover:text-pink-800 dark:bg-pink-900/30 dark:text-pink-300 dark:hover:bg-pink-800/50 dark:hover:text-pink-200"
          >
            <Heart className="h-4 w-4 fill-current" />
            <span>Divine Love</span>
            <Sparkles className="h-3 w-3" />
          </Button>
        </div>
      </div>
    </header>
  );
}