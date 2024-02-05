import React from 'react';
import FeatureCard from './FeatureCard';

const GetStarted = () => {
  return (
    <section className="body-font">
      <div className="container px-5 py-12 mx-auto flex flex-col items-center">
        <p className="uppercase mb-7 font-semibold text-center bg-gradient-to-r from-sky-500 to-blue-400 bg-clip-text text-transparent text-xl">
          Get started
        </p>
        <p className="text-6xl font-bold text-center mb-5 text-neutral-200">
          Getting Started Is{' '}
          <span className="bg-gradient-to-r from-sky-500 to-blue-400 bg-clip-text text-transparent">
            Easy
          </span>
        </p>
        <p className="text-neutral-400 tracking-wide text-center w-1/2 text-lg">
          Subscribe to our Ai models & start earning in just a few simple steps.
        </p>
      </div>
      <FeatureCard
        number="01"
        heading="Connect Your Wallet"
        subheading="Connect your wallet to get access to our best Ai models"
        button
      />
      <FeatureCard
        number="02"
        heading="Buy our EVE Token"
        subheading="Use our EVE token to leverage your trading experience"
        reversed
      />
      <FeatureCard
        number="03"
        heading="Subscribe to our AI model"
        subheading="Subscribe to our AI model to precisely predict the buying and selling points"
      />
      <FeatureCard
        number="04"
        heading="Monitor Your Growth"
        subheading="Using our prediction models grow your assets exponentially"
        reversed
      />
    </section>
  );
};

export default GetStarted;
