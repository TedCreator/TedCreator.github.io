import { Metadata } from 'next';

import PDF from './pdf'


export const metadata: Metadata = {
  title: 'TedCreator::Resume',
  description: 'This page hosts an embedded view of my resume, including a download link.',
}


export default function Page() {
  return <PDF />;
}