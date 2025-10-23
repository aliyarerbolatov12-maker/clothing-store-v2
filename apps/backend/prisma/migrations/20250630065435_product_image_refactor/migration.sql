/*
  Warnings:

  - You are about to drop the column `image_url` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `image_url` on the `product_variant` table. All the data in the column will be lost.
  - Added the required column `type` to the `product_image` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ImageType" AS ENUM ('THUMBNAIL', 'PREVIEW', 'FULL', 'ZOOM');

-- AlterTable
ALTER TABLE "product" DROP COLUMN "image_url",
ADD COLUMN     "mainColor" TEXT;

-- AlterTable
ALTER TABLE "product_image" ADD COLUMN     "alt" TEXT,
ADD COLUMN     "type" "ImageType" NOT NULL,
ADD COLUMN     "variantId" INTEGER;

-- AlterTable
ALTER TABLE "product_variant" DROP COLUMN "image_url";

-- AddForeignKey
ALTER TABLE "product_image" ADD CONSTRAINT "product_image_variantId_fkey" FOREIGN KEY ("variantId") REFERENCES "product_variant"("id") ON DELETE SET NULL ON UPDATE CASCADE;
