import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Sanity client configuration
// You'll get these values from your Sanity project dashboard
export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'your-project-id',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true, // Enable CDN for faster reads
});

// Image URL builder for Sanity images
const builder = imageUrlBuilder(sanityClient);

export function urlFor(source) {
  return builder.image(source);
}

// Fetch all activations from Sanity
export async function fetchActivations() {
  const query = `*[_type == "activation"] | order(date desc) {
    _id,
    title,
    slug,
    category,
    date,
    description,
    thumbnail,
    images,
    links
  }`;

  return sanityClient.fetch(query);
}

// Fetch activations by category
export async function fetchActivationsByCategory(category) {
  if (category === 'all') {
    return fetchActivations();
  }

  const query = `*[_type == "activation" && category == $category] | order(date desc) {
    _id,
    title,
    slug,
    category,
    date,
    description,
    thumbnail,
    images,
    links
  }`;

  return sanityClient.fetch(query, { category });
}

// Fetch single activation by slug
export async function fetchActivationBySlug(slug) {
  const query = `*[_type == "activation" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    category,
    date,
    description,
    thumbnail,
    images,
    links
  }`;

  return sanityClient.fetch(query, { slug });
}

// Fetch category counts for sidebar
export async function fetchCategoryCounts() {
  const query = `{
    "all": count(*[_type == "activation"]),
    "collabs": count(*[_type == "activation" && category == "collabs"]),
    "drops": count(*[_type == "activation" && category == "drops"]),
    "events": count(*[_type == "activation" && category == "events"]),
    "physical": count(*[_type == "activation" && category == "physical"]),
    "content": count(*[_type == "activation" && category == "content"])
  }`;

  return sanityClient.fetch(query);
}
