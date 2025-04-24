import { lazy } from 'react';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from 'react-router-dom';
import PATHS  from './paths';

const NotFound = lazy(() => import('./NotFound'));
const Index = lazy(() => import('./Index'));
const About = lazy(() => import('./about/About'));
const Contact = lazy(() => import('./Contact'));
const Gallery = lazy(() => import('./Gallery'));
const Mission = lazy(() => import('./about/Mission'));
const Vision = lazy(() => import('./about/Vision'));
const WhatWeDo = lazy(() => import('./about/WhatWeDo'));
const Goals = lazy(() => import('./about/Goals'));


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={PATHS.index} element={<Index />} />
      <Route path={PATHS.about.index} element={<About />} />
      <Route path={PATHS.about.mission} element={<Mission />} />
      <Route path={PATHS.about.vision} element={<Vision />} />
      <Route path={PATHS.about.whatWeDo} element={<WhatWeDo />} />
      <Route path={PATHS.about.goals} element={<Goals />} />
      <Route path={PATHS.gallery} element={<Gallery />} />
      <Route path={PATHS.contact} element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </>
  )
);
export default router;
