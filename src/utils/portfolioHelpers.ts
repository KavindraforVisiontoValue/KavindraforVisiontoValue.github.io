import {
  AI_ERA_CAPABILITIES,
  GALLERY_PHOTOS,
  NAV_ITEMS,
  PROJECTS,
  type AICapabilityDetail,
  type GalleryCategory,
  type GalleryPhoto,
  type ProjectItem,
} from '../data/portfolioData';

export function filterGalleryPhotos(
  photos: GalleryPhoto[],
  category: GalleryCategory
): GalleryPhoto[] {
  if (category === 'All') {
    return photos;
  }
  return photos.filter((photo) => photo.category === category);
}

export function filterProjectsByDiscipline(
  projects: ProjectItem[],
  discipline: 'All' | ProjectItem['discipline']
): ProjectItem[] {
  if (discipline === 'All') {
    return projects;
  }
  return projects.filter((project) => project.discipline === discipline);
}

export function getCapabilityByIndex(
  capabilities: AICapabilityDetail[],
  index: string
): AICapabilityDetail {
  return (
    capabilities.find((item) => item.index === index) ??
    capabilities[0] ??
    AI_ERA_CAPABILITIES[0]
  );
}

export function getAdjacentGalleryIndex(
  currentIndex: number,
  direction: 'next' | 'prev',
  total: number
): number {
  if (total <= 0) return 0;
  if (direction === 'next') {
    return (currentIndex + 1) % total;
  }
  return (currentIndex - 1 + total) % total;
}

export function isValidNavSection(sectionId: string): boolean {
  return NAV_ITEMS.some((item) => item.id === sectionId);
}

export function getGalleryCategoryCount(
  photos: GalleryPhoto[] = GALLERY_PHOTOS
): Record<GalleryCategory, number> {
  const counts: Record<GalleryCategory, number> = {
    All: photos.length,
    'Speaking & Presentations': 0,
    'Product Demonstrations': 0,
    'Knowledge Sharing': 0,
    'Professional Moments': 0,
  };
  for (const photo of photos) {
    counts[photo.category] += 1;
  }
  return counts;
}

export function getProjectDisciplineCount(
  projects: ProjectItem[] = PROJECTS
): Record<'All' | ProjectItem['discipline'], number> {
  const counts: Record<'All' | ProjectItem['discipline'], number> = {
    All: projects.length,
    'Product Ownership': 0,
    'Business Analysis': 0,
    'Project Delivery': 0,
  };
  for (const project of projects) {
    counts[project.discipline] += 1;
  }
  return counts;
}
