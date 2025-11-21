import React from 'react'

const page = () => {
  return (
    <div className="px-6 py-4">
        <div className="border-b border-gray-200 pb-2">
            <h2 className="text-2xl font-semibold">Backend Engineer — Marketplace Applications</h2>
            <p className="text-sm text-gray-600 flex flex-col">
                <span>Trioangle Technologies, Aug 2021 - Dec 2024</span>
            </p>
        </div>

        <div>
            <h6 className="font-semibold">Summary</h6>

            <p className="pl-12">
                worked on consumer marketplace platforms — an Airbnb clone and an Amazon clone. I handled both frontend and backend responsibilities, focusing on payments, booking flows, product search & filters, and real-time chat. My primary back-end stacks were Laravel and Node.js.
            </p>
        </div>

        <div>
            <h6 className="font-semibold">Key Responsibilities</h6>

            <ul className="pl-12 list-disc">
                <li>
                    Implemented payment systems (Stripe, PayPal, and a client’s local gateway) including payment flows, refunds, and Stripe account preferences.
                </li>

                <li>
                    Designed and implemented booking flow calculations and pricing logic for the Airbnb clone.
                </li>

                <li>
                    Built instant messaging between users and hosts to improve booking communications.
                </li>

                <li>
                    Implemented cart, ordering, cancellations, returns, and cancellation policy flows for the Amazon clone.
                </li>

                <li>
                    Built large, optimized search & filtering systems (product filters and room search) and optimized SQL queries for performance.
                </li>

                <li>
                    Worked across frontend and backend to deliver features end-to-end.
                </li>
            </ul>
        </div>

        <div>
            <h6 className="font-semibold">Notable projects & accomplishments</h6>

            <ul className="pl-12 list-disc">
                <li>
                    <p>Payments Integration (Stripe, PayPal, Client Gateway)</p>

                    <ul className="pl-12 list-disc">
                        <li>
                            Integrated Stripe/PayPal for one-time payments and refunds.
                        </li>

                        <li>
                            Implemented Stripe Connect / account preferences to handle marketplace payouts (connect accounts, onboarding, payouts settings).
                        </li>
                        
                        <li>
                            Handled refunds & reconciliation workflows on both Stripe and PayPal.
                        </li>

                        <li>
                            Ensured secure handling of payment webhooks and retried failed events.
                        </li>
                    </ul>
                </li>

                <li>
                    <p>
                        Airbnb Clone — Booking & Chat
                    </p>

                    <ul className="pl-12 list-disc">
                        <li>
                            Implemented booking price calculations (nightly rates, cleaning, taxes, discounts, fees).
                        </li>
                        <li>
                            Built calendar availability and overlapping booking validation.
                        </li>
                        <li>
                            Implemented instant chat for host ↔ guest communication with online presence indicators.
                        </li>
                        <li>
                            Optimized room search queries and filters for fast results.
                        </li>
                    </ul>
                </li>

                <li>
                    <p>
                        Amazon Clone — Shopping & Order Management
                    </p>

                    <ul className="pl-12 list-disc">
                        <li>
                            Implemented add-to-cart, order creation, cancellation flow, returns & refund policy.
                        </li>
                        <li>
                            Implemented rules for cancellation windows and return management.
                        </li>
                        <li>
                            Built filters & faceted search (category, price, rating, variants) with backend optimizations.
                        </li>
                    </ul>
                </li>
            </ul>
        </div>

        <div>
            <h6 className="font-semibold">Tech Stack</h6>

            <p className="pl-12">
                Laravel, Node.js, MySQL/Postgres, Redis (if used), Stripe, PayPal, client payment gateway, REST APIs, (React / Vue / front-end tech you used), WebSockets or Firebase / Pusher (for chat).
            </p>
        </div>
    </div>
  )
}

export default page