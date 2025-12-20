
import fs from 'fs';
import path from 'path';

function walkDir(dir: string, callback: (filePath: string) => void) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        try {
            const stat = fs.statSync(filePath);
            if (stat.isDirectory()) {
                walkDir(filePath, callback);
            } else {
                callback(filePath);
            }
        } catch (e) {
            // ignore
        }
    }
}

const appDir = path.join(process.cwd(), 'app');
const missingCanonical: string[] = [];

console.log('Scanning app directory for pages missing canonical tags...');

walkDir(appDir, (filePath) => {
    if (path.basename(filePath) === 'page.tsx') {
        const content = fs.readFileSync(filePath, 'utf-8');

        // Check if it uses generateSEOMetadata
        if (content.includes('generateSEOMetadata')) {
            // Check if it has pathname or canonical
            const hasPathname = /pathname\s*:/.test(content);
            const hasCanonical = /canonical\s*:/.test(content);
            const hasSlug = /slug\s*:\s*['"`]/.test(content); // imprecise, but sometimes used

            if (!hasPathname && !hasCanonical) {
                missingCanonical.push(filePath + " (uses generateSEOMetadata but missing pathname/canonical)");
            }
        } else {
            // Does not use generateSEOMetadata
            // Check if it exports metadata
            const hasMetadataExport = /export\s+const\s+metadata\s*[:=]/.test(content);
            if (hasMetadataExport) {
                // Check if it has canonical
                const hasCanonicalIndex = /canonical\s*:/.test(content);
                const hasAlternates = /alternates\s*:/.test(content);

                if (!hasCanonicalIndex && !hasAlternates) {
                    missingCanonical.push(filePath + " (exports metadata without canonical helper)");
                }
            } else {
                // No metadata export. Relying on layout?
                // If it's a dynamic path like [slug]/page.tsx it might use generateMetadata export.
                const hasGenerateMetadata = /export\s+.*generateMetadata/.test(content);
                if (hasGenerateMetadata) {
                    const hasCanonicalGen = /canonical\s*:/.test(content);
                    const hasPathnameGen = /pathname\s*:/.test(content);
                    if (!hasCanonicalGen && !hasPathnameGen) {
                        missingCanonical.push(filePath + " (generateMetadata missing canonical/pathname)");
                    }
                } else {
                    // Plain page with no metadata export
                    missingCanonical.push(filePath + " (no metadata export)");
                }
            }
        }
    }
});

console.log(`Found ${missingCanonical.length} potentially missing canonical tags:`);
missingCanonical.forEach(f => console.log(path.relative(process.cwd(), f)));
