import test from 'node:test';
import assert from 'node:assert/strict';
import {
  AI_ERA_CAPABILITIES,
  GALLERY_PHOTOS,
  PROJECTS,
} from '../data/portfolioData';
import {
  filterGalleryPhotos,
  filterProjectsByDiscipline,
  getAdjacentGalleryIndex,
  getCapabilityByIndex,
  getGalleryCategoryCount,
  getProjectDisciplineCount,
  isValidNavSection,
} from './portfolioHelpers';

test('filterGalleryPhotos returns all photos for All and filters specific categories', () => {
  const all = filterGalleryPhotos(GALLERY_PHOTOS, 'All');
  assert.equal(all.length, GALLERY_PHOTOS.length);

  const speaking = filterGalleryPhotos(GALLERY_PHOTOS, 'Speaking & Presentations');
  assert.ok(speaking.length > 0);
  assert.ok(speaking.every((p) => p.category === 'Speaking & Presentations'));

  const knowledge = filterGalleryPhotos(GALLERY_PHOTOS, 'Knowledge Sharing');
  assert.equal(knowledge.length, 2);
});

test('filterProjectsByDiscipline filters projects accurately by role discipline', () => {
  const all = filterProjectsByDiscipline(PROJECTS, 'All');
  assert.equal(all.length, 7);

  const po = filterProjectsByDiscipline(PROJECTS, 'Product Ownership');
  assert.equal(po.length, 2);
  assert.deepEqual(
    po.map((p) => p.title),
    ['Enadoc', 'Flowdoh']
  );

  const pm = filterProjectsByDiscipline(PROJECTS, 'Project Delivery');
  assert.equal(pm.length, 2);
});

test('getAdjacentGalleryIndex wraps cleanly in both directions', () => {
  assert.equal(getAdjacentGalleryIndex(0, 'prev', 8), 7);
  assert.equal(getAdjacentGalleryIndex(7, 'next', 8), 0);
  assert.equal(getAdjacentGalleryIndex(3, 'next', 8), 4);
  assert.equal(getAdjacentGalleryIndex(0, 'next', 0), 0);
});

test('getCapabilityByIndex resolves matching capability or falls back safely', () => {
  const cap = getCapabilityByIndex(AI_ERA_CAPABILITIES, '04');
  assert.equal(cap.networkLabel, 'Solution Thinking');

  const fallback = getCapabilityByIndex(AI_ERA_CAPABILITIES, '99');
  assert.equal(fallback.index, '01');
});

test('category and discipline counts sum to total items', () => {
  const galleryCounts = getGalleryCategoryCount(GALLERY_PHOTOS);
  assert.equal(
    galleryCounts['Speaking & Presentations'] +
      galleryCounts['Product Demonstrations'] +
      galleryCounts['Knowledge Sharing'] +
      galleryCounts['Professional Moments'],
    galleryCounts.All
  );

  const projectCounts = getProjectDisciplineCount(PROJECTS);
  assert.equal(
    projectCounts['Product Ownership'] +
      projectCounts['Business Analysis'] +
      projectCounts['Project Delivery'],
    projectCounts.All
  );
});

test('isValidNavSection validates portfolio navigation IDs', () => {
  assert.equal(isValidNavSection('home'), true);
  assert.equal(isValidNavSection('in-action'), true);
  assert.equal(isValidNavSection('nonexistent'), false);
});
