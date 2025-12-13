import { ProductCardProps } from "@/types/products/product";

export const products: ProductCardProps[] = [
  {
    id: "1",
    srcImg: "/images/products/t-shirt-1.webp",
    productName: "T-SHIRT WITH TAPE DETAILS",
    description:
      "This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    rating: 4.5,
    colorsName: [
      { name: "Red", hex: "#FF0000" },
      { name: "Blue", hex: "#0000FF" },
      { name: "Green", hex: "#008000" },
    ],
    sizes: [
      { name: "Small" },
      { name: "Medium" },
      { name: "Large" },
      { name: "X-Large" },
    ],
    faqs: [
      { title: "What material is it made of?", content: "100% cotton." },
      { title: "Is it machine washable?", content: "Yes, up to 40°C." },
      {
        title: "Does it shrink after washing?",
        content: "Minimal shrinkage if washed properly.",
      },
      { title: "Where is it manufactured?", content: "Made in Turkey." },
      { title: "Is it unisex?", content: "Yes, fits both men and women." },
    ],
    reviews: [
      { author: "Alice", content: "Great quality shirt!", date: "2024-01-10" },
      {
        author: "John",
        content: "Comfortable and stylish.",
        date: "2024-01-12",
      },
      { author: "Karen", content: "Fits perfectly!", date: "2024-02-01" },
      { author: "Michael", content: "Nice color options.", date: "2024-02-10" },
      { author: "Lina", content: "Would buy again!", date: "2024-03-15" },
      {
        author: "Omar",
        content: "Perfect for casual wear.",
        date: "2024-04-02",
      },
    ],
    detailsTable: [
      { label: "Material composition", value: "100% Cotton" },
      { label: "Care instructions", value: "Machine wash warm, tumble dry" },
      { label: "Fit type", value: "Classic Fit" },
      { label: "Pattern", value: "Solid" },
    ],
    price: 120,
    discountPrice: 90,
  },
  {
    id: "2",
    srcImg: "/images/products/t-shirt-1.webp",
    productName: "T-SHIRT WITH MODERN FIT",
    rating: 4.3,
    colorsName: [
      { name: "Black", hex: "#000000" },
      { name: "White", hex: "#FFFFFF" },
    ],
    sizes: [
      { name: "Small" },
      { name: "Medium" },
      { name: "Large" },
      { name: "X-Large" },
    ],
    faqs: [
      {
        title: "Does it come in plus sizes?",
        content: "Currently available up to XL.",
      },
      { title: "What’s the return policy?", content: "30-day return window." },
      {
        title: "Is it suitable for sports?",
        content: "Yes, great for light sports.",
      },
      { title: "How thick is the fabric?", content: "Medium weight." },
      {
        title: "Will the color fade?",
        content: "No, color holds well after many washes.",
      },
    ],
    reviews: [
      { author: "Tom", content: "Love the modern fit!", date: "2024-01-11" },
      {
        author: "Ana",
        content: "Very soft and comfortable.",
        date: "2024-02-05",
      },
      { author: "Niko", content: "Sleek design.", date: "2024-02-22" },
      { author: "Sven", content: "Perfect for gym.", date: "2024-03-10" },
      { author: "Elena", content: "Color doesn’t fade.", date: "2024-03-29" },
      { author: "Ivan", content: "Good stretch.", date: "2024-04-08" },
    ],
    detailsTable: [
      { label: "Material composition", value: "95% Cotton, 5% Elastane" },
      {
        label: "Care instructions",
        value: "Machine wash cold, tumble dry low",
      },
      { label: "Fit type", value: "Modern Fit" },
      { label: "Pattern", value: "Solid" },
    ],
    price: 120,
    discountPrice: 90,
  },
  {
    id: "3",
    srcImg: "/images/products/t-shirt-1.webp",
    productName: "CLASSIC TEE",
    rating: 4.6,
    colorsName: [
      { name: "Gray", hex: "#808080" },
      { name: "Beige", hex: "#F5F5DC" },
    ],
    sizes: [
      { name: "Small" },
      { name: "Medium" },
      { name: "Large" },
      { name: "X-Large" },
    ],
    faqs: [
      { title: "Is it breathable?", content: "Yes, designed for airflow." },
      {
        title: "Can I wear it under a jacket?",
        content: "Absolutely, perfect for layering.",
      },
      {
        title: "Does it wrinkle easily?",
        content: "Wrinkle-resistant material.",
      },
      {
        title: "Is it eco-friendly?",
        content: "Made from sustainable cotton.",
      },
      {
        title: "Is it pre-shrunk?",
        content: "Yes, pre-treated to reduce shrinkage.",
      },
    ],
    reviews: [
      { author: "Leo", content: "Soft and classic style.", date: "2024-01-20" },
      {
        author: "Grace",
        content: "Perfect fit for everyday use.",
        date: "2024-01-25",
      },
      { author: "Vlad", content: "Really breathable.", date: "2024-02-15" },
      { author: "Ava", content: "Nice neutral colors.", date: "2024-03-01" },
      { author: "Tom", content: "No wrinkles after wash.", date: "2024-03-10" },
      { author: "Diana", content: "Soft to touch.", date: "2024-04-05" },
    ],
    detailsTable: [
      { label: "Material composition", value: "100% Sustainable Cotton" },
      {
        label: "Care instructions",
        value: "Machine wash warm, air dry recommended",
      },
      { label: "Fit type", value: "Relaxed Fit" },
      { label: "Pattern", value: "Solid" },
    ],
    price: 120,
    discountPrice: 90,
  },
  {
    id: "4",
    srcImg: "/images/products/t-shirt-1.webp",
    productName: "STREET STYLE TEE",
    rating: 4.7,
    colorsName: [
      { name: "Orange", hex: "#FFA500" },
      { name: "Purple", hex: "#800080" },
    ],
    sizes: [
      { name: "Small" },
      { name: "Medium" },
      { name: "Large" },
      { name: "X-Large" },
    ],
    faqs: [
      { title: "Is it slim fit?", content: "Yes, but still comfortable." },
      {
        title: "Can I iron it?",
        content: "Yes, iron inside out at low temperature.",
      },
      {
        title: "Does it have stretch?",
        content: "Slight stretch for comfort.",
      },
      { title: "Will it fade in sunlight?", content: "UV-resistant dye used." },
      { title: "Can I tumble dry?", content: "Yes, on low heat." },
    ],
    reviews: [
      { author: "Noah", content: "Love the bold colors.", date: "2024-01-05" },
      {
        author: "Sophia",
        content: "Great streetwear option.",
        date: "2024-01-18",
      },
      { author: "Max", content: "Really comfy.", date: "2024-02-08" },
      { author: "Zoe", content: "Feels premium.", date: "2024-02-22" },
      {
        author: "Ethan",
        content: "Holds shape after wash.",
        date: "2024-03-15",
      },
      {
        author: "Chloe",
        content: "Gets compliments often.",
        date: "2024-03-28",
      },
    ],
    detailsTable: [
      { label: "Material composition", value: "98% Cotton, 2% Spandex" },
      {
        label: "Care instructions",
        value: "Machine wash cold, tumble dry low",
      },
      { label: "Fit type", value: "Slim Fit" },
      { label: "Pattern", value: "Solid" },
    ],
    price: 120,
    discountPrice: 90,
  },
  {
    id: "5",
    srcImg: "/images/products/t-shirt-1.webp",
    productName: "STREET STYLE TEE",
    rating: 4.7,
    colorsName: [
      { name: "Orange", hex: "#FFA500" },
      { name: "Purple", hex: "#800080" },
    ],
    sizes: [
      { name: "Small" },
      { name: "Medium" },
      { name: "Large" },
      { name: "X-Large" },
    ],
    faqs: [
      { title: "Is it slim fit?", content: "Yes, but still comfortable." },
      {
        title: "Can I iron it?",
        content: "Yes, iron inside out at low temperature.",
      },
      {
        title: "Does it have stretch?",
        content: "Slight stretch for comfort.",
      },
      { title: "Will it fade in sunlight?", content: "UV-resistant dye used." },
      { title: "Can I tumble dry?", content: "Yes, on low heat." },
    ],
    reviews: [
      { author: "Noah", content: "Love the bold colors.", date: "2024-01-05" },
      {
        author: "Sophia",
        content: "Great streetwear option.",
        date: "2024-01-18",
      },
      { author: "Max", content: "Really comfy.", date: "2024-02-08" },
      { author: "Zoe", content: "Feels premium.", date: "2024-02-22" },
      {
        author: "Ethan",
        content: "Holds shape after wash.",
        date: "2024-03-15",
      },
      {
        author: "Chloe",
        content: "Gets compliments often.",
        date: "2024-03-28",
      },
    ],
    detailsTable: [
      { label: "Material composition", value: "98% Cotton, 2% Spandex" },
      {
        label: "Care instructions",
        value: "Machine wash cold, tumble dry low",
      },
      { label: "Fit type", value: "Slim Fit" },
      { label: "Pattern", value: "Solid" },
    ],
    price: 120,
    discountPrice: 90,
  },
  {
    id: "6",
    srcImg: "/images/products/t-shirt-1.webp",
    productName: "STREET STYLE TEE",
    rating: 4.7,
    colorsName: [
      { name: "Orange", hex: "#FFA500" },
      { name: "Purple", hex: "#800080" },
    ],
    sizes: [
      { name: "Small" },
      { name: "Medium" },
      { name: "Large" },
      { name: "X-Large" },
    ],
    faqs: [
      { title: "Is it slim fit?", content: "Yes, but still comfortable." },
      {
        title: "Can I iron it?",
        content: "Yes, iron inside out at low temperature.",
      },
      {
        title: "Does it have stretch?",
        content: "Slight stretch for comfort.",
      },
      { title: "Will it fade in sunlight?", content: "UV-resistant dye used." },
      { title: "Can I tumble dry?", content: "Yes, on low heat." },
    ],
    reviews: [
      { author: "Noah", content: "Love the bold colors.", date: "2024-01-05" },
      {
        author: "Sophia",
        content: "Great streetwear option.",
        date: "2024-01-18",
      },
      { author: "Max", content: "Really comfy.", date: "2024-02-08" },
      { author: "Zoe", content: "Feels premium.", date: "2024-02-22" },
      {
        author: "Ethan",
        content: "Holds shape after wash.",
        date: "2024-03-15",
      },
      {
        author: "Chloe",
        content: "Gets compliments often.",
        date: "2024-03-28",
      },
    ],
    detailsTable: [
      { label: "Material composition", value: "98% Cotton, 2% Spandex" },
      {
        label: "Care instructions",
        value: "Machine wash cold, tumble dry low",
      },
      { label: "Fit type", value: "Slim Fit" },
      { label: "Pattern", value: "Solid" },
    ],
    price: 120,
    discountPrice: 90,
  },
  {
    id: "7",
    srcImg: "/images/products/t-shirt-1.webp",
    productName: "STREET STYLE TEE",
    rating: 4.7,
    colorsName: [
      { name: "Orange", hex: "#FFA500" },
      { name: "Purple", hex: "#800080" },
    ],
    sizes: [
      { name: "Small" },
      { name: "Medium" },
      { name: "Large" },
      { name: "X-Large" },
    ],
    faqs: [
      { title: "Is it slim fit?", content: "Yes, but still comfortable." },
      {
        title: "Can I iron it?",
        content: "Yes, iron inside out at low temperature.",
      },
      {
        title: "Does it have stretch?",
        content: "Slight stretch for comfort.",
      },
      { title: "Will it fade in sunlight?", content: "UV-resistant dye used." },
      { title: "Can I tumble dry?", content: "Yes, on low heat." },
    ],
    reviews: [
      { author: "Noah", content: "Love the bold colors.", date: "2024-01-05" },
      {
        author: "Sophia",
        content: "Great streetwear option.",
        date: "2024-01-18",
      },
      { author: "Max", content: "Really comfy.", date: "2024-02-08" },
      { author: "Zoe", content: "Feels premium.", date: "2024-02-22" },
      {
        author: "Ethan",
        content: "Holds shape after wash.",
        date: "2024-03-15",
      },
      {
        author: "Chloe",
        content: "Gets compliments often.",
        date: "2024-03-28",
      },
    ],
    detailsTable: [
      { label: "Material composition", value: "98% Cotton, 2% Spandex" },
      {
        label: "Care instructions",
        value: "Machine wash cold, tumble dry low",
      },
      { label: "Fit type", value: "Slim Fit" },
      { label: "Pattern", value: "Solid" },
    ],
    price: 120,
    discountPrice: 90,
  },
  {
    id: "8",
    srcImg: "/images/products/t-shirt-1.webp",
    productName: "STREET STYLE TEE",
    rating: 4.7,
    colorsName: [
      { name: "Orange", hex: "#FFA500" },
      { name: "Purple", hex: "#800080" },
    ],
    sizes: [
      { name: "Small" },
      { name: "Medium" },
      { name: "Large" },
      { name: "X-Large" },
    ],
    faqs: [
      { title: "Is it slim fit?", content: "Yes, but still comfortable." },
      {
        title: "Can I iron it?",
        content: "Yes, iron inside out at low temperature.",
      },
      {
        title: "Does it have stretch?",
        content: "Slight stretch for comfort.",
      },
      { title: "Will it fade in sunlight?", content: "UV-resistant dye used." },
      { title: "Can I tumble dry?", content: "Yes, on low heat." },
    ],
    reviews: [
      { author: "Noah", content: "Love the bold colors.", date: "2024-01-05" },
      {
        author: "Sophia",
        content: "Great streetwear option.",
        date: "2024-01-18",
      },
      { author: "Max", content: "Really comfy.", date: "2024-02-08" },
      { author: "Zoe", content: "Feels premium.", date: "2024-02-22" },
      {
        author: "Ethan",
        content: "Holds shape after wash.",
        date: "2024-03-15",
      },
      {
        author: "Chloe",
        content: "Gets compliments often.",
        date: "2024-03-28",
      },
    ],
    detailsTable: [
      { label: "Material composition", value: "98% Cotton, 2% Spandex" },
      {
        label: "Care instructions",
        value: "Machine wash cold, tumble dry low",
      },
      { label: "Fit type", value: "Slim Fit" },
      { label: "Pattern", value: "Solid" },
    ],
    price: 120,
    discountPrice: 90,
  },
  {
    id: "9",
    srcImg: "/images/products/t-shirt-1.webp",
    productName: "STREET STYLE TEE",
    rating: 4.7,
    colorsName: [
      { name: "Orange", hex: "#FFA500" },
      { name: "Purple", hex: "#800080" },
    ],
    sizes: [
      { name: "Small" },
      { name: "Medium" },
      { name: "Large" },
      { name: "X-Large" },
    ],
    faqs: [
      { title: "Is it slim fit?", content: "Yes, but still comfortable." },
      {
        title: "Can I iron it?",
        content: "Yes, iron inside out at low temperature.",
      },
      {
        title: "Does it have stretch?",
        content: "Slight stretch for comfort.",
      },
      { title: "Will it fade in sunlight?", content: "UV-resistant dye used." },
      { title: "Can I tumble dry?", content: "Yes, on low heat." },
    ],
    reviews: [
      { author: "Noah", content: "Love the bold colors.", date: "2024-01-05" },
      {
        author: "Sophia",
        content: "Great streetwear option.",
        date: "2024-01-18",
      },
      { author: "Max", content: "Really comfy.", date: "2024-02-08" },
      { author: "Zoe", content: "Feels premium.", date: "2024-02-22" },
      {
        author: "Ethan",
        content: "Holds shape after wash.",
        date: "2024-03-15",
      },
      {
        author: "Chloe",
        content: "Gets compliments often.",
        date: "2024-03-28",
      },
    ],
    detailsTable: [
      { label: "Material composition", value: "98% Cotton, 2% Spandex" },
      {
        label: "Care instructions",
        value: "Machine wash cold, tumble dry low",
      },
      { label: "Fit type", value: "Slim Fit" },
      { label: "Pattern", value: "Solid" },
    ],
    price: 120,
    discountPrice: 90,
  },
];
