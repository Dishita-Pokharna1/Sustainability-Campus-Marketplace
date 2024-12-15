import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"

const featuredItems = [
  {
    id: 1,
    name: "Engineering Textbook",
    description: "Latest edition for core subjects",
    price: 799,
    image: "https://example.com/textbook-image.jpg",
  },
  {
    id: 2,
    name: "Laptop",
    description: "High-performance laptop for students",
    price: 45000,
    image: "https://example.com/laptop-image.jpg",
  },
  {
    id: 3,
    name: "Scientific Calculator",
    description: "Advanced calculator for engineering students",
    price: 1500,
    image: "https://example.com/calculator-image.jpg",
  },
  {
    id: 4,
    name: "Lab Coat",
    description: "Standard white lab coat for practical sessions",
    price: 500,
    image: "https://example.com/labcoat-image.jpg",
  },
]

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      {/* Hero Section */}
      <section className="bg-green-50 py-16">
        <div className="container px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold text-green-800 md:text-5xl">
            DTU Sustainable Marketplace
          </h1>
          <p className="mb-8 text-lg text-green-700">
            Buy, sell, or donate items within the DTU community. Join us in reducing waste and promoting sustainability.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/categories">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Start Browsing
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="container px-4">
        <Tabs defaultValue="all" className="w-full">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Featured Items</h2>
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="sale">For Sale</TabsTrigger>
              <TabsTrigger value="donation">Donations</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="all" className="mt-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {featuredItems.map((item) => (
                <Card key={item.id}>
                  <CardHeader className="p-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={400}
                      height={200}
                      className="aspect-[2/1] rounded-t-lg object-cover"
                    />
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="line-clamp-1 text-lg">{item.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <div className="flex w-full items-center justify-between">
                      <span className="font-bold text-green-600">₹{item.price}</span>
                      <Link href={`/item/${item.id}`}>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Categories */}
      <section className="container px-4">
        <h2 className="mb-6 text-2xl font-bold">Browse Categories</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[
            "Books & Study Materials",
            "Electronics",
            "Furniture",
            "Sports Equipment",
            "Lab Equipment",
            "Stationery",
            "Clothing",
            "Others",
          ].map((category) => (
            <Link
              key={category}
              href={`/category/${category.toLowerCase().replace(/ /g, "-")}`}
              className="group relative overflow-hidden rounded-lg bg-green-50 p-6 transition-colors hover:bg-green-100"
            >
              <h3 className="font-semibold text-green-800">{category}</h3>
              <p className="text-sm text-green-600">Browse items →</p>
            </Link>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-green-50 py-16">
        <div className="container px-4">
          <h2 className="mb-8 text-center text-2xl font-bold">How It Works</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white">1</div>
              </div>
              <h3 className="mb-2 font-semibold">List Your Items</h3>
              <p className="text-sm text-muted-foreground">
                Create a listing for items you want to sell or donate. Add photos and descriptions.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white">2</div>
              </div>
              <h3 className="mb-2 font-semibold">Connect with Buyers</h3>
              <p className="text-sm text-muted-foreground">
                Interested buyers will contact you through our secure messaging system.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white">3</div>
              </div>
              <h3 className="mb-2 font-semibold">Complete the Transaction</h3>
              <p className="text-sm text-muted-foreground">
                Meet on campus to exchange items and complete the transaction safely.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

