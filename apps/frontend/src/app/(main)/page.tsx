
import Hero from "@/sections/Hero";
import TopSelling from "@/sections/TopSelling";
import NewArrivals from "@/sections/NewArrivals";
import HappyCustomersSlider from "@/components/ui/HappyCustomerSlider";
import Container from "@/layout/Container";
import DressStyleGrid from "@/sections/DressStyleGrid";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Container>
        <NewArrivals />
        <TopSelling />
      </Container>
      <HappyCustomersSlider />
      <Container>
        <DressStyleGrid />
      </Container>
    </>
  );
}
