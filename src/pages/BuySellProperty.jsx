import { Link } from "react-router-dom";
import bg from "../assets/buysellhome.jpg";
import {
    Home,
    AlertTriangle,
    Wrench,
    Users,
    Gavel,
    XCircle,
    PiggyBank,
    MapPin,
    MoreHorizontal,
    CheckCircle,
    MinusCircle,
} from "lucide-react";

export default function HomeHero() {
    return (
        <>
            {/* ================= HERO SECTION ================= */}
            <section className="relative min-h-screen flex items-center justify-center">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${bg})` }}
                />
<div className="absolute inset-0 bg-red-900/40" />

                <div className="relative z-10 max-w-4xl px-6 text-center text-white">
                    <p className="uppercase tracking-widest text-sm mb-4 text-red-200">
                        DELHI HOMEOWNERS
                    </p>

                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
                        Sell Your House As-Is <br />
                        for the Highest <br />
                        Off-Market Price
                    </h1>

                    <p className="text-lg md:text-xl mb-10 text-gray-200">
                        Get a 100% Cash Offer. No Fees. Fast Closing.
                    </p>

                    <Link
                        to="/contact"
                        className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-full transition-all shadow-lg"
                    >
                        Get a Cash Offer
                    </Link>
                </div>
            </section>

           {/* ================= TRUSTED BUYER SECTION ================= */}
<section className="relative py-32 bg-white overflow-hidden">
  {/* top accent */}
  <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-red-50 to-white" />

  <div className="relative max-w-7xl mx-auto px-6 text-center">
    {/* Heading */}
    <span className="inline-block mb-4 text-sm tracking-widest uppercase text-red-600 font-semibold">
      Trusted Local Experts
    </span>

    <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-black leading-tight">
      We are Delhi’s Trusted Local <br className="hidden md:block" />
      Home Buyer
    </h2>

    <p className="text-black/70 max-w-3xl mx-auto mb-24 text-lg leading-relaxed">
      We buy houses in any condition, in any area, and for any reason. We are the{" "}
      <span className="text-red-600 font-semibold">easy button</span>{" "}
      to sell your house fast!
    </p>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-left">
      {[
        { icon: <Home />, title: "Inherited Homes", text: "You've inherited a property and you'd prefer cash instead." },
        { icon: <AlertTriangle />, title: "Foreclosures", text: "Stop or avoid the foreclosure process." },
        { icon: <Wrench />, title: "Repairs Needed", text: "Homes needing major or minor repairs." },
        { icon: <Users />, title: "Problem Rentals", text: "Vacant or tenant-occupied properties." },
        { icon: <Gavel />, title: "Divorce", text: "Sell quickly and divide proceeds fairly." },
        { icon: <XCircle />, title: "House Won't Sell", text: "Listed before but didn’t sell." },
        { icon: <PiggyBank />, title: "Tax Issues", text: "Behind on property taxes or liens." },
        { icon: <MapPin />, title: "Out of State", text: "Sell remotely without travel." },
        { icon: <MoreHorizontal />, title: "And More", text: "Any situation. Any condition." },
      ].map((item, i) => (
        <div
          key={i}
          className="group relative bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
        >
          {/* icon */}
          <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-2xl border-2 border-red-600 text-red-600 group-hover:bg-red-600 group-hover:text-white transition">
            {item.icon}
          </div>

          <h3 className="text-xl font-semibold mb-3 text-black">
            {item.title}
          </h3>

          <p className="text-black/70 leading-relaxed">
            {item.text}
          </p>

          {/* subtle corner accent */}
          <div className="absolute inset-x-0 bottom-0 h-1 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-b-3xl" />
        </div>
      ))}
    </div>
  </div>
</section>



            {/* ================= ADVANTAGE COMPARISON ================= */}
            <section className="bg-gradient-to-b from-red-50 to-white py-28">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-20 text-black">
                        The Advantage Is Clear
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-stretch">
                        {/* Traditional */}
                        <div className="bg-white p-12 rounded-3xl shadow-md border border-gray-200">
                            <h3 className="text-2xl font-bold mb-10 text-black">
                                Traditional Process
                            </h3>

                            <ul className="space-y-5 text-left">
                                <CompareItem icon={<MinusCircle />} text="Pay 6% plus other fees" negative />
                                <CompareItem icon={<MinusCircle />} text="Unpredictable offers" negative />
                                <CompareItem icon={<MinusCircle />} text="Cleanup & repair costs" negative />
                                <CompareItem icon={<MinusCircle />} text="Showings & open houses" negative />
                                <CompareItem icon={<MinusCircle />} text="2–3+ months to close" negative />
                            </ul>
                        </div>

                        {/* Cash Offer */}
                        <div className="relative bg-white p-12 rounded-3xl shadow-2xl border-2 border-red-600">
                            {/* badge */}
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-6 py-1 rounded-full text-sm font-semibold shadow">
                                Best Choice
                            </div>

                            <h3 className="text-2xl font-bold mb-10 text-black">
                                Our Cash Offer
                            </h3>

                            <ul className="space-y-5 text-left">
                                <CompareItem icon={<CheckCircle />} text="Zero fees to sell" />
                                <CompareItem icon={<CheckCircle />} text="Highest off-market price" />
                                <CompareItem icon={<CheckCircle />} text="Sell as-is. No repairs." />
                                <CompareItem icon={<CheckCircle />} text="No hassle or showings" />
                                <CompareItem icon={<CheckCircle />} text="Close in as little as 7 days" />
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


            {/* ================= PROCESS SECTION ================= */}
            <section className="bg-white py-24">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-20 text-black">
                        Our Process Is Simple
                    </h2>

                    <div className="grid md:grid-cols-3 gap-16">
                        <Step number="01" title="Submit Your Info" text="Share basic details about you and your home." />
                        <Step number="02" title="Let’s Talk" text="We evaluate your property and present a fair cash offer." />
                        <Step number="03" title="Get Cash" text="We close fast and cover all costs." />
                    </div>
                </div>
            </section>
            {/* ================= CASH OFFER FORM ================= */}
            <section className="bg-red-600 py-28">
                <div className="max-w-5xl mx-auto px-6 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Sell Your House As-Is for the <br className="hidden md:block" />
                        Highest Off-Market Price
                    </h2>

                    <p className="text-white/90 mb-12">
                        Get a 100% Cash Offer. No Fees. Fast Closing.
                    </p>

                    <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-14 text-left text-black max-w-3xl mx-auto">
                        <form className="space-y-6">
                            {/* Name */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <Input label="First Name*" />
                                <Input label="Last Name*" />
                            </div>

                            {/* Contact */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <Input label="Email*" type="email" />
                                <Input label="Phone Number*" />
                            </div>

                            {/* Address */}
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    What is the Property Address?
                                </label>
                                <Input label="Address*" />
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                <Input label="City*" />
                                <Select
                                    label="State*"
                                    options={[
                                        "Alabama",
                                        "Alaska",
                                        "Arizona",
                                        "Arkansas",
                                        "California",
                                        "Colorado",
                                        "Connecticut",
                                        "Delaware",
                                        "Florida",
                                        "Georgia",
                                        "Hawaii",
                                        "Idaho",
                                        "Illinois",
                                        "Indiana",
                                        "Iowa",
                                        "Kansas",
                                        "Kentucky",
                                        "Louisiana",
                                        "Maine",
                                        "Maryland",
                                        "Massachusetts",
                                        "Michigan",
                                        "Minnesota",
                                        "Mississippi",
                                        "Missouri",
                                        "Montana",
                                        "Nebraska",
                                        "Nevada",
                                        "New Hampshire",
                                        "New Jersey",
                                        "New Mexico",
                                        "New York",
                                        "North Carolina",
                                        "North Dakota",
                                        "Ohio",
                                        "Oklahoma",
                                        "Oregon",
                                        "Pennsylvania",
                                        "Rhode Island",
                                        "South Carolina",
                                        "South Dakota",
                                        "Tennessee",
                                        "Texas",
                                        "Utah",
                                        "Vermont",
                                        "Virginia",
                                        "Washington",
                                        "West Virginia",
                                        "Wisconsin",
                                        "Wyoming",
                                    ]}
                                />
                                <Input label="Zip*" />
                            </div>

                            {/* Property Type */}
                            <Select
                                label="What Type of Property is This?*"
                                options={[
                                    "Single-Family Home",
                                    "Condo",
                                    "Townhouse",
                                    "Mobile Home",
                                    "Land",
                                ]}
                            />

                            {/* Situation */}
                            <Select
                                label="What is Your Situation?*"
                                options={[
                                    "Inherited Home",
                                    "Foreclosure",
                                    "Repairs Needed",
                                    "Problem Rental",
                                    "Divorce",
                                    "House Won't Sell",
                                    "Tax Payments",
                                    "Out-of-State",
                                    "Other / None of the Above",
                                ]}
                            />

                            {/* Closing Date */}
                            <Select
                                label="What is Your Desired Closing Date?*"
                                options={[
                                    "ASAP",
                                    "Within 30 Days",
                                    "Within 60 Days",
                                    "More than 60 Days",
                                ]}
                            />

                            {/* Notes */}
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Any Other Details We Should Know?
                                </label>
                                <textarea
                                    rows="4"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                                />
                            </div>

                            {/* Submit */}
                            <div className="text-center pt-4">
                                <button
                                    type="submit"
                                    className="bg-red-600 hover:bg-red-700 text-white font-semibold px-10 py-4 rounded-full shadow-lg transition"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

/* ================= COMPONENTS ================= */

function Item({ icon, title, text }) {
    return (
        <div>
            <div className="text-red-600 w-10 h-10 mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-black">{title}</h3>
            <p className="text-black/70 leading-relaxed">{text}</p>
        </div>
    );
}

function CompareItem({ icon, text, negative }) {
    return (
        <li className="flex items-center gap-3">
            <span className={negative ? "text-red-500" : "text-green-600"}>
                {icon}
            </span>
            <span className="text-black/80">{text}</span>
        </li>
    );
}

function Step({ number, title, text }) {
    return (
        <div>
            <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center border-2 border-red-600 text-red-600 font-bold rounded-full">
                {number}
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-black">{title}</h3>
            <p className="text-black/70 max-w-sm mx-auto">{text}</p>
        </div>
    );
}

function Input({ label, type = "text" }) {
    return (
        <div>
            <label className="block text-sm font-medium mb-2">{label}</label>
            <input
                type={type}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
        </div>
    );
}

function Select({ label, options }) {
    return (
        <div>
            <label className="block text-sm font-medium mb-2">{label}</label>
            <select className="w-full rounded-lg border border-gray-300 px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-red-500">
                <option>Select an option</option>
                {options.map((item, i) => (
                    <option key={i}>{item}</option>
                ))}
            </select>
        </div>
    );
}

