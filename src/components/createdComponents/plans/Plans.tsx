import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const cards = [
  {
    title: "Basic",
    description: "For small teams and individuals",
    price: "₹249",
    billingCycle: "/month",
    features: ["5 users", "512 GB storage", "Basic features"],
    buttonText: "Get Started",
  },
  {
    title: "Pro",
    description: "For growing teams",
    price: "₹2399",
    billingCycle: "/year",
    features: ["10 users", "512 GB storage", "Advanced features"],
    buttonText: "Get Started",
  },
  {
    title: "Premium",
    description: "For large teams and enterprises",
    price: "₹449",
    billingCycle: "/month",
    features: ["Unlimited users", "1 TB storage", "All features"],
    buttonText: "Get Started",
  },
  {
    title: "Enterprise",
    description: "For enterprises",
    price: "₹4299",
    billingCycle: "/year",
    features: ["Unlimited users", "1 TB storage", "All enterprise features"],
    buttonText: "Get Started",
  },
];

const CardComponent = ({ data }: any) => {
  return (
    <Card className="bg-card text-card-foreground h-full">
      <CardHeader className="border-b">
        <CardTitle className="text-2xl font-bold">{data.title}</CardTitle>
        <CardDescription>{data.description}</CardDescription>
      </CardHeader>
      <CardContent className="py-6 space-y-6 flex-1">
        <div className="flex items-baseline justify-center gap-2">
          <span className="text-4xl font-bold">{data.price}</span>
          <span className="text-muted-foreground">{data.billingCycle}</span>
        </div>
        <ul className="space-y-4 text-muted-foreground flex-1">
          {data.features.map((feature: any, index: any) => (
            <li key={index} className="flex items-center gap-2">
              <CheckIcon className="h-5 w-5 fill-primary" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="w-full flex justify-center gap-2">
        <Link
          className="w-full flex justify-center gap-2"
          href="/customer-info"
        >
          <Button className="flex-1">{data.buttonText}</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

// Rendering all cards
export default function Plans() {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 ${
        cards.length > 2 ? "lg:grid-cols-4" : ""
      } gap-4`}
    >
      {cards.map((card, index) => (
        <CardComponent key={index} data={card} />
      ))}
    </div>
  );
}

function CheckIcon(props: any) {
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
      <path d="M20 6 9 17l-5-5" />
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
