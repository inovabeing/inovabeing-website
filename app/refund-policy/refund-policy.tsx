import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Clock, Shield, Mail, Phone, CheckCircle, AlertCircle, RefreshCw } from "lucide-react"

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900">
      {/* Header */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-purple-600/20 text-purple-200 border-purple-400/30">Policy Information</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Refund & Cancellation Policy</h1>
          <p className="text-purple-200 text-lg max-w-3xl mx-auto leading-relaxed">
            At InovaBeing, we're committed to delivering exceptional AI solutions. Our refund policy reflects our
            dedication to customer satisfaction and transparent business practices.
          </p>
        </div>

        {/* Policy Overview Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white/10 backdrop-blur-sm border-purple-400/30">
            <CardHeader className="text-center">
              <Clock className="w-8 h-8 text-purple-300 mx-auto mb-2" />
              <CardTitle className="text-white">Request Timeline</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-purple-300 mb-2">2-3 Days</div>
              <p className="text-purple-200 text-sm">Maximum time to submit cancellation or refund requests</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-purple-400/30">
            <CardHeader className="text-center">
              <RefreshCw className="w-8 h-8 text-purple-300 mx-auto mb-2" />
              <CardTitle className="text-white">Processing Time</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-purple-300 mb-2">3-4 Days</div>
              <p className="text-purple-200 text-sm">Standard refund processing duration</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-purple-400/30">
            <CardHeader className="text-center">
              <Shield className="w-8 h-8 text-purple-300 mx-auto mb-2" />
              <CardTitle className="text-white">Delivery Window</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-purple-300 mb-2">0-7 Days</div>
              <p className="text-purple-200 text-sm">Service delivery and implementation timeframe</p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Policy */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Refund Conditions */}
          <Card className="bg-white/10 backdrop-blur-sm border-purple-400/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                Refund Eligibility
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-purple-200">
                <h4 className="font-semibold text-white mb-2">You are eligible for a full refund if:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    Request submitted within 2-3 days of service initiation
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    AI solution fails to meet agreed specifications
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    Technical issues prevent service delivery
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    Service cancellation before development begins
                  </li>
                </ul>
              </div>

              <Separator className="bg-purple-400/30" />

              <div className="text-purple-200">
                <h4 className="font-semibold text-white mb-2">Partial Refund Conditions:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                    50% refund if development is 25% complete
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                    25% refund if development is 50% complete
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Process & Contact */}
          <Card className="bg-white/10 backdrop-blur-sm border-purple-400/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <RefreshCw className="w-5 h-5 text-purple-300" />
                Refund Process
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-purple-200">
                <h4 className="font-semibold text-white mb-2">How to Request a Refund:</h4>
                <ol className="space-y-2 text-sm list-decimal list-inside">
                  <li>Contact our support team within the eligible timeframe</li>
                  <li>Provide your project details and reason for refund</li>
                  <li>Our team will review your request within 24 hours</li>
                  <li>Approved refunds are processed within 3-4 business days</li>
                  <li>Refund will be credited to your original payment method</li>
                </ol>
              </div>

              <Separator className="bg-purple-400/30" />

              <div className="space-y-3">
                <h4 className="font-semibold text-white">Contact Information</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-purple-200">
                    <Mail className="w-4 h-4 text-purple-300" />
                    <span className="text-sm">info@inovabeing.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-purple-200">
                    <Phone className="w-4 h-4 text-purple-300" />
                    <span className="text-sm">+91 9502291081</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Terms */}
        <Card className="bg-white/10 backdrop-blur-sm border-purple-400/30 mt-8">
          <CardHeader>
            <CardTitle className="text-white">Important Terms & Conditions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-purple-200 text-sm">
            <div>
              <h4 className="font-semibold text-white mb-2">Non-Refundable Services:</h4>
              <ul className="space-y-1 list-disc list-inside ml-4">
                <li>Consultation fees and initial assessment costs</li>
                <li>Custom AI models that have been delivered and accepted</li>
                <li>Third-party licensing fees and external service costs</li>
                <li>Services completed beyond the 7-day delivery window</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-2">Cancellation Policy:</h4>
              <p>
                Projects can be cancelled at any time with appropriate notice. Cancellation fees may apply based on the
                stage of development and resources already allocated to your project.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-2">Dispute Resolution:</h4>
              <p>
                Any disputes regarding refunds will be handled through direct communication with our support team. We
                are committed to finding fair and reasonable solutions for all parties involved.
              </p>
            </div>

            <div className="pt-4 border-t border-purple-400/30">
              <p className="text-xs text-purple-300">
                This policy is effective as of the date of service agreement and may be updated periodically. Clients
                will be notified of any significant changes to these terms.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-white mb-4">Questions About Our Refund Policy?</h3>
          <p className="text-purple-200 mb-6 max-w-2xl mx-auto">
            Our support team is here to help. Contact us for clarification on any aspect of our refund and cancellation
            policy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@inovabeing.com"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Email Support
            </a>
            <a
              href="tel:+919502291081"
              className="bg-white/10 backdrop-blur-sm border border-purple-400/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
