import Link from "next/link"

export function PricingComponent() {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MicIcon className="h-6 w-6" />
          <span className="sr-only">Influencer Platform</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
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
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Influencer Platform. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Social Media
          </Link>
        </nav>
      </footer>
    </div>
  )
}


function MicIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2a3 3 0 0-3 3v7a3 6 0V5a3 0-3-3Z" />
      <path d="M19 10v2a7 7 0 1-14 0v-2" />
      <line x1="12" x2="12" y1="19" y2="22" />
    </svg>
  )
}
