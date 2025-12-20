import Image from "next/image";
import styles from "@/components/custom/custom.module.css";

type WhyChooseItem = {
  title: string;
  description: string;
  icon: string;
};

const whyChooseData: WhyChooseItem[] = [
  {
    title: "SEBI Registered Broker",
    description: "Fully regulated. Trade with confidence.",
    icon: "/sebi.svg",
  },
  {
    title: "20L Happy Customers",
    description: "Trusted by millions of Indian investors.",
    icon: "/customers.svg",
  },
  {
    title: "Full Transparency. No Hidden Charges.",
    description: "Clear pricing. No surprises.",
    icon: "/transparency.svg",
  },
  {
    title: "35+ Years of Trust",
    description: "Serving investors since 1990.",
    icon: "/trust.svg",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full pb-2 font-serif">

      <div className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[70%] mx-auto">

        <h3 className={`text-2xl sm:text-3xl md:text-3xl lg:text-4xl pb-2 ${styles.AllInOneH3}`}>Why Choose SMC</h3>
        <p className={`w-full mx-auto text-1xl sm:text-2xl md:text-2xl lg:text-2xl ${styles.AllInOneP}`}>SMC empowers traders with trusted research, advanced trading platforms, and a nationwide presence—helping investors trade with confidence and consistency.</p>

      </div>

      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-14 py-16 p-5">

        <div className="w-full md:w-[480px] lg:w-[920px]">


          <div className="space-y-8">
            {whyChooseData.map((item, index) => (
              <div key={index} className="flex items-start gap-4">

                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={50}
                    height={50}
                  />
                </div>

                <div>
                  <h4 className="text-xl sm:text-lg md:text-lg lg:text-2xl font-medium md:font-semibold text-gray-900">
                    {item.title}
                  </h4>
                  <p className="text-sm sm:text-lg md:text-lg text-gray-600 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-[380px] lg:w-[550px] flex justify-center lg:justify-end">
          <div className="relative overflow-hidden">
            <Image
              src="/trust.png"
              alt="Why Choose Us"
              width={448}
              height={517}
              className="object-cover"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
