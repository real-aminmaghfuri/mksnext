
"use client";

import React from 'react';
import { Button } from 'ui';
import { MoveRight } from 'lucide-react';

export default function WriterRedirect() {
  return (
    <div className="flex h-screen items-center justify-center bg-zinc-50 dark:bg-black text-center p-6">
        <div className="max-w-md">
            <h1 className="text-2xl font-black mb-4">Fitur Dipindahkan!</h1>
            <p className="text-zinc-500 mb-8">
                Demi keamanan operasional, fitur <strong>AI Writer & Content Management</strong> telah dipindahkan ke markas khusus (MKS.MEDIA).
            </p>
            <Button 
                onClick={() => window.location.href = 'http://localhost:3002'} // Assuming CMS runs on port 3002
                className="font-bold"
            >
                Buka MKS.MEDIA <MoveRight className="ml-2" size={18}/>
            </Button>
        </div>
    </div>
  );
}
