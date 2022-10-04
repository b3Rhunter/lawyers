import algoliasearch from 'algoliasearch';
import sanityClient from "../client.js";
import indexer, { flattenBlocks } from 'sanity-algolia';

const algolia = algoliasearch('VZG39PWRA5', 'a6d1b7308375b492a611e00ca3ff945a');
const sanity = sanityClient;

export default function handler(req, res) {
  const sanityAlgolia = indexer(
    {
      post: {
        index: algolia.initIndex('posts'),
      },
    },
    document => {
      switch (document._type) {
        case 'post':
          return {
            title: document.title,
            path: document.slug.current,
            publishedAt: document.publishedAt,
            excerpt: flattenBlocks(document.excerpt),
          };
        default:
          throw new Error(`Unknown type: ${document.type}`);
      }
    }
  );

  return sanityAlgolia
    .webhookSync(sanity, req.body)
    .then(() => res.status(200).send('ok'));
}