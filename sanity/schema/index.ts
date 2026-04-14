import { defineType, defineField } from 'sanity';

export const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' }, validation: (R) => R.required() }),
    defineField({
      name: 'category', title: 'Category', type: 'string',
      options: { list: ['vehicle', 'fleet', 'insurance', 'asset', 'caravan', 'personal'] },
    }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
    defineField({ name: 'price', title: 'Price (£)', type: 'number' }),
    defineField({ name: 'compareAtPrice', title: 'Compare At Price (£)', type: 'number' }),
    defineField({ name: 'subscriptionAnnual', title: 'Annual Subscription (£)', type: 'number' }),
    defineField({ name: 'subscriptionMonthly', title: 'Monthly Subscription (£)', type: 'number' }),
    defineField({
      name: 'thatchamCategory', title: 'Thatcham Category', type: 'string',
      options: { list: ['S5', 'S7', 'none'] },
    }),
    defineField({
      name: 'installType', title: 'Install Type', type: 'string',
      options: { list: ['self', 'professional', 'magnetic', 'obd'] },
    }),
    defineField({ name: 'images', title: 'Images', type: 'array', of: [{ type: 'image', options: { hotspot: true } }] }),
    defineField({
      name: 'specs', title: 'Specifications', type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'key', title: 'Label', type: 'string' },
          { name: 'value', title: 'Value', type: 'string' },
        ],
      }],
    }),
    defineField({ name: 'features', title: 'Features', type: 'array', of: [{ type: 'string' }] }),
    defineField({
      name: 'faqs', title: 'FAQs', type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'question', title: 'Question', type: 'string' },
          { name: 'answer', title: 'Answer', type: 'text' },
        ],
      }],
    }),
    defineField({ name: 'isFeatured', title: 'Featured', type: 'boolean', initialValue: false }),
    defineField({ name: 'inStock', title: 'In Stock', type: 'boolean', initialValue: true }),
    defineField({ name: 'seoTitle', title: 'SEO Title', type: 'string' }),
    defineField({ name: 'seoDescription', title: 'SEO Description', type: 'text', rows: 2 }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'category', media: 'images.0' },
  },
});

export const blogPost = defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' }, validation: (R) => R.required() }),
    defineField({ name: 'excerpt', type: 'text', rows: 3 }),
    defineField({ name: 'category', type: 'string' }),
    defineField({ name: 'mainImage', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'body', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'publishedAt', type: 'datetime' }),
    defineField({ name: 'readingTime', type: 'number' }),
    defineField({ name: 'seoTitle', type: 'string' }),
    defineField({ name: 'seoDescription', type: 'text', rows: 2 }),
  ],
  preview: { select: { title: 'title', subtitle: 'category', media: 'mainImage' } },
});

export const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' }, validation: (R) => R.required() }),
    defineField({ name: 'sector', type: 'string' }),
    defineField({ name: 'company', type: 'string' }),
    defineField({ name: 'resultStatement', type: 'string' }),
    defineField({
      name: 'metrics', type: 'array',
      of: [{ type: 'object', fields: [{ name: 'label', type: 'string' }, { name: 'value', type: 'string' }] }],
    }),
    defineField({ name: 'problem', type: 'text' }),
    defineField({ name: 'solution', type: 'text' }),
    defineField({ name: 'results', type: 'text' }),
    defineField({ name: 'mainImage', type: 'image', options: { hotspot: true } }),
  ],
  preview: { select: { title: 'title', subtitle: 'company' } },
});
