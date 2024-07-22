import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ReferAndEarn() {
  return (
    <div className="container mx-auto max-w-2xl px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Refer and Earn</h2>
          <p className="mt-2 text-muted-foreground">
            Earn rewards when your friends use your referral code to purchase
            our services.
          </p>
        </div>
        <div className="grid gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Terms and Conditions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-muted-foreground">
              <p>
                You get your money after your friend purchases services from
                your referral code. This can take up to 24-48 hours to verify
                and process your reward.
              </p>
              <p>You can refer as many friends as you want. No limits.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Referral Code Generation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <div className="grid grid-cols-[1fr_auto] items-center gap-4">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="grid grid-cols-[1fr_auto] items-center gap-4">
                  <Label htmlFor="upi">UPI ID</Label>
                  <Input id="upi" type="text" placeholder="Enter your UPI ID" />
                </div>
                <Button type="button" className="w-full">
                  Generate Your Code
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 rounded-md bg-muted p-2">
                  <div className="text-lg font-medium">ABCD1234</div>
                  <Button variant="ghost" size="icon">
                    <CopyIcon className="h-4 w-4" />
                    <span className="sr-only">Copy referral code</span>
                  </Button>
                </div>
                <Link
                  href="#"
                  className="flex items-center gap-2 text-primary"
                  prefetch={false}
                >
                  <span>Share Referral Link</span>
                  <Button variant="ghost" size="icon">
                    <CopyIcon className="h-4 w-4" />
                    <span className="sr-only">Copy referral link</span>
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function CopyIcon(props: any) {
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
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
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
