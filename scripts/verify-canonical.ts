
import { buildCanonical } from '../lib/seo-utils';
import { getBaseUrl } from '../lib/site-config';

console.log('Base URL:', getBaseUrl());
console.log('Canonical for /:', buildCanonical('/'));
console.log('Canonical for /blog/post:', buildCanonical('/blog/post'));

const base = getBaseUrl();
if (base.includes('www.nearbypetcare.com')) {
    console.log('SUCCESS: Base URL uses www');
} else {
    console.error('FAILURE: Base URL does not use www');
}

const canonical = buildCanonical('/blog/test');
if (canonical.includes('www.nearbypetcare.com')) {
    console.log('SUCCESS: Generated canonical uses www');
} else {
    console.error('FAILURE: Generated canonical does not use www');
}
