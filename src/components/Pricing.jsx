import React, { useState } from 'react';
import { Check, ArrowRight, Star, Clock, Shield, HeartPulse } from 'lucide-react';

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  
  const plans = [
    {
      name: 'Basic',
      description: 'Ideal for small clinics and practices.',
      monthlyPrice: '$199',
      yearlyPrice: '$1,990',
      savings: 'Save $398',
      features: [
        'Dashboard with AI Insights',
        'Patient Management',
        'Schedule Management',
        'Appointment System',
        'Basic Reports',
        'Email Support',
      ],
      highlightFeature: false,
      icon: Clock,
    },
    {
      name: 'Pro',
      description: 'Perfect for mid-sized hospitals.',
      monthlyPrice: '$399',
      yearlyPrice: '$3,990',
      savings: 'Save $798',
      features: [
        'All Basic Features',
        'Blood Bank Management',
        'Department Management',
        'Advanced Analytics',
        'Billing Integration',
        'Priority Support',
      ],
      popular: true,
      highlightFeature: true,
      icon: HeartPulse,
    },
    {
      name: 'Enterprise',
      description: 'Customized for large medical centers.',
      monthlyPrice: '$799',
      yearlyPrice: '$7,990',
      savings: 'Save $1,598',
      features: [
        'All Pro Features',
        'Room & Bed Tracking',
        'Meal Plans Management',
        'Custom Integrations',
        'White-labeled Solution',
        'Dedicated Account Manager',
      ],
      highlightFeature: false,
      icon: Shield,
    },
  ];

  return (
    <section id="pricing" className="relative py-24 bg-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-teal-50 to-white opacity-70"></div>
      <div className="absolute bottom-0 left-0 -mb-32 -ml-32 hidden lg:block">
        <div className="h-64 w-64 rounded-full bg-teal-50 opacity-70"></div>
      </div>
      <div className="absolute top-1/4 right-1/4 hidden lg:block">
        <div className="h-16 w-16 rounded-full bg-teal-100 opacity-50"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-teal-50 text-teal-700 mb-5">
            <span className="flex h-2 w-2 rounded-full bg-teal-500 mr-2"></span>
            Transparent Pricing
          </div>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
            Choose the perfect plan for your <span className="text-teal-600">healthcare</span> facility
          </h2>
          <p className="mt-6 text-lg text-gray-500">
            Flexible plans designed to scale with your organization. All plans include regular updates and feature enhancements.
          </p>
          
          {/* Billing toggle */}
          <div className="flex items-center justify-center mt-8">
            <div className="relative flex bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`relative w-32 py-2 text-sm font-medium rounded-md transition-colors ${
                  billingPeriod === 'monthly' 
                    ? 'bg-white text-gray-800 shadow-sm' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod('yearly')}
                className={`relative w-32 py-2 text-sm font-medium rounded-md transition-colors ${
                  billingPeriod === 'yearly' 
                    ? 'bg-white text-gray-800 shadow-sm' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Yearly
                <span className="absolute -top-2 -right-2 bg-teal-500 text-white text-xs px-2 py-0.5 rounded-full">
                  20% off
                </span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl ${
                plan.popular ? 'border-2 border-teal-500' : 'border border-gray-100'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 w-full">
                  <div className="flex justify-center -mt-4">
                    <span className="bg-gradient-to-r from-teal-500 to-teal-600 text-white text-sm font-medium px-6 py-1.5 rounded-full shadow-md flex items-center">
                      <Star className="h-4 w-4 mr-1.5" />
                      Most Popular
                    </span>
                  </div>
                </div>
              )}
              
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-teal-100 text-teal-600">
                      <plan.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                    <p className="text-gray-500">{plan.description}</p>
                  </div>
                </div>
                
                <div className="mt-6 mb-8">
                  <div className="flex items-end">
                    <span className="text-4xl font-bold text-gray-900">
                      {billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                    </span>
                    <span className="text-gray-500 ml-2 mb-1">/year</span>
                  </div>
                  {billingPeriod === 'yearly' && (
                    <p className="text-teal-600 font-medium text-sm mt-1">{plan.savings}</p>
                  )}
                </div>
                
                {/* Features */}
                <ul className="mt-8 space-y-4 text-gray-600">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className={`flex-shrink-0 mt-1 ${plan.highlightFeature && idx > 0 ? 'text-teal-500' : 'text-teal-400'}`}>
                        <Check className="h-5 w-5" />
                      </div>
                      <span className="ml-3">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* CTA Button */}
                <div className="mt-10">
                  <a
                    href="#contact"
                    className={`w-full flex items-center justify-center px-6 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                      plan.popular
                        ? 'text-white bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 shadow-md hover:shadow-lg'
                        : 'text-teal-700 bg-teal-50 hover:bg-teal-100'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Enterprise callout */}
        <div className="mt-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl shadow-xl overflow-hidden">
          <div className="px-6 py-10 sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between">
            <div>
              <h3 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                Need a custom solution?
              </h3>
              <p className="mt-3 max-w-3xl text-lg text-teal-100">
                Our team can build a tailored solution specifically for your healthcare organization's unique requirements.
              </p>
            </div>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-teal-600 bg-white hover:bg-gray-50 transition-colors duration-300"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>
        
        
      </div>
    </section>
  );
}