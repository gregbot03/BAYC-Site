import { useState, useEffect } from 'react';
import {
  fetchActivations,
  fetchActivationsByCategory,
  fetchCategoryCounts,
  urlFor,
} from '../services/sanity';
import { activations as fallbackActivations, getCategoryCounts as getFallbackCounts } from '../components/archive/archiveData';

// Check if Sanity is configured
const isSanityConfigured = () => {
  const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
  return projectId && projectId !== 'your-project-id';
};

// Transform Sanity activation to match existing data structure
function transformActivation(sanityActivation) {
  return {
    id: sanityActivation.slug?.current || sanityActivation._id,
    title: sanityActivation.title,
    category: sanityActivation.category,
    year: sanityActivation.year || 2024,
    thumbnail: sanityActivation.thumbnail
      ? urlFor(sanityActivation.thumbnail).width(600).height(600).url()
      : '/placeholder.jpg',
    images: sanityActivation.images
      ? sanityActivation.images.map((img) => urlFor(img).width(1200).url())
      : [],
    description: sanityActivation.description || '',
    links: sanityActivation.links || [],
    featured: sanityActivation.featured || false,
  };
}

export function useActivations(category = 'all') {
  const [activations, setActivations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadActivations() {
      // Use fallback data if Sanity isn't configured
      if (!isSanityConfigured()) {
        const filtered = category === 'all'
          ? fallbackActivations
          : fallbackActivations.filter((a) => a.category === category);
        setActivations(filtered);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const data = await fetchActivationsByCategory(category);
        setActivations(data.map(transformActivation));
        setError(null);
      } catch (err) {
        console.error('Error fetching activations:', err);
        setError(err);
        // Fall back to static data on error
        const filtered = category === 'all'
          ? fallbackActivations
          : fallbackActivations.filter((a) => a.category === category);
        setActivations(filtered);
      } finally {
        setLoading(false);
      }
    }

    loadActivations();
  }, [category]);

  return { activations, loading, error };
}

export function useCategoryCounts() {
  const [counts, setCounts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCounts() {
      // Use fallback if Sanity isn't configured
      if (!isSanityConfigured()) {
        setCounts(getFallbackCounts());
        setLoading(false);
        return;
      }

      try {
        const data = await fetchCategoryCounts();
        setCounts(data);
      } catch (err) {
        console.error('Error fetching category counts:', err);
        setCounts(getFallbackCounts());
      } finally {
        setLoading(false);
      }
    }

    loadCounts();
  }, []);

  return { counts, loading };
}
