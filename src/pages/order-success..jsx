import Head from 'next/head'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoKatanemo from '@/images/logos/katanemo.svg'
import logoDeveloPop from '@/images/logos/developop.svg'
import Link from "next/link";





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
        title="Thanks for placing an order."
        intro="You may receive a text message from me to confirm your order. I'll be in touch soon. You can expect your poster(s) within 5-7 days. Delivery is a drop-off at your door. Contact 425-236-0563 for order status."
      >
          <div className="flex flex-col gap-y-10">
              <Link href="/" className="transition text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 dark:hover:text-teal-500 hover:text-teal-500">
                  Back home &rarr;
              </Link>
          </div>
      </SimpleLayout>
    </>
  )
}
