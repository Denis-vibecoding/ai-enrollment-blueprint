import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, Star, ExternalLink } from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";
import homedesignsLogo from "@/assets/homedesigns-logo.png";
import guaranteeSeal from "@/assets/guarantee-seal.jpg";

const CheckoutPage = () => {
  const handleFastSpringCheckout = (paymentType: 'full' | 'plan') => {
    // FastSpring popup integration
    // Replace these URLs with your actual FastSpring product URLs
    const productUrls = {
      full: 'https://homedesigns.onfastspring.com/ai-design-academy-full',
      plan: 'https://homedesigns.onfastspring.com/ai-design-academy-plan'
    };

    // Open FastSpring checkout in a popup
    const popup = window.open(
      productUrls[paymentType],
      'FastSpringCheckout',
      'width=800,height=600,scrollbars=yes,resizable=yes'
    );

    // Optional: Listen for popup completion
    const checkClosed = setInterval(() => {
      if (popup?.closed) {
        clearInterval(checkClosed);
        // Handle post-checkout actions if needed
        console.log('Checkout popup closed');
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Scarcity Banner */}
      <div className="bg-gradient-subtle border-b border-border text-center py-4 px-4">
        <div className="max-w-4xl mx-auto">
          <span className="font-semibold text-primary">⚠️ NOTICE: Enrollment is strictly limited to the first 25 Founding Members - This page will expire once 25 students enroll</span>
        </div>
      </div>

      {/* Header with Logo */}
      <header className="bg-white py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-3">
            <span className="text-muted-foreground text-sm">Powered by:</span>
            <img src="/lovable-uploads/362990bd-de27-4cca-9aaf-4b66059df954.png" alt="HomeDesigns.AI" className="h-8" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 px-4 text-center text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        
        <div className="max-w-4xl mx-auto relative z-10 space-y-8">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            Yes! You're In. Complete Your Enrollment Below.
          </h1>
          <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto">
            You're just 60 seconds away from getting the proven system to generate high-ticket clients on demand.
          </p>
          
          <CountdownTimer />
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 max-w-md mx-auto border border-white/20">
            <div className="flex items-center justify-center gap-2 text-sm">
              <img src="https://d1f8f9xcsvx3ha.cloudfront.net/sbl/0x171DA4/assets/checkout/fastspring-logo-white.svg" alt="FastSpring" className="h-4" />
              <span className="text-white/80">Secure Checkout</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-16 space-y-16">
        {/* Payment Options */}
        <section className="text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-primary">Choose Your Payment Option</h2>
            <p className="text-muted-foreground text-lg">Select the option that works best for you</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Pay in Full - Highlighted */}
            <Card className="relative border-2 border-premium shadow-premium transform hover:scale-105 transition-all duration-300 bg-gradient-subtle">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-premium text-premium-foreground px-6 py-2 text-sm font-bold shadow-lg">
                  BEST VALUE
                </Badge>
              </div>
              <CardHeader className="text-center pt-8 pb-6">
                <CardTitle className="text-2xl text-primary mb-4">One-Time Payment</CardTitle>
                <div className="space-y-2">
                  <div className="text-5xl font-bold text-primary">$997</div>
                  <div className="text-success text-lg font-semibold">(Save $194)</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-premium-muted p-6 rounded-xl border border-premium/20">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-success mt-1 flex-shrink-0" />
                    <div className="text-left">
                      <div className="font-bold text-premium text-lg mb-1">PLUS: Exclusive Pay-in-Full Bonus:</div>
                      <div className="text-primary">The $5k Retainer Roadmap Mini-Course</div>
                    </div>
                  </div>
                </div>
                <Button 
                  variant="premium" 
                  size="lg" 
                  className="w-full text-lg py-4"
                  onClick={() => handleFastSpringCheckout('full')}
                >
                  ENROLL NOW
                  <ExternalLink className="w-5 h-5 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Payment Plan */}
            <Card className="shadow-card hover:shadow-premium transition-all duration-300 bg-white">
              <CardHeader className="text-center pt-8 pb-6">
                <CardTitle className="text-2xl text-primary mb-4">Flexible Payment Plan</CardTitle>
                <div className="text-4xl font-bold text-primary">3 Payments of $397</div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="h-20 flex items-center justify-center">
                  <p className="text-muted-foreground">Spread the cost over 3 months</p>
                </div>
                <Button 
                  variant="checkout" 
                  size="lg" 
                  className="w-full text-lg py-4"
                  onClick={() => handleFastSpringCheckout('plan')}
                >
                  ENROLL NOW
                  <ExternalLink className="w-5 h-5 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Order Summary */}
        <section>
          <Card className="shadow-card bg-white">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-primary mb-4">Here's a Reminder of Everything You Get Today:</CardTitle>
              <p className="text-muted-foreground">Your complete AI Design Income Academy bundle</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4">
                {[
                  {
                    title: "The Engine: The Complete HomeDesigns.AI Suite",
                    subtitle: "(Lifetime PRO License + All Add-ons)",
                    value: "$2,988"
                  },
                  {
                    title: "The Sales Training: 30-Day Sales Coaching with Rahim",
                    subtitle: "Weekly group coaching calls + private community access",
                    value: "$1,497"
                  },
                  {
                    title: "The Software Training: 30-Day Software Coaching with Sasha",
                    subtitle: "Master every feature and advanced technique",
                    value: "$997"
                  },
                  {
                    title: "The AI Client Acquisition Engine",
                    subtitle: "Rahim's proprietary playbook for building an automated client-getting system",
                    value: "$1,497"
                  },
                  {
                    title: "The Accelerators: Your complete vault of Done-For-You assets",
                    subtitle: "Templates, prompts, contracts, and toolkits",
                    value: "$997"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start justify-between p-6 bg-gradient-subtle rounded-xl border border-premium/10">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-success mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-bold text-primary text-lg">{item.title}</div>
                        <div className="text-muted-foreground">{item.subtitle}</div>
                      </div>
                    </div>
                    <div className="font-bold text-premium text-lg">{item.value}</div>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-border pt-6">
                <div className="flex justify-between items-center text-xl">
                  <span className="font-bold text-primary">Total Value:</span>
                  <span className="text-2xl font-bold text-premium">$7,976</span>
                </div>
                <div className="flex justify-between items-center text-2xl mt-2">
                  <span className="font-bold text-primary">Your Investment Today:</span>
                  <span className="text-3xl font-bold text-success">Only $997</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Guarantee Section */}
        <section>
          <Card className="shadow-card bg-gradient-subtle border border-premium/20">
            <CardContent className="flex flex-col lg:flex-row items-center gap-8 p-12">
              <div className="flex-shrink-0">
                <img 
                  src={guaranteeSeal} 
                  alt="30-Day Results Guarantee" 
                  className="w-40 h-40 object-contain"
                />
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-bold text-primary mb-4">
                  Your 30-Day First Client Results Guarantee
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  If you join the Academy, do the work, attend the coaching calls, and still don't land 
                  your first paying client within 30 days, we'll give you a full refund. No questions asked.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Social Proof */}
        <section>
          <Card className="shadow-card bg-white">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-primary mb-4">What Our Students Say</CardTitle>
              <p className="text-muted-foreground">Real results from real students</p>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-subtle p-8 rounded-xl">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-premium text-premium" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 text-lg italic leading-relaxed">
                    Within 2 weeks of joining the academy, I landed my first $3,000 client. The AI tools 
                    and sales training are incredible - this system actually works!
                  </p>
                  <div className="font-bold text-primary text-lg">- Sarah M., Interior Designer</div>
                </div>
                
                <div className="bg-gradient-subtle p-8 rounded-xl">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-premium text-premium" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 text-lg italic leading-relaxed">
                    The HomeDesigns.AI suite is a game-changer. I've generated over $15k in revenue 
                    in my first month using Rahim's client acquisition system.
                  </p>
                  <div className="font-bold text-primary text-lg">- Michael R., Architecture Firm Owner</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Final CTA */}
        <section className="text-center space-y-8">
          <div className="bg-gradient-hero rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Design Business?</h3>
            <p className="text-xl mb-8 opacity-90">Join the first 25 founding members today</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <Button 
                variant="premium" 
                size="lg" 
                className="text-lg py-4 px-8 bg-white text-primary hover:bg-white/90"
                onClick={() => handleFastSpringCheckout('full')}
              >
                Pay in Full - $997
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg py-4 px-8 border-white text-white hover:bg-white/10"
                onClick={() => handleFastSpringCheckout('plan')}
              >
                Payment Plan - $397 x 3
              </Button>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Shield className="w-5 h-5" />
            <span>Secured by FastSpring • 30-Day Money-Back Guarantee</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CheckoutPage;