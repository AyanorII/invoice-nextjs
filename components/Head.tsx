import NextHead from "next/head";

type Props = {
  title: string;
};

const Head = ({ title }: Props) => {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="Full-stack invoice app built with Next.js, Material UI, NestJS and MongoDB. Challenge from Frontend Mentor website"
      />

      {/* Facebook Meta Tags  */}
      <meta property="og:url" content="https://invoice-nextjs.vercel.app/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content="Full-stack invoice app built with Next.js, Material UI, NestJS and MongoDB. Challenge from Frontend Mentor website"
      />
      <meta
        property="og:image"
        content="https://i.imgur.com/yG7t1PQ.png"
      />

      {/* Twitter Meta Tags  */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="invoice-nextjs.vercel.app" />
      <meta
        property="twitter:url"
        content="https://invoice-nextjs.vercel.app/"
      />
      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:description"
        content="Full-stack invoice app built with Next.js, Material UI, NestJS and MongoDB. Challenge from Frontend Mentor website"
      />
      <meta
        name="twitter:image"
        content="https://i.imgur.com/yG7t1PQ.png"
      />
    </NextHead>
  );
};

export default Head;
