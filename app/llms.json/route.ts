import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { generateLLMSJson } from '@/lib/generate-llms';

export async function GET() {
  try {
    // Try to read the pre-generated llms.json file from root
    // In production, this should be generated during prebuild
    const filePath = path.join(process.cwd(), 'llms.json');
    
    let jsonData;
    
    if (fs.existsSync(filePath)) {
      // Read pre-generated file
      try {
        const fileContents = fs.readFileSync(filePath, 'utf8');
        jsonData = JSON.parse(fileContents);
        
        // Log in production for debugging (only if file exists)
        if (process.env.NODE_ENV === 'production') {
          console.log(`✅ Serving llms.json from ${filePath} (${(fileContents.length / 1024).toFixed(2)} KB)`);
        }
      } catch (parseError) {
        console.error('Error parsing llms.json:', parseError);
        // Fallback to generating on-the-fly if file is corrupted
        jsonData = await generateLLMSJson();
      }
    } else {
      // Fallback: generate on-the-fly if file doesn't exist
      // This should only happen in development or if prebuild failed
      console.warn(`⚠️ llms.json not found at ${filePath}, generating on-the-fly...`);
      jsonData = await generateLLMSJson();
    }

    return NextResponse.json(jsonData, {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('Error reading llms.json:', error);
    return NextResponse.json(
      { 
        error: 'Failed to read llms.json',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

