import Head from "next/head";
import { VerticalStack, Container } from "@/design-system/components";
import { Header } from "@/components/Header";
import { HotelListing } from "@/components/Listings/HotelListing";

export default function Home() {
  return (
    <>
      <Head>
        <title>Qantas Holidays</title>
        <meta name="description" content="Qantas Holidays listings" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container>
          <VerticalStack gap={20}>
            <Header />
            <HotelListing />
          </VerticalStack>

          {/* <VerticalStack>
            <StarRating rating={3.5} type="star" />
            <StarRating rating={4.5} type="self" />
            <StarRating rating={1} type="star" />
            <StarRating rating={3} type="self" />
            <Heading>Checking</Heading>
            <Text>Working now</Text>
          </VerticalStack> */}
        </Container>
      </main>
    </>
  );
}
