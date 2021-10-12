import Head from "next/head";
import React, { useState, useRef, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { PlusIcon, MinusIcon } from "@heroicons/react/outline";
import dynamic from "next/dynamic";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import parse from "html-react-parser";

// Work around to use the Solana Wallet Adapter with Next.js
// https://github.com/solana-labs/wallet-adapter/issues/30
const WalletProvider = dynamic(
  () => import("../components/ClientWalletProvider"),
  {
    ssr: false,
  }
);

const faqs = [
  {
    question: "HOW MANY GHOULIES WILL BE SPAWNING?",
    answer:
      "There will be exactly 10,000 Ghoulies released on Oct. 25th. They will be 1.5 SOL each (make sure to have ~0.05 SOL for fees)",
  },
  {
    question: "WHY GHOULIE GANG?",
    answer:
      "Ghoulies was the original name given to the 1-of-1 hand-drawings created by [GHOULAREYOU](https://opensea.io/collection/stinkybinky-collection). Those original 1-of-1's inspired the Ghoulie Gang.  Each Ghoulie is unique and generated from over 152 hand-drawn traits. All Ghoulies are rare but some spawns are more uncommon than others and we’ve open-sourced it all for the Gang.\n\nThe recipe of humans, machines, and blockchains has aligned incentives like never before possible in society. Printed fiat is being absorbed by crypto like a sponge so we wanted to incentivize Degen behavior. Our mission is simply to create the Ghouliest of Gangs.\n\nGhoulies are stored as SPL tokens on the Solana blockchain and on [Arweave](https://www.arweave.org/). We use [QuickNode](https://www.quicknode.com/) as our dedicated RPC provider to scale and handle high amounts of traffic without rate limits. We use [Candy Machine](https://github.com/metaplex-foundation/metaplex/blob/master/rust/nft-candy-machine/src/lib.rs) for our smart contract. Candy Machine helps us and you to have fair mints. This protects us from over collection and pre-launch minting malfunctions.",
  },
  {
    question: "HOW DO I SPAWN A GHOULIE ON SOLANA?",
    answer:
      "In order to purchase a Ghoulie, you’ll need to use Solana (SOL), which you can get at most of the exchanges (Coinbase, Binance, FTX, Gemini). Always remember to have extra Solana to cover the network transaction fee.\n\nOnce you've loaded up on the eco-friendly SOL, you’ll need a wallet to store it in. If you’re familiar with ether and their wallets (such as Metamask), let us introduce you to [Phantom Wallet](https://phantom.app/).",
  },
  {
    question: "WHAT IS AN NFT?",
    answer:
      'NFT is an acronym for the technical term "non-fungible token." Each token is essentially a digital asset living permanently on the blockchain.\n\nThey may seem quite esoteric now but the smartest people in the world are building on the blockchain so humans can live happier and more fulfilling lives. Spawning a Ghoulie, could be the best asymmetric bet of your life.',
  },
];

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Head>
        <title>Ghoulie Gang | Solana | NFT</title>
        <meta charSet="utf-8" />
        <link
          href="https://unpkg.com/tailwindcss@^2.0/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <link
          rel="preload"
          href="/fonts/Spot/Spot-Normal.ttf"
          as="font"
          crossOrigin=""
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Ghoulie Gang is a multi-season generative collection of 10,000 unique NFTs on the Solana blockchain. Creepy, weird, and unique just like each one of us. Spawn a Ghoulie to be be part of the Gang."
        />
        <meta name="keywords" content="Solana, Blockchain, NFT" />
      </Head>

      <main className="relative overflow-hidden">
        {/* <WalletProvider objectOfScrolls={objOfScrolls} /> */}
        <a
          href="https://solana.com/"
          target="_blank"
          className="hover:opacity-60"
        >
          <img src="/solana.png" className="sol-log" />
        </a>
        <Navigation setIsOpen={setIsOpen} isOpen={isOpen} />
        <div className="hero">
          <div className="inside px-8 md:px-0 pb-8">
            <img
              className="m-auto w-96 pt-24 pb-24 md:pb-20"
              src="/ghoulie-gang-logo.png"
            />
            <div className="welcome w-full flex flex-col md:flex-row text-white overflow-visible">
              <div className="logo-bg-cont h-auto" style={{ width: "21rem" }}>
                <div className="logo-bg"></div>
              </div>
              <div className="py-0 md:pt-8 -mt-14 md:mt-0 text-center md:text-left px-4 md:px-0">
                <h2 className="uppercase text-xl letter-spacing-2">
                  Season 1:
                </h2>
                <h1 className="uppercase text-4xl letter-spacing-3">
                  Halloween
                </h1>
                <p className="reg-font max-w-lg pt-3">
                  The first Ghoulie Gang drop is happening October 25 on Solana
                </p>
                <br />
                <p className="reg-font max-w-lg pb-3">
                  Holders of Season 1 may receive special Thanksgiving airdrops
                  and exclusive access to Season 2: Christmas
                </p>
                <ul className="flex justify-center items-center space-x-1 md:space-x-3 px-2 md:px-0">
                  <li className="pos-gho">
                    <img src="/ghoulie-no-bg/Ghoulie-sm-01.png" />
                  </li>
                  <li className="pos-gho">
                    <img src="/ghoulie-no-bg/Ghoulie-sm-02.png" />
                  </li>
                  <li className="pos-gho-tra">
                    <img src="/ghoulie-no-bg/Ghoulie-sm-03.png" />
                  </li>
                  <li className="pos-gho">
                    <img src="/ghoulie-no-bg/Ghoulie-sm-04.png" />
                  </li>
                  <li>
                    <img src="/ghoulie-no-bg/Ghoulie-sm-05.png" />
                  </li>
                  <li className="pos-gho">
                    <img src="/ghoulie-no-bg/Ghoulie-sm-06.png" />
                  </li>
                  <li className="pos-gho-tra-s">
                    <img src="/ghoulie-no-bg/Ghoulie-sm-07.png" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <a
          href="https://discord.gg/UQQ2ySbt"
          target="_blank"
          className="discord-bubble m-auto my-8 px-10"
        >
          <svg
            className="h-auto w-10 md:w-8 mr-5"
            width="71"
            height="55"
            viewBox="0 0 71 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0)">
              <path
                d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"
                fill="#ffffff"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="71" height="55" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <b>Join the community on Discord</b>
        </a>

        <div className="ghoulies-demo py-4 overflow-hidden">
          <div className="demo-1 flex w-full items-center justify-center space-x-1 pb-1">
            <img className="h-auto w-52" src="/ghoulies/7.png" />
            <img className="h-auto w-52" src="/ghoulies/4.png" />
            <img className="h-auto w-52" src="/ghoulies/10.png" />
            <img className="h-auto w-52" src="/ghoulies/2.png" />
            <img className="h-auto w-52" src="/ghoulies/464.png" />
            <img className="h-auto w-52" src="/ghoulies/0.png" />
            <img className="h-auto w-52" src="/ghoulies/3.png" />
            <img className="h-auto w-52" src="/ghoulies/5.png" />
          </div>
          <div className="demo-2 flex w-full items-center justify-center space-x-1">
            <img className="h-auto w-52" src="/ghoulies/298.png" />
            <img className="h-auto w-52" src="/ghoulies/68.png" />
            <img className="h-auto w-52" src="/ghoulies/279.png" />
            <img className="h-auto w-52" src="/ghoulies/153.png" />
            <img className="h-auto w-52" src="/ghoulies/7.png" />
            <img className="h-auto w-52" src="/ghoulies/ghoulie-2.png" />
            <img className="h-auto w-52" src="/ghoulies/9.png" />
            <img className="h-auto w-52" src="/ghoulies/11.png" />
          </div>
        </div>

        <div className="the-crew text-white mt-16 py-8">
          <div className="inside px-8 md:px-0">
            <div className="w-full leading-5 text-base">
              <h2 className="uppercase text-3xl md:text-4xl letter-spacing-2">
                OGG
              </h2>
              <p className="pt-2 reg-font">
                Ghoulie Gang was created by five internet friends who became
                wanderers in the strange universe of DeFi. We'd like to help
                build the world we want to live in.
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between mt-8">
              <div className="flex flex-col items-center">
                <img
                  className="w-7/12 md:w-11/12 supa-rounded h-full border-4 border-black"
                  src="/ghoulies/655.png"
                />
                <a
                  className="uppercase text-sm letter-spacing-1 text-center pt-2 hover:opacity-75"
                  href="https://twitter.com/ghoulareyou"
                  target="_blank"
                >
                  <h3>@Ghoulareyou</h3>
                </a>
                <p className="reg-font text-center pt-2">
                  Always Raiding. Modern-Day Doodler.
                </p>
              </div>
              <div className="flex flex-col items-center mt-8 md:mt-0">
                <img
                  className="w-7/12 md:w-11/12 supa-rounded h-full border-4 border-black"
                  src="/ghoulies/3.png"
                />
                <a
                  className="uppercase text-sm letter-spacing-1 text-center pt-2 hover:opacity-75"
                  href="https://twitter.com/GrouchyGhoulie"
                  target="_blank"
                >
                  <h3>@2Ghoul4School</h3>
                </a>
                <p className="reg-font text-center pt-2">
                  Synth-Wave Simp. Discord Architect.
                </p>
              </div>
              <div className="flex flex-col items-center mt-8 md:mt-0">
                <img
                  className="w-7/12 md:w-11/12 supa-rounded h-full border-4 border-black"
                  src="/ghoulies/202.png"
                />
                <a
                  className="uppercase text-sm letter-spacing-1 text-center pt-2 hover:opacity-75"
                  href="https://twitter.com/ghoul_keeper"
                  target="_blank"
                >
                  <h3>@Ghoul_Keeper</h3>
                </a>
                <p className="reg-font text-center pt-2 w-10/12">
                  Candy Maxi.
                  <br className="hide-on-large" />
                  Not Your Average Dad.
                </p>
              </div>
              <div className="flex flex-col items-center mt-8 md:mt-0">
                <img
                  className="w-7/12 md:w-11/12 supa-rounded h-full border-4 border-black"
                  src="/ghoulies/44.png"
                />
                <a
                  className="uppercase text-sm letter-spacing-1 text-center pt-2 hover:opacity-75"
                  href="https://twitter.com/fiatbrain"
                  target="_blank"
                >
                  <h3>@Fiatbrain</h3>
                </a>
                <p className="reg-font text-center pt-2 w-10/12">
                  DeFi Immigrant. Don’t Panic!
                </p>
              </div>
              <div className="flex flex-col items-center mt-8 md:mt-0">
                <img
                  className="w-7/12 md:w-11/12 supa-rounded h-full border-4 border-black"
                  src="/ghoulies/166.png"
                />
                <a
                  className="uppercase text-sm letter-spacing-1 text-center pt-2 hover:opacity-75"
                  href="https://twitter.com/hicryptopete"
                  target="_blank"
                >
                  <h3>@hicryptopete</h3>
                </a>
                <p className="reg-font text-center pt-2">
                  Apps To Dapps. Good Vibes Only.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="blur-bg">
          <div className="max-w-7xl mx-auto py-12 px-8 md:px-4 sm:py-16 sm:px-6 lg:px-8">
            <div className="mx-auto">
              <h2 className="uppercase text-left text-3xl md:text-4xl text-white letter-spacing-2 adjust-font">
                Frequently Asked Questions
              </h2>
              <dl className="mt-6 space-y-3">
                {faqs.map((faq) => (
                  <Disclosure
                    as="div"
                    key={faq.question}
                    className="pt-6 faq-item"
                  >
                    {({ open }) => (
                      <>
                        <dt className="text-lg">
                          <Disclosure.Button className="text-left w-full flex justify-between items-start text-white">
                            <span className="text-white text-2xl letter-spacing-1a adjust-font-small">
                              {faq.question}
                            </span>
                            <span className="ml-6 h-7 flex items-center">
                              {open ? (
                                <MinusIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </dt>
                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                          <p className="whitespace-pre-wrap reg-font text-white">
                            {parse(
                              faq.answer.replace(/\[.*?\]\(.*?\)/g, (text) => {
                                let [_fullmatch, name, link] =
                                  /\[(.*?)\]\((.*?)\)/g.exec(text);
                                return `<a class="anchor-here" target="_blank" href="${link}">${name}</a>`;
                              })
                            )}
                          </p>
                          {faq.question == "WHY GHOULIE GANG?" ? (
                            <span>
                              <br />
                              <a
                                href="https://github.com/ghoul-keeper/ghoulies"
                                target="_blank"
                                style={{ color: "#202020" }}
                                className="hover:opacity-60 letter-spacing-2"
                              >
                                GIT REPO
                              </a>
                              <br />
                              <a
                                href="/"
                                target="_blank"
                                style={{ color: "#202020" }}
                                className="hover:opacity-60 letter-spacing-2"
                              >
                                CANDY MACHINE ID COMING SOON...
                              </a>
                            </span>
                          ) : null}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </dl>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}
