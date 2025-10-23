// /app/products/[id]/page.tsx
import Image from "next/image";
import { products } from "@/lib/products";
import { notFound } from "next/navigation";
import FullInfo from "@/components/products/full/Info";
import Container from "@/layout/Container";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) return notFound();

  return (
    <Container>
      <FullInfo {...product} />
    </Container>
  );
}
