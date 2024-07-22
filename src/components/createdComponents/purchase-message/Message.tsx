import { Card } from "@/components/ui/card";
import Link from "next/link";

export function Component({ data }: any) {
  return (
    <Card className="w-full max-w-md p-6 grid gap-6">
      <div className="flex flex-col items-center gap-4 text-center">
        <PartyPopperIcon className="w-12 h-12 text-primary" />
        <h3 className="text-2xl font-bold">{data.heading}</h3>
        <p className="text-muted-foreground">{data.subheading}</p>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          {data.buttons.map((button: any, index: any) => (
            <Link
              key={index}
              href={button.href}
              className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring ${
                button.primary
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
              }`}
              prefetch={false}
            >
              {button.text}
            </Link>
          ))}
        </div>
      </div>
    </Card>
  );
}

function PartyPopperIcon(props: any) {
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
      <path d="M5.8 11.3 2 22l10.7-3.79" />
      <path d="M4 3h.01" />
      <path d="M22 8h.01" />
      <path d="M15 2h.01" />
      <path d="M22 20h.01" />
      <path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10" />
      <path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17" />
      <path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7" />
      <path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z" />
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

// Usage example:
const data = {
  heading: "Yay! You purchased a new service",
  subheading:
    "GIVE US 15 -30 minutes to process your order. If you still face any issues, reach us here!",
  buttons: [
    {
      text: "Shop more",
      href: "/",
      primary: true,
    },
    {
      text: "Refer and Earn!",
      href: "/refer-and-earn",
      primary: false,
    },
  ],
};

function Message() {
  return <Component data={data} />;
}

export default Message;
