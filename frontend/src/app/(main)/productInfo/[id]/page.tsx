// /app/products/[id]/page.tsx
import Image from "next/image";
import { products } from "@/lib/products";
import { notFound } from "next/navigation";
import FullInfo from "@/components/products/full/Info";
import Container from "@/layout/Container";

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) return notFound();

  return (
    <Container>
      <FullInfo {...product} />
    </Container>
  );
}
