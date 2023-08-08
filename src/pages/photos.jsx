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
import image7 from "@/images/photos/image-7.jpeg";
import clsx from "clsx";
import {Container} from "@/components/Container";


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

const files = [
    {
        source:
            'https://spherrrical.s3.us-west-2.amazonaws.com/_MG_7438.jpeg',
    },
    {
        source:
            'https://spherrrical.s3.us-west-2.amazonaws.com/_MG_7439.jpeg',
    },
    {
        source:
            'https://spherrrical.s3.us-west-2.amazonaws.com/_MG_7440.jpeg',
    },
    {
        source:
            'https://spherrrical.s3.us-west-2.amazonaws.com/_MG_7403.jpeg',
    },
    {
        source:
            'https://spherrrical.s3.us-west-2.amazonaws.com/_MG_7409.jpeg',
    },
    {
        source:
            'https://spherrrical.s3.us-west-2.amazonaws.com/_MG_7417.jpeg',
    },
    {
        source:
            'https://spherrrical.s3.us-west-2.amazonaws.com/_MG_7541.jpeg',
    },
    {
        source:
            'https://spherrrical.s3.us-west-2.amazonaws.com/_MG_7542.jpeg',
    },
    {
        source:
            "https://spherrrical.s3.us-west-2.amazonaws.com/image-1.jpeg"
    },
    {
        source:
            "https://spherrrical.s3.us-west-2.amazonaws.com/image-2.jpg"
    },
    {
        source:
            "https://spherrrical.s3.us-west-2.amazonaws.com/image-3.jpg"
    },
    {
        source:
            "https://spherrrical.s3.us-west-2.amazonaws.com/image-4.jpeg"
    },
    {
        source:
            "https://spherrrical.s3.us-west-2.amazonaws.com/image-5.jpeg"
    },
    {
        source:
            "https://spherrrical.s3.us-west-2.amazonaws.com/image-6.jpeg"
    },
    {
        source:
            "https://spherrrical.s3.us-west-2.amazonaws.com/image-7.jpeg"
    },
    {
        source:
            "https://spherrrical.s3.us-west-2.amazonaws.com/image-8.jpeg"
    },
]

function Photos() {
    return (
        <div>
            <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                {files.map((file) => (
                    <li key={file.source} className="relative">
                        <a href={file.source} target="_blank" rel="noopener noreferrer">
                            {/* 'target="_blank"' ensures the link opens in a new tab */}
                            <div className="group block w-full overflow-hidden rounded-lg">
                                <img src={file.source} alt="" className="pointer-events-none object-cover" />
                                <button type="button" className="absolute inset-0 focus:outline-none">
                                </button>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>

        </div>


    );
}


export default function Photography() {
  return (
    <>
      <Head>
        <title>Projects - Musa Malik</title>
        <meta
          name="description"
          content="Photos I've taken either randomly or selected"
        />
      </Head>
      <SimpleLayout
        title="Photos I've taken either randomly or selected."
        intro="Some random photos I've taken over the years."
      >

        <Photos />
      </SimpleLayout>
    </>
  )
}
