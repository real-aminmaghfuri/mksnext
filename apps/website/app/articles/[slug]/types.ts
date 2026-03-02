
import type { Metadata, ResolvingMetadata } from 'next';

export type ArticlePageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};
