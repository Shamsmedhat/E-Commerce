"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { addNewProduct } from "@/lib/actions/products-actions";

export default function AddProduct() {
  const Schema = z.object({
    category: z
      .string({ required_error: "Category name is required!" })
      .min(2, { message: "Category name must be at least 2 characters long" })
      .max(550, {
        message: "Category name must be at most 20 characters long",
      }),
    subCategory: z
      .string({ required_error: "subCategory name is required!" })
      .min(2, {
        message: "subCategory name must be at least 2 characters long",
      })
      .max(550, {
        message: "subCategory name must be at most 20 characters long",
      }),
    brand: z
      .string({ required_error: "Brand name is required!" })
      .min(2, { message: "Brand name must be at least 2 characters long" })
      .max(550, { message: "Brand name must be at most 20 characters long" }),
    cover: z.string({ required_error: "cover image is required!" }),
    gallery: z.array(
      z.object({
        image: z.string({ required_error: "Product image/s is required!" }),
      }),
    ),
    price: z
      .number({ required_error: "Category name is required!" })
      .positive(),
    stock: z
      .number({ required_error: "Category name is required!" })
      .int({ message: "Stock must be a integer!" })
      .nonnegative({ message: "Stock must be a positive or zero!" }),
    sales: z
      .number({ required_error: "Sales name is required!" })
      .int({ message: "Sales must be a integer!" })
      .nonnegative({ message: "Sales must be a positive or zero!" }),
    translations: z.array(
      z.object({
        language: z.string({ required_error: "Category name is required!" }),
        data: z.object({
          name: z.string({ required_error: "Category name is required!" }),
          overview: z.string({ required_error: "Category name is required!" }),
          details: z.object({
            model: z.string({ required_error: "Category name is required!" }),
          }),
        }),
      }),
    ),
  });
  type Inputs = z.infer<typeof Schema>;

  const form = useForm<Inputs>({
    defaultValues: {
      category: "",
      subCategory: "",
      brand: "",
      cover: "",
      gallery: [{ image: "" }],
      price: 0,
      stock: 0,
      sales: 0,
      translations: [
        {
          language: "",
          data: {
            name: "",
            overview: "",
            details: {
              model: "",
            },
          },
        },
      ],
    },
    resolver: zodResolver(Schema),
  });
  function onSubmit(values: Inputs) {
    console.log(values);
    addNewProduct(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Input placeholder="Category" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subCategory"
          render={({ field }) => (
            <FormItem>
              <FormLabel>SubCategory</FormLabel>
              <FormControl>
                <Input placeholder="SubCategory" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="brand"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Brand</FormLabel>
              <FormControl>
                <Input placeholder="Brand" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="cover"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cover Image</FormLabel>
              <FormControl>
                <Input type="file" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="gallery"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gallery Image&apos;s</FormLabel>
              <FormControl>
                <Input
                  multiple
                  type="file"
                  onChange={(e) => {
                    const files = e.target.files;
                    if (files) {
                      const images = Array.from(files).map((file) => {
                        return { image: URL.createObjectURL(file) };
                      });
                      field.onChange(images);
                    }
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Price"
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="stock"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Stock</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Stock"
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="sales"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sales</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Sales"
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="translations.0.language"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Language</FormLabel>
              <FormControl>
                <Input placeholder="Language" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="translations.0.data.name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Name</FormLabel>
              <FormControl>
                <Input placeholder="Product Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="translations.0.data.overview"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Overview</FormLabel>
              <FormControl>
                <Input placeholder="Overview" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="translations.0.data.details.model"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Model</FormLabel>
              <FormControl>
                <Input placeholder="Model" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
