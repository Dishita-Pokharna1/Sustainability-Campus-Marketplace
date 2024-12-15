import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ListItemPage() {
  return (
    <div className="container mx-auto max-w-2xl px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">List an Item</h1>
      <form className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Item Title</Label>
          <Input id="title" placeholder="Enter the title of your item" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="books">Books & Study Materials</SelectItem>
              <SelectItem value="electronics">Electronics</SelectItem>
              <SelectItem value="furniture">Furniture</SelectItem>
              <SelectItem value="sports">Sports Equipment</SelectItem>
              <SelectItem value="lab">Lab Equipment</SelectItem>
              <SelectItem value="stationery">Stationery</SelectItem>
              <SelectItem value="clothing">Clothing</SelectItem>
              <SelectItem value="others">Others</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="price">Price (₹)</Label>
          <Input id="price" type="number" placeholder="Enter the price" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" placeholder="Describe your item" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="image">Upload Images</Label>
          <Input id="image" type="file" multiple />
        </div>
        <Button type="submit" className="w-full">List Item</Button>
      </form>
    </div>
  )
}

