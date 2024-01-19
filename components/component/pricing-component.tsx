import Link from "next/link"
import HeaderComponent from "../ui/header-component"
import FooterComponent from "../ui/footer-component"

export function PricingComponent() {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <main className="flex-1">
        <section className="w-full min-h-screen py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Our Pricing Plans
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Choose the plan that fits your needs. Upgrade, downgrade, or cancel anytime.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full min-h-screen py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Basic Plan</h3>
                  <p className="text-gray-500 dark:text-gray-400">For individuals who are just getting started.</p>
                  <p className="text-3xl font-bold">$9.99/mo</p>
                  <ul className="list-disc list-inside text-gray-500 dark:text-gray-400">
                    <li>Access to all basic features</li>
                    <li>Up to 1000 followers</li>
                    <li>Basic support</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Pro Plan</h3>
                  <p className="text-gray-500 dark:text-gray-400">For influencers who want to grow their audience.</p>
                  <p className="text-3xl font-bold">$29.99/mo</p>
                  <ul className="list-disc list-inside text-gray-500 dark:text-gray-400">
                    <li>Access to all features</li>
                    <li>Up to 10,000 followers</li>
                    <li>Priority support</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Enterprise Plan</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    For businesses and influencers with a large audience.
                  </p>
                  <p className="text-3xl font-bold">Contact Us</p>
                  <ul className="list-disc list-inside text-gray-500 dark:text-gray-400">
                    <li>Customized solutions</li>
                    <li>Unlimited followers</li>
                    <li>24/7 support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}