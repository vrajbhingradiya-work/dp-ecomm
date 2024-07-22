import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function Offers() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-6 md:gap-8 px-4 md:px-6">
        <div className="grid gap-1">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Featured Products
          </h2>
          <p className="text-muted-foreground md:text-xl">
            Check out our latest and greatest products.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 xl:gap-8 items-start">
          <Card className="relative group rounded-lg overflow-hidden flex flex-col items-center justify-center">
            <Link
              href="/plans/googledrive"
              className="absolute inset-0 z-10"
              prefetch={false}
            >
              <span className="sr-only">View</span>
            </Link>
            <CardContent className="bg-background group-hover:bg-muted/50 transition-colors text-card-foreground p-4 lg:p-6 flex flex-col gap-2 items-center">
              <HardDriveIcon className="w-12 h-12" />
              <h3 className="font-semibold tracking-tight">
                Google Drive Storage
              </h3>
            </CardContent>
          </Card>
          <Card className="relative group rounded-lg overflow-hidden flex flex-col items-center justify-center">
            <Link
              href="/plans/icloud"
              className="absolute inset-0 z-10"
              prefetch={false}
            >
              <span className="sr-only">View</span>
            </Link>
            <CardContent className="bg-background group-hover:bg-muted/50 transition-colors text-card-foreground p-4 lg:p-6 flex flex-col gap-2 items-center">
              <CloudIcon className="w-12 h-12" />
              <h3 className="font-semibold tracking-tight">iCloud Storage</h3>
            </CardContent>
          </Card>
          <Card className="relative group rounded-lg overflow-hidden flex flex-col items-center justify-center">
            <Link
              href="/plans/spotify-premium"
              className="absolute inset-0 z-10"
              prefetch={false}
            >
              <span className="sr-only">View</span>
            </Link>
            <CardContent className="bg-background group-hover:bg-muted/50 transition-colors text-card-foreground p-4 lg:p-6 flex flex-col gap-2 items-center">
              <AirplayIcon className="w-12 h-12" />
              <h3 className="font-semibold tracking-tight">Spotify Premium</h3>
            </CardContent>
          </Card>
          <Card className="relative group rounded-lg overflow-hidden flex flex-col items-center justify-center">
            <Link
              href="/plans/youtube-premium"
              className="absolute inset-0 z-10"
              prefetch={false}
            >
              <span className="sr-only">View</span>
            </Link>
            <CardContent className="bg-background group-hover:bg-muted/50 transition-colors text-card-foreground p-4 lg:p-6 flex flex-col gap-2 items-center">
              <YoutubeIcon className="w-12 h-12" />
              <h3 className="font-semibold tracking-tight">YouTube Premium</h3>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function AirplayIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" />
      <path d="m12 15 5 6H7Z" />
    </svg>
  );
}

function CloudIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
}

function HardDriveIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="22" x2="2" y1="12" y2="12" />
      <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
      <line x1="6" x2="6.01" y1="16" y2="16" />
      <line x1="10" x2="10.01" y1="16" y2="16" />
    </svg>
  );
}

function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function YoutubeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}
