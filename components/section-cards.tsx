import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react";
import { HeartIcon, SparklesIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function SectionCards() {
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      {/* Moments I Cherish */}
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Moments I Cherish</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            108
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <HeartIcon className="text-pink-500" />
              Forever
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium text-pink-600">
            Flashes of joy with you <SparklesIcon className="size-4" />
          </div>
          <div className="text-muted-foreground italic">
            No new moments… only memories keeping me alive
          </div>
        </CardFooter>
      </Card>

      {/* Times I Missed You */}
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Times I Missed You</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            8,100
          </CardTitle>
          <CardAction>
            <Badge variant="outline" className="text-pink-500 border-pink-400">
              <IconTrendingUp className="mr-1" />
              +55%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Every quiet moment echoed your name <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            My heart aches for you every day 💖
          </div>
        </CardFooter>
      </Card>

      {/* Heartbeats That Whispered Your Name */}
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Heartbeats That Whispered Your Name</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            11,664,000
          </CardTitle>
          <CardAction>
            <Badge variant="outline" className="text-rose-500 border-rose-400">
              <IconTrendingUp className="mr-1" />
              +∞%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium text-rose-600">
            Even in silence, my heart repeats your name <IconTrendingUp className="size-4" />
          </div>
        </CardFooter>
      </Card>

      {/* Love That Grew */}
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Love That Grew</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            ∞%
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <HeartIcon className="mr-1 size-4" />
              +7.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Distance deepened the roots <HeartIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Still growing quietly in my heart
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
