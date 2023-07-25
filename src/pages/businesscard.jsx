import Head from 'next/head'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoKatanemo from '@/images/logos/katanemo.svg'
import logoDeveloPop from '@/images/logos/developop.svg'
import image1 from "@/images/photos/image-1.jpeg";
import image2 from "@/images/photos/image-2.jpg";
import image3 from "@/images/photos/image-3.jpg";
import image4 from "@/images/photos/image-4.jpeg";
import image5 from "@/images/photos/image-5.jpeg";
import image6 from "@/images/photos/image-6.jpeg";
import image8 from "@/images/photos/image-8.jpeg";
import clsx from "clsx";
import {Container} from "@/components/Container";
import Link from "next/link";


function Welcome() {
    return (
        <div className="flex flex-col gap-y-10">
            <Link href="/" className="transition text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 dark:hover:text-teal-500 hover:text-teal-500">
                Experiences &rarr;
            </Link>
            <Link href="/projects" className="transition text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 dark:hover:text-teal-500 hover:text-teal-500">
                Projects &rarr;
            </Link>
            <Link href="/photos" className="transition text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 dark:hover:text-teal-500 hover:text-teal-500">
                Photography &rarr;
            </Link>
            <Link href="/about" className="transition text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 dark:hover:text-teal-500 hover:text-teal-500">
                About Me &rarr;
            </Link>
            <Link href="https://spherrrical.s3.us-west-2.amazonaws.com/Musa+Malik+-+Resume+-+Jul+14.pdf" className="transition text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 dark:hover:text-teal-500 hover:text-teal-500">
                Resume &rarr;
            </Link>
        </div>





    );
}


export default function BusinessCard() {
  return (
    <>
      <Head>
        <title>Business Card Redirect - Musa Malik</title>
        <meta
          name="description"
          content="Business Card Redirect"
        />
      </Head>
      <SimpleLayout
        title="Looks like you came from my business card, welcome."
        intro="You scanned the QR code on my card! Welcome to my website, you can find my blog, projects, and photos here."
      >
        <Welcome />
      </SimpleLayout>
    </>
  )
}
