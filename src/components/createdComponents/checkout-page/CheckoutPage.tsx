import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerTrigger, DrawerContent } from "@/components/ui/drawer";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";

export default function Checkout() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <MountainIcon className="h-6 w-6" />
            <span className="text-lg font-semibold">Acme Store</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Home
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Shop
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              About
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 py-12 md:py-16">
        <div className="container mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-2xl font-bold mb-4">Checkout</h1>
            <div className="bg-background rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              <div className="grid grid-cols-[80px_1fr_80px] items-center gap-4 mb-4">
                <Image
                  src="/placeholder.svg"
                  alt="Product Image"
                  width={80}
                  height={80}
                  className="rounded-md"
                />
                <div>
                  <h3 className="font-medium">Acme Headphones</h3>
                  <p className="text-muted-foreground text-sm">Black</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">$99.99</p>
                  <p className="text-muted-foreground text-sm">Qty: 1</p>
                </div>
              </div>
              <Separator className="my-4" />
              <div className="grid grid-cols-2 gap-2">
                <p className="text-muted-foreground">Total</p>
                <p className="text-right font-medium">$99.99</p>
              </div>
            </div>
            <div className="bg-background rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Apply Coupon</h2>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="coupon">Coupon Code</Label>
                  <Input
                    id="coupon"
                    type="text"
                    placeholder="Enter coupon code"
                  />
                </div>
                <Button variant="outline" className="justify-start gap-2">
                  Apply Coupon
                </Button>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">
              Shipping &amp; Billing
            </h2>
            <div className="bg-background rounded-lg shadow-md p-6">
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-muted-foreground text-sm">
                      +1 (555) 555-5555
                    </div>
                  </div>
                  <Button variant="outline" size="icon">
                    <PencilIcon className="h-4 w-4" />
                    <span className="sr-only">Edit phone</span>
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-muted-foreground text-sm">
                      john@example.com
                    </div>
                  </div>
                  <Button variant="outline" size="icon">
                    <PencilIcon className="h-4 w-4" />
                    <span className="sr-only">Edit email</span>
                  </Button>
                </div>
                <Drawer>
                  <DrawerTrigger>
                    <Button type="submit" className="w-full">
                      Place Order
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent className=" md:flex justify-center items-center">
                    <Card className="m-16 md:w-[25%]">
                      <CardHeader>
                        <CardTitle>Payment</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-center">
                          <Image
                            src="/placeholder.svg"
                            alt="Payment QR Code"
                            width={200}
                            height={200}
                            className="rounded-md"
                          />
                        </div>
                        <div className="grid gap-2 mt-4">
                          <Label htmlFor="payment-screenshot">
                            Upload Payment Screenshot
                          </Label>
                          <Input id="payment-screenshot" type="file" />
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Link
                          className="w-full"
                          href="/checkout/payment-success"
                        >
                          <Button>Confirm Payment</Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  </DrawerContent>
                </Drawer>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-muted-foreground text-muted py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <p className="text-sm">
            &copy; 2023 Acme Store. All rights reserved.
          </p>
          <nav className="flex items-center gap-4">
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

function MountainIcon(props: any) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function PencilIcon(props: any) {
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
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
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
