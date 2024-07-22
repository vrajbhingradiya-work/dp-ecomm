import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CustomerInfoForm() {
  return (
    <Card className="w-full max-w-md mx-auto mt-10 p-4">
      <CardHeader className="px-4">
        <CardTitle className="pr-8">
          Where do you want the Premium at?
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email Id:</Label>
          <Input id="email" placeholder="Enter your email" type="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone No:</Label>
          <Input id="phone" placeholder="Enter your contact info" type="tel" />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Terms of use!</Label>
        </div>
      </CardContent>
      <CardFooter>
        <Link href="/checkout" className="w-full">
          <Button className="w-full">Proceed</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
