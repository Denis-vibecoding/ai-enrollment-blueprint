import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { CheckCircle, Shield, Star, ExternalLink, AlertCircle } from "lucide-react";
import EnrollmentProgress from "@/components/EnrollmentProgress";
import homedesignsLogo from "@/assets/homedesigns-logo.png";
import guaranteeBadge from "@/assets/guarantee-badge-modern.png";
import { useState, useEffect } from "react";
const CheckoutPage = () => {
  const [enrolled, setEnrolled] = useState(0);
  const total = 40;
  const remaining = total - enrolled;
  const [showSeatsFilled, setShowSeatsFilled] = useState(false);

  // Check if seats are filled
  useEffect(() => {
    if (enrolled >= total) {
      setShowSeatsFilled(true);
    }
  }, [enrolled, total]);

  const handleFastSpringCheckout = (paymentType: 'full' | 'plan') => {
    // FastSpring popup integration
    // Replace these URLs with your actual FastSpring product URLs
    const productUrls = {
      full: 'https://homedesigns.onfastspring.com/ai-design-academy-full',
      plan: 'https://homedesigns.onfastspring.com/ai-design-academy-plan'
    };

    // Open FastSpring checkout in a popup
    const popup = window.open(productUrls[paymentType], 'FastSpringCheckout', 'width=800,height=600,scrollbars=yes,resizable=yes');

    // Optional: Listen for popup completion
    const checkClosed = setInterval(() => {
      if (popup?.closed) {
        clearInterval(checkClosed);
        // Handle post-checkout actions if needed
        console.log('Checkout popup closed');
      }
    }, 1000);
  };
  return <div className="min-h-screen bg-white">
      {/* Scarcity Banner */}
      <div className="bg-muted text-muted-foreground text-center py-3 px-4 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <span className="font-semibold">⚠️ NOTICE: Enrollment is strictly limited to the first 40 Academy Students - This page will expire once 40 students enroll</span>
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
        <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
        
        <div className="max-w-4xl mx-auto relative z-10 space-y-8">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            Yes! You're In. Complete Your Enrollment Below.
          </h1>
          <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto">You're one step away from getting the AI-powered system, the expert coaching, and the tools to land your first high-ticket design client.</p>
          
          <EnrollmentProgress enrolled={enrolled} total={total} onEnrollmentChange={setEnrolled} />
          
          <Button 
            variant="premium" 
            size="lg" 
            className="text-xl py-6 px-12 bg-white text-primary hover:bg-white/90 shadow-elegant pulse hover:scale-105 transition-transform duration-200 font-bold"
            onClick={() => {
              const pricingSection = document.querySelector('[data-pricing-section]');
              pricingSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          >
            🚀 CLAIM YOUR SPOT NOW - ONLY {remaining} LEFT!
          </Button>
          
          {/* Money Back Guarantee */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border border-white/20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-white" />
              <h3 className="text-2xl font-bold text-white">30-Day Results Guarantee</h3>
            </div>
            <p className="text-white/90 text-lg text-center leading-relaxed">
              Follow the program, attend the coaching calls, and implement what you learn. If you don't land your first paying client within 30 days, we'll give you a complete refund. No questions asked.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-16 space-y-16">
        {/* Payment Options */}
        <section className="text-center space-y-12" data-pricing-section>
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
                  <div className="text-2xl text-muted-foreground line-through">$1,497</div>
                  <div className="text-5xl font-bold text-primary">$997</div>
                  <div className="text-success text-lg font-semibold">(Save $500)</div>
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
                <Button variant="premium" size="lg" className="w-full text-lg py-4" onClick={() => handleFastSpringCheckout('full')}>
                  ENROLL NOW
                  <ExternalLink className="w-5 h-5 ml-2" />
                </Button>
                <div className="flex justify-center mt-6">
                  <img src="/lovable-uploads/52cd8a76-bb08-4e62-973f-e3be3d7a8175.png" alt="FastSpring Secure Checkout" className="max-w-full h-auto" style={{width: "320px"}} />
                </div>
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
                <Button variant="checkout" size="lg" className="w-full text-lg py-4" onClick={() => handleFastSpringCheckout('plan')}>
                  ENROLL NOW
                  <ExternalLink className="w-5 h-5 ml-2" />
                </Button>
                <div className="flex justify-center mt-6">
                  <img src="/lovable-uploads/52cd8a76-bb08-4e62-973f-e3be3d7a8175.png" alt="FastSpring Secure Checkout" className="max-w-full h-auto" style={{width: "320px"}} />
                </div>
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
                {[{
                title: "#1 The Engine: HomeDesigns.AI Complete Suite – Lifetime License",
                subtitle: "Complete software suite with Lifetime PRO License plus all upgrades: Premium+, Business+, and Unlimited Add-ons. All future subscription fees waived forever.",
                value: "$2,997"
              }, {
                title: "#2 The Sales Training: 30-Day Sales Coaching with Rahim",
                subtitle: "30-day intensive with weekly live group coaching sessions focused on client acquisition, pricing, and proposals. Includes private Academy group access and recordings.",
                value: "$4,997"
              }, {
                title: "#3 The Software Training: 30-Day Software Coaching with Sasha",
                subtitle: "30-day technical training with weekly workshops led by Sasha, the HomeDesigns.AI Product Lead. Master tools, workflows, and advanced features.",
                value: "$1,997"
              }, {
                title: "#4 The AI Client Acquisition Engine",
                subtitle: "Rahim's proprietary automated system using multiple AI tools to find, qualify, and contact high-value clients for you.",
                value: "$2,497"
              }].map((item, index) => <div key={index} className="flex items-start justify-between p-6 bg-gradient-subtle rounded-xl border border-premium/10">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-success mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-bold text-primary text-lg">{item.title}</div>
                        <div className="text-muted-foreground">{item.subtitle}</div>
                      </div>
                    </div>
                    <div className="font-bold text-premium text-lg">{item.value}</div>
                  </div>)}
                
                {/* Special formatting for #5 */}
                <div className="flex items-start justify-between p-6 bg-gradient-subtle rounded-xl border border-premium/10">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-success mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-primary text-lg">#5 The Accelerators: Complete Vault of "Done-For-You" Assets</div>
                      <div className="text-muted-foreground mb-3">Complete vault of assets to ensure you get results fast:</div>
                      <div className="space-y-2 pl-4">
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">• Client Magnet Template Vault</span>
                          <span className="text-sm text-premium font-medium">($1,497)</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">• AI Redesign Prompt Library</span>
                          <span className="text-sm text-premium font-medium">($897)</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">• The Instant Expert Toolkit</span>
                          <span className="text-sm text-premium font-medium">($497)</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">• The Launch-Week Sprint Board</span>
                          <span className="text-sm text-premium font-medium">($397)</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">• Lifetime Updates</span>
                          <span className="text-sm text-premium font-medium">($467)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="font-bold text-premium text-lg">$3,755</div>
                </div>
              </div>
              
              <div className="border-t border-border pt-6">
                <div className="flex justify-between items-center text-xl">
                  <span className="font-bold text-primary">Total Value:</span>
                  <span className="text-2xl font-bold text-premium">$16,248</span>
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
                <img src={guaranteeBadge} alt="30-Day Results Guarantee" className="w-40 h-40 object-contain" />
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
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-premium text-premium" />)}
                  </div>
                  <p className="text-foreground mb-6 text-lg italic leading-relaxed">
                    Within 2 weeks of joining the academy, I landed my first $3,000 client. The AI tools 
                    and sales training are incredible - this system actually works!
                  </p>
                  <div className="font-bold text-primary text-lg">- Sarah M., Interior Designer</div>
                </div>
                
                <div className="bg-gradient-subtle p-8 rounded-xl">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-premium text-premium" />)}
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

        {/* FAQ Section */}
        <section>
          <Card className="shadow-card bg-white">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-primary mb-4">Frequently Asked Questions</CardTitle>
              <p className="text-muted-foreground">Get answers to common questions about the AI Design Academy</p>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="item-1" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold text-primary hover:no-underline">
                    What if I'm already a paying HomeDesigns.AI member?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                    Existing HomeDesigns.AI members receive special treatment when joining the Academy. Upon enrollment, our team will automatically cancel all existing subscriptions and calculate the total value of previous upgrades purchased. This amount will be refunded in the form of Magic Redesign Credits as a thank you for being an early supporter of our platform.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold text-primary hover:no-underline">
                    What if I have no technical experience?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                    No technical skills are required. The HomeDesigns.AI suite was specifically designed for beginners, with AI handling all complex technical processes. Additionally, Sasha, the official Product Lead from HomeDesigns.AI, provides 30 days of dedicated technical coaching. She personally guides students through every feature step-by-step, ensuring complete confidence with the software. The program is structured to ensure no one gets left behind.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold text-primary hover:no-underline">
                    How much time commitment is required weekly?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                    To achieve optimal results within the first 30 days, we recommend dedicating 5-7 hours per week, which breaks down to approximately one hour daily. This time covers attendance at live coaching calls and implementation of the Client Acquisition Engine for daily outreach. The structured system and provided templates ensure this time is spent on high-value activities that directly contribute to client acquisition.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold text-primary hover:no-underline">
                    Is this a good time to start with current economic conditions?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                    Economic uncertainty actually creates the ideal market conditions for AI design services. When markets slow down, real estate professionals and property developers require competitive advantages to make their listings stand out and sell faster. AI design services become an essential, cost-effective marketing tool rather than a luxury. In challenging markets, properties need every possible edge to succeed.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold text-primary hover:no-underline">
                    Why are Magic Redesign credits provided if the offer includes 'Unlimited' access?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                    The 'Unlimited' designation applies to the core suite of 20+ AI tools within HomeDesigns.AI. However, Magic Redesign is a new conversational AI tool with significantly higher operational costs that requires a separate credit system. As a special enrollment bonus, every Academy member receives a 1,000 Credit Starter Pack for Magic Redesign at no additional cost. This provides sufficient credits to service your first 50+ clients, giving you a substantial head start.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold text-primary hover:no-underline">
                    What happens after the 30-day program concludes?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                    Upon completion of the intensive 30-day program, you retain lifetime access to all software, templates, and resources. Access to the private Academy community continues indefinitely, providing ongoing peer support. While daily coaching calls conclude after 30 days, all recordings and materials remain accessible for future reference. By program completion, you'll have established the systems and confidence necessary for independent business growth.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold text-primary hover:no-underline">
                    What if I don't achieve results within 30 days?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                    The Academy is backed by a comprehensive results guarantee. Students who join the program, attend coaching calls, implement the strategies, and still don't secure their first paying client within 30 days are eligible for a complete refund with no questions asked. This guarantee reflects our confidence in the proven system that has already delivered results for hundreds of successful students.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </section>

        {/* Final CTA */}
        <section className="text-center space-y-8">
          <div className="bg-gradient-hero rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Design Business?</h3>
            <p className="text-xl mb-8 opacity-90">Join the first 40 academy students today</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <Button variant="premium" size="lg" className="text-lg py-4 px-8 bg-white text-primary hover:bg-white/90" onClick={() => handleFastSpringCheckout('full')}>
                Pay in Full - $997
              </Button>
              <Button variant="secondary" size="lg" className="text-lg py-4 px-8 bg-white/20 border-2 border-white text-white hover:bg-white/30 backdrop-blur-sm" onClick={() => handleFastSpringCheckout('plan')}>
                Payment Plan - $397 x 3
              </Button>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Shield className="w-5 h-5" />
            <span>Secured by FastSpring • 30-Day Money-Back Guarantee</span>
          </div>
        </section>

        {/* Seats Filled Modal */}
        <Dialog open={showSeatsFilled} onOpenChange={setShowSeatsFilled}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2 text-destructive">
                <AlertCircle className="w-5 h-5" />
                All Seats Have Been Filled
              </DialogTitle>
              <DialogDescription className="text-center space-y-4">
                <p>
                  We're sorry, but all 40 academy spots have been filled and enrollment is now closed.
                </p>
                <p>
                  For assistance or to be added to our waitlist for the next cohort, please contact our support team:
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="font-semibold text-foreground">
                    📧 help@homedesigns.ai
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Our team will respond within 24 hours and help you with next steps.
                </p>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>;
};
export default CheckoutPage;