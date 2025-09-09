import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, Shield, Star, CreditCard, Lock } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";
import guaranteeSeal from "@/assets/guarantee-seal.jpg";

const CheckoutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Scarcity Banner */}
      <div className="bg-warning text-warning-foreground py-3 px-4 text-center font-semibold">
        <div className="max-w-4xl mx-auto">
          NOTICE: Enrollment is strictly limited to the first 25 Founding Members
        </div>
      </div>

      {/* Header Section */}
      <section 
        className="relative py-20 px-4 text-center text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl font-bold mb-6">
            Yes! You're In. Complete Your Enrollment Below.
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            You're just 60 seconds away from getting the proven system to generate high-ticket clients on demand.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16 grid lg:grid-cols-3 gap-8">
        {/* Main Content - Payment Options and Order Summary */}
        <div className="lg:col-span-2 space-y-8">
          {/* Payment Options */}
          <section>
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Choose Your Payment Option</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Pay in Full - Highlighted */}
              <Card className="relative border-2 border-premium shadow-premium transform hover:scale-105 transition-all duration-300">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-premium text-premium-foreground px-4 py-1 font-semibold">
                    BEST VALUE
                  </Badge>
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-primary">One-Time Payment</CardTitle>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-premium">$997</div>
                    <div className="text-success font-semibold">(Save $194)</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-premium-muted p-4 rounded-lg border border-premium/20">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-premium">PLUS: Exclusive 'Pay-in-Full' Bonus:</div>
                        <div className="text-sm">'The $5k Retainer Roadmap' Mini-Course</div>
                      </div>
                    </div>
                  </div>
                  <Button variant="premium" size="lg" className="w-full text-lg">
                    ENROLL NOW
                  </Button>
                </CardContent>
              </Card>

              {/* Payment Plan */}
              <Card className="shadow-card hover:shadow-premium transition-all duration-300">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-primary">Flexible Payment Plan</CardTitle>
                  <div className="text-3xl font-bold text-primary">3 Payments of $397</div>
                </CardHeader>
                <CardContent>
                  <Button variant="checkout" size="lg" className="w-full text-lg">
                    ENROLL NOW
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Order Summary */}
          <section>
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Here's a Reminder of Everything You Get Today:</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    title: "The Engine: The Complete HomeDesigns.AI Suite",
                    subtitle: "(Lifetime PRO License + All Add-ons)"
                  },
                  {
                    title: "The Sales Training: 30-Day Sales Coaching with Rahim",
                    subtitle: ""
                  },
                  {
                    title: "The Software Training: 30-Day Software Coaching with Sasha",
                    subtitle: ""
                  },
                  {
                    title: "The AI Client Acquisition Engine",
                    subtitle: "Rahim's proprietary playbook for building an automated client-getting system"
                  },
                  {
                    title: "The Accelerators: Your complete vault of 'Done-For-You' assets",
                    subtitle: "including templates, prompts, and toolkits"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-success-muted rounded-lg">
                    <CheckCircle className="w-6 h-6 text-success mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-primary">{item.title}</div>
                      {item.subtitle && (
                        <div className="text-muted-foreground text-sm">{item.subtitle}</div>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </section>

          {/* Guarantee Section */}
          <section>
            <Card className="shadow-card bg-gradient-subtle">
              <CardContent className="flex flex-col md:flex-row items-center gap-6 p-8">
                <div className="flex-shrink-0">
                  <img 
                    src={guaranteeSeal} 
                    alt="30-Day Results Guarantee" 
                    className="w-32 h-32 object-contain"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    Your 30-Day "First Client" Results Guarantee
                  </h3>
                  <p className="text-muted-foreground">
                    If you join the Academy, do the work, attend the coaching calls, and still don't land 
                    your first paying client within 30 days, we'll give you a full refund.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Social Proof */}
          <section>
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary text-center">What Our Students Say</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-muted p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-premium text-premium" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 italic">
                    "Within 2 weeks of joining the academy, I landed my first $3,000 client. The AI tools 
                    and sales training are incredible - this system actually works!"
                  </p>
                  <div className="font-semibold text-primary">- Sarah M., Interior Designer</div>
                </div>
                
                <div className="bg-muted p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-premium text-premium" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 italic">
                    "The HomeDesigns.AI suite is a game-changer. I've generated over $15k in revenue 
                    in my first month using Rahim's client acquisition system."
                  </p>
                  <div className="font-semibold text-primary">- Michael R., Architecture Firm Owner</div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Sidebar - Checkout Form */}
        <div className="lg:col-span-1">
          <div className="sticky top-8">
            <Card className="shadow-premium">
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <Lock className="w-5 h-5" />
                  Secure Checkout
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input id="fullName" placeholder="Enter your full name" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <div className="relative">
                    <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                    <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM/YY" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvc">CVC</Label>
                    <Input id="cvc" placeholder="123" />
                  </div>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-semibold">Total:</span>
                    <span className="text-2xl font-bold text-premium">$997</span>
                  </div>
                  
                  <Button variant="premium" size="lg" className="w-full text-lg mb-4">
                    Complete Enrollment
                  </Button>
                  
                  <div className="text-center text-xs text-muted-foreground">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Shield className="w-4 h-4" />
                      <span>Secured by 256-bit SSL encryption</span>
                    </div>
                    <p>Your payment information is completely secure</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;