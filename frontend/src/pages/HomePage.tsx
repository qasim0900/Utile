import React from 'react';
import { motion, type Easing } from 'framer-motion';

export const HomePage: React.FC = () => {
  const services = [
    {
      title: 'Cleaning',
      description: 'We offer home cleaning services. We put your needs first.',
      image: '/images/undraw_completed_tasks_vs6q.svg'
    },
    {
      title: 'Plumbing',
      description: 'We offer professional plumbing services for all your needs.',
      image: '/images/undraw_product_iteration_kjok.svg' // change if you have better match
    },
    {
      title: 'Other Services',
      description: 'Electrics • Moving • Gardening • Plastering • Carpeting and more...',
      image: '/images/undraw_web_devices_re_m8sc.svg'
    }
  ];

  const standardEase: Easing = "easeOut";

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: standardEase }
  };

  const scaleUp = {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: standardEase }
  };

  return (
    <div className="leading-normal tracking-normal text-white" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
      {/* Hero Section */}
      <div className="gradient pt-24 min-h-screen flex items-center">
        <div className="container px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left"
          >
            <p className="uppercase tracking-loose w-full text-white/80 font-bold">Fast Delivery</p>
            <h1 className="my-4 text-5xl md:text-7xl font-bold leading-tight text-white">
              UTILE - We put U first
            </h1>
            <p className="leading-normal text-2xl mb-8 text-white/90">
              We are here to save your time. The best personal service app.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition duration-300 ease-in-out"
            >
              Get Started
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full mb-10 pb-10 md:w-3/5 py-6 text-center"
          >
            <img
              className="w-full md:w-4/5 z-50 mx-auto drop-shadow-2xl"
              src="/images/Information flow_Monochromatic(5).svg"
              alt="Information flow"
            />
          </motion.div>
        </div>
      </div>

      {/* Curve SVG - Hero to About */}
      <div className="relative -mt-12 lg:-mt-24">
        <svg viewBox="0 0 1428 174" xmlns="http://www.w3.org/2000/svg">
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fillRule="nonzero">
              <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.1" />
              <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.1" />
              <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" opacity="0.2" />
            </g>
          </g>
        </svg>
      </div>

      {/* About Section */}
      <section id="about" className="bg-white border-b py-12 md:py-16">
        <div className="container max-w-5xl mx-auto px-6">
          <motion.h1
            {...fadeInUp}
            className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
          >
            About
          </motion.h1>
          <div className="w-full mb-6">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>

          <div className="flex flex-wrap items-center">
            <motion.div {...fadeInUp} className="w-full sm:w-1/2 p-6">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-4">
                What is Utile?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                UTILE is a platform that offers personal home services. It provides a range of services from cleaning to plastering. All these services are provided by thoroughly vetted professionals. Our aim is to free up some of your time from tasks that you may not have time to do.
              </p>
            </motion.div>
            <motion.div {...scaleUp} className="w-full sm:w-1/2 p-6">
              <img className="w-full sm:h-64 mx-auto object-contain" src="/images/undraw_completed_tasks_vs6q.svg" alt="Completed tasks" />
            </motion.div>
          </div>

          <div className="flex flex-wrap flex-col-reverse sm:flex-row items-center mt-12">
            <motion.div {...scaleUp} className="w-full sm:w-1/2 p-6">
              <img className="w-5/6 sm:h-64 mx-auto object-contain" src="/images/undraw_internet_on_the_go_re_vben.svg" alt="Internet on the go" />
            </motion.div>
            <motion.div {...fadeInUp} className="w-full sm:w-1/2 p-6">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-4">
                Where do we provide our services?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our services are currently only available in Ireland. We plan on expanding slowly to the UK, America and the rest of the world.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white border-b py-12 md:py-16">
        <div className="container mx-auto px-6">
          <motion.h1
            {...fadeInUp}
            className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
          >
            Services
          </motion.h1>
          <div className="w-full mb-6">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>

          <div className="flex flex-wrap -mx-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.7 }}
                className="w-full md:w-1/3 px-4 mb-8 flex flex-col"
              >
                <div className="flex-1 bg-white rounded-t-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="p-6">
                    <img src={service.image} alt={service.title} className="w-full h-48 object-contain mx-auto mb-6" />
                    <h3 className="font-bold text-2xl text-gray-800 mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
                <div className="bg-white rounded-b-lg shadow-md p-6 border-t border-gray-100">
                  <div className="flex justify-center md:justify-start">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="gradient text-white font-bold rounded-full py-4 px-10 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Browse
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="price" className="bg-gray-100 py-12 md:py-16">
        <div className="container mx-auto px-6">
          <motion.h1
            {...fadeInUp}
            className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
          >
            Pricing
          </motion.h1>
          <div className="w-full mb-6">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-8 mt-12 max-w-5xl mx-auto">
            {/* Free Plan */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex-1 max-w-md bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
            >
              <div className="p-8 text-center border-b-4 border-gray-200">
                <h3 className="text-4xl font-bold text-gray-800">Free</h3>
              </div>
              <ul className="p-8 space-y-4 text-center text-gray-700">
                <li className="border-b pb-4">Ads</li>
                <li className="border-b pb-4">No Priority Bookings</li>
                <li className="border-b pb-4">Cannot Request Specific Worker</li>
                <li className="pb-4">Fast Request</li>
              </ul>
              <div className="p-8 text-center border-t">
                <div className="text-4xl font-bold text-gray-800 mb-2">€0</div>
                <p className="text-gray-600 mb-6">/ per user</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="gradient text-white font-bold rounded-full py-4 px-12 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Select
                </motion.button>
              </div>
            </motion.div>

            {/* Pro Plan */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex-1 max-w-md bg-white rounded-xl shadow-xl overflow-hidden border-2 border-indigo-500 relative"
            >
              <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold uppercase px-4 py-1 rounded-bl-lg">
                Popular
              </div>
              <div className="p-8 text-center border-b-4 border-indigo-500">
                <h3 className="text-4xl font-bold text-gray-800">Pro</h3>
              </div>
              <ul className="p-8 space-y-4 text-center text-gray-700">
                <li className="border-b pb-4">No Ads</li>
                <li className="border-b pb-4">Priority Bookings</li>
                <li className="border-b pb-4">Request Specific Worker</li>
                <li className="pb-4">Fast Request</li>
              </ul>
              <div className="p-8 text-center border-t">
                <div className="text-4xl font-bold text-gray-800 mb-2">€15.00</div>
                <p className="text-gray-600 mb-6">/ per user</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="gradient text-white font-bold rounded-full py-4 px-12 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Select
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Wave SVG - Pricing to Contact */}
      <svg className="w-full" viewBox="0 0 1439 147" xmlns="http://www.w3.org/2000/svg">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g transform="translate(-1.000000, -14.000000)" fillRule="nonzero">
            <g fill="#f3f4f6">
              <path d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z" />
            </g>
          </g>
        </g>
      </svg>

      {/* Contact Section */}
      <section id="contact" className="gradient py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            {...fadeInUp}
            className="w-full my-2 text-5xl font-bold leading-tight text-white"
          >
            Contact Us
          </motion.h1>
          <div className="w-full mb-6">
            <div className="h-1 mx-auto bg-white w-32 opacity-25 my-0 py-0 rounded-t"></div>
          </div>

          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="my-6 text-3xl md:text-4xl font-bold text-white/90"
          >
            Need to get in Contact?
          </motion.h3>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 bg-white text-gray-800 font-bold rounded-full py-5 px-12 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Contact Now!
          </motion.button>
        </div>
      </section>
    </div>
  );
};