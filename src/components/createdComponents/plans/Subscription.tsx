"use client";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Subscription() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto p-4 md:p-6">
      <Card className="bg-background rounded-lg shadow-lg">
        <CardHeader className="bg-primary text-primary-foreground p-6 rounded-t-lg">
          <h2 className="text-2xl font-bold">Monthly Subscription</h2>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          <p className="text-muted-foreground">
            Get access to all our features with a monthly subscription.
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold">$19</span>
            <span className="text-muted-foreground">/month</span>
          </div>
          <Button className="w-full">Subscribe Monthly</Button>
        </CardContent>
      </Card>
      <Card className="bg-background rounded-lg shadow-lg">
        <CardHeader className="bg-primary text-primary-foreground p-6 rounded-t-lg">
          <h2 className="text-2xl font-bold">Annual Subscription</h2>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          <p className="text-muted-foreground">
            Save 20% with an annual subscription.
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold">$19</span>
            <span className="text-muted-foreground">/year</span>
          </div>
          <Button className="w-full">Subscribe Annually</Button>
        </CardContent>
      </Card>
      {/* <Card className="bg-background rounded-lg shadow-lg">
        <CardHeader className="bg-secondary text-secondary-foreground p-6 rounded-t-lg">
          <h2 className="text-2xl font-bold">Annual Subscription</h2>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          <p className="text-muted-foreground">
            Save 20% with an annual subscription.
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold">$199</span>
            <span className="text-muted-foreground">/year</span>
          </div>
          <Button variant="secondary" className="w-full">
            Subscribe Annually
          </Button>
        </CardContent>
      </Card> */}
    </div>
  );
}
