import { TrolleyIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const productType = defineType({
    name: 'product',
    title: 'Products',
    type: 'document',
    icon:TrolleyIcon,
    fields: [
        defineField({
            name:"name",
            title:"Product Name",
            type:"string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name:"image",
            title:"Product Image",
            type:"image",
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name:"price",
            title:"Product Price",
            type:"number",
            validation: (Rule) => Rule.required().min(0),
        }),
        defineField({
            name:"description",
            title:"Product Description",
            type:"blockContent",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name:"category",
            title:"Product Category",
            type:"array",
           of: [{type: "reference", to: [{type: "category"}]}],
        }),
        defineField({
            name:"slug",
            title:"Product Slug",
            type:"slug",
            options: {
                source: "name",
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }) ,
        defineField({
            name:"stock",
            title:"Stock",
            type:"number",
            validation: (Rule) => Rule.min(0),
        }),
        
    ],
    preview: {
        select: {
            title: "name",
            media: "image",
            subtitle:"price",
        },
        prepare({ title, media, subtitle }) {
            return {
                title,
                media,
                subtitle: `Price: $${subtitle}`,
            };
        },
    },
})