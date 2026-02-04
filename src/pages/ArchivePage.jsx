import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  ArchiveGrid,
  ArchiveDetail,
  FilterSidebar,
} from '../components/archive';
import { useActivations } from '../hooks/useActivations';

export default function ArchivePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedActivation, setSelectedActivation] = useState(null);

  const activeCategory = searchParams.get('category') || 'all';

  // Use the hook that fetches from Sanity (with fallback to static data)
  const { activations: filteredActivations, loading } = useActivations(activeCategory);

  const handleCategoryChange = (category) => {
    if (category === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  const handleCardClick = (activation) => {
    setSelectedActivation(activation);
  };

  const handleCloseDetail = () => {
    setSelectedActivation(null);
  };

  const styles = {
    container: {
      minHeight: '100vh',
      padding: '100px 24px 60px',
    },
    layout: {
      display: 'flex',
      gap: '24px',
      maxWidth: '1600px',
      margin: '0 auto',
    },
    content: {
      flex: 1,
      minWidth: 0,
    },
  };

  // Responsive styles for mobile
  const responsiveStyles = `
    @media (max-width: 900px) {
      .archive-layout {
        flex-direction: column !important;
      }
      .archive-sidebar {
        position: static !important;
        width: 100% !important;
        margin-bottom: 24px;
      }
    }
  `;

  return (
    <div style={styles.container}>
      <style>{responsiveStyles}</style>
      <div className="archive-layout" style={styles.layout}>
        <div className="archive-sidebar">
          <FilterSidebar
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />
        </div>

        <div style={styles.content}>
          <ArchiveGrid
            activations={filteredActivations}
            onCardClick={handleCardClick}
          />
        </div>
      </div>

      <ArchiveDetail
        activation={selectedActivation}
        isOpen={!!selectedActivation}
        onClose={handleCloseDetail}
      />
    </div>
  );
}
