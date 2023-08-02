import Head from 'next/head'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoKatanemo from '@/images/logos/katanemo.svg'
import logoDeveloPop from '@/images/logos/developop.svg'
import Link from "next/link";

const projects = [
  {
    name: 'Katanemo',
    description:
      'Katanemo helps developers instantly build critical authentication and safety features so they can focus on moving faster. Its an identity (CIAM) and fine-grained permissions service - unified as one.',
    link: { href: 'https://katanemo.com/', label: 'katanemo.com' },
    logo: logoKatanemo,
  },
  {
    name: 'DeveloPop',
    description:
        'DeveloPop is a 501(c)(3) nonprofit organization that aims to provide free, accessible, and high-quality computer science education to students. We are a group of high school students who are passionate about computer science and want to share our knowledge with others.',
    link: { href: 'https://developop.org/', label: 'developop.org' },
    logo: logoDeveloPop,
  },

]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

const Tracklist = [
    {
        source:
            'https://spherrrical.s3.us-west-2.amazonaws.com/nav.png',
    },
    {
        source:
            'https://spherrrical.s3.us-west-2.amazonaws.com/Starboy.png',
    },
    {
        source:
            'https://spherrrical.s3.us-west-2.amazonaws.com/After+Hours.png',
    },
]

const FullSize = [
    {
        source:
            'https://spherrrical.s3.us-west-2.amazonaws.com/fullsizemaaz-03.png',
    },
    {
        source:
            'https://spherrrical.s3.us-west-2.amazonaws.com/fullsize-04.png',
    },
    {
        source:
            'https://spherrrical.s3.us-west-2.amazonaws.com/fullsizemaaz-02.png',
    },
]


export default function Projects() {
  return (
    <>
      <Head>
        <title>Store - Musa Malik</title>
        <meta
          name="description"
          content="Musa's Posters - Order custom album cover posters."
        />
      </Head>
      <SimpleLayout
        title="Order custom album cover posters."
        intro="Posters are 11x17 and printed on thick, durable paper. Now available for online orders placed in Washington state + free shipping. For orders using cash, contact 425-236-0563."
      >
          <div className="flex flex-col gap-y-10">
              <Link href="https://buy.stripe.com/7sI9E34Q84ISat2dQQ" className="transition text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 dark:hover:text-teal-500 hover:text-teal-500">
                  $10 - Order with tracklist &rarr;
              </Link>
              <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
                  {Tracklist.map((tracklist) => (
                      <li key={tracklist.source} className="relative">
                          <div className="group block w-full overflow-hidden rounded">
                              <img src={tracklist.source} alt="" className="pointer-events-none object-cover" />
                          </div>
                      </li>
                  ))}
              </ul>
              <Link href="https://buy.stripe.com/3cs17x4Q8cbkeJi8wx" className="transition text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 dark:hover:text-teal-500 hover:text-teal-500">
                  $8 - Order full size cover &rarr;
              </Link>
              <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
                  {FullSize.map((fullsize) => (
                      <li key={fullsize.source} className="relative">
                          <div className="group block w-full overflow-hidden rounded">
                              <img src={fullsize.source} alt="" className="pointer-events-none object-cover" />
                          </div>
                      </li>
                  ))}
              </ul>
          </div>
      </SimpleLayout>
    </>
  )
}
