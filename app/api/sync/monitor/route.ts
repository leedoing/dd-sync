import { NextResponse } from 'next/server';
import { syncMonitors } from '@/lib/datadog-service';

export async function POST() {
  try {
    const result = await syncMonitors();
    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error('Monitor sync error:', error);
    
    const errorMessage = error instanceof Error 
      ? error.message 
      : 'Failed to sync monitors';

    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
} 